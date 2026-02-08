import { LitElement, html, css } from "lit-element";

class CalcioLiveTeamNextCard extends LitElement {
  static get properties() {
    return {
      hass: {},
      _config: {},
      showPopup: { type: Boolean },
      activeMatch: { type: Object },
      _eventSubscription: { type: Object },
      _eventSubscriptions: { type: Array },
      _hasRecentEvent: { type: Boolean },
    };
  }

  setConfig(config) {
    if (!config.entity) {
      throw new Error("Devi definire un'entità");
    }
    this._config = config;
    this.showPopup = false;
    this.activeMatch = null;
    this._hasRecentEvent = false;
  }

  connectedCallback() {
    super.connectedCallback();
    this._subscribeToEvents();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this._eventSubscriptions && Array.isArray(this._eventSubscriptions)) {
      this._eventSubscriptions.forEach(sub => {
        if (sub) sub.unsubscribe();
      });
      this._eventSubscriptions = [];
    }
  }

  _subscribeToEvents() {
    if (!this.hass || !this.hass.connection) {
      return;
    }
    this._eventSubscriptions = [];
    this._eventSubscriptions.push(
      this.hass.connection.subscribeEvents(
        this._handleCalcioLiveEvent.bind(this),
        'calcio_live_goal'
      )
    );
    this._eventSubscriptions.push(
      this.hass.connection.subscribeEvents(
        this._handleCalcioLiveEvent.bind(this),
        'calcio_live_yellow_card'
      )
    );
    this._eventSubscriptions.push(
      this.hass.connection.subscribeEvents(
        this._handleCalcioLiveEvent.bind(this),
        'calcio_live_red_card'
      )
    );
  }

  _handleCalcioLiveEvent(event) {
    const eventType = event.event_type;
    const eventData = event.data;
    this._showEventToast(eventType, eventData);
    this._hasRecentEvent = true;
    this.requestUpdate();
    setTimeout(() => {
      this._hasRecentEvent = false;
      this.requestUpdate();
    }, 5000);
  }

  _showEventToast(eventType, eventData) {
    let message = '';
    if (eventType === 'calcio_live_goal') {
      message = `🔥 GOAL! ${eventData.player} - ${eventData.home_team} ${eventData.home_score} - ${eventData.away_score} ${eventData.away_team}`;
    } else if (eventType === 'calcio_live_yellow_card') {
      message = `🟨 Cartellino Giallo: ${eventData.player}${eventData.minute ? ` (${eventData.minute}')` : ''}`;
    } else if (eventType === 'calcio_live_red_card') {
      message = `🟥 Cartellino Rosso: ${eventData.player}${eventData.minute ? ` (${eventData.minute}')` : ''}`;
    }
    if (message && this.hass) {
      this.hass.callService('persistent_notification', 'create', {
        message: message,
        title: 'CalcioLive',
      }).catch(() => {
        console.log('CalcioLive Event:', message);
      });
    }
  }

  getCardSize() {
    return 3;
  }

  static getConfigElement() {
    return document.createElement("calcio-live-team-editor");
  }

  static getStubConfig() {
    return {
      entity: "sensor.calcio_live",
    };
  }

  getMatchStatusText(match) {
    if (match.completed) {
      return `${match.home_score} - ${match.away_score} (Full Time)`;
    }
    if (match.period === 1 || match.period === 2) {
      return `${match.home_score} - ${match.away_score} (${match.clock})`;
    }
    if (match.status === 'Scheduled') {
      return `${match.date}`;
    }
    return 'Dati non disponibili';
  }

  showDetails(match) {
    console.log("Dettagli partita:", match);
    this.activeMatch = match;
    this.showPopup = true;
  }
  

  closePopup() {
    this.showPopup = false;
  }

  separateEvents(details) {
    const goals = [];
    const yellowCards = [];
    const redCards = [];

    details.forEach(event => {
      if (event.includes('Goal') || event.includes('Penalty - Scored')) {
        goals.push(event);
      } else if (event.includes('Yellow Card')) {
        yellowCards.push(event);
      } else if (event.includes('Red Card')) {
        redCards.push(event);
      }
    });

    return { goals, yellowCards, redCards };
  }

  renderMatchDetails(details, clock, match) {
    if (!details || details.length === 0) {
      return html`<p>Nessun dettaglio disponibile.</p>`;
    }

    // Gestione degli stati della partita
    const matchState = match.status || 'Stato sconosciuto';
    let stateText;

    switch (matchState) {
      case 'First Half':
        stateText = `Primo Tempo (${clock})`;
        break;
      case 'Second Half':
        stateText = `Secondo Tempo (${clock})`;
        break;
      case 'Halftime':
        stateText = `Intervallo`;
        break;
      case 'Scheduled':
        stateText = `Programmata per il ${match.date}`;
        break;
      case 'Full Time':
        stateText = `Tempo Regolamentare Concluso`;
        break;
      case 'Extra Time':
        stateText = `Tempi Supplementari (${clock})`;
        break;
      case 'Penalties':
        stateText = `Calci di Rigore (${clock})`;
        break;
      default:
        stateText = `Stato: ${matchState}`;
    }

    return html`
      <p><strong>Stato Partita:</strong> ${stateText}</p>
      ${this.renderMatchEvents(details)}
    `;
  }

  renderMatchEvents(details) {
    const { goals, yellowCards, redCards } = this.separateEvents(details);

    return html`
      ${goals.length > 0
        ? html`
            <div class="event-section">
              <h5 class="event-title">Goal</h5>
              <ul class="goal-details">
                ${goals.map(goal => html`<li>${goal}</li>`)}
              </ul>
            </div>`
        : ''}
      ${yellowCards.length > 0
        ? html`
            <div class="event-section">
              <h5 class="event-title">Cartellini Gialli</h5>
              <ul class="yellow-card-details">
                ${yellowCards.map(card => html`<li>${card}</li>`)}
              </ul>
            </div>`
        : ''}
      ${redCards.length > 0
        ? html`
            <div class="event-section">
              <h5 class="event-title">Cartellini Rossi</h5>
              <ul class="red-card-details">
                ${redCards.map(card => html`<li>${card}</li>`)}
              </ul>
            </div>`
        : ''}
    `;
  }

  render() {
    if (!this.hass || !this._config) {
      return html``;
    }

    const entityId = this._config.entity;
    const stateObj = this.hass.states[entityId];

    if (!stateObj) {
      return html`<ha-card>Entità sconosciuta: ${entityId}</ha-card>`;
    }

    if (!stateObj.attributes.matches || stateObj.attributes.matches.length === 0) {
      return html`<ha-card>Nessuna partita disponibile</ha-card>`;
    }

    const match = stateObj.attributes.matches[0];
    


    return html`
      <ha-card class="${this._hasRecentEvent ? 'event-highlight' : ''}">
        <div class="background-logos">
          <div class="background-logo home-logo">
            <img src="${match.home_logo}" alt="Logo squadra di casa" />
          </div>
          <div class="background-logo away-logo">
            <img src="${match.away_logo}" alt="Logo squadra ospite" />
          </div>
        </div>
        <div class="match-wrapper">
          <div class="match-header">
            <div class="match-competition">
              ${match.venue} | <span class="match-date">${match.date}</span>
              ${match.status !== 'Scheduled' 
                ? html`<span class="info-icon" @click="${() => this.showDetails(match)}">Info</span>`
                : ''}
            </div>
          </div>
          <div class="match">
            <img class="team-logo" src="${match.home_logo}" alt="${match.home_team}" />
            <div class="match-info">
              <div class="team-name">${match.home_team}</div>
                <div class="match-result">
                ${this.getMatchStatusText(match)} <!-- Mostra lo stato e il risultato -->
                </div>
              <div class="team-name">${match.away_team}</div>
            </div>
            <img class="team-logo" src="${match.away_logo}" alt="${match.away_team}" />
          </div>
        </div>
      </ha-card>
    `;
  }

  updated(changedProperties) {
    if (changedProperties.has('showPopup') || changedProperties.has('activeMatch')) {
      this.renderPopupToBody();
    }
  }

  renderPopupToBody() {
    if (!this.showPopup || !this.activeMatch) {
      const existingPopup = document.getElementById('calcio-live-team-popup');
      if (existingPopup) {
        existingPopup.remove();
      }
      return;
    }

    let popupContainer = document.getElementById('calcio-live-team-popup');
    if (!popupContainer) {
      popupContainer = document.createElement('div');
      popupContainer.id = 'calcio-live-team-popup';
      popupContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 999999;
        background: rgba(0, 0, 0, 0.6);
        overflow: auto;
      `;
      popupContainer.addEventListener('click', (e) => {
        if (e.target === popupContainer) {
          this.showPopup = false;
        }
      });
      document.body.appendChild(popupContainer);
    }

    popupContainer.innerHTML = `
      <div style="background: white; padding: 20px; border-radius: 12px; width: 90%; max-width: 550px; max-height: 80vh; overflow-y: auto; border: 4px solid #1f5cff; box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4); margin: auto; color: #333;">
        <h3 style="color: #1f5cff; margin-top: 0; margin-bottom: 16px; font-size: 20px; border-bottom: 2px solid #1f5cff; padding-bottom: 10px;">Dettagli Partita</h3>
        <div style="display: flex; justify-content: center; align-items: center; margin-bottom: 20px;">
          <img style="width: 70px; height: 70px; margin: 0 15px; border-radius: 8px;" src="${this.activeMatch.home_logo}" alt="${this.activeMatch.home_team}" />
          <div style="text-align: center;">
            <div style="font-size: 32px; font-weight: bold; color: #1f5cff; margin-bottom: 8px;">${this.activeMatch.home_score ?? '-'} - ${this.activeMatch.away_score ?? '-'}</div>
            <span style="font-size: 14px; color: #666;">${this.activeMatch.clock ?? this.getMatchStatusText(this.activeMatch)}</span>
          </div>
          <img style="width: 70px; height: 70px; margin: 0 15px; border-radius: 8px;" src="${this.activeMatch.away_logo}" alt="${this.activeMatch.away_team}" />
        </div>
        <p style="text-align: center; color: #666; font-size: 14px; margin: 8px 0;"><strong style="color: #333;">${this.activeMatch.home_team}</strong> vs <strong style="color: #333;">${this.activeMatch.away_team}</strong></p>
        <p style="color: #333;"><strong style="color: #333;">Formazione Casa:</strong> <span style="color: #2ecc71; font-weight: bold;">${this.activeMatch.home_form}</span></p>
        <p style="color: #333;"><strong style="color: #333;">Formazione Trasferta:</strong> <span style="color: #e74c3c; font-weight: bold;">${this.activeMatch.away_form}</span></p>
        <p style="margin-top: 15px; color: #333;"><strong style="color: #1f5cff;">Statistiche Casa:</strong></p>
        <ul style="margin: 8px 0; padding-left: 20px; list-style: none;">
          <li style="padding: 4px 0; color: #333;">Possesso Palla: <span style="color: #1f5cff; font-weight: bold;">${this.activeMatch.home_statistics?.possessionPct ?? 'N/A'}%</span></li>
          <li style="padding: 4px 0; color: #333;">Tiri Totali: <span style="color: #1f5cff; font-weight: bold;">${this.activeMatch.home_statistics?.totalShots ?? 'N/A'}</span></li>
          <li style="padding: 4px 0; color: #333;">Tiri in Porta: <span style="color: #1f5cff; font-weight: bold;">${this.activeMatch.home_statistics?.shotsOnTarget ?? 'N/A'}</span></li>
          <li style="padding: 4px 0; color: #333;">Falli Comessi: <span style="color: #1f5cff; font-weight: bold;">${this.activeMatch.home_statistics?.foulsCommitted ?? 'N/A'}</span></li>
          <li style="padding: 4px 0; color: #333;">Assist: <span style="color: #1f5cff; font-weight: bold;">${this.activeMatch.home_statistics?.goalAssists ?? 'N/A'}</span></li>
        </ul>
        <p style="margin-top: 15px; color: #333;"><strong style="color: #1f5cff;">Statistiche Trasferta:</strong></p>
        <ul style="margin: 8px 0; padding-left: 20px; list-style: none;">
          <li style="padding: 4px 0; color: #333;">Possesso Palla: <span style="color: #1f5cff; font-weight: bold;">${this.activeMatch.away_statistics?.possessionPct ?? 'N/A'}%</span></li>
          <li style="padding: 4px 0; color: #333;">Tiri Totali: <span style="color: #1f5cff; font-weight: bold;">${this.activeMatch.away_statistics?.totalShots ?? 'N/A'}</span></li>
          <li style="padding: 4px 0; color: #333;">Tiri in Porta: <span style="color: #1f5cff; font-weight: bold;">${this.activeMatch.away_statistics?.shotsOnTarget ?? 'N/A'}</span></li>
          <li style="padding: 4px 0; color: #333;">Falli Comessi: <span style="color: #1f5cff; font-weight: bold;">${this.activeMatch.away_statistics?.foulsCommitted ?? 'N/A'}</span></li>
          <li style="padding: 4px 0; color: #333;">Assist: <span style="color: #1f5cff; font-weight: bold;">${this.activeMatch.away_statistics?.goalAssists ?? 'N/A'}</span></li>
        </ul>
        <h4 style="color: #1f5cff; margin-top: 20px; margin-bottom: 12px; font-size: 16px; border-bottom: 2px solid #1f5cff; padding-bottom: 8px;">Eventi Partita</h4>
        <div id="team-events-container"></div>
        <button style="background: #1f5cff; color: white; padding: 12px 20px; border: none; border-radius: 6px; cursor: pointer; margin-top: 20px; font-weight: bold; width: 100%; font-size: 14px; transition: background 0.3s;" onclick="document.getElementById('calcio-live-team-popup').remove();" onmouseover="this.style.background='#1e5ad1';" onmouseout="this.style.background='#1f5cff';">Chiudi</button>
      </div>
    `;

    const eventsContainer = popupContainer.querySelector('#team-events-container');
    const { goals, yellowCards, redCards } = this.separateEvents(this.activeMatch.match_details || []);
    
    let eventsHTML = '';
    if (goals.length > 0) {
      eventsHTML += `<div style="margin-bottom: 16px; padding: 12px; background: #f0f4ff; border-left: 4px solid #1f5cff; border-radius: 4px;"><h5 style="color: #1f5cff; font-weight: bold; margin: 0 0 8px 0; font-size: 14px;">Goal</h5><ul style="margin: 0; padding-left: 20px; list-style: none;"><li style="color: #333; padding: 2px 0;">${goals.join('</li><li style="color: #333; padding: 2px 0;">')}</li></ul></div>`;
    }
    if (yellowCards.length > 0) {
      eventsHTML += `<div style="margin-bottom: 16px; padding: 12px; background: #fffbf0; border-left: 4px solid #f39c12; border-radius: 4px;"><h5 style="color: #f39c12; font-weight: bold; margin: 0 0 8px 0; font-size: 14px;">Cartellini Gialli</h5><ul style="margin: 0; padding-left: 20px; list-style: none;"><li style="color: #333; padding: 2px 0;">${yellowCards.join('</li><li style="color: #333; padding: 2px 0;">')}</li></ul></div>`;
    }
    if (redCards.length > 0) {
      eventsHTML += `<div style="margin-bottom: 16px; padding: 12px; background: #fef0f0; border-left: 4px solid #e74c3c; border-radius: 4px;"><h5 style="color: #e74c3c; font-weight: bold; margin: 0 0 8px 0; font-size: 14px;">Cartellini Rossi</h5><ul style="margin: 0; padding-left: 20px; list-style: none;"><li style="color: #333; padding: 2px 0;">${redCards.join('</li><li style="color: #333; padding: 2px 0;">')}</li></ul></div>`;
    }
    eventsContainer.innerHTML = eventsHTML || '<p style="text-align: center; color: #999; font-size: 14px;">Nessun evento disponibile</p>';
  }

  static get styles() {
    return css`
        ha-card {
          padding: 16px;
          box-sizing: border-box;
          width: 100%;
          position: relative;
          overflow: hidden;
        }

        .background-logos {
          position: absolute;
          top: -20px;
          left: -50px;
          width: 150%;
          height: 160%;
          display: flex;
          justify-content: space-between;
          opacity: 0.1;
          pointer-events: none;
          transform: translateX(-10%);
        }

        .background-logo {
          width: 50%;
          overflow: hidden;
        }

        .home-logo {
          display: flex;
          justify-content: flex-end;
        }

        .away-logo {
          display: flex;
          justify-content: flex-start;
        }

        .background-logo img {
          width: 150%;
        }
        .team-header {
          text-align: center;
        }
        .team-logo {
          width: 80px;
          height: 80px;
          margin-left: 15px;
        }
        .match-header {
          text-align: center;
          font-size: 14px;
          font-weight: bold;
          margin-bottom: 8px;
          color: blue;
        }
        .match-competition {
          text-align: center;
          font-size: 14px;
          font-weight: bold;
          margin-bottom: 8px;
          color: blue;
        }
        .match-date {
          color: orange;
        }
        .team-logo {
          width: 90px;
          height: 90px;
        }
        .match-wrapper {
          margin-bottom: 16px;
        }
        .team-name {
          font-size: 17px;
          font-weight: bold;
          text-align: center;
        }
        hr {
          border: 0;
          border-top: 1px solid var(--divider-color);
          margin: 16px 0;
        }
      
        .match {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }
        .match-info {
          text-align: center;
          flex: 1;
        }
        .match-result {
          font-size: 16px;
          font-weight: bold;
          margin: 8px 0;
          color: green;
        }
        .info-icon {
          font-size: 12px;
          color: var(--primary-color);
          cursor: pointer;
          margin-left: 8px;
        }
        .popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        .popup-content {
          background: var(--primary-background-color);
          padding: 16px;
          border-radius: 8px;
          width: 80%;
          max-width: 400px;
          overflow-y: auto;
          max-height: 80vh;
        }
        .popup-title {
          color: var(--primary-color);
          margin-top: 0;
        }
        .popup-logos {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 16px;
        }
        .popup-logo {
          width: 60px;
          height: 60px;
          margin: 0 10px;
        }
        .popup-vs {
          font-size: 24px;
          font-weight: bold;
          color: var(--primary-color);
          margin: 0 10px;
        }
        .popup-teams {
          text-align: center;
          font-size: 1.2em;
          color: var(--primary-text-color);
          margin-bottom: 16px;
        }
        .popup-subtitle {
          color: var(--primary-color);
          margin-top: 16px;
        }
        .stat-value {
          color: var(--primary-color);
        }
        .home-stat {
          color: green;
        }
        .away-stat {
          color: red;
        }
        .event-section {
          margin-bottom: 16px;
        }
        .event-title {
          color: var(--primary-color);
          font-weight: bold;
          margin-bottom: 8px;
        }
        .goal-details li, .yellow-card-details li, .red-card-details li {
          color: var(--primary-text-color);
          margin-bottom: 4px;
        }
        .close-button {
          background: var(--primary-color);
          color: white;
          padding: 8px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          margin-top: 16px;
        }
        .close-button:hover {
          background: var(--primary-color-dark);
        }
        @keyframes pulse-highlight {
          0% { box-shadow: 0 0 0 0 rgba(255, 152, 0, 0.7); }
          50% { box-shadow: 0 0 0 10px rgba(255, 152, 0, 0); }
          100% { box-shadow: 0 0 0 0 rgba(255, 152, 0, 0); }
        }
        ha-card.event-highlight {
          animation: pulse-highlight 0.6s ease-out;
        }
      `;
  }
}

customElements.define("calcio-live-team", CalcioLiveTeamNextCard);

window.customCards = window.customCards || [];
window.customCards.push({
  type: 'calcio-live-team',
  name: 'Calcio Live team Card',
  description: 'Mostra le partite della tuo Team',
});