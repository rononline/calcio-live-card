/*! For license information please see calcio-live-card.bundle.js.LICENSE.txt */
(()=>{"use strict";const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,a=Symbol(),s=new WeakMap;class i{constructor(t,e,s){if(this._$cssResult$=!0,s!==a)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const a=this.t;if(e&&void 0===t){const e=void 0!==a&&1===a.length;e&&(t=s.get(a)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&s.set(a,t))}return t}toString(){return this.cssText}}const o=(t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,a,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+t[s+1]),t[0]);return new i(s,t,a)},n=(a,s)=>{if(e)a.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of s){const s=document.createElement("style"),i=t.litNonce;void 0!==i&&s.setAttribute("nonce",i),s.textContent=e.cssText,a.appendChild(s)}},r=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const a of t.cssRules)e+=a.cssText;return(t=>new i("string"==typeof t?t:t+"",void 0,a))(e)})(t):t,{is:l,defineProperty:c,getOwnPropertyDescriptor:d,getOwnPropertyNames:h,getOwnPropertySymbols:p,getPrototypeOf:g}=Object,u=globalThis,m=u.trustedTypes,f=m?m.emptyScript:"",v=u.reactiveElementPolyfillSupport,b=(t,e)=>t,x={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let a=t;switch(e){case Boolean:a=null!==t;break;case Number:a=null===t?null:Number(t);break;case Object:case Array:try{a=JSON.parse(t)}catch(t){a=null}}return a}},_=(t,e)=>!l(t,e),y={attribute:!0,type:String,converter:x,reflect:!1,hasChanged:_};Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;class w extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=y){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const a=Symbol(),s=this.getPropertyDescriptor(t,a,e);void 0!==s&&c(this.prototype,t,s)}}static getPropertyDescriptor(t,e,a){const{get:s,set:i}=d(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return s?.call(this)},set(e){const o=s?.call(this);i.call(this,e),this.requestUpdate(t,o,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??y}static _$Ei(){if(this.hasOwnProperty(b("elementProperties")))return;const t=g(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(b("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(b("properties"))){const t=this.properties,e=[...h(t),...p(t)];for(const a of e)this.createProperty(a,t[a])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,a]of e)this.elementProperties.set(t,a)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const a=this._$Eu(t,e);void 0!==a&&this._$Eh.set(a,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const a=new Set(t.flat(1/0).reverse());for(const t of a)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Eu(t,e){const a=e.attribute;return!1===a?void 0:"string"==typeof a?a:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const a of e.keys())this.hasOwnProperty(a)&&(t.set(a,this[a]),delete this[a]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return n(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,a){this._$AK(t,a)}_$EC(t,e){const a=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,a);if(void 0!==s&&!0===a.reflect){const i=(void 0!==a.converter?.toAttribute?a.converter:x).toAttribute(e,a.type);this._$Em=t,null==i?this.removeAttribute(s):this.setAttribute(s,i),this._$Em=null}}_$AK(t,e){const a=this.constructor,s=a._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=a.getPropertyOptions(s),i="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:x;this._$Em=s,this[s]=i.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,a){if(void 0!==t){if(a??=this.constructor.getPropertyOptions(t),!(a.hasChanged??_)(this[t],e))return;this.P(t,e,a)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,a){this._$AL.has(t)||this._$AL.set(t,e),!0===a.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,a]of t)!0!==a.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],a)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[b("elementProperties")]=new Map,w[b("finalized")]=new Map,v?.({ReactiveElement:w}),(u.reactiveElementVersions??=[]).push("2.0.4");const $=globalThis,k=$.trustedTypes,E=k?k.createPolicy("lit-html",{createHTML:t=>t}):void 0,C="$lit$",A=`lit$${Math.random().toFixed(9).slice(2)}$`,S="?"+A,z=`<${S}>`,T=document,M=()=>T.createComment(""),P=t=>null===t||"object"!=typeof t&&"function"!=typeof t,L=Array.isArray,V="[ \t\n\f\r]",N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,O=/-->/g,H=/>/g,U=RegExp(`>|${V}(?:([^\\s"'>=/]+)(${V}*=${V}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),j=/'/g,D=/"/g,R=/^(?:script|style|textarea|title)$/i,B=t=>(e,...a)=>({_$litType$:t,strings:e,values:a}),I=B(1),G=(B(2),B(3),Symbol.for("lit-noChange")),F=Symbol.for("lit-nothing"),W=new WeakMap,q=T.createTreeWalker(T,129);function X(t,e){if(!L(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(e):e}class K{constructor({strings:t,_$litType$:e},a){let s;this.parts=[];let i=0,o=0;const n=t.length-1,r=this.parts,[l,c]=((t,e)=>{const a=t.length-1,s=[];let i,o=2===e?"<svg>":3===e?"<math>":"",n=N;for(let e=0;e<a;e++){const a=t[e];let r,l,c=-1,d=0;for(;d<a.length&&(n.lastIndex=d,l=n.exec(a),null!==l);)d=n.lastIndex,n===N?"!--"===l[1]?n=O:void 0!==l[1]?n=H:void 0!==l[2]?(R.test(l[2])&&(i=RegExp("</"+l[2],"g")),n=U):void 0!==l[3]&&(n=U):n===U?">"===l[0]?(n=i??N,c=-1):void 0===l[1]?c=-2:(c=n.lastIndex-l[2].length,r=l[1],n=void 0===l[3]?U:'"'===l[3]?D:j):n===D||n===j?n=U:n===O||n===H?n=N:(n=U,i=void 0);const h=n===U&&t[e+1].startsWith("/>")?" ":"";o+=n===N?a+z:c>=0?(s.push(r),a.slice(0,c)+C+a.slice(c)+A+h):a+A+(-2===c?e:h)}return[X(t,o+(t[a]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]})(t,e);if(this.el=K.createElement(l,a),q.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=q.nextNode())&&r.length<n;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(C)){const e=c[o++],a=s.getAttribute(t).split(A),n=/([.?@])?(.*)/.exec(e);r.push({type:1,index:i,name:n[2],strings:a,ctor:"."===n[1]?tt:"?"===n[1]?et:"@"===n[1]?at:Q}),s.removeAttribute(t)}else t.startsWith(A)&&(r.push({type:6,index:i}),s.removeAttribute(t));if(R.test(s.tagName)){const t=s.textContent.split(A),e=t.length-1;if(e>0){s.textContent=k?k.emptyScript:"";for(let a=0;a<e;a++)s.append(t[a],M()),q.nextNode(),r.push({type:2,index:++i});s.append(t[e],M())}}}else if(8===s.nodeType)if(s.data===S)r.push({type:2,index:i});else{let t=-1;for(;-1!==(t=s.data.indexOf(A,t+1));)r.push({type:7,index:i}),t+=A.length-1}i++}}static createElement(t,e){const a=T.createElement("template");return a.innerHTML=t,a}}function Y(t,e,a=t,s){if(e===G)return e;let i=void 0!==s?a.o?.[s]:a.l;const o=P(e)?void 0:e._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),void 0===o?i=void 0:(i=new o(t),i._$AT(t,a,s)),void 0!==s?(a.o??=[])[s]=i:a.l=i),void 0!==i&&(e=Y(t,i._$AS(t,e.values),i,s)),e}class J{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:a}=this._$AD,s=(t?.creationScope??T).importNode(e,!0);q.currentNode=s;let i=q.nextNode(),o=0,n=0,r=a[0];for(;void 0!==r;){if(o===r.index){let e;2===r.type?e=new Z(i,i.nextSibling,this,t):1===r.type?e=new r.ctor(i,r.name,r.strings,this,t):6===r.type&&(e=new st(i,this,t)),this._$AV.push(e),r=a[++n]}o!==r?.index&&(i=q.nextNode(),o++)}return q.currentNode=T,s}p(t){let e=0;for(const a of this._$AV)void 0!==a&&(void 0!==a.strings?(a._$AI(t,a,e),e+=a.strings.length-2):a._$AI(t[e])),e++}}class Z{get _$AU(){return this._$AM?._$AU??this.v}constructor(t,e,a,s){this.type=2,this._$AH=F,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=a,this.options=s,this.v=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Y(this,t,e),P(t)?t===F||null==t||""===t?(this._$AH!==F&&this._$AR(),this._$AH=F):t!==this._$AH&&t!==G&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>L(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==F&&P(this._$AH)?this._$AA.nextSibling.data=t:this.T(T.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:a}=t,s="number"==typeof a?this._$AC(t):(void 0===a.el&&(a.el=K.createElement(X(a.h,a.h[0]),this.options)),a);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new J(s,this),a=t.u(this.options);t.p(e),this.T(a),this._$AH=t}}_$AC(t){let e=W.get(t.strings);return void 0===e&&W.set(t.strings,e=new K(t)),e}k(t){L(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let a,s=0;for(const i of t)s===e.length?e.push(a=new Z(this.O(M()),this.O(M()),this,this.options)):a=e[s],a._$AI(i),s++;s<e.length&&(this._$AR(a&&a._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this.v=t,this._$AP?.(t))}}class Q{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,a,s,i){this.type=1,this._$AH=F,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=i,a.length>2||""!==a[0]||""!==a[1]?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=F}_$AI(t,e=this,a,s){const i=this.strings;let o=!1;if(void 0===i)t=Y(this,t,e,0),o=!P(t)||t!==this._$AH&&t!==G,o&&(this._$AH=t);else{const s=t;let n,r;for(t=i[0],n=0;n<i.length-1;n++)r=Y(this,s[a+n],e,n),r===G&&(r=this._$AH[n]),o||=!P(r)||r!==this._$AH[n],r===F?t=F:t!==F&&(t+=(r??"")+i[n+1]),this._$AH[n]=r}o&&!s&&this.j(t)}j(t){t===F?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends Q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===F?void 0:t}}class et extends Q{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==F)}}class at extends Q{constructor(t,e,a,s,i){super(t,e,a,s,i),this.type=5}_$AI(t,e=this){if((t=Y(this,t,e,0)??F)===G)return;const a=this._$AH,s=t===F&&a!==F||t.capture!==a.capture||t.once!==a.once||t.passive!==a.passive,i=t!==F&&(a===F||s);s&&this.element.removeEventListener(this.name,this,a),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class st{constructor(t,e,a){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=a}get _$AU(){return this._$AM._$AU}_$AI(t){Y(this,t)}}const it=$.litHtmlPolyfillSupport;it?.(K,Z),($.litHtmlVersions??=[]).push("3.2.0");class ot extends w{constructor(){super(...arguments),this.renderOptions={host:this},this.o=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this.o=((t,e,a)=>{const s=a?.renderBefore??e;let i=s._$litPart$;if(void 0===i){const t=a?.renderBefore??null;s._$litPart$=i=new Z(e.insertBefore(M(),t),t,void 0,a??{})}return i._$AI(t),i})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this.o?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this.o?.setConnected(!1)}render(){return G}}ot._$litElement$=!0,ot.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:ot});const nt=globalThis.litElementPolyfillSupport;nt?.({LitElement:ot}),(globalThis.litElementVersions??=[]).push("4.1.0"),customElements.define("calcio-live-classifica",class extends ot{static get properties(){return{hass:{},_config:{},maxTeamsVisible:{type:Number},hideHeader:{type:Boolean},selectedGroup:{type:String},_eventSubscriptions:{type:Array},_toastMessage:{type:String},_toastVisible:{type:Boolean},_toastVariant:{type:String}}}setConfig(t){if(!t.entity)throw new Error("Devi definire un'entità");this._config=t,this.maxTeamsVisible=t.max_teams_visible?t.max_teams_visible:10,this.hideHeader=t.hide_header||!1,this.selectedGroup=t.selected_group||"",this.showEventToasts=!0===t.show_event_toasts,this._toastMessage="",this._toastVisible=!1,this._toastVariant="goal",this._toastTimer=null}connectedCallback(){super.connectedCallback(),this._subscribeToEvents()}disconnectedCallback(){super.disconnectedCallback(),this._eventSubscriptions&&Array.isArray(this._eventSubscriptions)&&(this._eventSubscriptions.forEach((t=>{t&&t.unsubscribe()})),this._eventSubscriptions=[])}_subscribeToEvents(){this.hass&&this.hass.connection&&(this._eventSubscriptions=[],["calcio_live_goal","calcio_live_yellow_card","calcio_live_red_card","calcio_live_match_finished"].forEach((t=>{this._eventSubscriptions.push(this.hass.connection.subscribeEvents(this._handleCalcioLiveEvent.bind(this),t))})))}_eventBelongsToThisCard(t){if(!this.hass||!this._config)return!1;const e=this._config.entity||"",a=t.competition_code;if(!a)return!1;const s=a.replace(/\./g,"_").toLowerCase();return e.toLowerCase().includes(s)}_handleCalcioLiveEvent(t){const e=t.event_type,a=t.data;this._eventBelongsToThisCard(a)&&this.showEventToasts&&this._showEventToast(e,a)}_showEventToast(t,e){let a="",s="goal";"calcio_live_goal"===t?(a=`<strong>GOAL!</strong> ${e.player} · ${e.home_team} ${e.home_score} - ${e.away_score} ${e.away_team}`,s="goal"):"calcio_live_yellow_card"===t?(a=`🟨 <strong>Cartellino Giallo</strong> · ${e.player}${e.minute?` (${e.minute}')`:""}`,s="yellow"):"calcio_live_red_card"===t?(a=`🟥 <strong>Cartellino Rosso</strong> · ${e.player}${e.minute?` (${e.minute}')`:""}`,s="red"):"calcio_live_match_finished"===t&&(a=`<strong>Finita!</strong> ${e.home_team} ${e.home_score} - ${e.away_score} ${e.away_team}`,s="finished"),a&&(this._toastMessage=a,this._toastVariant=s,this._toastVisible=!0,this._toastTimer&&clearTimeout(this._toastTimer),this._toastTimer=setTimeout((()=>{this._toastVisible=!1,this.requestUpdate()}),4e3),this.requestUpdate())}getCardSize(){return 5}static getConfigElement(){return document.createElement("calcio-live-classifica-editor")}static getStubConfig(){return{entity:"sensor.calcio_live",max_teams_visible:10,hide_header:!1,selected_group:"",show_event_toasts:!1}}_zoneClass(t,e){return 1===t?"zone-cl rank-first":t<=4?"zone-cl":t<=6?"zone-el":e&&t>e-3?"zone-rel":"zone-default"}render(){if(!this.hass||!this._config)return I``;const t=this._config.entity,e=this.hass.states[t];if(!e)return I`<ha-card class="empty">Entità sconosciuta: ${t}</ha-card>`;const a=e.attributes.season||"",s=e.attributes.standings_groups||[],i=s.find((t=>t.name===this.selectedGroup))||s[0];let o=i?i.standings:[];o=o.filter((t=>null!=t.rank)),a.includes("MLS")?(o=o.slice().sort(((t,e)=>e.points!==t.points?e.points-t.points:e.goal_difference!==t.goal_difference?e.goal_difference-t.goal_difference:e.goals_for-t.goals_for)),o.forEach(((t,e)=>{t.rank=e+1}))):o=o.slice().sort(((t,e)=>t.rank-e.rank));const n=o.length,r=48*Math.min(this.maxTeamsVisible,n)+50;return I`
      <ha-card>
        ${this.showEventToasts&&this._toastVisible?I`
          <div class="event-toast variant-${this._toastVariant}" .innerHTML=${this._toastMessage}></div>
        `:""}

        ${this.hideHeader?"":I`
          <div class="top-bar">
            <h2>${e.state}</h2>
            <div class="sub">${a} ${i&&i.name?`· ${i.name}`:""}</div>
          </div>
        `}

        <div class="table-wrap" style="max-height: ${r}px;">
          <table class="standings-table">
            <thead>
              <tr>
                <th>#</th>
                <th class="team-col">Squadra</th>
                <th>P</th>
                <th>V</th>
                <th>N</th>
                <th>S</th>
                <th>+/-</th>
                <th>Pt</th>
              </tr>
            </thead>
            <tbody>
              ${o.map((t=>{const e=t.goal_difference,a=e>0?"gd-pos":e<0?"gd-neg":"";return I`
                  <tr class="${this._zoneClass(t.rank,n)}">
                    <td><div class="rank-cell"><div class="rank-num">${t.rank}</div></div></td>
                    <td class="team-cell">
                      <img src="${t.team_logo}" alt="${t.team_name}" />
                      <span class="tname">${t.team_name}</span>
                    </td>
                    <td>${null!=t.points?t.wins+t.draws+t.losses:"-"}</td>
                    <td>${t.wins??"-"}</td>
                    <td>${t.draws??"-"}</td>
                    <td>${t.losses??"-"}</td>
                    <td class="${a}">${e>0?"+":""}${e??"-"}</td>
                    <td class="points-cell">${t.points??"-"}</td>
                  </tr>
                `}))}
            </tbody>
          </table>
        </div>

        <div class="legend">
          <div class="legend-item"><span class="legend-dot cl"></span>Champions</div>
          <div class="legend-item"><span class="legend-dot el"></span>Europa</div>
          <div class="legend-item"><span class="legend-dot rel"></span>Retrocessione</div>
        </div>
      </ha-card>
    `}static get styles(){return o`
      :host {
        --cl-accent: #6366f1;
        --cl-accent-2: #ec4899;
        --cl-live: #ef4444;
        --cl-green: #10b981;
        --cl-gold: #fbbf24;
        --cl-gold-glow: rgba(251,191,36,0.4);
        --cl-gold-text: #fde047;
        --cl-card-2: rgba(255,255,255,0.05);
        --cl-divider: rgba(255,255,255,0.08);
        --cl-cl: #6366f1;
        --cl-el: #f97316;
        --cl-rel: #ef4444;
      }
      ha-card {
        position: relative;
        overflow: hidden;
        border-radius: 20px;
        padding: 0;
        box-shadow: 0 4px 24px rgba(0,0,0,0.15);
      }
      ha-card.empty {
        padding: 24px;
        text-align: center;
        color: var(--secondary-text-color);
      }

      .top-bar {
        position: relative;
        padding: 20px 18px;
        background:
          linear-gradient(135deg, rgba(99,102,241,0.15), rgba(236,72,153,0.10) 60%, transparent);
        border-bottom: 1px solid var(--cl-divider);
        overflow: hidden;
      }
      .top-bar::before {
        content: '⚽';
        position: absolute;
        right: -10px; top: -10px;
        font-size: 90px;
        opacity: 0.06;
        transform: rotate(15deg);
      }
      .top-bar h2 {
        margin: 0;
        font-size: 20px;
        font-weight: 900;
        letter-spacing: -0.03em;
        background: linear-gradient(135deg, var(--primary-text-color), var(--cl-accent));
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .top-bar .sub {
        color: var(--secondary-text-color);
        font-size: 12px;
        margin-top: 4px;
        font-weight: 500;
      }

      .table-wrap {
        overflow-y: auto;
      }
      .standings-table {
        width: 100%;
        border-collapse: separate;
        border-spacing: 0;
        font-size: 13px;
      }
      .standings-table thead th {
        position: sticky;
        top: 0;
        background: var(--cl-card-2);
        backdrop-filter: blur(8px);
        padding: 10px 4px;
        text-align: center;
        font-size: 10px;
        font-weight: 800;
        color: var(--secondary-text-color);
        text-transform: uppercase;
        letter-spacing: 0.1em;
        border-bottom: 1px solid var(--cl-divider);
        z-index: 1;
      }
      .standings-table thead th:first-child { padding-left: 14px; text-align: left; }
      .standings-table thead th:last-child { padding-right: 14px; }
      .standings-table thead th.team-col { text-align: left; }

      .standings-table tbody tr {
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
      }
      .standings-table tbody tr:hover {
        background: var(--cl-card-2);
      }
      .standings-table tbody td {
        padding: 10px 4px;
        text-align: center;
        border-bottom: 1px solid var(--cl-divider);
        font-variant-numeric: tabular-nums;
        font-weight: 600;
        color: var(--primary-text-color);
      }
      .standings-table tbody tr:last-child td { border-bottom: none; }
      .standings-table tbody td:first-child { padding-left: 14px; text-align: left; }
      .standings-table tbody td:last-child { padding-right: 14px; }

      .rank-cell {
        display: flex; align-items: center; gap: 6px;
        font-weight: 800;
      }
      .rank-num {
        width: 24px; height: 24px;
        border-radius: 7px;
        display: flex; align-items: center; justify-content: center;
        font-size: 11px;
        font-weight: 900;
      }
      .zone-cl .rank-num {
        background: linear-gradient(135deg, var(--cl-cl), #4f46e5);
        color: white;
        box-shadow: 0 2px 12px rgba(99,102,241,0.4);
      }
      .zone-cl.rank-first .rank-num {
        background: linear-gradient(135deg, var(--cl-gold), #d97706);
        color: #1f1410;
        box-shadow: 0 2px 16px var(--cl-gold-glow);
        animation: gold-shimmer 3s ease-in-out infinite;
      }
      @keyframes gold-shimmer {
        0%, 100% { box-shadow: 0 2px 16px var(--cl-gold-glow); }
        50% { box-shadow: 0 2px 24px var(--cl-gold-glow), 0 0 32px var(--cl-gold-glow); }
      }
      .zone-el .rank-num {
        background: linear-gradient(135deg, var(--cl-el), #ea580c);
        color: white;
        box-shadow: 0 2px 12px rgba(249,115,22,0.4);
      }
      .zone-rel .rank-num {
        background: linear-gradient(135deg, var(--cl-rel), #b91c1c);
        color: white;
        box-shadow: 0 2px 12px rgba(239,68,68,0.4);
      }
      .zone-default .rank-num {
        background: var(--cl-card-2);
        color: var(--secondary-text-color);
      }

      .team-cell {
        display: flex; align-items: center; gap: 10px;
        text-align: left !important;
      }
      .team-cell img {
        width: 24px; height: 24px;
        object-fit: contain;
        flex-shrink: 0;
      }
      .team-cell .tname {
        font-weight: 700;
        font-size: 13px;
        letter-spacing: -0.01em;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .points-cell {
        font-weight: 900 !important;
        font-size: 14px !important;
      }
      .gd-pos { color: var(--cl-green); font-weight: 800 !important; }
      .gd-neg { color: var(--cl-live); font-weight: 800 !important; }

      .legend {
        display: flex; flex-wrap: wrap;
        gap: 12px;
        padding: 12px 16px;
        border-top: 1px solid var(--cl-divider);
        background: var(--cl-card-2);
      }
      .legend-item {
        display: flex; align-items: center; gap: 6px;
        font-size: 10px;
        color: var(--secondary-text-color);
        font-weight: 700;
        letter-spacing: 0.04em;
      }
      .legend-dot {
        width: 10px; height: 10px; border-radius: 3px;
      }
      .legend-dot.cl { background: linear-gradient(135deg, var(--cl-cl), #4f46e5); }
      .legend-dot.el { background: linear-gradient(135deg, var(--cl-el), #ea580c); }
      .legend-dot.rel { background: linear-gradient(135deg, var(--cl-rel), #b91c1c); }

      /* Toast */
      .event-toast {
        position: absolute;
        top: 12px;
        left: 50%;
        transform: translateX(-50%);
        background: #0b0f1a;
        color: #ffffff;
        padding: 10px 18px;
        border-radius: 14px;
        font-size: 13px;
        font-weight: 800;
        z-index: 100;
        animation: toast-bounce 4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        pointer-events: none;
        max-width: 90%;
        text-align: center;
        letter-spacing: -0.01em;
        text-shadow: 0 1px 2px rgba(0,0,0,0.8);
      }
      .event-toast.variant-goal {
        box-shadow: 0 0 0 2px var(--cl-gold), 0 0 0 4px rgba(251,191,36,0.3),
                    0 12px 40px rgba(0,0,0,0.7), 0 0 60px rgba(251,191,36,0.4);
      }
      .event-toast.variant-goal strong { color: var(--cl-gold-text); }
      .event-toast.variant-yellow {
        box-shadow: 0 0 0 2px #f59e0b, 0 0 0 4px rgba(245,158,11,0.3), 0 12px 40px rgba(0,0,0,0.7);
      }
      .event-toast.variant-yellow strong { color: #fbbf24; }
      .event-toast.variant-red {
        box-shadow: 0 0 0 2px var(--cl-live), 0 0 0 4px rgba(239,68,68,0.3), 0 12px 40px rgba(0,0,0,0.7);
      }
      .event-toast.variant-red strong { color: #fca5a5; }
      .event-toast.variant-finished {
        box-shadow: 0 0 0 2px var(--cl-green), 0 0 0 4px rgba(16,185,129,0.3), 0 12px 40px rgba(0,0,0,0.7);
      }
      .event-toast.variant-finished strong { color: #6ee7b7; }
      @keyframes toast-bounce {
        0%   { opacity: 0; transform: translate(-50%, -20px) scale(0.7); }
        8%   { opacity: 1; transform: translate(-50%, 0) scale(1.08); }
        14%  { transform: translate(-50%, 0) scale(1); }
        90%  { opacity: 1; transform: translate(-50%, 0) scale(1); }
        100% { opacity: 0; transform: translate(-50%, -10px) scale(0.95); }
      }
    `}}),window.customCards=window.customCards||[],window.customCards.push({type:"calcio-live-classifica",name:"Calcio Live Classifica Card",description:"Mostra la classifica del campionato o coppe"}),customElements.define("calcio-live-classifica-editor",class extends ot{static get properties(){return{_config:{type:Object},hass:{type:Object},entities:{type:Array},groups:{type:Array}}}constructor(){super(),this._entity="",this.entities=[],this.groups=[]}static get styles(){return o`
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
    `}setConfig(t){if(!t)throw new Error("Invalid configuration");this._config={...t},this._entity=this._config.entity||""}get config(){return this._config}updated(t){t.has("hass")&&this._fetchEntities(),t.has("_config")&&this._config&&this._config.entity&&(this._entity=this._config.entity,this._fetchGroups())}configChanged(t){const e=new CustomEvent("config-changed",{detail:{config:t},bubbles:!0,composed:!0});this.dispatchEvent(e)}_EntityChanged(t){if(!this._config)return;const e={...this._config,entity:t.target.value};this._entity=t.target.value,this.configChanged(e)}_fetchEntities(){this.hass&&(this.entities=Object.keys(this.hass.states).filter((t=>t.startsWith("sensor.calciolive_classifica"))).sort())}_fetchGroups(){const t=this._config.entity;if(this.hass&&t){const e=this.hass.states[t];e&&e.attributes.standings_groups?this.groups=e.attributes.standings_groups.map((t=>t.name)):this.groups=[]}}_valueChanged(t){if(!this._config)return;const e=t.target,a="number"===e.type?parseInt(e.value,10):void 0!==e.checked?e.checked:e.value;if(e.configValue){const t={...this._config,[e.configValue]:a};this.configChanged(t)}}_groupChanged(t){if(!this._config)return;const e=t.target.value,a={...this._config,selected_group:e};this.configChanged(a)}render(){return this._config&&this.hass?I`
        <div class="card-config">
          <h3>CalcioLive Sensor:</h3>
          <ha-select
              naturalMenuWidth
              fixedMenuPosition
              label="Entity"
              .configValue=${"entity"}
              .value=${this._entity}
              @selected=${this._EntityChanged}
              @closed=${t=>t.stopPropagation()}
              >
              ${this.entities.map((t=>I`<ha-list-item .value=${t}>${t}</ha-list-item>`))}
          </ha-select>
              
        <h3>Settings:</h3>
              
        <div class="option">
          <ha-select
            label="Select Group"
            .value=${this._config.selected_group||""}
            .configValue=${"selected_group"}
            @selected=${this._groupChanged}
            @closed=${t=>t.stopPropagation()} 
          >
            ${this.groups.length?this.groups.map((t=>I`
                  <ha-list-item .value=${t}>${t}</ha-list-item>
                `)):I`<ha-list-item .value="">Nessun gruppo disponibile</ha-list-item>`}
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
          <ha-switch
            .checked=${!0===this._config.show_event_toasts}
            @change=${this._valueChanged}
            .configValue=${"show_event_toasts"}
          >
          </ha-switch>
          <label>Show Event Toasts (in-card)</label>
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
      `:I``}}),customElements.define("calcio-live-matches",class extends ot{static get properties(){return{hass:{},_config:{},showPopup:{type:Boolean},activeMatch:{type:Object},_eventSubscriptions:{type:Array},_recentEventMatches:{type:Object},_toastMessage:{type:String},_toastVisible:{type:Boolean},_toastVariant:{type:String}}}constructor(){super(),this._recentEventMatches=new Map,this._eventSubscriptions=[],this._toastMessage="",this._toastVisible=!1,this._toastVariant="goal",this._toastTimer=null}setConfig(t){if(!t.entity)throw new Error("Devi definire un'entità");this._config=t,this.maxEventsVisible=t.max_events_visible?t.max_events_visible:5,this.maxEventsTotal=t.max_events_total?t.max_events_total:50,this.showFinishedMatches=void 0===t.show_finished_matches||t.show_finished_matches,this.hideHeader=void 0!==t.hide_header&&t.hide_header,this.hidePastDays=void 0!==t.hide_past_days?t.hide_past_days:0,this.showEventToasts=!0===t.show_event_toasts,this.activeMatch=null,this.showPopup=!1}connectedCallback(){super.connectedCallback(),this._subscribeToEvents()}disconnectedCallback(){super.disconnectedCallback(),this._eventSubscriptions&&Array.isArray(this._eventSubscriptions)&&(this._eventSubscriptions.forEach((t=>{t&&t.unsubscribe()})),this._eventSubscriptions=[])}_subscribeToEvents(){this.hass&&this.hass.connection&&(this._eventSubscriptions=[],["calcio_live_goal","calcio_live_yellow_card","calcio_live_red_card"].forEach((t=>{this._eventSubscriptions.push(this.hass.connection.subscribeEvents(this._handleCalcioLiveEvent.bind(this),t))})))}_eventBelongsToThisCard(t){if(!this.hass||!this._config)return!1;const e=this.hass.states[this._config.entity];return!!e&&(e.attributes.matches||[]).some((e=>e.home_team===t.home_team&&e.away_team===t.away_team))}_handleCalcioLiveEvent(t){const e=t.event_type,a=t.data;if(!this._eventBelongsToThisCard(a))return;const s=`${a.home_team}_${a.away_team}`;this._recentEventMatches.set(s,"calcio_live_goal"===e?"goal":"card"),this.requestUpdate(),setTimeout((()=>{this._recentEventMatches.delete(s),this.requestUpdate()}),5e3),this.showEventToasts&&this._showEventToast(e,a)}_showEventToast(t,e){let a="",s="goal";"calcio_live_goal"===t?(a=`<strong>GOAL!</strong> ${e.player} · ${e.home_team} ${e.home_score} - ${e.away_score} ${e.away_team}`,s="goal"):"calcio_live_yellow_card"===t?(a=`🟨 <strong>Cartellino Giallo</strong> · ${e.player}${e.minute?` (${e.minute}')`:""}`,s="yellow"):"calcio_live_red_card"===t&&(a=`🟥 <strong>Cartellino Rosso</strong> · ${e.player}${e.minute?` (${e.minute}')`:""}`,s="red"),a&&(this._toastMessage=a,this._toastVariant=s,this._toastVisible=!0,this._toastTimer&&clearTimeout(this._toastTimer),this._toastTimer=setTimeout((()=>{this._toastVisible=!1,this.requestUpdate()}),4e3),this.requestUpdate())}getCardSize(){return 4}static getConfigElement(){return document.createElement("calcio-live-matches-editor")}static getStubConfig(){return{entity:"sensor.calcio_live",max_events_visible:5,max_events_total:50,hide_past_days:0,show_finished_matches:!0,hide_header:!1,show_event_toasts:!1}}_parseMatchDate(t){if(!t)return null;const[e,a]=t.split(" "),[s,i,o]=e.split("/").map(Number),[n,r]=a?a.split(":").map(Number):[0,0];return new Date(o,i-1,s,n,r)}_matchTimeLabel(t){if("in"===t.state)return t.clock&&"N/A"!==t.clock?t.clock:"LIVE";if("post"===t.state)return"FT";if(t.date){const e=t.date.split(" ");return e[1]||e[0]}return"—"}_matchScore(t,e){return"pre"===t.state?"-":t["home"===e?"home_score":"away_score"]??"-"}_isWinner(t,e){if("pre"===t.state)return null;const a=parseInt(t.home_score),s=parseInt(t.away_score);return isNaN(a)||isNaN(s)||a===s?null:"home"===e?a>s:s>a}_dayKey(t){if(!t.date)return"Altro";const e=this._parseMatchDate(t.date);if(!e)return t.date.split(" ")[0]||"Altro";const a=new Date;a.setHours(0,0,0,0);const s=new Date(e);s.setHours(0,0,0,0);const i=Math.round((s-a)/864e5);return 0===i?"⚡ Oggi":-1===i?"Ieri":1===i?"Domani":`${s.getDate()} ${["Gen","Feb","Mar","Apr","Mag","Giu","Lug","Ago","Set","Ott","Nov","Dic"][s.getMonth()]}`}showDetails(t){this.activeMatch=t,this.showPopup=!0}closePopup(){this.showPopup=!1}separateEvents(t){const e=[],a=[],s=[];return t.forEach((t=>{t.includes("Goal")||t.includes("Penalty - Scored")?e.push(t):t.includes("Yellow Card")?a.push(t):t.includes("Red Card")&&s.push(t)})),{goals:e,yellowCards:a,redCards:s}}render(){if(!this.hass||!this._config)return I``;const t=this._config.entity,e=this.hass.states[t];if(!e)return I`<ha-card class="empty">Entità sconosciuta: ${t}</ha-card>`;let a=e.attributes.matches||[];const s=e.attributes.league_info?e.attributes.league_info[0]:null,i=e.attributes.team_logo||null;if(this.showFinishedMatches||(a=a.filter((t=>"Full Time"!==t.status))),a=a.slice().sort(((t,e)=>new Date(t.date)-new Date(e.date))),this.hidePastDays>0){const t=new Date;t.setDate(t.getDate()-this.hidePastDays),a=a.filter((e=>{const a=this._parseMatchDate(e.date);return!a||a>=t}))}const o=a.slice(0,this.maxEventsTotal);if(0===o.length)return I`<ha-card class="empty">Nessuna partita disponibile</ha-card>`;const n=o.filter((t=>"in"===t.state)).length,r=[];let l=null;o.forEach((t=>{const e=this._dayKey(t);e!==l?(l=e,r.push({key:e,matches:[t]})):r[r.length-1].matches.push(t)}));const c=Math.max(80*this.maxEventsVisible,240);return I`
      <ha-card>
        <div class="hero-bg"></div>

        ${this.showEventToasts&&this._toastVisible?I`
          <div class="event-toast variant-${this._toastVariant}" .innerHTML=${this._toastMessage}></div>
        `:""}

        ${this.hideHeader?"":I`
          <div class="matches-header">
            ${s&&s.logo_href?I`<img class="league-logo" src="${s.logo_href}" alt="${s.abbreviation||""}" />`:i?I`<img class="league-logo" src="${i}" alt="" />`:""}
            <div class="league-info">
              <div class="league-name">${s&&s.abbreviation||e.state||"Calcio Live"}</div>
              <div class="league-dates">
                ${s&&s.startDate?`${s.startDate} → ${s.endDate}`:`${o.length} partite`}
              </div>
            </div>
            ${n>0?I`<span class="live-counter">${n} LIVE</span>`:""}
          </div>
        `}

        <div class="scroll-content" style="max-height: ${c}px;">
          ${r.map((t=>I`
            <div class="day-divider ${t.key.includes("Oggi")?"today":""}">${t.key}</div>
            ${t.matches.map((t=>{const e=`${t.home_team}_${t.away_team}`,a="in"===t.state,s=this._recentEventMatches.get(e),i=this._isWinner(t,"home"),o=this._isWinner(t,"away");return I`
                <div class="match-row ${a?"live":""} ${"goal"===s?"goal-pulse":""} ${"card"===s?"card-pulse":""}"
                     @click="${()=>this.showDetails(t)}">
                  <div class="match-time ${a?"live-time":""} ${"post"===t.state?"ft":""}">
                    ${this._matchTimeLabel(t)}
                  </div>
                  <div class="match-teams">
                    <div class="match-team">
                      <img src="${t.home_logo}" alt="${t.home_team}" />
                      <span class="name ${!0===i?"winner":!1===i?"loser":""}">${t.home_team}</span>
                      <span class="score ${!0===i?"winner":!1===i?"loser":""}">${this._matchScore(t,"home")}</span>
                    </div>
                    <div class="match-team">
                      <img src="${t.away_logo}" alt="${t.away_team}" />
                      <span class="name ${!0===o?"winner":!1===o?"loser":""}">${t.away_team}</span>
                      <span class="score ${!0===o?"winner":!1===o?"loser":""}">${this._matchScore(t,"away")}</span>
                    </div>
                  </div>
                  <div class="match-status-icon">›</div>
                </div>
              `}))}
          `))}
        </div>
      </ha-card>
    `}updated(t){(t.has("showPopup")||t.has("activeMatch"))&&this.renderPopupToBody()}renderPopupToBody(){if(!this.showPopup||!this.activeMatch){const t=document.getElementById("calcio-live-matches-popup");return void(t&&t.remove())}let t=document.getElementById("calcio-live-matches-popup");t||(t=document.createElement("div"),t.id="calcio-live-matches-popup",t.style.cssText="\n        position: fixed; inset: 0;\n        display: flex; justify-content: center; align-items: center;\n        z-index: 999999;\n        background: rgba(0,0,0,0.7);\n        backdrop-filter: blur(8px);\n        overflow: auto;\n      ",t.addEventListener("click",(e=>{e.target===t&&(this.showPopup=!1)})),document.body.appendChild(t));const e=this.activeMatch;t.innerHTML=`\n      <div style="background:#1a1f2e; padding:24px; border-radius:20px; width:90%; max-width:560px; max-height:85vh; overflow-y:auto; border:1px solid rgba(255,255,255,0.08); box-shadow:0 24px 64px rgba(0,0,0,0.6); margin:auto; color:#f8fafc; font-family:-apple-system,BlinkMacSystemFont,'SF Pro Display',sans-serif;">\n        <h3 style="margin:0 0 20px; font-size:22px; font-weight:800; letter-spacing:-0.02em; background:linear-gradient(135deg,#6366f1,#ec4899); -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent;">Dettagli partita</h3>\n        <div style="display:flex; justify-content:center; align-items:center; gap:18px; margin-bottom:24px;">\n          <img style="width:64px; height:64px; object-fit:contain;" src="${e.home_logo}" alt="${e.home_team}" />\n          <div style="text-align:center;">\n            <div style="font-size:38px; font-weight:900; letter-spacing:-0.04em; line-height:1;">${e.home_score??"-"} <span style="opacity:0.4;">-</span> ${e.away_score??"-"}</div>\n            <div style="font-size:12px; color:#94a3b8; margin-top:8px; font-weight:600;">${e.clock??e.status??""}</div>\n          </div>\n          <img style="width:64px; height:64px; object-fit:contain;" src="${e.away_logo}" alt="${e.away_team}" />\n        </div>\n        <p style="text-align:center; color:#cbd5e1; font-size:14px; margin:0 0 20px;"><strong>${e.home_team}</strong> vs <strong>${e.away_team}</strong></p>\n        <div id="matches-events-container"></div>\n        <button id="popup-close-btn" style="background:linear-gradient(135deg,#6366f1,#ec4899); color:white; padding:12px 20px; border:none; border-radius:12px; cursor:pointer; margin-top:20px; font-weight:800; width:100%; font-size:14px;">Chiudi</button>\n      </div>\n    `;const a=t.querySelector("#popup-close-btn");a&&a.addEventListener("click",(()=>{this.showPopup=!1}));const s=t.querySelector("#matches-events-container"),{goals:i,yellowCards:o,redCards:n}=this.separateEvents(e.match_details||[]),r=(t,e,a)=>e.length?`<div style="margin-bottom:14px; padding:14px; background:${a.bg}; border-left:3px solid ${a.border}; border-radius:10px;">\n        <h5 style="margin:0 0 8px; font-size:12px; text-transform:uppercase; letter-spacing:0.08em; color:${a.border}; font-weight:800;">${t}</h5>\n        <ul style="margin:0; padding-left:18px; font-size:13px; color:#cbd5e1;">${e.map((t=>`<li style="margin:4px 0;">${t}</li>`)).join("")}</ul>\n      </div>`:"";let l="";l+=r("Goal",i,{bg:"rgba(99,102,241,0.1)",border:"#6366f1"}),l+=r("Cartellini Gialli",o,{bg:"rgba(245,158,11,0.1)",border:"#f59e0b"}),l+=r("Cartellini Rossi",n,{bg:"rgba(239,68,68,0.1)",border:"#ef4444"}),s.innerHTML=l||'<p style="text-align:center; color:#94a3b8; font-size:13px;">Nessun evento disponibile</p>'}static get styles(){return o`
      :host {
        --cl-accent: #6366f1;
        --cl-accent-2: #ec4899;
        --cl-live: #ef4444;
        --cl-live-glow: rgba(239,68,68,0.5);
        --cl-green: #10b981;
        --cl-gold: #fbbf24;
        --cl-gold-text: #fde047;
        --cl-card-2: rgba(255,255,255,0.05);
        --cl-divider: rgba(255,255,255,0.08);
        --cl-glass-border: rgba(255,255,255,0.08);
      }
      ha-card {
        position: relative;
        overflow: hidden;
        border-radius: 20px;
        padding: 0;
        box-shadow: 0 4px 24px rgba(0,0,0,0.15);
      }
      ha-card.empty {
        padding: 24px;
        text-align: center;
        color: var(--secondary-text-color);
      }
      .hero-bg {
        position: absolute;
        inset: 0;
        background:
          radial-gradient(ellipse at 0% 0%, rgba(99,102,241,0.10), transparent 50%),
          radial-gradient(ellipse at 100% 100%, rgba(236,72,153,0.10), transparent 50%);
        pointer-events: none;
        z-index: 0;
      }
      .matches-header {
        position: relative;
        z-index: 1;
        display: flex; align-items: center; gap: 14px;
        padding: 16px 16px 14px;
        border-bottom: 1px solid var(--cl-divider);
      }
      .matches-header::after {
        content: '';
        position: absolute;
        left: 14px; right: 14px; bottom: -1px;
        height: 1px;
        background: linear-gradient(90deg, transparent, var(--cl-accent), transparent);
        opacity: 0.4;
      }
      .league-logo {
        width: 42px; height: 42px;
        object-fit: contain;
        filter: drop-shadow(0 2px 8px rgba(99,102,241,0.3));
      }
      .league-info {
        flex: 1;
        min-width: 0;
      }
      .league-name {
        font-size: 16px;
        font-weight: 800;
        letter-spacing: -0.02em;
        color: var(--primary-text-color);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .league-dates {
        font-size: 11px;
        color: var(--secondary-text-color);
        margin-top: 2px;
        font-weight: 500;
      }
      .live-counter {
        flex-shrink: 0;
        background: linear-gradient(135deg, var(--cl-live), #f97316);
        color: white;
        padding: 4px 10px;
        border-radius: 999px;
        font-size: 10px;
        font-weight: 800;
        letter-spacing: 0.06em;
        box-shadow: 0 2px 12px var(--cl-live-glow);
      }
      .scroll-content {
        position: relative;
        z-index: 1;
        overflow-y: auto;
        padding: 4px 4px 12px;
      }
      .day-divider {
        padding: 12px 12px 4px;
        font-size: 10px;
        text-transform: uppercase;
        letter-spacing: 0.15em;
        color: var(--secondary-text-color);
        font-weight: 800;
        display: flex; align-items: center; gap: 8px;
      }
      .day-divider::after {
        content: '';
        flex: 1; height: 1px;
        background: linear-gradient(90deg, var(--cl-divider), transparent);
      }
      .day-divider.today { color: var(--cl-accent); }
      .day-divider.today::after {
        background: linear-gradient(90deg, var(--cl-accent), transparent);
        opacity: 0.4;
      }

      .match-row {
        display: grid;
        grid-template-columns: auto 1fr auto;
        align-items: center;
        gap: 12px;
        padding: 12px;
        border-radius: 14px;
        cursor: pointer;
        transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        margin: 0 4px;
        position: relative;
      }
      .match-row:hover {
        background: var(--cl-card-2);
        transform: translateX(3px);
      }
      .match-row.live {
        background: linear-gradient(90deg, rgba(239,68,68,0.10), rgba(239,68,68,0.02) 60%);
        animation: live-row-glow 3s ease-in-out infinite;
      }
      .match-row.live::before {
        content: '';
        position: absolute;
        left: -2px; top: 50%;
        transform: translateY(-50%);
        width: 4px;
        height: 70%;
        background: linear-gradient(180deg, var(--cl-live), #f97316);
        border-radius: 0 4px 4px 0;
        box-shadow: 0 0 12px var(--cl-live-glow);
      }
      @keyframes live-row-glow {
        0%, 100% { background: linear-gradient(90deg, rgba(239,68,68,0.10), rgba(239,68,68,0.02) 60%); }
        50% { background: linear-gradient(90deg, rgba(239,68,68,0.18), rgba(239,68,68,0.05) 60%); }
      }
      .match-row.goal-pulse {
        animation: goal-pulse 1.6s cubic-bezier(0.16, 1, 0.3, 1);
      }
      @keyframes goal-pulse {
        0%   { box-shadow: none; transform: scale(1); }
        20%  { box-shadow: 0 0 0 3px var(--cl-gold), 0 0 24px var(--cl-gold); transform: scale(1.02); }
        100% { box-shadow: none; transform: scale(1); }
      }
      .match-row.card-pulse {
        animation: card-pulse-row 1s ease-out;
      }
      @keyframes card-pulse-row {
        0%   { box-shadow: none; }
        30%  { box-shadow: 0 0 0 2px #f59e0b; }
        100% { box-shadow: none; }
      }

      .match-time {
        font-size: 11px;
        color: var(--secondary-text-color);
        font-weight: 700;
        font-variant-numeric: tabular-nums;
        min-width: 44px;
        text-align: center;
        padding: 6px 8px;
        background: var(--cl-card-2);
        border-radius: 8px;
      }
      .match-time.live-time {
        background: rgba(239,68,68,0.15);
        color: var(--cl-live);
      }
      .match-time.ft {
        background: rgba(16,185,129,0.12);
        color: var(--cl-green);
      }
      .match-teams {
        display: flex; flex-direction: column;
        gap: 4px;
        min-width: 0;
      }
      .match-team {
        display: flex; align-items: center; gap: 10px;
      }
      .match-team img { width: 22px; height: 22px; object-fit: contain; flex-shrink: 0; }
      .match-team .name {
        font-size: 13px;
        font-weight: 600;
        flex: 1;
        letter-spacing: -0.01em;
        color: var(--primary-text-color);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .match-team .name.winner { font-weight: 800; }
      .match-team .name.loser { color: var(--secondary-text-color); }
      .match-team .score {
        font-size: 14px;
        font-weight: 800;
        font-variant-numeric: tabular-nums;
        min-width: 22px;
        text-align: right;
        color: var(--primary-text-color);
      }
      .match-team .score.winner { color: var(--cl-accent); }
      .match-team .score.loser { color: var(--secondary-text-color); opacity: 0.6; }
      .match-status-icon {
        color: var(--secondary-text-color);
        font-size: 18px;
        opacity: 0.5;
        transition: all 0.2s;
      }
      .match-row:hover .match-status-icon {
        color: var(--cl-accent);
        opacity: 1;
        transform: translateX(3px);
      }

      /* Toast */
      .event-toast {
        position: absolute;
        top: 12px;
        left: 50%;
        transform: translateX(-50%);
        background: #0b0f1a;
        color: #ffffff;
        padding: 10px 18px;
        border-radius: 14px;
        font-size: 13px;
        font-weight: 800;
        z-index: 100;
        animation: toast-bounce 4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        pointer-events: none;
        max-width: 90%;
        text-align: center;
        letter-spacing: -0.01em;
        text-shadow: 0 1px 2px rgba(0,0,0,0.8);
      }
      .event-toast.variant-goal {
        box-shadow:
          0 0 0 2px var(--cl-gold),
          0 0 0 4px rgba(251, 191, 36, 0.3),
          0 12px 40px rgba(0, 0, 0, 0.7),
          0 0 60px rgba(251, 191, 36, 0.4);
      }
      .event-toast.variant-goal strong { color: var(--cl-gold-text); }
      .event-toast.variant-yellow {
        box-shadow: 0 0 0 2px #f59e0b, 0 0 0 4px rgba(245,158,11,0.3), 0 12px 40px rgba(0,0,0,0.7);
      }
      .event-toast.variant-yellow strong { color: #fbbf24; }
      .event-toast.variant-red {
        box-shadow: 0 0 0 2px var(--cl-live), 0 0 0 4px rgba(239,68,68,0.3), 0 12px 40px rgba(0,0,0,0.7);
      }
      .event-toast.variant-red strong { color: #fca5a5; }
      @keyframes toast-bounce {
        0%   { opacity: 0; transform: translate(-50%, -20px) scale(0.7); }
        8%   { opacity: 1; transform: translate(-50%, 0) scale(1.08); }
        14%  { transform: translate(-50%, 0) scale(1); }
        90%  { opacity: 1; transform: translate(-50%, 0) scale(1); }
        100% { opacity: 0; transform: translate(-50%, -10px) scale(0.95); }
      }
    `}}),window.customCards=window.customCards||[],window.customCards.push({type:"calcio-live-matches",name:"Calcio Live Matches Card",description:"Mostra le partite della settimana o del tuo Team"}),customElements.define("calcio-live-matches-editor",class extends ot{static get properties(){return{_config:{type:Object},hass:{type:Object},entities:{type:Array}}}constructor(){super(),this._entity="",this.entities=[]}static get styles(){return o`
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
    `}setConfig(t){if(!t)throw new Error("Invalid configuration");this._config={...t},this._entity=this._config.entity||""}get config(){return this._config}updated(t){t.has("hass")&&this._fetchEntities(),t.has("_config")&&this._config&&this._config.entity&&(this._entity=this._config.entity)}configChanged(t){const e=new CustomEvent("config-changed",{detail:{config:t},bubbles:!0,composed:!0});this.dispatchEvent(e)}_EntityChanged(t){if(!this._config)return;const e={...this._config,entity:t.target.value};this._entity=t.target.value,this.configChanged(e)}_fetchEntities(){this.hass&&(this.entities=Object.keys(this.hass.states).filter((t=>t.startsWith("sensor.calciolive_all"))).sort())}_valueChanged(t){if(!this._config)return;const e=t.target,a="number"===e.type?parseInt(e.value,10):void 0!==e.checked?e.checked:e.value;if(e.configValue){const t={...this._config,[e.configValue]:a};this.configChanged(t)}}render(){return this._config&&this.hass?I`
        <div class="card-config">
          <h3>CalcioLive Sensor:</h3>
          <ha-select
              naturalMenuWidth
              fixedMenuPosition
              label="Entity"
              .configValue=${"entity"}
              .value=${this._entity}
              @selected=${this._EntityChanged}
              @closed=${t=>t.stopPropagation()}
              >
              ${this.entities.map((t=>I`<ha-list-item .value=${t}>${t}</ha-list-item>`))}
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
            <ha-switch
              .checked=${!0===this._config.show_event_toasts}
              @change=${this._valueChanged}
              .configValue=${"show_event_toasts"}
            >
            </ha-switch>
            <label>Show Event Toasts (in-card)</label>
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
      `:I``}}),customElements.define("calcio-live-team",class extends ot{static get properties(){return{hass:{},_config:{},showPopup:{type:Boolean},activeMatch:{type:Object},_eventSubscriptions:{type:Array},_toastMessage:{type:String},_toastVisible:{type:Boolean},_toastVariant:{type:String}}}setConfig(t){if(!t.entity)throw new Error("Devi definire un'entità");this._config=t,this.showPopup=!1,this.activeMatch=null,this.showEventToasts=!0===t.show_event_toasts,this._toastMessage="",this._toastVisible=!1,this._toastVariant="goal",this._toastTimer=null}connectedCallback(){super.connectedCallback(),this._subscribeToEvents()}disconnectedCallback(){super.disconnectedCallback(),this._eventSubscriptions&&Array.isArray(this._eventSubscriptions)&&(this._eventSubscriptions.forEach((t=>{t&&t.unsubscribe()})),this._eventSubscriptions=[])}_subscribeToEvents(){this.hass&&this.hass.connection&&(this._eventSubscriptions=[],["calcio_live_goal","calcio_live_yellow_card","calcio_live_red_card"].forEach((t=>{this._eventSubscriptions.push(this.hass.connection.subscribeEvents(this._handleCalcioLiveEvent.bind(this),t))})))}_eventBelongsToThisCard(t){if(!this.hass||!this._config)return!1;const e=this.hass.states[this._config.entity];if(!e)return!1;const a=e.attributes.matches||[];if(0===a.length)return!1;const s=a[0];return s.home_team===t.home_team&&s.away_team===t.away_team}_handleCalcioLiveEvent(t){const e=t.event_type,a=t.data;if(this._eventBelongsToThisCard(a)&&this.showEventToasts)if("calcio_live_goal"===e){const t=a.team===a.home_team?"home":"away";requestAnimationFrame((()=>this._triggerGoalCelebration(t,a)))}else this._showEventToast(e,a)}_showEventToast(t,e){let a="",s="goal";"calcio_live_goal"===t?(a=`<strong>GOAL!</strong> ${e.player} · ${e.home_team} ${e.home_score} - ${e.away_score} ${e.away_team}`,s="goal"):"calcio_live_yellow_card"===t?(a=`🟨 <strong>Cartellino Giallo</strong> · ${e.player}${e.minute?` (${e.minute}')`:""}`,s="yellow"):"calcio_live_red_card"===t&&(a=`🟥 <strong>Cartellino Rosso</strong> · ${e.player}${e.minute?` (${e.minute}')`:""}`,s="red"),a&&(this._toastMessage=a,this._toastVariant=s,this._toastVisible=!0,this._toastTimer&&clearTimeout(this._toastTimer),this._toastTimer=setTimeout((()=>{this._toastVisible=!1,this.requestUpdate()}),4e3),this.requestUpdate())}_triggerGoalCelebration(t,e){const a=this.shadowRoot&&this.shadowRoot.querySelector("ha-card");if(!a)return;a.querySelectorAll(".confetti, .goal-banner, .goal-flash-overlay").forEach((t=>t.remove())),a.classList.remove("goal-flash"),a.offsetWidth,a.classList.add("goal-flash"),setTimeout((()=>a.classList.remove("goal-flash")),1700);const s=document.createElement("div");s.className="goal-flash-overlay",a.appendChild(s),setTimeout((()=>s.remove()),1e3);const i=document.createElement("div");i.className="goal-banner",i.innerHTML='<div class="goal-banner-text">GOAL!</div>',a.appendChild(i),setTimeout((()=>i.remove()),1700);const o=a.querySelector(".score-numbers");o&&(o.classList.remove("goal-scored"),o.offsetWidth,o.classList.add("goal-scored"),setTimeout((()=>o.classList.remove("goal-scored")),1300));const n=a.querySelectorAll(".team-side .team-logo-big"),r="away"===t?n[1]:n[0];r&&(r.classList.remove("scorer-bounce"),r.offsetWidth,r.classList.add("scorer-bounce"),setTimeout((()=>r.classList.remove("scorer-bounce")),1300)),navigator.vibrate&&navigator.vibrate([180,80,180,80,280]),setTimeout((()=>this._showEventToast("calcio_live_goal",e)),600);const l=["#ec4899","#6366f1","#06b6d4","#fbbf24","#10b981","#ef4444"],c=["⚽","🎉","✨","🔥","⭐"];for(let t=0;t<36;t++){const t=document.createElement("div");t.className="confetti",Math.random()>.55?(t.textContent=c[Math.floor(Math.random()*c.length)],t.style.fontSize=14+10*Math.random()+"px",t.style.background="transparent"):(t.style.background=l[Math.floor(Math.random()*l.length)],t.style.borderRadius=Math.random()>.5?"50%":"2px");const e=380*(Math.random()-.5)+"px",s=240*Math.random()+100+"px";t.style.setProperty("--dx",e),t.style.setProperty("--dy",s),t.style.animationDelay=.3*Math.random()+"s",a.appendChild(t),setTimeout((()=>t.remove()),2e3)}}getCardSize(){return 4}static getConfigElement(){return document.createElement("calcio-live-team-editor")}static getStubConfig(){return{entity:"sensor.calcio_live",show_event_toasts:!1}}showDetails(t){this.activeMatch=t,this.showPopup=!0}closePopup(){this.showPopup=!1}separateEvents(t){const e=[],a=[],s=[];return t.forEach((t=>{t.includes("Goal")||t.includes("Penalty - Scored")?e.push(t):t.includes("Yellow Card")?a.push(t):t.includes("Red Card")&&s.push(t)})),{goals:e,yellowCards:a,redCards:s}}_renderStatusBadge(t){const e=t.state;return"in"===e?I`<span class="status-badge live"><span class="dot"></span>Live</span>`:"post"===e?I`<span class="status-badge finished">Finita</span>`:I`<span class="status-badge scheduled">${t.date||"Programmata"}</span>`}_renderClock(t){const e=t.state;if("in"===e){const e=t.clock&&"N/A"!==t.clock?t.clock:t.status||"";return I`<div class="clock"><span class="dot"></span>${e}</div>`}return"post"===e?I`<div class="clock finished">Full Time</div>`:I`<div class="clock upcoming">${t.date||""}</div>`}_renderForm(t){if(!t||"N/A"===t)return"";const e=String(t).replace(/[^WLDwld]/g,"").toUpperCase();if(!e.length)return"";const a=e.slice(-5).split("");return I`
      <div class="form-pills">
        ${a.map((t=>I`<div class="form-pill ${t}">${(t=>"W"===t?"V":"L"===t?"P":"N")(t)}</div>`))}
      </div>
    `}_renderStatsRow(t){const e=t.home_statistics||{},a=t.away_statistics||{},s=[],i=t=>{const e=parseFloat(t);return isNaN(e)?null:e},o=function(t,o,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";const l=i(e[o]),c=i(a[n]);null!==l&&null!==c&&s.push({label:t,home:e[o],away:a[n],hNum:l,aNum:c,suffix:r})};return o("Possesso","possessionPct","possessionPct","%"),o("Tiri","totalShots","totalShots"),o("In porta","shotsOnTarget","shotsOnTarget"),0===s.length?"":I`
      <div class="stats-row">
        ${s.map((t=>{const e=t.hNum+t.aNum,a=e>0?t.hNum/e*100:50,s=100-a;return I`
            <div class="stat-bar">
              <div class="stat-bar-label">
                <span class="home-val">${t.home}${t.suffix}</span>
                <span class="label-text">${t.label}</span>
                <span class="away-val">${t.away}${t.suffix}</span>
              </div>
              <div class="stat-bar-track">
                <div class="stat-bar-home" style="width: ${a}%;"></div>
                <div class="stat-bar-away" style="width: ${s}%;"></div>
              </div>
            </div>
          `}))}
      </div>
    `}render(){if(!this.hass||!this._config)return I``;const t=this._config.entity,e=this.hass.states[t];if(!e)return I`<ha-card class="empty">Entità sconosciuta: ${t}</ha-card>`;if(!e.attributes.matches||0===e.attributes.matches.length)return I`<ha-card class="empty">Nessuna partita disponibile</ha-card>`;const a=e.attributes.matches[0],s="in"===a.state,i="post"===a.state,o=s||i,n=a.league_name&&"N/A"!==a.league_name?a.league_name:a.season_info&&"N/A"!==a.season_info?a.season_info:"",r=a.venue&&"N/A"!==a.venue?a.venue:"";return I`
      <ha-card class="${s?"live":""}">
        <div class="bg-logos">
          <div class="bg-logo home"><img src="${a.home_logo}" alt="" loading="lazy"></div>
          <div class="bg-logo away"><img src="${a.away_logo}" alt="" loading="lazy"></div>
        </div>
        <div class="hero-bg"></div>

        ${this.showEventToasts&&this._toastVisible?I`
          <div class="event-toast variant-${this._toastVariant}" .innerHTML=${this._toastMessage}></div>
        `:""}

        <div class="top-bar">
          <div class="competition">
            <span class="comp-icon">⚽</span>
            <span class="comp-name">${n||" "}</span>
          </div>
          ${this._renderStatusBadge(a)}
        </div>

        <div class="scoreboard">
          <div class="team-side home">
            <div class="team-logo-wrap">
              <img class="team-logo-big" src="${a.home_logo}" alt="${a.home_team}" />
            </div>
            <div class="team-name-big">${a.home_team}</div>
            ${this._renderForm(a.home_form)}
          </div>

          <div class="score-center">
            ${o?I`<div class="score-numbers">${a.home_score} <span class="dash">-</span> ${a.away_score}</div>`:I`<div class="score-vs">VS</div>`}
            ${this._renderClock(a)}
          </div>

          <div class="team-side away">
            <div class="team-logo-wrap">
              <img class="team-logo-big" src="${a.away_logo}" alt="${a.away_team}" />
            </div>
            <div class="team-name-big">${a.away_team}</div>
            ${this._renderForm(a.away_form)}
          </div>
        </div>

        ${s?this._renderStatsRow(a):""}

        <div class="meta-row">
          <div class="meta-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <span>${r||"—"}</span>
          </div>
          ${o?I`<button class="info-btn" @click="${()=>this.showDetails(a)}">Dettagli ›</button>`:I`
              <div class="meta-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                <span>${a.date||""}</span>
              </div>
            `}
        </div>
      </ha-card>
    `}updated(t){(t.has("showPopup")||t.has("activeMatch"))&&this.renderPopupToBody()}renderPopupToBody(){if(!this.showPopup||!this.activeMatch){const t=document.getElementById("calcio-live-team-popup");return void(t&&t.remove())}let t=document.getElementById("calcio-live-team-popup");t||(t=document.createElement("div"),t.id="calcio-live-team-popup",t.style.cssText="\n        position: fixed; inset: 0;\n        display: flex; justify-content: center; align-items: center;\n        z-index: 999999;\n        background: rgba(0,0,0,0.7);\n        backdrop-filter: blur(8px);\n        overflow: auto;\n      ",t.addEventListener("click",(e=>{e.target===t&&(this.showPopup=!1)})),document.body.appendChild(t));const e=this.activeMatch;t.innerHTML=`\n      <div style="background: #1a1f2e; padding: 24px; border-radius: 20px; width: 90%; max-width: 560px; max-height: 85vh; overflow-y: auto; border: 1px solid rgba(255,255,255,0.08); box-shadow: 0 24px 64px rgba(0,0,0,0.6); margin: auto; color: #f8fafc; font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif;">\n        <h3 style="margin:0 0 20px; font-size: 22px; font-weight: 800; letter-spacing:-0.02em; background: linear-gradient(135deg,#6366f1,#ec4899); -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color: transparent;">Dettagli partita</h3>\n        <div style="display:flex; justify-content:center; align-items:center; gap:18px; margin-bottom:24px;">\n          <img style="width:72px; height:72px; object-fit:contain; filter: drop-shadow(0 4px 12px rgba(0,0,0,0.4));" src="${e.home_logo}" alt="${e.home_team}" />\n          <div style="text-align:center;">\n            <div style="font-size:42px; font-weight:900; letter-spacing:-0.04em; line-height:1;">${e.home_score??"-"} <span style="opacity:0.4;">-</span> ${e.away_score??"-"}</div>\n            <div style="font-size:12px; color:#94a3b8; margin-top:8px; font-weight:600;">${e.clock??e.status??""}</div>\n          </div>\n          <img style="width:72px; height:72px; object-fit:contain; filter: drop-shadow(0 4px 12px rgba(0,0,0,0.4));" src="${e.away_logo}" alt="${e.away_team}" />\n        </div>\n        <div style="display:grid; grid-template-columns:1fr 1fr; gap:14px; margin-bottom:18px;">\n          <div style="background:rgba(255,255,255,0.04); padding:14px; border-radius:14px;">\n            <div style="font-size:10px; text-transform:uppercase; letter-spacing:0.1em; color:#94a3b8; font-weight:700; margin-bottom:6px;">${e.home_team}</div>\n            <div style="font-size:13px;"><span style="color:#94a3b8;">Possesso:</span> <strong>${e.home_statistics?.possessionPct??"—"}%</strong></div>\n            <div style="font-size:13px;"><span style="color:#94a3b8;">Tiri:</span> <strong>${e.home_statistics?.totalShots??"—"}</strong></div>\n            <div style="font-size:13px;"><span style="color:#94a3b8;">In porta:</span> <strong>${e.home_statistics?.shotsOnTarget??"—"}</strong></div>\n            <div style="font-size:13px;"><span style="color:#94a3b8;">Falli:</span> <strong>${e.home_statistics?.foulsCommitted??"—"}</strong></div>\n          </div>\n          <div style="background:rgba(255,255,255,0.04); padding:14px; border-radius:14px;">\n            <div style="font-size:10px; text-transform:uppercase; letter-spacing:0.1em; color:#94a3b8; font-weight:700; margin-bottom:6px;">${e.away_team}</div>\n            <div style="font-size:13px;"><span style="color:#94a3b8;">Possesso:</span> <strong>${e.away_statistics?.possessionPct??"—"}%</strong></div>\n            <div style="font-size:13px;"><span style="color:#94a3b8;">Tiri:</span> <strong>${e.away_statistics?.totalShots??"—"}</strong></div>\n            <div style="font-size:13px;"><span style="color:#94a3b8;">In porta:</span> <strong>${e.away_statistics?.shotsOnTarget??"—"}</strong></div>\n            <div style="font-size:13px;"><span style="color:#94a3b8;">Falli:</span> <strong>${e.away_statistics?.foulsCommitted??"—"}</strong></div>\n          </div>\n        </div>\n        <div id="team-events-container"></div>\n        <button id="popup-close-btn" style="background:linear-gradient(135deg,#6366f1,#ec4899); color:white; padding:12px 20px; border:none; border-radius:12px; cursor:pointer; margin-top:20px; font-weight:800; width:100%; font-size:14px;">Chiudi</button>\n      </div>\n    `;const a=t.querySelector("#popup-close-btn");a&&a.addEventListener("click",(()=>{this.showPopup=!1}));const s=t.querySelector("#team-events-container"),{goals:i,yellowCards:o,redCards:n}=this.separateEvents(e.match_details||[]),r=(t,e,a)=>e.length?`<div style="margin-bottom:14px; padding:14px; background:${a.bg}; border-left:3px solid ${a.border}; border-radius:10px;">\n        <h5 style="margin:0 0 8px; font-size:12px; text-transform:uppercase; letter-spacing:0.08em; color:${a.border}; font-weight:800;">${t}</h5>\n        <ul style="margin:0; padding-left:18px; font-size:13px; color:#cbd5e1;">${e.map((t=>`<li style="margin:4px 0;">${t}</li>`)).join("")}</ul>\n      </div>`:"";let l="";l+=r("Goal",i,{bg:"rgba(99,102,241,0.1)",border:"#6366f1"}),l+=r("Cartellini Gialli",o,{bg:"rgba(245,158,11,0.1)",border:"#f59e0b"}),l+=r("Cartellini Rossi",n,{bg:"rgba(239,68,68,0.1)",border:"#ef4444"}),s.innerHTML=l||'<p style="text-align:center; color:#94a3b8; font-size:13px;">Nessun evento disponibile</p>'}static get styles(){return o`
      :host {
        --cl-accent: #6366f1;
        --cl-accent-2: #ec4899;
        --cl-live: #ef4444;
        --cl-live-glow: rgba(239,68,68,0.5);
        --cl-green: #10b981;
        --cl-gold: #fbbf24;
        --cl-gold-text: #fde047;
        --cl-card-2: rgba(255,255,255,0.05);
        --cl-divider: rgba(255,255,255,0.08);
        --cl-glass-border: rgba(255,255,255,0.08);
      }

      ha-card {
        position: relative;
        overflow: hidden;
        border-radius: 20px;
        padding: 0;
        box-shadow: 0 4px 24px rgba(0,0,0,0.15);
      }
      ha-card.empty {
        padding: 24px;
        text-align: center;
        color: var(--secondary-text-color);
      }

      .bg-logos {
        position: absolute;
        inset: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        pointer-events: none;
        overflow: hidden;
        z-index: 0;
      }
      .bg-logo {
        width: 60%;
        height: 140%;
        display: flex;
        align-items: center;
        opacity: 0.09;
      }
      .bg-logo.home {
        justify-content: flex-start;
        transform: translateX(-30%);
      }
      .bg-logo.away {
        justify-content: flex-end;
        transform: translateX(30%);
      }
      .bg-logo img {
        width: 100%;
        object-fit: contain;
      }

      .hero-bg {
        position: absolute;
        inset: 0;
        background:
          radial-gradient(ellipse at 0% 0%, rgba(99,102,241,0.20), transparent 50%),
          radial-gradient(ellipse at 100% 100%, rgba(236,72,153,0.20), transparent 50%);
        pointer-events: none;
        z-index: 1;
      }
      ha-card.live .hero-bg {
        background:
          radial-gradient(ellipse at 0% 0%, rgba(239,68,68,0.25), transparent 50%),
          radial-gradient(ellipse at 100% 100%, rgba(251,191,36,0.20), transparent 50%);
        animation: hero-pulse 3s ease-in-out infinite;
      }
      @keyframes hero-pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.6; }
      }

      .top-bar, .scoreboard, .stats-row, .meta-row {
        position: relative;
        z-index: 2;
      }

      .top-bar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 14px 18px;
        border-bottom: 1px solid var(--cl-divider);
      }
      .competition {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 12px;
        font-weight: 700;
        color: var(--primary-text-color);
        letter-spacing: -0.01em;
        min-width: 0;
      }
      .comp-icon {
        flex-shrink: 0;
        width: 24px; height: 24px;
        border-radius: 8px;
        background: linear-gradient(135deg, var(--cl-accent), var(--cl-accent-2));
        display: flex; align-items: center; justify-content: center;
        font-size: 12px;
        box-shadow: 0 2px 8px rgba(99,102,241,0.4);
      }
      .comp-name {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .status-badge {
        flex-shrink: 0;
        padding: 5px 11px;
        border-radius: 999px;
        font-size: 10px;
        font-weight: 800;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        display: inline-flex;
        align-items: center;
        gap: 6px;
      }
      .status-badge.live {
        background: linear-gradient(135deg, var(--cl-live), #f97316);
        color: white;
        box-shadow: 0 4px 16px var(--cl-live-glow);
        animation: badge-pulse 2s ease-in-out infinite;
      }
      .status-badge.live .dot {
        width: 6px; height: 6px; border-radius: 50%; background: white;
        animation: pulse-dot 1.2s ease-in-out infinite;
      }
      .status-badge.finished {
        background: linear-gradient(135deg, var(--cl-green), #059669);
        color: white;
      }
      .status-badge.scheduled {
        background: var(--cl-card-2);
        border: 1px solid var(--cl-glass-border);
        color: var(--primary-text-color);
      }
      @keyframes badge-pulse {
        0%, 100% { box-shadow: 0 4px 16px var(--cl-live-glow); }
        50% { box-shadow: 0 4px 24px var(--cl-live-glow), 0 0 32px var(--cl-live-glow); }
      }
      @keyframes pulse-dot {
        0%, 100% { opacity: 1; transform: scale(1); }
        50% { opacity: 0.3; transform: scale(0.7); }
      }

      .scoreboard {
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        align-items: center;
        gap: 10px;
        padding: 28px 18px 22px;
      }
      .team-side {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
        text-align: center;
        min-width: 0;
      }
      .team-logo-wrap {
        position: relative;
        width: 80px; height: 80px;
        display: flex; align-items: center; justify-content: center;
      }
      .team-logo-wrap::before {
        content: '';
        position: absolute;
        inset: -8px;
        background: radial-gradient(circle, rgba(99,102,241,0.22), transparent 70%);
        border-radius: 50%;
        animation: logo-glow 4s ease-in-out infinite;
      }
      .team-logo-big {
        position: relative;
        width: 72px; height: 72px;
        object-fit: contain;
        filter: drop-shadow(0 6px 16px rgba(0,0,0,0.25));
        transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
      }
      .team-side:hover .team-logo-big { transform: scale(1.1) rotate(-3deg); }
      @keyframes logo-glow {
        0%, 100% { opacity: 0.6; transform: scale(1); }
        50% { opacity: 1; transform: scale(1.15); }
      }
      .team-name-big {
        font-size: 13px;
        font-weight: 700;
        line-height: 1.2;
        max-width: 110px;
        letter-spacing: -0.01em;
        color: var(--primary-text-color);
      }
      .form-pills {
        display: flex; gap: 3px;
        padding: 3px 7px;
        background: var(--cl-card-2);
        border: 1px solid var(--cl-glass-border);
        border-radius: 999px;
      }
      .form-pill {
        width: 14px; height: 14px;
        border-radius: 4px;
        font-size: 8px;
        font-weight: 800;
        color: white;
        display: flex; align-items: center; justify-content: center;
      }
      .form-pill.W { background: linear-gradient(135deg, #10b981, #059669); }
      .form-pill.L { background: linear-gradient(135deg, #ef4444, #dc2626); }
      .form-pill.D { background: linear-gradient(135deg, #f59e0b, #d97706); }

      .score-center {
        display: flex; flex-direction: column;
        align-items: center; gap: 8px;
        padding: 0 4px;
      }
      .score-numbers {
        font-size: 48px;
        font-weight: 900;
        letter-spacing: -0.04em;
        font-variant-numeric: tabular-nums;
        line-height: 0.95;
        background: linear-gradient(180deg, var(--primary-text-color) 30%, var(--cl-accent));
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: score-pop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) backwards;
      }
      .score-numbers .dash {
        opacity: 0.4;
        font-weight: 700;
        margin: 0 4px;
      }
      .score-vs {
        font-size: 30px;
        font-weight: 800;
        letter-spacing: 0.08em;
        color: var(--secondary-text-color);
        opacity: 0.6;
      }
      @keyframes score-pop {
        0% { opacity: 0; transform: scale(0.5); }
        70% { transform: scale(1.1); }
        100% { opacity: 1; transform: scale(1); }
      }
      .clock {
        font-size: 11px;
        font-weight: 700;
        font-variant-numeric: tabular-nums;
        display: inline-flex; align-items: center; gap: 5px;
        padding: 4px 10px;
        border-radius: 999px;
        color: var(--cl-live);
        background: rgba(239,68,68,0.12);
      }
      .clock .dot {
        width: 5px; height: 5px;
        border-radius: 50%;
        background: currentColor;
        animation: pulse-dot 1.4s ease-in-out infinite;
      }
      .clock.upcoming {
        color: var(--cl-accent);
        background: rgba(99,102,241,0.12);
      }
      .clock.upcoming .dot, .clock.finished .dot { animation: none; }
      .clock.finished {
        color: var(--cl-green);
        background: rgba(16,185,129,0.12);
      }

      .stats-row {
        padding: 0 18px 18px;
        display: flex; flex-direction: column; gap: 10px;
      }
      .stat-bar { display: flex; flex-direction: column; gap: 4px; }
      .stat-bar-label {
        display: flex; justify-content: space-between;
        font-size: 11px; font-weight: 700;
      }
      .stat-bar-label .home-val { color: var(--cl-accent); }
      .stat-bar-label .away-val { color: var(--cl-accent-2); }
      .stat-bar-label .label-text {
        text-transform: uppercase;
        letter-spacing: 0.1em;
        font-size: 9px;
        color: var(--secondary-text-color);
      }
      .stat-bar-track {
        height: 6px;
        background: var(--cl-card-2);
        border-radius: 999px;
        overflow: hidden;
        display: flex;
      }
      .stat-bar-home {
        height: 100%;
        background: linear-gradient(90deg, var(--cl-accent), var(--cl-accent));
        border-radius: 999px 0 0 999px;
        transition: width 0.8s cubic-bezier(0.16, 1, 0.3, 1);
      }
      .stat-bar-away {
        height: 100%;
        background: linear-gradient(90deg, var(--cl-accent-2), var(--cl-accent-2));
        margin-left: auto;
        border-radius: 0 999px 999px 0;
        transition: width 0.8s cubic-bezier(0.16, 1, 0.3, 1);
      }

      .meta-row {
        display: flex; justify-content: space-between;
        align-items: center;
        padding: 12px 18px;
        border-top: 1px solid var(--cl-divider);
        background: var(--cl-card-2);
      }
      .meta-item {
        display: flex; align-items: center; gap: 6px;
        color: var(--secondary-text-color);
        font-size: 11px;
        font-weight: 600;
      }
      .meta-item svg { width: 14px; height: 14px; opacity: 0.7; }
      .info-btn {
        background: linear-gradient(135deg, var(--cl-accent), var(--cl-accent-2));
        color: white;
        border: none;
        padding: 7px 14px;
        border-radius: 999px;
        font-size: 11px;
        font-weight: 800;
        letter-spacing: 0.04em;
        cursor: pointer;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 0 4px 12px rgba(99,102,241,0.4);
      }
      .info-btn:hover {
        transform: translateY(-1px) scale(1.04);
        box-shadow: 0 8px 20px rgba(99,102,241,0.6);
      }

      /* Toast */
      .event-toast {
        position: absolute;
        top: 12px;
        left: 50%;
        transform: translateX(-50%);
        background: #0b0f1a;
        color: #ffffff;
        padding: 10px 18px;
        border-radius: 14px;
        font-size: 13px;
        font-weight: 800;
        z-index: 100;
        animation: toast-bounce 4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        pointer-events: none;
        max-width: 90%;
        text-align: center;
        letter-spacing: -0.01em;
        text-shadow: 0 1px 2px rgba(0,0,0,0.8);
      }
      .event-toast.variant-goal {
        box-shadow:
          0 0 0 2px var(--cl-gold),
          0 0 0 4px rgba(251, 191, 36, 0.3),
          0 12px 40px rgba(0, 0, 0, 0.7),
          0 0 60px rgba(251, 191, 36, 0.4);
      }
      .event-toast.variant-goal strong { color: var(--cl-gold-text); }
      .event-toast.variant-yellow {
        box-shadow:
          0 0 0 2px #f59e0b,
          0 0 0 4px rgba(245, 158, 11, 0.3),
          0 12px 40px rgba(0, 0, 0, 0.7);
      }
      .event-toast.variant-yellow strong { color: #fbbf24; }
      .event-toast.variant-red {
        box-shadow:
          0 0 0 2px var(--cl-live),
          0 0 0 4px rgba(239, 68, 68, 0.3),
          0 12px 40px rgba(0, 0, 0, 0.7);
      }
      .event-toast.variant-red strong { color: #fca5a5; }
      @keyframes toast-bounce {
        0%   { opacity: 0; transform: translate(-50%, -20px) scale(0.7); }
        8%   { opacity: 1; transform: translate(-50%, 0) scale(1.08); }
        14%  { transform: translate(-50%, 0) scale(1); }
        90%  { opacity: 1; transform: translate(-50%, 0) scale(1); }
        100% { opacity: 0; transform: translate(-50%, -10px) scale(0.95); }
      }

      /* Goal celebration */
      ha-card.goal-flash {
        animation: card-goal-flash 1.6s cubic-bezier(0.16, 1, 0.3, 1);
      }
      @keyframes card-goal-flash {
        0%   { box-shadow: 0 4px 24px rgba(0,0,0,0.15); }
        20%  { box-shadow: 0 0 0 4px var(--cl-accent), 0 0 60px 20px var(--cl-accent), 0 4px 24px rgba(0,0,0,0.15); }
        50%  { box-shadow: 0 0 0 2px var(--cl-accent-2), 0 0 40px 10px var(--cl-accent-2), 0 4px 24px rgba(0,0,0,0.15); }
        100% { box-shadow: 0 4px 24px rgba(0,0,0,0.15); }
      }
      .score-numbers.goal-scored {
        animation: score-goal-pop 1.2s cubic-bezier(0.34, 1.56, 0.64, 1);
      }
      @keyframes score-goal-pop {
        0%   { transform: scale(1); }
        20%  { transform: scale(1.4); filter: drop-shadow(0 0 30px var(--cl-accent)); }
        40%  { transform: scale(0.95); }
        60%  { transform: scale(1.15); }
        100% { transform: scale(1); }
      }
      .team-logo-big.scorer-bounce {
        animation: scorer-bounce 1.2s cubic-bezier(0.34, 1.56, 0.64, 1);
      }
      @keyframes scorer-bounce {
        0%   { transform: scale(1) rotate(0deg); }
        25%  { transform: scale(1.3) rotate(-15deg); }
        50%  { transform: scale(1.1) rotate(10deg); }
        75%  { transform: scale(1.2) rotate(-5deg); }
        100% { transform: scale(1) rotate(0deg); }
      }
      .goal-banner {
        position: absolute;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        pointer-events: none;
        z-index: 50;
        overflow: hidden;
      }
      .goal-banner::before {
        content: '';
        position: absolute;
        inset: 0;
        background: radial-gradient(ellipse at center, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 40%, transparent 70%);
        animation: banner-backdrop 1.6s ease-out forwards;
      }
      @keyframes banner-backdrop {
        0%   { opacity: 0; }
        20%  { opacity: 1; }
        80%  { opacity: 1; }
        100% { opacity: 0; }
      }
      .goal-banner-text {
        position: relative;
        font-size: 84px;
        font-weight: 900;
        letter-spacing: -0.06em;
        color: var(--cl-gold-text);
        -webkit-text-stroke: 2px #1a0f00;
        text-shadow:
          0 0 24px rgba(251, 191, 36, 1),
          0 0 48px rgba(251, 191, 36, 0.7),
          0 6px 0 #b45309,
          0 8px 24px rgba(0, 0, 0, 0.6);
        animation: goal-text-blast 1.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        transform-origin: center;
      }
      @keyframes goal-text-blast {
        0%   { opacity: 0; transform: scale(0.3) rotate(-8deg); }
        20%  { opacity: 1; transform: scale(1.15) rotate(-3deg); }
        40%  { transform: scale(0.95) rotate(2deg); }
        60%  { transform: scale(1.05) rotate(0deg); }
        80%  { opacity: 1; transform: scale(1) rotate(0deg); }
        100% { opacity: 0; transform: scale(1.3) rotate(0deg); }
      }
      .goal-flash-overlay {
        position: absolute;
        inset: 0;
        background: radial-gradient(circle at center, rgba(251,191,36,0.25), transparent 70%);
        pointer-events: none;
        z-index: 49;
        animation: flash-overlay 1s ease-out forwards;
      }
      @keyframes flash-overlay {
        0%   { opacity: 0; }
        20%  { opacity: 1; }
        100% { opacity: 0; }
      }
      .confetti {
        position: absolute;
        top: 20px; left: 50%;
        width: 8px; height: 8px;
        pointer-events: none;
        z-index: 99;
        animation: confetti-fly 1.8s ease-out forwards;
      }
      @keyframes confetti-fly {
        0% {
          transform: translate(-50%, 0) rotate(0deg);
          opacity: 1;
        }
        100% {
          transform: translate(calc(-50% + var(--dx)), var(--dy)) rotate(720deg);
          opacity: 0;
        }
      }
    `}}),window.customCards=window.customCards||[],window.customCards.push({type:"calcio-live-team",name:"Calcio Live team Card",description:"Mostra la prossima partita / partita in corso del tuo Team"}),customElements.define("calcio-live-team-editor",class extends ot{static get properties(){return{_config:{type:Object},hass:{type:Object},entities:{type:Array}}}constructor(){super(),this._entity="",this.entities=[]}static get styles(){return o`
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
    `}setConfig(t){if(!t)throw new Error("Invalid configuration");this._config={...t},this._entity=this._config.entity||""}get config(){return this._config}updated(t){t.has("hass")&&this._fetchEntities(),t.has("_config")&&this._config&&this._config.entity&&(this._entity=this._config.entity)}configChanged(t){const e=new CustomEvent("config-changed",{detail:{config:t},bubbles:!0,composed:!0});this.dispatchEvent(e)}_EntityChanged(t){if(!this._config)return;const e={...this._config,entity:t.target.value};this._entity=t.target.value,this.configChanged(e)}_fetchEntities(){this.hass&&(this.entities=Object.keys(this.hass.states).filter((t=>t.startsWith("sensor.calciolive_next"))).sort())}_valueChanged(t){if(!this._config)return;const e=t.target,a="number"===e.type?parseInt(e.value,10):void 0!==e.checked?e.checked:e.value;if(e.configValue){const t={...this._config,[e.configValue]:a};this.configChanged(t)}}render(){return this._config&&this.hass?I`
        <div class="card-config">
          <h4>CalcioLive Sensor:</h4>
          <ha-select
              naturalMenuWidth
              fixedMenuPosition
              label="Entity"
              .configValue=${"entity"}
              .value=${this._entity}
              @selected=${this._EntityChanged}
              @closed=${t=>t.stopPropagation()}
              >
              ${this.entities.map((t=>I`<ha-list-item .value=${t}>${t}</ha-list-item>`))}
          </ha-select>
          <div class="option">
            <ha-switch
              .checked=${!0===this._config.show_event_toasts}
              @change=${this._valueChanged}
              .configValue=${"show_event_toasts"}
            >
            </ha-switch>
            <label>Show Event Toasts (in-card)</label>
          </div>
        </div>
      `:I``}})})();