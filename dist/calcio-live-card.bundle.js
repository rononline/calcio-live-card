/*! For license information please see calcio-live-card.bundle.js.LICENSE.txt */
(()=>{"use strict";const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;class o{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=s.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&s.set(i,t))}return t}toString(){return this.cssText}}const a=(t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new o(s,t,i)},n=(i,s)=>{if(e)i.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of s){const s=document.createElement("style"),o=t.litNonce;void 0!==o&&s.setAttribute("nonce",o),s.textContent=e.cssText,i.appendChild(s)}},r=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:l,defineProperty:c,getOwnPropertyDescriptor:h,getOwnPropertyNames:d,getOwnPropertySymbols:p,getPrototypeOf:g}=Object,u=globalThis,m=u.trustedTypes,f=m?m.emptyScript:"",v=u.reactiveElementPolyfillSupport,_=(t,e)=>t,y={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},b=(t,e)=>!l(t,e),x={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:b};Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;class $ extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=x){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&c(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:o}=h(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return s?.call(this)},set(e){const a=s?.call(this);o.call(this,e),this.requestUpdate(t,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??x}static _$Ei(){if(this.hasOwnProperty(_("elementProperties")))return;const t=g(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(_("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(_("properties"))){const t=this.properties,e=[...d(t),...p(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return n(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const o=(void 0!==i.converter?.toAttribute?i.converter:y).toAttribute(e,i.type);this._$Em=t,null==o?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=s,this[s]=o.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??b)(this[t],e))return;this.P(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t)!0!==i.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],i)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[_("elementProperties")]=new Map,$[_("finalized")]=new Map,v?.({ReactiveElement:$}),(u.reactiveElementVersions??=[]).push("2.0.4");const w=globalThis,E=w.trustedTypes,C=E?E.createPolicy("lit-html",{createHTML:t=>t}):void 0,A="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,M="?"+S,P=`<${M}>`,k=document,T=()=>k.createComment(""),z=t=>null===t||"object"!=typeof t&&"function"!=typeof t,N=Array.isArray,L="[ \t\n\f\r]",O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,j=/-->/g,H=/>/g,U=RegExp(`>|${L}(?:([^\\s"'>=/]+)(${L}*=${L}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),R=/'/g,D=/"/g,V=/^(?:script|style|textarea|title)$/i,I=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),B=I(1),F=(I(2),I(3),Symbol.for("lit-noChange")),G=Symbol.for("lit-nothing"),W=new WeakMap,q=k.createTreeWalker(k,129);function J(t,e){if(!N(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==C?C.createHTML(e):e}class K{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,a=0;const n=t.length-1,r=this.parts,[l,c]=((t,e)=>{const i=t.length-1,s=[];let o,a=2===e?"<svg>":3===e?"<math>":"",n=O;for(let e=0;e<i;e++){const i=t[e];let r,l,c=-1,h=0;for(;h<i.length&&(n.lastIndex=h,l=n.exec(i),null!==l);)h=n.lastIndex,n===O?"!--"===l[1]?n=j:void 0!==l[1]?n=H:void 0!==l[2]?(V.test(l[2])&&(o=RegExp("</"+l[2],"g")),n=U):void 0!==l[3]&&(n=U):n===U?">"===l[0]?(n=o??O,c=-1):void 0===l[1]?c=-2:(c=n.lastIndex-l[2].length,r=l[1],n=void 0===l[3]?U:'"'===l[3]?D:R):n===D||n===R?n=U:n===j||n===H?n=O:(n=U,o=void 0);const d=n===U&&t[e+1].startsWith("/>")?" ":"";a+=n===O?i+P:c>=0?(s.push(r),i.slice(0,c)+A+i.slice(c)+S+d):i+S+(-2===c?e:d)}return[J(t,a+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]})(t,e);if(this.el=K.createElement(l,i),q.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=q.nextNode())&&r.length<n;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(A)){const e=c[a++],i=s.getAttribute(t).split(S),n=/([.?@])?(.*)/.exec(e);r.push({type:1,index:o,name:n[2],strings:i,ctor:"."===n[1]?tt:"?"===n[1]?et:"@"===n[1]?it:Q}),s.removeAttribute(t)}else t.startsWith(S)&&(r.push({type:6,index:o}),s.removeAttribute(t));if(V.test(s.tagName)){const t=s.textContent.split(S),e=t.length-1;if(e>0){s.textContent=E?E.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],T()),q.nextNode(),r.push({type:2,index:++o});s.append(t[e],T())}}}else if(8===s.nodeType)if(s.data===M)r.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf(S,t+1));)r.push({type:7,index:o}),t+=S.length-1}o++}}static createElement(t,e){const i=k.createElement("template");return i.innerHTML=t,i}}function Y(t,e,i=t,s){if(e===F)return e;let o=void 0!==s?i.o?.[s]:i.l;const a=z(e)?void 0:e._$litDirective$;return o?.constructor!==a&&(o?._$AO?.(!1),void 0===a?o=void 0:(o=new a(t),o._$AT(t,i,s)),void 0!==s?(i.o??=[])[s]=o:i.l=o),void 0!==o&&(e=Y(t,o._$AS(t,e.values),o,s)),e}class Z{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??k).importNode(e,!0);q.currentNode=s;let o=q.nextNode(),a=0,n=0,r=i[0];for(;void 0!==r;){if(a===r.index){let e;2===r.type?e=new X(o,o.nextSibling,this,t):1===r.type?e=new r.ctor(o,r.name,r.strings,this,t):6===r.type&&(e=new st(o,this,t)),this._$AV.push(e),r=i[++n]}a!==r?.index&&(o=q.nextNode(),a++)}return q.currentNode=k,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class X{get _$AU(){return this._$AM?._$AU??this.v}constructor(t,e,i,s){this.type=2,this._$AH=G,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this.v=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Y(this,t,e),z(t)?t===G||null==t||""===t?(this._$AH!==G&&this._$AR(),this._$AH=G):t!==this._$AH&&t!==F&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>N(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==G&&z(this._$AH)?this._$AA.nextSibling.data=t:this.T(k.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=K.createElement(J(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new Z(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=W.get(t.strings);return void 0===e&&W.set(t.strings,e=new K(t)),e}k(t){N(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new X(this.O(T()),this.O(T()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this.v=t,this._$AP?.(t))}}class Q{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,o){this.type=1,this._$AH=G,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=G}_$AI(t,e=this,i,s){const o=this.strings;let a=!1;if(void 0===o)t=Y(this,t,e,0),a=!z(t)||t!==this._$AH&&t!==F,a&&(this._$AH=t);else{const s=t;let n,r;for(t=o[0],n=0;n<o.length-1;n++)r=Y(this,s[i+n],e,n),r===F&&(r=this._$AH[n]),a||=!z(r)||r!==this._$AH[n],r===G?t=G:t!==G&&(t+=(r??"")+o[n+1]),this._$AH[n]=r}a&&!s&&this.j(t)}j(t){t===G?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends Q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===G?void 0:t}}class et extends Q{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==G)}}class it extends Q{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){if((t=Y(this,t,e,0)??G)===F)return;const i=this._$AH,s=t===G&&i!==G||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==G&&(i===G||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class st{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Y(this,t)}}const ot=w.litHtmlPolyfillSupport;ot?.(K,X),(w.litHtmlVersions??=[]).push("3.2.0");class at extends ${constructor(){super(...arguments),this.renderOptions={host:this},this.o=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this.o=((t,e,i)=>{const s=i?.renderBefore??e;let o=s._$litPart$;if(void 0===o){const t=i?.renderBefore??null;s._$litPart$=o=new X(e.insertBefore(T(),t),t,void 0,i??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this.o?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this.o?.setConnected(!1)}render(){return F}}at._$litElement$=!0,at.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:at});const nt=globalThis.litElementPolyfillSupport;nt?.({LitElement:at}),(globalThis.litElementVersions??=[]).push("4.1.0"),customElements.define("calcio-live-classifica",class extends at{static get properties(){return{hass:{},_config:{},maxTeamsVisible:{type:Number},hideHeader:{type:Boolean},selectedGroup:{type:String},_eventSubscription:{type:Object},_eventSubscriptions:{type:Array}}}setConfig(t){if(!t.entity)throw new Error("Devi definire un'entità");this._config=t,this.maxTeamsVisible=t.max_teams_visible?t.max_teams_visible:10,this.hideHeader=t.hide_header||!1,this.selectedGroup=t.selected_group||""}connectedCallback(){super.connectedCallback(),this._subscribeToEvents()}disconnectedCallback(){super.disconnectedCallback(),this._eventSubscriptions&&Array.isArray(this._eventSubscriptions)&&(this._eventSubscriptions.forEach((t=>{t&&t.unsubscribe()})),this._eventSubscriptions=[])}_subscribeToEvents(){this.hass&&this.hass.connection&&(this._eventSubscriptions=[],this._eventSubscriptions.push(this.hass.connection.subscribeEvents(this._handleCalcioLiveEvent.bind(this),"calcio_live_goal")),this._eventSubscriptions.push(this.hass.connection.subscribeEvents(this._handleCalcioLiveEvent.bind(this),"calcio_live_yellow_card")),this._eventSubscriptions.push(this.hass.connection.subscribeEvents(this._handleCalcioLiveEvent.bind(this),"calcio_live_red_card")),this._eventSubscriptions.push(this.hass.connection.subscribeEvents(this._handleCalcioLiveEvent.bind(this),"calcio_live_match_finished")))}_handleCalcioLiveEvent(t){const e=t.event_type,i=t.data;this._showEventToast(e,i)}_showEventToast(t,e){let i="";"calcio_live_goal"===t?i=`🔥 GOAL! ${e.player} - ${e.home_team} ${e.home_score} - ${e.away_score} ${e.away_team}`:"calcio_live_yellow_card"===t?i=`🟨 Cartellino Giallo: ${e.player}${e.minute?` (${e.minute}')`:""}`:"calcio_live_red_card"===t?i=`🟥 Cartellino Rosso: ${e.player}${e.minute?` (${e.minute}')`:""}`:"calcio_live_match_finished"===t&&(i=`✅ Partita Terminata! ${e.home_team} ${e.home_score} - ${e.away_score} ${e.away_team}`),i&&this.hass&&this.hass.callService("persistent_notification","create",{message:i,title:"CalcioLive"}).catch((()=>{console.log("CalcioLive Event:",i)}))}getCardSize(){return 3}static getConfigElement(){return document.createElement("calcio-live-classifica-editor")}static getStubConfig(){return{entity:"sensor.calcio_live",max_teams_visible:10,hide_header:!1,selected_group:""}}render(){if(!this.hass||!this._config)return B``;const t=this._config.entity,e=this.hass.states[t];if(!e)return B`<ha-card>Entità sconosciuta: ${t}</ha-card>`;e.attributes.standings;const i=e.attributes.season||"",s=(e.attributes.season_start,e.attributes.season_end,e.attributes.standings_groups.find((t=>t.name===this.selectedGroup)));let o=s?s.standings:[];o=o.filter((t=>null!=t.rank&&void 0!==t.rank)),i.includes("MLS")?(o=o.sort(((t,e)=>e.points!==t.points?e.points-t.points:e.goal_difference!==t.goal_difference?e.goal_difference-t.goal_difference:e.goals_for-t.goals_for)),o.forEach(((t,e)=>{t.rank=e+1}))):o=o.sort(((t,e)=>t.rank-e.rank));const a=Math.min(this.maxTeamsVisible,o.length);return B`
      <ha-card>
        ${this.hideHeader?B``:B`
              <div class="card-header">
                <div class="header-row">
                  <div class="competition-details">
                    <div class="competition-name">${e.state}</div>
                    <div class="season-dates">${i}</div>
                  </div>
                </div>
                <hr class="separator" />
              </div>
            `}
        <div class="card-content">
          <div class="table-container" style="--max-teams-visible: ${a};">
            <table>
              <thead>
                <tr>
                  <th class="small-column">Pos</th>
                  <th class="team-column">Squadra</th>
                  <th class="small-column">Punti</th>
                  <th class="small-column">V</th>
                  <th class="small-column">P</th>
                  <th class="small-column">S</th>
                  <th class="small-column">GF</th>
                  <th class="small-column">GS</th>
                  <th class="small-column">+/-</th>
                </tr>
              </thead>
              <tbody>
                ${o.map((t=>B`
                  <tr>
                    <td class="small-column">${t.rank??"-"}</td>
                    <td class="team-column">
                      <div class="team-name">
                        <img class="team-crest" src="${t.team_logo}" alt="${t.team_name}" />
                        ${t.team_name}
                      </div>
                    </td>
                    <td class="points small-column">${t.points}</td>
                    <td class="won small-column">${t.wins}</td>
                    <td class="draw small-column">${t.draws}</td>
                    <td class="lost small-column">${t.losses}</td>
                    <td class="small-column">${t.goals_for}</td>
                    <td class="small-column">${t.goals_against}</td>
                    <td class="small-column">${t.goal_difference}</td>
                  </tr>
                `))}
              </tbody>
            </table>
          </div>
        </div>
      </ha-card>
    `}static get styles(){return a`
      ha-card {
        padding: 16px;
        box-sizing: border-box;
        width: 100%;
      }
      .card-header {
        margin-bottom: 2px;
      }
      .header-row {
        display: flex;
        align-items: center;
        justify-content: flex-start;
      }
      .competition-details {
        display: flex;
        flex-direction: column;
      }
      .competition-name {
        font-weight: bold;
        font-size: 1.3em;
      }
      .season-dates {
        color: var(--secondary-text-color);
        font-size: 16px;
      }
      .table-container {
        width: 100%;
        overflow-y: auto;
        max-height: calc(var(--max-teams-visible, 10) * 40px);
      }
      table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 2px; 
      }
      th, td {
        padding: 8px;
        text-align: left;
        border-bottom: 1px solid var(--divider-color);
        white-space: nowrap;
      }
      th {
        background-color: var(--primary-background-color);
        color: var(--primary-text-color);
        text-align: center;
      }
      td {
        vertical-align: middle;
        text-align: center;
      }
      .team-name {
        display: flex;
        align-items: center;
        justify-content: flex-start;
      }
      .team-crest {
        width: 24px;
        height: 24px;
        margin-right: 8px;
      }
      .points {
        font-weight: bold;
        color: #4CAF50;
      }
      .won {
        color: #4CAF50; 
      }
      .draw {
        color: #FFC107;
      }
      .lost {
        color: #F44336;
      }
      .separator {
        width: 100%;
        height: 1px;
        background-color: #ddd;
        border: none;
        margin: 2px 0;
      }
      .team-column {
        width: 180px;
        text-align: left;
      }
      .small-column {
        width: 40px;
      }
    `}}),window.customCards=window.customCards||[],window.customCards.push({type:"calcio-live-classifica",name:"Calcio Live Classifica Card",description:"Mostra la classifica del campionato o coppe"}),customElements.define("calcio-live-classifica-editor",class extends at{static get properties(){return{_config:{type:Object},hass:{type:Object},entities:{type:Array},groups:{type:Array}}}constructor(){super(),this._entity="",this.entities=[],this.groups=[]}static get styles(){return a`
      .card-config {
        display: flex;
        flex-direction: column;
        gap: 20px; /* Spazio tra le opzioni */
      }
      .option {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;
      }
      ha-select {
        width: 100%; /* Larghezza piena per il campo dei sensori */
      }
      ha-textfield {
        width: 100%; /* Larghezza piena per i campi numerici */
      }
    `}setConfig(t){if(!t)throw new Error("Invalid configuration");this._config={...t},this._entity=this._config.entity||""}get config(){return this._config}updated(t){t.has("hass")&&this._fetchEntities(),t.has("_config")&&this._config&&this._config.entity&&(this._entity=this._config.entity,this._fetchGroups())}configChanged(t){const e=new CustomEvent("config-changed",{detail:{config:t},bubbles:!0,composed:!0});this.dispatchEvent(e)}_EntityChanged(t){if(!this._config)return;const e={...this._config,entity:t.target.value};this._entity=t.target.value,this.configChanged(e)}_fetchEntities(){this.hass&&(this.entities=Object.keys(this.hass.states).filter((t=>t.startsWith("sensor.calciolive_classifica"))).sort())}_fetchGroups(){const t=this._config.entity;if(this.hass&&t){const e=this.hass.states[t];e&&e.attributes.standings_groups?this.groups=e.attributes.standings_groups.map((t=>t.name)):this.groups=[]}}_valueChanged(t){if(!this._config)return;const e=t.target,i="number"===e.type?parseInt(e.value,10):void 0!==e.checked?e.checked:e.value;if(e.configValue){const t={...this._config,[e.configValue]:i};this.configChanged(t)}}_groupChanged(t){if(!this._config)return;const e=t.target.value,i={...this._config,selected_group:e};this.configChanged(i)}render(){return this._config&&this.hass?B`
        <div class="card-config">
          <h3>CalcioLive Sensor:</h3>
          <ha-select
              naturalMenuWidth
              fixedMenuPosition
              label="Entity"
              .configValue=${"entity"}
              .value=${this._entity}
              @change=${t=>this._EntityChanged(t,"entity")}
              @closed=${t=>t.stopPropagation()}
              >
              ${this.entities.map((t=>B`<ha-list-item .value=${t}>${t}</ha-list-item>`))}
          </ha-select>
              
        <h3>Settings:</h3>
              
        <div class="option">
          <ha-select
            label="Select Group"
            .value=${this._config.selected_group||""}
            .configValue=${"selected_group"}
            @change=${this._groupChanged}
            @closed=${t=>t.stopPropagation()} 
          >
            ${this.groups.length?this.groups.map((t=>B`
                  <ha-list-item .value=${t}>${t}</ha-list-item>
                `)):B`<ha-list-item .value="">Nessun gruppo disponibile</ha-list-item>`}
          </ha-select>
        </div>

        </div>
          <div class="option">
          <ha-switch
            .checked=${!0===this._config.hide_header}
            @change=${this._valueChanged}
            .configValue=${"hide_header"}
          >
          </ha-switch>
          <label>Hide Header</label>
        </div>
        <div class="option">
          <ha-textfield
            label="Max Teams Visible"
            type="number"
            .value=${this._config.max_teams_visible||10}
            @change=${this._valueChanged}
            .configValue=${"max_teams_visible"}
          ></ha-textfield>
        </div>
      `:B``}}),customElements.define("calcio-live-matches",class extends at{static get properties(){return{hass:{},_config:{},showPopup:{type:Boolean},activeMatch:{type:Object},_eventSubscription:{type:Object},_eventSubscriptions:{type:Array},_recentEventMatches:{type:Object}}}constructor(){super(),this._recentEventMatches=new Map,this._eventSubscriptions=[]}setConfig(t){if(!t.entity)throw new Error("Devi definire un'entità");this._config=t,this.maxEventsVisible=t.max_events_visible?t.max_events_visible:5,this.maxEventsTotal=t.max_events_total?t.max_events_total:50,this.showFinishedMatches=void 0===t.show_finished_matches||t.show_finished_matches,this.hideHeader=void 0!==t.hide_header&&t.hide_header,this.hidePastDays=void 0!==t.hide_past_days?t.hide_past_days:0,this.activeMatch=null,this.showPopup=!1}connectedCallback(){super.connectedCallback(),this._subscribeToEvents()}disconnectedCallback(){super.disconnectedCallback(),this._eventSubscriptions&&Array.isArray(this._eventSubscriptions)&&(this._eventSubscriptions.forEach((t=>{t&&t.unsubscribe()})),this._eventSubscriptions=[])}_subscribeToEvents(){this.hass&&this.hass.connection&&(this._eventSubscriptions=[],this._eventSubscriptions.push(this.hass.connection.subscribeEvents(this._handleCalcioLiveEvent.bind(this),"calcio_live_goal")),this._eventSubscriptions.push(this.hass.connection.subscribeEvents(this._handleCalcioLiveEvent.bind(this),"calcio_live_yellow_card")),this._eventSubscriptions.push(this.hass.connection.subscribeEvents(this._handleCalcioLiveEvent.bind(this),"calcio_live_red_card")))}_handleCalcioLiveEvent(t){const e=t.event_type,i=t.data,s=`${i.home_team}_${i.away_team}`;this._showEventToast(e,i),this._recentEventMatches.set(s,!0),this.requestUpdate(),setTimeout((()=>{this._recentEventMatches.delete(s),this.requestUpdate()}),5e3)}_showEventToast(t,e){let i="";"calcio_live_goal"===t?i=`🔥 GOAL! ${e.player} - ${e.home_team} ${e.home_score} - ${e.away_score} ${e.away_team}`:"calcio_live_yellow_card"===t?i=`🟨 Cartellino Giallo: ${e.player}${e.minute?` (${e.minute}')`:""}`:"calcio_live_red_card"===t&&(i=`🟥 Cartellino Rosso: ${e.player}${e.minute?` (${e.minute}')`:""}`),i&&this.hass&&this.hass.callService("persistent_notification","create",{message:i,title:"CalcioLive"}).catch((()=>{console.log("CalcioLive Event:",i)}))}getCardSize(){return 3}static getConfigElement(){return document.createElement("calcio-live-matches-editor")}static getStubConfig(){return{entity:"sensor.calcio_live",max_events_visible:5,max_events_total:50,hide_past_days:0,show_finished_matches:!0,hide_header:!1}}_parseMatchDate(t){const[e,i]=t.split(" "),[s,o,a]=e.split("/").map(Number),[n,r]=i?i.split(":").map(Number):[0,0];return new Date(a,o-1,s,n,r)}getMatchStatusText(t){return t.completed?`${t.home_score} - ${t.away_score} (Full Time)`:1===t.period||2===t.period?`${t.home_score} - ${t.away_score} (${t.clock})`:"Scheduled"===t.status?`${t.date}`:t.season_info?`${t.season_info}`:"Dati non disponibili"}showDetails(t){this.activeMatch=t,this.showPopup=!0}closePopup(){this.showPopup=!1}separateEvents(t){const e=[],i=[],s=[];return t.forEach((t=>{t.includes("Goal")||t.includes("Penalty - Scored")?e.push(t):t.includes("Yellow Card")?i.push(t):t.includes("Red Card")&&s.push(t)})),{goals:e,yellowCards:i,redCards:s}}renderMatchDetails(t,e){if(!t||0===t.length)return B`<p>Nessun dettaglio disponibile.</p>`;const{goals:i,yellowCards:s,redCards:o}=this.separateEvents(t);return B`
      ${e?B`<p><strong>Clock finale:</strong> ${e}</p>`:""}
      ${i.length>0?B`
            <div class="event-section">
              <h5 class="event-title">Goal</h5>
              <ul class="goal-details">
                ${i.map((t=>B`<li>${t}</li>`))}
              </ul>
            </div>`:""}
      ${s.length>0?B`
            <div class="event-section">
              <h5 class="event-title">Cartellini Gialli</h5>
              <ul class="yellow-card-details">
                ${s.map((t=>B`<li>${t}</li>`))}
              </ul>
            </div>`:""}
      ${o.length>0?B`
            <div class="event-section">
              <h5 class="event-title">Cartellini Rossi</h5>
              <ul class="red-card-details">
                ${o.map((t=>B`<li>${t}</li>`))}
              </ul>
            </div>`:""}
    `}render(){if(!this.hass||!this._config)return B``;const t=this._config.entity,e=this.hass.states[t];if(!e)return B`<ha-card>Entità sconosciuta: ${t}</ha-card>`;let i=e.attributes.matches||[];const s=e.attributes.league_info?e.attributes.league_info[0]:null,o=e.attributes.team_logo||null;this.showFinishedMatches||(i=i.filter((t=>"Full Time"!==t.status))),i=i.sort(((t,e)=>new Date(t.date)-new Date(e.date)));const a=new Date;if(this.hidePastDays>0){const t=new Date(a);t.setDate(t.getDate()-this.hidePastDays),console.log(`Current date: ${a}, Filter date (days ago): ${t}`),i=i.filter((e=>this._parseMatchDate(e.date)>=t))}const n=i.slice(0,this.maxEventsTotal);if(0===n.length)return B`<ha-card>Nessuna partita disponibile</ha-card>`;const r=150*this.maxEventsVisible;return B`
        <ha-card>
          ${this.hideHeader?"":B`
          <div class="header">
            ${s&&s.logo_href?B`
            <div class="league-header">
              <img class="league-logo" src="${s.logo_href}" alt="Logo ${s.abbreviation}" />
              <div class="league-info">
                <div class="league-name">${s.abbreviation}</div>
                <div class="league-dates">${s.startDate} - ${s.endDate}</div>
              </div>
            </div>`:""}

            ${o?B`
            <div class="team-header">
              <img class="team-logo" src="${o}" alt="Logo del Team" />
            </div>`:""}
          </div>
          `}
          <div class="scroll-content" style="max-height: ${r}px; overflow-y: auto;">
            ${n.map(((t,e)=>B`
              <div class="match-wrapper ${this._recentEventMatches.has(`${t.home_team}_${t.away_team}`)?"event-highlight":""}">
                <div class="match-header">
                  <div class="match-competition">
                    ${t.venue} | <span class="match-date">${t.date}</span>
                    ${t.period>0||t.completed?B`<span class="info-icon" @click="${()=>this.showDetails(t)}">Info</span>`:""}
                  </div>
                </div>
                <div class="match">
                  <img class="team-logo" src="${t.home_logo}" alt="${t.home_team}" />
                  <div class="match-info">
                    <div class="team-name">${t.home_team}</div>
                    <div class="match-result">
                      ${this.getMatchStatusText(t)}
                    </div>
                    <div class="team-name">${t.away_team}</div>
                  </div>
                  <img class="team-logo" src="${t.away_logo}" alt="${t.away_team}" />
                </div>
                ${e<n.length-1?B`<hr class="separator-line" />`:""}
              </div>
            `))}
          </div>
        </ha-card>
      `}updated(t){(t.has("showPopup")||t.has("activeMatch"))&&this.renderPopupToBody()}renderPopupToBody(){if(!this.showPopup||!this.activeMatch){const t=document.getElementById("calcio-live-matches-popup");return void(t&&t.remove())}let t=document.getElementById("calcio-live-matches-popup");t||(t=document.createElement("div"),t.id="calcio-live-matches-popup",t.style.cssText="\n        position: fixed;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        z-index: 999999;\n        background: rgba(0, 0, 0, 0.6);\n        overflow: auto;\n      ",t.addEventListener("click",(e=>{e.target===t&&(this.showPopup=!1)})),document.body.appendChild(t)),t.innerHTML=`\n      <div style="background: white; padding: 20px; border-radius: 12px; width: 90%; max-width: 550px; max-height: 80vh; overflow-y: auto; border: 4px solid #1f5cff; box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4); margin: auto; color: #333;">\n        <h3 style="color: #1f5cff; margin-top: 0; margin-bottom: 16px; font-size: 20px; border-bottom: 2px solid #1f5cff; padding-bottom: 10px;">Dettagli Partita</h3>\n        <div style="display: flex; justify-content: center; align-items: center; margin-bottom: 20px;">\n          <img style="width: 70px; height: 70px; margin: 0 15px; border-radius: 8px;" src="${this.activeMatch.home_logo}" alt="${this.activeMatch.home_team}" />\n          <div style="text-align: center;">\n            <div style="font-size: 32px; font-weight: bold; color: #1f5cff; margin-bottom: 8px;">${this.activeMatch.home_score??"-"} - ${this.activeMatch.away_score??"-"}</div>\n            <span style="font-size: 14px; color: #666;">${this.activeMatch.clock??this.getMatchStatusText(this.activeMatch)}</span>\n          </div>\n          <img style="width: 70px; height: 70px; margin: 0 15px; border-radius: 8px;" src="${this.activeMatch.away_logo}" alt="${this.activeMatch.away_team}" />\n        </div>\n        <p style="text-align: center; color: #666; font-size: 14px; margin: 8px 0;"><strong style="color: #333;">${this.activeMatch.home_team}</strong> vs <strong style="color: #333;">${this.activeMatch.away_team}</strong></p>\n        <p style="color: #333;"><strong style="color: #333;">Formazione Casa:</strong> <span style="color: #2ecc71; font-weight: bold;">${this.activeMatch.home_form}</span></p>\n        <p style="color: #333;"><strong style="color: #333;">Formazione Trasferta:</strong> <span style="color: #e74c3c; font-weight: bold;">${this.activeMatch.away_form}</span></p>\n        <p style="margin-top: 15px; color: #333;"><strong style="color: #1f5cff;">Statistiche Casa:</strong></p>\n        <ul style="margin: 8px 0; padding-left: 20px; list-style: none;">\n          <li style="padding: 4px 0; color: #333;">Possesso Palla: <span style="color: #1f5cff; font-weight: bold;">${this.activeMatch.home_statistics?.possessionPct??"N/A"}%</span></li>\n          <li style="padding: 4px 0; color: #333;">Tiri Totali: <span style="color: #1f5cff; font-weight: bold;">${this.activeMatch.home_statistics?.totalShots??"N/A"}</span></li>\n          <li style="padding: 4px 0; color: #333;">Tiri in Porta: <span style="color: #1f5cff; font-weight: bold;">${this.activeMatch.home_statistics?.shotsOnTarget??"N/A"}</span></li>\n          <li style="padding: 4px 0; color: #333;">Falli Comessi: <span style="color: #1f5cff; font-weight: bold;">${this.activeMatch.home_statistics?.foulsCommitted??"N/A"}</span></li>\n          <li style="padding: 4px 0; color: #333;">Assist: <span style="color: #1f5cff; font-weight: bold;">${this.activeMatch.home_statistics?.goalAssists??"N/A"}</span></li>\n        </ul>\n        <p style="margin-top: 15px; color: #333;"><strong style="color: #1f5cff;">Statistiche Trasferta:</strong></p>\n        <ul style="margin: 8px 0; padding-left: 20px; list-style: none;">\n          <li style="padding: 4px 0; color: #333;">Possesso Palla: <span style="color: #1f5cff; font-weight: bold;">${this.activeMatch.away_statistics?.possessionPct??"N/A"}%</span></li>\n          <li style="padding: 4px 0; color: #333;">Tiri Totali: <span style="color: #1f5cff; font-weight: bold;">${this.activeMatch.away_statistics?.totalShots??"N/A"}</span></li>\n          <li style="padding: 4px 0; color: #333;">Tiri in Porta: <span style="color: #1f5cff; font-weight: bold;">${this.activeMatch.away_statistics?.shotsOnTarget??"N/A"}</span></li>\n          <li style="padding: 4px 0; color: #333;">Falli Comessi: <span style="color: #1f5cff; font-weight: bold;">${this.activeMatch.away_statistics?.foulsCommitted??"N/A"}</span></li>\n          <li style="padding: 4px 0; color: #333;">Assist: <span style="color: #1f5cff; font-weight: bold;">${this.activeMatch.away_statistics?.goalAssists??"N/A"}</span></li>\n        </ul>\n        <h4 style="color: #1f5cff; margin-top: 20px; margin-bottom: 12px; font-size: 16px; border-bottom: 2px solid #1f5cff; padding-bottom: 8px;">Eventi Partita</h4>\n        <div id="matches-events-container"></div>\n        <button style="background: #1f5cff; color: white; padding: 12px 20px; border: none; border-radius: 6px; cursor: pointer; margin-top: 20px; font-weight: bold; width: 100%; font-size: 14px; transition: background 0.3s;" onclick="document.getElementById('calcio-live-matches-popup').remove();" onmouseover="this.style.background='#1e5ad1';" onmouseout="this.style.background='#1f5cff';">Chiudi</button>\n      </div>\n    `;const e=t.querySelector("#matches-events-container"),{goals:i,yellowCards:s,redCards:o}=this.separateEvents(this.activeMatch.match_details||[]);let a="";i.length>0&&(a+=`<div style="margin-bottom: 16px; padding: 12px; background: #f0f4ff; border-left: 4px solid #1f5cff; border-radius: 4px;"><h5 style="color: #1f5cff; font-weight: bold; margin: 0 0 8px 0; font-size: 14px;">Goal</h5><ul style="margin: 0; padding-left: 20px; list-style: none;"><li style="color: #333; padding: 2px 0;">${i.join('</li><li style="color: #333; padding: 2px 0;">')}</li></ul></div>`),s.length>0&&(a+=`<div style="margin-bottom: 16px; padding: 12px; background: #fffbf0; border-left: 4px solid #f39c12; border-radius: 4px;"><h5 style="color: #f39c12; font-weight: bold; margin: 0 0 8px 0; font-size: 14px;">Cartellini Gialli</h5><ul style="margin: 0; padding-left: 20px; list-style: none;"><li style="color: #333; padding: 2px 0;">${s.join('</li><li style="color: #333; padding: 2px 0;">')}</li></ul></div>`),o.length>0&&(a+=`<div style="margin-bottom: 16px; padding: 12px; background: #fef0f0; border-left: 4px solid #e74c3c; border-radius: 4px;"><h5 style="color: #e74c3c; font-weight: bold; margin: 0 0 8px 0; font-size: 14px;">Cartellini Rossi</h5><ul style="margin: 0; padding-left: 20px; list-style: none;"><li style="color: #333; padding: 2px 0;">${o.join('</li><li style="color: #333; padding: 2px 0;">')}</li></ul></div>`),e.innerHTML=a||'<p style="text-align: center; color: #999; font-size: 14px;">Nessun evento disponibile</p>'}static get styles(){return a`
        ha-card {
          padding: 16px;
          box-sizing: border-box;
          width: 100%;
        }
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 10px;
          position: relative;
        }
        .league-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }
        .league-logo {
          width: 80px;
          height: 80px;
          margin-right: 15px;
        }
        .league-info {
          text-align: center;
          flex-grow: 1;
        }
        .league-name {
          font-size: 22px;
          font-weight: bold;
        }
        .league-dates {
          font-size: 14px;
          color: gray;
        }
        .team-header {
          text-align: center;
        }
        .team-logo {
          width: 75px;
          height: 75px;
          margin-left: 15px;
        }
        .separator-line {
          border: none;
          border-top: 1px solid var(--divider-color);
          margin-top: 10px;
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
        .scroll-content {
          overflow-y: auto;
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
        .match-wrapper.event-highlight {
          animation: pulse-highlight 0.6s ease-out;
        }
      `}}),window.customCards=window.customCards||[],window.customCards.push({type:"calcio-live-matches",name:"Calcio Live Matches Card",description:"Mostra le partite della settimana o del tuo Team"}),customElements.define("calcio-live-matches-editor",class extends at{static get properties(){return{_config:{type:Object},hass:{type:Object},entities:{type:Array}}}constructor(){super(),this._entity="",this.entities=[]}static get styles(){return a`
      .card-config {
        display: flex;
        flex-direction: column;
        gap: 20px; /* Spazio tra le opzioni */
      }
      .option {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;
      }
      ha-select {
        width: 100%; /* Larghezza piena per il campo dei sensori */
      }
      ha-textfield {
        width: 100%; /* Larghezza piena per i campi numerici */
      }
    `}setConfig(t){if(!t)throw new Error("Invalid configuration");this._config={...t},this._entity=this._config.entity||""}get config(){return this._config}updated(t){t.has("hass")&&this._fetchEntities(),t.has("_config")&&this._config&&this._config.entity&&(this._entity=this._config.entity)}configChanged(t){const e=new CustomEvent("config-changed",{detail:{config:t},bubbles:!0,composed:!0});this.dispatchEvent(e)}_EntityChanged(t){if(!this._config)return;const e={...this._config,entity:t.target.value};this._entity=t.target.value,this.configChanged(e)}_fetchEntities(){this.hass&&(this.entities=Object.keys(this.hass.states).filter((t=>t.startsWith("sensor.calciolive_all"))).sort())}_valueChanged(t){if(!this._config)return;const e=t.target,i="number"===e.type?parseInt(e.value,10):void 0!==e.checked?e.checked:e.value;if(e.configValue){const t={...this._config,[e.configValue]:i};this.configChanged(t)}}render(){return this._config&&this.hass?B`
        <div class="card-config">
          <h3>CalcioLive Sensor:</h3>
          <ha-select
              naturalMenuWidth
              fixedMenuPosition
              label="Entity"
              .configValue=${"entity"}
              .value=${this._entity}
              @change=${t=>this._EntityChanged(t,"entity")}
              @closed=${t=>t.stopPropagation()}
              >
              ${this.entities.map((t=>B`<ha-list-item .value=${t}>${t}</ha-list-item>`))}
          </ha-select>
        
          <h3>Settings:</h3>
          <div class="option">
            <ha-switch
              .checked=${!1!==this._config.show_finished_matches}
              @change=${this._valueChanged}
              .configValue=${"show_finished_matches"}
            >
            </ha-switch>
            <label>Show Finished Matches</label>
          </div>

          <div class="option">
            <ha-switch
              .checked=${!0===this._config.hide_header}
              @change=${this._valueChanged}
              .configValue=${"hide_header"}
            >
            </ha-switch>
            <label>Hide Header</label>
          </div>

          <div class="option">
            <ha-textfield
              label="Max Events Visible"
              type="number"
              .value=${this._config.max_events_visible||5}
              @change=${this._valueChanged}
              .configValue=${"max_events_visible"}
            ></ha-textfield>
          </div>

          <div class="option">
            <ha-textfield
              label="Max Events Total"
              type="number"
              .value=${this._config.max_events_total||50}
              @change=${this._valueChanged}
              .configValue=${"max_events_total"}
            ></ha-textfield>
          </div>
          
          <h4>For work, 'Show Finished Matches' it must be enabled. </h4>
          <div class="option">
            <ha-textfield
              label="Hide Matches Older Than (Days)"
              type="number"
              .value=${this._config.hide_past_days||0}
              @change=${this._valueChanged}
              .configValue=${"hide_past_days"}
            ></ha-textfield>
          </div>
        </div>
      `:B``}}),customElements.define("calcio-live-team",class extends at{static get properties(){return{hass:{},_config:{},showPopup:{type:Boolean},activeMatch:{type:Object},_eventSubscription:{type:Object},_eventSubscriptions:{type:Array},_hasRecentEvent:{type:Boolean}}}setConfig(t){if(!t.entity)throw new Error("Devi definire un'entità");this._config=t,this.showPopup=!1,this.activeMatch=null,this._hasRecentEvent=!1}connectedCallback(){super.connectedCallback(),this._subscribeToEvents()}disconnectedCallback(){super.disconnectedCallback(),this._eventSubscriptions&&Array.isArray(this._eventSubscriptions)&&(this._eventSubscriptions.forEach((t=>{t&&t.unsubscribe()})),this._eventSubscriptions=[])}_subscribeToEvents(){this.hass&&this.hass.connection&&(this._eventSubscriptions=[],this._eventSubscriptions.push(this.hass.connection.subscribeEvents(this._handleCalcioLiveEvent.bind(this),"calcio_live_goal")),this._eventSubscriptions.push(this.hass.connection.subscribeEvents(this._handleCalcioLiveEvent.bind(this),"calcio_live_yellow_card")),this._eventSubscriptions.push(this.hass.connection.subscribeEvents(this._handleCalcioLiveEvent.bind(this),"calcio_live_red_card")))}_handleCalcioLiveEvent(t){const e=t.event_type,i=t.data;this._showEventToast(e,i),this._hasRecentEvent=!0,this.requestUpdate(),setTimeout((()=>{this._hasRecentEvent=!1,this.requestUpdate()}),5e3)}_showEventToast(t,e){let i="";"calcio_live_goal"===t?i=`🔥 GOAL! ${e.player} - ${e.home_team} ${e.home_score} - ${e.away_score} ${e.away_team}`:"calcio_live_yellow_card"===t?i=`🟨 Cartellino Giallo: ${e.player}${e.minute?` (${e.minute}')`:""}`:"calcio_live_red_card"===t&&(i=`🟥 Cartellino Rosso: ${e.player}${e.minute?` (${e.minute}')`:""}`),i&&this.hass&&this.hass.callService("persistent_notification","create",{message:i,title:"CalcioLive"}).catch((()=>{console.log("CalcioLive Event:",i)}))}getCardSize(){return 3}static getConfigElement(){return document.createElement("calcio-live-team-editor")}static getStubConfig(){return{entity:"sensor.calcio_live"}}getMatchStatusText(t){return t.completed?`${t.home_score} - ${t.away_score} (Full Time)`:1===t.period||2===t.period?`${t.home_score} - ${t.away_score} (${t.clock})`:"Scheduled"===t.status?`${t.date}`:"Dati non disponibili"}showDetails(t){console.log("Dettagli partita:",t),this.activeMatch=t,this.showPopup=!0}closePopup(){this.showPopup=!1}separateEvents(t){const e=[],i=[],s=[];return t.forEach((t=>{t.includes("Goal")||t.includes("Penalty - Scored")?e.push(t):t.includes("Yellow Card")?i.push(t):t.includes("Red Card")&&s.push(t)})),{goals:e,yellowCards:i,redCards:s}}renderMatchDetails(t,e,i){if(!t||0===t.length)return B`<p>Nessun dettaglio disponibile.</p>`;const s=i.status||"Stato sconosciuto";let o;switch(s){case"First Half":o=`Primo Tempo (${e})`;break;case"Second Half":o=`Secondo Tempo (${e})`;break;case"Halftime":o="Intervallo";break;case"Scheduled":o=`Programmata per il ${i.date}`;break;case"Full Time":o="Tempo Regolamentare Concluso";break;case"Extra Time":o=`Tempi Supplementari (${e})`;break;case"Penalties":o=`Calci di Rigore (${e})`;break;default:o=`Stato: ${s}`}return B`
      <p><strong>Stato Partita:</strong> ${o}</p>
      ${this.renderMatchEvents(t)}
    `}renderMatchEvents(t){const{goals:e,yellowCards:i,redCards:s}=this.separateEvents(t);return B`
      ${e.length>0?B`
            <div class="event-section">
              <h5 class="event-title">Goal</h5>
              <ul class="goal-details">
                ${e.map((t=>B`<li>${t}</li>`))}
              </ul>
            </div>`:""}
      ${i.length>0?B`
            <div class="event-section">
              <h5 class="event-title">Cartellini Gialli</h5>
              <ul class="yellow-card-details">
                ${i.map((t=>B`<li>${t}</li>`))}
              </ul>
            </div>`:""}
      ${s.length>0?B`
            <div class="event-section">
              <h5 class="event-title">Cartellini Rossi</h5>
              <ul class="red-card-details">
                ${s.map((t=>B`<li>${t}</li>`))}
              </ul>
            </div>`:""}
    `}render(){if(!this.hass||!this._config)return B``;const t=this._config.entity,e=this.hass.states[t];if(!e)return B`<ha-card>Entità sconosciuta: ${t}</ha-card>`;if(!e.attributes.matches||0===e.attributes.matches.length)return B`<ha-card>Nessuna partita disponibile</ha-card>`;const i=e.attributes.matches[0];return B`
      <ha-card class="${this._hasRecentEvent?"event-highlight":""}">
        <div class="background-logos">
          <div class="background-logo home-logo">
            <img src="${i.home_logo}" alt="Logo squadra di casa" />
          </div>
          <div class="background-logo away-logo">
            <img src="${i.away_logo}" alt="Logo squadra ospite" />
          </div>
        </div>
        <div class="match-wrapper">
          <div class="match-header">
            <div class="match-competition">
              ${i.venue} | <span class="match-date">${i.date}</span>
              ${"Scheduled"!==i.status?B`<span class="info-icon" @click="${()=>this.showDetails(i)}">Info</span>`:""}
            </div>
          </div>
          <div class="match">
            <img class="team-logo" src="${i.home_logo}" alt="${i.home_team}" />
            <div class="match-info">
              <div class="team-name">${i.home_team}</div>
                <div class="match-result">
                ${this.getMatchStatusText(i)} <!-- Mostra lo stato e il risultato -->
                </div>
              <div class="team-name">${i.away_team}</div>
            </div>
            <img class="team-logo" src="${i.away_logo}" alt="${i.away_team}" />
          </div>
        </div>
      </ha-card>
    `}updated(t){(t.has("showPopup")||t.has("activeMatch"))&&this.renderPopupToBody()}renderPopupToBody(){if(!this.showPopup||!this.activeMatch){const t=document.getElementById("calcio-live-team-popup");return void(t&&t.remove())}let t=document.getElementById("calcio-live-team-popup");t||(t=document.createElement("div"),t.id="calcio-live-team-popup",t.style.cssText="\n        position: fixed;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        z-index: 999999;\n        background: rgba(0, 0, 0, 0.6);\n        overflow: auto;\n      ",t.addEventListener("click",(e=>{e.target===t&&(this.showPopup=!1)})),document.body.appendChild(t)),t.innerHTML=`\n      <div style="background: white; padding: 20px; border-radius: 12px; width: 90%; max-width: 550px; max-height: 80vh; overflow-y: auto; border: 4px solid #1f5cff; box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4); margin: auto; color: #333;">\n        <h3 style="color: #1f5cff; margin-top: 0; margin-bottom: 16px; font-size: 20px; border-bottom: 2px solid #1f5cff; padding-bottom: 10px;">Dettagli Partita</h3>\n        <div style="display: flex; justify-content: center; align-items: center; margin-bottom: 20px;">\n          <img style="width: 70px; height: 70px; margin: 0 15px; border-radius: 8px;" src="${this.activeMatch.home_logo}" alt="${this.activeMatch.home_team}" />\n          <div style="text-align: center;">\n            <div style="font-size: 32px; font-weight: bold; color: #1f5cff; margin-bottom: 8px;">${this.activeMatch.home_score??"-"} - ${this.activeMatch.away_score??"-"}</div>\n            <span style="font-size: 14px; color: #666;">${this.activeMatch.clock??this.getMatchStatusText(this.activeMatch)}</span>\n          </div>\n          <img style="width: 70px; height: 70px; margin: 0 15px; border-radius: 8px;" src="${this.activeMatch.away_logo}" alt="${this.activeMatch.away_team}" />\n        </div>\n        <p style="text-align: center; color: #666; font-size: 14px; margin: 8px 0;"><strong style="color: #333;">${this.activeMatch.home_team}</strong> vs <strong style="color: #333;">${this.activeMatch.away_team}</strong></p>\n        <p style="color: #333;"><strong style="color: #333;">Formazione Casa:</strong> <span style="color: #2ecc71; font-weight: bold;">${this.activeMatch.home_form}</span></p>\n        <p style="color: #333;"><strong style="color: #333;">Formazione Trasferta:</strong> <span style="color: #e74c3c; font-weight: bold;">${this.activeMatch.away_form}</span></p>\n        <p style="margin-top: 15px; color: #333;"><strong style="color: #1f5cff;">Statistiche Casa:</strong></p>\n        <ul style="margin: 8px 0; padding-left: 20px; list-style: none;">\n          <li style="padding: 4px 0; color: #333;">Possesso Palla: <span style="color: #1f5cff; font-weight: bold;">${this.activeMatch.home_statistics?.possessionPct??"N/A"}%</span></li>\n          <li style="padding: 4px 0; color: #333;">Tiri Totali: <span style="color: #1f5cff; font-weight: bold;">${this.activeMatch.home_statistics?.totalShots??"N/A"}</span></li>\n          <li style="padding: 4px 0; color: #333;">Tiri in Porta: <span style="color: #1f5cff; font-weight: bold;">${this.activeMatch.home_statistics?.shotsOnTarget??"N/A"}</span></li>\n          <li style="padding: 4px 0; color: #333;">Falli Comessi: <span style="color: #1f5cff; font-weight: bold;">${this.activeMatch.home_statistics?.foulsCommitted??"N/A"}</span></li>\n          <li style="padding: 4px 0; color: #333;">Assist: <span style="color: #1f5cff; font-weight: bold;">${this.activeMatch.home_statistics?.goalAssists??"N/A"}</span></li>\n        </ul>\n        <p style="margin-top: 15px; color: #333;"><strong style="color: #1f5cff;">Statistiche Trasferta:</strong></p>\n        <ul style="margin: 8px 0; padding-left: 20px; list-style: none;">\n          <li style="padding: 4px 0; color: #333;">Possesso Palla: <span style="color: #1f5cff; font-weight: bold;">${this.activeMatch.away_statistics?.possessionPct??"N/A"}%</span></li>\n          <li style="padding: 4px 0; color: #333;">Tiri Totali: <span style="color: #1f5cff; font-weight: bold;">${this.activeMatch.away_statistics?.totalShots??"N/A"}</span></li>\n          <li style="padding: 4px 0; color: #333;">Tiri in Porta: <span style="color: #1f5cff; font-weight: bold;">${this.activeMatch.away_statistics?.shotsOnTarget??"N/A"}</span></li>\n          <li style="padding: 4px 0; color: #333;">Falli Comessi: <span style="color: #1f5cff; font-weight: bold;">${this.activeMatch.away_statistics?.foulsCommitted??"N/A"}</span></li>\n          <li style="padding: 4px 0; color: #333;">Assist: <span style="color: #1f5cff; font-weight: bold;">${this.activeMatch.away_statistics?.goalAssists??"N/A"}</span></li>\n        </ul>\n        <h4 style="color: #1f5cff; margin-top: 20px; margin-bottom: 12px; font-size: 16px; border-bottom: 2px solid #1f5cff; padding-bottom: 8px;">Eventi Partita</h4>\n        <div id="team-events-container"></div>\n        <button style="background: #1f5cff; color: white; padding: 12px 20px; border: none; border-radius: 6px; cursor: pointer; margin-top: 20px; font-weight: bold; width: 100%; font-size: 14px; transition: background 0.3s;" onclick="document.getElementById('calcio-live-team-popup').remove();" onmouseover="this.style.background='#1e5ad1';" onmouseout="this.style.background='#1f5cff';">Chiudi</button>\n      </div>\n    `;const e=t.querySelector("#team-events-container"),{goals:i,yellowCards:s,redCards:o}=this.separateEvents(this.activeMatch.match_details||[]);let a="";i.length>0&&(a+=`<div style="margin-bottom: 16px; padding: 12px; background: #f0f4ff; border-left: 4px solid #1f5cff; border-radius: 4px;"><h5 style="color: #1f5cff; font-weight: bold; margin: 0 0 8px 0; font-size: 14px;">Goal</h5><ul style="margin: 0; padding-left: 20px; list-style: none;"><li style="color: #333; padding: 2px 0;">${i.join('</li><li style="color: #333; padding: 2px 0;">')}</li></ul></div>`),s.length>0&&(a+=`<div style="margin-bottom: 16px; padding: 12px; background: #fffbf0; border-left: 4px solid #f39c12; border-radius: 4px;"><h5 style="color: #f39c12; font-weight: bold; margin: 0 0 8px 0; font-size: 14px;">Cartellini Gialli</h5><ul style="margin: 0; padding-left: 20px; list-style: none;"><li style="color: #333; padding: 2px 0;">${s.join('</li><li style="color: #333; padding: 2px 0;">')}</li></ul></div>`),o.length>0&&(a+=`<div style="margin-bottom: 16px; padding: 12px; background: #fef0f0; border-left: 4px solid #e74c3c; border-radius: 4px;"><h5 style="color: #e74c3c; font-weight: bold; margin: 0 0 8px 0; font-size: 14px;">Cartellini Rossi</h5><ul style="margin: 0; padding-left: 20px; list-style: none;"><li style="color: #333; padding: 2px 0;">${o.join('</li><li style="color: #333; padding: 2px 0;">')}</li></ul></div>`),e.innerHTML=a||'<p style="text-align: center; color: #999; font-size: 14px;">Nessun evento disponibile</p>'}static get styles(){return a`
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
      `}}),window.customCards=window.customCards||[],window.customCards.push({type:"calcio-live-team",name:"Calcio Live team Card",description:"Mostra le partite della tuo Team"}),customElements.define("calcio-live-team-editor",class extends at{static get properties(){return{_config:{type:Object},hass:{type:Object},entities:{type:Array}}}constructor(){super(),this._entity="",this.entities=[]}static get styles(){return a`
      .card-config {
        display: flex;
        flex-direction: column;
        gap: 20px; /* Spazio tra le opzioni */
      }
      .option {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;
      }
      ha-select {
        width: 100%; /* Larghezza piena per il campo dei sensori */
      }
      ha-textfield {
        width: 100%; /* Larghezza piena per i campi numerici */
      }
    `}setConfig(t){if(!t)throw new Error("Invalid configuration");this._config={...t},this._entity=this._config.entity||""}get config(){return this._config}updated(t){t.has("hass")&&this._fetchEntities(),t.has("_config")&&this._config&&this._config.entity&&(this._entity=this._config.entity)}configChanged(t){const e=new CustomEvent("config-changed",{detail:{config:t},bubbles:!0,composed:!0});this.dispatchEvent(e)}_EntityChanged(t){if(!this._config)return;const e={...this._config,entity:t.target.value};this._entity=t.target.value,this.configChanged(e)}_fetchEntities(){this.hass&&(this.entities=Object.keys(this.hass.states).filter((t=>t.startsWith("sensor.calciolive_next"))).sort())}_valueChanged(t){if(!this._config)return;const e=t.target,i="number"===e.type?parseInt(e.value,10):void 0!==e.checked?e.checked:e.value;if(e.configValue){const t={...this._config,[e.configValue]:i};this.configChanged(t)}}render(){return this._config&&this.hass?B`
        <div class="card-config">
          <h4>CalcioLive Sensor:</h4>
          <ha-select
              naturalMenuWidth
              fixedMenuPosition
              label="Entity"
              .configValue=${"entity"}
              .value=${this._entity}
              @change=${t=>this._EntityChanged(t,"entity")}
              @closed=${t=>t.stopPropagation()}
              >
              ${this.entities.map((t=>B`<ha-list-item .value=${t}>${t}</ha-list-item>`))}
          </ha-select>
        </div>
      `:B``}})})();