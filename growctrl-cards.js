var gt=globalThis,ft=gt.ShadowRoot&&(gt.ShadyCSS===void 0||gt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,kt=Symbol(),fe=new WeakMap,ot=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==kt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(ft&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=fe.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&fe.set(t,e))}return e}toString(){return this.cssText}},be=o=>new ot(typeof o=="string"?o:o+"",void 0,kt),lt=(o,...e)=>{let t=o.length===1?o[0]:e.reduce((n,i,s)=>n+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+o[s+1],o[0]);return new ot(t,o,kt)},xe=(o,e)=>{if(ft)o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let n=document.createElement("style"),i=gt.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=t.cssText,o.appendChild(n)}},St=ft?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(let n of e.cssRules)t+=n.cssText;return be(t)})(o):o;var{is:Je,defineProperty:tn,getOwnPropertyDescriptor:en,getOwnPropertyNames:nn,getOwnPropertySymbols:sn,getPrototypeOf:rn}=Object,bt=globalThis,ve=bt.trustedTypes,an=ve?ve.emptyScript:"",on=bt.reactiveElementPolyfillSupport,ct=(o,e)=>o,At={toAttribute(o,e){switch(e){case Boolean:o=o?an:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},$e=(o,e)=>!Je(o,e),ye={attribute:!0,type:String,converter:At,reflect:!1,useDefault:!1,hasChanged:$e};Symbol.metadata??=Symbol("metadata"),bt.litPropertyMetadata??=new WeakMap;var V=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ye){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),i=this.getPropertyDescriptor(e,n,t);i!==void 0&&tn(this.prototype,e,i)}}static getPropertyDescriptor(e,t,n){let{get:i,set:s}=en(this.prototype,e)??{get(){return this[t]},set(r){this[t]=r}};return{get:i,set(r){let a=i?.call(this);s?.call(this,r),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ye}static _$Ei(){if(this.hasOwnProperty(ct("elementProperties")))return;let e=rn(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ct("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ct("properties"))){let t=this.properties,n=[...nn(t),...sn(t)];for(let i of n)this.createProperty(i,t[i])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[n,i]of t)this.elementProperties.set(n,i)}this._$Eh=new Map;for(let[t,n]of this.elementProperties){let i=this._$Eu(t,n);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let i of n)t.unshift(St(i))}else e!==void 0&&t.push(St(e));return t}static _$Eu(e,t){let n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return xe(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,n);if(i!==void 0&&n.reflect===!0){let s=(n.converter?.toAttribute!==void 0?n.converter:At).toAttribute(t,n.type);this._$Em=e,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(e,t){let n=this.constructor,i=n._$Eh.get(e);if(i!==void 0&&this._$Em!==i){let s=n.getPropertyOptions(i),r=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:At;this._$Em=i;let a=r.fromAttribute(t,s.type);this[i]=a??this._$Ej?.get(i)??a,this._$Em=null}}requestUpdate(e,t,n,i=!1,s){if(e!==void 0){let r=this.constructor;if(i===!1&&(s=this[e]),n??=r.getPropertyOptions(e),!((n.hasChanged??$e)(s,t)||n.useDefault&&n.reflect&&s===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:i,wrapped:s},r){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,r??t??this[e]),s!==!0||r!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,s]of this._$Ep)this[i]=s;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[i,s]of n){let{wrapped:r}=s,a=this[i];r!==!0||this._$AL.has(i)||a===void 0||this.C(i,void 0,s,a)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(t)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};V.elementStyles=[],V.shadowRootOptions={mode:"open"},V[ct("elementProperties")]=new Map,V[ct("finalized")]=new Map,on?.({ReactiveElement:V}),(bt.reactiveElementVersions??=[]).push("2.1.2");var Ft=globalThis,we=o=>o,xt=Ft.trustedTypes,_e=xt?xt.createPolicy("lit-html",{createHTML:o=>o}):void 0,ze="$lit$",G=`lit$${Math.random().toFixed(9).slice(2)}$`,Le="?"+G,ln=`<${Le}>`,Y=document,dt=()=>Y.createComment(""),ut=o=>o===null||typeof o!="object"&&typeof o!="function",Mt=Array.isArray,cn=o=>Mt(o)||typeof o?.[Symbol.iterator]=="function",Ct=`[ 	
\f\r]`,pt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ke=/-->/g,Se=/>/g,Q=RegExp(`>|${Ct}(?:([^\\s"'>=/]+)(${Ct}*=${Ct}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ae=/'/g,Ce=/"/g,Te=/^(?:script|style|textarea|title)$/i,Rt=o=>(e,...t)=>({_$litType$:o,strings:e,values:t}),c=Rt(1),tt=Rt(2),jn=Rt(3),J=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),Ee=new WeakMap,X=Y.createTreeWalker(Y,129);function Pe(o,e){if(!Mt(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return _e!==void 0?_e.createHTML(e):e}var pn=(o,e)=>{let t=o.length-1,n=[],i,s=e===2?"<svg>":e===3?"<math>":"",r=pt;for(let a=0;a<t;a++){let l=o[a],p,d,g=-1,f=0;for(;f<l.length&&(r.lastIndex=f,d=r.exec(l),d!==null);)f=r.lastIndex,r===pt?d[1]==="!--"?r=ke:d[1]!==void 0?r=Se:d[2]!==void 0?(Te.test(d[2])&&(i=RegExp("</"+d[2],"g")),r=Q):d[3]!==void 0&&(r=Q):r===Q?d[0]===">"?(r=i??pt,g=-1):d[1]===void 0?g=-2:(g=r.lastIndex-d[2].length,p=d[1],r=d[3]===void 0?Q:d[3]==='"'?Ce:Ae):r===Ce||r===Ae?r=Q:r===ke||r===Se?r=pt:(r=Q,i=void 0);let x=r===Q&&o[a+1].startsWith("/>")?" ":"";s+=r===pt?l+ln:g>=0?(n.push(p),l.slice(0,g)+ze+l.slice(g)+G+x):l+G+(g===-2?a:x)}return[Pe(o,s+(o[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]},ht=class o{constructor({strings:e,_$litType$:t},n){let i;this.parts=[];let s=0,r=0,a=e.length-1,l=this.parts,[p,d]=pn(e,t);if(this.el=o.createElement(p,n),X.currentNode=this.el.content,t===2||t===3){let g=this.el.content.firstChild;g.replaceWith(...g.childNodes)}for(;(i=X.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(let g of i.getAttributeNames())if(g.endsWith(ze)){let f=d[r++],x=i.getAttribute(g).split(G),y=/([.?@])?(.*)/.exec(f);l.push({type:1,index:s,name:y[2],strings:x,ctor:y[1]==="."?zt:y[1]==="?"?Lt:y[1]==="@"?Tt:it}),i.removeAttribute(g)}else g.startsWith(G)&&(l.push({type:6,index:s}),i.removeAttribute(g));if(Te.test(i.tagName)){let g=i.textContent.split(G),f=g.length-1;if(f>0){i.textContent=xt?xt.emptyScript:"";for(let x=0;x<f;x++)i.append(g[x],dt()),X.nextNode(),l.push({type:2,index:++s});i.append(g[f],dt())}}}else if(i.nodeType===8)if(i.data===Le)l.push({type:2,index:s});else{let g=-1;for(;(g=i.data.indexOf(G,g+1))!==-1;)l.push({type:7,index:s}),g+=G.length-1}s++}}static createElement(e,t){let n=Y.createElement("template");return n.innerHTML=e,n}};function nt(o,e,t=o,n){if(e===J)return e;let i=n!==void 0?t._$Co?.[n]:t._$Cl,s=ut(e)?void 0:e._$litDirective$;return i?.constructor!==s&&(i?._$AO?.(!1),s===void 0?i=void 0:(i=new s(o),i._$AT(o,t,n)),n!==void 0?(t._$Co??=[])[n]=i:t._$Cl=i),i!==void 0&&(e=nt(o,i._$AS(o,e.values),i,n)),e}var Et=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,i=(e?.creationScope??Y).importNode(t,!0);X.currentNode=i;let s=X.nextNode(),r=0,a=0,l=n[0];for(;l!==void 0;){if(r===l.index){let p;l.type===2?p=new mt(s,s.nextSibling,this,e):l.type===1?p=new l.ctor(s,l.name,l.strings,this,e):l.type===6&&(p=new Pt(s,this,e)),this._$AV.push(p),l=n[++a]}r!==l?.index&&(s=X.nextNode(),r++)}return X.currentNode=Y,i}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},mt=class o{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,i){this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=nt(this,e,t),ut(e)?e===u||e==null||e===""?(this._$AH!==u&&this._$AR(),this._$AH=u):e!==this._$AH&&e!==J&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):cn(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==u&&ut(this._$AH)?this._$AA.nextSibling.data=e:this.T(Y.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,i=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=ht.createElement(Pe(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===i)this._$AH.p(t);else{let s=new Et(i,this),r=s.u(this.options);s.p(t),this.T(r),this._$AH=s}}_$AC(e){let t=Ee.get(e.strings);return t===void 0&&Ee.set(e.strings,t=new ht(e)),t}k(e){Mt(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,n,i=0;for(let s of e)i===t.length?t.push(n=new o(this.O(dt()),this.O(dt()),this,this.options)):n=t[i],n._$AI(s),i++;i<t.length&&(this._$AR(n&&n._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let n=we(e).nextSibling;we(e).remove(),e=n}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},it=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,i,s){this.type=1,this._$AH=u,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=u}_$AI(e,t=this,n,i){let s=this.strings,r=!1;if(s===void 0)e=nt(this,e,t,0),r=!ut(e)||e!==this._$AH&&e!==J,r&&(this._$AH=e);else{let a=e,l,p;for(e=s[0],l=0;l<s.length-1;l++)p=nt(this,a[n+l],t,l),p===J&&(p=this._$AH[l]),r||=!ut(p)||p!==this._$AH[l],p===u?e=u:e!==u&&(e+=(p??"")+s[l+1]),this._$AH[l]=p}r&&!i&&this.j(e)}j(e){e===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},zt=class extends it{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===u?void 0:e}},Lt=class extends it{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==u)}},Tt=class extends it{constructor(e,t,n,i,s){super(e,t,n,i,s),this.type=5}_$AI(e,t=this){if((e=nt(this,e,t,0)??u)===J)return;let n=this._$AH,i=e===u&&n!==u||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,s=e!==u&&(n===u||i);i&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Pt=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){nt(this,e)}};var dn=Ft.litHtmlPolyfillSupport;dn?.(ht,mt),(Ft.litHtmlVersions??=[]).push("3.3.3");var Fe=(o,e,t)=>{let n=t?.renderBefore??e,i=n._$litPart$;if(i===void 0){let s=t?.renderBefore??null;n._$litPart$=i=new mt(e.insertBefore(dt(),s),s,void 0,t??{})}return i._$AI(o),i};var Ot=globalThis,I=class extends V{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Fe(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return J}};I._$litElement$=!0,I.finalized=!0,Ot.litElementHydrateSupport?.({LitElement:I});var un=Ot.litElementPolyfillSupport;un?.({LitElement:I});(Ot.litElementVersions??=[]).push("4.2.2");var m={label:"rgba(242,247,243,0.56)",value:"rgba(242,247,243,0.97)",muted:"rgba(242,247,243,0.46)",logLabel:"rgba(242,247,243,0.72)",logText:"rgba(242,247,243,0.90)",ok:"#7BE8A8",warn:"#FFCE7A",crit:"#FF9D9D",info:"#9AC8FF",water:"#7CC8F0",light:"#FFDC8A",temp:"#FFB98A",heat:"#FFB35C",tileBg:"rgba(255,255,255,0.04)",rowBg:"rgba(255,255,255,0.035)"},Bt={critical:"rgba(255,157,157,.14)",warning:"rgba(255,206,122,.12)",info:"rgba(154,200,255,.10)",ok:m.rowBg,none:"rgba(255,255,255,.022)"},Me={critical:m.crit,warning:m.warn,info:m.info,ok:m.logText,none:"rgba(242,247,243,.36)"},It={Aus:{bg:"rgba(150,170,160,0.12)",color:"#8EA89C"},Seedling:{bg:"rgba(154,200,255,0.16)",color:"#9AC8FF"},Veg:{bg:"rgba(123,232,168,0.16)",color:"#7BE8A8"},Bloom:{bg:"rgba(255,185,138,0.18)",color:"#FFB98A"},Flush:{bg:"rgba(195,171,245,0.18)",color:"#C3ABF5"},Trocknung:{bg:"rgba(211,168,120,0.18)",color:"#D3A878"}},Ht={soft_garden:{label:"Soft Garden (Standard)",top:"#202C25",card:"#1B2620",card2:"#222F28",card3:"#17211B",line:"#2E3D34",lineSoft:"#27342C",tx:"#F2F7F3",tx2:"#B9CCC0",tx3:"#85998C"},graphite:{label:"Graphite",top:"#20242A",card:"#191C21",card2:"#232830",card3:"#15181C",line:"#313842",lineSoft:"#2A3038",tx:"#F2F4F7",tx2:"#C2C8D0",tx3:"#8A919B"},midnight:{label:"Midnight",top:"#1A2233",card:"#141A28",card2:"#1E2740",card3:"#111626",line:"#2B3958",lineSoft:"#25304A",tx:"#EFF3FB",tx2:"#BCC8DE",tx3:"#8492AC"},plum:{label:"Plum",top:"#241F2E",card:"#1B1726",card2:"#261F36",card3:"#16121F",line:"#382E4A",lineSoft:"#2F273E",tx:"#F4F0FA",tx2:"#C9C0D8",tx3:"#978AA8"},terra:{label:"Terra",top:"#2A2420",card:"#201A16",card2:"#2C2420",card3:"#1A1410",line:"#3D332B",lineSoft:"#332A24",tx:"#F7F3EF",tx2:"#D0C8C0",tx3:"#9B918A"},slate_teal:{label:"Slate Teal",top:"#1C2A2A",card:"#142020",card2:"#1E2E2E",card3:"#111A1A",line:"#2B4040",lineSoft:"#243434",tx:"#EFF7F6",tx2:"#BCD2D0",tx3:"#84A09E"},rose_noir:{label:"Ros\xE9 Noir",top:"#2A1F24",card:"#201619",card2:"#2C1F25",card3:"#1A1216",line:"#3D2B33",lineSoft:"#33242B",tx:"#FAF0F3",tx2:"#D8C0C8",tx3:"#A88A95"},ink:{label:"Ink",top:"#1A1C1E",card:"#131517",card2:"#1D2023",card3:"#0F1113",line:"#2C3137",lineSoft:"#252A2F",tx:"#F4F6F8",tx2:"#C4CACF",tx3:"#8B9298"}},hn=o=>{if(!o||o==="soft_garden")return"";let e=Ht[o];return e?[`--gc-bg:linear-gradient(180deg, ${e.top}, ${e.card} 30%)`,`--card:${e.card}`,`--card-2:${e.card2}`,`--card-3:${e.card3}`,`--line:${e.line}`,`--line-soft:${e.lineSoft}`,`--tx:${e.tx}`,`--tx-2:${e.tx2}`,`--tx-3:${e.tx3}`].join(";"):""},T=o=>{let e=[],t=hn(o?.palette);if(t&&e.push(t),o?.background){let n=o.background.trim(),i=n.includes(",")&&!/^(linear|radial|conic|rgb|hsl)/i.test(n)?`linear-gradient(160deg, ${n})`:n;e.push(`--gc-bg:${i}`)}return o?.opacity!==void 0&&e.push(`--gc-opacity:${o.opacity}`),o?.accent&&e.push(`--gc-accent:${o.accent}`),o?.radius!==void 0&&e.push(`--gc-radius:${o.radius}px`),e.join(";")},st=o=>o.includes("critical")?"critical":o.includes("warning")?"warning":o.includes("info")?"info":"ok",Z=o=>({ok:"ok",info:"info",warning:"warn",critical:"crit",none:"none"})[o]??"ok",P=lt`
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
    box-shadow:0 10px 30px -12px rgba(0,0,0,.45); container-type:inline-size}
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
  .act.on.dehum{border-color:rgba(120,210,200,.5); color:#7CD2C8; background:linear-gradient(160deg, rgba(120,210,200,.14), var(--card-2))}

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

  /* ── Dynamische Skalierung nach KARTENBREITE (Container-Queries): groessere Schrift
        in breiteren Karten, kompakter in schmalen – unabhaengig vom Viewport, daher auch
        in der Karten-Picker-Vorschau korrekt. ── */
  @container (min-width: 540px){
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
  @container (min-width: 800px){
    .hd .ttl{font-size:22px} .kpi .v{font-size:34px} .kpi .u{font-size:15px}
    .ind .ival{font-size:24px} .setval{font-size:24px}
    .supply .stt{font-size:17px} .supply .stm{font-size:17px}
    .lrow .what{font-size:15px} .plant .pname{font-size:21px}
    .c-axl{font-size:13px}
  }

  @container (max-width: 380px){
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

  /* Sehr schmale Container (winzige Picker-Vorschau / sehr enge Spalten): noch eine
     Stufe kleiner, damit Wert + Einheit auch dort sicher in die Kachel passen.
     Die regulaere Kompakt-Stufe steckt im @container (max-width: 380px)-Block oben. */
  @container (max-width: 300px){
    .kpis{gap:5px} .kpi{padding:9px} .kpi .v{font-size:16px} .kpi .u{font-size:10px}
    .hd .ttl{font-size:16px} .pill{font-size:11px; padding:5px 10px}
  }
`,li={ok:{bg:"rgba(123,232,168,.14)",color:m.ok,label:"Alles OK"},info:{bg:"rgba(154,200,255,.14)",color:m.info,label:"Info"},warning:{bg:"rgba(255,206,122,.14)",color:m.warn,label:"Warnung"},critical:{bg:"rgba(255,157,157,.16)",color:m.crit,label:"Kritisch"},none:{bg:"rgba(133,153,140,.14)",color:"#85998C",label:"Inaktiv"}};var mn="4d72-4461726b-766f6964",Oe=()=>mn,Re,vt=null;function yt(o){if(o?.states===Re&&vt)return vt;let e=new Map,t=new Set,n={};for(let[i,s]of Object.entries(o?.states??{})){let r=s?.attributes;if(!r?.growctrl_role||!r?.growctrl_tent)continue;let a=String(r.growctrl_tent),l=String(r.growctrl_station??"zelt");e.set(`${a}::${l}::${r.growctrl_role}`,i),l==="zelt"?t.add(a):(n[a]??=new Set).add(l)}return Re=o?.states,vt={tents:[...t].sort(),stations:Object.fromEntries(Object.entries(n).map(([i,s])=>[i,[...s].sort()])),byRole:e},vt}var R=(o,e,t,n)=>yt(o).byRole.get(`${e}::${t}::${n}`);var L=class extends I{constructor(){super(...arguments);this._config={};this._label=t=>t.label??t.name}static{this.properties={hass:{attribute:!1},_config:{state:!0}}}static{this.styles=lt`
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
  `}setConfig(t){this._config={...t}}_fire(t){this._config=t,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:t},bubbles:!0,composed:!0}))}form(t){return c`<ha-form .hass=${this.hass} .data=${this._config} .schema=${t}
      .computeLabel=${this._label}
      @value-changed=${n=>this._fire({...this._config,...n.detail.value})}></ha-form>`}list(t){let n=this._config[t.key]??[],i=s=>this._fire({...this._config,[t.key]:s});return c`
      ${t.title?c`<div class="lt">${t.title}</div>`:u}
      ${n.map((s,r)=>{let a=l=>{let p=[...n];p[r]=l,i(p)};return c`<div class="row ${t.child?"col":""}">
          <div class="rowmain">
            <ha-form .hass=${this.hass} .data=${s} .schema=${t.rowSchema}
              .computeLabel=${this._label}
              @value-changed=${l=>a({...s,...l.detail.value})}></ha-form>
            <button class="del" title="Entfernen"
              @click=${()=>i(n.filter((l,p)=>p!==r))}>\u2715</button>
          </div>
          ${t.child?c`<div class="subwrap">${this._subList(s,t.child,a)}</div>`:u}
        </div>`})}
      <button class="add" @click=${()=>i([...n,t.newItem()])}>+ ${t.addLabel}</button>`}_subList(t,n,i){let s=(t[n.key]??[]).map(a=>typeof a=="string"?{entity:a}:a),r=a=>i({...t,[n.key]:a});return c`
      ${n.title?c`<div class="lt sub">${n.title}</div>`:u}
      ${s.map((a,l)=>c`<div class="row sub">
        <ha-form .hass=${this.hass} .data=${a} .schema=${n.rowSchema}
          .computeLabel=${this._label}
          @value-changed=${p=>{let d=[...s];d[l]={...a,...p.detail.value},r(d)}}></ha-form>
        <button class="del" title="Entfernen"
          @click=${()=>r(s.filter((p,d)=>d!==l))}>\u2715</button>
      </div>`)}
      <button class="add" @click=${()=>r([...s,n.newItem()])}>+ ${n.addLabel}</button>`}tentSelect(t="tent",n="Zelt"){let i=yt(this.hass).tents;return{name:t,label:n,selector:{select:{options:i,custom_value:!0,mode:"dropdown"}}}}stationSelect(t,n="station",i="Station"){let s=yt(this.hass),r=t?s.stations[t]??[]:[...new Set(Object.values(s.stations).flat())];return{name:n,label:i,selector:{select:{options:r,custom_value:!0,mode:"dropdown"}}}}styleSection(){let t=this._config.style??{},n=Object.entries(Ht).map(([s,r])=>({value:s,label:r.label})),i=[h.select("palette","\u{1F3A8} Farb-Konzept",n),h.text("accent","Akzentfarbe (Zelt-Farbe, optional)"),h.num("opacity","Deckkraft / Transparenz (0\u20131)",0,1,.05),h.bool("glass","Glas-Effekt (Blur)"),h.num("radius","Eckenradius (px)",0,40),h.text("background","Eigener Hintergrund (\xFCberschreibt Konzept, optional)")];return c`<div class="lt">Stil</div>
      <ha-form .hass=${this.hass} .data=${t} .schema=${i}
        .computeLabel=${s=>s.label??s.name}
        @value-changed=${s=>this._fire({...this._config,style:{...s.detail.value}})}></ha-form>`}},h={text:(o,e)=>({name:o,label:e,selector:{text:{}}}),bool:(o,e)=>({name:o,label:e,selector:{boolean:{}}}),num:(o,e,t,n,i)=>({name:o,label:e,selector:{number:{min:t,max:n,step:i,mode:"box"}}}),entity:(o,e,t)=>({name:o,label:e,selector:{entity:t?{domain:t}:{}}}),entities:(o,e,t)=>({name:o,label:e,selector:{entity:{multiple:!0,...t?{domain:t}:{}}}}),select:(o,e,t)=>({name:o,label:e,selector:{select:{mode:"dropdown",options:t}}})};var Nt=class extends L{render(){let e=[this.tentSelect("tent","\u{1F3D5}\uFE0F Zelt"),h.text("name","\u270F\uFE0F Anzeigename (optional)"),h.bool("show_chart","\u{1F4C8} VPD-Chart anzeigen"),h.num("hours","\u23F1\uFE0F Chart-Zeitraum (h)",1,168)];return c`${this.form(e)}${this.styleSection()}
      <div class="hint">Zeigt Klima-Werte (Temperatur/Feuchte/VPD), die VPD-Zonenskala, Modus (VPD/RH) und
        die <b>Phase</b> als Dropdown. Zelt- und Klima-Schalter steuern die Automatik.</div>`}};customElements.define("growctrl-tent-editor",Nt);function $t(o){if(o==null||isNaN(o))return"\u2013";let e=Math.max(0,Math.round(o)),t=Math.floor(e/60),n=e%60;return t&&n?`${t} h ${n} min`:t?`${t} h`:`${n} min`}function E(o){if(o==null||o==="unknown"||o==="unavailable"||o==="")return null;let e=Number(o);return isNaN(e)?null:e}var Dt=o=>(o?.locale?.language??o?.language??"de").toString().toLowerCase().startsWith("en")?"en":"de",gn={"Alles OK":"All OK",Warnung:"Warning",Kritisch:"Critical",Info:"Info",Inaktiv:"Inactive",Fehler:"Error",Deaktiviert:"Disabled",OK:"OK","Alle Systeme arbeiten normal":"All systems operating normally","Klima-Phase":"Climate phase","Serie ein-/ausblenden":"Toggle series","\xFCber Ziel":"above target","Pumpe gesperrt":"Pump locked","F\xFCllstand zu niedrig \u2013 Trockenlaufschutz":"Level too low \u2013 dry-run protection","Klima-Sensoren eingefroren":"Climate sensors frozen","Werte evtl. veraltet":"Values may be stale",zuletzt:"last",an:"on",aus:"off",Seedling:"Seedling",Veg:"Veg",Bloom:"Bloom",Flush:"Flush",Trocknung:"Drying",Aus:"Off","bis Tag":"until day",Anzucht:"Propagation",Wachstum:"Vegetative",Bl\u00FCte:"Flowering",Ernte:"Harvest",Sp\u00FClen:"Flush",automatisch:"automatic",Auto:"Auto",Zelt:"Tent",Klima:"Climate",Logo:"Logo",Luftfeuchte:"Humidity",Temperatur:"Temperature","zu feucht":"too humid","zu trocken":"too dry",Phase:"Phase",Soll:"Target",Informationssystem:"Information system",Modus:"Mode",Automatik:"Automatic",Einstellungen:"Settings",Keimstart:"Germination",Leuchtphase:"Light phase","Licht AN":"Light ON","Licht an":"Light on","Licht aus":"Light off","Licht ausgeschaltet":"Light switched off",Leistung:"Power","Licht ohne Leistung":"Light without power","Licht-Failsafe":"Light failsafe","Man. \xDCbernahme":"Manual hold","Manueller Eingriff":"Manual override","Marker = Prognose":"Marker = forecast","N\xE4chster Zyklus":"Next cycle","Pumpe aus":"Pump off","Pumpe ausgeschaltet":"Pump switched off","Pumpe gesperrt (F\xFCllstand)":"Pump blocked (level)","Pumpe l\xE4uft":"Pump running",Tank:"Tank",Feuchtigkeit:"Humidity","DLI heute":"DLI today","AUS Bloom":"OFF Bloom","AUS Seed/Veg":"OFF Seed/Veg","Unter Mindeststand":"Below minimum","Wartung (System greift nicht ein)":"Maintenance (system inactive)",verbleibend:"remaining",Zyklus:"Cycle",ideal:"ideal",Min:"Min",von:"of","Zeiten unvollst\xE4ndig":"Times incomplete","Wartung aktiv":"Maintenance active",AN:"ON",AUS:"OFF",Richtwert:"Reference",Prognose:"Forecast",Aktoren:"Actuators",weniger:"less",mehr:"more",Checkup:"Checkup",Stationen:"Stations",Station:"Station",Pflanzen:"Plants","kein Wert":"no value","Automatik AN":"Automatic ON","Automatik AUS (manuell)":"Automatic OFF (manual)","Kein Eingriff":"No override","Klima-Automatik AN":"Climate automatic ON","Klima-Automatik AUS":"Climate automatic OFF","Licht AN ohne Leistung":"Light ON without power","Licht-Failsafe ausgel\xF6st":"Light failsafe tripped","Lichtzeiten unvollst\xE4ndig":"Light times incomplete","Manueller Eingriff aktiv":"Manual override active","Problem erkannt":"Problem detected","Wartungsmodus aktiv":"Maintenance mode active","Zelt aktiv":"Tent active","Zelt deaktiviert":"Tent disabled","Zyklus l\xE4uft":"Cycle running",Pumpe:"Pump",Licht:"Light",Eingriff:"Override",Status:"Status",Aktiv:"Active",Ereignisprotokoll:"Event log","Nur Infos":"Info only","Noch keine Ereignisse":"No events yet",Pflanze:"Plant",Sorte:"Strain",Verlauf:"History","Germination-Heizung":"Germination heating",Ziel:"Target","Heizung heizt":"Heating on","Heizung bereit":"Heating ready","Heizung aus":"Heating off","Heizung ausgeschaltet":"Heating switched off",heizt:"heating",bereit:"ready","Heizung Sensorfehler":"Heating sensor fault","Heizung \xDCbertemperatur":"Heating overtemp","Regelf\xFChler fehlt \u2013 Heizung gesperrt":"Sensor missing \u2013 heating blocked","Not-Aus \u2013 zu hei\xDF":"Emergency off \u2013 too hot",HEIZT:"HEATING",BEREIT:"READY",SENSORFEHLER:"SENSOR FAULT","\xDCBERTEMP.":"OVERTEMP.",Heizung:"Heating",Tage:"days",Tag:"Day",Reichweite:"Range",Wo:"Wk",Woche:"Week","Als erledigt markieren":"Mark as done","Automatik/Zelt aus \u2013 manuell freigeben":"Automatic/tent off \u2013 release manually","Best\xE4tigung vor dem Schalten":"Confirm before switching",Bodenfeuchte:"Soil moisture","Bodentemp.":"Soil temp.","Gesicherter Aktor \u2013 fragt vor dem Schalten nach":"Protected actuator \u2013 asks before switching","Gesperrt \u2013 erst Automatik/Zelt aktivieren":"Locked \u2013 enable automatic/tent first","Heizung gesperrt":"Heater locked","Kamera nicht verf\xFCgbar":"Camera unavailable","Keimdatum l\xF6schen":"Clear germination date","Keimstart zur\xFCcksetzen":"Reset germination",Lichtzeiten:"Light schedule","Live ansehen":"View live",Livestream:"Live stream",Problem:"Problem","Schwellen & Sonstiges":"Thresholds & more",Sensoren:"Sensors","Station aus":"Station off","Station aus \u2013 keine Steuerung, keine Klima-Gewichtung im Zelt.":"Station off \u2013 no control, no climate weighting in the tent.",Steuerung:"Control",Trend:"Trend","Wassertemp.":"Water temp.","Zelt aus \u2013 gestoppt":"Tent off \u2013 stopped",gestoppt:"stopped","im Idealbereich":"in ideal range","knapp daneben":"slightly off","leere Zelle = kein Sensor":"empty cell = no sensor"},Be=(o,e)=>Dt(o)==="en"?gn[e]??e:e;var Ie=new Map;async function O(o,e,t=24,n=48){let i=`${e}:${t}`,s=Ie.get(i);if(s&&Date.now()-s.t<5*6e4)return s.data;try{let r=new Date(Date.now()-t*36e5).toISOString(),l=((await o.callApi("GET",`history/period/${r}?filter_entity_id=${e}&minimal_response&no_attributes`))?.[0]??[]).map(g=>parseFloat(g.state??g.s)).filter(g=>!isNaN(g)),p=Math.max(1,Math.floor(l.length/n)),d=l.filter((g,f)=>f%p===0);return Ie.set(i,{t:Date.now(),data:d}),d}catch{return s?.data??[]}}var W=30,fn=4,bn=30,et=6,rt=16;function He(o,e,t,n){let i=e??Math.min(...o,n?.min??1/0),s=t??Math.max(...o,n?.max??-1/0);(!isFinite(i)||!isFinite(s))&&(i=0,s=1),s-i<.001&&(s+=1,i-=1);let r=(s-i)*.08;return[i-r,s+r]}var Ne=0;function De(o){if(o.length<3)return`M${o.map(t=>t.join(",")).join(" L")}`;let e=`M${o[0][0]},${o[0][1]}`;for(let t=0;t<o.length-1;t++){let n=o[Math.max(0,t-1)],i=o[t],s=o[t+1],r=o[Math.min(o.length-1,t+2)],a=i[0]+(s[0]-n[0])/6,l=i[1]+(s[1]-n[1])/6,p=s[0]-(r[0]-i[0])/6,d=s[1]-(r[1]-i[1])/6;e+=` C${a.toFixed(1)},${l.toFixed(1)} ${p.toFixed(1)},${d.toFixed(1)} ${s[0]},${s[1]}`}return e}function H(o,e={}){let t=`gcg${Ne++}`,n=e.w??300,i=e.h??110,s=o.flatMap($=>$.data);if(!s.length)return c`<div style="height:${i}px;display:flex;align-items:center;justify-content:center;
    font-size:11px;color:rgba(255,255,255,.5)">Keine Verlaufsdaten</div>`;let r=o.some($=>$.axis==="right"),a=r?bn:fn,l=o.filter($=>$.axis!=="right").flatMap($=>$.data),p=o.filter($=>$.axis==="right").flatMap($=>$.data),[d,g]=He(l.length?l:s,e.min,e.max,e.band),[f,x]=He(p.length?p:s,e.rightMin,e.rightMax),y=($,S)=>W+$/Math.max(1,S-1)*(n-W-a),w=$=>et+(1-($-d)/(g-d))*(i-et-rt),v=$=>et+(1-($-f)/(x-f))*(i-et-rt),_=e.grid??3,C=$=>Math.abs($)>=100?$.toFixed(0):Math.abs($)>=10?$.toFixed(1):$.toFixed(2),k=e.hours??24,F=4;return c`<svg data-gce="4d724461726b766f6964" viewBox="0 0 ${n} ${i}" preserveAspectRatio="none" style="width:100%;height:${i}px;display:block">
    ${e.band&&(e.band.min!==void 0||e.band.max!==void 0)?tt`
      <rect x="${W}" y="${w(e.band.max??g)}" width="${n-W-a}"
        height="${Math.max(0,w(e.band.min??d)-w(e.band.max??g))}"
        fill="${e.band.color??"rgba(77,255,195,.08)"}" />`:u}
    ${Array.from({length:_+1},($,S)=>{let b=S/_,z=et+b*(i-et-rt),M=g-b*(g-d),B=x-b*(x-f);return tt`
        <line x1="${W}" y1="${z}" x2="${n-a}" y2="${z}"
          stroke="rgba(255,255,255,.10)" stroke-width="1"/>
        <text x="${W-4}" y="${z+3}" text-anchor="end" class="c-axl"
          font-size="9.5" fill="rgba(255,255,255,.68)">${C(M)}</text>
        ${r?tt`<text x="${n-a+5}" y="${z+3}" text-anchor="start" class="c-axl"
          font-size="9.5" fill="rgba(255,255,255,.55)">${C(B)}</text>`:u}`})}
    ${Array.from({length:F+1},($,S)=>{let b=S/F,z=W+b*(n-W-a),M=S===F?"jetzt":`-${Math.round(k*(1-b))}h`;return tt`
        <line x1="${z}" y1="${et}" x2="${z}" y2="${i-rt}" stroke="rgba(255,255,255,.05)" stroke-width="1"/>
        <text x="${z}" y="${i-4}" text-anchor="${S===0?"start":S===F?"end":"middle"}"
          class="c-axl" font-size="9" fill="rgba(255,255,255,.5)">${M}</text>`})}
    ${o.map(($,S)=>{if($.data.length<2)return u;let b=$.axis==="right"?v:w,z=$.data.map((j,q)=>[Number(y(q,$.data.length).toFixed(1)),Number(b(j).toFixed(1))]),M=De(z),B=z[z.length-1][0],U=z[z.length-1][1];return tt`
        <defs>
          <linearGradient id="${t}-${S}" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="${$.color}" stop-opacity=".18"/>
            <stop offset="100%" stop-color="${$.color}" stop-opacity="0"/>
          </linearGradient>
        </defs>
        ${$.fill!==!1?tt`<path
          d="${M} L${B},${i-rt} L${W},${i-rt} Z"
          fill="url(#${t}-${S})"/>`:u}
        <path d="${M}" fill="none" stroke="${$.color}" stroke-width="2.4"
          stroke-linejoin="round" stroke-linecap="round"/>
        <circle cx="${B}" cy="${U}" r="6" fill="${$.color}" opacity=".18"/>
        <circle cx="${B}" cy="${U}" r="3" fill="${$.color}"/>
        <circle cx="${B}" cy="${U}" r="1.3" fill="rgba(10,14,18,.9)"/>`})}
  </svg>`}function Vt(o,e,t=280,n=38){if(o.length<2)return c`<div style="height:${n}px"></div>`;let i=`gcs${Ne++}`,s=Math.min(...o),r=Math.max(...o);r-s<.001&&(r+=1,s-=1);let a=x=>x/(o.length-1)*t,l=x=>3+(1-(x-s)/(r-s))*(n-8),p=o.map((x,y)=>[Number(a(y).toFixed(1)),Number(l(x).toFixed(1))]),d=De(p),g=p[p.length-1][0],f=p[p.length-1][1];return c`<svg data-gce="4d724461726b766f6964" viewBox="0 0 ${t} ${n}" style="width:100%;height:${n}px;display:block">
    <defs><linearGradient id="${i}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${e}" stop-opacity=".22"/>
      <stop offset="100%" stop-color="${e}" stop-opacity="0"/>
    </linearGradient></defs>
    <path d="${d} L${g},${n} L0,${n} Z" fill="url(#${i})"/>
    <path d="${d}" fill="none" stroke="${e}" stroke-width="2"
      stroke-linejoin="round" stroke-linecap="round"/>
    <circle cx="${g}" cy="${f}" r="2.6" fill="${e}"/>
  </svg>`}var Zt=o=>o.toLowerCase().replace(/ä/g,"a").replace(/ö/g,"o").replace(/ü/g,"u").replace(/ß/g,"ss").replace(/[^a-z0-9]+/g,"_").replace(/^_+|_+$/g,""),N=(o,e,t,n,i)=>i?.[n]??`${o}.growctrl_${Zt(e)}_${Zt(t)}_${n}`,K=(o,e,t,n)=>n?.[t]??`${o}.growctrl_zelt_${Zt(e)}_${t}`,wt={auto:["switch","automatik","auto"],wartung:["switch","wartung","maintenance"],stage:["select","wachstumsphase","stage"],plant:["select","pflanze","plant_type"],lightOn:["time","licht_an","light_on"],lightOffSv:["time","licht_aus_seedling_veg","light_off_sv"],lightOffBloom:["time","licht_aus_bloom_flush","light_off_bloom"],lightRest:["sensor","licht_restzeit","light_rest"],pumpRest:["sensor","pumpe_restzeit","pump_rest"],age:["sensor","alter_seit_keimung","plant_age"],rec:["sensor","phasen_empfehlung","stage_recommendation"],event:["sensor","letztes_ereignis","last_event"],dli:["sensor","dli_heute","dli_today"],dliFc:["sensor","dli_prognose","dli_forecast"],germination:["date","keimstart","germination"],germinationReset:["button","keimstart_zurucksetzen","germination_reset"],overrideMin:["number","manuelle_ubernahme","override_minutes"],pOverride:["binary_sensor","manueller_eingriff","problem_override"],pFailsafe:["binary_sensor","licht_failsafe","problem_light_failsafe"],pTime:["binary_sensor","lichtzeiten_unvollstandig","problem_time_invalid"],pPump:["binary_sensor","pumpe_gesperrt_fullstand","problem_pump_blocked"],pPower:["binary_sensor","licht_ohne_leistung","problem_power"],heatEnabled:["switch","germination_heizung","heat_enabled"],heatTarget:["number","heizung_zieltemperatur","heat_target"],heatHyst:["number","heizung_hysterese","heat_hyst"],heatActive:["binary_sensor","heizung_aktiv","heat_active"],heatOvertemp:["binary_sensor","heizung_ubertemperatur","heat_overtemp"],heatSensorFault:["binary_sensor","heizung_sensorfehler","heat_sensor_fault"]},at={enabled:["switch","zelt_aktiv","tent_enabled"],climate:["switch","klima_automatik","climate_enabled"],mode:["select","klima_modus","climate_mode"],phase:["select","klima_phase","climate_phase"],vpd:["sensor","vpd","vpd"],status:["sensor","status","status"],stale:["binary_sensor","klima_sensoren_eingefroren","problem_stale"],event:["sensor","letztes_ereignis","last_event"],zielVpd:["sensor","ziel_vpd","ziel_vpd"],zielRh:["sensor","ziel_rh","ziel_rh"],zielTemp:["sensor","ziel_temp","ziel_temp"],todoList:["todo","aufgaben","todo"]};var A=class extends I{constructor(){super(...arguments);this._cw=0;this._config={};this._confirm=null}static{this.properties={hass:{attribute:!1},_config:{state:!0},_confirm:{state:!0},_cw:{state:!0}}}connectedCallback(){super.connectedCallback(),this._ro=new ResizeObserver(t=>{let n=Math.round(t[0]?.contentRect?.width??0);n&&Math.abs(n-this._cw)>8&&(this._cw=n)}),this._ro.observe(this)}disconnectedCallback(){this._ro?.disconnect(),super.disconnectedCallback()}chartW(t=34){return Math.max(280,(this._cw||320)-t)}setConfig(t){this.validateConfig(t),this._config=t}validateConfig(t){}getCardSize(){return 4}st(t){return t?this.hass?.states[t]?.state:void 0}isOn(t){return this.st(t)==="on"}t(t){return Be(this.hass,t)}get _lang(){return Dt(this.hass)}friendly(t){return t&&this.hass?.states[t]?.attributes?.friendly_name||t||""}unit(t){return t&&this.hass?.states[t]?.attributes?.unit_of_measurement||""}moreInfo(t){this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:t},bubbles:!0,composed:!0}))}navigate(t){history.pushState(null,"",t),window.dispatchEvent(new CustomEvent("location-changed"))}toggle(t){let n=t.split(".")[0],i=["switch","input_boolean","light","fan"].includes(n)?n:"homeassistant";this.hass.callService(i,"toggle",{entity_id:t})}confirmToggle(t,n){this._confirm={text:`${n} wirklich schalten?`,action:()=>this.toggle(t)}}renderConfirm(){return this._confirm?c`<div style="position:absolute;inset:0;background:rgba(0,0,0,.6);border-radius:16px;
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
    </div>`:u}};var xn=["VPD","RH"],vn=["Auto","Seedling","Veg","Bloom","Trocknung"],Ve={Auto:"",Seedling:"pd-seed",Veg:"pd-veg",Bloom:"pd-bloom",Trocknung:"pd-dry"},Ze={Auto:"Automatik",Seedling:"Anzucht",Veg:"Wachstum",Bloom:"Bl\xFCte",Trocknung:"Trocknung"},We=[{w:20,col:"#6E97DE",lbl:"zu feucht"},{w:20,col:"#58E0A5",lbl:"Seedling"},{w:20,col:"#2FB36C",lbl:"Veg"},{w:20,col:"#E5B567",lbl:"Bloom"},{w:20,col:"#D4726F",lbl:"zu trocken"}],Wt=2,Kt=class extends A{constructor(){super(...arguments);this._hist=[];this._phase=!1}static{this.styles=P}static{this.properties={...A.properties,_hist:{state:!0},_phase:{state:!0}}}validateConfig(t){if(!t.tent)throw new Error("growctrl-tent-card: 'tent' ist Pflicht (Zelt-Name aus der Integration).")}static getConfigElement(){return document.createElement("growctrl-tent-editor")}static getStubConfig(){return{tent:"gross"}}e(t){let[n,i,s]=at[t],r=this._config;return r.overrides?.[i]??R(this.hass,r.tent,"zelt",s)??K(n,r.tent,i,r.overrides)}_select(t,n){this.hass.callService("select","select_option",{entity_id:t,option:n})}connectedCallback(){super.connectedCallback(),this._load(),this._timer=window.setInterval(()=>this._load(),5*6e4)}disconnectedCallback(){super.disconnectedCallback(),this._timer&&clearInterval(this._timer)}async _load(){if(!this.hass){setTimeout(()=>this._load(),1e3);return}this._hist=await O(this.hass,this.e("vpd"),this._config.hours??24)}tglBtn(t,n,i){return c`<button class="gc tgl ${i?"on":""}" style="flex:1; justify-content:center" @click=${()=>this.confirmToggle(t,n)}>
      <span class="sw"></span> ${n}</button>`}chips(t,n,i){return c`<div style="display:flex; gap:6px; flex-wrap:wrap">
      ${n.map(s=>{let r=s===i;return c`<button class="gc" style="padding:7px 13px; border-radius:999px; font:800 11.5px var(--f-ui);
            border:1.5px solid ${r?"color-mix(in srgb, var(--acc) 50%, transparent)":"var(--line)"};
            background:${r?"var(--acc-soft)":"transparent"}; color:${r?"var(--acc)":"var(--tx-2)"}"
          @click=${()=>this._select(t,s)}>${s}</button>`})}
    </div>`}phaseDropdown(t,n){return c`<div class="dd ${this._phase?"open":""}">
      <button class="gc dd-btn" aria-haspopup="listbox" aria-expanded=${this._phase} @click=${()=>{this._phase=!this._phase}}>
        <span class="pdot ${Ve[n]}" style="${n==="Auto"?"background:var(--acc);color:var(--acc)":""}"></span>${this.t(Ze[n]??n)}
        <ha-icon icon="mdi:chevron-down" style="--mdc-icon-size:16px;color:var(--tx-3);transition:transform .2s;${this._phase?"transform:rotate(180deg)":""}"></ha-icon>
      </button>
      ${this._phase?c`<div class="dd-menu" role="listbox">
        ${vn.map(i=>c`<button class="gc dd-it" role="option" aria-selected=${i===n}
          @click=${()=>{this._select(t,i),this._phase=!1}}>
          <span class="pdot ${Ve[i]}" style="${i==="Auto"?"background:var(--acc)":""}"></span>${this.t(Ze[i]??i)}</button>`)}
      </div>`:u}
    </div>`}render(){let t=this._config;if(!this.hass)return u;let n=this.hass.states[this.e("vpd")],i=!n&&!this.hass.states[this.e("enabled")],s=E(n?.state)??(i?1.06:null),r=n?.attributes?.temp,a=n?.attributes?.rh,l=n?.attributes?.phase_effektiv??"Veg",p=n?.attributes?.sollwerte,d=this.isOn(this.e("enabled"))||i,g=this.isOn(this.e("climate")),f=this.hass.states[this.e("status")],x=f?.attributes?.probleme??[],y=f?.state?.toLowerCase?.()==="problem"?"warning":d?"ok":"none",w=this.hass.states[this.e("event")],v=s!==null&&p&&s>=p.vpd_min&&s<=p.vpd_max,_=s!==null?Math.min(100,Math.max(0,s/Wt*100)):null,C=n?.attributes?.temp_entity||this.e("vpd"),k=n?.attributes?.rh_entity||this.e("vpd"),F=this.e("zielVpd"),$=this.e("zielRh"),S=this.e("zielTemp"),b=this.hass.states[F],z=this.hass.states[$],M=this.hass.states[S],B=!!b&&!!z,U=E(b?.state),j=E(z?.state),q=E(M?.state);return c`<div class="card ${t.style?.glass?"glass":""}" data-level=${y==="none"?"ok":y} style="${T(t.style)};position:relative">
      <div class="hd">
        <div class="grow" style="min-width:0">
          <div class="ttl">${t.name??`${this.t("Klima")} ${this.t("Zelt")} ${t.tent}`}</div>
          <div class="sub">${this.t("Phase")} ${this.t(l)}${p?` \xB7 ${this.t("Soll")} ${p.vpd_min}\u2013${p.vpd_max} kPa / ${p.rh_min}\u2013${p.rh_max} %`:""}</div>
        </div>
        <span class="pill ${d?Z(y):"none"}">${d?y==="ok"?this.t("Alles OK"):y==="warning"?this.t("Warnung"):this.t("Info"):this.t("Deaktiviert")}</span>
      </div>

      <div style="display:flex; gap:8px; margin-bottom:16px">
        ${this.tglBtn(this.e("enabled"),this.t("Zelt"),d)}
        ${this.tglBtn(this.e("climate"),this.t("Klima"),g)}
      </div>

      <div class="kpis">
        <button class="gc kpi c-temp" @click=${()=>this.moreInfo(C)}><span class="mlbl">${this.t("Temperatur")}</span><span class="v">${r!=null?Number(r).toFixed(1):"\u2013"}<span class="u">°C</span></span></button>
        <button class="gc kpi c-hum" @click=${()=>this.moreInfo(k)}><span class="mlbl">${this.t("Luftfeuchte")}</span><span class="v">${a!=null?Math.round(Number(a)):"\u2013"}<span class="u">%</span></span></button>
        <button class="gc kpi c-vpd" @click=${()=>this.moreInfo(this.e("vpd"))}><span class="mlbl">VPD</span><span class="v" style="${s!==null&&!v?`color:${m.warn}`:""}">${s!==null?s.toFixed(2):"\u2013"}<span class="u">kPa</span></span></button>
      </div>

      ${B?c`
        <div style="margin-top:12px">
          <span class="mlbl" style="display:block; margin-bottom:8px">${this.t("Ziel")} \u00b7 ${this.t("Automatik")}</span>
          <div class="kpis ${M?"":"cols-2"}">
            <button class="gc kpi c-vpd" @click=${()=>this.moreInfo(F)}><span class="mlbl">${this.t("Ziel")} VPD</span><span class="v">${U!=null?U.toFixed(2):"\u2013"}<span class="u">kPa</span></span></button>
            <button class="gc kpi c-hum" @click=${()=>this.moreInfo($)}><span class="mlbl">${this.t("Ziel")} RH</span><span class="v">${j!=null?Math.round(j):"\u2013"}<span class="u">%</span></span></button>
            ${M?c`<button class="gc kpi c-temp" @click=${()=>this.moreInfo(S)}><span class="mlbl">${this.t("Ziel")} Temp</span><span class="v">${q!=null?q.toFixed(1):"\u2013"}<span class="u">\u00b0C</span></span></button>`:u}
          </div>
        </div>`:u}

      <div style="margin-top:16px">
        <div class="zones">
          ${We.map(D=>c`<i style="width:${D.w}%;background:${D.col}"></i>`)}
          ${p?c`<span class="zband" style="left:${p.vpd_min/Wt*100}%;width:${(p.vpd_max-p.vpd_min)/Wt*100}%"></span>`:u}
          ${_!==null?c`<span class="zmark" style="left:${_}%"></span>`:u}
        </div>
        <div class="zlbl">${We.map(D=>c`<span style="width:${D.w}%">${this.t(D.lbl)}</span>`)}</div>
      </div>

      <div style="display:flex; gap:12px; flex-wrap:wrap; margin-top:14px; align-items:center">
        <span class="mlbl">${this.t("Modus")}</span>${this.chips(this.e("mode"),xn,this.st(this.e("mode"))??"VPD")}
      </div>
      <div style="margin-top:13px">
        <span class="mlbl" style="display:block; margin-bottom:8px">${this.t("Phase")}</span>
        ${this.phaseDropdown(this.e("phase"),this.st(this.e("phase"))??"Auto")}
      </div>

      ${t.show_chart!==!1&&this._hist.length>1?c`
        <div class="seclbl">VPD · ${t.hours??24}h</div>
        ${H([{data:this._hist,color:v===!1?m.warn:m.ok,fill:!0}],{w:this.chartW(),h:96,band:p?{min:p.vpd_min,max:p.vpd_max}:void 0,grid:3})}`:u}

      ${x.length?c`<div style="display:flex; flex-wrap:wrap; gap:7px; margin-top:12px">
        ${x.map(D=>c`<span class="pbadge warn"><ha-icon icon="mdi:alert" style="--mdc-icon-size:12px"></ha-icon>${D}</span>`)}</div>`:u}

      ${w?c`<button class="gc event" style="margin-top:14px" @click=${()=>this.moreInfo(this.e("event"))}>
        <span class="edot" style="background:${w.attributes?.schweregrad==="critical"?m.crit:w.attributes?.schweregrad==="warning"?m.warn:m.info}"></span>
        <span class="etx">${w.state}</span>
        <span class="etm">${w.last_changed?new Date(w.last_changed).toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit"}):""}</span>
      </button>`:u}
      ${this.renderConfirm()}
    </div>`}};customElements.define("growctrl-tent-card",Kt);var Ut=class extends L{setConfig(e){super.setConfig({show_settings:!0,show_log:!0,...e})}render(){let e=[this.tentSelect("tent","\u{1F3D5}\uFE0F Zelt"),this.stationSelect(this._config?.tent,"station","\u{1F331} Station (= Pflanze)"),h.text("name","\u270F\uFE0F Anzeigename (optional)"),h.bool("show_settings","\u2699\uFE0F Einstellungen-Zahnrad anzeigen"),h.bool("show_log","\u{1F4DC} Protokoll-Auszug am Kartenfu\xDF (Standard an)"),h.bool("start_expanded","\u{1F4C2} Bereiche beim Laden ge\xF6ffnet (Standard: zu)"),h.entity("tank_entity","\u{1F4A7} Stations-Tank F\xFCllstand % (optional)","sensor"),h.num("tank_min","\u26A0\uFE0F Tank-Mindeststand %",0,100),h.num("tank_volume","\u{1FAA3} Tank-Volumen in Litern (optional)",1,1e4),h.entity("camera_entity","\u{1F4F9} Livestream-Kamera (optional)","camera"),h.text("image_url","\u{1F5BC}\uFE0F oder Bild-URL (optional, statt Kamera)"),h.num("media_height","\u2195\uFE0F H\xF6he des Feeds in px (Standard 180)",60,600)],t=[h.entity("entity","\u{1F50C} Schalter",["switch","input_boolean","light","fan"]),h.text("name","\u270F\uFE0F Anzeigename (optional)"),h.select("kind","\u{1F3A8} Art (Farbe/Icon)",[{value:"light",label:"Licht"},{value:"pump",label:"Pumpe"},{value:"o2",label:"O\u2082"},{value:"fan",label:"L\xFCfter"},{value:"heat",label:"Heizmatte"},{value:"water",label:"Befeuchter"},{value:"dehum",label:"Entfeuchter"}]),h.bool("confirm","\u2705 Vor dem Schalten best\xE4tigen")],n=[h.entity("entity","\u{1F4C8} Sensor / input_number"),h.text("name","\u270F\uFE0F Anzeigename (optional)"),h.text("icon","\u{1F3F7}\uFE0F Icon (z.B. mdi:thermometer, optional)"),h.select("anzeige","\u{1F4CA} Anzeige",[{value:"wert",label:"Wert"},{value:"graph",label:"Mini-Verlauf"}])];return c`${this.form(e)}
      ${this.list({key:"actuators",rowSchema:t,title:"\u{1F50C} Aktoren (Kacheln, 4 nebeneinander)",addLabel:"Aktor hinzuf\xFCgen",newItem:()=>({entity:""})})}
      ${this.list({key:"sensors",rowSchema:n,title:"\u2795 Weitere Sensoren (Wert oder Verlauf)",addLabel:"Sensor hinzuf\xFCgen",newItem:()=>({entity:"",anzeige:"wert"})})}
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
      </div>`}};customElements.define("growctrl-station-editor",Ut);var yn=["Aus","Seedling","Veg","Bloom","Flush","Trocknung"],Ke=72,$n={Aus:"gestoppt",Seedling:"Anzucht",Veg:"Wachstum",Bloom:"Bl\xFCte",Flush:"Sp\xFClen",Trocknung:"Ernte"},Ue={Aus:"Aus",Seedling:"Anzucht",Veg:"Wachstum",Bloom:"Bl\xFCte",Flush:"Sp\xFClen",Trocknung:"Trocknung"},wn={Aus:"pd-off",Seedling:"pd-seed",Veg:"pd-veg",Bloom:"pd-bloom",Flush:"pd-flush",Trocknung:"pd-dry"},_n={light:"mdi:lightbulb",heat:"mdi:radiator",water:"mdi:air-humidifier",pump:"mdi:water-pump",fan:"mdi:fan",o2:"mdi:gas-cylinder",dehum:"mdi:air-humidifier-off"},Gt=class extends A{constructor(){super(...arguments);this._open=!1;this._phase=!1;this._plant=!1;this._exp={};this._spark={};this._tankHist=[]}static{this.styles=P}static{this.properties={...A.properties,_open:{state:!0},_spark:{state:!0},_phase:{state:!0},_plant:{state:!0},_exp:{state:!0},_tankHist:{state:!0}}}expOpen(t){return this._exp[t]??!!this._config?.start_expanded}updated(t){if(super.updated?.(t),!t.has("hass")&&!t.has("_config"))return;this.allSensors().forEach(async i=>{let s=await O(this.hass,i.entity,i.hours??24);s.length&&this._spark[i.entity]?.length!==s.length&&(this._spark={...this._spark,[i.entity]:s})});let n=this._config.tank_entity;n&&(async()=>{let i=await O(this.hass,n,Ke);i.length&&i.length!==this._tankHist.length&&(this._tankHist=i)})()}tankDaysLeft(t,n){let i=this._tankHist;if(!i||i.length<4||t<=n)return null;let s=0;for(let a=1;a<i.length;a++){let l=i[a-1]-i[a];l>0&&(s+=l)}let r=s/(Ke/24);return r<.4?null:(t-n)/r}trendArrow(t){if(!t||t.length<4)return null;let n=Math.max(2,Math.floor(t.length/4)),i=d=>d.reduce((g,f)=>g+f,0)/d.length,s=i(t.slice(-n))-i(t.slice(0,n)),r=Math.max(...t)-Math.min(...t)||1,a=s/r,l=Math.max(1,Math.min(1.45,1+((this._cw||360)-390)/500)),p=Math.round(16*l);return a>.06?{icon:"mdi:menu-up",color:m.temp,size:p}:a<-.06?{icon:"mdi:menu-down",color:m.water,size:p}:{icon:"mdi:menu-right",color:"var(--tx-3)",size:p}}validateConfig(t){if(!t.tent||!t.station)throw new Error("growctrl-station-card: 'tent' und 'station' sind Pflicht (wie in der Integration angelegt).")}static getConfigElement(){return document.createElement("growctrl-station-editor")}static getStubConfig(){return{tent:"gross",station:"main1"}}get isPreview(){return!this.hass?.states?.[this.e("stage")]}e(t){let[n,i,s]=wt[t];return this.eRole(n,i,s)}eRole(t,n,i){let s=this._config;return s.overrides?.[n]??R(this.hass,s.tent,s.station,i)??N(t,s.tent,s.station,n,s.overrides)}_select(t,n){this.hass.callService("select","select_option",{entity_id:t,option:n})}render(){let t=this._config;if(!this.hass)return u;let n=this.isPreview,i=this.st(this.e("stage"))??"Veg",s=It[i]??It.Veg,r=this.isOn(this.e("auto"))||n,a=this.isOn(this.e("wartung")),l=this.st(this.e("plant")),p=l&&l!=="Generisch"?l:null,d=(this.hass.states[this.e("event")]?.attributes?.gc_sensors??{}).power,g=d?E(this.st(d)):null,f=R(this.hass,t.tent,"zelt","tent_enabled")??K("switch",t.tent,"tent_enabled",t.overrides),x=!!this.hass.states[f]&&!this.isOn(f),y=i==="Aus",w=x||y,v=!r||a||x||y,_=[{e:this.e("pOverride"),label:"Manueller Eingriff",crit:!1},{e:this.e("pFailsafe"),label:"Licht-Failsafe",crit:!0},{e:this.e("pTime"),label:"Zeiten unvollst\xE4ndig",crit:!1},{e:this.e("pPump"),label:"Pumpe gesperrt (F\xFCllstand)",crit:!1},{e:this.e("pPower"),label:"Licht ohne Leistung",crit:!0}].filter(b=>this.isOn(b.e)),C=this.hass.states[this.e("event")],k=w?"warning":_.length?_.some(b=>b.crit)?"critical":"warning":C?.attributes?.schweregrad==="critical"?"warning":"ok",F=a?this.t("Wartung aktiv"):x?this.t("Zelt aus \u2013 gestoppt"):y?this.t("Station aus"):k==="critical"?this.t("Kritisch"):k==="warning"?this.t("Warnung"):this.t("Alles OK"),$=Math.max(1,Math.min(1.45,1+((this._cw||360)-390)/500)),S=[];return p&&S.push(c`<span style="font-weight:700">${p}</span>`),g!==null&&S.push(c`${this.t("Leistung")} ${Math.round(g)}&nbsp;W`),S.push(F),c`<div class="card ${t.style?.glass?"glass":""}" data-level=${k} style="${T(t.style)};--gc-sc:${$.toFixed(3)};position:relative">

      <div class="hd">
        <div class="grow" style="min-width:0">
          <div class="ttl">${t.name??`${t.tent} \xB7 ${t.station}`}</div>
          <div class="sub" style="display:flex;align-items:center;gap:7px">
            <span style="width:7px;height:7px;border-radius:50%;flex-shrink:0;
              background:${k==="critical"?m.crit:k==="warning"?m.warn:m.ok};
              box-shadow:0 0 8px currentColor;color:${k==="critical"?m.crit:k==="warning"?m.warn:m.ok}"></span>
            ${S.map((b,z)=>c`${z?c`&nbsp;\u00b7&nbsp;`:u}${b}`)}
          </div>
        </div>
        <button class="gc icbtn ${a?"on":""}" title=${this.t("Wartung (System greift nicht ein)")}
          @click=${()=>this.toggle(this.e("wartung"))}>
          <ha-icon icon="mdi:wrench-outline" style="--mdc-icon-size:16px"></ha-icon></button>
        ${t.show_settings!==!1?c`<button class="gc icbtn" title=${this.t("Einstellungen")} @click=${()=>{this._open=!this._open}}>
          <ha-icon icon="mdi:tune-variant" style="--mdc-icon-size:16px"></ha-icon></button>`:u}
        <button class="gc chip-auto ${r?"":"off"}" @click=${()=>this.confirmToggle(this.e("auto"),this.t("Automatik"))}>
          AUTO ${r?this.t("AN"):this.t("AUS")}</button>
      </div>

      ${this.dropdowns(i,s)}
      ${y?c`
        <div style="display:flex;align-items:center;gap:9px;margin:2px 2px 12px;padding:11px 13px;
            border-radius:12px;background:rgba(255,255,255,.03);border:1px solid var(--line)">
          <ha-icon icon="mdi:power-standby" style="--mdc-icon-size:18px;color:var(--tx-3)"></ha-icon>
          <span style="font-size:12.5px;font-weight:700;color:var(--tx-2)">${this.t("Station aus \u2013 keine Steuerung, keine Klima-Gewichtung im Zelt.")}</span>
        </div>`:c`
        ${this.recText()}
        ${this.lightRow()}
        ${this.dliRow(n)}
        ${this.heatRow(v)}
        ${this.pumpRow(n)}
        ${this.tankRow()}
        ${this.actuators()}
        ${this.sensorBlock()}
        ${this.mediaBlock()}
        ${_.length?c`<div style="display:flex;gap:7px;flex-wrap:wrap;margin-top:12px">
          ${_.map(b=>c`<span class="pbadge ${b.crit?"crit":"warn"}">
            <ha-icon icon="mdi:alert" style="--mdc-icon-size:12px"></ha-icon>${this.t(b.label)}</span>`)}</div>`:u}
      `}

      ${this.todoBlock()}
      ${this.logExcerpt()}
      ${this._open?this.groupedSettings():u}
      ${this.renderConfirm()}
    </div>`}setting(t,n){return c`<button class="gc skv" @click=${()=>this.moreInfo(t)}>
      <div class="k">${this.t(n)}</div><div class="vv">${this.st(t)??"\u2013"}</div></button>`}dropdowns(t,n){return c`<div style="margin-bottom:8px">${this.phaseDropdown(t,n)}</div>`}plantDropdown(t){let n=this.hass.states[t],i=n?.state??"Generisch",s=n?.attributes?.options??[];return c`<div class="dd ${this._plant?"open":""}" style="margin-bottom:10px">
      <button class="gc dd-btn" aria-haspopup="listbox" aria-expanded=${this._plant}
        @click=${()=>{this._plant=!this._plant,this._phase=!1}}>
        <span style="overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${i}</span>
        <ha-icon icon="mdi:chevron-down" style="--mdc-icon-size:16px;color:var(--tx-3);margin-left:auto;transition:transform .2s;${this._plant?"transform:rotate(180deg)":""}"></ha-icon>
      </button>
      ${this._plant?c`<div class="dd-menu" role="listbox">
        ${s.map(r=>c`<button class="gc dd-it" role="option" aria-selected=${r===i}
          @click=${()=>{this._select(t,r),this._plant=!1}}>${r}</button>`)}
      </div>`:u}
    </div>`}phaseDropdown(t,n){let i=E(this.st(this.e("age"))),s=this.hass.states[this.e("stage")]?.attributes?.phasen_bis??{},r=l=>{let p=s[l];return typeof p=="number"?`${this.t("bis Tag")} ${p}`:l==="Aus"||l==="Trocknung"?this.t($n[l]??""):""},a=i!==null?`${this.t("Tag")} ${i}`:r(t);return c`<div class="dd ${this._phase?"open":""}">
      <button class="gc dd-btn" aria-haspopup="listbox" aria-expanded=${this._phase}
        @click=${()=>{this._phase=!this._phase,this._plant=!1}}>
        <span class="pdot" style="background:${n.color};color:${n.color}"></span>${this.t(Ue[t]??t)}
        <span class="hint">${a}</span>
        <ha-icon icon="mdi:chevron-down" style="--mdc-icon-size:16px;color:var(--tx-3);transition:transform .2s;${this._phase?"transform:rotate(180deg)":""}"></ha-icon>
      </button>
      ${this._phase?c`<div class="dd-menu" role="listbox">
        ${yn.map(l=>c`<button class="gc dd-it" role="option" aria-selected=${l===t}
          @click=${()=>{this._select(this.e("stage"),l),this._phase=!1}}>
          <span class="pdot ${wn[l]}"></span>${this.t(Ue[l]??l)}<span class="hint">${r(l)}</span></button>`)}
      </div>`:u}
    </div>`}recText(){let n=this.hass.states[this.e("rec")]?.attributes?.hinweis?.trim();return n?c`<div style="display:flex;align-items:flex-start;gap:8px;margin:0 2px 10px;
        padding:9px 12px;border-radius:11px;background:rgba(255,206,122,.10);border:1px solid rgba(255,206,122,.22)">
      <ha-icon icon="mdi:lightbulb-alert-outline" style="--mdc-icon-size:16px;color:${m.warn};flex-shrink:0;margin-top:1px"></ha-icon>
      <span style="font-size:12px;font-weight:700;color:rgba(242,247,243,.86);line-height:1.35">${n}</span>
    </div>`:u}supplyRow(t){return c`<button class="gc supply" style="${t.topMargin?"margin-top:8px":""}" @click=${t.onClick??(()=>{})}>
      <span class="shd">
        <span class="sic" style="color:${t.iconColor};${t.glow?`filter:drop-shadow(0 0 7px ${t.iconColor})`:""}">
          <ha-icon icon="${t.icon}" style="--mdc-icon-size:calc(20px * var(--gc-sc,1))"></ha-icon></span>
        <span class="stt">${t.title}</span>
        <span class="stm" style="color:${t.valueColor}">${t.value}</span>
      </span>
      ${t.fillPct!==null&&t.fillPct!==void 0?c`
        <span class="bar"><i style="width:${Math.min(100,Math.max(0,t.fillPct))}%;
          background:linear-gradient(90deg, ${t.fillColor}, ${t.fillColor}cc);box-shadow:0 0 9px ${t.fillColor}55"></i>
          ${t.minPct!==void 0?c`<span class="min" style="left:${t.minPct}%"></span>`:u}</span>`:u}
      ${t.footL||t.footR?c`<span class="sft"><span>${t.footL??""}</span><span>${t.footR??""}</span></span>`:u}
    </button>`}lightRow(){if(this.isPreview)return this.supplyRow({icon:"mdi:lightbulb-on",iconColor:m.light,glow:!0,title:this.t("Licht an"),value:"5 h 40 min",valueColor:m.light,fillPct:62,fillColor:m.light,footL:this.t("Leuchtphase"),footR:`62 % ${this.t("verbleibend")}`});let t=this.hass.states[this.e("lightRest")];if(!t)return u;let n=t.attributes??{},i=n.zustand?n.zustand==="an":void 0,s=Number(t.state),r=isNaN(s)?"\u2013":$t(s),a=typeof n.anteil=="number"?Math.min(1,Math.max(0,n.anteil)):null,l=i===!1?"#7E9488":m.light;return this.supplyRow({icon:i===!1?"mdi:lightbulb-outline":"mdi:lightbulb-on",iconColor:l,glow:i!==!1,title:i===!1?this.t("Licht aus"):this.t("Licht an"),value:i===!1?"\u2013":r,valueColor:l,fillPct:i===!1?null:a!==null?a*100:null,fillColor:l,footL:i===!1?this.t("Licht ausgeschaltet"):this.t("Leuchtphase"),footR:i===!1?"":a!==null?`${(a*100).toFixed(0)} % ${this.t("verbleibend")}`:"",onClick:()=>this.moreInfo(this.e("lightRest"))})}dliRow(t){let n=this.hass.states[this.e("dli")];if(!n&&!t)return u;let i=E(this.st(this.e("dli")))??(t?18.4:null),s=E(this.st(this.e("dliFc")))??(t?24.7:null),r=n?.attributes?.ziel_aktuelle_phase??(t?25:void 0),a=r&&i!==null?i/r*100:null,l=r&&s!==null?Math.min(100,s/r*100):void 0,p=a!==null&&a>100,d=p?"#FFB35C":m.light;return this.supplyRow({icon:"mdi:white-balance-sunny",iconColor:d,topMargin:!0,title:this.t("DLI heute"),value:i!==null?`${i.toFixed(1)}${r?` / ${r}`:""}`:"\u2013",valueColor:d,fillPct:a,fillColor:d,minPct:l,footL:s!==null?`${this.t("Prognose")} ${s.toFixed(1)} mol/m\xB2`:"",footR:p?`${this.t("\xFCber Ziel")} +${(a-100).toFixed(0)} %`:r?this.t("Marker = Prognose"):"",onClick:()=>this.moreInfo(this.e("dli"))})}heatRow(t){if(this.isPreview)return u;let n=this.hass.states[this.e("heatActive")];if(!n)return u;let i=n.attributes??{},s=i.aktiv!==!1&&this.isOn(this.e("heatEnabled")),r=n.state==="on",a=typeof i.ist_temp=="number"?i.ist_temp:null,l=typeof i.ziel_temp=="number"?i.ziel_temp:null,p=typeof i.hysterese=="number"?i.hysterese:.5,d,g,f,x,y,w=null,v;if(i.sensorfehler)d="mdi:thermometer-alert",g=m.crit,f=this.t("Heizung Sensorfehler"),x=this.t("Regelf\xFChler fehlt \u2013 Heizung gesperrt"),y="";else if(i.uebertemperatur)d="mdi:thermometer-alert",g=m.crit,f=this.t("Heizung \xDCbertemperatur"),x=this.t("Not-Aus \u2013 zu hei\xDF"),y=l!==null?`${this.t("Ziel")} ${l} \xB0C`:"";else if(t)d="mdi:radiator-off",g="#7E9488",f=this.t("Heizung gesperrt"),x=this.t("Automatik/Zelt aus \u2013 manuell freigeben"),y=l!==null?`${this.t("Ziel")} ${l} \xB0C`:"";else if(g=s?m.heat:"#7E9488",d=r?"mdi:radiator":s?"mdi:radiator-disabled":"mdi:radiator-off",f=s?r?this.t("Heizung heizt"):this.t("Heizung bereit"):this.t("Heizung aus"),x=s?l!==null?`${this.t("Ziel")} ${l} \xB0C \xB1${p} K`:this.t("Germination-Heizung"):this.t("Heizung ausgeschaltet"),y=s?r?this.t("heizt"):this.t("bereit"):"",s&&a!==null&&l!==null){let k=l-4,F=l+1;w=(a-k)/(F-k)*100,v=Math.min(100,Math.max(0,(l-k)/(F-k)*100))}let _=a!==null?`${a.toFixed(1)} \xB0C`:"\u2013",C=()=>this.moreInfo(this.e("heatActive"));return c`
      <div class="gc supply" style="margin-top:8px">
        <div class="shd">
          <span class="sic" style="color:${g};${r?`filter:drop-shadow(0 0 7px ${g})`:""}" @click=${C}>
            <ha-icon icon="${d}" style="--mdc-icon-size:20px"></ha-icon></span>
          <span class="stt" style="cursor:pointer" @click=${C}>${f}</span>
          <span class="stm" style="color:${g};cursor:pointer" @click=${C}>${_}</span>
          <button class="hsw ${s?"on":""}" role="switch" aria-checked=${s} ?disabled=${t}
            style="${t?"opacity:.4;cursor:not-allowed":""}"
            title=${t?this.t("Gesperrt \u2013 erst Automatik/Zelt aktivieren"):this.t("Germination-Heizung")}
            @click=${()=>{t||this.toggle(this.e("heatEnabled"))}}></button>
        </div>
        ${w!==null?c`<span class="bar"><i style="width:${Math.min(100,Math.max(0,w))}%;
          background:linear-gradient(90deg, ${m.heat}, ${m.heat}cc);box-shadow:0 0 9px ${m.heat}55"></i>
          ${v!==void 0?c`<span class="min" style="left:${v}%"></span>`:u}</span>`:u}
        ${x||y?c`<span class="sft"><span>${x}</span><span>${y}</span></span>`:u}
      </div>`}pumpRow(t){let n=this.hass.states[this.e("pumpRest")];if(!n&&!t)return u;if(t)return this.supplyRow({icon:"mdi:water-pump",iconColor:m.water,topMargin:!0,title:this.t("Pumpe aus"),value:"in 12 min",valueColor:m.water,fillPct:80,fillColor:m.water,footL:this.t("N\xE4chster Zyklus"),footR:"80 %"});if(this.isOn(this.e("pPump")))return this.supplyRow({icon:"mdi:water-pump-off",iconColor:m.crit,topMargin:!0,title:this.t("Pumpe gesperrt"),value:"\u2013",valueColor:m.crit,fillPct:null,footL:this.t("F\xFCllstand zu niedrig \u2013 Trockenlaufschutz"),footR:"",onClick:()=>this.moreInfo(this.e("pPump"))});let i=Number(n.state),s=n.attributes??{},r=s.aktiv===!1,a=typeof s.anteil=="number"?Math.min(1,Math.max(0,s.anteil)):null,l=s.zustand?s.zustand==="an":void 0,p=typeof s.bewaesserung_vor_min=="number"?s.bewaesserung_vor_min:null;return this.supplyRow({icon:r?"mdi:water-pump-off":"mdi:water-pump",iconColor:r?"#7E9488":m.water,topMargin:!0,title:r?this.t("Pumpe aus"):l?this.t("Pumpe l\xE4uft"):this.t("Pumpe aus"),value:r||isNaN(i)?"\u2013":$t(i),valueColor:r?"#7E9488":m.water,fillPct:r?null:a!==null?a*100:null,fillColor:m.water,footL:r?this.t("Pumpe ausgeschaltet"):l===!1&&p!==null?`${this.t("zuletzt")}: ${$t(p)}`:s.text??this.t("Zyklus"),footR:r?"":a!==null?`${(a*100).toFixed(0)} % ${this.t("verbleibend")}`:"",onClick:()=>this.moreInfo(this.e("pumpRest"))})}tankRow(){let t=this._config;if(!t.tank_entity)return u;let n=Math.min(100,Math.max(0,E(this.st(t.tank_entity))??0)),i=t.tank_min??30,s=n<i,r=s?m.crit:m.water,a=t.tank_volume,l=a?`\u2248 ${(n/100*a).toFixed(0)} l ${this.t("von")} ${a} l`:"",p=s?null:this.tankDaysLeft(n,i),d=p===null?"":p<1?`${this.t("Reichweite")}: <1 ${this.t("Tag")}`:`${this.t("Reichweite")}: ~${Math.round(p)} ${this.t("Tage")}`,g=[l,d].filter(Boolean).join(" \xB7 ")||(s?this.t("Unter Mindeststand"):"");return this.supplyRow({icon:"mdi:car-coolant-level",iconColor:m.water,topMargin:!0,title:this.t("Tank"),value:`${n.toFixed(0)} %`,valueColor:r,fillPct:n,fillColor:r,minPct:i,footL:g,footR:`${this.t("Min")} ${i} %`,onClick:()=>this.moreInfo(t.tank_entity)})}expHeader(t,n){let i=this.expOpen(t);return c`<button class="gc" @click=${()=>{this._exp={...this._exp,[t]:!i}}}
      style="display:flex;align-items:center;width:100%;text-align:left;cursor:pointer;margin-top:14px">
      <span class="seclbl" style="margin:0;flex:1">${this.t(n)}</span>
      <ha-icon icon="${i?"mdi:chevron-up":"mdi:chevron-down"}" style="--mdc-icon-size:calc(20px * var(--gc-sc,1));color:var(--tx-3)"></ha-icon>
    </button>`}actuators(){let t=this._config.actuators??[];return t.length?this.expOpen("actuators")?c`
      ${this.expHeader("actuators","Aktoren")}
      <div class="acts">
        ${t.map(n=>{let i=this.isOn(n.entity),s=n.kind??"",r=n.icon??_n[s]??"mdi:power",a=n.name??this.friendly(n.entity);return c`<button class="gc act ${i?"on":""} ${i&&s?s:""}" style="position:relative"
            title=${n.confirm?this.t("Gesicherter Aktor \u2013 fragt vor dem Schalten nach"):a}
            @click=${()=>n.confirm?this.confirmToggle(n.entity,a):this.toggle(n.entity)}>
            ${n.confirm?c`<ha-icon icon="mdi:lock" title=${this.t("Best\xE4tigung vor dem Schalten")}
              style="position:absolute;top:6px;right:6px;--mdc-icon-size:12px;color:var(--tx-3)"></ha-icon>`:u}
            <ha-icon class="aic" icon="${r}" style="--mdc-icon-size:18px"></ha-icon>
            <span class="anm">${a}</span>
            <span class="ast">${i?this.t("AN"):this.t("AUS")}</span></button>`})}
      </div>`:c`${this.expHeader("actuators","Aktoren")}
        <div style="display:flex;flex-wrap:wrap;gap:11px;padding:2px 2px 0">
          ${t.map(n=>{let i=this.isOn(n.entity);return c`<span style="display:inline-flex;align-items:center;gap:6px;font:800 calc(11.5px * var(--gc-sc,1)) var(--f-ui);color:var(--tx-2)">
              <span style="width:calc(11px * var(--gc-sc,1));height:calc(11px * var(--gc-sc,1));border-radius:50%;flex-shrink:0;background:${i?m.ok:"var(--tx-3)"};${i?`box-shadow:0 0 calc(8px * var(--gc-sc,1)) ${m.ok}`:""}"></span>
              ${n.name??this.friendly(n.entity)}</span>`})}
        </div>`:u}allSensors(){return[...this.autoSensors(),...this.configSensors()]}autoSensors(){let n=this.hass.states[this.e("event")]?.attributes??{},i=n.gc_sensors??{},s=n.gc_ph_bereich??null,r=n.gc_ec_bereich??null,a=[];if(i.ph&&a.push(this.zoneSensor(i.ph,"pH","mdi:ph",s,4,8,.3)),i.ec){let l=r?Math.max(3,Math.ceil((r[1]+.8)*2)/2):3.5;a.push(this.zoneSensor(i.ec,"EC","mdi:flash-outline",r,0,l,.3))}return i.water_temp&&a.push({entity:i.water_temp,name:this.t("Wassertemp."),anzeige:"graph",color:m.temp,icon:"mdi:coolant-temperature",hours:24}),i.soil_temp&&a.push({entity:i.soil_temp,name:this.t("Bodentemp."),anzeige:"graph",color:m.temp,icon:"mdi:thermometer",hours:24}),i.soil_moisture&&a.push({entity:i.soil_moisture,name:this.t("Bodenfeuchte"),anzeige:"wert",color:m.water,icon:"mdi:water-percent"}),i.temp&&a.push({entity:i.temp,name:this.t("Temperatur"),anzeige:"graph",color:m.temp,icon:"mdi:thermometer",hours:24}),i.humidity&&a.push({entity:i.humidity,name:this.t("Feuchtigkeit"),anzeige:"graph",color:m.water,icon:"mdi:water-percent",hours:24}),a}zoneSensor(t,n,i,s,r,a,l){if(!s)return{entity:t,name:n,icon:i,anzeige:"wert"};let p=[s[0],s[1]],d=[Math.max(r,p[0]-l),Math.min(a,p[1]+l)];return{entity:t,name:n,icon:i,anzeige:"zone",min:r,max:a,ideal:p,ok:d}}configSensors(){return(this._config.sensors??[]).map(n=>typeof n=="string"?{entity:n}:n)}sensorBlock(){let t=this.allSensors();return t.length?this.expOpen("sensors")?c`${this.expHeader("sensors","Sensorwerte")}
        ${t.map(n=>this.sensorInd(n))}`:c`${this.expHeader("sensors","Sensorwerte")}
      <div style="display:flex;flex-wrap:wrap;gap:12px;padding:2px 2px 0">
        ${t.map(n=>{let i=E(this.st(n.entity)),s=n.anzeige??"wert",r,a=!0;if(s==="zone"){let l=n.ideal??[0,0],p=n.ok??l;r=n.color??(i!==null&&i>=l[0]&&i<=l[1]?m.ok:i!==null&&i>=p[0]&&i<=p[1]?m.warn:m.crit),a=!1}else r=n.color??"var(--tx-3)";return c`<span style="display:inline-flex;align-items:center;gap:5px;font:800 calc(12px * var(--gc-sc,1)) var(--f-num);color:var(--tx-2)">
            <span style="width:calc(11px * var(--gc-sc,1));height:calc(11px * var(--gc-sc,1));border-radius:50%;flex-shrink:0;background:${r};box-shadow:0 0 calc(8px * var(--gc-sc,1)) ${r}"></span>
            ${n.icon?c`<ha-icon icon="${n.icon}" style="--mdc-icon-size:calc(13px * var(--gc-sc,1));color:var(--tx-3)"></ha-icon>`:u}
            ${a&&i!==null?c`${i}<span style="color:var(--tx-3)">${this.unit(n.entity)}</span>`:u}
          </span>`})}
      </div>`:u}zoneV6(t,n,i,s,r){let a=i-n||1,l=(g,f)=>Math.max(0,(Math.min(f,i)-Math.max(g,n))/a*100),p=[{cls:"z-bad",w:l(n,s[0])},{cls:"z-low",w:l(s[0],r[0])},{cls:"z-ok",w:l(r[0],r[1])},{cls:"z-high",w:l(r[1],s[1])},{cls:"z-bad",w:l(s[1],i)}],d=t!==null?Math.min(100,Math.max(0,(t-n)/a*100)):null;return c`
      <span class="zones">
        ${p.map(g=>c`<i class="${g.cls}" style="width:${g.w}%"></i>`)}
        ${d!==null?c`<span class="zmark" style="left:${d}%"></span>`:u}
      </span>
      <span class="zlbl">
        <span style="width:30%;text-align:left">${n}</span>
        <span style="width:40%;color:#4CB87E;font-weight:800">${r[0]}\u2013${r[1]} ${this.t("ideal")}</span>
        <span style="width:30%;text-align:right">${i}</span>
      </span>`}sensorInd(t){let n=E(this.st(t.entity)),i=t.name??this.friendly(t.entity),s=this.unit(t.entity),r=t.anzeige??"wert",a=t.entity.split(".")[0],l=a==="number"||a==="input_number",p=this.hass.states[t.entity]?.attributes??{},d=t.step??(Number(p.step)||.1),g=p.min,f=p.max,x=(String(d).split(".")[1]??"").length||1,y=S=>{let b=S;g!==void 0&&(b=Math.max(g,b)),f!==void 0&&(b=Math.min(f,b)),this.hass.callService(a,"set_value",{entity_id:t.entity,value:Number(b.toFixed(x))})},w,v=t.ideal??[0,0],_=t.ok??v;if(r==="zone"){let S=n!==null&&n>=v[0]&&n<=v[1],b=n!==null&&n>=_[0]&&n<=_[1];w=t.color??(S?m.ok:b?m.warn:m.crit)}else r==="graph"?w=t.color??m.water:w=t.color??"rgba(242,247,243,.95)";let C=this.trendArrow(this._spark[t.entity]),k=C?c`<ha-icon icon="${C.icon}" title=${this.t("Trend")}
          style="--mdc-icon-size:${C.size}px;color:${C.color};margin-right:3px;vertical-align:-3px"></ha-icon>`:u,F=c`<div class="ihd">
      <span class="ilbl" style="color:${r==="wert"?"var(--tx-2)":w}">
        ${t.icon?c`<ha-icon icon="${t.icon}" style="--mdc-icon-size:14px"></ha-icon>`:u}${i}
        ${l?c`<ha-icon icon="mdi:pencil" style="--mdc-icon-size:11px;opacity:.45;margin-left:3px"></ha-icon>`:u}
      </span>
      ${l?c`<span class="setrow">
            <button class="gc stepbtn" title=${this.t("weniger")} @click=${S=>{S.stopPropagation(),n!==null&&y(n-d)}}><ha-icon icon="mdi:minus" style="--mdc-icon-size:16px"></ha-icon></button>
            <span class="setval" style="color:${w}">${k}${n!==null?n:"\u2013"}<span class="u">${s}</span></span>
            <button class="gc stepbtn" title=${this.t("mehr")} @click=${S=>{S.stopPropagation(),y((n??g??0)+d)}}><ha-icon icon="mdi:plus" style="--mdc-icon-size:16px"></ha-icon></button></span>`:c`<span class="ival" style="color:${w}">
            ${k}${n!==null?n:this.st(t.entity)??"\u2013"}<span class="u">${s}</span></span>`}
    </div>`,$=r==="zone"?c`${this.zoneV6(n,t.min??0,t.max??14,_,v)}
          ${(this._spark[t.entity]?.length??0)>1?c`<div class="spark" style="margin-top:7px;opacity:.85">${Vt(this._spark[t.entity],w,this.chartW(74),28)}</div>`:u}`:r==="graph"?c`<div class="spark">${Vt(this._spark[t.entity]??[],w,this.chartW(74),38)}</div>`:u;return c`<div class="ind" style="cursor:pointer" @click=${()=>this.moreInfo(t.entity)}>${F}${$}</div>`}mediaBlock(){let t=this._config,n=t.media_height??180;if(t.image_url)return c`<div class="seclbl">${this.t("Livestream")}</div>
        <img src=${t.image_url} alt="" loading="lazy"
          style="width:100%;height:${n}px;object-fit:cover;border-radius:12px;border:1px solid var(--line);display:block">`;if(t.camera_entity){let i=this.hass.states[t.camera_entity],s=i?.attributes?.entity_picture;return c`<div class="seclbl">${this.t("Livestream")}</div>
        <button class="gc" title=${this.t("Live ansehen")} @click=${()=>this.moreInfo(t.camera_entity)}
          style="width:100%;padding:0;border:1px solid var(--line);border-radius:12px;overflow:hidden;display:block;background:#000;cursor:pointer">
          ${i&&s?c`<img src=${s} alt="" style="width:100%;height:${n}px;object-fit:cover;display:block">`:c`<div style="height:${n}px;display:flex;align-items:center;justify-content:center;gap:8px;color:var(--tx-3)">
                <ha-icon icon="mdi:cctv" style="--mdc-icon-size:22px"></ha-icon>${this.t("Kamera nicht verf\xFCgbar")}</div>`}
        </button>`}return u}logExcerpt(){if(this._config.show_log===!1)return u;let i=this.hass.states[this.e("event")]?.attributes?.verlauf??[];if(!i.length)return u;let s=(this.expOpen("log")?i.slice(-3):i.slice(-1)).reverse();return c`${this.expHeader("log","Protokoll")}
      <div style="display:flex;flex-direction:column;gap:5px">
        ${s.map(r=>c`<button class="gc" @click=${()=>this.moreInfo(this.e("event"))}
          style="display:flex;align-items:center;gap:9px;width:100%;text-align:left;color:inherit;
            background:${Bt[r.level]??Bt.none};border:none;border-radius:9px;padding:9px 11px;min-height:38px">
          <span style="width:7px;height:7px;border-radius:50%;flex-shrink:0;background:${Me[r.level]??m.info}"></span>
          <span style="flex:1;min-width:0;font-size:12px;font-weight:700;color:var(--tx-2);overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${r.text}</span>
          <span style="font:700 10px var(--f-num);color:var(--tx-3);flex-shrink:0">${r.ts}</span>
        </button>`)}
      </div>`}todoBlock(){let t=this._config,n=R(this.hass,t.tent,"zelt","todo")??K("todo",t.tent,"aufgaben",t.overrides),i=this.hass.states[n]?.attributes?.aufgaben_offen??[],s=`${t.station}: `,r=i.filter(l=>l.text.startsWith(s)).map(l=>({uid:l.uid,text:l.text.slice(s.length)}));if(!r.length)return u;let a=this.expOpen("todo")?r:r.slice(0,1);return c`${this.expHeader("todo","Aufgaben")}
      <div style="display:flex;flex-direction:column;gap:5px">
        ${a.map(l=>c`<button class="gc" title=${this.t("Als erledigt markieren")}
          @click=${()=>this.completeTodo(n,l.uid)}
          style="display:flex;align-items:center;gap:9px;width:100%;text-align:left;color:inherit;
            background:rgba(255,255,255,.03);border:1px solid var(--line);border-radius:9px;padding:9px 11px;min-height:38px;cursor:pointer">
          <ha-icon icon="mdi:checkbox-blank-circle-outline" style="--mdc-icon-size:16px;color:var(--accent, ${m.ok})"></ha-icon>
          <span style="flex:1;min-width:0;font-size:12px;font-weight:700;color:var(--tx-2)">${l.text}</span>
        </button>`)}
      </div>`}completeTodo(t,n){this.hass.callService("todo","update_item",{entity_id:t,item:n,status:"completed"})}groupedSettings(){let t=(r,a)=>{let l=a.map(([p,d,g,f])=>({eid:this.eRole(p,d,g),label:f})).filter(p=>p.eid&&this.hass.states[p.eid]);return{title:r,items:l}},n=[t(this.t("Lichtzeiten"),[["time","licht_an","light_on","Licht AN"],["time","licht_aus_seedling_veg","light_off_sv","AUS Seed/Veg"],["time","licht_aus_bloom_flush","light_off_bloom","AUS Bloom/Flush"]]),t(this.t("Pumpe"),[["number","pumpe_an_seedling","pump_on_seedling","AN Seedling"],["number","pumpe_aus_seedling","pump_off_seedling","AUS Seedling"],["number","pumpe_an_veg","pump_on_veg","AN Veg"],["number","pumpe_aus_veg","pump_off_veg","AUS Veg"],["number","pumpe_an_bloom_flush","pump_on_bloom","AN Bloom"],["number","pumpe_aus_bloom_flush","pump_off_bloom","AUS Bloom"]]),t(this.t("Heizung"),[["number","heizung_zieltemperatur","heat_target","Ziel \xB0C"],["number","heizung_hysterese","heat_hyst","Hysterese K"]]),t(this.t("Schwellen & Sonstiges"),[["date","keimstart","germination","Keimstart"],["number","manuelle_ubernahme","override_minutes","Man. \xDCbernahme"],["number","lux_ppfd_faktor","lux_factor","Lux-Faktor"],["number","fullstand_minimum_pumpensperre","level_min","F\xFCllstand-Min"],["number","bodenfeuchte_schwelle_bewassern_unter","moisture_min","Feuchte-Schwelle"]])].filter(r=>r.items.length),i=this.e("germinationReset"),s=i&&this.hass.states[i];return c`<div style="margin-top:4px">
      ${this.hass.states[this.e("plant")]?c`<div class="seclbl">${this.t("Pflanze")}</div>${this.plantDropdown(this.e("plant"))}`:u}
      ${n.map(r=>c`
        <div class="seclbl">${r.title}</div>
        <div class="settings-grid">${r.items.map(a=>this.setting(a.eid,a.label))}</div>`)}
      ${s?c`<button class="gc" title=${this.t("Keimdatum l\xF6schen")}
          style="display:flex;align-items:center;justify-content:center;gap:8px;width:100%;margin-top:10px;
            padding:10px;border:1px solid var(--line);border-radius:10px;background:var(--card-3);
            color:var(--tx-2);font:800 12px var(--f-ui);cursor:pointer"
          @click=${()=>this.hass.callService("button","press",{entity_id:i})}>
          <ha-icon icon="mdi:calendar-remove" style="--mdc-icon-size:16px;color:var(--tx-3)"></ha-icon>
          ${this.t("Keimstart zur\xFCcksetzen")}</button>`:u}
    </div>`}};customElements.define("growctrl-station-card",Gt);var kn=[h.text("title","\u{1F3F7}\uFE0F Titel"),h.num("columns","\u25A6 Spalten",1,6)],Sn=[h.entity("entity","\u{1F50C} Aktor",["switch","input_boolean","light","fan"]),h.text("name","\u270F\uFE0F Anzeigename (optional)"),h.text("group","\u{1F5C2}\uFE0F Gruppe (optional, z.B. Zelt / Pflanzen)"),h.select("kind","\u{1F3A8} Art (Farbe/Icon, optional)",[{value:"light",label:"Licht"},{value:"heat",label:"Heizung"},{value:"water",label:"Wasser / Befeuchter"},{value:"o2",label:"O\u2082"},{value:"fan",label:"L\xFCfter"},{value:"pump",label:"Pumpe"},{value:"dehum",label:"Entfeuchter"}]),h.bool("confirm","\u2705 Mit Best\xE4tigung schalten")],jt=class extends L{render(){return c`${this.form(kn)}
      ${this.list({key:"controls",rowSchema:Sn,title:"\u{1F50C} Aktoren",addLabel:"Aktor hinzuf\xFCgen",newItem:()=>({entity:""})})}
      ${this.styleSection()}
      <div class="hint">Gleiche <b>Gruppe</b> = gemeinsame \u00dcberschrift. <b>Art</b> setzt Farbe und Icon.
        <b>Best\u00e4tigung</b> fragt vor dem Schalten nach (z.B. f\u00fcr Pumpen).</div>`}};customElements.define("growctrl-controls-editor",jt);var An={switch:"mdi:power",light:"mdi:lightbulb",fan:"mdi:fan",input_boolean:"mdi:toggle-switch"},Cn={light:"mdi:lightbulb",heat:"mdi:radiator",water:"mdi:air-humidifier",o2:"mdi:gas-cylinder",fan:"mdi:fan",pump:"mdi:water-pump",dehum:"mdi:air-humidifier-off"},qt=class extends A{static{this.styles=P}validateConfig(e){if(!Array.isArray(e.controls)||!e.controls.length)throw new Error("growctrl-controls-card: 'controls' (min. 1 Eintrag) ist Pflicht.")}static getConfigElement(){return document.createElement("growctrl-controls-editor")}static getStubConfig(){return{columns:4,controls:[{entity:"switch.demo_licht",kind:"light",name:"Licht"},{entity:"switch.demo_luefter",kind:"fan",name:"L\xFCfter"},{entity:"switch.demo_pumpe",kind:"pump",name:"Pumpe"},{entity:"switch.demo_heizung",kind:"heat",name:"Heizung"}]}}render(){let e=this._config;if(!this.hass)return u;let t=e.columns??4,n=new Map;return e.controls.forEach(i=>{let s=i.group??"";n.has(s)||n.set(s,[]),n.get(s).push(i)}),c`<div class="card ${e.style?.glass?"glass":""}" style="${T(e.style)};position:relative">
      ${e.title?c`<div class="hd"><div class="ttl">${e.title}</div></div>`:u}
      ${[...n.entries()].map(([i,s])=>c`
        ${i?c`<div class="seclbl">${i}</div>`:u}
        <div class="acts" style="grid-template-columns:repeat(${t},1fr); ${i?"":"margin-top:4px"}">
          ${s.map(r=>{let a=this.hass.states[r.entity]?this.isOn(r.entity):r.kind==="light"||r.kind==="fan",l=r.name??this.friendly(r.entity),p=r.kind??"",d=p==="light"||p==="heat"||p==="water"||p==="dehum"?p:"",g=r.icon??this.hass.states[r.entity]?.attributes?.icon??Cn[p]??An[r.entity.split(".")[0]]??"mdi:power";return c`<button class="gc act ${a?"on":""} ${a?d:""}" style="position:relative"
              title=${r.confirm?"Gesicherter Aktor \u2013 fragt vor dem Schalten nach":l}
              @click=${()=>r.confirm?this.confirmToggle(r.entity,l):this.toggle(r.entity)}>
              ${r.confirm?c`<ha-icon icon="mdi:lock" title="Bestätigung vor dem Schalten"
                style="position:absolute;top:6px;right:6px;--mdc-icon-size:12px;color:var(--tx-3)"></ha-icon>`:u}
              <ha-icon class="aic" icon=${g} style="--mdc-icon-size:18px"></ha-icon>
              <span class="anm">${l}</span>
              <span class="ast">${a?"AN":"AUS"}</span>
            </button>`})}
        </div>`)}
      ${this.renderConfirm()}
    </div>`}};customElements.define("growctrl-controls-card",qt);var En=[h.text("title","\u{1F3F7}\uFE0F Titel"),h.num("columns","\u25A6 Spalten",1,6)],zn=[h.entity("entity","\u{1F4C8} Sensor","sensor"),h.text("name","\u270F\uFE0F Anzeigename (optional)"),h.num("min","Sollbereich Min (optional)"),h.num("max","Sollbereich Max (optional)"),h.select("accent","\u{1F3A8} Akzentfarbe (optional)",[{value:"temp",label:"Temperatur (orange)"},{value:"hum",label:"Feuchte (blau)"},{value:"vpd",label:"VPD (Akzent)"}])],Ln=[h.select("quelle","\u{1F522} Quelle",[{value:"sensor",label:"Eigener Sensor"},{value:"ph",label:"pH (aus Integration)"},{value:"ec",label:"EC (aus Integration)"}]),h.select("darstellung","\u{1F4CA} Darstellung",[{value:"verlauf",label:"Verlauf (Linie + Sollband)"},{value:"balken",label:"Zonen-Balken (schlecht/ideal/gut)"}]),h.entity("entity","\u{1F4C8} Sensor (nur bei \u201EEigener Sensor\u201C)","sensor"),h.text("name","\u270F\uFE0F Anzeigename (optional)"),h.num("min","Sollband Min (nur eigener Sensor)"),h.num("max","Sollband Max (nur eigener Sensor)"),h.num("hours","\u23F1\uFE0F Zeitraum in h (Standard 24)",1,168)],Qt=class extends L{render(){return c`${this.form(En)}
      ${this.form([this.tentSelect("tent","\u{1F3D5}\uFE0F Zelt (f\xFCr pH/EC aus Integration, optional)"),this.stationSelect(this._config?.tent,"station","\u{1F331} Station (= Pflanze, f\xFCr pH/EC)")])}
      ${this.list({key:"sensors",rowSchema:zn,title:"\u{1F4C8} Sensoren (Kacheln)",addLabel:"Sensor hinzuf\xFCgen",newItem:()=>({entity:""})})}
      ${this.list({key:"charts",rowSchema:Ln,title:"\u{1F4C9} Charts (pH/EC mit Zonen oder eigener Sensor)",addLabel:"Chart hinzuf\xFCgen",newItem:()=>({quelle:"ph",darstellung:"balken"})})}
      ${this.styleSection()}
      <div class="hint">Oben <b>Kacheln</b> mit aktuellem Wert. Darunter <b>Charts</b>:
        f\u00fcr <b>pH/EC</b> einfach <b>Zelt + Station</b> w\u00e4hlen und Quelle \u201epH\u201c bzw. \u201eEC\u201c \u2013 Wert und
        die Zonen (schlecht/ideal/gut) kommen automatisch aus der <b>gew\u00e4hlten Pflanze</b>, kein Sensor n\u00f6tig.
        Mit \u201eVerlauf\u201c als Linie mit Sollband, mit \u201eZonen-Balken\u201c wie in der Station-Karte.</div>`}};customElements.define("growctrl-sensors-editor",Qt);var Xt=class extends A{constructor(){super(...arguments);this._hist={}}static{this.styles=P}static{this.properties={...A.properties,_hist:{state:!0}}}validateConfig(t){if(!Array.isArray(t.sensors)||!t.sensors.length)throw new Error("growctrl-sensors-card: 'sensors' (min. 1 Eintrag) ist Pflicht.")}static getConfigElement(){return document.createElement("growctrl-sensors-editor")}static getStubConfig(){return{columns:3,sensors:[{entity:"sensor.demo_temp",name:"Temperatur",accent:"temp",min:20,max:28},{entity:"sensor.demo_hum",name:"Luftfeuchte",accent:"hum",min:50,max:70},{entity:"sensor.demo_vpd",name:"VPD",accent:"vpd",min:.8,max:1.5}]}}connectedCallback(){super.connectedCallback(),this._load(),this._timer=window.setInterval(()=>this._load(),5*6e4)}disconnectedCallback(){super.disconnectedCallback(),this._timer&&clearInterval(this._timer)}async _load(){if(!this.hass){setTimeout(()=>this._load(),1e3);return}let t=this._config.charts??[],n={};for(let i of t){let s=this.resolveChart(i);s.entity&&s.mode==="verlauf"&&(n[s.entity]=await O(this.hass,s.entity,i.hours??24))}this._hist=n}gcBus(){let t=this._config;if(!t.tent||!t.station)return null;let n=R(this.hass,t.tent,t.station,"last_event")??N("sensor",t.tent,t.station,"letztes_ereignis",t.overrides),i=this.hass.states[n]?.attributes??{};return{sensors:i.gc_sensors??{},phR:i.gc_ph_bereich??null,ecR:i.gc_ec_bereich??null}}resolveChart(t){let n=t.quelle??"sensor",i=t.darstellung??"verlauf";if(n==="ph"||n==="ec"){let r=this.gcBus(),a=(n==="ph"?r?.sensors.ph:r?.sensors.ec)??"",l=(n==="ph"?r?.phR:r?.ecR)??null,p=n==="ph"?4:0,d=n==="ph"?8:l?Math.max(3,Math.ceil((l[1]+.8)*2)/2):3.5;return{entity:a,name:t.name??(n==="ph"?"pH":"EC"),min:p,max:d,ideal:l,mode:i,integration:!0}}let s=t.min!==void 0&&t.max!==void 0?[t.min,t.max]:null;return{entity:t.entity??"",name:t.name??this.friendly(t.entity??""),min:t.min,max:t.max,ideal:s,mode:i,integration:!1}}zoneBar(t,n,i,s){let r=i-n||1,a=r*.08,l=[Math.max(n,s[0]-a),Math.min(i,s[1]+a)],p=(f,x)=>Math.max(0,(Math.min(x,i)-Math.max(f,n))/r*100),d=[{cls:"z-bad",w:p(n,l[0])},{cls:"z-low",w:p(l[0],s[0])},{cls:"z-ok",w:p(s[0],s[1])},{cls:"z-high",w:p(s[1],l[1])},{cls:"z-bad",w:p(l[1],i)}],g=t!==null?Math.min(100,Math.max(0,(t-n)/r*100)):null;return c`<span class="zones">
        ${d.map(f=>c`<i class="${f.cls}" style="width:${f.w}%"></i>`)}
        ${g!==null?c`<span class="zmark" style="left:${g}%"></span>`:u}
      </span>
      <span class="zlbl">
        <span style="width:30%;text-align:left">${n}</span>
        <span style="width:40%;color:#4CB87E;font-weight:800">${s[0]}\u2013${s[1]} ${this.t("ideal")}</span>
        <span style="width:30%;text-align:right">${i}</span>
      </span>`}bad(t,n){return t!==null&&(n.min!==void 0&&t<n.min||n.max!==void 0&&t>n.max)}render(){let t=this._config;if(!this.hass)return u;let n=t.columns??3,i=(t.charts??[]).some(r=>{let a=this.resolveChart(r),l=E(this.st(a.entity));return l!==null&&!!a.ideal&&(l<a.ideal[0]||l>a.ideal[1])}),s=t.sensors.some(r=>this.bad(E(this.st(r.entity)),r))||i;return c`<div class="card ${t.style?.glass?"glass":""}" data-level=${s?"warning":"ok"} style=${T(t.style)}>
      ${t.title?c`<div class="hd"><div class="ttl">${t.title}</div></div>`:u}
      <div class="kpis" style="grid-template-columns:repeat(${n},minmax(0,1fr))">
        ${t.sensors.map(r=>{let a=!this.hass.states[r.entity],l=E(this.st(r.entity))??(a?r.accent==="hum"?58:r.accent==="vpd"?1.1:23.4:null),p=this.unit(r.entity)||(a?r.accent==="hum"?"%":r.accent==="vpd"?"kPa":"\xB0C":""),d=this.bad(E(this.st(r.entity)),r),g=r.name??this.friendly(r.entity),f=r.accent?`c-${r.accent}`:"";return c`<button class="gc kpi ${f}" @click=${()=>this.moreInfo(r.entity)}>
            <span class="mlbl" style="overflow:hidden; white-space:nowrap; text-overflow:ellipsis; display:block">${g}</span>
            <span class="v" style="${d?`color:${m.crit}`:""}">${l!==null?l:"--"}<span class="u">${p}</span></span>
          </button>`})}
      </div>
      ${(t.charts??[]).map(r=>{let a=this.resolveChart(r),l=E(this.st(a.entity)),p=l!==null&&a.ideal?l<a.ideal[0]||l>a.ideal[1]:this.bad(l,{min:a.min,max:a.max}),d=this.unit(a.entity);return c`<div style="margin-top:14px">
          <div style="display:flex; justify-content:space-between; align-items:baseline; margin-bottom:4px">
            <span class="seclbl" style="margin:0">${a.name}</span>
            ${l!==null?c`<span style="font:700 13px var(--f-num); color:${p?m.crit:m.ok}">${l}${d?c`<span style="font-size:11px;color:var(--tx-2);margin-left:3px">${d}</span>`:u}</span>`:a.ideal?c`<span style="font:700 12px var(--f-num); color:var(--acc)">${a.ideal[0]} \u2013 ${a.ideal[1]}</span>`:u}
          </div>
          ${a.mode==="balken"?this.zoneBar(l,a.min??0,a.max??100,a.ideal??[a.min??0,a.max??100]):H([{data:this._hist[a.entity]??[],color:p?m.crit:m.ok,fill:!0}],{w:this.chartW(),h:96,band:a.ideal?{min:a.ideal[0],max:a.ideal[1]}:{min:a.min,max:a.max},grid:3})}
        </div>`})}
    </div>`}};customElements.define("growctrl-sensors-card",Xt);var Tn=[h.text("title","\u{1F3F7}\uFE0F Titel"),h.num("limit","\u{1F4CB} Max. Zeilen",3,50),h.select("min_level","\u{1F50D} Anzeige",[{value:"alle",label:"Alle Ereignisse"},{value:"warnung",label:"Nur Warnungen/Fehler"},{value:"info",label:"Nur Infos"}])],Pn=[h.entity("entity","\u{1F4DC} Letztes-Ereignis-Sensor","sensor"),h.text("name","\u270F\uFE0F Label (optional)")],Yt=class extends L{render(){return c`${this.form(Tn)}
      ${this.list({key:"sources",rowSchema:Pn,title:"\u{1F4E1} Quellen",addLabel:"Quelle hinzuf\xFCgen",newItem:()=>({entity:""})})}
      ${this.styleSection()}
      <div class="hint">Sammelt die Ereignisse mehrerer GROWCTRL-Sensoren in ein Protokoll, neueste zuerst.
        <b>Label</b> ersetzt den Quellennamen. <b>Anzeige</b> kann auf Warnungen/Fehler filtern.</div>`}};customElements.define("growctrl-status-editor",Yt);var Jt=class extends A{static{this.styles=P}validateConfig(e){if(!Array.isArray(e.sources)||!e.sources.length)throw new Error("growctrl-status-card: 'sources' (Letztes-Ereignis-Sensoren) ist Pflicht.")}static getConfigElement(){return document.createElement("growctrl-status-editor")}static getStubConfig(){return{sources:[{entity:"sensor.growctrl_gross_main1_letztes_ereignis"}]}}render(){let e=this._config;if(!this.hass)return u;let t=[],n=[];for(let d of e.sources){let g=this.hass.states[d.entity],f=g?.attributes?.verlauf??[];n.push(g?.attributes?.schweregrad??"ok"),f.forEach((x,y)=>t.push({ts:x.ts,t:typeof x.t=="number"?x.t:void 0,text:x.text,level:x.level,src:d.name??this.friendly(d.entity),entity:d.entity,_i:y}))}t.sort((d,g)=>{let f=d.t??-1,x=g.t??-1;return f!==x?x-f:(g._i??0)-(d._i??0)}),!t.length&&e.sources.every(d=>!this.hass.states[d.entity])&&t.push({ts:"12:30",text:"Licht an (Plan)",level:"info",src:"Station"},{ts:"12:05",text:"VPD im Zielbereich",level:"ok",src:"Station"},{ts:"11:40",text:"Tank niedrig \u2013 bitte nachf\xFCllen",level:"warning",src:"Station"});let s=(e.min_level==="warnung"?t.filter(d=>d.level==="warning"||d.level==="critical"):e.min_level==="info"?t.filter(d=>d.level==="info"):t).slice(0,e.limit??12),r=st(n),a=e.sources.length>1,l=d=>d==="critical"?"c":d==="warning"?"w":d==="info"?"i":"",p=r==="ok"?this.t("Info"):r==="warning"?this.t("Warnung"):r==="critical"?this.t("Kritisch"):this.t("Info");return c`<div class="card ${e.style?.glass?"glass":""}" data-level=${r} style=${T(e.style)}>
      <div class="hd">
        <div class="ttl grow">${e.title??this.t("Ereignisprotokoll")}</div>
        <span class="pill ${Z(r)}">${p}</span>
      </div>
      <div class="log">
        ${s.length?s.map(d=>c`
          <button class="gc lrow ${l(d.level)}" @click=${()=>d.entity&&this.moreInfo(d.entity)}>
            <span class="tm">${d.ts}</span>
            ${a?c`<span class="who">${d.src}</span>`:u}
            <span class="what">${d.text}</span>
          </button>`):c`<div class="lrow"><span class="what" style="color:var(--acc)">\u2713 ${this.t("Noch keine Ereignisse")}</span></div>`}
      </div>
    </div>`}};customElements.define("growctrl-status-card",Jt);var Fn=[h.text("title","\u{1F3F7}\uFE0F Titel (optional)"),h.text("logo","\u{1F5BC}\uFE0F Logo-URL (z.B. /local/growctrl/logo.png)"),h.bool("show_chart","\u{1F4C8} 24h-Chart zus\xE4tzlich zum Zonen-Balken"),h.num("hours","\u23F1\uFE0F Chart-Zeitraum (h)",1,168)],te=class extends L{render(){let e=[this.stationSelect(this._config?.tent),h.text("name","\u270F\uFE0F Anzeigename (optional)")];return c`${this.form([this.tentSelect("tent","\u{1F3D5}\uFE0F Zelt"),...Fn])}
      ${this.list({key:"stations",rowSchema:e,title:"\u{1F331} Stationen (Informationssystem)",addLabel:"Station hinzuf\xFCgen",newItem:()=>({station:""})})}
      ${this.styleSection()}
      <div class="hint">Die Hero-Karte ist die Zelt-\u00dcbersicht: Klima-Werte, VPD-Skala und das
        Informationssystem. Die gelisteten <b>Stationen</b> liefern die Ereigniszeilen darunter.</div>`}};customElements.define("growctrl-hero-editor",te);var Ge=[{w:20,col:"#6E97DE",lbl:"zu feucht"},{w:20,col:"#58E0A5",lbl:"Seedling"},{w:20,col:"#2FB36C",lbl:"Veg"},{w:20,col:"#E5B567",lbl:"Bloom"},{w:20,col:"#D4726F",lbl:"zu trocken"}],ee=2,ne=class extends A{constructor(){super(...arguments);this._logoErr=!1;this._hist=[]}static{this.styles=P}static{this.properties={...A.properties,_hist:{state:!0},_logoErr:{state:!0}}}validateConfig(t){if(!t.tent)throw new Error("growctrl-hero-card: 'tent' ist Pflicht (Zelt-Name aus der Integration).")}static getConfigElement(){return document.createElement("growctrl-hero-editor")}static getStubConfig(){return{tent:"gross",stations:[{station:"main1"}]}}te(t){let[n,i,s]=at[t],r=this._config;return r.overrides?.[i]??R(this.hass,r.tent,"zelt",s)??K(n,r.tent,i,r.overrides)}connectedCallback(){super.connectedCallback(),this._load(),this._timer=window.setInterval(()=>this._load(),5*6e4)}disconnectedCallback(){super.disconnectedCallback(),this._timer&&clearInterval(this._timer)}async _load(){if(!this.hass){setTimeout(()=>this._load(),1e3);return}this._hist=await O(this.hass,this.te("vpd"),this._config.hours??24)}tglBtn(t,n,i){return c`<button class="gc tgl ${i?"on":""}" @click=${()=>this.confirmToggle(t,n)}>
      <span class="sw"></span> ${n}</button>`}render(){let t=this._config;if(!this.hass)return u;let n=this.hass.states[this.te("vpd")],i=!n&&!this.hass.states[this.te("enabled")],s=E(n?.state)??(i?.76:null),r=n?.attributes?.temp??(i?21.5:null),a=n?.attributes?.rh??(i?61:null),l=n?.attributes?.phase_effektiv??"",p=n?.attributes?.sollwerte,d=this.isOn(this.te("enabled"))||i,g=this.isOn(this.te("climate")),f=this.hass.states[this.te("status")],x=f?.attributes?.probleme??[],y=(t.stations??[]).map(b=>{let z=this.hass.states[R(this.hass,t.tent,b.station,"last_event")??N("sensor",t.tent,b.station,"letztes_ereignis",t.overrides)],M=this.hass.states[R(this.hass,t.tent,b.station,"light_rest")??N("sensor",t.tent,b.station,"licht_restzeit",t.overrides)],B=z?.attributes?.schweregrad??"ok";return{name:b.name??b.station,text:z?.state??"\u2013",level:B,lightText:M?.attributes?.text??(M?.state?`${this.t("Licht")} ${this.t(String(M.attributes?.zustand??""))}`:""),on:M?.attributes?.zustand==="an",ent:R(this.hass,t.tent,b.station,"last_event")??N("sensor",t.tent,b.station,"letztes_ereignis",t.overrides)}}),w=b=>b==="warning"||b==="critical",v=st([(f?.state??"").toLowerCase()==="problem"?"warning":"ok",...y.map(b=>w(b.level)?b.level:"ok")]),_=[...x.map(b=>({label:b,level:"warning"})),...y.filter(b=>w(b.level)).map(b=>({label:`${b.name}: ${b.text}`,level:b.level}))],C=s!==null&&p&&s>=p.vpd_min&&s<=p.vpd_max,k=s!==null?Math.min(100,Math.max(0,s/ee*100)):null,F=this.isOn(this.te("stale")),$=n?.attributes?.temp_entity||this.te("vpd"),S=n?.attributes?.rh_entity||this.te("vpd");return c`<div class="card ${t.style?.glass?"glass":""}" data-level=${v} style="${T(t.style)};position:relative">
      <div class="hd">
        ${t.logo&&!this._logoErr?c`<img src=${t.logo} alt="Logo" @error=${()=>{this._logoErr=!0}}
              style="width:46px;height:46px;border-radius:16px;object-fit:contain;background:rgba(255,255,255,.92);padding:3px;flex-shrink:0" />`:c`<div class="badge-ic"><ha-icon icon="mdi:sprout" style="--mdc-icon-size:22px"></ha-icon></div>`}
        <div class="grow" style="min-width:0">
          <div class="ttl">${t.title??`Growroom \xB7 ${t.tent}`}</div>
          ${l?c`<div class="sub">${this.t("Klima-Phase")} ${this.t(l)}</div>`:u}
        </div>
        <span class="pill ${Z(v)}">${v==="ok"?this.t("Alles OK"):v==="warning"?this.t("Warnung"):v==="critical"?this.t("Kritisch"):this.t("Info")}</span>
      </div>

      <div style="display:flex; gap:8px; margin-bottom:16px; flex-wrap:wrap">
        ${this.tglBtn(this.te("enabled"),this.t("Zelt"),d)}
        ${this.tglBtn(this.te("climate"),this.t("Klima"),g)}
      </div>

      <div class="kpis">
        <button class="gc kpi c-temp" @click=${()=>this.moreInfo($)}>
          <span class="mlbl">${this.t("Temperatur")}</span><span class="v">${r!=null?Number(r).toFixed(1):"\u2013"}<span class="u">°C</span></span></button>
        <button class="gc kpi c-hum" @click=${()=>this.moreInfo(S)}>
          <span class="mlbl">${this.t("Luftfeuchte")}</span><span class="v">${a!=null?Math.round(Number(a)):"\u2013"}<span class="u">%</span></span></button>
        <button class="gc kpi c-vpd" @click=${()=>this.moreInfo(this.te("vpd"))}>
          <span class="mlbl">VPD</span><span class="v" style="${s!==null&&!C?`color:${m.warn}`:""}">${s!==null?s.toFixed(2):"\u2013"}<span class="u">kPa</span></span></button>
      </div>

      ${F?c`<div style="margin-top:10px;display:flex;align-items:center;gap:7px;padding:7px 12px;border-radius:10px;
        background:color-mix(in srgb, ${m.warn} 14%, transparent);color:${m.warn};font-size:12.5px;font-weight:700">
        <ha-icon icon="mdi:timer-alert-outline" style="--mdc-icon-size:16px"></ha-icon>
        ${this.t("Klima-Sensoren eingefroren")} \u00b7 ${this.t("Werte evtl. veraltet")}</div>`:u}

      <div style="margin-top:16px">
        <div class="zones">
          ${Ge.map(b=>c`<i style="width:${b.w}%;background:${b.col}"></i>`)}
          ${p?c`<span class="zband" style="left:${p.vpd_min/ee*100}%;width:${(p.vpd_max-p.vpd_min)/ee*100}%"></span>`:u}
          ${k!==null?c`<span class="zmark" style="left:${k}%"></span>`:u}
        </div>
        <div class="zlbl">${Ge.map(b=>c`<span style="width:${b.w}%">${this.t(b.lbl)}</span>`)}</div>
      </div>

      ${t.show_chart===!0&&this._hist.length>1?c`
        <div class="seclbl">VPD · ${t.hours??24}h</div>
        ${H([{data:this._hist,color:C===!1?m.warn:m.ok,fill:!0}],{w:this.chartW(),h:96,band:p?{min:p.vpd_min,max:p.vpd_max}:void 0,grid:3})}`:u}

      ${y.length?c`<div class="seclbl">${this.t("Stationen")}</div>
        <div style="display:flex; flex-direction:column; gap:7px">
          ${y.map(b=>c`<button class="gc supply" @click=${()=>b.ent&&this.moreInfo(b.ent)}>
            <span class="shd">
              <span class="sic" style="color:${b.on?m.light:"var(--tx-3)"}"><ha-icon icon="mdi:lightbulb${b.on?"-on":"-outline"}" style="--mdc-icon-size:18px"></ha-icon></span>
              <span class="stt">${b.name}</span>
              <span class="sbadge" style="color:${w(b.level)?b.level==="critical"?m.crit:m.warn:m.ok}">${w(b.level)?b.level==="critical"?this.t("Fehler"):this.t("Warnung"):this.t("OK")}</span>
            </span>
            <span class="sft"><span>${b.lightText||b.text}</span><span></span></span>
          </button>`)}
        </div>`:u}

      <div class="seclbl">${this.t("Informationssystem")}</div>
      ${_.length?c`<div style="display:flex; flex-direction:column; gap:7px">
            ${_.map(b=>c`<div class="event" style="cursor:default">
              <span class="edot" style="background:${b.level==="critical"?m.crit:m.warn}"></span>
              <span class="etx" style="color:${b.level==="critical"?m.crit:m.warn}">${b.label}</span></div>`)}
          </div>`:c`<div class="event" style="cursor:default">
            <span class="edot" style="background:${m.ok};box-shadow:0 0 6px ${m.ok}"></span>
            <span class="etx" style="color:${m.ok}">${this.t("Alle Systeme arbeiten normal")}</span></div>`}
      ${this.renderConfirm()}
    </div>`}};customElements.define("growctrl-hero-card",ne);var ie=class extends L{render(){let e=this._config.tent,t=[this.tentSelect("tent","\u{1F3D5}\uFE0F Zelt"),h.text("title","\u{1F3F7}\uFE0F Titel"),h.bool("show_sensors","\u{1F9EA} Sensoren-Sektion zeigen (pH/EC/Temp/RH/\u2026, Standard an)"),h.bool("show_controls","\u{1F39B}\uFE0F Steuerungs-Sektion zeigen (Licht/Pumpe/\u2026, Standard an)"),h.bool("show_tent_row","\u{1F3D5}\uFE0F Zelt-Sektion zeigen (Aktiv/Klima/VPD/Status)"),h.text("tent_name","\u270F\uFE0F Name der Zelt-Zeile (optional)")],n=[this.stationSelect(e,"station","\u{1F331} Station (= Pflanze)"),h.text("name","\u270F\uFE0F Anzeigename (optional)")];return c`${this.form(t)}
      ${this.list({key:"stations",rowSchema:n,title:"\u{1F331} Stationen",addLabel:"Station hinzuf\xFCgen",newItem:()=>({station:""})})}
      ${this.styleSection()}
      <div class="hint">Drei Ampel-Sektionen: <b>Sensoren</b> (pH / EC / Temperatur / Feuchte /
        Wasser- &amp; Bodentemperatur \u2013 nur Spalten, die min. eine Station hat), <b>Steuerung</b>
        (Licht / Pumpe / Heizung / Auto / Eingriff / Status) und <b>Zelt</b> (Aktiv / Klima / VPD / Status).
        Es gen\u00fcgt, die Stationen zu listen \u2013 die <b>Idealbereiche</b> f\u00fcr die Sensor-Ampel
        kommen automatisch aus dem Pflanzen-Preset der Integration (abh\u00e4ngig von Systemtyp + Pflanze).<br>
        Ampel: <b>gr\u00fcn</b> = im Idealbereich, <b>gelb</b> = knapp daneben, <b>rot</b> = Problem,
        <b>grau</b> = kein Wert, <b>leere Zelle</b> = dieser Sensor ist an der Station nicht angelegt. Tippen \u00f6ffnet die Entit\u00e4t.</div>`}};customElements.define("growctrl-checkup-editor",ie);var Mn=[{key:"ph",icon:"mdi:ph",label:"pH",range:"ph",margin:.3},{key:"ec",icon:"mdi:flash-outline",label:"EC",range:"ec",margin:.3},{key:"temp",icon:"mdi:thermometer",label:"Temp",range:null,margin:0},{key:"humidity",icon:"mdi:water-percent",label:"RH",range:null,margin:0},{key:"water_temp",icon:"mdi:coolant-temperature",label:"Wasser",range:null,margin:0},{key:"soil_temp",icon:"mdi:thermometer-low",label:"Boden",range:null,margin:0}],se=class extends A{static{this.styles=P}validateConfig(e){if(!Array.isArray(e.stations)||!e.stations.length)throw new Error("growctrl-checkup-card: 'stations' (min. 1) ist Pflicht.")}static getConfigElement(){return document.createElement("growctrl-checkup-editor")}static getStubConfig(){return{tent:"gross",show_tent_row:!0,stations:[{station:"main1"},{station:"main2"}]}}sEnt(e,t,n){let[i,s,r]=wt[n];return R(this.hass,e,t,r)??N(i,e,t,s)}tEnt(e,t){let[n,i,s]=at[t];return R(this.hass,e,"zelt",s)??K(n,e,i)}sensorColsPresent(e){return Mn.filter(t=>e.some(n=>!!(this.hass.states[this.sEnt(n.tent,n.station,"event")]?.attributes?.gc_sensors??{})[t.key]))}sensorCell(e,t,n,i){let r=this.hass.states[this.sEnt(e,t,"event")]?.attributes??{},l=(r.gc_sensors??{})[n.key];if(!l)return{configured:!1,level:"off",title:""};if(i)return{configured:!0,level:"off",title:this.t("gestoppt")};let p=E(this.hass.states[l]?.state);if(p===null)return{configured:!0,level:"off",title:this.t("kein Wert")};let d=null;if(n.range==="ph"?d=r.gc_ph_bereich??null:n.range==="ec"&&(d=r.gc_ec_bereich??null),!d)return{configured:!0,level:"ok",title:`${p}`};let[g,f]=d,x=p>=g&&p<=f,y=p>=g-n.margin&&p<=f+n.margin;return{configured:!0,level:x?"ok":y?"warning":"critical",title:`${n.label} ${p} (${this.t("ideal")} ${g}\u2013${f})`}}avail(e){let t=this.hass.states[e];return!!t&&t.state!=="unavailable"&&t.state!=="unknown"}exists(e){return!!this.hass.states[e]}stationStopped(e,t){let n=this.tEnt(e,"enabled"),i=this.avail(n)&&!this.isOn(n),s=this.hass.states[this.sEnt(e,t,"stage")]?.state==="Aus";return{stopped:i||s,tentOff:i,off:s}}stationCells(e,t){let n=this.sEnt(e,t,"lightRest"),i=this.sEnt(e,t,"pumpRest"),s=this.sEnt(e,t,"heatActive"),r=this.sEnt(e,t,"auto"),a=this.sEnt(e,t,"pOverride"),l=this.sEnt(e,t,"event"),{stopped:p,tentOff:d}=this.stationStopped(e,t),g=d?this.t("Zelt aus \u2013 gestoppt"):this.t("Station aus"),f=(_t,Xe,Ye)=>({present:this.exists(_t),ent:_t,level:p?"off":this.avail(_t)?Xe:"off",text:p?g:Ye}),x=this.hass.states[n],y=x?.attributes?.zustand==="an",w=this.isOn(this.sEnt(e,t,"pFailsafe")),v=this.isOn(this.sEnt(e,t,"pPower"))||this.isOn(this.sEnt(e,t,"pTime")),_=f(n,w?"critical":v?"warning":y?"ok":"off",w?this.t("Licht-Failsafe ausgel\xF6st"):this.isOn(this.sEnt(e,t,"pPower"))?this.t("Licht AN ohne Leistung"):this.isOn(this.sEnt(e,t,"pTime"))?this.t("Lichtzeiten unvollst\xE4ndig"):y?this.t("Licht an"):x?.attributes?.aktiv===!1?this.t("Licht ausgeschaltet"):this.t("Licht aus")),C=this.isOn(this.sEnt(e,t,"pPump")),k=this.hass.states[i],F=f(i,C?"critical":k?.attributes?.aktiv===!1?"off":"ok",C?this.t("Pumpe gesperrt (F\xFCllstand)"):k?.attributes?.aktiv===!1?this.t("Pumpe ausgeschaltet"):k?.attributes?.text??this.t("Zyklus l\xE4uft")),$=this.isOn(this.sEnt(e,t,"heatSensorFault")),S=this.isOn(this.sEnt(e,t,"heatOvertemp")),b=this.isOn(this.sEnt(e,t,"heatEnabled")),z=this.hass.states[s],M=z?.state==="on",B=z?.attributes??{},U=f(s,$||S?"critical":b?"ok":"off",$?this.t("Heizung Sensorfehler"):S?this.t("Heizung \xDCbertemperatur"):b?M?`${this.t("Heizung heizt")}${typeof B.ist_temp=="number"?` \xB7 ${B.ist_temp} \xB0C`:""}`:this.t("Heizung bereit"):this.t("Heizung aus")),j=this.isOn(r),q=this.isOn(this.sEnt(e,t,"wartung")),D=f(r,q?"info":j?"ok":"warning",q?this.t("Wartungsmodus aktiv"):j?this.t("Automatik AN"):this.t("Automatik AUS (manuell)")),he=this.isOn(a),qe=f(a,he?"warning":"ok",he?this.t("Manueller Eingriff aktiv"):this.t("Kein Eingriff")),me=this.hass.states[l],ge=me?.attributes?.schweregrad??"ok",Qe={present:!0,ent:l,keepClick:!0,level:p?"off":ge==="critical"?"critical":ge==="warning"?"warning":"ok",text:p?g:me?.state??"OK"};return{licht:_,pumpe:F,heizung:U,auto:D,eingriff:qe,status:Qe}}tentCells(e){let t=this.isOn(this.tEnt(e,"enabled")),n=t?"ok":"warning",i=t?this.t("Zelt aktiv"):this.t("Zelt deaktiviert"),s=this.isOn(this.tEnt(e,"climate")),r=s?"ok":"off",a=s?this.t("Klima-Automatik AN"):this.t("Klima-Automatik AUS"),l=this.hass.states[this.tEnt(e,"vpd")],p=E(l?.state),d=l?.attributes?.sollwerte,g=p!==null&&d?p>=d.vpd_min&&p<=d.vpd_max?"ok":"warning":l?"ok":"off",f=p!==null?`VPD ${p.toFixed(2)} kPa${d?` (${this.t("Soll")} ${d.vpd_min}\u2013${d.vpd_max})`:""}`:"\u2014",x=this.hass.states[this.tEnt(e,"status")],y=(x?.state??"").toLowerCase()==="problem",w=x?.attributes?.probleme??[],v=y?"warning":"ok",_=y?w[0]??this.t("Problem erkannt"):this.t("Alles OK");return{aktiv:n,klima:r,vpd:g,status:v,aktivText:i,klimaText:a,vpdText:f,statusText:_,ent:{aktiv:this.tEnt(e,"enabled"),klima:this.tEnt(e,"climate"),vpd:this.tEnt(e,"vpd"),status:this.tEnt(e,"status")}}}dot(e){return c`<span class="dot ${e==="off"?"off":Z(e)}"></span>`}mc(e,t,n){return c`<button class="gc mc" title=${t} @click=${()=>n&&this.moreInfo(n)}>${this.dot(e)}</button>`}pCell(e,t){return e.configured?e.level==="off"?c`<span class="mc" style="cursor:default">${this.dot("off")}</span>`:this.mc(e.level,e.title,t):c`<span class="mc" style="cursor:default"></span>`}cCell(e){return e.present?e.level==="off"&&!e.keepClick?c`<span class="mc" style="cursor:default" title=${e.text}>${this.dot("off")}</span>`:this.mc(e.level,e.text,e.ent):c`<span class="mc" style="cursor:default"></span>`}mh(e,t){return c`<span class="mh" title=${this.t(t)}><ha-icon icon=${e}></ha-icon></span>`}mClass(e){return e===4?"m4":e===5?"m5":e===6?"m6":""}gridStyle(e){return this.mClass(e)?"":`grid-template-columns:1fr repeat(${e}, minmax(0,46px))`}render(){let e=this._config;if(!this.hass)return u;let t=(e.stations??[]).map(v=>({tent:v.tent??e.tent??"gross",station:v.station,name:v.name??v.station})),n=e.tent??t[0]?.tent??"gross",i=e.show_tent_row!==!1,s=e.show_sensors!==!1,r=e.show_controls!==!1,a=[],l=s?this.sensorColsPresent(t):[],p=l.length?t.map(v=>{let _=this.stationStopped(v.tent,v.station).stopped,C=l.map(k=>({col:k,cell:this.sensorCell(v.tent,v.station,k,_)}));return C.forEach(k=>{k.cell.configured&&k.cell.level!=="off"&&a.push(k.cell.level)}),{...v,cells:C}}):[],d=t.some(v=>!!this.hass.states[this.sEnt(v.tent,v.station,"heatActive")]),g=r?t.map(v=>{let _=this.stationCells(v.tent,v.station);return[_.status,_.pumpe,_.licht,_.auto,_.eingriff,...d?[_.heizung]:[]].forEach(C=>{C.present&&C.level!=="off"&&a.push(C.level)}),{...v,cells:_}}):[],f=i?this.tentCells(n):null;f&&a.push(f.status,f.aktiv,f.vpd);let x=st(a),y=l.length,w=d?6:5;return c`<div class="card ${e.style?.glass?"glass":""}" data-level=${x} style=${T(e.style)}>
      <div class="hd">
        <div class="grow">
          <div class="ttl">${e.title??this.t("Checkup")}</div>
          <div class="sub">${t.length} ${t.length===1?this.t("Station"):this.t("Stationen")}${i?` \xB7 1 ${this.t("Zelt")}`:""}</div>
        </div>
        <span class="pill ${Z(x)}">${x==="ok"?this.t("Alles OK"):x==="warning"?this.t("Warnung"):x==="critical"?this.t("Kritisch"):this.t("Info")}</span>
      </div>

      ${y?c`
        <div class="seclbl" style="margin-top:12px">${this.t("Sensoren")}</div>
        <div class="matrix ${this.mClass(y)}" style=${this.gridStyle(y)}>
          <span></span>
          ${l.map(v=>this.mh(v.icon,v.label))}
          ${p.map(v=>c`
            <div class="mn">${v.name}</div>
            ${v.cells.map(({col:_,cell:C})=>this.pCell(C,this.hass.states[this.sEnt(v.tent,v.station,"event")]?.attributes?.gc_sensors?.[_.key]??void 0))}`)}
        </div>`:u}

      ${g.length?c`
        <div class="seclbl">${this.t("Steuerung")}</div>
        <div class="matrix ${d?"m6":"m5"}" style=${this.gridStyle(w)}>
          <span></span>
          ${this.mh("mdi:lightbulb-outline","Licht")}${this.mh("mdi:water-pump","Pumpe")}${d?this.mh("mdi:radiator","Heizung"):u}${this.mh("mdi:robot-outline","Auto")}${this.mh("mdi:hand-back-right-outline","Eingriff")}${this.mh("mdi:heart-pulse","Status")}
          ${g.map(v=>c`
            <div class="mn">${v.name}</div>
            ${this.cCell(v.cells.licht)}
            ${this.cCell(v.cells.pumpe)}
            ${d?this.cCell(v.cells.heizung):u}
            ${this.cCell(v.cells.auto)}
            ${this.cCell(v.cells.eingriff)}
            ${this.cCell(v.cells.status)}`)}
        </div>`:u}

      ${f?c`
        <div class="seclbl">${this.t("Zelt")}</div>
        <div class="matrix m4">
          <span></span>
          ${this.mh("mdi:power","Aktiv")}${this.mh("mdi:air-conditioner","Klima")}${this.mh("mdi:water-percent","VPD")}${this.mh("mdi:heart-pulse","Status")}
          <div class="mn">${e.tent_name??`${this.t("Zelt")} ${n}`}</div>
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
    </div>`}};customElements.define("growctrl-checkup-card",se);var Rn=[h.text("title","\u{1F3F7}\uFE0F Titel"),h.entity("entity","\u{1F4A7} F\xFCllstand-Sensor (%) (Pflicht)","sensor"),h.num("min","\u26A0\uFE0F Mindeststand (%)",0,100),h.num("volume_l","\u{1FAA3} Tankvolumen (Liter, optional)",0,2e3)],re=class extends L{render(){return c`${this.form(Rn)}${this.styleSection()}
      <div class="hint">Der <b>F\u00fcllstand-Sensor</b> liefert Prozent. Unter dem <b>Mindeststand</b> wird der
        Tank rot. Mit <b>Tankvolumen</b> zeigt die Karte zus\u00e4tzlich die ungef\u00e4hren Liter an.</div>`}};customElements.define("growctrl-tank-editor",re);var ae=class extends A{constructor(){super(...arguments);this._tankHist=[]}static{this.styles=P}static{this.properties={...A.properties,_tankHist:{state:!0}}}validateConfig(t){if(!t.entity)throw new Error("growctrl-tank-card: 'entity' (Fuellstand-Sensor in %) ist Pflicht.")}static getConfigElement(){return document.createElement("growctrl-tank-editor")}static getStubConfig(){return{entity:"sensor.gc_slot1_level1",title:"Tank",min:30,volume_l:200}}connectedCallback(){super.connectedCallback(),this._load(),this._timer=window.setInterval(()=>this._load(),5*6e4)}disconnectedCallback(){super.disconnectedCallback(),this._timer&&clearInterval(this._timer)}async _load(){if(!this.hass){setTimeout(()=>this._load(),1e3);return}let t=this._config.entity;if(t){let n=await O(this.hass,t,72);n.length&&(this._tankHist=n)}}daysLeft(t,n){let i=this._tankHist;if(!i||i.length<4||t<=n)return null;let s=0;for(let a=1;a<i.length;a++){let l=i[a-1]-i[a];l>0&&(s+=l)}let r=s/(72/24);return r<.4?null:(t-n)/r}render(){let t=this._config;if(!this.hass)return u;let n=!this.hass.states[t.entity],i=Math.min(100,Math.max(0,E(this.st(t.entity))??(n?49:0))),s=t.min!==void 0&&i<t.min,r=s?m.crit:m.water,a=t.volume_l?i/100*t.volume_l:null,l=t.min!==void 0&&!n?this.daysLeft(i,t.min):null,p=l===null?"":l<1?`<1 ${this.t("Tag")}`:`~${Math.round(l)} ${this.t("Tage")}`;return c`<div class="card ${t.style?.glass?"glass":""}" data-level=${s?"critical":"ok"} style=${T(t.style)}>
      <div class="hd">
        <div class="ttl grow">${t.title??this.t("Tank")}</div>
        ${s?c`<span class="pill crit">Nachfüllen</span>`:u}
      </div>
      <div style="display:flex; gap:18px; align-items:center">
        <button class="gc tankv" @click=${()=>this.moreInfo(t.entity)}>
          ${t.min!==void 0?c`<span class="minl" style="bottom:${t.min}%"></span>`:u}
          <span class="fill" style="height:${i}%; background:linear-gradient(180deg, ${r}d9, ${r}80)"></span>
        </button>
        <button class="gc" style="flex:1; min-width:0; text-align:left" @click=${()=>this.moreInfo(t.entity)}>
          <span class="mlbl">Aktueller Füllstand</span>
          <div style="font:700 38px/1 var(--f-num); letter-spacing:-1.5px; color:${r}; margin-top:5px; font-variant-numeric:tabular-nums">
            ${Math.round(i)}<span style="font:600 14px var(--f-num); color:var(--tx-2); margin-left:2px">%</span></div>
          ${a!==null?c`<div style="margin-top:6px; font:700 12.5px var(--f-ui); color:var(--tx-2)">≈ ${a.toFixed(1)} l von ${t.volume_l} l</div>`:u}
          ${t.min!==void 0?c`<div style="font:700 10.5px var(--f-ui); color:var(--tx-3); margin-top:2px">Mindeststand ${t.min} %</div>`:u}
          ${p?c`<div style="font:700 11px var(--f-ui); color:var(--water); margin-top:4px">${this.t("Reichweite")}: ${p}</div>`:u}
        </button>
      </div>
    </div>`}};customElements.define("growctrl-tank-card",ae);var On=[h.text("title","\u{1F3F7}\uFE0F Titel"),h.num("hours","\u23F1\uFE0F Zeitraum (h)",1,168),h.num("height","\u{1F4CF} Diagrammh\xF6he (px)",80,300)],Bn=[h.entity("entity","\u{1F4C8} Sensor","sensor"),h.text("name","\u270F\uFE0F Anzeigename (optional)"),h.select("axis","\u{1F4CA} Achse",[{value:"left",label:"Links (Standard)"},{value:"right",label:"Rechts (zweite Achse)"}]),h.text("color","\u{1F3A8} Farbe (optional, z.B. #FF9F5A)")],oe=class extends L{render(){return c`${this.form(On)}
      ${this.list({key:"sensors",rowSchema:Bn,title:"\u{1F4C9} Serien",addLabel:"Sensor hinzuf\xFCgen",newItem:()=>({entity:""})})}
      ${this.styleSection()}
      <div class="hint">Mehrere Serien werden in ein Diagramm gezeichnet (z.B. Temperatur + Luftfeuchte).
        Stell eine Serie auf <b>Achse: Rechts</b>, wenn sie eine eigene Skala braucht (z.B. Temp links \u00b0C, Feuchte rechts %).
        <b>Farbe</b> als Hex-Wert; ohne Angabe automatisch.</div>`}};customElements.define("growctrl-history-editor",oe);var je=["#FFB98A","#7CC8F0","#7BE8A8","#C3ABF5"],In=(o,e,t)=>Array.from({length:48},(n,i)=>+(o+e*Math.sin(i/47*Math.PI*2+t)).toFixed(1)),le=class extends A{constructor(){super(...arguments);this._hist={};this._hidden=new Set}static{this.styles=P}static{this.properties={...A.properties,_hist:{state:!0},_hidden:{state:!0}}}_toggle(t){let n=new Set(this._hidden);n.has(t)?n.delete(t):n.add(t),this._hidden=n}validateConfig(t){if(!Array.isArray(t.sensors)||!t.sensors.length)throw new Error("growctrl-history-card: 'sensors' (min. 1 Eintrag) ist Pflicht.")}static getConfigElement(){return document.createElement("growctrl-history-editor")}static getStubConfig(){return{hours:24,sensors:[{entity:"sensor.demo_temp",name:"Temperatur"},{entity:"sensor.demo_hum",name:"Feuchte"}]}}connectedCallback(){super.connectedCallback(),this._load(),this._timer=window.setInterval(()=>this._load(),5*6e4)}disconnectedCallback(){super.disconnectedCallback(),this._timer&&clearInterval(this._timer)}async _load(){if(!this.hass){setTimeout(()=>this._load(),1e3);return}let t=this._config,n={};for(let i of t.sensors)n[i.entity]=await O(this.hass,i.entity,t.hours??24);this._hist=n}render(){let t=this._config;if(!this.hass)return u;let n=t.sensors.map((a,l)=>({entity:a.entity,data:this._hist[a.entity]?.length?this._hist[a.entity]:this.hass.states[a.entity]?[]:In(l===0?22:58,l===0?3:6,l),color:a.color??je[l%je.length],name:a.name??this.friendly(a.entity),axis:a.axis})),i=n.filter(a=>!this._hidden.has(a.entity)),s=i.length===1,r=i.map(a=>({data:a.data,color:a.color,name:a.name,axis:a.axis,fill:s}));return c`<div class="card ${t.style?.glass?"glass":""}" style=${T(t.style)}>
      <div class="hd">
        <div class="ttl grow">${t.title??this.t("Verlauf")}</div>
        <button class="gc icbtn" style="width:auto; padding:0 13px; font:800 11px var(--f-num)">${t.hours??24}h</button>
      </div>
      ${H(r,{w:this.chartW(),h:t.height??120,grid:3,hours:t.hours??24})}
      <div class="legend">
        ${n.map(a=>{let l=this._hidden.has(a.entity);return c`<button @click=${()=>this._toggle(a.entity)}
            title=${this.t("Serie ein-/ausblenden")}
            style="background:none;border:0;padding:0;cursor:pointer;display:inline-flex;align-items:center;gap:5px;
                   font-size:10px;color:rgba(255,255,255,.6);opacity:${l?".4":"1"}">
            <i style="width:10px;height:3px;border-radius:2px;background:${a.color};display:inline-block;${l?"filter:grayscale(1)":""}"></i>${a.name} · ${E(this.st(a.entity))??"--"} ${this.unit(a.entity)}</button>`})}
      </div>
    </div>`}};customElements.define("growctrl-history-card",le);var Hn=[h.text("title","\u{1F3F7}\uFE0F Titel"),h.entity("entity","\u{1F4C8} Sensor (Pflicht)","sensor"),h.text("name","\u270F\uFE0F Anzeigename (optional)"),h.num("min","Sollbereich Min"),h.num("max","Sollbereich Max"),h.num("decimals","\u{1F522} Nachkommastellen",0,4),h.num("hours","\u23F1\uFE0F Chart-Zeitraum (h)",1,168),h.num("height","\u{1F4CF} Diagrammh\xF6he (px)",80,300)],ce=class extends L{render(){return c`${this.form(Hn)}${this.styleSection()}
      <div class="hint">Zeigt einen Messwert gro\u00df mit Sollbereich und Verlauf. Ideal f\u00fcr <b>EC</b> oder
        <b>pH</b>. Liegt der Wert au\u00dferhalb von Min/Max, f\u00e4rbt sich die Anzeige als Warnung.</div>`}};customElements.define("growctrl-metric-editor",ce);var pe=class extends A{constructor(){super(...arguments);this._hist=[]}static{this.styles=P}static{this.properties={...A.properties,_hist:{state:!0}}}validateConfig(t){if(!t.entity)throw new Error("growctrl-metric-card: 'entity' ist Pflicht.")}static getConfigElement(){return document.createElement("growctrl-metric-editor")}static getStubConfig(){return{entity:"sensor.gc_slot1_ec1",name:"EC",min:1.2,max:2.2}}connectedCallback(){super.connectedCallback(),this._load(),this._timer=window.setInterval(()=>this._load(),5*6e4)}disconnectedCallback(){super.disconnectedCallback(),this._timer&&clearInterval(this._timer)}async _load(){if(!this.hass){setTimeout(()=>this._load(),1e3);return}let t=this._config;this._hist=await O(this.hass,t.entity,t.hours??24)}render(){let t=this._config;if(!this.hass)return u;let n=E(this.st(t.entity))??(this.hass.states[t.entity]?null:1.84),i=n!==null&&t.min!==void 0&&n<t.min,s=n!==null&&t.max!==void 0&&n>t.max,r=i||s,a=n===null?"var(--tx-3)":r?m.crit:m.ok,l=t.decimals??2,p=t.min!==void 0||t.max!==void 0;return c`<div class="card ${t.style?.glass?"glass":""}" data-level=${r?"warning":"ok"} style=${T(t.style)}>
      <div class="hd">
        <div class="grow" style="min-width:0">
          <span class="mlbl">${t.name??this.friendly(t.entity)}</span>
          <button class="gc" style="display:block; margin-top:4px" @click=${()=>this.moreInfo(t.entity)}>
            <span style="font:700 34px/1 var(--f-num); letter-spacing:-1.5px; color:${a}; font-variant-numeric:tabular-nums">
              ${n!==null?n.toFixed(l):"--"}</span>
            <span style="font:600 14px var(--f-num); color:var(--tx-2); margin-left:2px">${this.unit(t.entity)}</span>
          </button>
        </div>
        ${p?c`<div style="text-align:right; flex-shrink:0">
          <span class="mlbl">Sollbereich</span>
          <div style="font:700 13px var(--f-num); color:${r?m.crit:"var(--acc)"}; margin-top:3px">${t.min??"\u2013"} – ${t.max??"\u2013"}</div>
          ${r?c`<div style="font:900 10px var(--f-ui); color:${m.crit}; margin-top:2px">${i?"\u25BC ZU NIEDRIG":"\u25B2 ZU HOCH"}</div>`:u}
        </div>`:u}
      </div>
      <div style="margin-top:6px">
        ${H([{data:this._hist,color:r?m.crit:m.ok,fill:!0}],{w:this.chartW(),h:t.height??104,band:{min:t.min,max:t.max},grid:3})}
      </div>
    </div>`}};customElements.define("growctrl-metric-card",pe);var Nn=[h.text("title","\u{1F3F7}\uFE0F Titel"),h.num("columns","\u25A6 Spalten",1,4)],Dn=[h.text("label","\u270F\uFE0F Beschriftung"),h.text("icon","\u{1F3A8} Icon (z.B. mdi:lightbulb-off)"),h.text("service","\u26A1 Service (z.B. light.turn_off)"),{name:"data",label:"\u{1F4E6} Service-Daten (optional, YAML/JSON)",selector:{object:{}}},h.bool("confirm","\u2705 Vor dem Ausf\xFChren best\xE4tigen")],de=class extends L{render(){return c`${this.form(Nn)}
      ${this.list({key:"buttons",rowSchema:Dn,title:"\u26A1 Aktionen (Buttons)",addLabel:"Aktion hinzuf\xFCgen",newItem:()=>({label:"",service:""})})}
      ${this.styleSection()}
      <div class="hint">Jeder Button ruft einen <b>Service</b> auf. Beispiele:
        <b>light.turn_off</b> mit Daten <code>{ entity_id: [light.zelt1, light.zelt2] }</code> (alle Lichter aus),
        <b>growctrl.export_config</b> (Konfig-Backup) oder ein eigenes <b>script.\u2026</b>.
        Mit Best\u00e4tigung wird vor dem Ausf\u00fchren nachgefragt.</div>`}};customElements.define("growctrl-actions-editor",de);var ue=class extends A{static{this.styles=P}validateConfig(e){if(!Array.isArray(e.buttons)||!e.buttons.length)throw new Error("growctrl-actions-card: 'buttons' (min. 1 Eintrag) ist Pflicht.")}static getConfigElement(){return document.createElement("growctrl-actions-editor")}static getStubConfig(){return{title:"Schnellaktionen",columns:2,buttons:[{label:"Alle Lichter aus",icon:"mdi:lightbulb-off",service:"light.turn_off",confirm:!0},{label:"Konfig-Backup",icon:"mdi:content-save-cog",service:"growctrl.export_config"}]}}run(e){let[t,n]=(e.service??"").split(".");!t||!n||this.hass.callService(t,n,e.data&&typeof e.data=="object"?e.data:{})}tap(e){e.confirm?this._confirm={text:`${e.label}?`,action:()=>this.run(e)}:this.run(e)}render(){let e=this._config;if(!this.hass)return u;let t=e.columns??2;return c`<div class="card ${e.style?.glass?"glass":""}" style="${T(e.style)};position:relative">
      ${e.title?c`<div class="hd"><div class="ttl">${e.title}</div></div>`:u}
      <div class="acts" style="grid-template-columns:repeat(${t},minmax(0,1fr))">
        ${e.buttons.map(n=>c`<button class="gc act" style="position:relative"
            title=${n.confirm?"Fragt vor dem Ausf\xFChren nach":n.label}
            @click=${()=>this.tap(n)}>
          ${n.confirm?c`<ha-icon icon="mdi:lock" style="position:absolute;top:6px;right:6px;--mdc-icon-size:12px;color:var(--tx-3)"></ha-icon>`:u}
          <ha-icon class="aic" icon="${n.icon||"mdi:flash"}" style="--mdc-icon-size:18px"></ha-icon>
          <span class="anm">${n.label}</span>
        </button>`)}
      </div>
      ${this.renderConfirm()}
    </div>`}};customElements.define("growctrl-actions-card",ue);var Vn="4.10.0",Zn=[{type:"growctrl-tent-card",name:"GROWCTRL Tent",description:"Zelt-Hero: Klima-KPIs, VPD-Skala, Status-Ampel"},{type:"growctrl-station-card",name:"GROWCTRL Station",description:"Station: Licht-/Pumpenbalken, Stage, Auto, Konfiguration"},{type:"growctrl-controls-card",name:"GROWCTRL Controls",description:"Aktoren-Raster mit Gruppen und Bestaetigung"},{type:"growctrl-sensors-card",name:"GROWCTRL Sensors",description:"Sensor-KPIs mit Sollbereich-Ampel"},{type:"growctrl-status-card",name:"GROWCTRL Status",description:"Ereignisprotokoll der Integration mit Schweregrad-Ampel"},{type:"growctrl-hero-card",name:"GROWCTRL Hero",description:"Globale Steuerung, Klima-KPIs, VPD-Chart, Informationssystem"},{type:"growctrl-checkup-card",name:"GROWCTRL Checkup",description:"Checkup-Matrix: Licht/Pumpe/Klima/Status je Station"},{type:"growctrl-tank-card",name:"GROWCTRL Tank",description:"DWC-Fuellstand (vertikaler Tank) mit Warnstufe"},{type:"growctrl-history-card",name:"GROWCTRL History",description:"24h-Diagramm (z.B. Temperatur + Luftfeuchte)"},{type:"growctrl-metric-card",name:"GROWCTRL Metric",description:"EC/pH gross mit Chart und Sollbereich"},{type:"growctrl-actions-card",name:"GROWCTRL Actions",description:"Schnell-Aktionen: konfigurierbare Buttons, rufen Services auf"}];window.customCards=window.customCards??[];window.__gcEpoch=Oe();Zn.forEach(o=>window.customCards.push({...o,preview:!0,documentationURL:"https://github.com/MrDarkvoid/growctrl"}));console.info(`%c GROWCTRL Cards %c v${Vn} `,"background:#1D9E75;color:#fff;font-weight:700","background:#0F6E56;color:#fff");
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
