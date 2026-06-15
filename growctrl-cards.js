var gt=globalThis,mt=gt.ShadowRoot&&(gt.ShadyCSS===void 0||gt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,_t=Symbol(),he=new WeakMap,st=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==_t)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(mt&&e===void 0){let i=t!==void 0&&t.length===1;i&&(e=he.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&he.set(t,e))}return e}toString(){return this.cssText}},ge=a=>new st(typeof a=="string"?a:a+"",void 0,_t),rt=(a,...e)=>{let t=a.length===1?a[0]:e.reduce((i,n,s)=>i+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+a[s+1],a[0]);return new st(t,a,_t)},me=(a,e)=>{if(mt)a.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let i=document.createElement("style"),n=gt.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=t.cssText,a.appendChild(i)}},kt=mt?a=>a:a=>a instanceof CSSStyleSheet?(e=>{let t="";for(let i of e.cssRules)t+=i.cssText;return ge(t)})(a):a;var{is:Xe,defineProperty:Ye,getOwnPropertyDescriptor:Qe,getOwnPropertyNames:Je,getOwnPropertySymbols:ti,getPrototypeOf:ei}=Object,ft=globalThis,fe=ft.trustedTypes,ii=fe?fe.emptyScript:"",ni=ft.reactiveElementPolyfillSupport,at=(a,e)=>a,St={toAttribute(a,e){switch(e){case Boolean:a=a?ii:null;break;case Object:case Array:a=a==null?a:JSON.stringify(a)}return a},fromAttribute(a,e){let t=a;switch(e){case Boolean:t=a!==null;break;case Number:t=a===null?null:Number(a);break;case Object:case Array:try{t=JSON.parse(a)}catch{t=null}}return t}},xe=(a,e)=>!Xe(a,e),be={attribute:!0,type:String,converter:St,reflect:!1,useDefault:!1,hasChanged:xe};Symbol.metadata??=Symbol("metadata"),ft.litPropertyMetadata??=new WeakMap;var N=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=be){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let i=Symbol(),n=this.getPropertyDescriptor(e,i,t);n!==void 0&&Ye(this.prototype,e,n)}}static getPropertyDescriptor(e,t,i){let{get:n,set:s}=Qe(this.prototype,e)??{get(){return this[t]},set(r){this[t]=r}};return{get:n,set(r){let l=n?.call(this);s?.call(this,r),this.requestUpdate(e,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??be}static _$Ei(){if(this.hasOwnProperty(at("elementProperties")))return;let e=ei(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(at("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(at("properties"))){let t=this.properties,i=[...Je(t),...ti(t)];for(let n of i)this.createProperty(n,t[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[i,n]of t)this.elementProperties.set(i,n)}this._$Eh=new Map;for(let[t,i]of this.elementProperties){let n=this._$Eu(t,i);n!==void 0&&this._$Eh.set(n,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let i=new Set(e.flat(1/0).reverse());for(let n of i)t.unshift(kt(n))}else e!==void 0&&t.push(kt(e));return t}static _$Eu(e,t){let i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return me(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){let i=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,i);if(n!==void 0&&i.reflect===!0){let s=(i.converter?.toAttribute!==void 0?i.converter:St).toAttribute(t,i.type);this._$Em=e,s==null?this.removeAttribute(n):this.setAttribute(n,s),this._$Em=null}}_$AK(e,t){let i=this.constructor,n=i._$Eh.get(e);if(n!==void 0&&this._$Em!==n){let s=i.getPropertyOptions(n),r=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:St;this._$Em=n;let l=r.fromAttribute(t,s.type);this[n]=l??this._$Ej?.get(n)??l,this._$Em=null}}requestUpdate(e,t,i,n=!1,s){if(e!==void 0){let r=this.constructor;if(n===!1&&(s=this[e]),i??=r.getPropertyOptions(e),!((i.hasChanged??xe)(s,t)||i.useDefault&&i.reflect&&s===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,i))))return;this.C(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:n,wrapped:s},r){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,r??t??this[e]),s!==!0||r!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),n===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[n,s]of this._$Ep)this[n]=s;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[n,s]of i){let{wrapped:r}=s,l=this[n];r!==!0||this._$AL.has(n)||l===void 0||this.C(n,void 0,s,l)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(t)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};N.elementStyles=[],N.shadowRootOptions={mode:"open"},N[at("elementProperties")]=new Map,N[at("finalized")]=new Map,ni?.({ReactiveElement:N}),(ft.reactiveElementVersions??=[]).push("2.1.2");var Pt=globalThis,ve=a=>a,bt=Pt.trustedTypes,ye=bt?bt.createPolicy("lit-html",{createHTML:a=>a}):void 0,Ae="$lit$",U=`lit$${Math.random().toFixed(9).slice(2)}$`,Ce="?"+U,si=`<${Ce}>`,j=document,lt=()=>j.createComment(""),ct=a=>a===null||typeof a!="object"&&typeof a!="function",Tt=Array.isArray,ri=a=>Tt(a)||typeof a?.[Symbol.iterator]=="function",At=`[ 	
\f\r]`,ot=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,$e=/-->/g,we=/>/g,K=RegExp(`>|${At}(?:([^\\s"'>=/]+)(${At}*=${At}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),_e=/'/g,ke=/"/g,Ee=/^(?:script|style|textarea|title)$/i,Mt=a=>(e,...t)=>({_$litType$:a,strings:e,values:t}),o=Mt(1),X=Mt(2),Ni=Mt(3),q=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),Se=new WeakMap,G=j.createTreeWalker(j,129);function ze(a,e){if(!Tt(a)||!a.hasOwnProperty("raw"))throw Error("invalid template strings array");return ye!==void 0?ye.createHTML(e):e}var ai=(a,e)=>{let t=a.length-1,i=[],n,s=e===2?"<svg>":e===3?"<math>":"",r=ot;for(let l=0;l<t;l++){let c=a[l],p,d,g=-1,f=0;for(;f<c.length&&(r.lastIndex=f,d=r.exec(c),d!==null);)f=r.lastIndex,r===ot?d[1]==="!--"?r=$e:d[1]!==void 0?r=we:d[2]!==void 0?(Ee.test(d[2])&&(n=RegExp("</"+d[2],"g")),r=K):d[3]!==void 0&&(r=K):r===K?d[0]===">"?(r=n??ot,g=-1):d[1]===void 0?g=-2:(g=r.lastIndex-d[2].length,p=d[1],r=d[3]===void 0?K:d[3]==='"'?ke:_e):r===ke||r===_e?r=K:r===$e||r===we?r=ot:(r=K,n=void 0);let x=r===K&&a[l+1].startsWith("/>")?" ":"";s+=r===ot?c+si:g>=0?(i.push(p),c.slice(0,g)+Ae+c.slice(g)+U+x):c+U+(g===-2?l:x)}return[ze(a,s+(a[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]},pt=class a{constructor({strings:e,_$litType$:t},i){let n;this.parts=[];let s=0,r=0,l=e.length-1,c=this.parts,[p,d]=ai(e,t);if(this.el=a.createElement(p,i),G.currentNode=this.el.content,t===2||t===3){let g=this.el.content.firstChild;g.replaceWith(...g.childNodes)}for(;(n=G.nextNode())!==null&&c.length<l;){if(n.nodeType===1){if(n.hasAttributes())for(let g of n.getAttributeNames())if(g.endsWith(Ae)){let f=d[r++],x=n.getAttribute(g).split(U),y=/([.?@])?(.*)/.exec(f);c.push({type:1,index:s,name:y[2],strings:x,ctor:y[1]==="."?Et:y[1]==="?"?zt:y[1]==="@"?Lt:J}),n.removeAttribute(g)}else g.startsWith(U)&&(c.push({type:6,index:s}),n.removeAttribute(g));if(Ee.test(n.tagName)){let g=n.textContent.split(U),f=g.length-1;if(f>0){n.textContent=bt?bt.emptyScript:"";for(let x=0;x<f;x++)n.append(g[x],lt()),G.nextNode(),c.push({type:2,index:++s});n.append(g[f],lt())}}}else if(n.nodeType===8)if(n.data===Ce)c.push({type:2,index:s});else{let g=-1;for(;(g=n.data.indexOf(U,g+1))!==-1;)c.push({type:7,index:s}),g+=U.length-1}s++}}static createElement(e,t){let i=j.createElement("template");return i.innerHTML=e,i}};function Q(a,e,t=a,i){if(e===q)return e;let n=i!==void 0?t._$Co?.[i]:t._$Cl,s=ct(e)?void 0:e._$litDirective$;return n?.constructor!==s&&(n?._$AO?.(!1),s===void 0?n=void 0:(n=new s(a),n._$AT(a,t,i)),i!==void 0?(t._$Co??=[])[i]=n:t._$Cl=n),n!==void 0&&(e=Q(a,n._$AS(a,e.values),n,i)),e}var Ct=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:i}=this._$AD,n=(e?.creationScope??j).importNode(t,!0);G.currentNode=n;let s=G.nextNode(),r=0,l=0,c=i[0];for(;c!==void 0;){if(r===c.index){let p;c.type===2?p=new dt(s,s.nextSibling,this,e):c.type===1?p=new c.ctor(s,c.name,c.strings,this,e):c.type===6&&(p=new Ft(s,this,e)),this._$AV.push(p),c=i[++l]}r!==c?.index&&(s=G.nextNode(),r++)}return G.currentNode=j,n}p(e){let t=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},dt=class a{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,n){this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Q(this,e,t),ct(e)?e===u||e==null||e===""?(this._$AH!==u&&this._$AR(),this._$AH=u):e!==this._$AH&&e!==q&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):ri(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==u&&ct(this._$AH)?this._$AA.nextSibling.data=e:this.T(j.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:i}=e,n=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=pt.createElement(ze(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(t);else{let s=new Ct(n,this),r=s.u(this.options);s.p(t),this.T(r),this._$AH=s}}_$AC(e){let t=Se.get(e.strings);return t===void 0&&Se.set(e.strings,t=new pt(e)),t}k(e){Tt(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,i,n=0;for(let s of e)n===t.length?t.push(i=new a(this.O(lt()),this.O(lt()),this,this.options)):i=t[n],i._$AI(s),n++;n<t.length&&(this._$AR(i&&i._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let i=ve(e).nextSibling;ve(e).remove(),e=i}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},J=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,n,s){this.type=1,this._$AH=u,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=u}_$AI(e,t=this,i,n){let s=this.strings,r=!1;if(s===void 0)e=Q(this,e,t,0),r=!ct(e)||e!==this._$AH&&e!==q,r&&(this._$AH=e);else{let l=e,c,p;for(e=s[0],c=0;c<s.length-1;c++)p=Q(this,l[i+c],t,c),p===q&&(p=this._$AH[c]),r||=!ct(p)||p!==this._$AH[c],p===u?e=u:e!==u&&(e+=(p??"")+s[c+1]),this._$AH[c]=p}r&&!n&&this.j(e)}j(e){e===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Et=class extends J{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===u?void 0:e}},zt=class extends J{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==u)}},Lt=class extends J{constructor(e,t,i,n,s){super(e,t,i,n,s),this.type=5}_$AI(e,t=this){if((e=Q(this,e,t,0)??u)===q)return;let i=this._$AH,n=e===u&&i!==u||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==u&&(i===u||n);n&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Ft=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Q(this,e)}};var oi=Pt.litHtmlPolyfillSupport;oi?.(pt,dt),(Pt.litHtmlVersions??=[]).push("3.3.3");var Le=(a,e,t)=>{let i=t?.renderBefore??e,n=i._$litPart$;if(n===void 0){let s=t?.renderBefore??null;i._$litPart$=n=new dt(e.insertBefore(lt(),s),s,void 0,t??{})}return n._$AI(a),n};var Ot=globalThis,B=class extends N{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Le(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return q}};B._$litElement$=!0,B.finalized=!0,Ot.litElementHydrateSupport?.({LitElement:B});var li=Ot.litElementPolyfillSupport;li?.({LitElement:B});(Ot.litElementVersions??=[]).push("4.2.2");var h={label:"rgba(242,247,243,0.56)",value:"rgba(242,247,243,0.97)",muted:"rgba(242,247,243,0.46)",logLabel:"rgba(242,247,243,0.72)",logText:"rgba(242,247,243,0.90)",ok:"#7BE8A8",warn:"#FFCE7A",crit:"#FF9D9D",info:"#9AC8FF",water:"#7CC8F0",light:"#FFDC8A",temp:"#FFB98A",heat:"#FFB35C",tileBg:"rgba(255,255,255,0.04)",rowBg:"rgba(255,255,255,0.035)"},Rt={critical:"rgba(255,157,157,.14)",warning:"rgba(255,206,122,.12)",info:"rgba(154,200,255,.10)",ok:h.rowBg,none:"rgba(255,255,255,.022)"},Fe={critical:h.crit,warning:h.warn,info:h.info,ok:h.logText,none:"rgba(242,247,243,.36)"},Bt={Aus:{bg:"rgba(150,170,160,0.12)",color:"#8EA89C"},Seedling:{bg:"rgba(154,200,255,0.16)",color:"#9AC8FF"},Veg:{bg:"rgba(123,232,168,0.16)",color:"#7BE8A8"},Bloom:{bg:"rgba(255,185,138,0.18)",color:"#FFB98A"},Flush:{bg:"rgba(195,171,245,0.18)",color:"#C3ABF5"},Trocknung:{bg:"rgba(211,168,120,0.18)",color:"#D3A878"}},It={soft_garden:{label:"Soft Garden (Standard)",top:"#202C25",card:"#1B2620",card2:"#222F28",card3:"#17211B",line:"#2E3D34",lineSoft:"#27342C",tx:"#F2F7F3",tx2:"#B9CCC0",tx3:"#85998C"},graphite:{label:"Graphite",top:"#20242A",card:"#191C21",card2:"#232830",card3:"#15181C",line:"#313842",lineSoft:"#2A3038",tx:"#F2F4F7",tx2:"#C2C8D0",tx3:"#8A919B"},midnight:{label:"Midnight",top:"#1A2233",card:"#141A28",card2:"#1E2740",card3:"#111626",line:"#2B3958",lineSoft:"#25304A",tx:"#EFF3FB",tx2:"#BCC8DE",tx3:"#8492AC"},plum:{label:"Plum",top:"#241F2E",card:"#1B1726",card2:"#261F36",card3:"#16121F",line:"#382E4A",lineSoft:"#2F273E",tx:"#F4F0FA",tx2:"#C9C0D8",tx3:"#978AA8"},terra:{label:"Terra",top:"#2A2420",card:"#201A16",card2:"#2C2420",card3:"#1A1410",line:"#3D332B",lineSoft:"#332A24",tx:"#F7F3EF",tx2:"#D0C8C0",tx3:"#9B918A"},slate_teal:{label:"Slate Teal",top:"#1C2A2A",card:"#142020",card2:"#1E2E2E",card3:"#111A1A",line:"#2B4040",lineSoft:"#243434",tx:"#EFF7F6",tx2:"#BCD2D0",tx3:"#84A09E"},rose_noir:{label:"Ros\xE9 Noir",top:"#2A1F24",card:"#201619",card2:"#2C1F25",card3:"#1A1216",line:"#3D2B33",lineSoft:"#33242B",tx:"#FAF0F3",tx2:"#D8C0C8",tx3:"#A88A95"},ink:{label:"Ink",top:"#1A1C1E",card:"#131517",card2:"#1D2023",card3:"#0F1113",line:"#2C3137",lineSoft:"#252A2F",tx:"#F4F6F8",tx2:"#C4CACF",tx3:"#8B9298"}},ci=a=>{if(!a||a==="soft_garden")return"";let e=It[a];return e?[`--gc-bg:linear-gradient(180deg, ${e.top}, ${e.card} 30%)`,`--card:${e.card}`,`--card-2:${e.card2}`,`--card-3:${e.card3}`,`--line:${e.line}`,`--line-soft:${e.lineSoft}`,`--tx:${e.tx}`,`--tx-2:${e.tx2}`,`--tx-3:${e.tx3}`].join(";"):""},P=a=>{let e=[],t=ci(a?.palette);if(t&&e.push(t),a?.background){let i=a.background.trim(),n=i.includes(",")&&!/^(linear|radial|conic|rgb|hsl)/i.test(i)?`linear-gradient(160deg, ${i})`:i;e.push(`--gc-bg:${n}`)}return a?.opacity!==void 0&&e.push(`--gc-opacity:${a.opacity}`),a?.accent&&e.push(`--gc-accent:${a.accent}`),a?.radius!==void 0&&e.push(`--gc-radius:${a.radius}px`),e.join(";")},tt=a=>a.includes("critical")?"critical":a.includes("warning")?"warning":a.includes("info")?"info":"ok",H=a=>({ok:"ok",info:"info",warning:"warn",critical:"crit",none:"none"})[a]??"ok",T=rt`
  :host {
    display:block;
    /* Akzent je Zelt (Klein gruen / Mittel weinrot / Gross violett) */
    --acc: var(--gc-accent, #7BE8A8);
    --acc-soft: color-mix(in srgb, var(--acc) 13%, transparent);
    --bg:#141B17; --card:#1B2620; --card-2:#222F28; --card-3:#17211B;
    --line:#2E3D34; --line-soft:#27342C;
    --tx:#F2F7F3; --tx-2:#B9CCC0; --tx-3:#85998C;
    --warn:#FFCE7A; --crit:#FF9D9D; --info:#9AC8FF;
    --water:#7CC8F0; --light:#FFDC8A; --temp:#FFB98A; --heat:#FFB35C;
    --r:22px; --r-s:15px; --u:4px;
    --f-ui:"Nunito","Quicksand",var(--primary-font-family,"Inter"),system-ui,sans-serif;
    --f-num:"IBM Plex Mono",ui-monospace,"SF Mono",Menlo,monospace;
    --press:cubic-bezier(.2,.9,.3,1.2);
  }
  *{box-sizing:border-box}      /* verhindert Out-of-Bounds durch Padding+Breite */

  .gc{all:unset; cursor:pointer; touch-action:manipulation; box-sizing:border-box;}
  .clickable{cursor:pointer}
  :focus-visible{outline:2.5px solid var(--acc); outline-offset:2px; border-radius:8px}
  button{transition:transform .16s var(--press), border-color .16s, background .16s, color .16s, box-shadow .16s}
  button:active{transform:scale(.975)}
  ha-icon{display:inline-flex; align-items:center; justify-content:center}
  @media (prefers-reduced-motion: reduce){*,*::before,*::after{transition:none!important; animation:none!important}}

  /* ── Karte ── */
  .card{position:relative; background:var(--gc-bg, linear-gradient(180deg,#202C25,var(--card) 30%));
    border:1px solid var(--line-soft); border-radius:var(--gc-radius,22px); padding:20px;
    box-shadow:0 10px 30px -12px rgba(0,0,0,.45)}
  .card.glass{backdrop-filter:blur(14px) saturate(1.2); -webkit-backdrop-filter:blur(14px) saturate(1.2)}
  .card[data-level="warning"]{border-color:color-mix(in srgb, var(--warn) 35%, var(--line-soft))}
  .card[data-level="critical"]{border-color:color-mix(in srgb, var(--crit) 42%, var(--line-soft))}

  /* ── Kopfzeile ── */
  .hd{display:flex; align-items:center; gap:12px; margin-bottom:16px}
  .hd .ttl{font-size:17.5px; font-weight:900; letter-spacing:-.2px; line-height:1.15}
  .hd .sub{font-size:12.5px; color:var(--tx-2); margin-top:1px; font-weight:700}
  .hd .grow{flex:1; min-width:0}
  .badge-ic{width:46px; height:46px; border-radius:16px; display:grid; place-items:center; flex-shrink:0;
    background:linear-gradient(135deg, var(--acc-soft), rgba(123,232,168,.04));
    border:1px solid color-mix(in srgb, var(--acc) 30%, transparent); color:var(--acc); font-size:22px}

  /* ── Status-Pille (zelt-UNABHAENGIGE Farben) ── */
  .pill{display:inline-flex; align-items:center; gap:7px; font:800 11.5px var(--f-ui);
    padding:7px 14px; border-radius:999px; letter-spacing:.2px; white-space:nowrap}
  .pill::before{content:""; width:7px; height:7px; border-radius:50%; background:currentColor; box-shadow:0 0 8px currentColor}
  .pill.ok{color:#7BE8A8; background:rgba(123,232,168,.14)}
  .pill.info{color:#9AC8FF; background:rgba(154,200,255,.14)}
  .pill.warn{color:#FFCE7A; background:rgba(255,206,122,.14)}
  .pill.crit{color:#FF9D9D; background:rgba(255,157,157,.16)}
  .pill.none{color:#85998C; background:rgba(133,153,140,.14)}
  .mlbl{font:800 10.5px var(--f-ui); letter-spacing:1.3px; text-transform:uppercase; color:var(--tx-3)}

  /* ── Toggle-Schalter ── */
  .tgl{display:inline-flex; align-items:center; gap:9px; font:800 12.5px var(--f-ui); cursor:pointer;
    min-height:44px; padding:0 16px; border-radius:999px; border:1px solid var(--line);
    background:var(--card-2); color:var(--tx-2)}
  .tgl.on{color:var(--acc); border-color:color-mix(in srgb, var(--acc) 45%, transparent); background:var(--acc-soft)}
  .tgl .sw{width:30px; height:17px; border-radius:999px; background:var(--line); position:relative; transition:.2s; flex-shrink:0}
  .tgl .sw::after{content:""; position:absolute; top:2px; left:2px; width:13px; height:13px; border-radius:50%; background:var(--tx-2); transition:.2s}
  .tgl.on .sw{background:color-mix(in srgb, var(--acc) 35%, transparent)}
  .tgl.on .sw::after{left:15px; background:var(--acc); box-shadow:0 0 7px var(--acc)}
  /* kleiner Schalter rechts in der Heizungs-Versorgungszeile (An/Aus) */
  .supply .hsw{width:32px; height:18px; border-radius:999px; background:var(--line); position:relative;
    transition:.2s; flex-shrink:0; border:none; padding:0; cursor:pointer; margin-left:6px}
  .supply .hsw::after{content:""; position:absolute; top:2px; left:2px; width:14px; height:14px;
    border-radius:50%; background:var(--tx-2); transition:.2s}
  .supply .hsw.on{background:rgba(255,179,92,.4)}
  .supply .hsw.on::after{left:16px; background:var(--heat); box-shadow:0 0 7px var(--heat)}
  .supply .hsw:focus-visible{outline:2px solid color-mix(in srgb, var(--heat) 55%, transparent); outline-offset:2px}

  /* ── KPI-Kacheln ── */
  .kpis{display:grid; gap:8px; grid-template-columns:repeat(3,minmax(0,1fr))}
  .kpis.cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}
  .kpis.cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}
  .kpi{background:var(--card-2); border:1px solid transparent; border-radius:var(--r-s);
    padding:12px; text-align:left; cursor:pointer; width:100%; color:inherit; min-height:44px}
  .kpi:hover{border-color:color-mix(in srgb, var(--acc) 40%, transparent); background:#27362E}
  .kpi .mlbl{display:block; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; font-size:9.5px; letter-spacing:.5px}
  .kpi .v{font:700 26px/1.05 var(--f-num); letter-spacing:-1px; margin-top:5px; font-variant-numeric:tabular-nums; display:block}
  .kpi .u{font:600 12px var(--f-num); color:var(--tx-2); margin-left:6px; letter-spacing:0}
  .kpi.c-temp .v{color:var(--temp)} .kpi.c-hum .v{color:var(--water)} .kpi.c-vpd .v{color:var(--acc)}

  /* ── Zonen-Balken (VPD / pH / EC) ── */
  .zones{position:relative; height:11px; border-radius:7px; display:flex; overflow:hidden; box-shadow:inset 0 1px 3px rgba(0,0,0,.4)}
  .zones>i{display:block; height:100%}
  .z-cold{background:#6E97DE} .z-low{background:#E5B567} .z-ok{background:#4CB87E} .z-high{background:#E5B567} .z-bad{background:#D4726F}
  .zmark{position:absolute; top:-4px; bottom:-4px; width:4px; margin-left:-2px; border-radius:3px; background:#fff;
         border:1.5px solid rgba(8,12,16,.6); box-shadow:0 0 7px rgba(255,255,255,.95), 0 0 2px rgba(0,0,0,.55)}
  .zmark::before{content:""; position:absolute; left:50%; top:-8px; transform:translateX(-50%);
         border-left:5px solid transparent; border-right:5px solid transparent; border-top:7px solid #fff;
         filter:drop-shadow(0 1px 1px rgba(0,0,0,.5))}
  .zband{position:absolute; top:-2px; bottom:-2px; border:1.5px solid rgba(255,255,255,.85); border-radius:5px; pointer-events:none}
  .zlbl{display:flex; margin-top:6px; font:700 9.5px var(--f-ui); color:var(--tx-3)}
  .zlbl span{text-align:center; overflow:hidden; white-space:nowrap}

  /* ── Balken ── */
  .bar{height:calc(10px * var(--gc-sc,1)); border-radius:6px; background:var(--card-3); overflow:hidden; position:relative; display:block}
  .bar>i{display:block; height:100%; border-radius:6px; transition:width .5s}
  .bar .min{position:absolute; top:-1px; bottom:-1px; width:2.5px; background:rgba(255,255,255,.45)}

  /* ── Versorgungszeile (Licht/Pumpe/DLI/Tank) volle Breite ── */
  .supply{display:block; width:100%; background:var(--card-2); border:1px solid transparent;
    border-radius:var(--r-s); padding:12px 16px; cursor:pointer; text-align:left; color:inherit}
  .supply:hover{border-color:color-mix(in srgb, var(--acc) 35%, transparent)}
  .supply .shd{display:flex; align-items:center; gap:11px}
  .supply .sic{font-size:calc(20px * var(--gc-sc,1)); display:grid; place-items:center; width:26px; flex-shrink:0}
  .supply .stt{font-size:calc(14px * var(--gc-sc,1)); font-weight:800; flex:1; min-width:0}
  .supply .stm{font:700 calc(14px * var(--gc-sc,1)) var(--f-num); font-variant-numeric:tabular-nums; flex-shrink:0}
  .supply .sbadge{font:800 13px var(--f-ui); letter-spacing:.3px; padding:3px 10px; border-radius:999px;
    background:color-mix(in srgb, currentColor 18%, transparent); flex-shrink:0; line-height:1.4}
  .supply .bar{margin-top:9px}
  .supply .sft{display:flex; justify-content:space-between; gap:10px; margin-top:6px; font:700 calc(10.5px * var(--gc-sc,1)) var(--f-ui); color:var(--tx-3); letter-spacing:.3px}
  .supply .sft span{overflow:hidden; white-space:nowrap; text-overflow:ellipsis}

  /* ── DLI-Statleiste ── */
  .stats{display:grid; grid-template-columns:repeat(3,1fr); gap:8px}
  .stat{background:var(--card-3); border:1px solid var(--line-soft); border-radius:var(--r-s); padding:8px 12px; text-align:center; cursor:pointer; color:inherit; min-height:44px}
  .stat:hover{border-color:color-mix(in srgb, var(--acc) 35%, transparent)}
  .stat .sv{font:700 16px var(--f-num); font-variant-numeric:tabular-nums; color:var(--light); display:block}
  .stat .sl{font:800 9px var(--f-ui); letter-spacing:1.1px; text-transform:uppercase; color:var(--tx-3); margin-top:2px; display:block}

  /* ── Phasen-Dropdown ── */
  .dd{position:relative; display:block; width:100%}
  .dd-btn{display:flex; align-items:center; gap:11px; width:100%; min-height:48px; padding:0 18px;
    font:800 13.5px var(--f-ui); color:var(--tx); cursor:pointer; border-radius:14px; background:var(--card-2); border:1px solid var(--line)}
  .dd-btn:hover{border-color:var(--tx-3)}
  .dd-btn .pdot{width:10px; height:10px; border-radius:50%; background:var(--acc); box-shadow:0 0 8px currentColor; flex-shrink:0}
  .dd-btn .hint{margin-left:auto; font:700 11px var(--f-num); color:var(--tx-3); overflow:hidden; white-space:nowrap; text-overflow:ellipsis}
  .dd-menu{position:absolute; top:calc(100% + 7px); left:0; right:0; z-index:20;
    max-height:340px; overflow-y:auto;
    background:#222F28; border:1px solid var(--line); border-radius:16px; padding:7px; box-shadow:0 18px 44px -10px rgba(0,0,0,.6)}
  .dd-it{display:flex; align-items:center; gap:12px; width:100%; min-height:46px; padding:0 13px;
    font:800 13px var(--f-ui); color:var(--tx-2); cursor:pointer; border-radius:11px; background:transparent; border:none; text-align:left}
  .dd-it:hover{background:var(--card-3); color:var(--tx)}
  .dd-it[aria-selected="true"]{color:var(--acc); background:var(--acc-soft)}
  .dd-it .pdot{width:10px; height:10px; border-radius:50%; flex-shrink:0}
  .dd-it .hint{margin-left:auto; font:700 10.5px var(--f-num); color:var(--tx-3)}
  .pd-seed{background:var(--info)} .pd-veg{background:var(--acc)} .pd-bloom{background:var(--temp)} .pd-flush{background:#C3ABF5} .pd-dry{background:#D3A878} .pd-off{background:#8EA89C}

  /* ── Aktor-Raster (4 nebeneinander) ── */
  .acts{display:grid; grid-template-columns:repeat(4,1fr); gap:8px}
  .act{background:var(--card-2); border:1px solid transparent; border-radius:var(--r-s); cursor:pointer; padding:8px 4px; text-align:center; color:var(--tx-3); min-height:62px}
  .act:hover{border-color:var(--tx-3)}
  .act .aic{font-size:18px; display:block; margin:0 auto 4px}
  .act .anm{font:800 10px var(--f-ui); color:var(--tx-2); display:block; line-height:1.15}
  .act .ast{font:700 8.5px var(--f-num); letter-spacing:.8px; margin-top:2px; display:block}
  .act.on{border-color:color-mix(in srgb, var(--acc) 45%, transparent); color:var(--acc); background:linear-gradient(160deg, var(--acc-soft), var(--card-2))}
  .act.on .anm{color:var(--tx)}
  .act.on.light{border-color:rgba(255,220,138,.5); color:var(--light); background:linear-gradient(160deg, rgba(255,220,138,.13), var(--card-2))}
  .act.on.heat{border-color:rgba(255,179,92,.5); color:var(--heat); background:linear-gradient(160deg, rgba(255,179,92,.14), var(--card-2))}
  .act.on.water{border-color:rgba(124,200,240,.5); color:var(--water); background:linear-gradient(160deg, rgba(124,200,240,.14), var(--card-2))}

  /* ── Buttons im Kopf ── */
  .chip-auto{font:900 12px var(--f-ui); letter-spacing:.5px; min-height:42px; padding:0 18px; border-radius:999px; cursor:pointer; color:#0D1812; background:var(--acc); border:none; box-shadow:0 4px 16px -4px var(--acc); white-space:nowrap}
  .chip-auto.off{color:var(--tx-3); background:var(--card-2); border:1px solid var(--line); box-shadow:none}
  .icbtn{width:42px; height:42px; border-radius:13px; display:grid; place-items:center; cursor:pointer; background:var(--card-2); border:1px solid var(--line); color:var(--tx-2); font-size:16px; flex-shrink:0}
  .icbtn:hover{color:var(--tx); border-color:var(--tx-3)}
  .icbtn.on{color:var(--warn); border-color:color-mix(in srgb, var(--warn) 50%, transparent); background:rgba(255,206,122,.14)}

  /* ── Pflanzen-Tabs + Panel ── */
  .ptabs{display:flex; gap:7px; flex-wrap:wrap}
  .ptab{display:inline-flex; align-items:center; gap:8px; font:800 12.5px var(--f-ui); min-height:42px; padding:0 16px; border-radius:999px; cursor:pointer; border:1.5px solid var(--line); background:transparent; color:var(--tx-2)}
  .ptab[aria-selected="true"]{color:var(--acc); border-color:color-mix(in srgb, var(--acc) 50%, transparent); background:var(--acc-soft)}
  .plant{background:linear-gradient(150deg, var(--acc-soft), var(--card-2) 45%); border:1px solid var(--line-soft); border-radius:var(--r-s); padding:16px; margin-top:8px}
  .plant .phd{display:flex; gap:12px; align-items:center}
  .plant .pimg{width:60px; height:60px; border-radius:18px; display:grid; place-items:center; flex-shrink:0; font-size:27px;
    background:linear-gradient(135deg, var(--acc-soft), transparent); border:1.5px solid color-mix(in srgb, var(--acc) 30%, transparent); color:var(--acc); object-fit:cover}
  .plant .pname{font-size:16.5px; font-weight:900; letter-spacing:-.2px}
  .plant .pstrain{font-size:12.5px; color:var(--tx-2); font-weight:700; margin-top:1px}
  .agechip{display:inline-block; margin-top:5px; font:800 11px var(--f-num); color:var(--acc); background:var(--acc-soft); border:1px solid color-mix(in srgb, var(--acc) 30%, transparent); border-radius:8px; padding:3px 10px}

  /* ── Indikator-Block (Sensor) ── */
  .ind{background:var(--card-3); border:1px solid var(--line-soft); border-radius:var(--r-s); padding:12px; margin-top:10px; cursor:pointer; width:100%; text-align:left; color:inherit}
  .ind:hover{border-color:color-mix(in srgb, var(--acc) 35%, transparent)}
  .ind .ihd{display:flex; justify-content:space-between; align-items:center; gap:10px; margin-bottom:12px}
  .ind .ilbl{font:800 calc(11px * var(--gc-sc,1)) var(--f-ui); letter-spacing:1.1px; text-transform:uppercase; display:inline-flex; align-items:center; gap:7px; min-width:0}
  .ind .ival{font:700 calc(19px * var(--gc-sc,1)) var(--f-num); font-variant-numeric:tabular-nums; flex-shrink:0; white-space:nowrap}
  .ind .ival .u{font-size:calc(11px * var(--gc-sc,1)); color:var(--tx-2); margin-left:5px; letter-spacing:0}
  .spark{display:block; width:100%; height:38px; margin-top:6px}

  /* setzbare Werte (number/input_number): −/＋-Stepper */
  .setrow{display:inline-flex; align-items:center; gap:9px; flex-shrink:0}
  .stepbtn{width:32px; height:32px; border-radius:10px; display:grid; place-items:center; cursor:pointer; color:var(--acc); background:var(--acc-soft); border:1px solid color-mix(in srgb, var(--acc) 35%, transparent)}
  .stepbtn:hover{background:color-mix(in srgb, var(--acc) 24%, transparent)}
  .setval{font:700 19px var(--f-num); font-variant-numeric:tabular-nums; min-width:58px; text-align:center}
  .setval .u{font-size:11px; color:var(--tx-2); margin-left:5px; letter-spacing:0}

  /* ── Ereignisfeld ── */
  .event{display:flex; align-items:center; gap:12px; border-radius:var(--r-s); cursor:pointer; width:100%; text-align:left; color:inherit; background:var(--card-3); border:1px dashed var(--line); padding:12px; min-height:46px}
  .event:hover{border-color:color-mix(in srgb, var(--acc) 40%, transparent)}
  .event .edot{width:8px; height:8px; border-radius:50%; background:var(--tx-3); flex-shrink:0}
  .event .etx{flex:1; min-width:0; font-size:12.5px; font-weight:800; color:var(--tx-2); overflow:hidden; white-space:nowrap; text-overflow:ellipsis}
  .event .etm{font:700 10.5px var(--f-num); color:var(--tx-3); flex-shrink:0}

  /* ── Ereignisprotokoll ── */
  .log{display:flex; flex-direction:column; gap:3px}
  .lrow{display:flex; align-items:center; gap:12px; padding:10px 13px; border-radius:12px; cursor:pointer; width:100%; text-align:left; color:inherit; background:transparent; border:none; min-height:44px}
  .lrow:hover{background:var(--card-2)}
  .lrow .tm{font:700 11px var(--f-num); color:var(--tx-3); width:42px; flex-shrink:0}
  .lrow .who{font:800 11px var(--f-ui); color:var(--tx-2); width:104px; flex-shrink:0; overflow:hidden; white-space:nowrap; text-overflow:ellipsis}
  .lrow .what{font-size:12.5px; font-weight:700; color:var(--tx); flex:1; min-width:0; overflow:hidden; white-space:nowrap; text-overflow:ellipsis}
  .lrow.w{background:rgba(255,206,122,.08)} .lrow.w .what{color:var(--warn)}
  .lrow.c{background:rgba(255,157,157,.09)} .lrow.c .what{color:var(--crit)}
  .lrow.i .what{color:var(--tx)}

  /* ── Checkup-Matrix ── */
  .matrix{display:grid; grid-template-columns:1fr repeat(4,52px); gap:3px; font-size:12px}
  .matrix.m4{grid-template-columns:1fr repeat(4,minmax(0,52px))}
  .matrix.m5{grid-template-columns:1fr repeat(5,minmax(0,46px))}
  .matrix.m6{grid-template-columns:1fr repeat(6,minmax(0,40px))}
  .matrix .mh{font:800 9.5px var(--f-ui); letter-spacing:.8px; text-transform:uppercase; color:var(--tx-3); text-align:center; padding:6px 2px}
  .matrix .mh ha-icon{--mdc-icon-size:16px; color:var(--tx-3); display:inline-flex; align-items:center; justify-content:center}
  .matrix .mn{padding:12px 11px; background:var(--card-2); border-radius:12px 0 0 12px; font-weight:800; display:flex; align-items:center; overflow:hidden; white-space:nowrap; text-overflow:ellipsis}
  .matrix .mc{display:grid; place-items:center; background:var(--card-2); cursor:pointer; border:none; min-height:46px; color:inherit}
  .matrix .mc:hover{background:#27362E}
  .matrix .mc:last-child{border-radius:0 12px 12px 0}
  .dot{width:11px; height:11px; border-radius:50%}
  .dot.ok{background:var(--acc); box-shadow:0 0 8px color-mix(in srgb, var(--acc) 70%, transparent)}
  .dot.warn{background:var(--warn); box-shadow:0 0 8px rgba(255,206,122,.7)}
  .dot.crit{background:var(--crit); box-shadow:0 0 8px rgba(255,157,157,.7)}
  .dot.info{background:var(--info); box-shadow:0 0 8px rgba(154,200,255,.6)}
  .dot.off{background:var(--line)}
  /* Pflanzen-Block: zweizeilige Namenszelle (Name + Genetik) + Stations-Gruppenkopf */
  .matrix .mn.pl{flex-direction:column; align-items:flex-start; justify-content:center; gap:1px;
    white-space:normal; line-height:1.16; padding:9px 11px}
  .matrix .mn.pl .pl-name{font:800 12.5px var(--f-ui); color:var(--tx); overflow-wrap:anywhere}
  .matrix .mn.pl .pl-strain{font:600 10px var(--f-ui); color:var(--tx-3); overflow-wrap:anywhere}
  .matrix .grp{grid-column:1/-1; display:flex; align-items:center; gap:7px; margin:9px 0 1px;
    font:800 9.5px var(--f-ui); text-transform:uppercase; letter-spacing:.7px; color:var(--tx-2)}
  .matrix .grp ha-icon{--mdc-icon-size:13px; color:var(--tx-3)}
  .matrix .grp::after{content:""; flex:1; height:1px; background:var(--line)}

  /* ── Tank vertikal ── */
  .tankv{width:76px; height:98px; border-radius:18px; border:1.5px solid var(--line); position:relative; overflow:hidden; background:var(--card-3); flex-shrink:0}
  .tankv .fill{position:absolute; left:0; right:0; bottom:0; background:linear-gradient(180deg, rgba(124,200,240,.85), rgba(124,200,240,.5)); border-top:2px solid rgba(255,255,255,.5); transition:height .8s}
  .tankv .minl{position:absolute; left:0; right:0; height:1.5px; background:rgba(255,255,255,.35)}

  /* ── Chart + Legende ── */
  .chart{display:block; width:100%}
  .legend{display:flex; gap:14px; flex-wrap:wrap; margin-top:8px; font:800 11.5px var(--f-ui); color:var(--tx-2)}
  .legend i{display:inline-block; width:14px; height:3.5px; border-radius:2px; margin-right:6px; vertical-align:middle}

  /* ── Diagnose-Badges + Sektionslabel + Settings ── */
  .seclbl{font:800 calc(10.5px * var(--gc-sc,1)) var(--f-ui); text-transform:uppercase; letter-spacing:1.3px; color:var(--tx-3); margin:14px 0 8px}
  .pbadge{display:inline-flex; align-items:center; gap:6px; font:800 10px var(--f-ui); padding:5px 10px; border-radius:9px; letter-spacing:.3px}
  .pbadge.warn{color:var(--warn); background:rgba(255,206,122,.12); border:1px solid rgba(255,206,122,.3)}
  .pbadge.crit{color:var(--crit); background:rgba(255,157,157,.12); border:1px solid rgba(255,157,157,.35)}
  .settings-grid{display:grid; gap:8px; grid-template-columns:repeat(3,minmax(0,1fr))}
  .settings-grid .skv{background:var(--card-2); border:1px solid transparent; border-radius:var(--r-s); padding:11px 13px; text-align:left; cursor:pointer; color:inherit; min-width:0}
  .settings-grid .skv:hover{border-color:color-mix(in srgb, var(--acc) 35%, transparent)}
  .settings-grid .skv .k{font:800 10px var(--f-ui); letter-spacing:.8px; text-transform:uppercase; color:var(--tx-3)}
  .settings-grid .skv .vv{font:800 14px var(--f-num); color:var(--tx); margin-top:3px}

  /* ── Dynamische Skalierung: groessere Schrift auf groesseren Screens (PC/Tablet) ── */
  @media (min-width: 900px){
    .hd .ttl{font-size:20px} .hd .sub{font-size:14px}
    .badge-ic{width:52px; height:52px; font-size:25px}
    .pill{font-size:13px; padding:8px 16px}
    .mlbl{font-size:12px}
    .tgl{font-size:14px; min-height:48px} .tgl .sw{width:34px; height:19px}
    .tgl .sw::after{width:15px; height:15px} .tgl.on .sw::after{left:17px}
    .kpi .mlbl{font-size:11px} .kpi .v{font-size:31px} .kpi .u{font-size:14px}
    .zones{height:15px; border-radius:8px} .zlbl{font-size:11.5px}
    .zmark{width:5px; top:-6px; bottom:-6px; margin-left:-2.5px}
    .zmark::before{border-left-width:7px; border-right-width:7px; border-top-width:9px; top:-11px}
    .zband{top:-3px; bottom:-3px; border-width:2.5px; border-radius:8px;
           background:rgba(255,255,255,.08); box-shadow:inset 0 0 0 1px rgba(0,0,0,.25)}
    .supply .sbadge{font-size:14px; padding:3px 12px}
    .bar{height:12px}
    .supply .sic{font-size:23px; width:30px} .supply .stt{font-size:16px} .supply .stm{font-size:16px} .supply .sft{font-size:12px}
    .ind .ilbl{font-size:12.5px} .ind .ival{font-size:22px} .ind .ival .u{font-size:13px}
    .setval{font-size:22px} .setval .u{font-size:13px} .stepbtn{width:36px; height:36px}
    .dd-btn{font-size:15.5px; min-height:52px} .dd-it{font-size:15px; min-height:50px}
    .dd-btn .hint, .dd-it .hint{font-size:12px}
    .lrow .tm{font-size:12.5px; width:48px} .lrow .who{font-size:12.5px; width:128px} .lrow .what{font-size:14px}
    .matrix .mh{font-size:11px} .matrix .mn{font-size:14px} .dot{width:13px; height:13px}
    .matrix .mh ha-icon{--mdc-icon-size:19px}
    .seclbl{font-size:12px} .legend{font-size:13px}
    .ptab{font-size:14px; min-height:46px} .chip-auto{font-size:14px; min-height:46px}
    .agechip{font-size:12.5px}
    .plant .pname{font-size:19px} .plant .pstrain{font-size:14px}
    .plant .pimg{width:68px; height:68px; font-size:31px}
    .event .etx{font-size:14px} .event .etm{font-size:12px}
    .settings-grid .skv .k{font-size:11.5px} .settings-grid .skv .vv{font-size:16px}
    .stat .sv{font-size:18px} .stat .sl{font-size:10.5px}
    .act .aic{font-size:21px} .act .anm{font-size:11.5px} .act .ast{font-size:9.5px}
    .c-axl{font-size:12px}   /* Chart-Achsenbeschriftung (SVG) */
  }
  @media (min-width: 1400px){
    .hd .ttl{font-size:22px} .kpi .v{font-size:34px} .kpi .u{font-size:15px}
    .ind .ival{font-size:24px} .setval{font-size:24px}
    .supply .stt{font-size:17px} .supply .stm{font-size:17px}
    .lrow .what{font-size:15px} .plant .pname{font-size:21px}
    .c-axl{font-size:13px}
  }

  @media (max-width: 480px){
    .card{padding:15px 14px}
    .kpis{grid-template-columns:repeat(3,minmax(0,1fr)); gap:6px}
    .kpi .v{font-size:21px}
    .settings-grid{grid-template-columns:repeat(2,minmax(0,1fr))}
    .matrix{grid-template-columns:1fr repeat(4,44px)}
    .matrix.m4{grid-template-columns:1fr repeat(4,40px)}
    .matrix.m5{grid-template-columns:1fr repeat(5,33px)}
    .matrix.m6{grid-template-columns:1fr repeat(6,30px)}
    .matrix .mn.pl .pl-name{font-size:13px} .matrix .mn.pl .pl-strain{font-size:10.5px}
    .lrow .who{width:84px}
  }
`,Ji={ok:{bg:"rgba(123,232,168,.14)",color:h.ok,label:"Alles OK"},info:{bg:"rgba(154,200,255,.14)",color:h.info,label:"Info"},warning:{bg:"rgba(255,206,122,.14)",color:h.warn,label:"Warnung"},critical:{bg:"rgba(255,157,157,.16)",color:h.crit,label:"Kritisch"},none:{bg:"rgba(133,153,140,.14)",color:"#85998C",label:"Inaktiv"}};var pi="4d72-4461726b-766f6964",Te=()=>pi,Pe,xt=null;function vt(a){if(a?.states===Pe&&xt)return xt;let e=new Map,t=new Set,i={};for(let[n,s]of Object.entries(a?.states??{})){let r=s?.attributes;if(!r?.growctrl_role||!r?.growctrl_tent)continue;let l=String(r.growctrl_tent),c=String(r.growctrl_station??"zelt");e.set(`${l}::${c}::${r.growctrl_role}`,n),c==="zelt"?t.add(l):(i[l]??=new Set).add(c)}return Pe=a?.states,xt={tents:[...t].sort(),stations:Object.fromEntries(Object.entries(i).map(([n,s])=>[n,[...s].sort()])),byRole:e},xt}var M=(a,e,t,i)=>vt(a).byRole.get(`${e}::${t}::${i}`);var z=class extends B{constructor(){super(...arguments);this._config={};this._label=t=>t.label??t.name}static{this.properties={hass:{attribute:!1},_config:{state:!0}}}static{this.styles=rt`
    .lt { font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: .5px;
          color: var(--secondary-text-color); margin: 16px 0 6px; }
    .row { display: flex; align-items: flex-start; gap: 4px;
           border: 1px solid var(--divider-color); border-radius: 8px; padding: 8px; margin-bottom: 8px; }
    .row ha-form { flex: 1; min-width: 0; }
    .row.col { flex-direction: column; align-items: stretch; gap: 8px; }
    .rowmain { display: flex; align-items: flex-start; gap: 4px; flex: 1; min-width: 0; }
    .rowmain ha-form { flex: 1; min-width: 0; }
    .subwrap { border-top: 1px dashed var(--divider-color); padding-top: 8px; }
    .row.sub { background: var(--secondary-background-color, rgba(127,127,127,.08)); margin-bottom: 6px; }
    .lt.sub { margin: 2px 0 6px; font-size: 11px; opacity: .85; }
    button.del { all: unset; cursor: pointer; color: var(--secondary-text-color);
                 font-size: 16px; padding: 4px 8px; line-height: 1; }
    button.del:hover { color: var(--error-color, #db4437); }
    button.add { all: unset; cursor: pointer; color: var(--primary-color);
                 font-size: 13px; font-weight: 600; padding: 4px 0; }
    .hint { font-size: 11px; color: var(--secondary-text-color); margin-top: 12px; }
  `}setConfig(t){this._config={...t}}_fire(t){this._config=t,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:t},bubbles:!0,composed:!0}))}form(t){return o`<ha-form .hass=${this.hass} .data=${this._config} .schema=${t}
      .computeLabel=${this._label}
      @value-changed=${i=>this._fire({...this._config,...i.detail.value})}></ha-form>`}list(t){let i=this._config[t.key]??[],n=s=>this._fire({...this._config,[t.key]:s});return o`
      ${t.title?o`<div class="lt">${t.title}</div>`:u}
      ${i.map((s,r)=>{let l=c=>{let p=[...i];p[r]=c,n(p)};return o`<div class="row ${t.child?"col":""}">
          <div class="rowmain">
            <ha-form .hass=${this.hass} .data=${s} .schema=${t.rowSchema}
              .computeLabel=${this._label}
              @value-changed=${c=>l({...s,...c.detail.value})}></ha-form>
            <button class="del" title="Entfernen"
              @click=${()=>n(i.filter((c,p)=>p!==r))}>\u2715</button>
          </div>
          ${t.child?o`<div class="subwrap">${this._subList(s,t.child,l)}</div>`:u}
        </div>`})}
      <button class="add" @click=${()=>n([...i,t.newItem()])}>+ ${t.addLabel}</button>`}_subList(t,i,n){let s=(t[i.key]??[]).map(l=>typeof l=="string"?{entity:l}:l),r=l=>n({...t,[i.key]:l});return o`
      ${i.title?o`<div class="lt sub">${i.title}</div>`:u}
      ${s.map((l,c)=>o`<div class="row sub">
        <ha-form .hass=${this.hass} .data=${l} .schema=${i.rowSchema}
          .computeLabel=${this._label}
          @value-changed=${p=>{let d=[...s];d[c]={...l,...p.detail.value},r(d)}}></ha-form>
        <button class="del" title="Entfernen"
          @click=${()=>r(s.filter((p,d)=>d!==c))}>\u2715</button>
      </div>`)}
      <button class="add" @click=${()=>r([...s,i.newItem()])}>+ ${i.addLabel}</button>`}tentSelect(t="tent",i="Zelt"){let n=vt(this.hass).tents;return{name:t,label:i,selector:{select:{options:n,custom_value:!0,mode:"dropdown"}}}}stationSelect(t,i="station",n="Station"){let s=vt(this.hass),r=t?s.stations[t]??[]:[...new Set(Object.values(s.stations).flat())];return{name:i,label:n,selector:{select:{options:r,custom_value:!0,mode:"dropdown"}}}}styleSection(){let t=this._config.style??{},i=Object.entries(It).map(([s,r])=>({value:s,label:r.label})),n=[m.select("palette","\u{1F3A8} Farb-Konzept",i),m.text("accent","Akzentfarbe (Zelt-Farbe, optional)"),m.num("opacity","Deckkraft / Transparenz (0\u20131)",0,1,.05),m.bool("glass","Glas-Effekt (Blur)"),m.num("radius","Eckenradius (px)",0,40),m.text("background","Eigener Hintergrund (\xFCberschreibt Konzept, optional)")];return o`<div class="lt">Stil</div>
      <ha-form .hass=${this.hass} .data=${t} .schema=${n}
        .computeLabel=${s=>s.label??s.name}
        @value-changed=${s=>this._fire({...this._config,style:{...s.detail.value}})}></ha-form>`}},m={text:(a,e)=>({name:a,label:e,selector:{text:{}}}),bool:(a,e)=>({name:a,label:e,selector:{boolean:{}}}),num:(a,e,t,i,n)=>({name:a,label:e,selector:{number:{min:t,max:i,step:n,mode:"box"}}}),entity:(a,e,t)=>({name:a,label:e,selector:{entity:t?{domain:t}:{}}}),entities:(a,e,t)=>({name:a,label:e,selector:{entity:{multiple:!0,...t?{domain:t}:{}}}}),select:(a,e,t)=>({name:a,label:e,selector:{select:{mode:"dropdown",options:t}}})};var Nt=class extends z{render(){let e=[this.tentSelect("tent","\u{1F3D5}\uFE0F Zelt"),m.text("name","\u270F\uFE0F Anzeigename (optional)"),m.bool("show_chart","\u{1F4C8} VPD-Chart anzeigen"),m.num("hours","\u23F1\uFE0F Chart-Zeitraum (h)",1,168)];return o`${this.form(e)}${this.styleSection()}
      <div class="hint">Zeigt Klima-Werte (Temperatur/Feuchte/VPD), die VPD-Zonenskala, Modus (VPD/RH) und
        die <b>Phase</b> als Dropdown. Zelt- und Klima-Schalter steuern die Automatik.</div>`}};customElements.define("growctrl-tent-editor",Nt);function yt(a){if(a==null||isNaN(a))return"\u2013";let e=Math.max(0,Math.round(a)),t=Math.floor(e/60),i=e%60;return t&&i?`${t} h ${i} min`:t?`${t} h`:`${i} min`}function E(a){if(a==null||a==="unknown"||a==="unavailable"||a==="")return null;let e=Number(a);return isNaN(e)?null:e}var Ht=a=>(a?.locale?.language??a?.language??"de").toString().toLowerCase().startsWith("en")?"en":"de",di={"Alles OK":"All OK",Warnung:"Warning",Kritisch:"Critical",Info:"Info",Inaktiv:"Inactive",Fehler:"Error",Deaktiviert:"Disabled",OK:"OK","Alle Systeme arbeiten normal":"All systems operating normally","Klima-Phase":"Climate phase","Serie ein-/ausblenden":"Toggle series","\xFCber Ziel":"above target","Pumpe gesperrt":"Pump locked","F\xFCllstand zu niedrig \u2013 Trockenlaufschutz":"Level too low \u2013 dry-run protection","Klima-Sensoren eingefroren":"Climate sensors frozen","Werte evtl. veraltet":"Values may be stale",zuletzt:"last",an:"on",aus:"off",Seedling:"Seedling",Veg:"Veg",Bloom:"Bloom",Flush:"Flush",Trocknung:"Drying",Anzucht:"Propagation",Wachstum:"Vegetative",Bl\u00FCte:"Flowering",Ernte:"Harvest",Sp\u00FClen:"Flush",automatisch:"automatic",Auto:"Auto",Zelt:"Tent",Klima:"Climate",Logo:"Logo",Luftfeuchte:"Humidity",Temperatur:"Temperature","zu feucht":"too humid","zu trocken":"too dry",Phase:"Phase",Soll:"Target",Informationssystem:"Information system",Modus:"Mode",Automatik:"Automatic",Einstellungen:"Settings",Keimstart:"Germination",Leuchtphase:"Light phase","Licht AN":"Light ON","Licht an":"Light on","Licht aus":"Light off","Licht ausgeschaltet":"Light switched off","Licht ohne Leistung":"Light without power","Licht-Failsafe":"Light failsafe","Man. \xDCbernahme":"Manual hold","Manueller Eingriff":"Manual override","Marker = Prognose":"Marker = forecast","N\xE4chster Zyklus":"Next cycle","Pumpe aus":"Pump off","Pumpe ausgeschaltet":"Pump switched off","Pumpe gesperrt (F\xFCllstand)":"Pump blocked (level)","Pumpe l\xE4uft":"Pump running",Tank:"Tank",Feuchtigkeit:"Humidity","DLI heute":"DLI today","AUS Bloom":"OFF Bloom","AUS Seed/Veg":"OFF Seed/Veg","Unter Mindeststand":"Below minimum","Wartung (System greift nicht ein)":"Maintenance (system inactive)",verbleibend:"remaining",Zyklus:"Cycle",ideal:"ideal",Min:"Min",von:"of","Zeiten unvollst\xE4ndig":"Times incomplete","Wartung aktiv":"Maintenance active",AN:"ON",AUS:"OFF",Richtwert:"Reference",Prognose:"Forecast",Aktoren:"Actuators",weniger:"less",mehr:"more",Checkup:"Checkup",Stationen:"Stations",Station:"Station",Pflanzen:"Plants","kein Wert":"no value","Automatik AN":"Automatic ON","Automatik AUS (manuell)":"Automatic OFF (manual)","Kein Eingriff":"No override","Klima-Automatik AN":"Climate automatic ON","Klima-Automatik AUS":"Climate automatic OFF","Licht AN ohne Leistung":"Light ON without power","Licht-Failsafe ausgel\xF6st":"Light failsafe tripped","Lichtzeiten unvollst\xE4ndig":"Light times incomplete","Manueller Eingriff aktiv":"Manual override active","Problem erkannt":"Problem detected","Wartungsmodus aktiv":"Maintenance mode active","Zelt aktiv":"Tent active","Zelt deaktiviert":"Tent disabled","Zyklus l\xE4uft":"Cycle running",Pumpe:"Pump",Licht:"Light",Eingriff:"Override",Status:"Status",Aktiv:"Active",Ereignisprotokoll:"Event log","Nur Infos":"Info only","Noch keine Ereignisse":"No events yet",Pflanze:"Plant",Sorte:"Strain",Verlauf:"History","Germination-Heizung":"Germination heating",Ziel:"Target","Heizung heizt":"Heating on","Heizung bereit":"Heating ready","Heizung aus":"Heating off","Heizung ausgeschaltet":"Heating switched off",heizt:"heating",bereit:"ready","Heizung Sensorfehler":"Heating sensor fault","Heizung \xDCbertemperatur":"Heating overtemp","Regelf\xFChler fehlt \u2013 Heizung gesperrt":"Sensor missing \u2013 heating blocked","Not-Aus \u2013 zu hei\xDF":"Emergency off \u2013 too hot",HEIZT:"HEATING",BEREIT:"READY",SENSORFEHLER:"SENSOR FAULT","\xDCBERTEMP.":"OVERTEMP.",Heizung:"Heating",Tage:"days",Tag:"Day",Wo:"Wk",Woche:"Week","Als erledigt markieren":"Mark as done","Automatik/Zelt aus \u2013 manuell freigeben":"Automatic/tent off \u2013 release manually","Best\xE4tigung vor dem Schalten":"Confirm before switching",Bodenfeuchte:"Soil moisture","Bodentemp.":"Soil temp.","Gesicherter Aktor \u2013 fragt vor dem Schalten nach":"Protected actuator \u2013 asks before switching","Gesperrt \u2013 erst Automatik/Zelt aktivieren":"Locked \u2013 enable automatic/tent first","Heizung gesperrt":"Heater locked","Kamera nicht verf\xFCgbar":"Camera unavailable","Keimdatum l\xF6schen":"Clear germination date","Keimstart zur\xFCcksetzen":"Reset germination",Lichtzeiten:"Light schedule","Live ansehen":"View live",Livestream:"Live stream",Problem:"Problem","Schwellen & Sonstiges":"Thresholds & more",Sensoren:"Sensors","Station aus":"Station off","Station aus \u2013 keine Steuerung, keine Klima-Gewichtung im Zelt.":"Station off \u2013 no control, no climate weighting in the tent.",Steuerung:"Control",Trend:"Trend","Wassertemp.":"Water temp.","Zelt aus \u2013 gestoppt":"Tent off \u2013 stopped",gestoppt:"stopped","im Idealbereich":"in ideal range","knapp daneben":"slightly off","leere Zelle = kein Sensor":"empty cell = no sensor"},Me=(a,e)=>Ht(a)==="en"?di[e]??e:e;var Oe=new Map;async function I(a,e,t=24,i=48){let n=`${e}:${t}`,s=Oe.get(n);if(s&&Date.now()-s.t<5*6e4)return s.data;try{let r=new Date(Date.now()-t*36e5).toISOString(),c=((await a.callApi("GET",`history/period/${r}?filter_entity_id=${e}&minimal_response&no_attributes`))?.[0]??[]).map(g=>parseFloat(g.state??g.s)).filter(g=>!isNaN(g)),p=Math.max(1,Math.floor(c.length/i)),d=c.filter((g,f)=>f%p===0);return Oe.set(n,{t:Date.now(),data:d}),d}catch{return s?.data??[]}}var D=30,ui=4,hi=30,Y=6,et=16;function Re(a,e,t,i){let n=e??Math.min(...a,i?.min??1/0),s=t??Math.max(...a,i?.max??-1/0);(!isFinite(n)||!isFinite(s))&&(n=0,s=1),s-n<.001&&(s+=1,n-=1);let r=(s-n)*.08;return[n-r,s+r]}var Be=0;function Ie(a){if(a.length<3)return`M${a.map(t=>t.join(",")).join(" L")}`;let e=`M${a[0][0]},${a[0][1]}`;for(let t=0;t<a.length-1;t++){let i=a[Math.max(0,t-1)],n=a[t],s=a[t+1],r=a[Math.min(a.length-1,t+2)],l=n[0]+(s[0]-i[0])/6,c=n[1]+(s[1]-i[1])/6,p=s[0]-(r[0]-n[0])/6,d=s[1]-(r[1]-n[1])/6;e+=` C${l.toFixed(1)},${c.toFixed(1)} ${p.toFixed(1)},${d.toFixed(1)} ${s[0]},${s[1]}`}return e}function W(a,e={}){let t=`gcg${Be++}`,i=e.w??300,n=e.h??110,s=a.flatMap(w=>w.data);if(!s.length)return o`<div style="height:${n}px;display:flex;align-items:center;justify-content:center;
    font-size:11px;color:rgba(255,255,255,.5)">Keine Verlaufsdaten</div>`;let r=a.some(w=>w.axis==="right"),l=r?hi:ui,c=a.filter(w=>w.axis!=="right").flatMap(w=>w.data),p=a.filter(w=>w.axis==="right").flatMap(w=>w.data),[d,g]=Re(c.length?c:s,e.min,e.max,e.band),[f,x]=Re(p.length?p:s,e.rightMin,e.rightMax),y=(w,C)=>D+w/Math.max(1,C-1)*(i-D-l),$=w=>Y+(1-(w-d)/(g-d))*(n-Y-et),v=w=>Y+(1-(w-f)/(x-f))*(n-Y-et),k=e.grid??3,_=w=>Math.abs(w)>=100?w.toFixed(0):Math.abs(w)>=10?w.toFixed(1):w.toFixed(2),A=e.hours??24,L=4;return o`<svg data-gce="4d724461726b766f6964" viewBox="0 0 ${i} ${n}" preserveAspectRatio="none" style="width:100%;height:${n}px;display:block">
    ${e.band&&(e.band.min!==void 0||e.band.max!==void 0)?X`
      <rect x="${D}" y="${$(e.band.max??g)}" width="${i-D-l}"
        height="${Math.max(0,$(e.band.min??d)-$(e.band.max??g))}"
        fill="${e.band.color??"rgba(77,255,195,.08)"}" />`:u}
    ${Array.from({length:k+1},(w,C)=>{let b=C/k,F=Y+b*(n-Y-et),O=g-b*(g-d),R=x-b*(x-f);return X`
        <line x1="${D}" y1="${F}" x2="${i-l}" y2="${F}"
          stroke="rgba(255,255,255,.10)" stroke-width="1"/>
        <text x="${D-4}" y="${F+3}" text-anchor="end" class="c-axl"
          font-size="9.5" fill="rgba(255,255,255,.68)">${_(O)}</text>
        ${r?X`<text x="${i-l+5}" y="${F+3}" text-anchor="start" class="c-axl"
          font-size="9.5" fill="rgba(255,255,255,.55)">${_(R)}</text>`:u}`})}
    ${Array.from({length:L+1},(w,C)=>{let b=C/L,F=D+b*(i-D-l),O=C===L?"jetzt":`-${Math.round(A*(1-b))}h`;return X`
        <line x1="${F}" y1="${Y}" x2="${F}" y2="${n-et}" stroke="rgba(255,255,255,.05)" stroke-width="1"/>
        <text x="${F}" y="${n-4}" text-anchor="${C===0?"start":C===L?"end":"middle"}"
          class="c-axl" font-size="9" fill="rgba(255,255,255,.5)">${O}</text>`})}
    ${a.map((w,C)=>{if(w.data.length<2)return u;let b=w.axis==="right"?v:$,F=w.data.map((ut,ht)=>[Number(y(ht,w.data.length).toFixed(1)),Number(b(ut).toFixed(1))]),O=Ie(F),R=F[F.length-1][0],nt=F[F.length-1][1];return X`
        <defs>
          <linearGradient id="${t}-${C}" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="${w.color}" stop-opacity=".18"/>
            <stop offset="100%" stop-color="${w.color}" stop-opacity="0"/>
          </linearGradient>
        </defs>
        ${w.fill!==!1?X`<path
          d="${O} L${R},${n-et} L${D},${n-et} Z"
          fill="url(#${t}-${C})"/>`:u}
        <path d="${O}" fill="none" stroke="${w.color}" stroke-width="2.4"
          stroke-linejoin="round" stroke-linecap="round"/>
        <circle cx="${R}" cy="${nt}" r="6" fill="${w.color}" opacity=".18"/>
        <circle cx="${R}" cy="${nt}" r="3" fill="${w.color}"/>
        <circle cx="${R}" cy="${nt}" r="1.3" fill="rgba(10,14,18,.9)"/>`})}
  </svg>`}function Dt(a,e,t=280,i=38){if(a.length<2)return o`<div style="height:${i}px"></div>`;let n=`gcs${Be++}`,s=Math.min(...a),r=Math.max(...a);r-s<.001&&(r+=1,s-=1);let l=x=>x/(a.length-1)*t,c=x=>3+(1-(x-s)/(r-s))*(i-8),p=a.map((x,y)=>[Number(l(y).toFixed(1)),Number(c(x).toFixed(1))]),d=Ie(p),g=p[p.length-1][0],f=p[p.length-1][1];return o`<svg data-gce="4d724461726b766f6964" viewBox="0 0 ${t} ${i}" style="width:100%;height:${i}px;display:block">
    <defs><linearGradient id="${n}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${e}" stop-opacity=".22"/>
      <stop offset="100%" stop-color="${e}" stop-opacity="0"/>
    </linearGradient></defs>
    <path d="${d} L${g},${i} L0,${i} Z" fill="url(#${n})"/>
    <path d="${d}" fill="none" stroke="${e}" stroke-width="2"
      stroke-linejoin="round" stroke-linecap="round"/>
    <circle cx="${g}" cy="${f}" r="2.6" fill="${e}"/>
  </svg>`}var Vt=a=>a.toLowerCase().replace(/ä/g,"a").replace(/ö/g,"o").replace(/ü/g,"u").replace(/ß/g,"ss").replace(/[^a-z0-9]+/g,"_").replace(/^_+|_+$/g,""),Z=(a,e,t,i,n)=>n?.[i]??`${a}.growctrl_${Vt(e)}_${Vt(t)}_${i}`,V=(a,e,t,i)=>i?.[t]??`${a}.growctrl_zelt_${Vt(e)}_${t}`,$t={auto:["switch","automatik","auto"],wartung:["switch","wartung","maintenance"],stage:["select","wachstumsphase","stage"],plant:["select","pflanze","plant_type"],lightOn:["time","licht_an","light_on"],lightOffSv:["time","licht_aus_seedling_veg","light_off_sv"],lightOffBloom:["time","licht_aus_bloom_flush","light_off_bloom"],lightRest:["sensor","licht_restzeit","light_rest"],pumpRest:["sensor","pumpe_restzeit","pump_rest"],age:["sensor","alter_seit_keimung","plant_age"],rec:["sensor","phasen_empfehlung","stage_recommendation"],event:["sensor","letztes_ereignis","last_event"],dli:["sensor","dli_heute","dli_today"],dliFc:["sensor","dli_prognose","dli_forecast"],germination:["date","keimstart","germination"],germinationReset:["button","keimstart_zurucksetzen","germination_reset"],overrideMin:["number","manuelle_ubernahme","override_minutes"],pOverride:["binary_sensor","manueller_eingriff","problem_override"],pFailsafe:["binary_sensor","licht_failsafe","problem_light_failsafe"],pTime:["binary_sensor","lichtzeiten_unvollstandig","problem_time_invalid"],pPump:["binary_sensor","pumpe_gesperrt_fullstand","problem_pump_blocked"],pPower:["binary_sensor","licht_ohne_leistung","problem_power"],heatEnabled:["switch","germination_heizung","heat_enabled"],heatTarget:["number","heizung_zieltemperatur","heat_target"],heatHyst:["number","heizung_hysterese","heat_hyst"],heatActive:["binary_sensor","heizung_aktiv","heat_active"],heatOvertemp:["binary_sensor","heizung_ubertemperatur","heat_overtemp"],heatSensorFault:["binary_sensor","heizung_sensorfehler","heat_sensor_fault"]},it={enabled:["switch","zelt_aktiv","tent_enabled"],climate:["switch","klima_automatik","climate_enabled"],mode:["select","klima_modus","climate_mode"],phase:["select","klima_phase","climate_phase"],vpd:["sensor","vpd","vpd"],status:["sensor","status","status"],stale:["binary_sensor","klima_sensoren_eingefroren","problem_stale"],event:["sensor","letztes_ereignis","last_event"],todoList:["todo","aufgaben","todo"]};var S=class extends B{constructor(){super(...arguments);this._cw=0;this._config={};this._confirm=null}static{this.properties={hass:{attribute:!1},_config:{state:!0},_confirm:{state:!0},_cw:{state:!0}}}connectedCallback(){super.connectedCallback(),this._ro=new ResizeObserver(t=>{let i=Math.round(t[0]?.contentRect?.width??0);i&&Math.abs(i-this._cw)>8&&(this._cw=i)}),this._ro.observe(this)}disconnectedCallback(){this._ro?.disconnect(),super.disconnectedCallback()}chartW(t=34){return Math.max(280,(this._cw||320)-t)}setConfig(t){this.validateConfig(t),this._config=t}validateConfig(t){}getCardSize(){return 4}st(t){return t?this.hass?.states[t]?.state:void 0}isOn(t){return this.st(t)==="on"}t(t){return Me(this.hass,t)}get _lang(){return Ht(this.hass)}friendly(t){return t&&this.hass?.states[t]?.attributes?.friendly_name||t||""}unit(t){return t&&this.hass?.states[t]?.attributes?.unit_of_measurement||""}moreInfo(t){this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:t},bubbles:!0,composed:!0}))}navigate(t){history.pushState(null,"",t),window.dispatchEvent(new CustomEvent("location-changed"))}toggle(t){let i=t.split(".")[0],n=["switch","input_boolean","light","fan"].includes(i)?i:"homeassistant";this.hass.callService(n,"toggle",{entity_id:t})}confirmToggle(t,i){this._confirm={text:`${i} wirklich schalten?`,action:()=>this.toggle(t)}}renderConfirm(){return this._confirm?o`<div style="position:absolute;inset:0;background:rgba(0,0,0,.6);border-radius:16px;
        display:flex;align-items:center;justify-content:center;z-index:5">
      <div style="background:#1c2330;border:1px solid rgba(255,255,255,.15);border-radius:12px;padding:16px;max-width:80%">
        <div style="font-size:13px;margin-bottom:12px">${this._confirm.text}</div>
        <div style="display:flex;gap:8px;justify-content:flex-end">
          <button class="gc" style="padding:6px 14px;border-radius:8px;background:rgba(255,255,255,.1)"
            @click=${()=>{this._confirm=null}}>Abbrechen</button>
          <button class="gc" style="padding:6px 14px;border-radius:8px;background:rgba(77,255,195,.2);color:#4DFFC3"
            @click=${()=>{this._confirm.action(),this._confirm=null}}>Schalten</button>
        </div>
      </div>
    </div>`:u}};var gi=["VPD","RH"],mi=["Auto","Seedling","Veg","Bloom","Trocknung"],Ne={Auto:"",Seedling:"pd-seed",Veg:"pd-veg",Bloom:"pd-bloom",Trocknung:"pd-dry"},He={Auto:"automatisch",Seedling:"Anzucht",Veg:"Wachstum",Bloom:"Bl\xFCte",Trocknung:"Ernte"},De=[{w:20,col:"#6E97DE",lbl:"zu feucht"},{w:20,col:"#58E0A5",lbl:"Seedling"},{w:20,col:"#2FB36C",lbl:"Veg"},{w:20,col:"#E5B567",lbl:"Bloom"},{w:20,col:"#D4726F",lbl:"zu trocken"}],Ut=2,Wt=class extends S{constructor(){super(...arguments);this._hist=[];this._phase=!1}static{this.styles=T}static{this.properties={...S.properties,_hist:{state:!0},_phase:{state:!0}}}validateConfig(t){if(!t.tent)throw new Error("growctrl-tent-card: 'tent' ist Pflicht (Zelt-Name aus der Integration).")}static getConfigElement(){return document.createElement("growctrl-tent-editor")}static getStubConfig(){return{tent:"gross"}}e(t){let[i,n,s]=it[t],r=this._config;return r.overrides?.[n]??M(this.hass,r.tent,"zelt",s)??V(i,r.tent,n,r.overrides)}_select(t,i){this.hass.callService("select","select_option",{entity_id:t,option:i})}connectedCallback(){super.connectedCallback(),this._load(),this._timer=window.setInterval(()=>this._load(),5*6e4)}disconnectedCallback(){super.disconnectedCallback(),this._timer&&clearInterval(this._timer)}async _load(){if(!this.hass){setTimeout(()=>this._load(),1e3);return}this._hist=await I(this.hass,this.e("vpd"),this._config.hours??24)}tglBtn(t,i,n){return o`<button class="gc tgl ${n?"on":""}" style="flex:1; justify-content:center" @click=${()=>this.confirmToggle(t,i)}>
      <span class="sw"></span> ${i}</button>`}chips(t,i,n){return o`<div style="display:flex; gap:6px; flex-wrap:wrap">
      ${i.map(s=>{let r=s===n;return o`<button class="gc" style="padding:7px 13px; border-radius:999px; font:800 11.5px var(--f-ui);
            border:1.5px solid ${r?"color-mix(in srgb, var(--acc) 50%, transparent)":"var(--line)"};
            background:${r?"var(--acc-soft)":"transparent"}; color:${r?"var(--acc)":"var(--tx-2)"}"
          @click=${()=>this._select(t,s)}>${s}</button>`})}
    </div>`}phaseDropdown(t,i){return o`<div class="dd ${this._phase?"open":""}">
      <button class="gc dd-btn" aria-haspopup="listbox" aria-expanded=${this._phase} @click=${()=>{this._phase=!this._phase}}>
        <span class="pdot ${Ne[i]}" style="${i==="Auto"?"background:var(--acc);color:var(--acc)":""}"></span>${this.t(i)}
        <span class="hint">${this.t(He[i]??"")}</span>
        <ha-icon icon="mdi:chevron-down" style="--mdc-icon-size:16px;color:var(--tx-3);transition:transform .2s;${this._phase?"transform:rotate(180deg)":""}"></ha-icon>
      </button>
      ${this._phase?o`<div class="dd-menu" role="listbox">
        ${mi.map(n=>o`<button class="gc dd-it" role="option" aria-selected=${n===i}
          @click=${()=>{this._select(t,n),this._phase=!1}}>
          <span class="pdot ${Ne[n]}" style="${n==="Auto"?"background:var(--acc)":""}"></span>${this.t(n)}<span class="hint">${this.t(He[n]??"")}</span></button>`)}
      </div>`:u}
    </div>`}render(){let t=this._config;if(!this.hass)return u;let i=this.hass.states[this.e("vpd")],n=!i&&!this.hass.states[this.e("enabled")],s=E(i?.state)??(n?1.06:null),r=i?.attributes?.temp,l=i?.attributes?.rh,c=i?.attributes?.phase_effektiv??"Veg",p=i?.attributes?.sollwerte,d=this.isOn(this.e("enabled"))||n,g=this.isOn(this.e("climate")),f=this.hass.states[this.e("status")],x=f?.attributes?.probleme??[],y=f?.state?.toLowerCase?.()==="problem"?"warning":d?"ok":"none",$=this.hass.states[this.e("event")],v=s!==null&&p&&s>=p.vpd_min&&s<=p.vpd_max,k=s!==null?Math.min(100,Math.max(0,s/Ut*100)):null,_=i?.attributes?.temp_entity||this.e("vpd"),A=i?.attributes?.rh_entity||this.e("vpd");return o`<div class="card ${t.style?.glass?"glass":""}" data-level=${y==="none"?"ok":y} style="${P(t.style)};position:relative">
      <div class="hd">
        <div class="grow" style="min-width:0">
          <div class="ttl">${t.name??`${this.t("Klima")} ${this.t("Zelt")} ${t.tent}`}</div>
          <div class="sub">${this.t("Phase")} ${this.t(c)}${p?` \xB7 ${this.t("Soll")} ${p.vpd_min}\u2013${p.vpd_max} kPa / ${p.rh_min}\u2013${p.rh_max} %`:""}</div>
        </div>
        <span class="pill ${d?H(y):"none"}">${d?y==="ok"?this.t("Alles OK"):y==="warning"?this.t("Warnung"):this.t("Info"):this.t("Deaktiviert")}</span>
      </div>

      <div style="display:flex; gap:8px; margin-bottom:16px">
        ${this.tglBtn(this.e("enabled"),this.t("Zelt"),d)}
        ${this.tglBtn(this.e("climate"),this.t("Klima"),g)}
      </div>

      <div class="kpis">
        <button class="gc kpi c-temp" @click=${()=>this.moreInfo(_)}><span class="mlbl">${this.t("Temperatur")}</span><span class="v">${r!=null?Number(r).toFixed(1):"\u2013"}<span class="u">°C</span></span></button>
        <button class="gc kpi c-hum" @click=${()=>this.moreInfo(A)}><span class="mlbl">${this.t("Luftfeuchte")}</span><span class="v">${l!=null?Math.round(Number(l)):"\u2013"}<span class="u">%</span></span></button>
        <button class="gc kpi c-vpd" @click=${()=>this.moreInfo(this.e("vpd"))}><span class="mlbl">VPD</span><span class="v" style="${s!==null&&!v?`color:${h.warn}`:""}">${s!==null?s.toFixed(2):"\u2013"}<span class="u">kPa</span></span></button>
      </div>

      <div style="margin-top:16px">
        <div class="zones">
          ${De.map(L=>o`<i style="width:${L.w}%;background:${L.col}"></i>`)}
          ${p?o`<span class="zband" style="left:${p.vpd_min/Ut*100}%;width:${(p.vpd_max-p.vpd_min)/Ut*100}%"></span>`:u}
          ${k!==null?o`<span class="zmark" style="left:${k}%"></span>`:u}
        </div>
        <div class="zlbl">${De.map(L=>o`<span style="width:${L.w}%">${this.t(L.lbl)}</span>`)}</div>
      </div>

      <div style="display:flex; gap:12px; flex-wrap:wrap; margin-top:14px; align-items:center">
        <span class="mlbl">${this.t("Modus")}</span>${this.chips(this.e("mode"),gi,this.st(this.e("mode"))??"VPD")}
      </div>
      <div style="margin-top:13px">
        <span class="mlbl" style="display:block; margin-bottom:8px">${this.t("Phase")}</span>
        ${this.phaseDropdown(this.e("phase"),this.st(this.e("phase"))??"Auto")}
      </div>

      ${t.show_chart!==!1&&this._hist.length>1?o`
        <div class="seclbl">VPD · ${t.hours??24}h</div>
        ${W([{data:this._hist,color:v===!1?h.warn:h.ok,fill:!0}],{w:this.chartW(),h:96,band:p?{min:p.vpd_min,max:p.vpd_max}:void 0,grid:3})}`:u}

      ${x.length?o`<div style="display:flex; flex-wrap:wrap; gap:7px; margin-top:12px">
        ${x.map(L=>o`<span class="pbadge warn"><ha-icon icon="mdi:alert" style="--mdc-icon-size:12px"></ha-icon>${L}</span>`)}</div>`:u}

      ${$?o`<button class="gc event" style="margin-top:14px" @click=${()=>this.moreInfo(this.e("event"))}>
        <span class="edot" style="background:${$.attributes?.schweregrad==="critical"?h.crit:$.attributes?.schweregrad==="warning"?h.warn:h.info}"></span>
        <span class="etx">${$.state}</span>
        <span class="etm">${$.last_changed?new Date($.last_changed).toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit"}):""}</span>
      </button>`:u}
      ${this.renderConfirm()}
    </div>`}};customElements.define("growctrl-tent-card",Wt);var Zt=class extends z{render(){let e=[this.tentSelect("tent","\u{1F3D5}\uFE0F Zelt"),this.stationSelect(this._config?.tent,"station","\u{1F331} Station (= Pflanze)"),m.text("name","\u270F\uFE0F Anzeigename (optional)"),m.bool("show_settings","\u2699\uFE0F Einstellungen-Zahnrad anzeigen"),m.bool("show_log","\u{1F4DC} Protokoll-Auszug am Kartenfu\xDF (Standard an)"),m.entity("tank_entity","\u{1F4A7} Stations-Tank F\xFCllstand % (optional)","sensor"),m.num("tank_min","\u26A0\uFE0F Tank-Mindeststand %",0,100),m.num("tank_volume","\u{1FAA3} Tank-Volumen in Litern (optional)",1,1e4),m.entity("camera_entity","\u{1F4F9} Livestream-Kamera (optional)","camera"),m.text("image_url","\u{1F5BC}\uFE0F oder Bild-URL (optional, statt Kamera)"),m.num("media_height","\u2195\uFE0F H\xF6he des Feeds in px (Standard 180)",60,600)],t=[m.entity("entity","\u{1F50C} Schalter",["switch","input_boolean","light","fan"]),m.text("name","\u270F\uFE0F Anzeigename (optional)"),m.select("kind","\u{1F3A8} Art (Farbe/Icon)",[{value:"light",label:"Licht"},{value:"pump",label:"Pumpe"},{value:"o2",label:"O\u2082"},{value:"fan",label:"L\xFCfter"},{value:"heat",label:"Heizmatte"},{value:"water",label:"Befeuchter"}]),m.bool("confirm","\u2705 Vor dem Schalten best\xE4tigen")],i=[m.entity("entity","\u{1F4C8} Sensor / input_number"),m.text("name","\u270F\uFE0F Anzeigename (optional)"),m.text("icon","\u{1F3F7}\uFE0F Icon (z.B. mdi:thermometer, optional)"),m.select("anzeige","\u{1F4CA} Anzeige",[{value:"wert",label:"Wert"},{value:"graph",label:"Mini-Verlauf"}])];return o`${this.form(e)}
      ${this.list({key:"actuators",rowSchema:t,title:"\u{1F50C} Aktoren (Kacheln, 4 nebeneinander)",addLabel:"Aktor hinzuf\xFCgen",newItem:()=>({entity:""})})}
      ${this.list({key:"sensors",rowSchema:i,title:"\u2795 Weitere Sensoren (Wert oder Verlauf)",addLabel:"Sensor hinzuf\xFCgen",newItem:()=>({entity:"",anzeige:"wert"})})}
      ${this.styleSection()}
      <div class="hint">
        <b>Automatisch:</b> pH &amp; EC (Zonen-Balken aus dem Pflanzen-Preset), Temperatur &amp;
        Feuchtigkeit (Mini-Verlauf), Boden-/Wassertemperatur, DLI-Ziel und die Phasen-Empfehlung
        kommen direkt aus der Integration \u2013 abh\u00e4ngig von <b>Systemtyp</b> und gew\u00e4hlter
        <b>Pflanze</b> (Dropdown oben in der Karte). Hier nur noch <b>zus\u00e4tzliche</b> Sensoren/Aktoren.<br>
        <b>Livestream</b> (optional, zwischen Sensoren und Protokoll): eine <b>Kamera-Entit\u00e4t</b>
        zeigt ein Live-Standbild (Tippen \u00f6ffnet den Stream) \u2013 alternativ eine feste <b>Bild-URL</b>.<br>
        Entity-IDs werden automatisch abgeleitet
        (z.B. <code>switch.growctrl_gross_main1_automatik</code>); Abweichungen per YAML
        <code>overrides: { automatik: switch.mein_schalter }</code>.
      </div>`}};customElements.define("growctrl-station-editor",Zt);var fi=["Aus","Seedling","Veg","Bloom","Flush","Trocknung"],Ve={Aus:"gestoppt",Seedling:"Anzucht",Veg:"Wachstum",Bloom:"Bl\xFCte",Flush:"Sp\xFClen",Trocknung:"Ernte"},bi={Aus:"pd-off",Seedling:"pd-seed",Veg:"pd-veg",Bloom:"pd-bloom",Flush:"pd-flush",Trocknung:"pd-dry"},xi={light:"mdi:lightbulb",heat:"mdi:radiator",water:"mdi:air-humidifier",pump:"mdi:water-pump",fan:"mdi:fan",o2:"mdi:scuba-tank"},Kt=class extends S{constructor(){super(...arguments);this._open=!1;this._phase=!1;this._plant=!1;this._exp={sensors:!1,actuators:!0,log:!1,todo:!0};this._spark={}}static{this.styles=T}static{this.properties={...S.properties,_open:{state:!0},_spark:{state:!0},_phase:{state:!0},_plant:{state:!0},_exp:{state:!0}}}updated(t){super.updated?.(t),!(!t.has("hass")&&!t.has("_config"))&&this.allSensors().forEach(async i=>{let n=await I(this.hass,i.entity,i.hours??24);n.length&&this._spark[i.entity]?.length!==n.length&&(this._spark={...this._spark,[i.entity]:n})})}trendArrow(t){if(!t||t.length<4)return null;let i=t.length,n=Math.max(2,Math.floor(i/4)),s=x=>x.reduce((y,$)=>y+$,0)/x.length,r=s(t.slice(-n))-s(t.slice(0,n)),l=Math.max(...t)-Math.min(...t)||1,c=r/l,p=Math.min(1,Math.abs(c)/.4),d=(this._cw||320)<430,g=d?14:12,f=g+Math.round(p*(d?9:8));return c>.06?{icon:"mdi:trending-up",color:h.temp,size:f}:c<-.06?{icon:"mdi:trending-down",color:h.water,size:f}:{icon:"mdi:trending-neutral",color:"var(--tx-3)",size:g}}validateConfig(t){if(!t.tent||!t.station)throw new Error("growctrl-station-card: 'tent' und 'station' sind Pflicht (wie in der Integration angelegt).")}static getConfigElement(){return document.createElement("growctrl-station-editor")}static getStubConfig(){return{tent:"gross",station:"main1"}}get isPreview(){return!this.hass?.states?.[this.e("stage")]}e(t){let[i,n,s]=$t[t];return this.eRole(i,n,s)}eRole(t,i,n){let s=this._config;return s.overrides?.[i]??M(this.hass,s.tent,s.station,n)??Z(t,s.tent,s.station,i,s.overrides)}_select(t,i){this.hass.callService("select","select_option",{entity_id:t,option:i})}render(){let t=this._config;if(!this.hass)return u;let i=this.isPreview,n=this.st(this.e("stage"))??"Veg",s=Bt[n]??Bt.Veg,r=this.isOn(this.e("auto"))||i,l=this.isOn(this.e("wartung")),c=M(this.hass,t.tent,"zelt","tent_enabled")??V("switch",t.tent,"tent_enabled",t.overrides),p=!!this.hass.states[c]&&!this.isOn(c),d=n==="Aus",g=p||d,f=!r||l||p||d,x=[{e:this.e("pOverride"),label:"Manueller Eingriff",crit:!1},{e:this.e("pFailsafe"),label:"Licht-Failsafe",crit:!0},{e:this.e("pTime"),label:"Zeiten unvollst\xE4ndig",crit:!1},{e:this.e("pPump"),label:"Pumpe gesperrt (F\xFCllstand)",crit:!1},{e:this.e("pPower"),label:"Licht ohne Leistung",crit:!0}].filter(_=>this.isOn(_.e)),y=this.hass.states[this.e("event")],$=g?"warning":x.length?x.some(_=>_.crit)?"critical":"warning":y?.attributes?.schweregrad==="critical"?"warning":"ok",v=l?this.t("Wartung aktiv"):p?this.t("Zelt aus \u2013 gestoppt"):d?this.t("Station aus"):$==="critical"?this.t("Kritisch"):$==="warning"?this.t("Warnung"):this.t("Alles OK"),k=Math.max(1,Math.min(1.25,1+((this._cw||360)-400)/900));return o`<div class="card ${t.style?.glass?"glass":""}" data-level=${$} style="${P(t.style)};--gc-sc:${k.toFixed(3)};position:relative">

      <div class="hd">
        <div class="grow" style="min-width:0">
          <div class="ttl">${t.name??`${t.tent} \xB7 ${t.station}`}</div>
          <div class="sub" style="display:flex;align-items:center;gap:7px">
            <span style="width:7px;height:7px;border-radius:50%;flex-shrink:0;
              background:${$==="critical"?h.crit:$==="warning"?h.warn:h.ok};
              box-shadow:0 0 8px currentColor;color:${$==="critical"?h.crit:$==="warning"?h.warn:h.ok}"></span>
            ${v}
          </div>
        </div>
        <button class="gc icbtn ${l?"on":""}" title=${this.t("Wartung (System greift nicht ein)")}
          @click=${()=>this.toggle(this.e("wartung"))}>
          <ha-icon icon="mdi:wrench-outline" style="--mdc-icon-size:16px"></ha-icon></button>
        ${t.show_settings!==!1?o`<button class="gc icbtn" title=${this.t("Einstellungen")} @click=${()=>{this._open=!this._open}}>
          <ha-icon icon="mdi:tune-variant" style="--mdc-icon-size:16px"></ha-icon></button>`:u}
        <button class="gc chip-auto ${r?"":"off"}" @click=${()=>this.confirmToggle(this.e("auto"),this.t("Automatik"))}>
          AUTO ${r?this.t("AN"):this.t("AUS")}</button>
      </div>

      ${this.dropdowns(n,s)}
      ${d?o`
        <div style="display:flex;align-items:center;gap:9px;margin:2px 2px 12px;padding:11px 13px;
            border-radius:12px;background:rgba(255,255,255,.03);border:1px solid var(--line)">
          <ha-icon icon="mdi:power-standby" style="--mdc-icon-size:18px;color:var(--tx-3)"></ha-icon>
          <span style="font-size:12.5px;font-weight:700;color:var(--tx-2)">${this.t("Station aus \u2013 keine Steuerung, keine Klima-Gewichtung im Zelt.")}</span>
        </div>`:o`
        ${this.recText()}
        ${this.lightRow()}
        ${this.dliRow(i)}
        ${this.heatRow(f)}
        ${this.pumpRow(i)}
        ${this.tankRow()}
        ${this.actuators()}
        ${this.sensorBlock()}
        ${this.mediaBlock()}
        ${x.length?o`<div style="display:flex;gap:7px;flex-wrap:wrap;margin-top:12px">
          ${x.map(_=>o`<span class="pbadge ${_.crit?"crit":"warn"}">
            <ha-icon icon="mdi:alert" style="--mdc-icon-size:12px"></ha-icon>${this.t(_.label)}</span>`)}</div>`:u}
      `}

      ${this.todoBlock()}
      ${this.logExcerpt()}
      ${this._open?this.groupedSettings():u}
      ${this.renderConfirm()}
    </div>`}setting(t,i){return o`<button class="gc skv" @click=${()=>this.moreInfo(t)}>
      <div class="k">${this.t(i)}</div><div class="vv">${this.st(t)??"\u2013"}</div></button>`}dropdowns(t,i){let n=this.e("plant"),s=!!this.hass.states[n],r=this.phaseDropdown(t,i);return s?o`<div style="display:flex;gap:8px;margin-bottom:8px">
      <div style="flex:1;min-width:0">${this.plantDropdown(n)}</div>
      <div style="flex:1;min-width:0">${r}</div>
    </div>`:o`<div style="margin-bottom:8px">${r}</div>`}plantDropdown(t){let i=this.hass.states[t],n=i?.state??"Generisch",s=i?.attributes?.options??[];return o`<div class="dd ${this._plant?"open":""}">
      <button class="gc dd-btn" aria-haspopup="listbox" aria-expanded=${this._plant}
        @click=${()=>{this._plant=!this._plant,this._phase=!1}}>
        <span class="pdot" style="background:${h.ok};color:${h.ok}"></span>
        <span style="overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${n}</span>
        <ha-icon icon="mdi:chevron-down" style="--mdc-icon-size:16px;color:var(--tx-3);margin-left:auto;transition:transform .2s;${this._plant?"transform:rotate(180deg)":""}"></ha-icon>
      </button>
      ${this._plant?o`<div class="dd-menu" role="listbox">
        ${s.map(r=>o`<button class="gc dd-it" role="option" aria-selected=${r===n}
          @click=${()=>{this._select(t,r),this._plant=!1}}>
          <span class="pdot" style="background:${h.ok}"></span>${r}</button>`)}
      </div>`:u}
    </div>`}phaseDropdown(t,i){let n=E(this.st(this.e("age"))),s=n!==null?`${this.t("Tag")} ${n}`:this.t(Ve[t]??"");return o`<div class="dd ${this._phase?"open":""}">
      <button class="gc dd-btn" aria-haspopup="listbox" aria-expanded=${this._phase}
        @click=${()=>{this._phase=!this._phase,this._plant=!1}}>
        <span class="pdot" style="background:${i.color};color:${i.color}"></span>${this.t(t)}
        <span class="hint">${s}</span>
        <ha-icon icon="mdi:chevron-down" style="--mdc-icon-size:16px;color:var(--tx-3);transition:transform .2s;${this._phase?"transform:rotate(180deg)":""}"></ha-icon>
      </button>
      ${this._phase?o`<div class="dd-menu" role="listbox">
        ${fi.map(r=>o`<button class="gc dd-it" role="option" aria-selected=${r===t}
          @click=${()=>{this._select(this.e("stage"),r),this._phase=!1}}>
          <span class="pdot ${bi[r]}"></span>${this.t(r)}<span class="hint">${this.t(Ve[r]??"")}</span></button>`)}
      </div>`:u}
    </div>`}recText(){let i=this.hass.states[this.e("rec")]?.attributes?.hinweis?.trim();return i?o`<div style="display:flex;align-items:flex-start;gap:8px;margin:0 2px 10px;
        padding:9px 12px;border-radius:11px;background:rgba(255,206,122,.10);border:1px solid rgba(255,206,122,.22)">
      <ha-icon icon="mdi:lightbulb-alert-outline" style="--mdc-icon-size:16px;color:${h.warn};flex-shrink:0;margin-top:1px"></ha-icon>
      <span style="font-size:12px;font-weight:700;color:rgba(242,247,243,.86);line-height:1.35">${i}</span>
    </div>`:u}supplyRow(t){return o`<button class="gc supply" style="${t.topMargin?"margin-top:8px":""}" @click=${t.onClick??(()=>{})}>
      <span class="shd">
        <span class="sic" style="color:${t.iconColor};${t.glow?`filter:drop-shadow(0 0 7px ${t.iconColor})`:""}">
          <ha-icon icon="${t.icon}" style="--mdc-icon-size:calc(20px * var(--gc-sc,1))"></ha-icon></span>
        <span class="stt">${t.title}</span>
        <span class="stm" style="color:${t.valueColor}">${t.value}</span>
      </span>
      ${t.fillPct!==null&&t.fillPct!==void 0?o`
        <span class="bar"><i style="width:${Math.min(100,Math.max(0,t.fillPct))}%;
          background:linear-gradient(90deg, ${t.fillColor}, ${t.fillColor}cc);box-shadow:0 0 9px ${t.fillColor}55"></i>
          ${t.minPct!==void 0?o`<span class="min" style="left:${t.minPct}%"></span>`:u}</span>`:u}
      ${t.footL||t.footR?o`<span class="sft"><span>${t.footL??""}</span><span>${t.footR??""}</span></span>`:u}
    </button>`}lightRow(){if(this.isPreview)return this.supplyRow({icon:"mdi:lightbulb-on",iconColor:h.light,glow:!0,title:this.t("Licht an"),value:"5 h 40 min",valueColor:h.light,fillPct:62,fillColor:h.light,footL:this.t("Leuchtphase"),footR:`62 % ${this.t("verbleibend")}`});let t=this.hass.states[this.e("lightRest")];if(!t)return u;let i=t.attributes??{},n=i.zustand?i.zustand==="an":void 0,s=Number(t.state),r=isNaN(s)?"\u2013":yt(s),l=typeof i.anteil=="number"?Math.min(1,Math.max(0,i.anteil)):null,c=n===!1?"#7E9488":h.light;return this.supplyRow({icon:n===!1?"mdi:lightbulb-outline":"mdi:lightbulb-on",iconColor:c,glow:n!==!1,title:n===!1?this.t("Licht aus"):this.t("Licht an"),value:n===!1?"\u2013":r,valueColor:c,fillPct:n===!1?null:l!==null?l*100:null,fillColor:c,footL:n===!1?this.t("Licht ausgeschaltet"):this.t("Leuchtphase"),footR:n===!1?"":l!==null?`${(l*100).toFixed(0)} % ${this.t("verbleibend")}`:"",onClick:()=>this.moreInfo(this.e("lightRest"))})}dliRow(t){let i=this.hass.states[this.e("dli")];if(!i&&!t)return u;let n=E(this.st(this.e("dli")))??(t?18.4:null),s=E(this.st(this.e("dliFc")))??(t?24.7:null),r=i?.attributes?.ziel_aktuelle_phase??(t?25:void 0),l=r&&n!==null?n/r*100:null,c=r&&s!==null?Math.min(100,s/r*100):void 0,p=l!==null&&l>100,d=p?"#FFB35C":h.light;return this.supplyRow({icon:"mdi:white-balance-sunny",iconColor:d,topMargin:!0,title:this.t("DLI heute"),value:n!==null?`${n.toFixed(1)}${r?` / ${r}`:""}`:"\u2013",valueColor:d,fillPct:l,fillColor:d,minPct:c,footL:s!==null?`${this.t("Prognose")} ${s.toFixed(1)} mol/m\xB2`:"",footR:p?`${this.t("\xFCber Ziel")} +${(l-100).toFixed(0)} %`:r?this.t("Marker = Prognose"):"",onClick:()=>this.moreInfo(this.e("dli"))})}heatRow(t){if(this.isPreview)return u;let i=this.hass.states[this.e("heatActive")];if(!i)return u;let n=i.attributes??{},s=n.aktiv!==!1&&this.isOn(this.e("heatEnabled")),r=i.state==="on",l=typeof n.ist_temp=="number"?n.ist_temp:null,c=typeof n.ziel_temp=="number"?n.ziel_temp:null,p=typeof n.hysterese=="number"?n.hysterese:.5,d,g,f,x,y,$=null,v;if(n.sensorfehler)d="mdi:thermometer-alert",g=h.crit,f=this.t("Heizung Sensorfehler"),x=this.t("Regelf\xFChler fehlt \u2013 Heizung gesperrt"),y="";else if(n.uebertemperatur)d="mdi:thermometer-alert",g=h.crit,f=this.t("Heizung \xDCbertemperatur"),x=this.t("Not-Aus \u2013 zu hei\xDF"),y=c!==null?`${this.t("Ziel")} ${c} \xB0C`:"";else if(t)d="mdi:radiator-off",g="#7E9488",f=this.t("Heizung gesperrt"),x=this.t("Automatik/Zelt aus \u2013 manuell freigeben"),y=c!==null?`${this.t("Ziel")} ${c} \xB0C`:"";else if(g=s?h.heat:"#7E9488",d=r?"mdi:radiator":s?"mdi:radiator-disabled":"mdi:radiator-off",f=s?r?this.t("Heizung heizt"):this.t("Heizung bereit"):this.t("Heizung aus"),x=s?c!==null?`${this.t("Ziel")} ${c} \xB0C \xB1${p} K`:this.t("Germination-Heizung"):this.t("Heizung ausgeschaltet"),y=s?r?this.t("heizt"):this.t("bereit"):"",s&&l!==null&&c!==null){let A=c-4,L=c+1;$=(l-A)/(L-A)*100,v=Math.min(100,Math.max(0,(c-A)/(L-A)*100))}let k=l!==null?`${l.toFixed(1)} \xB0C`:"\u2013",_=()=>this.moreInfo(this.e("heatActive"));return o`
      <div class="gc supply" style="margin-top:8px">
        <div class="shd">
          <span class="sic" style="color:${g};${r?`filter:drop-shadow(0 0 7px ${g})`:""}" @click=${_}>
            <ha-icon icon="${d}" style="--mdc-icon-size:20px"></ha-icon></span>
          <span class="stt" style="cursor:pointer" @click=${_}>${f}</span>
          <span class="stm" style="color:${g};cursor:pointer" @click=${_}>${k}</span>
          <button class="hsw ${s?"on":""}" role="switch" aria-checked=${s} ?disabled=${t}
            style="${t?"opacity:.4;cursor:not-allowed":""}"
            title=${t?this.t("Gesperrt \u2013 erst Automatik/Zelt aktivieren"):this.t("Germination-Heizung")}
            @click=${()=>{t||this.toggle(this.e("heatEnabled"))}}></button>
        </div>
        ${$!==null?o`<span class="bar"><i style="width:${Math.min(100,Math.max(0,$))}%;
          background:linear-gradient(90deg, ${h.heat}, ${h.heat}cc);box-shadow:0 0 9px ${h.heat}55"></i>
          ${v!==void 0?o`<span class="min" style="left:${v}%"></span>`:u}</span>`:u}
        ${x||y?o`<span class="sft"><span>${x}</span><span>${y}</span></span>`:u}
      </div>`}pumpRow(t){let i=this.hass.states[this.e("pumpRest")];if(!i&&!t)return u;if(t)return this.supplyRow({icon:"mdi:water-pump",iconColor:h.water,topMargin:!0,title:this.t("Pumpe aus"),value:"in 12 min",valueColor:h.water,fillPct:80,fillColor:h.water,footL:this.t("N\xE4chster Zyklus"),footR:"80 %"});if(this.isOn(this.e("pPump")))return this.supplyRow({icon:"mdi:water-pump-off",iconColor:h.crit,topMargin:!0,title:this.t("Pumpe gesperrt"),value:"\u2013",valueColor:h.crit,fillPct:null,footL:this.t("F\xFCllstand zu niedrig \u2013 Trockenlaufschutz"),footR:"",onClick:()=>this.moreInfo(this.e("pPump"))});let n=Number(i.state),s=i.attributes??{},r=s.aktiv===!1,l=typeof s.anteil=="number"?Math.min(1,Math.max(0,s.anteil)):null,c=s.zustand?s.zustand==="an":void 0,p=typeof s.bewaesserung_vor_min=="number"?s.bewaesserung_vor_min:null;return this.supplyRow({icon:r?"mdi:water-pump-off":"mdi:water-pump",iconColor:r?"#7E9488":h.water,topMargin:!0,title:r?this.t("Pumpe aus"):c?this.t("Pumpe l\xE4uft"):this.t("Pumpe aus"),value:r||isNaN(n)?"\u2013":yt(n),valueColor:r?"#7E9488":h.water,fillPct:r?null:l!==null?l*100:null,fillColor:h.water,footL:r?this.t("Pumpe ausgeschaltet"):c===!1&&p!==null?`${this.t("zuletzt")}: ${yt(p)}`:s.text??this.t("Zyklus"),footR:r?"":l!==null?`${(l*100).toFixed(0)} % ${this.t("verbleibend")}`:"",onClick:()=>this.moreInfo(this.e("pumpRest"))})}tankRow(){let t=this._config;if(!t.tank_entity)return u;let i=Math.min(100,Math.max(0,E(this.st(t.tank_entity))??0)),n=t.tank_min??30,s=i<n,r=s?h.crit:h.water,l=t.tank_volume;return this.supplyRow({icon:"mdi:car-coolant-level",iconColor:h.water,topMargin:!0,title:this.t("Tank"),value:`${i.toFixed(0)} %`,valueColor:r,fillPct:i,fillColor:r,minPct:n,footL:l?`\u2248 ${(i/100*l).toFixed(0)} l ${this.t("von")} ${l} l`:s?this.t("Unter Mindeststand"):"",footR:`${this.t("Min")} ${n} %`,onClick:()=>this.moreInfo(t.tank_entity)})}expHeader(t,i){let n=this._exp[t];return o`<button class="gc" @click=${()=>{this._exp={...this._exp,[t]:!n}}}
      style="display:flex;align-items:center;width:100%;text-align:left;cursor:pointer;margin-top:14px">
      <span class="seclbl" style="margin:0;flex:1">${this.t(i)}</span>
      <ha-icon icon="${n?"mdi:chevron-up":"mdi:chevron-down"}" style="--mdc-icon-size:20px;color:var(--tx-3)"></ha-icon>
    </button>`}actuators(){let t=this._config.actuators??[];return t.length?this._exp.actuators?o`
      ${this.expHeader("actuators","Aktoren")}
      <div class="acts">
        ${t.map(i=>{let n=this.isOn(i.entity),s=i.kind??"",r=i.icon??xi[s]??"mdi:power",l=i.name??this.friendly(i.entity);return o`<button class="gc act ${n?"on":""} ${n&&s?s:""}" style="position:relative"
            title=${i.confirm?this.t("Gesicherter Aktor \u2013 fragt vor dem Schalten nach"):l}
            @click=${()=>i.confirm?this.confirmToggle(i.entity,l):this.toggle(i.entity)}>
            ${i.confirm?o`<ha-icon icon="mdi:lock" title=${this.t("Best\xE4tigung vor dem Schalten")}
              style="position:absolute;top:6px;right:6px;--mdc-icon-size:12px;color:var(--tx-3)"></ha-icon>`:u}
            <ha-icon class="aic" icon="${r}" style="--mdc-icon-size:18px"></ha-icon>
            <span class="anm">${l}</span>
            <span class="ast">${n?this.t("AN"):this.t("AUS")}</span></button>`})}
      </div>`:o`${this.expHeader("actuators","Aktoren")}
        <div style="display:flex;flex-wrap:wrap;gap:11px;padding:2px 2px 0">
          ${t.map(i=>{let n=this.isOn(i.entity);return o`<span style="display:inline-flex;align-items:center;gap:6px;font:800 calc(11.5px * var(--gc-sc,1)) var(--f-ui);color:var(--tx-2)">
              <span style="width:9px;height:9px;border-radius:50%;flex-shrink:0;background:${n?h.ok:"var(--tx-3)"};${n?`box-shadow:0 0 7px ${h.ok}`:""}"></span>
              ${i.name??this.friendly(i.entity)}</span>`})}
        </div>`:u}allSensors(){return[...this.autoSensors(),...this.configSensors()]}autoSensors(){let i=this.hass.states[this.e("event")]?.attributes??{},n=i.gc_sensors??{},s=i.gc_ph_bereich??null,r=i.gc_ec_bereich??null,l=[];if(n.ph&&l.push(this.zoneSensor(n.ph,"pH","mdi:ph",s,4,8,.3)),n.ec){let c=r?Math.max(3,Math.ceil((r[1]+.8)*2)/2):3.5;l.push(this.zoneSensor(n.ec,"EC","mdi:flash-outline",r,0,c,.3))}return n.water_temp&&l.push({entity:n.water_temp,name:this.t("Wassertemp."),anzeige:"graph",color:h.temp,icon:"mdi:coolant-temperature",hours:24}),n.soil_temp&&l.push({entity:n.soil_temp,name:this.t("Bodentemp."),anzeige:"graph",color:h.temp,icon:"mdi:thermometer",hours:24}),n.soil_moisture&&l.push({entity:n.soil_moisture,name:this.t("Bodenfeuchte"),anzeige:"wert",color:h.water,icon:"mdi:water-percent"}),n.temp&&l.push({entity:n.temp,name:this.t("Temperatur"),anzeige:"graph",color:h.temp,icon:"mdi:thermometer",hours:24}),n.humidity&&l.push({entity:n.humidity,name:this.t("Feuchtigkeit"),anzeige:"graph",color:h.water,icon:"mdi:water-percent",hours:24}),l}zoneSensor(t,i,n,s,r,l,c){if(!s)return{entity:t,name:i,icon:n,anzeige:"wert"};let p=[s[0],s[1]],d=[Math.max(r,p[0]-c),Math.min(l,p[1]+c)];return{entity:t,name:i,icon:n,anzeige:"zone",min:r,max:l,ideal:p,ok:d}}configSensors(){return(this._config.sensors??[]).map(i=>typeof i=="string"?{entity:i}:i)}sensorBlock(){let t=this.allSensors();return t.length?this._exp.sensors?o`${this.expHeader("sensors","Sensorwerte")}
        ${t.map(i=>this.sensorInd(i))}`:o`${this.expHeader("sensors","Sensorwerte")}
      <div style="display:flex;flex-wrap:wrap;gap:12px;padding:2px 2px 0">
        ${t.map(i=>{let n=E(this.st(i.entity)),s=i.anzeige??"wert",r,l=!0;if(s==="zone"){let c=i.ideal??[0,0],p=i.ok??c;r=i.color??(n!==null&&n>=c[0]&&n<=c[1]?h.ok:n!==null&&n>=p[0]&&n<=p[1]?h.warn:h.crit),l=!1}else r=i.color??"var(--tx-3)";return o`<span style="display:inline-flex;align-items:center;gap:5px;font:800 calc(12px * var(--gc-sc,1)) var(--f-num);color:var(--tx-2)">
            <span style="width:9px;height:9px;border-radius:50%;flex-shrink:0;background:${r};box-shadow:0 0 7px ${r}"></span>
            ${i.icon?o`<ha-icon icon="${i.icon}" style="--mdc-icon-size:calc(13px * var(--gc-sc,1));color:var(--tx-3)"></ha-icon>`:u}
            ${l&&n!==null?o`${n}<span style="color:var(--tx-3)">${this.unit(i.entity)}</span>`:u}
          </span>`})}
      </div>`:u}zoneV6(t,i,n,s,r){let l=n-i||1,c=(g,f)=>Math.max(0,(Math.min(f,n)-Math.max(g,i))/l*100),p=[{cls:"z-bad",w:c(i,s[0])},{cls:"z-low",w:c(s[0],r[0])},{cls:"z-ok",w:c(r[0],r[1])},{cls:"z-high",w:c(r[1],s[1])},{cls:"z-bad",w:c(s[1],n)}],d=t!==null?Math.min(100,Math.max(0,(t-i)/l*100)):null;return o`
      <span class="zones">
        ${p.map(g=>o`<i class="${g.cls}" style="width:${g.w}%"></i>`)}
        ${d!==null?o`<span class="zmark" style="left:${d}%"></span>`:u}
      </span>
      <span class="zlbl">
        <span style="width:30%;text-align:left">${i}</span>
        <span style="width:40%;color:#4CB87E;font-weight:800">${r[0]}\u2013${r[1]} ${this.t("ideal")}</span>
        <span style="width:30%;text-align:right">${n}</span>
      </span>`}sensorInd(t){let i=E(this.st(t.entity)),n=t.name??this.friendly(t.entity),s=this.unit(t.entity),r=t.anzeige??"wert",l=t.entity.split(".")[0],c=l==="number"||l==="input_number",p=this.hass.states[t.entity]?.attributes??{},d=t.step??(Number(p.step)||.1),g=p.min,f=p.max,x=(String(d).split(".")[1]??"").length||1,y=C=>{let b=C;g!==void 0&&(b=Math.max(g,b)),f!==void 0&&(b=Math.min(f,b)),this.hass.callService(l,"set_value",{entity_id:t.entity,value:Number(b.toFixed(x))})},$,v=t.ideal??[0,0],k=t.ok??v;if(r==="zone"){let C=i!==null&&i>=v[0]&&i<=v[1],b=i!==null&&i>=k[0]&&i<=k[1];$=t.color??(C?h.ok:b?h.warn:h.crit)}else r==="graph"?$=t.color??h.water:$=t.color??"rgba(242,247,243,.95)";let _=this.trendArrow(this._spark[t.entity]),A=_?o`<ha-icon icon="${_.icon}" title=${this.t("Trend")}
          style="--mdc-icon-size:${_.size}px;color:${_.color};margin-right:3px;vertical-align:-3px"></ha-icon>`:u,L=o`<div class="ihd">
      <span class="ilbl" style="color:${r==="wert"?"var(--tx-2)":$}">
        ${t.icon?o`<ha-icon icon="${t.icon}" style="--mdc-icon-size:14px"></ha-icon>`:u}${n}
        ${c?o`<ha-icon icon="mdi:pencil" style="--mdc-icon-size:11px;opacity:.45;margin-left:3px"></ha-icon>`:u}
      </span>
      ${c?o`<span class="setrow">
            <button class="gc stepbtn" title=${this.t("weniger")} @click=${C=>{C.stopPropagation(),i!==null&&y(i-d)}}><ha-icon icon="mdi:minus" style="--mdc-icon-size:16px"></ha-icon></button>
            <span class="setval" style="color:${$}">${A}${i!==null?i:"\u2013"}<span class="u">${s}</span></span>
            <button class="gc stepbtn" title=${this.t("mehr")} @click=${C=>{C.stopPropagation(),y((i??g??0)+d)}}><ha-icon icon="mdi:plus" style="--mdc-icon-size:16px"></ha-icon></button></span>`:o`<span class="ival" style="color:${$}">
            ${A}${i!==null?i:this.st(t.entity)??"\u2013"}<span class="u">${s}</span></span>`}
    </div>`,w=r==="zone"?o`${this.zoneV6(i,t.min??0,t.max??14,k,v)}
          ${(this._spark[t.entity]?.length??0)>1?o`<div class="spark" style="margin-top:7px;opacity:.85">${Dt(this._spark[t.entity],$,this.chartW(74),28)}</div>`:u}`:r==="graph"?o`<div class="spark">${Dt(this._spark[t.entity]??[],$,this.chartW(74),38)}</div>`:u;return o`<div class="ind" style="cursor:pointer" @click=${()=>this.moreInfo(t.entity)}>${L}${w}</div>`}mediaBlock(){let t=this._config,i=t.media_height??180;if(t.image_url)return o`<div class="seclbl">${this.t("Livestream")}</div>
        <img src=${t.image_url} alt="" loading="lazy"
          style="width:100%;height:${i}px;object-fit:cover;border-radius:12px;border:1px solid var(--line);display:block">`;if(t.camera_entity){let n=this.hass.states[t.camera_entity],s=n?.attributes?.entity_picture;return o`<div class="seclbl">${this.t("Livestream")}</div>
        <button class="gc" title=${this.t("Live ansehen")} @click=${()=>this.moreInfo(t.camera_entity)}
          style="width:100%;padding:0;border:1px solid var(--line);border-radius:12px;overflow:hidden;display:block;background:#000;cursor:pointer">
          ${n&&s?o`<img src=${s} alt="" style="width:100%;height:${i}px;object-fit:cover;display:block">`:o`<div style="height:${i}px;display:flex;align-items:center;justify-content:center;gap:8px;color:var(--tx-3)">
                <ha-icon icon="mdi:cctv" style="--mdc-icon-size:22px"></ha-icon>${this.t("Kamera nicht verf\xFCgbar")}</div>`}
        </button>`}return u}logExcerpt(){if(this._config.show_log===!1)return u;let n=this.hass.states[this.e("event")]?.attributes?.verlauf??[];if(!n.length)return u;let s=(this._exp.log?n.slice(-3):n.slice(-1)).reverse();return o`${this.expHeader("log","Protokoll")}
      <div style="display:flex;flex-direction:column;gap:5px">
        ${s.map(r=>o`<button class="gc" @click=${()=>this.moreInfo(this.e("event"))}
          style="display:flex;align-items:center;gap:9px;width:100%;text-align:left;color:inherit;
            background:${Rt[r.level]??Rt.none};border:none;border-radius:9px;padding:9px 11px;min-height:38px">
          <span style="width:7px;height:7px;border-radius:50%;flex-shrink:0;background:${Fe[r.level]??h.info}"></span>
          <span style="flex:1;min-width:0;font-size:12px;font-weight:700;color:var(--tx-2);overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${r.text}</span>
          <span style="font:700 10px var(--f-num);color:var(--tx-3);flex-shrink:0">${r.ts}</span>
        </button>`)}
      </div>`}todoBlock(){let t=this._config,i=M(this.hass,t.tent,"zelt","todo")??V("todo",t.tent,"aufgaben",t.overrides),n=this.hass.states[i]?.attributes?.aufgaben_offen??[],s=`${t.station}: `,r=n.filter(c=>c.text.startsWith(s)).map(c=>({uid:c.uid,text:c.text.slice(s.length)}));if(!r.length)return u;let l=this._exp.todo?r:r.slice(0,1);return o`${this.expHeader("todo","Aufgaben")}
      <div style="display:flex;flex-direction:column;gap:5px">
        ${l.map(c=>o`<button class="gc" title=${this.t("Als erledigt markieren")}
          @click=${()=>this.completeTodo(i,c.uid)}
          style="display:flex;align-items:center;gap:9px;width:100%;text-align:left;color:inherit;
            background:rgba(255,255,255,.03);border:1px solid var(--line);border-radius:9px;padding:9px 11px;min-height:38px;cursor:pointer">
          <ha-icon icon="mdi:checkbox-blank-circle-outline" style="--mdc-icon-size:16px;color:var(--accent, ${h.ok})"></ha-icon>
          <span style="flex:1;min-width:0;font-size:12px;font-weight:700;color:var(--tx-2)">${c.text}</span>
        </button>`)}
      </div>`}completeTodo(t,i){this.hass.callService("todo","update_item",{entity_id:t,item:i,status:"completed"})}groupedSettings(){let t=(r,l)=>{let c=l.map(([p,d,g,f])=>({eid:this.eRole(p,d,g),label:f})).filter(p=>p.eid&&this.hass.states[p.eid]);return{title:r,items:c}},i=[t(this.t("Lichtzeiten"),[["time","licht_an","light_on","Licht AN"],["time","licht_aus_seedling_veg","light_off_sv","AUS Seed/Veg"],["time","licht_aus_bloom_flush","light_off_bloom","AUS Bloom/Flush"]]),t(this.t("Pumpe"),[["number","pumpe_an_seedling","pump_on_seedling","AN Seedling"],["number","pumpe_aus_seedling","pump_off_seedling","AUS Seedling"],["number","pumpe_an_veg","pump_on_veg","AN Veg"],["number","pumpe_aus_veg","pump_off_veg","AUS Veg"],["number","pumpe_an_bloom_flush","pump_on_bloom","AN Bloom"],["number","pumpe_aus_bloom_flush","pump_off_bloom","AUS Bloom"]]),t(this.t("Heizung"),[["number","heizung_zieltemperatur","heat_target","Ziel \xB0C"],["number","heizung_hysterese","heat_hyst","Hysterese K"]]),t(this.t("Schwellen & Sonstiges"),[["date","keimstart","germination","Keimstart"],["number","manuelle_ubernahme","override_minutes","Man. \xDCbernahme"],["number","lux_ppfd_faktor","lux_factor","Lux-Faktor"],["number","fullstand_minimum_pumpensperre","level_min","F\xFCllstand-Min"],["number","bodenfeuchte_schwelle_bewassern_unter","moisture_min","Feuchte-Schwelle"]])].filter(r=>r.items.length),n=this.e("germinationReset"),s=n&&this.hass.states[n];return o`<div style="margin-top:4px">
      ${i.map(r=>o`
        <div class="seclbl">${r.title}</div>
        <div class="settings-grid">${r.items.map(l=>this.setting(l.eid,l.label))}</div>`)}
      ${s?o`<button class="gc" title=${this.t("Keimdatum l\xF6schen")}
          style="display:flex;align-items:center;justify-content:center;gap:8px;width:100%;margin-top:10px;
            padding:10px;border:1px solid var(--line);border-radius:10px;background:var(--card-3);
            color:var(--tx-2);font:800 12px var(--f-ui);cursor:pointer"
          @click=${()=>this.hass.callService("button","press",{entity_id:n})}>
          <ha-icon icon="mdi:calendar-remove" style="--mdc-icon-size:16px;color:var(--tx-3)"></ha-icon>
          ${this.t("Keimstart zur\xFCcksetzen")}</button>`:u}
    </div>`}};customElements.define("growctrl-station-card",Kt);var vi=[m.text("title","\u{1F3F7}\uFE0F Titel"),m.num("columns","\u25A6 Spalten",1,6)],yi=[m.entity("entity","\u{1F50C} Aktor",["switch","input_boolean","light","fan"]),m.text("name","\u270F\uFE0F Anzeigename (optional)"),m.text("group","\u{1F5C2}\uFE0F Gruppe (optional, z.B. Zelt / Pflanzen)"),m.select("kind","\u{1F3A8} Art (Farbe/Icon, optional)",[{value:"light",label:"Licht"},{value:"heat",label:"Heizung"},{value:"water",label:"Wasser / Befeuchter"},{value:"o2",label:"O\u2082"},{value:"fan",label:"L\xFCfter"},{value:"pump",label:"Pumpe"}]),m.bool("confirm","\u2705 Mit Best\xE4tigung schalten")],Gt=class extends z{render(){return o`${this.form(vi)}
      ${this.list({key:"controls",rowSchema:yi,title:"\u{1F50C} Aktoren",addLabel:"Aktor hinzuf\xFCgen",newItem:()=>({entity:""})})}
      ${this.styleSection()}
      <div class="hint">Gleiche <b>Gruppe</b> = gemeinsame \u00dcberschrift. <b>Art</b> setzt Farbe und Icon.
        <b>Best\u00e4tigung</b> fragt vor dem Schalten nach (z.B. f\u00fcr Pumpen).</div>`}};customElements.define("growctrl-controls-editor",Gt);var $i={switch:"mdi:power",light:"mdi:lightbulb",fan:"mdi:fan",input_boolean:"mdi:toggle-switch"},wi={light:"mdi:lightbulb",heat:"mdi:radiator",water:"mdi:air-humidifier",o2:"mdi:scuba-tank",fan:"mdi:fan",pump:"mdi:water-pump"},jt=class extends S{static{this.styles=T}validateConfig(e){if(!Array.isArray(e.controls)||!e.controls.length)throw new Error("growctrl-controls-card: 'controls' (min. 1 Eintrag) ist Pflicht.")}static getConfigElement(){return document.createElement("growctrl-controls-editor")}static getStubConfig(){return{controls:[{entity:"switch.beispiel"}]}}render(){let e=this._config;if(!this.hass)return u;let t=e.columns??4,i=new Map;return e.controls.forEach(n=>{let s=n.group??"";i.has(s)||i.set(s,[]),i.get(s).push(n)}),o`<div class="card ${e.style?.glass?"glass":""}" style="${P(e.style)};position:relative">
      ${e.title?o`<div class="hd"><div class="ttl">${e.title}</div></div>`:u}
      ${[...i.entries()].map(([n,s])=>o`
        ${n?o`<div class="seclbl">${n}</div>`:u}
        <div class="acts" style="grid-template-columns:repeat(${t},1fr); ${n?"":"margin-top:4px"}">
          ${s.map(r=>{let l=this.isOn(r.entity),c=r.name??this.friendly(r.entity),p=r.kind??"",d=p==="light"||p==="heat"||p==="water"?p:"",g=r.icon??this.hass.states[r.entity]?.attributes?.icon??wi[p]??$i[r.entity.split(".")[0]]??"mdi:power";return o`<button class="gc act ${l?"on":""} ${l?d:""}" style="position:relative"
              title=${r.confirm?"Gesicherter Aktor \u2013 fragt vor dem Schalten nach":c}
              @click=${()=>r.confirm?this.confirmToggle(r.entity,c):this.toggle(r.entity)}>
              ${r.confirm?o`<ha-icon icon="mdi:lock" title="Bestätigung vor dem Schalten"
                style="position:absolute;top:6px;right:6px;--mdc-icon-size:12px;color:var(--tx-3)"></ha-icon>`:u}
              <ha-icon class="aic" icon=${g} style="--mdc-icon-size:18px"></ha-icon>
              <span class="anm">${c}</span>
              <span class="ast">${l?"AN":"AUS"}</span>
            </button>`})}
        </div>`)}
      ${this.renderConfirm()}
    </div>`}};customElements.define("growctrl-controls-card",jt);var _i=[m.text("title","\u{1F3F7}\uFE0F Titel"),m.num("columns","\u25A6 Spalten",1,6)],ki=[m.entity("entity","\u{1F4C8} Sensor","sensor"),m.text("name","\u270F\uFE0F Anzeigename (optional)"),m.num("min","Sollbereich Min (optional)"),m.num("max","Sollbereich Max (optional)"),m.select("accent","\u{1F3A8} Akzentfarbe (optional)",[{value:"temp",label:"Temperatur (orange)"},{value:"hum",label:"Feuchte (blau)"},{value:"vpd",label:"VPD (Akzent)"}])],qt=class extends z{render(){return o`${this.form(_i)}
      ${this.list({key:"sensors",rowSchema:ki,title:"\u{1F4C8} Sensoren",addLabel:"Sensor hinzuf\xFCgen",newItem:()=>({entity:""})})}
      ${this.styleSection()}
      <div class="hint">Jede Kachel zeigt den aktuellen Wert. <b>Anzeigename</b> \u00fcberschreibt den
        Entity-Namen. <b>Sollbereich</b> (Min/Max) blendet einen kleinen Soll-Hinweis ein.
        <b>Akzentfarbe</b> f\u00e4rbt den Wert passend ein.</div>`}};customElements.define("growctrl-sensors-editor",qt);var Xt=class extends S{static{this.styles=T}validateConfig(e){if(!Array.isArray(e.sensors)||!e.sensors.length)throw new Error("growctrl-sensors-card: 'sensors' (min. 1 Eintrag) ist Pflicht.")}static getConfigElement(){return document.createElement("growctrl-sensors-editor")}static getStubConfig(){return{sensors:[{entity:"sensor.beispiel"}]}}bad(e,t){return e!==null&&(t.min!==void 0&&e<t.min||t.max!==void 0&&e>t.max)}render(){let e=this._config;if(!this.hass)return u;let t=e.columns??3,i=e.sensors.some(n=>this.bad(E(this.st(n.entity)),n));return o`<div class="card ${e.style?.glass?"glass":""}" data-level=${i?"warning":"ok"} style=${P(e.style)}>
      ${e.title?o`<div class="hd"><div class="ttl">${e.title}</div></div>`:u}
      <div class="kpis" style="grid-template-columns:repeat(${t},minmax(0,1fr))">
        ${e.sensors.map(n=>{let s=E(this.st(n.entity)),r=this.bad(s,n),l=n.name??this.friendly(n.entity),c=n.accent?`c-${n.accent}`:"";return o`<button class="gc kpi ${c}" @click=${()=>this.moreInfo(n.entity)}>
            <span class="mlbl" style="overflow:hidden; white-space:nowrap; text-overflow:ellipsis; display:block">${l}</span>
            <span class="v" style="${r?`color:${h.crit}`:""}">${s!==null?s:"--"}<span class="u">${this.unit(n.entity)}</span></span>
          </button>`})}
      </div>
    </div>`}};customElements.define("growctrl-sensors-card",Xt);var Si=[m.text("title","\u{1F3F7}\uFE0F Titel"),m.num("limit","\u{1F4CB} Max. Zeilen",3,50),m.select("min_level","\u{1F50D} Anzeige",[{value:"alle",label:"Alle Ereignisse"},{value:"warnung",label:"Nur Warnungen/Fehler"},{value:"info",label:"Nur Infos"}])],Ai=[m.entity("entity","\u{1F4DC} Letztes-Ereignis-Sensor","sensor"),m.text("name","\u270F\uFE0F Label (optional)")],Yt=class extends z{render(){return o`${this.form(Si)}
      ${this.list({key:"sources",rowSchema:Ai,title:"\u{1F4E1} Quellen",addLabel:"Quelle hinzuf\xFCgen",newItem:()=>({entity:""})})}
      ${this.styleSection()}
      <div class="hint">Sammelt die Ereignisse mehrerer GROWCTRL-Sensoren in ein Protokoll, neueste zuerst.
        <b>Label</b> ersetzt den Quellennamen. <b>Anzeige</b> kann auf Warnungen/Fehler filtern.</div>`}};customElements.define("growctrl-status-editor",Yt);var Qt=class extends S{static{this.styles=T}validateConfig(e){if(!Array.isArray(e.sources)||!e.sources.length)throw new Error("growctrl-status-card: 'sources' (Letztes-Ereignis-Sensoren) ist Pflicht.")}static getConfigElement(){return document.createElement("growctrl-status-editor")}static getStubConfig(){return{sources:[{entity:"sensor.growctrl_gross_main1_letztes_ereignis"}]}}render(){let e=this._config;if(!this.hass)return u;let t=[],i=[];for(let d of e.sources){let g=this.hass.states[d.entity],f=g?.attributes?.verlauf??[];i.push(g?.attributes?.schweregrad??"ok"),f.forEach((x,y)=>t.push({ts:x.ts,t:typeof x.t=="number"?x.t:void 0,text:x.text,level:x.level,src:d.name??this.friendly(d.entity),entity:d.entity,_i:y}))}t.sort((d,g)=>{let f=d.t??-1,x=g.t??-1;return f!==x?x-f:(g._i??0)-(d._i??0)});let s=(e.min_level==="warnung"?t.filter(d=>d.level==="warning"||d.level==="critical"):e.min_level==="info"?t.filter(d=>d.level==="info"):t).slice(0,e.limit??12),r=tt(i),l=e.sources.length>1,c=d=>d==="critical"?"c":d==="warning"?"w":d==="info"?"i":"",p=r==="ok"?this.t("Info"):r==="warning"?this.t("Warnung"):r==="critical"?this.t("Kritisch"):this.t("Info");return o`<div class="card ${e.style?.glass?"glass":""}" data-level=${r} style=${P(e.style)}>
      <div class="hd">
        <div class="ttl grow">${e.title??this.t("Ereignisprotokoll")}</div>
        <span class="pill ${H(r)}">${p}</span>
      </div>
      <div class="log">
        ${s.length?s.map(d=>o`
          <button class="gc lrow ${c(d.level)}" @click=${()=>d.entity&&this.moreInfo(d.entity)}>
            <span class="tm">${d.ts}</span>
            ${l?o`<span class="who">${d.src}</span>`:u}
            <span class="what">${d.text}</span>
          </button>`):o`<div class="lrow"><span class="what" style="color:var(--acc)">\u2713 ${this.t("Noch keine Ereignisse")}</span></div>`}
      </div>
    </div>`}};customElements.define("growctrl-status-card",Qt);var Ci=[m.text("title","\u{1F3F7}\uFE0F Titel (optional)"),m.text("logo","\u{1F5BC}\uFE0F Logo-URL (z.B. /local/growctrl/logo.png)"),m.bool("show_chart","\u{1F4C8} 24h-Chart zus\xE4tzlich zum Zonen-Balken"),m.num("hours","\u23F1\uFE0F Chart-Zeitraum (h)",1,168)],Jt=class extends z{render(){let e=[this.stationSelect(this._config?.tent),m.text("name","\u270F\uFE0F Anzeigename (optional)")];return o`${this.form([this.tentSelect("tent","\u{1F3D5}\uFE0F Zelt"),...Ci])}
      ${this.list({key:"stations",rowSchema:e,title:"\u{1F331} Stationen (Informationssystem)",addLabel:"Station hinzuf\xFCgen",newItem:()=>({station:""})})}
      ${this.styleSection()}
      <div class="hint">Die Hero-Karte ist die Zelt-\u00dcbersicht: Klima-Werte, VPD-Skala und das
        Informationssystem. Die gelisteten <b>Stationen</b> liefern die Ereigniszeilen darunter.</div>`}};customElements.define("growctrl-hero-editor",Jt);var Ue=[{w:20,col:"#6E97DE",lbl:"zu feucht"},{w:20,col:"#58E0A5",lbl:"Seedling"},{w:20,col:"#2FB36C",lbl:"Veg"},{w:20,col:"#E5B567",lbl:"Bloom"},{w:20,col:"#D4726F",lbl:"zu trocken"}],te=2,ee=class extends S{constructor(){super(...arguments);this._logoErr=!1;this._hist=[]}static{this.styles=T}static{this.properties={...S.properties,_hist:{state:!0},_logoErr:{state:!0}}}validateConfig(t){if(!t.tent)throw new Error("growctrl-hero-card: 'tent' ist Pflicht (Zelt-Name aus der Integration).")}static getConfigElement(){return document.createElement("growctrl-hero-editor")}static getStubConfig(){return{tent:"gross",stations:[{station:"main1"}]}}te(t){let[i,n,s]=it[t],r=this._config;return r.overrides?.[n]??M(this.hass,r.tent,"zelt",s)??V(i,r.tent,n,r.overrides)}connectedCallback(){super.connectedCallback(),this._load(),this._timer=window.setInterval(()=>this._load(),5*6e4)}disconnectedCallback(){super.disconnectedCallback(),this._timer&&clearInterval(this._timer)}async _load(){if(!this.hass){setTimeout(()=>this._load(),1e3);return}this._hist=await I(this.hass,this.te("vpd"),this._config.hours??24)}tglBtn(t,i,n){return o`<button class="gc tgl ${n?"on":""}" @click=${()=>this.confirmToggle(t,i)}>
      <span class="sw"></span> ${i}</button>`}render(){let t=this._config;if(!this.hass)return u;let i=this.hass.states[this.te("vpd")],n=!i&&!this.hass.states[this.te("enabled")],s=E(i?.state)??(n?.76:null),r=i?.attributes?.temp??(n?21.5:null),l=i?.attributes?.rh??(n?61:null),c=i?.attributes?.phase_effektiv??"",p=i?.attributes?.sollwerte,d=this.isOn(this.te("enabled"))||n,g=this.isOn(this.te("climate")),f=this.hass.states[this.te("status")],x=f?.attributes?.probleme??[],y=(t.stations??[]).map(b=>{let F=this.hass.states[M(this.hass,t.tent,b.station,"last_event")??Z("sensor",t.tent,b.station,"letztes_ereignis",t.overrides)],O=this.hass.states[M(this.hass,t.tent,b.station,"light_rest")??Z("sensor",t.tent,b.station,"licht_restzeit",t.overrides)],R=F?.attributes?.schweregrad??"ok";return{name:b.name??b.station,text:F?.state??"\u2013",level:R,lightText:O?.attributes?.text??(O?.state?`${this.t("Licht")} ${this.t(String(O.attributes?.zustand??""))}`:""),on:O?.attributes?.zustand==="an",ent:M(this.hass,t.tent,b.station,"last_event")??Z("sensor",t.tent,b.station,"letztes_ereignis",t.overrides)}}),$=b=>b==="warning"||b==="critical",v=tt([(f?.state??"").toLowerCase()==="problem"?"warning":"ok",...y.map(b=>$(b.level)?b.level:"ok")]),k=[...x.map(b=>({label:b,level:"warning"})),...y.filter(b=>$(b.level)).map(b=>({label:`${b.name}: ${b.text}`,level:b.level}))],_=s!==null&&p&&s>=p.vpd_min&&s<=p.vpd_max,A=s!==null?Math.min(100,Math.max(0,s/te*100)):null,L=this.isOn(this.te("stale")),w=i?.attributes?.temp_entity||this.te("vpd"),C=i?.attributes?.rh_entity||this.te("vpd");return o`<div class="card ${t.style?.glass?"glass":""}" data-level=${v} style="${P(t.style)};position:relative">
      <div class="hd">
        ${t.logo&&!this._logoErr?o`<img src=${t.logo} alt="Logo" @error=${()=>{this._logoErr=!0}}
              style="width:46px;height:46px;border-radius:16px;object-fit:contain;background:rgba(255,255,255,.92);padding:3px;flex-shrink:0" />`:o`<div class="badge-ic"><ha-icon icon="mdi:sprout" style="--mdc-icon-size:22px"></ha-icon></div>`}
        <div class="grow" style="min-width:0">
          <div class="ttl">${t.title??`Growroom \xB7 ${t.tent}`}</div>
          ${c?o`<div class="sub">${this.t("Klima-Phase")} ${this.t(c)}</div>`:u}
        </div>
        <span class="pill ${H(v)}">${v==="ok"?this.t("Alles OK"):v==="warning"?this.t("Warnung"):v==="critical"?this.t("Kritisch"):this.t("Info")}</span>
      </div>

      <div style="display:flex; gap:8px; margin-bottom:16px; flex-wrap:wrap">
        ${this.tglBtn(this.te("enabled"),this.t("Zelt"),d)}
        ${this.tglBtn(this.te("climate"),this.t("Klima"),g)}
      </div>

      <div class="kpis">
        <button class="gc kpi c-temp" @click=${()=>this.moreInfo(w)}>
          <span class="mlbl">${this.t("Temperatur")}</span><span class="v">${r!=null?Number(r).toFixed(1):"\u2013"}<span class="u">°C</span></span></button>
        <button class="gc kpi c-hum" @click=${()=>this.moreInfo(C)}>
          <span class="mlbl">${this.t("Luftfeuchte")}</span><span class="v">${l!=null?Math.round(Number(l)):"\u2013"}<span class="u">%</span></span></button>
        <button class="gc kpi c-vpd" @click=${()=>this.moreInfo(this.te("vpd"))}>
          <span class="mlbl">VPD</span><span class="v" style="${s!==null&&!_?`color:${h.warn}`:""}">${s!==null?s.toFixed(2):"\u2013"}<span class="u">kPa</span></span></button>
      </div>

      ${L?o`<div style="margin-top:10px;display:flex;align-items:center;gap:7px;padding:7px 12px;border-radius:10px;
        background:color-mix(in srgb, ${h.warn} 14%, transparent);color:${h.warn};font-size:12.5px;font-weight:700">
        <ha-icon icon="mdi:timer-alert-outline" style="--mdc-icon-size:16px"></ha-icon>
        ${this.t("Klima-Sensoren eingefroren")} \u00b7 ${this.t("Werte evtl. veraltet")}</div>`:u}

      <div style="margin-top:16px">
        <div class="zones">
          ${Ue.map(b=>o`<i style="width:${b.w}%;background:${b.col}"></i>`)}
          ${p?o`<span class="zband" style="left:${p.vpd_min/te*100}%;width:${(p.vpd_max-p.vpd_min)/te*100}%"></span>`:u}
          ${A!==null?o`<span class="zmark" style="left:${A}%"></span>`:u}
        </div>
        <div class="zlbl">${Ue.map(b=>o`<span style="width:${b.w}%">${this.t(b.lbl)}</span>`)}</div>
      </div>

      ${t.show_chart===!0&&this._hist.length>1?o`
        <div class="seclbl">VPD · ${t.hours??24}h</div>
        ${W([{data:this._hist,color:_===!1?h.warn:h.ok,fill:!0}],{w:this.chartW(),h:96,band:p?{min:p.vpd_min,max:p.vpd_max}:void 0,grid:3})}`:u}

      ${y.length?o`<div class="seclbl">${this.t("Stationen")}</div>
        <div style="display:flex; flex-direction:column; gap:7px">
          ${y.map(b=>o`<button class="gc supply" @click=${()=>b.ent&&this.moreInfo(b.ent)}>
            <span class="shd">
              <span class="sic" style="color:${b.on?h.light:"var(--tx-3)"}"><ha-icon icon="mdi:lightbulb${b.on?"-on":"-outline"}" style="--mdc-icon-size:18px"></ha-icon></span>
              <span class="stt">${b.name}</span>
              <span class="sbadge" style="color:${$(b.level)?b.level==="critical"?h.crit:h.warn:h.ok}">${$(b.level)?b.level==="critical"?this.t("Fehler"):this.t("Warnung"):this.t("OK")}</span>
            </span>
            <span class="sft"><span>${b.lightText||b.text}</span><span></span></span>
          </button>`)}
        </div>`:u}

      <div class="seclbl">${this.t("Informationssystem")}</div>
      ${k.length?o`<div style="display:flex; flex-direction:column; gap:7px">
            ${k.map(b=>o`<div class="event" style="cursor:default">
              <span class="edot" style="background:${b.level==="critical"?h.crit:h.warn}"></span>
              <span class="etx" style="color:${b.level==="critical"?h.crit:h.warn}">${b.label}</span></div>`)}
          </div>`:o`<div class="event" style="cursor:default">
            <span class="edot" style="background:${h.ok};box-shadow:0 0 6px ${h.ok}"></span>
            <span class="etx" style="color:${h.ok}">${this.t("Alle Systeme arbeiten normal")}</span></div>`}
      ${this.renderConfirm()}
    </div>`}};customElements.define("growctrl-hero-card",ee);var ie=class extends z{render(){let e=this._config.tent,t=[this.tentSelect("tent","\u{1F3D5}\uFE0F Zelt"),m.text("title","\u{1F3F7}\uFE0F Titel"),m.bool("show_sensors","\u{1F9EA} Sensoren-Sektion zeigen (pH/EC/Temp/RH/\u2026, Standard an)"),m.bool("show_controls","\u{1F39B}\uFE0F Steuerungs-Sektion zeigen (Licht/Pumpe/\u2026, Standard an)"),m.bool("show_tent_row","\u{1F3D5}\uFE0F Zelt-Sektion zeigen (Aktiv/Klima/VPD/Status)"),m.text("tent_name","\u270F\uFE0F Name der Zelt-Zeile (optional)")],i=[this.stationSelect(e,"station","\u{1F331} Station (= Pflanze)"),m.text("name","\u270F\uFE0F Anzeigename (optional)")];return o`${this.form(t)}
      ${this.list({key:"stations",rowSchema:i,title:"\u{1F331} Stationen",addLabel:"Station hinzuf\xFCgen",newItem:()=>({station:""})})}
      ${this.styleSection()}
      <div class="hint">Drei Ampel-Sektionen: <b>Sensoren</b> (pH / EC / Temperatur / Feuchte /
        Wasser- &amp; Bodentemperatur \u2013 nur Spalten, die min. eine Station hat), <b>Steuerung</b>
        (Licht / Pumpe / Heizung / Auto / Eingriff / Status) und <b>Zelt</b> (Aktiv / Klima / VPD / Status).
        Es gen\u00fcgt, die Stationen zu listen \u2013 die <b>Idealbereiche</b> f\u00fcr die Sensor-Ampel
        kommen automatisch aus dem Pflanzen-Preset der Integration (abh\u00e4ngig von Systemtyp + Pflanze).<br>
        Ampel: <b>gr\u00fcn</b> = im Idealbereich, <b>gelb</b> = knapp daneben, <b>rot</b> = Problem,
        <b>grau</b> = kein Wert, <b>leere Zelle</b> = dieser Sensor ist an der Station nicht angelegt. Tippen \u00f6ffnet die Entit\u00e4t.</div>`}};customElements.define("growctrl-checkup-editor",ie);var Ei=[{key:"ph",icon:"mdi:ph",label:"pH",range:"ph",margin:.3},{key:"ec",icon:"mdi:flash-outline",label:"EC",range:"ec",margin:.3},{key:"temp",icon:"mdi:thermometer",label:"Temp",range:null,margin:0},{key:"humidity",icon:"mdi:water-percent",label:"RH",range:null,margin:0},{key:"water_temp",icon:"mdi:coolant-temperature",label:"Wasser",range:null,margin:0},{key:"soil_temp",icon:"mdi:thermometer-low",label:"Boden",range:null,margin:0}],ne=class extends S{static{this.styles=T}validateConfig(e){if(!Array.isArray(e.stations)||!e.stations.length)throw new Error("growctrl-checkup-card: 'stations' (min. 1) ist Pflicht.")}static getConfigElement(){return document.createElement("growctrl-checkup-editor")}static getStubConfig(){return{tent:"gross",show_tent_row:!0,stations:[{station:"main1"},{station:"main2"}]}}sEnt(e,t,i){let[n,s,r]=$t[i];return M(this.hass,e,t,r)??Z(n,e,t,s)}tEnt(e,t){let[i,n,s]=it[t];return M(this.hass,e,"zelt",s)??V(i,e,n)}sensorColsPresent(e){return Ei.filter(t=>e.some(i=>!!(this.hass.states[this.sEnt(i.tent,i.station,"event")]?.attributes?.gc_sensors??{})[t.key]))}sensorCell(e,t,i,n){let r=this.hass.states[this.sEnt(e,t,"event")]?.attributes??{},c=(r.gc_sensors??{})[i.key];if(!c)return{configured:!1,level:"off",title:""};if(n)return{configured:!0,level:"off",title:this.t("gestoppt")};let p=E(this.hass.states[c]?.state);if(p===null)return{configured:!0,level:"off",title:this.t("kein Wert")};let d=null;if(i.range==="ph"?d=r.gc_ph_bereich??null:i.range==="ec"&&(d=r.gc_ec_bereich??null),!d)return{configured:!0,level:"ok",title:`${p}`};let[g,f]=d,x=p>=g&&p<=f,y=p>=g-i.margin&&p<=f+i.margin;return{configured:!0,level:x?"ok":y?"warning":"critical",title:`${i.label} ${p} (${this.t("ideal")} ${g}\u2013${f})`}}avail(e){let t=this.hass.states[e];return!!t&&t.state!=="unavailable"&&t.state!=="unknown"}exists(e){return!!this.hass.states[e]}stationStopped(e,t){let i=this.tEnt(e,"enabled"),n=this.avail(i)&&!this.isOn(i),s=this.hass.states[this.sEnt(e,t,"stage")]?.state==="Aus";return{stopped:n||s,tentOff:n,off:s}}stationCells(e,t){let i=this.sEnt(e,t,"lightRest"),n=this.sEnt(e,t,"pumpRest"),s=this.sEnt(e,t,"heatActive"),r=this.sEnt(e,t,"auto"),l=this.sEnt(e,t,"pOverride"),c=this.sEnt(e,t,"event"),{stopped:p,tentOff:d}=this.stationStopped(e,t),g=d?this.t("Zelt aus \u2013 gestoppt"):this.t("Station aus"),f=(wt,je,qe)=>({present:this.exists(wt),ent:wt,level:p?"off":this.avail(wt)?je:"off",text:p?g:qe}),x=this.hass.states[i],y=x?.attributes?.zustand==="an",$=this.isOn(this.sEnt(e,t,"pFailsafe")),v=this.isOn(this.sEnt(e,t,"pPower"))||this.isOn(this.sEnt(e,t,"pTime")),k=f(i,$?"critical":v?"warning":y?"ok":"off",$?this.t("Licht-Failsafe ausgel\xF6st"):this.isOn(this.sEnt(e,t,"pPower"))?this.t("Licht AN ohne Leistung"):this.isOn(this.sEnt(e,t,"pTime"))?this.t("Lichtzeiten unvollst\xE4ndig"):y?this.t("Licht an"):x?.attributes?.aktiv===!1?this.t("Licht ausgeschaltet"):this.t("Licht aus")),_=this.isOn(this.sEnt(e,t,"pPump")),A=this.hass.states[n],L=f(n,_?"critical":A?.attributes?.aktiv===!1?"off":"ok",_?this.t("Pumpe gesperrt (F\xFCllstand)"):A?.attributes?.aktiv===!1?this.t("Pumpe ausgeschaltet"):A?.attributes?.text??this.t("Zyklus l\xE4uft")),w=this.isOn(this.sEnt(e,t,"heatSensorFault")),C=this.isOn(this.sEnt(e,t,"heatOvertemp")),b=this.isOn(this.sEnt(e,t,"heatEnabled")),F=this.hass.states[s],O=F?.state==="on",R=F?.attributes??{},nt=f(s,w||C?"critical":b?"ok":"off",w?this.t("Heizung Sensorfehler"):C?this.t("Heizung \xDCbertemperatur"):b?O?`${this.t("Heizung heizt")}${typeof R.ist_temp=="number"?` \xB7 ${R.ist_temp} \xB0C`:""}`:this.t("Heizung bereit"):this.t("Heizung aus")),ut=this.isOn(r),ht=this.isOn(this.sEnt(e,t,"wartung")),Ze=f(r,ht?"info":ut?"ok":"warning",ht?this.t("Wartungsmodus aktiv"):ut?this.t("Automatik AN"):this.t("Automatik AUS (manuell)")),pe=this.isOn(l),Ke=f(l,pe?"warning":"ok",pe?this.t("Manueller Eingriff aktiv"):this.t("Kein Eingriff")),de=this.hass.states[c],ue=de?.attributes?.schweregrad??"ok",Ge={present:!0,ent:c,keepClick:!0,level:p?"off":ue==="critical"?"critical":ue==="warning"?"warning":"ok",text:p?g:de?.state??"OK"};return{licht:k,pumpe:L,heizung:nt,auto:Ze,eingriff:Ke,status:Ge}}tentCells(e){let t=this.isOn(this.tEnt(e,"enabled")),i=t?"ok":"warning",n=t?this.t("Zelt aktiv"):this.t("Zelt deaktiviert"),s=this.isOn(this.tEnt(e,"climate")),r=s?"ok":"off",l=s?this.t("Klima-Automatik AN"):this.t("Klima-Automatik AUS"),c=this.hass.states[this.tEnt(e,"vpd")],p=E(c?.state),d=c?.attributes?.sollwerte,g=p!==null&&d?p>=d.vpd_min&&p<=d.vpd_max?"ok":"warning":c?"ok":"off",f=p!==null?`VPD ${p.toFixed(2)} kPa${d?` (${this.t("Soll")} ${d.vpd_min}\u2013${d.vpd_max})`:""}`:"\u2014",x=this.hass.states[this.tEnt(e,"status")],y=(x?.state??"").toLowerCase()==="problem",$=x?.attributes?.probleme??[],v=y?"warning":"ok",k=y?$[0]??this.t("Problem erkannt"):this.t("Alles OK");return{aktiv:i,klima:r,vpd:g,status:v,aktivText:n,klimaText:l,vpdText:f,statusText:k,ent:{aktiv:this.tEnt(e,"enabled"),klima:this.tEnt(e,"climate"),vpd:this.tEnt(e,"vpd"),status:this.tEnt(e,"status")}}}dot(e){return o`<span class="dot ${e==="off"?"off":H(e)}"></span>`}mc(e,t,i){return o`<button class="gc mc" title=${t} @click=${()=>i&&this.moreInfo(i)}>${this.dot(e)}</button>`}pCell(e,t){return e.configured?e.level==="off"?o`<span class="mc" style="cursor:default">${this.dot("off")}</span>`:this.mc(e.level,e.title,t):o`<span class="mc" style="cursor:default"></span>`}cCell(e){return e.present?e.level==="off"&&!e.keepClick?o`<span class="mc" style="cursor:default" title=${e.text}>${this.dot("off")}</span>`:this.mc(e.level,e.text,e.ent):o`<span class="mc" style="cursor:default"></span>`}mh(e,t){return o`<span class="mh" title=${this.t(t)}><ha-icon icon=${e}></ha-icon></span>`}mClass(e){return e===4?"m4":e===5?"m5":e===6?"m6":""}gridStyle(e){return this.mClass(e)?"":`grid-template-columns:1fr repeat(${e}, minmax(0,46px))`}render(){let e=this._config;if(!this.hass)return u;let t=(e.stations??[]).map(v=>({tent:v.tent??e.tent??"gross",station:v.station,name:v.name??v.station})),i=e.tent??t[0]?.tent??"gross",n=e.show_tent_row!==!1,s=e.show_sensors!==!1,r=e.show_controls!==!1,l=[],c=s?this.sensorColsPresent(t):[],p=c.length?t.map(v=>{let k=this.stationStopped(v.tent,v.station).stopped,_=c.map(A=>({col:A,cell:this.sensorCell(v.tent,v.station,A,k)}));return _.forEach(A=>{A.cell.configured&&A.cell.level!=="off"&&l.push(A.cell.level)}),{...v,cells:_}}):[],d=t.some(v=>!!this.hass.states[this.sEnt(v.tent,v.station,"heatActive")]),g=r?t.map(v=>{let k=this.stationCells(v.tent,v.station);return[k.status,k.pumpe,k.licht,k.auto,k.eingriff,...d?[k.heizung]:[]].forEach(_=>{_.present&&_.level!=="off"&&l.push(_.level)}),{...v,cells:k}}):[],f=n?this.tentCells(i):null;f&&l.push(f.status,f.aktiv,f.vpd);let x=tt(l),y=c.length,$=d?6:5;return o`<div class="card ${e.style?.glass?"glass":""}" data-level=${x} style=${P(e.style)}>
      <div class="hd">
        <div class="grow">
          <div class="ttl">${e.title??this.t("Checkup")}</div>
          <div class="sub">${t.length} ${t.length===1?this.t("Station"):this.t("Stationen")}${n?` \xB7 1 ${this.t("Zelt")}`:""}</div>
        </div>
        <span class="pill ${H(x)}">${x==="ok"?this.t("Alles OK"):x==="warning"?this.t("Warnung"):x==="critical"?this.t("Kritisch"):this.t("Info")}</span>
      </div>

      ${y?o`
        <div class="seclbl" style="margin-top:12px">${this.t("Sensoren")}</div>
        <div class="matrix ${this.mClass(y)}" style=${this.gridStyle(y)}>
          <span></span>
          ${c.map(v=>this.mh(v.icon,v.label))}
          ${p.map(v=>o`
            <div class="mn">${v.name}</div>
            ${v.cells.map(({col:k,cell:_})=>this.pCell(_,this.hass.states[this.sEnt(v.tent,v.station,"event")]?.attributes?.gc_sensors?.[k.key]??void 0))}`)}
        </div>`:u}

      ${g.length?o`
        <div class="seclbl">${this.t("Steuerung")}</div>
        <div class="matrix ${d?"m6":"m5"}" style=${this.gridStyle($)}>
          <span></span>
          ${this.mh("mdi:lightbulb-outline","Licht")}${this.mh("mdi:water-pump","Pumpe")}${d?this.mh("mdi:radiator","Heizung"):u}${this.mh("mdi:robot-outline","Auto")}${this.mh("mdi:hand-back-right-outline","Eingriff")}${this.mh("mdi:heart-pulse","Status")}
          ${g.map(v=>o`
            <div class="mn">${v.name}</div>
            ${this.cCell(v.cells.licht)}
            ${this.cCell(v.cells.pumpe)}
            ${d?this.cCell(v.cells.heizung):u}
            ${this.cCell(v.cells.auto)}
            ${this.cCell(v.cells.eingriff)}
            ${this.cCell(v.cells.status)}`)}
        </div>`:u}

      ${f?o`
        <div class="seclbl">${this.t("Zelt")}</div>
        <div class="matrix m4">
          <span></span>
          ${this.mh("mdi:power","Aktiv")}${this.mh("mdi:air-conditioner","Klima")}${this.mh("mdi:water-percent","VPD")}${this.mh("mdi:heart-pulse","Status")}
          <div class="mn">${e.tent_name??`${this.t("Zelt")} ${i}`}</div>
          ${this.mc(f.aktiv,f.aktivText,f.ent.aktiv)}
          ${this.mc(f.klima,f.klimaText,f.ent.klima)}
          ${this.mc(f.vpd,f.vpdText,f.ent.vpd)}
          ${this.mc(f.status,f.statusText,f.ent.status)}
        </div>`:u}

      <div class="legend" style="margin-top:14px">
        <span><i style="background:var(--acc)"></i>${this.t("im Idealbereich")}</span>
        <span><i style="background:var(--warn)"></i>${this.t("knapp daneben")}</span>
        <span><i style="background:var(--crit)"></i>${this.t("Problem")}</span>
        <span><i style="background:var(--line)"></i>${this.t("kein Wert")}</span>
        <span style="color:var(--tx-3)">${this.t("leere Zelle = kein Sensor")}</span>
      </div>
    </div>`}};customElements.define("growctrl-checkup-card",ne);var zi=[m.text("title","\u{1F3F7}\uFE0F Titel"),m.entity("entity","\u{1F4A7} F\xFCllstand-Sensor (%) (Pflicht)","sensor"),m.num("min","\u26A0\uFE0F Mindeststand (%)",0,100),m.num("volume_l","\u{1FAA3} Tankvolumen (Liter, optional)",0,2e3)],se=class extends z{render(){return o`${this.form(zi)}${this.styleSection()}
      <div class="hint">Der <b>F\u00fcllstand-Sensor</b> liefert Prozent. Unter dem <b>Mindeststand</b> wird der
        Tank rot. Mit <b>Tankvolumen</b> zeigt die Karte zus\u00e4tzlich die ungef\u00e4hren Liter an.</div>`}};customElements.define("growctrl-tank-editor",se);var re=class extends S{static{this.styles=T}validateConfig(e){if(!e.entity)throw new Error("growctrl-tank-card: 'entity' (Fuellstand-Sensor in %) ist Pflicht.")}static getConfigElement(){return document.createElement("growctrl-tank-editor")}static getStubConfig(){return{entity:"sensor.gc_slot1_level1",title:"Tank",min:30,volume_l:200}}render(){let e=this._config;if(!this.hass)return u;let t=!this.hass.states[e.entity],i=Math.min(100,Math.max(0,E(this.st(e.entity))??(t?49:0))),n=e.min!==void 0&&i<e.min,s=n?h.crit:h.water,r=e.volume_l?i/100*e.volume_l:null;return o`<div class="card ${e.style?.glass?"glass":""}" data-level=${n?"critical":"ok"} style=${P(e.style)}>
      <div class="hd">
        <div class="ttl grow">${e.title??this.t("Tank")}</div>
        ${n?o`<span class="pill crit">Nachfüllen</span>`:u}
      </div>
      <div style="display:flex; gap:18px; align-items:center">
        <button class="gc tankv" @click=${()=>this.moreInfo(e.entity)}>
          ${e.min!==void 0?o`<span class="minl" style="bottom:${e.min}%"></span>`:u}
          <span class="fill" style="height:${i}%; background:linear-gradient(180deg, ${s}d9, ${s}80)"></span>
        </button>
        <button class="gc" style="flex:1; min-width:0; text-align:left" @click=${()=>this.moreInfo(e.entity)}>
          <span class="mlbl">Aktueller Füllstand</span>
          <div style="font:700 38px/1 var(--f-num); letter-spacing:-1.5px; color:${s}; margin-top:5px; font-variant-numeric:tabular-nums">
            ${Math.round(i)}<span style="font:600 14px var(--f-num); color:var(--tx-2); margin-left:2px">%</span></div>
          ${r!==null?o`<div style="margin-top:6px; font:700 12.5px var(--f-ui); color:var(--tx-2)">≈ ${r.toFixed(1)} l von ${e.volume_l} l</div>`:u}
          ${e.min!==void 0?o`<div style="font:700 10.5px var(--f-ui); color:var(--tx-3); margin-top:2px">Mindeststand ${e.min} %</div>`:u}
        </button>
      </div>
    </div>`}};customElements.define("growctrl-tank-card",re);var Li=[m.text("title","\u{1F3F7}\uFE0F Titel"),m.num("hours","\u23F1\uFE0F Zeitraum (h)",1,168),m.num("height","\u{1F4CF} Diagrammh\xF6he (px)",80,300)],Fi=[m.entity("entity","\u{1F4C8} Sensor","sensor"),m.text("name","\u270F\uFE0F Anzeigename (optional)"),m.select("axis","\u{1F4CA} Achse",[{value:"left",label:"Links (Standard)"},{value:"right",label:"Rechts (zweite Achse)"}]),m.text("color","\u{1F3A8} Farbe (optional, z.B. #FF9F5A)")],ae=class extends z{render(){return o`${this.form(Li)}
      ${this.list({key:"sensors",rowSchema:Fi,title:"\u{1F4C9} Serien",addLabel:"Sensor hinzuf\xFCgen",newItem:()=>({entity:""})})}
      ${this.styleSection()}
      <div class="hint">Mehrere Serien werden in ein Diagramm gezeichnet (z.B. Temperatur + Luftfeuchte).
        Stell eine Serie auf <b>Achse: Rechts</b>, wenn sie eine eigene Skala braucht (z.B. Temp links \u00b0C, Feuchte rechts %).
        <b>Farbe</b> als Hex-Wert; ohne Angabe automatisch.</div>`}};customElements.define("growctrl-history-editor",ae);var We=["#FFB98A","#7CC8F0","#7BE8A8","#C3ABF5"],oe=class extends S{constructor(){super(...arguments);this._hist={};this._hidden=new Set}static{this.styles=T}static{this.properties={...S.properties,_hist:{state:!0},_hidden:{state:!0}}}_toggle(t){let i=new Set(this._hidden);i.has(t)?i.delete(t):i.add(t),this._hidden=i}validateConfig(t){if(!Array.isArray(t.sensors)||!t.sensors.length)throw new Error("growctrl-history-card: 'sensors' (min. 1 Eintrag) ist Pflicht.")}static getConfigElement(){return document.createElement("growctrl-history-editor")}static getStubConfig(){return{sensors:[{entity:"sensor.zelt_temperature"}],hours:24}}connectedCallback(){super.connectedCallback(),this._load(),this._timer=window.setInterval(()=>this._load(),5*6e4)}disconnectedCallback(){super.disconnectedCallback(),this._timer&&clearInterval(this._timer)}async _load(){if(!this.hass){setTimeout(()=>this._load(),1e3);return}let t=this._config,i={};for(let n of t.sensors)i[n.entity]=await I(this.hass,n.entity,t.hours??24);this._hist=i}render(){let t=this._config;if(!this.hass)return u;let i=t.sensors.map((l,c)=>({entity:l.entity,data:this._hist[l.entity]??[],color:l.color??We[c%We.length],name:l.name??this.friendly(l.entity),axis:l.axis})),n=i.filter(l=>!this._hidden.has(l.entity)),s=n.length===1,r=n.map(l=>({data:l.data,color:l.color,name:l.name,axis:l.axis,fill:s}));return o`<div class="card ${t.style?.glass?"glass":""}" style=${P(t.style)}>
      <div class="hd">
        <div class="ttl grow">${t.title??this.t("Verlauf")}</div>
        <button class="gc icbtn" style="width:auto; padding:0 13px; font:800 11px var(--f-num)">${t.hours??24}h</button>
      </div>
      ${W(r,{w:this.chartW(),h:t.height??120,grid:3,hours:t.hours??24})}
      <div class="legend">
        ${i.map(l=>{let c=this._hidden.has(l.entity);return o`<button @click=${()=>this._toggle(l.entity)}
            title=${this.t("Serie ein-/ausblenden")}
            style="background:none;border:0;padding:0;cursor:pointer;display:inline-flex;align-items:center;gap:5px;
                   font-size:10px;color:rgba(255,255,255,.6);opacity:${c?".4":"1"}">
            <i style="width:10px;height:3px;border-radius:2px;background:${l.color};display:inline-block;${c?"filter:grayscale(1)":""}"></i>${l.name} · ${E(this.st(l.entity))??"--"} ${this.unit(l.entity)}</button>`})}
      </div>
    </div>`}};customElements.define("growctrl-history-card",oe);var Pi=[m.text("title","\u{1F3F7}\uFE0F Titel"),m.entity("entity","\u{1F4C8} Sensor (Pflicht)","sensor"),m.text("name","\u270F\uFE0F Anzeigename (optional)"),m.num("min","Sollbereich Min"),m.num("max","Sollbereich Max"),m.num("decimals","\u{1F522} Nachkommastellen",0,4),m.num("hours","\u23F1\uFE0F Chart-Zeitraum (h)",1,168),m.num("height","\u{1F4CF} Diagrammh\xF6he (px)",80,300)],le=class extends z{render(){return o`${this.form(Pi)}${this.styleSection()}
      <div class="hint">Zeigt einen Messwert gro\u00df mit Sollbereich und Verlauf. Ideal f\u00fcr <b>EC</b> oder
        <b>pH</b>. Liegt der Wert au\u00dferhalb von Min/Max, f\u00e4rbt sich die Anzeige als Warnung.</div>`}};customElements.define("growctrl-metric-editor",le);var ce=class extends S{constructor(){super(...arguments);this._hist=[]}static{this.styles=T}static{this.properties={...S.properties,_hist:{state:!0}}}validateConfig(t){if(!t.entity)throw new Error("growctrl-metric-card: 'entity' ist Pflicht.")}static getConfigElement(){return document.createElement("growctrl-metric-editor")}static getStubConfig(){return{entity:"sensor.gc_slot1_ec1",name:"EC",min:1.2,max:2.2}}connectedCallback(){super.connectedCallback(),this._load(),this._timer=window.setInterval(()=>this._load(),5*6e4)}disconnectedCallback(){super.disconnectedCallback(),this._timer&&clearInterval(this._timer)}async _load(){if(!this.hass){setTimeout(()=>this._load(),1e3);return}let t=this._config;this._hist=await I(this.hass,t.entity,t.hours??24)}render(){let t=this._config;if(!this.hass)return u;let i=E(this.st(t.entity))??(this.hass.states[t.entity]?null:1.84),n=i!==null&&t.min!==void 0&&i<t.min,s=i!==null&&t.max!==void 0&&i>t.max,r=n||s,l=i===null?"var(--tx-3)":r?h.crit:h.ok,c=t.decimals??2,p=t.min!==void 0||t.max!==void 0;return o`<div class="card ${t.style?.glass?"glass":""}" data-level=${r?"warning":"ok"} style=${P(t.style)}>
      <div class="hd">
        <div class="grow" style="min-width:0">
          <span class="mlbl">${t.name??this.friendly(t.entity)}</span>
          <button class="gc" style="display:block; margin-top:4px" @click=${()=>this.moreInfo(t.entity)}>
            <span style="font:700 34px/1 var(--f-num); letter-spacing:-1.5px; color:${l}; font-variant-numeric:tabular-nums">
              ${i!==null?i.toFixed(c):"--"}</span>
            <span style="font:600 14px var(--f-num); color:var(--tx-2); margin-left:2px">${this.unit(t.entity)}</span>
          </button>
        </div>
        ${p?o`<div style="text-align:right; flex-shrink:0">
          <span class="mlbl">Sollbereich</span>
          <div style="font:700 13px var(--f-num); color:${r?h.crit:"var(--acc)"}; margin-top:3px">${t.min??"\u2013"} – ${t.max??"\u2013"}</div>
          ${r?o`<div style="font:900 10px var(--f-ui); color:${h.crit}; margin-top:2px">${n?"\u25BC ZU NIEDRIG":"\u25B2 ZU HOCH"}</div>`:u}
        </div>`:u}
      </div>
      <div style="margin-top:6px">
        ${W([{data:this._hist,color:r?h.crit:h.ok,fill:!0}],{w:this.chartW(),h:t.height??104,band:{min:t.min,max:t.max},grid:3})}
      </div>
    </div>`}};customElements.define("growctrl-metric-card",ce);var Ti="4.0.0",Mi=[{type:"growctrl-tent-card",name:"GROWCTRL Tent",description:"Zelt-Hero: Klima-KPIs, VPD-Skala, Status-Ampel"},{type:"growctrl-station-card",name:"GROWCTRL Station",description:"Station: Licht-/Pumpenbalken, Stage, Auto, Konfiguration"},{type:"growctrl-controls-card",name:"GROWCTRL Controls",description:"Aktoren-Raster mit Gruppen und Bestaetigung"},{type:"growctrl-sensors-card",name:"GROWCTRL Sensors",description:"Sensor-KPIs mit Sollbereich-Ampel"},{type:"growctrl-status-card",name:"GROWCTRL Status",description:"Ereignisprotokoll der Integration mit Schweregrad-Ampel"},{type:"growctrl-hero-card",name:"GROWCTRL Hero",description:"Globale Steuerung, Klima-KPIs, VPD-Chart, Informationssystem"},{type:"growctrl-checkup-card",name:"GROWCTRL Checkup",description:"Checkup-Matrix: Licht/Pumpe/Klima/Status je Station"},{type:"growctrl-tank-card",name:"GROWCTRL Tank",description:"DWC-Fuellstand (vertikaler Tank) mit Warnstufe"},{type:"growctrl-history-card",name:"GROWCTRL History",description:"24h-Diagramm (z.B. Temperatur + Luftfeuchte)"},{type:"growctrl-metric-card",name:"GROWCTRL Metric",description:"EC/pH gross mit Chart und Sollbereich"}];window.customCards=window.customCards??[];window.__gcEpoch=Te();Mi.forEach(a=>window.customCards.push({...a,preview:!0,documentationURL:"https://github.com/MrDarkvoid/growctrl"}));console.info(`%c GROWCTRL Cards %c v${Ti} `,"background:#1D9E75;color:#fff;font-weight:700","background:#0F6E56;color:#fff");
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
