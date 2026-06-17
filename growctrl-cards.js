var gt=globalThis,ft=gt.ShadowRoot&&(gt.ShadyCSS===void 0||gt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,kt=Symbol(),fe=new WeakMap,ot=class{constructor(n,t,e){if(this._$cssResult$=!0,e!==kt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=n,this.t=t}get styleSheet(){let n=this.o,t=this.t;if(ft&&n===void 0){let e=t!==void 0&&t.length===1;e&&(n=fe.get(t)),n===void 0&&((this.o=n=new CSSStyleSheet).replaceSync(this.cssText),e&&fe.set(t,n))}return n}toString(){return this.cssText}},be=l=>new ot(typeof l=="string"?l:l+"",void 0,kt),lt=(l,...n)=>{let t=l.length===1?l[0]:n.reduce((e,i,s)=>e+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+l[s+1],l[0]);return new ot(t,l,kt)},xe=(l,n)=>{if(ft)l.adoptedStyleSheets=n.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of n){let e=document.createElement("style"),i=gt.litNonce;i!==void 0&&e.setAttribute("nonce",i),e.textContent=t.cssText,l.appendChild(e)}},St=ft?l=>l:l=>l instanceof CSSStyleSheet?(n=>{let t="";for(let e of n.cssRules)t+=e.cssText;return be(t)})(l):l;var{is:Je,defineProperty:tn,getOwnPropertyDescriptor:en,getOwnPropertyNames:nn,getOwnPropertySymbols:sn,getPrototypeOf:rn}=Object,bt=globalThis,ve=bt.trustedTypes,an=ve?ve.emptyScript:"",on=bt.reactiveElementPolyfillSupport,ct=(l,n)=>l,At={toAttribute(l,n){switch(n){case Boolean:l=l?an:null;break;case Object:case Array:l=l==null?l:JSON.stringify(l)}return l},fromAttribute(l,n){let t=l;switch(n){case Boolean:t=l!==null;break;case Number:t=l===null?null:Number(l);break;case Object:case Array:try{t=JSON.parse(l)}catch{t=null}}return t}},$e=(l,n)=>!Je(l,n),ye={attribute:!0,type:String,converter:At,reflect:!1,useDefault:!1,hasChanged:$e};Symbol.metadata??=Symbol("metadata"),bt.litPropertyMetadata??=new WeakMap;var V=class extends HTMLElement{static addInitializer(n){this._$Ei(),(this.l??=[]).push(n)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(n,t=ye){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(n)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(n,t),!t.noAccessor){let e=Symbol(),i=this.getPropertyDescriptor(n,e,t);i!==void 0&&tn(this.prototype,n,i)}}static getPropertyDescriptor(n,t,e){let{get:i,set:s}=en(this.prototype,n)??{get(){return this[t]},set(r){this[t]=r}};return{get:i,set(r){let a=i?.call(this);s?.call(this,r),this.requestUpdate(n,a,e)},configurable:!0,enumerable:!0}}static getPropertyOptions(n){return this.elementProperties.get(n)??ye}static _$Ei(){if(this.hasOwnProperty(ct("elementProperties")))return;let n=rn(this);n.finalize(),n.l!==void 0&&(this.l=[...n.l]),this.elementProperties=new Map(n.elementProperties)}static finalize(){if(this.hasOwnProperty(ct("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ct("properties"))){let t=this.properties,e=[...nn(t),...sn(t)];for(let i of e)this.createProperty(i,t[i])}let n=this[Symbol.metadata];if(n!==null){let t=litPropertyMetadata.get(n);if(t!==void 0)for(let[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(let[t,e]of this.elementProperties){let i=this._$Eu(t,e);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(n){let t=[];if(Array.isArray(n)){let e=new Set(n.flat(1/0).reverse());for(let i of e)t.unshift(St(i))}else n!==void 0&&t.push(St(n));return t}static _$Eu(n,t){let e=t.attribute;return e===!1?void 0:typeof e=="string"?e:typeof n=="string"?n.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(n=>n(this))}addController(n){(this._$EO??=new Set).add(n),this.renderRoot!==void 0&&this.isConnected&&n.hostConnected?.()}removeController(n){this._$EO?.delete(n)}_$E_(){let n=new Map,t=this.constructor.elementProperties;for(let e of t.keys())this.hasOwnProperty(e)&&(n.set(e,this[e]),delete this[e]);n.size>0&&(this._$Ep=n)}createRenderRoot(){let n=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return xe(n,this.constructor.elementStyles),n}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(n=>n.hostConnected?.())}enableUpdating(n){}disconnectedCallback(){this._$EO?.forEach(n=>n.hostDisconnected?.())}attributeChangedCallback(n,t,e){this._$AK(n,e)}_$ET(n,t){let e=this.constructor.elementProperties.get(n),i=this.constructor._$Eu(n,e);if(i!==void 0&&e.reflect===!0){let s=(e.converter?.toAttribute!==void 0?e.converter:At).toAttribute(t,e.type);this._$Em=n,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(n,t){let e=this.constructor,i=e._$Eh.get(n);if(i!==void 0&&this._$Em!==i){let s=e.getPropertyOptions(i),r=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:At;this._$Em=i;let a=r.fromAttribute(t,s.type);this[i]=a??this._$Ej?.get(i)??a,this._$Em=null}}requestUpdate(n,t,e,i=!1,s){if(n!==void 0){let r=this.constructor;if(i===!1&&(s=this[n]),e??=r.getPropertyOptions(n),!((e.hasChanged??$e)(s,t)||e.useDefault&&e.reflect&&s===this._$Ej?.get(n)&&!this.hasAttribute(r._$Eu(n,e))))return;this.C(n,t,e)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(n,t,{useDefault:e,reflect:i,wrapped:s},r){e&&!(this._$Ej??=new Map).has(n)&&(this._$Ej.set(n,r??t??this[n]),s!==!0||r!==void 0)||(this._$AL.has(n)||(this.hasUpdated||e||(t=void 0),this._$AL.set(n,t)),i===!0&&this._$Em!==n&&(this._$Eq??=new Set).add(n))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let n=this.scheduleUpdate();return n!=null&&await n,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,s]of this._$Ep)this[i]=s;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[i,s]of e){let{wrapped:r}=s,a=this[i];r!==!0||this._$AL.has(i)||a===void 0||this.C(i,void 0,s,a)}}let n=!1,t=this._$AL;try{n=this.shouldUpdate(t),n?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(e){throw n=!1,this._$EM(),e}n&&this._$AE(t)}willUpdate(n){}_$AE(n){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(n)),this.updated(n)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(n){return!0}update(n){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(n){}firstUpdated(n){}};V.elementStyles=[],V.shadowRootOptions={mode:"open"},V[ct("elementProperties")]=new Map,V[ct("finalized")]=new Map,on?.({ReactiveElement:V}),(bt.reactiveElementVersions??=[]).push("2.1.2");var Ft=globalThis,we=l=>l,xt=Ft.trustedTypes,_e=xt?xt.createPolicy("lit-html",{createHTML:l=>l}):void 0,ze="$lit$",G=`lit$${Math.random().toFixed(9).slice(2)}$`,Le="?"+G,ln=`<${Le}>`,Y=document,dt=()=>Y.createComment(""),ut=l=>l===null||typeof l!="object"&&typeof l!="function",Mt=Array.isArray,cn=l=>Mt(l)||typeof l?.[Symbol.iterator]=="function",Ct=`[ 	
\f\r]`,pt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ke=/-->/g,Se=/>/g,Q=RegExp(`>|${Ct}(?:([^\\s"'>=/]+)(${Ct}*=${Ct}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ae=/'/g,Ce=/"/g,Pe=/^(?:script|style|textarea|title)$/i,Rt=l=>(n,...t)=>({_$litType$:l,strings:n,values:t}),o=Rt(1),tt=Rt(2),jn=Rt(3),J=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),Ee=new WeakMap,X=Y.createTreeWalker(Y,129);function Te(l,n){if(!Mt(l)||!l.hasOwnProperty("raw"))throw Error("invalid template strings array");return _e!==void 0?_e.createHTML(n):n}var pn=(l,n)=>{let t=l.length-1,e=[],i,s=n===2?"<svg>":n===3?"<math>":"",r=pt;for(let a=0;a<t;a++){let c=l[a],p,d,g=-1,f=0;for(;f<c.length&&(r.lastIndex=f,d=r.exec(c),d!==null);)f=r.lastIndex,r===pt?d[1]==="!--"?r=ke:d[1]!==void 0?r=Se:d[2]!==void 0?(Pe.test(d[2])&&(i=RegExp("</"+d[2],"g")),r=Q):d[3]!==void 0&&(r=Q):r===Q?d[0]===">"?(r=i??pt,g=-1):d[1]===void 0?g=-2:(g=r.lastIndex-d[2].length,p=d[1],r=d[3]===void 0?Q:d[3]==='"'?Ce:Ae):r===Ce||r===Ae?r=Q:r===ke||r===Se?r=pt:(r=Q,i=void 0);let x=r===Q&&l[a+1].startsWith("/>")?" ":"";s+=r===pt?c+ln:g>=0?(e.push(p),c.slice(0,g)+ze+c.slice(g)+G+x):c+G+(g===-2?a:x)}return[Te(l,s+(l[t]||"<?>")+(n===2?"</svg>":n===3?"</math>":"")),e]},ht=class l{constructor({strings:n,_$litType$:t},e){let i;this.parts=[];let s=0,r=0,a=n.length-1,c=this.parts,[p,d]=pn(n,t);if(this.el=l.createElement(p,e),X.currentNode=this.el.content,t===2||t===3){let g=this.el.content.firstChild;g.replaceWith(...g.childNodes)}for(;(i=X.nextNode())!==null&&c.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(let g of i.getAttributeNames())if(g.endsWith(ze)){let f=d[r++],x=i.getAttribute(g).split(G),y=/([.?@])?(.*)/.exec(f);c.push({type:1,index:s,name:y[2],strings:x,ctor:y[1]==="."?zt:y[1]==="?"?Lt:y[1]==="@"?Pt:it}),i.removeAttribute(g)}else g.startsWith(G)&&(c.push({type:6,index:s}),i.removeAttribute(g));if(Pe.test(i.tagName)){let g=i.textContent.split(G),f=g.length-1;if(f>0){i.textContent=xt?xt.emptyScript:"";for(let x=0;x<f;x++)i.append(g[x],dt()),X.nextNode(),c.push({type:2,index:++s});i.append(g[f],dt())}}}else if(i.nodeType===8)if(i.data===Le)c.push({type:2,index:s});else{let g=-1;for(;(g=i.data.indexOf(G,g+1))!==-1;)c.push({type:7,index:s}),g+=G.length-1}s++}}static createElement(n,t){let e=Y.createElement("template");return e.innerHTML=n,e}};function nt(l,n,t=l,e){if(n===J)return n;let i=e!==void 0?t._$Co?.[e]:t._$Cl,s=ut(n)?void 0:n._$litDirective$;return i?.constructor!==s&&(i?._$AO?.(!1),s===void 0?i=void 0:(i=new s(l),i._$AT(l,t,e)),e!==void 0?(t._$Co??=[])[e]=i:t._$Cl=i),i!==void 0&&(n=nt(l,i._$AS(l,n.values),i,e)),n}var Et=class{constructor(n,t){this._$AV=[],this._$AN=void 0,this._$AD=n,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(n){let{el:{content:t},parts:e}=this._$AD,i=(n?.creationScope??Y).importNode(t,!0);X.currentNode=i;let s=X.nextNode(),r=0,a=0,c=e[0];for(;c!==void 0;){if(r===c.index){let p;c.type===2?p=new mt(s,s.nextSibling,this,n):c.type===1?p=new c.ctor(s,c.name,c.strings,this,n):c.type===6&&(p=new Tt(s,this,n)),this._$AV.push(p),c=e[++a]}r!==c?.index&&(s=X.nextNode(),r++)}return X.currentNode=Y,i}p(n){let t=0;for(let e of this._$AV)e!==void 0&&(e.strings!==void 0?(e._$AI(n,e,t),t+=e.strings.length-2):e._$AI(n[t])),t++}},mt=class l{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(n,t,e,i){this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=n,this._$AB=t,this._$AM=e,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let n=this._$AA.parentNode,t=this._$AM;return t!==void 0&&n?.nodeType===11&&(n=t.parentNode),n}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(n,t=this){n=nt(this,n,t),ut(n)?n===u||n==null||n===""?(this._$AH!==u&&this._$AR(),this._$AH=u):n!==this._$AH&&n!==J&&this._(n):n._$litType$!==void 0?this.$(n):n.nodeType!==void 0?this.T(n):cn(n)?this.k(n):this._(n)}O(n){return this._$AA.parentNode.insertBefore(n,this._$AB)}T(n){this._$AH!==n&&(this._$AR(),this._$AH=this.O(n))}_(n){this._$AH!==u&&ut(this._$AH)?this._$AA.nextSibling.data=n:this.T(Y.createTextNode(n)),this._$AH=n}$(n){let{values:t,_$litType$:e}=n,i=typeof e=="number"?this._$AC(n):(e.el===void 0&&(e.el=ht.createElement(Te(e.h,e.h[0]),this.options)),e);if(this._$AH?._$AD===i)this._$AH.p(t);else{let s=new Et(i,this),r=s.u(this.options);s.p(t),this.T(r),this._$AH=s}}_$AC(n){let t=Ee.get(n.strings);return t===void 0&&Ee.set(n.strings,t=new ht(n)),t}k(n){Mt(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,e,i=0;for(let s of n)i===t.length?t.push(e=new l(this.O(dt()),this.O(dt()),this,this.options)):e=t[i],e._$AI(s),i++;i<t.length&&(this._$AR(e&&e._$AB.nextSibling,i),t.length=i)}_$AR(n=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);n!==this._$AB;){let e=we(n).nextSibling;we(n).remove(),n=e}}setConnected(n){this._$AM===void 0&&(this._$Cv=n,this._$AP?.(n))}},it=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(n,t,e,i,s){this.type=1,this._$AH=u,this._$AN=void 0,this.element=n,this.name=t,this._$AM=i,this.options=s,e.length>2||e[0]!==""||e[1]!==""?(this._$AH=Array(e.length-1).fill(new String),this.strings=e):this._$AH=u}_$AI(n,t=this,e,i){let s=this.strings,r=!1;if(s===void 0)n=nt(this,n,t,0),r=!ut(n)||n!==this._$AH&&n!==J,r&&(this._$AH=n);else{let a=n,c,p;for(n=s[0],c=0;c<s.length-1;c++)p=nt(this,a[e+c],t,c),p===J&&(p=this._$AH[c]),r||=!ut(p)||p!==this._$AH[c],p===u?n=u:n!==u&&(n+=(p??"")+s[c+1]),this._$AH[c]=p}r&&!i&&this.j(n)}j(n){n===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,n??"")}},zt=class extends it{constructor(){super(...arguments),this.type=3}j(n){this.element[this.name]=n===u?void 0:n}},Lt=class extends it{constructor(){super(...arguments),this.type=4}j(n){this.element.toggleAttribute(this.name,!!n&&n!==u)}},Pt=class extends it{constructor(n,t,e,i,s){super(n,t,e,i,s),this.type=5}_$AI(n,t=this){if((n=nt(this,n,t,0)??u)===J)return;let e=this._$AH,i=n===u&&e!==u||n.capture!==e.capture||n.once!==e.once||n.passive!==e.passive,s=n!==u&&(e===u||i);i&&this.element.removeEventListener(this.name,this,e),s&&this.element.addEventListener(this.name,this,n),this._$AH=n}handleEvent(n){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,n):this._$AH.handleEvent(n)}},Tt=class{constructor(n,t,e){this.element=n,this.type=6,this._$AN=void 0,this._$AM=t,this.options=e}get _$AU(){return this._$AM._$AU}_$AI(n){nt(this,n)}};var dn=Ft.litHtmlPolyfillSupport;dn?.(ht,mt),(Ft.litHtmlVersions??=[]).push("3.3.3");var Fe=(l,n,t)=>{let e=t?.renderBefore??n,i=e._$litPart$;if(i===void 0){let s=t?.renderBefore??null;e._$litPart$=i=new mt(n.insertBefore(dt(),s),s,void 0,t??{})}return i._$AI(l),i};var Ot=globalThis,I=class extends V{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let n=super.createRenderRoot();return this.renderOptions.renderBefore??=n.firstChild,n}update(n){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(n),this._$Do=Fe(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return J}};I._$litElement$=!0,I.finalized=!0,Ot.litElementHydrateSupport?.({LitElement:I});var un=Ot.litElementPolyfillSupport;un?.({LitElement:I});(Ot.litElementVersions??=[]).push("4.2.2");var m={label:"rgba(242,247,243,0.56)",value:"rgba(242,247,243,0.97)",muted:"rgba(242,247,243,0.46)",logLabel:"rgba(242,247,243,0.72)",logText:"rgba(242,247,243,0.90)",ok:"#7BE8A8",warn:"#FFCE7A",crit:"#FF9D9D",info:"#9AC8FF",water:"#7CC8F0",light:"#FFDC8A",temp:"#FFB98A",heat:"#FFB35C",tileBg:"rgba(255,255,255,0.04)",rowBg:"rgba(255,255,255,0.035)"},Bt={critical:"rgba(255,157,157,.14)",warning:"rgba(255,206,122,.12)",info:"rgba(154,200,255,.10)",ok:m.rowBg,none:"rgba(255,255,255,.022)"},Me={critical:m.crit,warning:m.warn,info:m.info,ok:m.logText,none:"rgba(242,247,243,.36)"},It={Aus:{bg:"rgba(150,170,160,0.12)",color:"#8EA89C"},Seedling:{bg:"rgba(154,200,255,0.16)",color:"#9AC8FF"},Veg:{bg:"rgba(123,232,168,0.16)",color:"#7BE8A8"},Bloom:{bg:"rgba(255,185,138,0.18)",color:"#FFB98A"},Flush:{bg:"rgba(195,171,245,0.18)",color:"#C3ABF5"},Trocknung:{bg:"rgba(211,168,120,0.18)",color:"#D3A878"}},Ht={soft_garden:{label:"Soft Garden (Standard)",top:"#202C25",card:"#1B2620",card2:"#222F28",card3:"#17211B",line:"#2E3D34",lineSoft:"#27342C",tx:"#F2F7F3",tx2:"#B9CCC0",tx3:"#85998C"},graphite:{label:"Graphite",top:"#20242A",card:"#191C21",card2:"#232830",card3:"#15181C",line:"#313842",lineSoft:"#2A3038",tx:"#F2F4F7",tx2:"#C2C8D0",tx3:"#8A919B"},midnight:{label:"Midnight",top:"#1A2233",card:"#141A28",card2:"#1E2740",card3:"#111626",line:"#2B3958",lineSoft:"#25304A",tx:"#EFF3FB",tx2:"#BCC8DE",tx3:"#8492AC"},plum:{label:"Plum",top:"#241F2E",card:"#1B1726",card2:"#261F36",card3:"#16121F",line:"#382E4A",lineSoft:"#2F273E",tx:"#F4F0FA",tx2:"#C9C0D8",tx3:"#978AA8"},terra:{label:"Terra",top:"#2A2420",card:"#201A16",card2:"#2C2420",card3:"#1A1410",line:"#3D332B",lineSoft:"#332A24",tx:"#F7F3EF",tx2:"#D0C8C0",tx3:"#9B918A"},slate_teal:{label:"Slate Teal",top:"#1C2A2A",card:"#142020",card2:"#1E2E2E",card3:"#111A1A",line:"#2B4040",lineSoft:"#243434",tx:"#EFF7F6",tx2:"#BCD2D0",tx3:"#84A09E"},rose_noir:{label:"Ros\xE9 Noir",top:"#2A1F24",card:"#201619",card2:"#2C1F25",card3:"#1A1216",line:"#3D2B33",lineSoft:"#33242B",tx:"#FAF0F3",tx2:"#D8C0C8",tx3:"#A88A95"},ink:{label:"Ink",top:"#1A1C1E",card:"#131517",card2:"#1D2023",card3:"#0F1113",line:"#2C3137",lineSoft:"#252A2F",tx:"#F4F6F8",tx2:"#C4CACF",tx3:"#8B9298"}},hn=l=>{if(!l||l==="soft_garden")return"";let n=Ht[l];return n?[`--gc-bg:linear-gradient(180deg, ${n.top}, ${n.card} 30%)`,`--card:${n.card}`,`--card-2:${n.card2}`,`--card-3:${n.card3}`,`--line:${n.line}`,`--line-soft:${n.lineSoft}`,`--tx:${n.tx}`,`--tx-2:${n.tx2}`,`--tx-3:${n.tx3}`].join(";"):""},P=l=>{let n=[],t=hn(l?.palette);if(t&&n.push(t),l?.background){let e=l.background.trim(),i=e.includes(",")&&!/^(linear|radial|conic|rgb|hsl)/i.test(e)?`linear-gradient(160deg, ${e})`:e;n.push(`--gc-bg:${i}`)}return l?.opacity!==void 0&&n.push(`--gc-opacity:${l.opacity}`),l?.accent&&n.push(`--gc-accent:${l.accent}`),l?.radius!==void 0&&n.push(`--gc-radius:${l.radius}px`),n.join(";")},st=l=>l.includes("critical")?"critical":l.includes("warning")?"warning":l.includes("info")?"info":"ok",Z=l=>({ok:"ok",info:"info",warning:"warn",critical:"crit",none:"none"})[l]??"ok",T=lt`
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
  .hd{display:flex; align-items:flex-start; gap:12px; margin-bottom:16px}
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
  .act{background:var(--card-2); border:1px solid transparent; border-radius:var(--r-s); cursor:pointer; padding:8px 4px; text-align:center; color:var(--tx-3); min-height:calc(62px * var(--gc-sc,1))}
  .act:hover{border-color:var(--tx-3)}
  .act .aic{font-size:calc(18px * var(--gc-sc,1)); display:block; margin:0 auto 4px}
  .act .anm{font:800 calc(10.5px * var(--gc-sc,1)) var(--f-ui); color:var(--tx-2); display:block; line-height:1.15}
  .act .ast{font:700 calc(9px * var(--gc-sc,1)) var(--f-num); letter-spacing:.8px; margin-top:2px; display:block}
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
`,li={ok:{bg:"rgba(123,232,168,.14)",color:m.ok,label:"Alles OK"},info:{bg:"rgba(154,200,255,.14)",color:m.info,label:"Info"},warning:{bg:"rgba(255,206,122,.14)",color:m.warn,label:"Warnung"},critical:{bg:"rgba(255,157,157,.16)",color:m.crit,label:"Kritisch"},none:{bg:"rgba(133,153,140,.14)",color:"#85998C",label:"Inaktiv"}};var mn="4d72-4461726b-766f6964",Oe=()=>mn,Re,vt=null;function yt(l){if(l?.states===Re&&vt)return vt;let n=new Map,t=new Set,e={};for(let[i,s]of Object.entries(l?.states??{})){let r=s?.attributes;if(!r?.growctrl_role||!r?.growctrl_tent)continue;let a=String(r.growctrl_tent),c=String(r.growctrl_station??"zelt");n.set(`${a}::${c}::${r.growctrl_role}`,i),c==="zelt"?t.add(a):(e[a]??=new Set).add(c)}return Re=l?.states,vt={tents:[...t].sort(),stations:Object.fromEntries(Object.entries(e).map(([i,s])=>[i,[...s].sort()])),byRole:n},vt}var R=(l,n,t,e)=>yt(l).byRole.get(`${n}::${t}::${e}`);var L=class extends I{constructor(){super(...arguments);this._config={};this._label=t=>t.label??t.name}static{this.properties={hass:{attribute:!1},_config:{state:!0}}}static{this.styles=lt`
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
  `}setConfig(t){this._config={...t}}_fire(t){this._config=t,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:t},bubbles:!0,composed:!0}))}form(t){let e={...this._config};for(let s of t)s?._default!==void 0&&e[s.name]===void 0&&(e[s.name]=s._default);let i=t.map(s=>{let r={...s};return delete r._default,r});return o`<ha-form .hass=${this.hass} .data=${e} .schema=${i}
      .computeLabel=${this._label}
      @value-changed=${s=>this._fire({...this._config,...s.detail.value})}></ha-form>`}list(t){let e=this._config[t.key]??[],i=s=>this._fire({...this._config,[t.key]:s});return o`
      ${t.title?o`<div class="lt">${t.title}</div>`:u}
      ${e.map((s,r)=>{let a=c=>{let p=[...e];p[r]=c,i(p)};return o`<div class="row ${t.child?"col":""}">
          <div class="rowmain">
            <ha-form .hass=${this.hass} .data=${s} .schema=${t.rowSchema}
              .computeLabel=${this._label}
              @value-changed=${c=>a({...s,...c.detail.value})}></ha-form>
            <button class="del" title="Entfernen"
              @click=${()=>i(e.filter((c,p)=>p!==r))}>\u2715</button>
          </div>
          ${t.child?o`<div class="subwrap">${this._subList(s,t.child,a)}</div>`:u}
        </div>`})}
      <button class="add" @click=${()=>i([...e,t.newItem()])}>+ ${t.addLabel}</button>`}_subList(t,e,i){let s=(t[e.key]??[]).map(a=>typeof a=="string"?{entity:a}:a),r=a=>i({...t,[e.key]:a});return o`
      ${e.title?o`<div class="lt sub">${e.title}</div>`:u}
      ${s.map((a,c)=>o`<div class="row sub">
        <ha-form .hass=${this.hass} .data=${a} .schema=${e.rowSchema}
          .computeLabel=${this._label}
          @value-changed=${p=>{let d=[...s];d[c]={...a,...p.detail.value},r(d)}}></ha-form>
        <button class="del" title="Entfernen"
          @click=${()=>r(s.filter((p,d)=>d!==c))}>\u2715</button>
      </div>`)}
      <button class="add" @click=${()=>r([...s,e.newItem()])}>+ ${e.addLabel}</button>`}tentSelect(t="tent",e="Zelt"){let i=yt(this.hass).tents;return{name:t,label:e,selector:{select:{options:i,custom_value:!0,mode:"dropdown"}}}}stationSelect(t,e="station",i="Station"){let s=yt(this.hass),r=t?s.stations[t]??[]:[...new Set(Object.values(s.stations).flat())];return{name:e,label:i,selector:{select:{options:r,custom_value:!0,mode:"dropdown"}}}}styleSection(){let t=this._config.style??{},e=Object.entries(Ht).map(([s,r])=>({value:s,label:r.label})),i=[h.select("palette","\u{1F3A8} Farb-Konzept",e),h.text("accent","Akzentfarbe (Zelt-Farbe, optional)"),h.num("opacity","Deckkraft / Transparenz (0\u20131)",0,1,.05),h.bool("glass","Glas-Effekt (Blur)"),h.num("radius","Eckenradius (px)",0,40),h.text("background","Eigener Hintergrund (\xFCberschreibt Konzept, optional)")];return o`<div class="lt">Stil</div>
      <ha-form .hass=${this.hass} .data=${t} .schema=${i}
        .computeLabel=${s=>s.label??s.name}
        @value-changed=${s=>this._fire({...this._config,style:{...s.detail.value}})}></ha-form>`}},h={text:(l,n)=>({name:l,label:n,selector:{text:{}}}),bool:(l,n,t)=>({name:l,label:n,selector:{boolean:{}},...t!==void 0?{_default:t}:{}}),num:(l,n,t,e,i)=>({name:l,label:n,selector:{number:{min:t,max:e,step:i,mode:"box"}}}),entity:(l,n,t)=>({name:l,label:n,selector:{entity:t?{domain:t}:{}}}),entities:(l,n,t)=>({name:l,label:n,selector:{entity:{multiple:!0,...t?{domain:t}:{}}}}),select:(l,n,t)=>({name:l,label:n,selector:{select:{mode:"dropdown",options:t}}})};var Nt=class extends L{render(){let n=[this.tentSelect("tent","\u{1F3D5}\uFE0F Zelt"),h.text("name","\u270F\uFE0F Anzeigename (optional)"),h.bool("show_chart","\u{1F4C8} VPD-Chart anzeigen",!0),h.num("hours","\u23F1\uFE0F Chart-Zeitraum (h)",1,168)];return o`${this.form(n)}${this.styleSection()}
      <div class="hint">Zeigt Klima-Werte (Temperatur/Feuchte/VPD), die VPD-Zonenskala, Modus (VPD/RH) und
        die <b>Phase</b> als Dropdown. Zelt- und Klima-Schalter steuern die Automatik.</div>`}};customElements.define("growctrl-tent-editor",Nt);function $t(l){if(l==null||isNaN(l))return"\u2013";let n=Math.max(0,Math.round(l)),t=Math.floor(n/60),e=n%60;return t&&e?`${t} h ${e} min`:t?`${t} h`:`${e} min`}function E(l){if(l==null||l==="unknown"||l==="unavailable"||l==="")return null;let n=Number(l);return isNaN(n)?null:n}var Dt=l=>(l?.locale?.language??l?.language??"de").toString().toLowerCase().startsWith("en")?"en":"de",gn={"Alles OK":"All OK",Warnung:"Warning",Kritisch:"Critical",Info:"Info",Inaktiv:"Inactive",Fehler:"Error",Deaktiviert:"Disabled",OK:"OK","Alle Systeme arbeiten normal":"All systems operating normally","Klima-Phase":"Climate phase","Serie ein-/ausblenden":"Toggle series","\xFCber Ziel":"above target","Pumpe gesperrt":"Pump locked","F\xFCllstand zu niedrig \u2013 Trockenlaufschutz":"Level too low \u2013 dry-run protection","Klima-Sensoren eingefroren":"Climate sensors frozen","Werte evtl. veraltet":"Values may be stale",zuletzt:"last",an:"on",aus:"off",Seedling:"Seedling",Veg:"Veg",Bloom:"Bloom",Flush:"Flush",Trocknung:"Drying",Aus:"Off","bis Tag":"until day",Anzucht:"Propagation",Wachstum:"Vegetative",Bl\u00FCte:"Flowering",Ernte:"Harvest",Sp\u00FClen:"Flush",automatisch:"automatic",Auto:"Auto",Zelt:"Tent",Klima:"Climate",Logo:"Logo",Luftfeuchte:"Humidity",Temperatur:"Temperature","zu feucht":"too humid","zu trocken":"too dry",Phase:"Phase",Soll:"Target",Informationssystem:"Information system",Modus:"Mode",Automatik:"Automatic",Einstellungen:"Settings",Keimstart:"Germination","Klima automatisch \u2013 Phase folgt der Pflanzen-Gewichtung":"Climate automatic \u2013 phase follows the plant weighting","Phase folgt der Pflanzen-Gewichtung":"Phase follows the plant weighting",Leuchtphase:"Light phase","Licht AN":"Light ON","Licht an":"Light on","Licht aus":"Light off","Licht ausgeschaltet":"Light switched off",Leistung:"Power","Licht ohne Leistung":"Light without power","Licht-Failsafe":"Light failsafe","Man. \xDCbernahme":"Manual hold","Manueller Eingriff":"Manual override","Marker = Prognose":"Marker = forecast","N\xE4chster Zyklus":"Next cycle","Pumpe aus":"Pump off","Pumpe ausgeschaltet":"Pump switched off","Pumpe gesperrt (F\xFCllstand)":"Pump blocked (level)","Pumpe l\xE4uft":"Pump running",Tank:"Tank",Feuchtigkeit:"Humidity","DLI heute":"DLI today","AUS Bloom":"OFF Bloom","AUS Seed/Veg":"OFF Seed/Veg","Unter Mindeststand":"Below minimum","Wartung (System greift nicht ein)":"Maintenance (system inactive)",verbleibend:"remaining",Zyklus:"Cycle",ideal:"ideal",Min:"Min",von:"of","Zeiten unvollst\xE4ndig":"Times incomplete","Wartung aktiv":"Maintenance active",AN:"ON",AUS:"OFF",Richtwert:"Reference",Prognose:"Forecast",Aktoren:"Actuators",weniger:"less",mehr:"more",Checkup:"Checkup",Stationen:"Stations",Station:"Station",Pflanzen:"Plants","kein Wert":"no value","Automatik AN":"Automatic ON","Automatik AUS (manuell)":"Automatic OFF (manual)","Kein Eingriff":"No override","Klima-Automatik AN":"Climate automatic ON","Klima-Automatik AUS":"Climate automatic OFF","Licht AN ohne Leistung":"Light ON without power","Licht-Failsafe ausgel\xF6st":"Light failsafe tripped","Lichtzeiten unvollst\xE4ndig":"Light times incomplete","Manueller Eingriff aktiv":"Manual override active","Problem erkannt":"Problem detected","Wartungsmodus aktiv":"Maintenance mode active","Zelt aktiv":"Tent active","Zelt deaktiviert":"Tent disabled","Zyklus l\xE4uft":"Cycle running",Pumpe:"Pump",Licht:"Light",Eingriff:"Override",Status:"Status",Aktiv:"Active",Ereignisprotokoll:"Event log","Nur Infos":"Info only","Noch keine Ereignisse":"No events yet",Pflanze:"Plant",Sorte:"Strain",Verlauf:"History","Germination-Heizung":"Germination heating",Ziel:"Target","Heizung heizt":"Heating on","Heizung bereit":"Heating ready","Heizung aus":"Heating off","Heizung ausgeschaltet":"Heating switched off",heizt:"heating",bereit:"ready","Heizung Sensorfehler":"Heating sensor fault","Heizung \xDCbertemperatur":"Heating overtemp","Regelf\xFChler fehlt \u2013 Heizung gesperrt":"Sensor missing \u2013 heating blocked","Not-Aus \u2013 zu hei\xDF":"Emergency off \u2013 too hot",HEIZT:"HEATING",BEREIT:"READY",SENSORFEHLER:"SENSOR FAULT","\xDCBERTEMP.":"OVERTEMP.",Heizung:"Heating",Tage:"days",Tag:"Day",Reichweite:"Range",Wo:"Wk",Woche:"Week","Als erledigt markieren":"Mark as done","Automatik/Zelt aus \u2013 manuell freigeben":"Automatic/tent off \u2013 release manually","Best\xE4tigung vor dem Schalten":"Confirm before switching",Bodenfeuchte:"Soil moisture","Bodentemp.":"Soil temp.","Gesicherter Aktor \u2013 fragt vor dem Schalten nach":"Protected actuator \u2013 asks before switching","Gesperrt \u2013 erst Automatik/Zelt aktivieren":"Locked \u2013 enable automatic/tent first","Heizung gesperrt":"Heater locked","Kamera nicht verf\xFCgbar":"Camera unavailable","Keimdatum l\xF6schen":"Clear germination date","Keimstart zur\xFCcksetzen":"Reset germination",Lichtzeiten:"Light schedule","Live ansehen":"View live",Livestream:"Live stream",Problem:"Problem","Schwellen & Sonstiges":"Thresholds & more",Sensoren:"Sensors","Station aus":"Station off","Station aus \u2013 keine Steuerung, keine Klima-Gewichtung im Zelt.":"Station off \u2013 no control, no climate weighting in the tent.",Steuerung:"Control",Trend:"Trend","Wassertemp.":"Water temp.","Zelt aus \u2013 gestoppt":"Tent off \u2013 stopped",gestoppt:"stopped","im Idealbereich":"in ideal range","knapp daneben":"slightly off","leere Zelle = kein Sensor":"empty cell = no sensor"},Be=(l,n)=>Dt(l)==="en"?gn[n]??n:n;var Ie=new Map;async function O(l,n,t=24,e){let i=e??Math.min(140,Math.max(60,Math.round(t*2.5))),s=`${n}:${t}`,r=Ie.get(s);if(r&&Date.now()-r.t<5*6e4)return r.data;try{let a=new Date(Date.now()-t*36e5).toISOString(),p=((await l.callApi("GET",`history/period/${a}?filter_entity_id=${n}&minimal_response&no_attributes`))?.[0]??[]).map(f=>parseFloat(f.state??f.s)).filter(f=>!isNaN(f)),d=Math.max(1,Math.floor(p.length/i)),g=p.filter((f,x)=>x%d===0);return Ie.set(s,{t:Date.now(),data:g}),g}catch{return r?.data??[]}}var W=30,fn=4,bn=30,et=6,rt=16;function He(l,n,t,e){let i=n??Math.min(...l,e?.min??1/0),s=t??Math.max(...l,e?.max??-1/0);(!isFinite(i)||!isFinite(s))&&(i=0,s=1),s-i<.001&&(s+=1,i-=1);let r=(s-i)*.08;return[i-r,s+r]}var Ne=0;function De(l){if(l.length<3)return`M${l.map(t=>t.join(",")).join(" L")}`;let n=`M${l[0][0]},${l[0][1]}`;for(let t=0;t<l.length-1;t++){let e=l[Math.max(0,t-1)],i=l[t],s=l[t+1],r=l[Math.min(l.length-1,t+2)],a=i[0]+(s[0]-e[0])/6,c=i[1]+(s[1]-e[1])/6,p=s[0]-(r[0]-i[0])/6,d=s[1]-(r[1]-i[1])/6;n+=` C${a.toFixed(1)},${c.toFixed(1)} ${p.toFixed(1)},${d.toFixed(1)} ${s[0]},${s[1]}`}return n}function H(l,n={}){let t=`gcg${Ne++}`,e=n.w??300,i=n.h??110,s=l.flatMap($=>$.data);if(!s.length)return o`<div style="height:${i}px;display:flex;align-items:center;justify-content:center;
    font-size:11px;color:rgba(255,255,255,.5)">Keine Verlaufsdaten</div>`;let r=l.some($=>$.axis==="right"),a=r?bn:fn,c=l.filter($=>$.axis!=="right").flatMap($=>$.data),p=l.filter($=>$.axis==="right").flatMap($=>$.data),[d,g]=He(c.length?c:s,n.min,n.max,n.band),[f,x]=He(p.length?p:s,n.rightMin,n.rightMax),y=($,S)=>W+$/Math.max(1,S-1)*(e-W-a),w=$=>et+(1-($-d)/(g-d))*(i-et-rt),v=$=>et+(1-($-f)/(x-f))*(i-et-rt),_=n.grid??3,C=$=>Math.abs($)>=100?$.toFixed(0):Math.abs($)>=10?$.toFixed(1):$.toFixed(2),k=n.hours??24,F=4;return o`<svg data-gce="4d724461726b766f6964" viewBox="0 0 ${e} ${i}" preserveAspectRatio="none" style="width:100%;height:${i}px;display:block">
    ${n.band&&(n.band.min!==void 0||n.band.max!==void 0)?tt`
      <rect x="${W}" y="${w(n.band.max??g)}" width="${e-W-a}"
        height="${Math.max(0,w(n.band.min??d)-w(n.band.max??g))}"
        fill="${n.band.color??"rgba(77,255,195,.08)"}" />`:u}
    ${Array.from({length:_+1},($,S)=>{let b=S/_,z=et+b*(i-et-rt),M=g-b*(g-d),B=x-b*(x-f);return tt`
        <line x1="${W}" y1="${z}" x2="${e-a}" y2="${z}"
          stroke="rgba(255,255,255,.10)" stroke-width="1"/>
        <text x="${W-4}" y="${z+3}" text-anchor="end" class="c-axl"
          font-size="9.5" fill="rgba(255,255,255,.68)">${C(M)}</text>
        ${r?tt`<text x="${e-a+5}" y="${z+3}" text-anchor="start" class="c-axl"
          font-size="9.5" fill="rgba(255,255,255,.55)">${C(B)}</text>`:u}`})}
    ${Array.from({length:F+1},($,S)=>{let b=S/F,z=W+b*(e-W-a),M=S===F?"jetzt":`-${Math.round(k*(1-b))}h`;return tt`
        <line x1="${z}" y1="${et}" x2="${z}" y2="${i-rt}" stroke="rgba(255,255,255,.05)" stroke-width="1"/>
        <text x="${z}" y="${i-4}" text-anchor="${S===0?"start":S===F?"end":"middle"}"
          class="c-axl" font-size="9" fill="rgba(255,255,255,.5)">${M}</text>`})}
    ${l.map(($,S)=>{if($.data.length<2)return u;let b=$.axis==="right"?v:w,z=$.data.map((j,q)=>[Number(y(q,$.data.length).toFixed(1)),Number(b(j).toFixed(1))]),M=De(z),B=z[z.length-1][0],U=z[z.length-1][1];return tt`
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
  </svg>`}function Vt(l,n,t=280,e=38){if(l.length<2)return o`<div style="height:${e}px"></div>`;let i=`gcs${Ne++}`,s=Math.min(...l),r=Math.max(...l);r-s<.001&&(r+=1,s-=1);let a=x=>x/(l.length-1)*t,c=x=>3+(1-(x-s)/(r-s))*(e-8),p=l.map((x,y)=>[Number(a(y).toFixed(1)),Number(c(x).toFixed(1))]),d=De(p),g=p[p.length-1][0],f=p[p.length-1][1];return o`<svg data-gce="4d724461726b766f6964" viewBox="0 0 ${t} ${e}" style="width:100%;height:${e}px;display:block">
    <defs><linearGradient id="${i}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${n}" stop-opacity=".22"/>
      <stop offset="100%" stop-color="${n}" stop-opacity="0"/>
    </linearGradient></defs>
    <path d="${d} L${g},${e} L0,${e} Z" fill="url(#${i})"/>
    <path d="${d}" fill="none" stroke="${n}" stroke-width="2"
      stroke-linejoin="round" stroke-linecap="round"/>
    <circle cx="${g}" cy="${f}" r="2.6" fill="${n}"/>
  </svg>`}var Zt=l=>l.toLowerCase().replace(/ä/g,"a").replace(/ö/g,"o").replace(/ü/g,"u").replace(/ß/g,"ss").replace(/[^a-z0-9]+/g,"_").replace(/^_+|_+$/g,""),N=(l,n,t,e,i)=>i?.[e]??`${l}.growctrl_${Zt(n)}_${Zt(t)}_${e}`,K=(l,n,t,e)=>e?.[t]??`${l}.growctrl_zelt_${Zt(n)}_${t}`,wt={auto:["switch","automatik","auto"],wartung:["switch","wartung","maintenance"],stage:["select","wachstumsphase","stage"],plant:["select","pflanze","plant_type"],lightOn:["time","licht_an","light_on"],lightOffSv:["time","licht_aus_seedling_veg","light_off_sv"],lightOffBloom:["time","licht_aus_bloom_flush","light_off_bloom"],lightRest:["sensor","licht_restzeit","light_rest"],pumpRest:["sensor","pumpe_restzeit","pump_rest"],age:["sensor","alter_seit_keimung","plant_age"],rec:["sensor","phasen_empfehlung","stage_recommendation"],event:["sensor","letztes_ereignis","last_event"],dli:["sensor","dli_heute","dli_today"],dliFc:["sensor","dli_prognose","dli_forecast"],germination:["date","keimstart","germination"],germinationReset:["button","keimstart_zurucksetzen","germination_reset"],overrideMin:["number","manuelle_ubernahme","override_minutes"],pOverride:["binary_sensor","manueller_eingriff","problem_override"],pFailsafe:["binary_sensor","licht_failsafe","problem_light_failsafe"],pTime:["binary_sensor","lichtzeiten_unvollstandig","problem_time_invalid"],pPump:["binary_sensor","pumpe_gesperrt_fullstand","problem_pump_blocked"],pPower:["binary_sensor","licht_ohne_leistung","problem_power"],heatEnabled:["switch","germination_heizung","heat_enabled"],heatTarget:["number","heizung_zieltemperatur","heat_target"],heatHyst:["number","heizung_hysterese","heat_hyst"],heatActive:["binary_sensor","heizung_aktiv","heat_active"],heatOvertemp:["binary_sensor","heizung_ubertemperatur","heat_overtemp"],heatSensorFault:["binary_sensor","heizung_sensorfehler","heat_sensor_fault"]},at={enabled:["switch","zelt_aktiv","tent_enabled"],climate:["switch","klima_automatik","climate_enabled"],mode:["select","klima_modus","climate_mode"],phase:["select","klima_phase","climate_phase"],vpd:["sensor","vpd","vpd"],status:["sensor","status","status"],stale:["binary_sensor","klima_sensoren_eingefroren","problem_stale"],event:["sensor","letztes_ereignis","last_event"],zielVpd:["sensor","ziel_vpd","ziel_vpd"],zielRh:["sensor","ziel_rh","ziel_rh"],zielTemp:["sensor","ziel_temp","ziel_temp"],todoList:["todo","aufgaben","todo"]};var A=class extends I{constructor(){super(...arguments);this._cw=0;this._config={};this._confirm=null}static{this.properties={hass:{attribute:!1},_config:{state:!0},_confirm:{state:!0},_cw:{state:!0}}}connectedCallback(){super.connectedCallback(),this._ro=new ResizeObserver(t=>{let e=Math.round(t[0]?.contentRect?.width??0);e&&Math.abs(e-this._cw)>8&&(this._cw=e)}),this._ro.observe(this)}disconnectedCallback(){this._ro?.disconnect(),super.disconnectedCallback()}chartW(t=34){return Math.max(280,(this._cw||320)-t)}setConfig(t){this.validateConfig(t),this._config=t}validateConfig(t){}getCardSize(){return 4}st(t){return t?this.hass?.states[t]?.state:void 0}isOn(t){return this.st(t)==="on"}t(t){return Be(this.hass,t)}get _lang(){return Dt(this.hass)}friendly(t){return t&&this.hass?.states[t]?.attributes?.friendly_name||t||""}unit(t){return t&&this.hass?.states[t]?.attributes?.unit_of_measurement||""}moreInfo(t){this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:t},bubbles:!0,composed:!0}))}navigate(t){history.pushState(null,"",t),window.dispatchEvent(new CustomEvent("location-changed"))}toggle(t){let e=t.split(".")[0],i=["switch","input_boolean","light","fan"].includes(e)?e:"homeassistant";this.hass.callService(i,"toggle",{entity_id:t})}confirmToggle(t,e){this._confirm={text:`${e} wirklich schalten?`,action:()=>this.toggle(t)}}renderConfirm(){return this._confirm?o`<div style="position:absolute;inset:0;background:rgba(0,0,0,.6);border-radius:16px;
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
    </div>`:u}};var xn=["VPD","RH"],vn=["Auto","Seedling","Veg","Bloom","Trocknung"],Ve={Auto:"",Seedling:"pd-seed",Veg:"pd-veg",Bloom:"pd-bloom",Trocknung:"pd-dry"},Ze={Auto:"Automatik",Seedling:"Anzucht",Veg:"Wachstum",Bloom:"Bl\xFCte",Trocknung:"Trocknung"},We=[{w:20,col:"#6E97DE",lbl:"zu feucht"},{w:20,col:"#58E0A5",lbl:"Seedling"},{w:20,col:"#2FB36C",lbl:"Veg"},{w:20,col:"#E5B567",lbl:"Bloom"},{w:20,col:"#D4726F",lbl:"zu trocken"}],Wt=2,Kt=class extends A{constructor(){super(...arguments);this._hist=[];this._phase=!1}static{this.styles=T}static{this.properties={...A.properties,_hist:{state:!0},_phase:{state:!0}}}validateConfig(t){if(!t.tent)throw new Error("growctrl-tent-card: 'tent' ist Pflicht (Zelt-Name aus der Integration).")}static getConfigElement(){return document.createElement("growctrl-tent-editor")}static getStubConfig(){return{tent:"gross"}}e(t){let[e,i,s]=at[t],r=this._config;return r.overrides?.[i]??R(this.hass,r.tent,"zelt",s)??K(e,r.tent,i,r.overrides)}_select(t,e){this.hass.callService("select","select_option",{entity_id:t,option:e})}connectedCallback(){super.connectedCallback(),this._load(),this._timer=window.setInterval(()=>this._load(),5*6e4)}disconnectedCallback(){super.disconnectedCallback(),this._timer&&clearInterval(this._timer)}async _load(){if(!this.hass){setTimeout(()=>this._load(),1e3);return}this._hist=await O(this.hass,this.e("vpd"),this._config.hours??24)}tglBtn(t,e,i){return o`<button class="gc tgl ${i?"on":""}" style="flex:1; justify-content:center" @click=${()=>this.confirmToggle(t,e)}>
      <span class="sw"></span> ${e}</button>`}chips(t,e,i){return o`<div style="display:flex; gap:6px; flex-wrap:wrap">
      ${e.map(s=>{let r=s===i;return o`<button class="gc" style="padding:7px 13px; border-radius:999px; font:800 11.5px var(--f-ui);
            border:1.5px solid ${r?"color-mix(in srgb, var(--acc) 50%, transparent)":"var(--line)"};
            background:${r?"var(--acc-soft)":"transparent"}; color:${r?"var(--acc)":"var(--tx-2)"}"
          @click=${()=>this._select(t,s)}>${s}</button>`})}
    </div>`}phaseDropdown(t,e,i=!1){return i?o`<div class="dd">
        <div class="gc dd-btn" style="cursor:default" title=${this.t("Klima automatisch \u2013 Phase folgt der Pflanzen-Gewichtung")}>
          <span class="pdot" style="background:var(--acc);color:var(--acc)"></span>${this.t("Automatik")}
          <ha-icon icon="mdi:lock-outline" style="margin-left:auto;--mdc-icon-size:15px;color:var(--tx-3)"></ha-icon>
        </div>
        <div style="font-size:11px;color:var(--tx-3);margin:5px 2px 0">${this.t("Phase folgt der Pflanzen-Gewichtung")}</div>
      </div>`:o`<div class="dd ${this._phase?"open":""}">
      <button class="gc dd-btn" aria-haspopup="listbox" aria-expanded=${this._phase} @click=${()=>{this._phase=!this._phase}}>
        <span class="pdot ${Ve[e]}" style="${e==="Auto"?"background:var(--acc);color:var(--acc)":""}"></span>${this.t(Ze[e]??e)}
        <ha-icon icon="mdi:chevron-down" style="margin-left:auto;--mdc-icon-size:16px;color:var(--tx-3);transition:transform .2s;${this._phase?"transform:rotate(180deg)":""}"></ha-icon>
      </button>
      ${this._phase?o`<div class="dd-menu" role="listbox">
        ${vn.map(s=>o`<button class="gc dd-it" role="option" aria-selected=${s===e}
          @click=${()=>{this._select(t,s),this._phase=!1}}>
          <span class="pdot ${Ve[s]}" style="${s==="Auto"?"background:var(--acc)":""}"></span>${this.t(Ze[s]??s)}</button>`)}
      </div>`:u}
    </div>`}render(){let t=this._config;if(!this.hass)return u;let e=this.hass.states[this.e("vpd")],i=!e&&!this.hass.states[this.e("enabled")],s=E(e?.state)??(i?1.06:null),r=e?.attributes?.temp,a=e?.attributes?.rh,c=e?.attributes?.phase_effektiv??"Veg",p=e?.attributes?.sollwerte,d=this.isOn(this.e("enabled"))||i,g=this.isOn(this.e("climate")),f=this.hass.states[this.e("status")],x=f?.attributes?.probleme??[],y=f?.state?.toLowerCase?.()==="problem"?"warning":d?"ok":"none",w=this.hass.states[this.e("event")],v=s!==null&&p&&s>=p.vpd_min&&s<=p.vpd_max,_=s!==null?Math.min(100,Math.max(0,s/Wt*100)):null,C=e?.attributes?.temp_entity||this.e("vpd"),k=e?.attributes?.rh_entity||this.e("vpd"),F=this.e("zielVpd"),$=this.e("zielRh"),S=this.e("zielTemp"),b=this.hass.states[F],z=this.hass.states[$],M=this.hass.states[S],B=!!b&&!!z,U=E(b?.state),j=E(z?.state),q=E(M?.state);return o`<div class="card ${t.style?.glass?"glass":""}" data-level=${y==="none"?"ok":y} style="${P(t.style)};position:relative">
      <div class="hd">
        <div class="grow" style="min-width:0">
          <div class="ttl">${t.name??`${this.t("Klima")} ${this.t("Zelt")} ${t.tent}`}</div>
          <div class="sub">${this.t("Phase")} ${this.t(c)}${p?` \xB7 ${this.t("Soll")} ${p.vpd_min}\u2013${p.vpd_max} kPa / ${p.rh_min}\u2013${p.rh_max} %`:""}</div>
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

      ${B?o`
        <div style="margin-top:12px">
          <span class="mlbl" style="display:block; margin-bottom:8px">${this.t("Ziel")} \u00b7 ${this.t("Automatik")}</span>
          <div class="kpis ${M?"":"cols-2"}">
            <button class="gc kpi c-vpd" @click=${()=>this.moreInfo(F)}><span class="mlbl">${this.t("Ziel")} VPD</span><span class="v">${U!=null?U.toFixed(2):"\u2013"}<span class="u">kPa</span></span></button>
            <button class="gc kpi c-hum" @click=${()=>this.moreInfo($)}><span class="mlbl">${this.t("Ziel")} RH</span><span class="v">${j!=null?Math.round(j):"\u2013"}<span class="u">%</span></span></button>
            ${M?o`<button class="gc kpi c-temp" @click=${()=>this.moreInfo(S)}><span class="mlbl">${this.t("Ziel")} Temp</span><span class="v">${q!=null?q.toFixed(1):"\u2013"}<span class="u">\u00b0C</span></span></button>`:u}
          </div>
        </div>`:u}

      <div style="margin-top:16px">
        <div class="zones">
          ${We.map(D=>o`<i style="width:${D.w}%;background:${D.col}"></i>`)}
          ${p?o`<span class="zband" style="left:${p.vpd_min/Wt*100}%;width:${(p.vpd_max-p.vpd_min)/Wt*100}%"></span>`:u}
          ${_!==null?o`<span class="zmark" style="left:${_}%"></span>`:u}
        </div>
        <div class="zlbl">${We.map(D=>o`<span style="width:${D.w}%">${this.t(D.lbl)}</span>`)}</div>
      </div>

      <div style="display:flex; gap:12px; flex-wrap:wrap; margin-top:14px; align-items:center">
        <span class="mlbl">${this.t("Modus")}</span>${this.chips(this.e("mode"),xn,this.st(this.e("mode"))??"VPD")}
      </div>
      <div style="margin-top:13px">
        <span class="mlbl" style="display:block; margin-bottom:8px">${this.t("Phase")}</span>
        ${this.phaseDropdown(this.e("phase"),this.st(this.e("phase"))??"Auto",B)}
      </div>

      ${t.show_chart!==!1&&this._hist.length>1?o`
        <div class="seclbl">VPD · ${t.hours??24}h</div>
        ${H([{data:this._hist,color:v===!1?m.warn:m.ok,fill:!0}],{w:this.chartW(),h:96,band:p?{min:p.vpd_min,max:p.vpd_max}:void 0,grid:3,hours:t.hours??24})}`:u}

      ${x.length?o`<div style="display:flex; flex-wrap:wrap; gap:7px; margin-top:12px">
        ${x.map(D=>o`<span class="pbadge warn"><ha-icon icon="mdi:alert" style="--mdc-icon-size:12px"></ha-icon>${D}</span>`)}</div>`:u}

      ${w?o`<button class="gc event" style="margin-top:14px" @click=${()=>this.moreInfo(this.e("event"))}>
        <span class="edot" style="background:${w.attributes?.schweregrad==="critical"?m.crit:w.attributes?.schweregrad==="warning"?m.warn:m.info}"></span>
        <span class="etx">${w.state}</span>
        <span class="etm">${w.last_changed?new Date(w.last_changed).toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit"}):""}</span>
      </button>`:u}
      ${this.renderConfirm()}
    </div>`}};customElements.define("growctrl-tent-card",Kt);var Ut=class extends L{setConfig(n){super.setConfig({show_settings:!0,show_log:!0,...n})}render(){let n=[this.tentSelect("tent","\u{1F3D5}\uFE0F Zelt"),this.stationSelect(this._config?.tent,"station","\u{1F331} Station (= Pflanze)"),h.text("name","\u270F\uFE0F Anzeigename (optional)"),h.bool("show_settings","\u2699\uFE0F Einstellungen-Zahnrad anzeigen",!0),h.bool("show_log","\u{1F4DC} Protokoll-Auszug am Kartenfu\xDF (Standard an)",!0),h.bool("start_expanded","\u{1F4C2} Bereiche beim Laden ge\xF6ffnet (Standard: zu)"),h.entity("tank_entity","\u{1F4A7} Stations-Tank F\xFCllstand % (optional)","sensor"),h.num("tank_min","\u26A0\uFE0F Tank-Mindeststand %",0,100),h.num("tank_volume","\u{1FAA3} Tank-Volumen in Litern (optional)",1,1e4),h.entity("camera_entity","\u{1F4F9} Livestream-Kamera (optional)","camera"),h.text("image_url","\u{1F5BC}\uFE0F oder Bild-URL (optional, statt Kamera)"),h.num("media_height","\u2195\uFE0F H\xF6he des Feeds in px (Standard 180)",60,600)],t=[h.entity("entity","\u{1F50C} Schalter",["switch","input_boolean","light","fan"]),h.text("name","\u270F\uFE0F Anzeigename (optional)"),h.select("kind","\u{1F3A8} Art (Farbe/Icon)",[{value:"light",label:"Licht"},{value:"pump",label:"Pumpe"},{value:"o2",label:"O\u2082"},{value:"fan",label:"L\xFCfter"},{value:"heat",label:"Heizmatte"},{value:"water",label:"Befeuchter"},{value:"dehum",label:"Entfeuchter"}]),h.bool("confirm","\u2705 Vor dem Schalten best\xE4tigen")],e=[h.entity("entity","\u{1F4C8} Sensor / input_number"),h.text("name","\u270F\uFE0F Anzeigename (optional)"),h.text("icon","\u{1F3F7}\uFE0F Icon (z.B. mdi:thermometer, optional)"),h.select("anzeige","\u{1F4CA} Anzeige",[{value:"wert",label:"Wert"},{value:"graph",label:"Mini-Verlauf"}])];return o`${this.form(n)}
      ${this.list({key:"actuators",rowSchema:t,title:"\u{1F50C} Aktoren (Kacheln, 4 nebeneinander)",addLabel:"Aktor hinzuf\xFCgen",newItem:()=>({entity:""})})}
      ${this.list({key:"sensors",rowSchema:e,title:"\u2795 Weitere Sensoren (Wert oder Verlauf)",addLabel:"Sensor hinzuf\xFCgen",newItem:()=>({entity:"",anzeige:"wert"})})}
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
      </div>`}};customElements.define("growctrl-station-editor",Ut);var yn=["Aus","Seedling","Veg","Bloom","Flush","Trocknung"],Ke=72,$n={Aus:"gestoppt",Seedling:"Anzucht",Veg:"Wachstum",Bloom:"Bl\xFCte",Flush:"Sp\xFClen",Trocknung:"Ernte"},Ue={Aus:"Aus",Seedling:"Anzucht",Veg:"Wachstum",Bloom:"Bl\xFCte",Flush:"Sp\xFClen",Trocknung:"Trocknung"},wn={Aus:"pd-off",Seedling:"pd-seed",Veg:"pd-veg",Bloom:"pd-bloom",Flush:"pd-flush",Trocknung:"pd-dry"},_n={light:"mdi:lightbulb",heat:"mdi:radiator",water:"mdi:air-humidifier",pump:"mdi:water-pump",fan:"mdi:fan",o2:"mdi:gas-cylinder",dehum:"mdi:air-humidifier-off"},Gt=class extends A{constructor(){super(...arguments);this._open=!1;this._phase=!1;this._plant=!1;this._exp={};this._spark={};this._tankHist=[]}static{this.styles=T}static{this.properties={...A.properties,_open:{state:!0},_spark:{state:!0},_phase:{state:!0},_plant:{state:!0},_exp:{state:!0},_tankHist:{state:!0}}}expOpen(t){return this._exp[t]!==void 0?this._exp[t]:t==="log"?!1:!!this._config?.start_expanded}updated(t){if(super.updated?.(t),!t.has("hass")&&!t.has("_config"))return;this.allSensors().forEach(async i=>{let s=await O(this.hass,i.entity,i.hours??24);s.length&&this._spark[i.entity]?.length!==s.length&&(this._spark={...this._spark,[i.entity]:s})});let e=this._config.tank_entity;e&&(async()=>{let i=await O(this.hass,e,Ke);i.length&&i.length!==this._tankHist.length&&(this._tankHist=i)})()}tankDaysLeft(t,e){let i=this._tankHist;if(!i||i.length<4||t<=e)return null;let s=0;for(let a=1;a<i.length;a++){let c=i[a-1]-i[a];c>0&&(s+=c)}let r=s/(Ke/24);return r<.4?null:(t-e)/r}trendArrow(t){if(!t||t.length<4)return null;let e=Math.max(2,Math.min(3,Math.floor(t.length/4))),i=g=>g.reduce((f,x)=>f+x,0)/g.length,s=i(t.slice(-e))-i(t.slice(-2*e,-e)),r=t.slice(-Math.min(t.length,4*e)),a=Math.max(...r)-Math.min(...r)||1,c=s/a,p=Math.max(1,Math.min(1.45,1+((this._cw||360)-390)/500)),d=Math.round(16*p);return c>.08?{icon:"mdi:menu-up",color:m.temp,size:d}:c<-.08?{icon:"mdi:menu-down",color:m.water,size:d}:{icon:"mdi:menu-right",color:"var(--tx-3)",size:d}}validateConfig(t){if(!t.tent||!t.station)throw new Error("growctrl-station-card: 'tent' und 'station' sind Pflicht (wie in der Integration angelegt).")}static getConfigElement(){return document.createElement("growctrl-station-editor")}static getStubConfig(){return{tent:"gross",station:"main1"}}get isPreview(){return!this.hass?.states?.[this.e("stage")]}e(t){let[e,i,s]=wt[t];return this.eRole(e,i,s)}eRole(t,e,i){let s=this._config;return s.overrides?.[e]??R(this.hass,s.tent,s.station,i)??N(t,s.tent,s.station,e,s.overrides)}_select(t,e){this.hass.callService("select","select_option",{entity_id:t,option:e})}render(){let t=this._config;if(!this.hass)return u;let e=this.isPreview,i=this.st(this.e("stage"))??"Veg",s=It[i]??It.Veg,r=this.isOn(this.e("auto"))||e,a=this.isOn(this.e("wartung")),c=this.st(this.e("plant")),p=c&&c!=="Generisch"?c:null,d=(this.hass.states[this.e("event")]?.attributes?.gc_sensors??{}).power,g=d?E(this.st(d)):null,f=R(this.hass,t.tent,"zelt","tent_enabled")??K("switch",t.tent,"tent_enabled",t.overrides),x=!!this.hass.states[f]&&!this.isOn(f),y=i==="Aus",w=x||y,v=!r||a||x||y,_=[{e:this.e("pOverride"),label:"Manueller Eingriff",crit:!1},{e:this.e("pFailsafe"),label:"Licht-Failsafe",crit:!0},{e:this.e("pTime"),label:"Zeiten unvollst\xE4ndig",crit:!1},{e:this.e("pPump"),label:"Pumpe gesperrt (F\xFCllstand)",crit:!1},{e:this.e("pPower"),label:"Licht ohne Leistung",crit:!0}].filter(b=>this.isOn(b.e)),C=this.hass.states[this.e("event")],k=w?"warning":_.length?_.some(b=>b.crit)?"critical":"warning":C?.attributes?.schweregrad==="critical"?"warning":"ok",F=a?this.t("Wartung aktiv"):x?this.t("Zelt aus \u2013 gestoppt"):y?this.t("Station aus"):k==="critical"?this.t("Kritisch"):k==="warning"?this.t("Warnung"):this.t("Alles OK"),$=Math.max(1,Math.min(1.45,1+((this._cw||360)-390)/500)),S=[];return p&&S.push(o`<span style="font-weight:700">${p}</span>`),g!==null&&S.push(o`${this.t("Leistung")} ${Math.round(g)}&nbsp;W`),S.push(F),o`<div class="card ${t.style?.glass?"glass":""}" data-level=${k} style="${P(t.style)};--gc-sc:${$.toFixed(3)};position:relative">

      <div class="hd" style="margin-bottom:8px">
        <div class="grow" style="min-width:0">
          <div class="ttl">${t.name??`${t.tent} \xB7 ${t.station}`}</div>
        </div>
        <button class="gc icbtn ${a?"on":""}" title=${this.t("Wartung (System greift nicht ein)")}
          @click=${()=>this.toggle(this.e("wartung"))}>
          <ha-icon icon="mdi:wrench-outline" style="--mdc-icon-size:16px"></ha-icon></button>
        ${t.show_settings!==!1?o`<button class="gc icbtn" title=${this.t("Einstellungen")} @click=${()=>{this._open=!this._open}}>
          <ha-icon icon="mdi:tune-variant" style="--mdc-icon-size:16px"></ha-icon></button>`:u}
        <button class="gc chip-auto ${r?"":"off"}" @click=${()=>this.confirmToggle(this.e("auto"),this.t("Automatik"))}>
          AUTO ${r?this.t("AN"):this.t("AUS")}</button>
      </div>
      <div style="display:flex;align-items:center;gap:7px;flex-wrap:wrap;margin:0 2px 14px;font-size:12.5px;font-weight:700;color:var(--tx-2)">
        <span style="width:7px;height:7px;border-radius:50%;flex-shrink:0;
          background:${k==="critical"?m.crit:k==="warning"?m.warn:m.ok};
          box-shadow:0 0 8px currentColor;color:${k==="critical"?m.crit:k==="warning"?m.warn:m.ok}"></span>
        ${S.map((b,z)=>o`${z?o`&nbsp;\u00b7&nbsp;`:u}${b}`)}
      </div>

      ${this.dropdowns(i,s)}
      ${y?o`
        <div style="display:flex;align-items:center;gap:9px;margin:2px 2px 12px;padding:11px 13px;
            border-radius:12px;background:rgba(255,255,255,.03);border:1px solid var(--line)">
          <ha-icon icon="mdi:power-standby" style="--mdc-icon-size:18px;color:var(--tx-3)"></ha-icon>
          <span style="font-size:12.5px;font-weight:700;color:var(--tx-2)">${this.t("Station aus \u2013 keine Steuerung, keine Klima-Gewichtung im Zelt.")}</span>
        </div>`:o`
        ${this.recText()}
        ${this.lightRow()}
        ${this.dliRow(e)}
        ${this.heatRow(v)}
        ${this.pumpRow(e)}
        ${this.tankRow()}
        ${this.actuators()}
        ${this.sensorBlock()}
        ${this.mediaBlock()}
        ${_.length?o`<div style="display:flex;gap:7px;flex-wrap:wrap;margin-top:12px">
          ${_.map(b=>o`<span class="pbadge ${b.crit?"crit":"warn"}">
            <ha-icon icon="mdi:alert" style="--mdc-icon-size:12px"></ha-icon>${this.t(b.label)}</span>`)}</div>`:u}
      `}

      ${this.todoBlock()}
      ${this.logExcerpt()}
      ${this._open?this.groupedSettings():u}
      ${this.renderConfirm()}
    </div>`}setting(t,e){return o`<button class="gc skv" @click=${()=>this.moreInfo(t)}>
      <div class="k">${this.t(e)}</div><div class="vv">${this.st(t)??"\u2013"}</div></button>`}dropdowns(t,e){return o`<div style="margin-bottom:8px">${this.phaseDropdown(t,e)}</div>`}plantDropdown(t){let e=this.hass.states[t],i=e?.state??"Generisch",s=e?.attributes?.options??[];return o`<div class="dd ${this._plant?"open":""}" style="margin-bottom:10px">
      <button class="gc dd-btn" aria-haspopup="listbox" aria-expanded=${this._plant}
        @click=${()=>{this._plant=!this._plant,this._phase=!1}}>
        <span style="overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${i}</span>
        <ha-icon icon="mdi:chevron-down" style="--mdc-icon-size:16px;color:var(--tx-3);margin-left:auto;transition:transform .2s;${this._plant?"transform:rotate(180deg)":""}"></ha-icon>
      </button>
      ${this._plant?o`<div class="dd-menu" role="listbox">
        ${s.map(r=>o`<button class="gc dd-it" role="option" aria-selected=${r===i}
          @click=${()=>{this._select(t,r),this._plant=!1}}>${r}</button>`)}
      </div>`:u}
    </div>`}phaseDropdown(t,e){let i=E(this.st(this.e("age"))),s=this.hass.states[this.e("stage")]?.attributes?.phasen_bis??{},r=c=>{let p=s[c];return typeof p=="number"?`${this.t("bis Tag")} ${p}`:c==="Aus"||c==="Trocknung"?this.t($n[c]??""):""},a=i!==null?`${this.t("Tag")} ${i}`:r(t);return o`<div class="dd ${this._phase?"open":""}">
      <button class="gc dd-btn" aria-haspopup="listbox" aria-expanded=${this._phase}
        @click=${()=>{this._phase=!this._phase,this._plant=!1}}>
        <span class="pdot" style="background:${e.color};color:${e.color}"></span>${this.t(Ue[t]??t)}
        <span class="hint">${a}</span>
        <ha-icon icon="mdi:chevron-down" style="--mdc-icon-size:16px;color:var(--tx-3);transition:transform .2s;${this._phase?"transform:rotate(180deg)":""}"></ha-icon>
      </button>
      ${this._phase?o`<div class="dd-menu" role="listbox">
        ${yn.map(c=>o`<button class="gc dd-it" role="option" aria-selected=${c===t}
          @click=${()=>{this._select(this.e("stage"),c),this._phase=!1}}>
          <span class="pdot ${wn[c]}"></span>${this.t(Ue[c]??c)}<span class="hint">${r(c)}</span></button>`)}
      </div>`:u}
    </div>`}recText(){let e=this.hass.states[this.e("rec")]?.attributes?.hinweis?.trim();return e?o`<div style="display:flex;align-items:flex-start;gap:8px;margin:0 2px 10px;
        padding:9px 12px;border-radius:11px;background:rgba(255,206,122,.10);border:1px solid rgba(255,206,122,.22)">
      <ha-icon icon="mdi:lightbulb-alert-outline" style="--mdc-icon-size:16px;color:${m.warn};flex-shrink:0;margin-top:1px"></ha-icon>
      <span style="font-size:12px;font-weight:700;color:rgba(242,247,243,.86);line-height:1.35">${e}</span>
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
    </button>`}lightRow(){if(this.isPreview)return this.supplyRow({icon:"mdi:lightbulb-on",iconColor:m.light,glow:!0,title:this.t("Licht an"),value:"5 h 40 min",valueColor:m.light,fillPct:62,fillColor:m.light,footL:this.t("Leuchtphase"),footR:`62 % ${this.t("verbleibend")}`});let t=this.hass.states[this.e("lightRest")];if(!t)return u;let e=t.attributes??{},i=e.zustand?e.zustand==="an":void 0,s=Number(t.state),r=isNaN(s)?"\u2013":$t(s),a=typeof e.anteil=="number"?Math.min(1,Math.max(0,e.anteil)):null,c=i===!1?"#7E9488":m.light;return this.supplyRow({icon:i===!1?"mdi:lightbulb-outline":"mdi:lightbulb-on",iconColor:c,glow:i!==!1,title:i===!1?this.t("Licht aus"):this.t("Licht an"),value:i===!1?"\u2013":r,valueColor:c,fillPct:i===!1?null:a!==null?a*100:null,fillColor:c,footL:i===!1?this.t("Licht ausgeschaltet"):this.t("Leuchtphase"),footR:i===!1?"":a!==null?`${(a*100).toFixed(0)} % ${this.t("verbleibend")}`:"",onClick:()=>this.moreInfo(this.e("lightRest"))})}dliRow(t){let e=this.hass.states[this.e("dli")];if(!e&&!t)return u;let i=E(this.st(this.e("dli")))??(t?18.4:null),s=E(this.st(this.e("dliFc")))??(t?24.7:null),r=e?.attributes?.ziel_aktuelle_phase??(t?25:void 0),a=r&&i!==null?i/r*100:null,c=r&&s!==null?Math.min(100,s/r*100):void 0,p=a!==null&&a>100,d=p?"#FFB35C":m.light;return this.supplyRow({icon:"mdi:white-balance-sunny",iconColor:d,topMargin:!0,title:this.t("DLI heute"),value:i!==null?`${i.toFixed(1)}${r?` / ${r}`:""}`:"\u2013",valueColor:d,fillPct:a,fillColor:d,minPct:c,footL:s!==null?`${this.t("Prognose")} ${s.toFixed(1)} mol/m\xB2`:"",footR:p?`${this.t("\xFCber Ziel")} +${(a-100).toFixed(0)} %`:r?this.t("Marker = Prognose"):"",onClick:()=>this.moreInfo(this.e("dli"))})}heatRow(t){if(this.isPreview)return u;let e=this.hass.states[this.e("heatActive")];if(!e)return u;let i=e.attributes??{},s=i.aktiv!==!1&&this.isOn(this.e("heatEnabled")),r=e.state==="on",a=typeof i.ist_temp=="number"?i.ist_temp:null,c=typeof i.ziel_temp=="number"?i.ziel_temp:null,p=typeof i.hysterese=="number"?i.hysterese:.5,d,g,f,x,y,w=null,v;if(i.sensorfehler)d="mdi:thermometer-alert",g=m.crit,f=this.t("Heizung Sensorfehler"),x=this.t("Regelf\xFChler fehlt \u2013 Heizung gesperrt"),y="";else if(i.uebertemperatur)d="mdi:thermometer-alert",g=m.crit,f=this.t("Heizung \xDCbertemperatur"),x=this.t("Not-Aus \u2013 zu hei\xDF"),y=c!==null?`${this.t("Ziel")} ${c} \xB0C`:"";else if(t)d="mdi:radiator-off",g="#7E9488",f=this.t("Heizung gesperrt"),x=this.t("Automatik/Zelt aus \u2013 manuell freigeben"),y=c!==null?`${this.t("Ziel")} ${c} \xB0C`:"";else if(g=s?m.heat:"#7E9488",d=r?"mdi:radiator":s?"mdi:radiator-disabled":"mdi:radiator-off",f=s?r?this.t("Heizung heizt"):this.t("Heizung bereit"):this.t("Heizung aus"),x=s?c!==null?`${this.t("Ziel")} ${c} \xB0C \xB1${p} K`:this.t("Germination-Heizung"):this.t("Heizung ausgeschaltet"),y=s?r?this.t("heizt"):this.t("bereit"):"",s&&a!==null&&c!==null){let k=c-4,F=c+1;w=(a-k)/(F-k)*100,v=Math.min(100,Math.max(0,(c-k)/(F-k)*100))}let _=a!==null?`${a.toFixed(1)} \xB0C`:"\u2013",C=()=>this.moreInfo(this.e("heatActive"));return o`
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
        ${w!==null?o`<span class="bar"><i style="width:${Math.min(100,Math.max(0,w))}%;
          background:linear-gradient(90deg, ${m.heat}, ${m.heat}cc);box-shadow:0 0 9px ${m.heat}55"></i>
          ${v!==void 0?o`<span class="min" style="left:${v}%"></span>`:u}</span>`:u}
        ${x||y?o`<span class="sft"><span>${x}</span><span>${y}</span></span>`:u}
      </div>`}pumpRow(t){let e=this.hass.states[this.e("pumpRest")];if(!e&&!t)return u;if(t)return this.supplyRow({icon:"mdi:water-pump",iconColor:m.water,topMargin:!0,title:this.t("Pumpe aus"),value:"in 12 min",valueColor:m.water,fillPct:80,fillColor:m.water,footL:this.t("N\xE4chster Zyklus"),footR:"80 %"});if(this.isOn(this.e("pPump")))return this.supplyRow({icon:"mdi:water-pump-off",iconColor:m.crit,topMargin:!0,title:this.t("Pumpe gesperrt"),value:"\u2013",valueColor:m.crit,fillPct:null,footL:this.t("F\xFCllstand zu niedrig \u2013 Trockenlaufschutz"),footR:"",onClick:()=>this.moreInfo(this.e("pPump"))});let i=Number(e.state),s=e.attributes??{},r=s.aktiv===!1,a=typeof s.anteil=="number"?Math.min(1,Math.max(0,s.anteil)):null,c=s.zustand?s.zustand==="an":void 0,p=typeof s.bewaesserung_vor_min=="number"?s.bewaesserung_vor_min:null;return this.supplyRow({icon:r?"mdi:water-pump-off":"mdi:water-pump",iconColor:r?"#7E9488":m.water,topMargin:!0,title:r?this.t("Pumpe aus"):c?this.t("Pumpe l\xE4uft"):this.t("Pumpe aus"),value:r||isNaN(i)?"\u2013":$t(i),valueColor:r?"#7E9488":m.water,fillPct:r?null:a!==null?a*100:null,fillColor:m.water,footL:r?this.t("Pumpe ausgeschaltet"):c===!1&&p!==null?`${this.t("zuletzt")}: ${$t(p)}`:s.text??this.t("Zyklus"),footR:r?"":a!==null?`${(a*100).toFixed(0)} % ${this.t("verbleibend")}`:"",onClick:()=>this.moreInfo(this.e("pumpRest"))})}tankRow(){let t=this._config;if(!t.tank_entity)return u;let e=Math.min(100,Math.max(0,E(this.st(t.tank_entity))??0)),i=t.tank_min??30,s=e<i,r=s?m.crit:m.water,a=t.tank_volume,c=a?`\u2248 ${(e/100*a).toFixed(0)} l ${this.t("von")} ${a} l`:"",p=s?null:this.tankDaysLeft(e,i),d=p===null?"":p<1?`${this.t("Reichweite")}: <1 ${this.t("Tag")}`:`${this.t("Reichweite")}: ~${Math.round(p)} ${this.t("Tage")}`,g=[c,d].filter(Boolean).join(" \xB7 ")||(s?this.t("Unter Mindeststand"):"");return this.supplyRow({icon:"mdi:car-coolant-level",iconColor:m.water,topMargin:!0,title:this.t("Tank"),value:`${e.toFixed(0)} %`,valueColor:r,fillPct:e,fillColor:r,minPct:i,footL:g,footR:`${this.t("Min")} ${i} %`,onClick:()=>this.moreInfo(t.tank_entity)})}expHeader(t,e){let i=this.expOpen(t);return o`<button class="gc" @click=${()=>{this._exp={...this._exp,[t]:!i}}}
      style="display:flex;align-items:center;width:100%;text-align:left;cursor:pointer;margin-top:14px">
      <span class="seclbl" style="margin:0;flex:1">${this.t(e)}</span>
      <ha-icon icon="${i?"mdi:chevron-up":"mdi:chevron-down"}" style="--mdc-icon-size:calc(20px * var(--gc-sc,1));color:var(--tx-3)"></ha-icon>
    </button>`}actuators(){let t=this._config.actuators??[];return t.length?this.expOpen("actuators")?o`
      ${this.expHeader("actuators","Aktoren")}
      <div class="acts">
        ${t.map(e=>{let i=this.isOn(e.entity),s=e.kind??"",r=e.icon??_n[s]??"mdi:power",a=e.name??this.friendly(e.entity);return o`<button class="gc act ${i?"on":""} ${i&&s?s:""}" style="position:relative"
            title=${e.confirm?this.t("Gesicherter Aktor \u2013 fragt vor dem Schalten nach"):a}
            @click=${()=>e.confirm?this.confirmToggle(e.entity,a):this.toggle(e.entity)}>
            ${e.confirm?o`<ha-icon icon="mdi:lock" title=${this.t("Best\xE4tigung vor dem Schalten")}
              style="position:absolute;top:6px;right:6px;--mdc-icon-size:12px;color:var(--tx-3)"></ha-icon>`:u}
            <ha-icon class="aic" icon="${r}" style="--mdc-icon-size:calc(18px * var(--gc-sc,1))"></ha-icon>
            <span class="anm">${a}</span>
            <span class="ast">${i?this.t("AN"):this.t("AUS")}</span></button>`})}
      </div>`:o`${this.expHeader("actuators","Aktoren")}
        <div style="display:flex;flex-wrap:wrap;gap:11px;padding:2px 2px 0">
          ${t.map(e=>{let i=this.isOn(e.entity);return o`<span style="display:inline-flex;align-items:center;gap:6px;font:800 calc(11.5px * var(--gc-sc,1)) var(--f-ui);color:var(--tx-2)">
              <span style="width:calc(11px * var(--gc-sc,1));height:calc(11px * var(--gc-sc,1));border-radius:50%;flex-shrink:0;background:${i?m.ok:"var(--tx-3)"};${i?`box-shadow:0 0 calc(8px * var(--gc-sc,1)) ${m.ok}`:""}"></span>
              ${e.name??this.friendly(e.entity)}</span>`})}
        </div>`:u}allSensors(){return[...this.autoSensors(),...this.configSensors()]}autoSensors(){let e=this.hass.states[this.e("event")]?.attributes??{},i=e.gc_sensors??{},s=e.gc_ph_bereich??null,r=e.gc_ec_bereich??null,a=[];if(i.ph&&a.push(this.zoneSensor(i.ph,"pH","mdi:ph",s,4,8,.3)),i.ec){let c=r?Math.max(3,Math.ceil((r[1]+.8)*2)/2):3.5;a.push(this.zoneSensor(i.ec,"EC","mdi:flash-outline",r,0,c,.3))}return i.water_temp&&a.push({entity:i.water_temp,name:this.t("Wassertemp."),anzeige:"graph",color:m.temp,icon:"mdi:coolant-temperature",hours:24}),i.soil_temp&&a.push({entity:i.soil_temp,name:this.t("Bodentemp."),anzeige:"graph",color:m.temp,icon:"mdi:thermometer",hours:24}),i.soil_moisture&&a.push({entity:i.soil_moisture,name:this.t("Bodenfeuchte"),anzeige:"wert",color:m.water,icon:"mdi:water-percent"}),i.temp&&a.push({entity:i.temp,name:this.t("Temperatur"),anzeige:"graph",color:m.temp,icon:"mdi:thermometer",hours:24}),i.humidity&&a.push({entity:i.humidity,name:this.t("Feuchtigkeit"),anzeige:"graph",color:m.water,icon:"mdi:water-percent",hours:24}),a}zoneSensor(t,e,i,s,r,a,c){if(!s)return{entity:t,name:e,icon:i,anzeige:"wert"};let p=[s[0],s[1]],d=[Math.max(r,p[0]-c),Math.min(a,p[1]+c)];return{entity:t,name:e,icon:i,anzeige:"zone",min:r,max:a,ideal:p,ok:d}}configSensors(){return(this._config.sensors??[]).map(e=>typeof e=="string"?{entity:e}:e)}sensorBlock(){let t=this.allSensors();return t.length?this.expOpen("sensors")?o`${this.expHeader("sensors","Sensorwerte")}
        ${t.map(e=>this.sensorInd(e))}`:o`${this.expHeader("sensors","Sensorwerte")}
      <div style="display:flex;flex-wrap:wrap;gap:12px;padding:2px 2px 0">
        ${t.map(e=>{let i=E(this.st(e.entity)),s=e.anzeige??"wert",r,a=!0;if(s==="zone"){let c=e.ideal??[0,0],p=e.ok??c;r=e.color??(i!==null&&i>=c[0]&&i<=c[1]?m.ok:i!==null&&i>=p[0]&&i<=p[1]?m.warn:m.crit),a=!1}else r=e.color??"var(--tx-3)";return o`<span style="display:inline-flex;align-items:center;gap:5px;font:800 calc(12px * var(--gc-sc,1)) var(--f-num);color:var(--tx-2)">
            <span style="width:calc(11px * var(--gc-sc,1));height:calc(11px * var(--gc-sc,1));border-radius:50%;flex-shrink:0;background:${r};box-shadow:0 0 calc(8px * var(--gc-sc,1)) ${r}"></span>
            ${e.icon?o`<ha-icon icon="${e.icon}" style="--mdc-icon-size:calc(13px * var(--gc-sc,1));color:var(--tx-3)"></ha-icon>`:u}
            ${a&&i!==null?o`${i}<span style="color:var(--tx-3)">${this.unit(e.entity)}</span>`:u}
          </span>`})}
      </div>`:u}zoneV6(t,e,i,s,r){let a=i-e||1,c=(g,f)=>Math.max(0,(Math.min(f,i)-Math.max(g,e))/a*100),p=[{cls:"z-bad",w:c(e,s[0])},{cls:"z-low",w:c(s[0],r[0])},{cls:"z-ok",w:c(r[0],r[1])},{cls:"z-high",w:c(r[1],s[1])},{cls:"z-bad",w:c(s[1],i)}],d=t!==null?Math.min(100,Math.max(0,(t-e)/a*100)):null;return o`
      <span class="zones">
        ${p.map(g=>o`<i class="${g.cls}" style="width:${g.w}%"></i>`)}
        ${d!==null?o`<span class="zmark" style="left:${d}%"></span>`:u}
      </span>
      <span class="zlbl">
        <span style="width:30%;text-align:left">${e}</span>
        <span style="width:40%;color:#4CB87E;font-weight:800">${r[0]}\u2013${r[1]} ${this.t("ideal")}</span>
        <span style="width:30%;text-align:right">${i}</span>
      </span>`}sensorInd(t){let e=E(this.st(t.entity)),i=t.name??this.friendly(t.entity),s=this.unit(t.entity),r=t.anzeige??"wert",a=t.entity.split(".")[0],c=a==="number"||a==="input_number",p=this.hass.states[t.entity]?.attributes??{},d=t.step??(Number(p.step)||.1),g=p.min,f=p.max,x=(String(d).split(".")[1]??"").length||1,y=S=>{let b=S;g!==void 0&&(b=Math.max(g,b)),f!==void 0&&(b=Math.min(f,b)),this.hass.callService(a,"set_value",{entity_id:t.entity,value:Number(b.toFixed(x))})},w,v=t.ideal??[0,0],_=t.ok??v;if(r==="zone"){let S=e!==null&&e>=v[0]&&e<=v[1],b=e!==null&&e>=_[0]&&e<=_[1];w=t.color??(S?m.ok:b?m.warn:m.crit)}else r==="graph"?w=t.color??m.water:w=t.color??"rgba(242,247,243,.95)";let C=this.trendArrow(this._spark[t.entity]),k=C?o`<ha-icon icon="${C.icon}" title=${this.t("Trend")}
          style="--mdc-icon-size:${C.size}px;color:${C.color};margin-right:3px;vertical-align:-3px"></ha-icon>`:u,F=o`<div class="ihd">
      <span class="ilbl" style="color:${r==="wert"?"var(--tx-2)":w}">
        ${t.icon?o`<ha-icon icon="${t.icon}" style="--mdc-icon-size:14px"></ha-icon>`:u}${i}
        ${c?o`<ha-icon icon="mdi:pencil" style="--mdc-icon-size:11px;opacity:.45;margin-left:3px"></ha-icon>`:u}
      </span>
      ${c?o`<span class="setrow">
            <button class="gc stepbtn" title=${this.t("weniger")} @click=${S=>{S.stopPropagation(),e!==null&&y(e-d)}}><ha-icon icon="mdi:minus" style="--mdc-icon-size:16px"></ha-icon></button>
            <span class="setval" style="color:${w}">${k}${e!==null?e:"\u2013"}<span class="u">${s}</span></span>
            <button class="gc stepbtn" title=${this.t("mehr")} @click=${S=>{S.stopPropagation(),y((e??g??0)+d)}}><ha-icon icon="mdi:plus" style="--mdc-icon-size:16px"></ha-icon></button></span>`:o`<span class="ival" style="color:${w}">
            ${k}${e!==null?e:this.st(t.entity)??"\u2013"}<span class="u">${s}</span></span>`}
    </div>`,$=r==="zone"?o`${this.zoneV6(e,t.min??0,t.max??14,_,v)}
          ${(this._spark[t.entity]?.length??0)>1?o`<div class="spark" style="margin-top:7px;opacity:.85">${Vt(this._spark[t.entity],w,this.chartW(74),28)}</div>`:u}`:r==="graph"?o`<div class="spark">${Vt(this._spark[t.entity]??[],w,this.chartW(74),38)}</div>`:u;return o`<div class="ind" style="cursor:pointer" @click=${()=>this.moreInfo(t.entity)}>${F}${$}</div>`}mediaBlock(){let t=this._config,e=t.media_height??180;if(t.image_url)return o`<div class="seclbl">${this.t("Livestream")}</div>
        <img src=${t.image_url} alt="" loading="lazy"
          style="width:100%;height:${e}px;object-fit:cover;border-radius:12px;border:1px solid var(--line);display:block">`;if(t.camera_entity){let i=this.hass.states[t.camera_entity],s=i?.attributes?.entity_picture;return o`<div class="seclbl">${this.t("Livestream")}</div>
        <button class="gc" title=${this.t("Live ansehen")} @click=${()=>this.moreInfo(t.camera_entity)}
          style="width:100%;padding:0;border:1px solid var(--line);border-radius:12px;overflow:hidden;display:block;background:#000;cursor:pointer">
          ${i&&s?o`<img src=${s} alt="" style="width:100%;height:${e}px;object-fit:cover;display:block">`:o`<div style="height:${e}px;display:flex;align-items:center;justify-content:center;gap:8px;color:var(--tx-3)">
                <ha-icon icon="mdi:cctv" style="--mdc-icon-size:22px"></ha-icon>${this.t("Kamera nicht verf\xFCgbar")}</div>`}
        </button>`}return u}logExcerpt(){if(this._config.show_log===!1)return u;let i=this.hass.states[this.e("event")]?.attributes?.verlauf??[];if(!i.length)return u;let s=(this.expOpen("log")?i.slice(-3):i.slice(-1)).reverse();return o`${this.expHeader("log","Protokoll")}
      <div style="display:flex;flex-direction:column;gap:5px">
        ${s.map(r=>o`<button class="gc" @click=${()=>this.moreInfo(this.e("event"))}
          style="display:flex;align-items:center;gap:9px;width:100%;text-align:left;color:inherit;
            background:${Bt[r.level]??Bt.none};border:none;border-radius:9px;padding:9px 11px;min-height:38px">
          <span style="width:7px;height:7px;border-radius:50%;flex-shrink:0;background:${Me[r.level]??m.info}"></span>
          <span style="flex:1;min-width:0;font-size:12px;font-weight:700;color:var(--tx-2);overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${r.text}</span>
          <span style="font:700 10px var(--f-num);color:var(--tx-3);flex-shrink:0">${r.ts}</span>
        </button>`)}
      </div>`}todoBlock(){let t=this._config,e=R(this.hass,t.tent,"zelt","todo")??K("todo",t.tent,"aufgaben",t.overrides),i=this.hass.states[e]?.attributes?.aufgaben_offen??[],s=`${t.station}: `,r=i.filter(c=>c.text.startsWith(s)).map(c=>({uid:c.uid,text:c.text.slice(s.length)}));if(!r.length)return u;let a=this.expOpen("todo")?r:r.slice(0,1);return o`${this.expHeader("todo","Aufgaben")}
      <div style="display:flex;flex-direction:column;gap:5px">
        ${a.map(c=>o`<button class="gc" title=${this.t("Als erledigt markieren")}
          @click=${()=>this.completeTodo(e,c.uid)}
          style="display:flex;align-items:center;gap:9px;width:100%;text-align:left;color:inherit;
            background:rgba(255,255,255,.03);border:1px solid var(--line);border-radius:9px;padding:9px 11px;min-height:38px;cursor:pointer">
          <ha-icon icon="mdi:checkbox-blank-circle-outline" style="--mdc-icon-size:16px;color:var(--accent, ${m.ok})"></ha-icon>
          <span style="flex:1;min-width:0;font-size:12px;font-weight:700;color:var(--tx-2)">${c.text}</span>
        </button>`)}
      </div>`}completeTodo(t,e){this.hass.callService("todo","update_item",{entity_id:t,item:e,status:"completed"})}groupedSettings(){let t=(r,a)=>{let c=a.map(([p,d,g,f])=>({eid:this.eRole(p,d,g),label:f})).filter(p=>p.eid&&this.hass.states[p.eid]);return{title:r,items:c}},e=[t(this.t("Lichtzeiten"),[["time","licht_an","light_on","Licht AN"],["time","licht_aus_seedling_veg","light_off_sv","AUS Seed/Veg"],["time","licht_aus_bloom_flush","light_off_bloom","AUS Bloom/Flush"]]),t(this.t("Pumpe"),[["number","pumpe_an_seedling","pump_on_seedling","AN Seedling"],["number","pumpe_aus_seedling","pump_off_seedling","AUS Seedling"],["number","pumpe_an_veg","pump_on_veg","AN Veg"],["number","pumpe_aus_veg","pump_off_veg","AUS Veg"],["number","pumpe_an_bloom_flush","pump_on_bloom","AN Bloom"],["number","pumpe_aus_bloom_flush","pump_off_bloom","AUS Bloom"]]),t(this.t("Heizung"),[["number","heizung_zieltemperatur","heat_target","Ziel \xB0C"],["number","heizung_hysterese","heat_hyst","Hysterese K"]]),t(this.t("Schwellen & Sonstiges"),[["date","keimstart","germination","Keimstart"],["number","manuelle_ubernahme","override_minutes","Man. \xDCbernahme"],["number","lux_ppfd_faktor","lux_factor","Lux-Faktor"],["number","fullstand_minimum_pumpensperre","level_min","F\xFCllstand-Min"],["number","bodenfeuchte_schwelle_bewassern_unter","moisture_min","Feuchte-Schwelle"]])].filter(r=>r.items.length),i=this.e("germinationReset"),s=i&&this.hass.states[i];return o`<div style="margin-top:4px">
      ${this.hass.states[this.e("plant")]?o`<div class="seclbl">${this.t("Pflanze")}</div>${this.plantDropdown(this.e("plant"))}`:u}
      ${e.map(r=>o`
        <div class="seclbl">${r.title}</div>
        <div class="settings-grid">${r.items.map(a=>this.setting(a.eid,a.label))}</div>`)}
      ${s?o`<button class="gc" title=${this.t("Keimdatum l\xF6schen")}
          style="display:flex;align-items:center;justify-content:center;gap:8px;width:100%;margin-top:10px;
            padding:10px;border:1px solid var(--line);border-radius:10px;background:var(--card-3);
            color:var(--tx-2);font:800 12px var(--f-ui);cursor:pointer"
          @click=${()=>this.hass.callService("button","press",{entity_id:i})}>
          <ha-icon icon="mdi:calendar-remove" style="--mdc-icon-size:16px;color:var(--tx-3)"></ha-icon>
          ${this.t("Keimstart zur\xFCcksetzen")}</button>`:u}
    </div>`}};customElements.define("growctrl-station-card",Gt);var kn=[h.text("title","\u{1F3F7}\uFE0F Titel"),h.num("columns","\u25A6 Spalten",1,6)],Sn=[h.entity("entity","\u{1F50C} Aktor",["switch","input_boolean","light","fan"]),h.text("name","\u270F\uFE0F Anzeigename (optional)"),h.text("group","\u{1F5C2}\uFE0F Gruppe (optional, z.B. Zelt / Pflanzen)"),h.select("kind","\u{1F3A8} Art (Farbe/Icon, optional)",[{value:"light",label:"Licht"},{value:"heat",label:"Heizung"},{value:"water",label:"Wasser / Befeuchter"},{value:"o2",label:"O\u2082"},{value:"fan",label:"L\xFCfter"},{value:"pump",label:"Pumpe"},{value:"dehum",label:"Entfeuchter"}]),h.bool("confirm","\u2705 Mit Best\xE4tigung schalten")],jt=class extends L{render(){return o`${this.form(kn)}
      ${this.list({key:"controls",rowSchema:Sn,title:"\u{1F50C} Aktoren",addLabel:"Aktor hinzuf\xFCgen",newItem:()=>({entity:""})})}
      ${this.styleSection()}
      <div class="hint">Gleiche <b>Gruppe</b> = gemeinsame \u00dcberschrift. <b>Art</b> setzt Farbe und Icon.
        <b>Best\u00e4tigung</b> fragt vor dem Schalten nach (z.B. f\u00fcr Pumpen).</div>`}};customElements.define("growctrl-controls-editor",jt);var An={switch:"mdi:power",light:"mdi:lightbulb",fan:"mdi:fan",input_boolean:"mdi:toggle-switch"},Cn={light:"mdi:lightbulb",heat:"mdi:radiator",water:"mdi:air-humidifier",o2:"mdi:gas-cylinder",fan:"mdi:fan",pump:"mdi:water-pump",dehum:"mdi:air-humidifier-off"},qt=class extends A{static{this.styles=T}validateConfig(n){if(!Array.isArray(n.controls)||!n.controls.length)throw new Error("growctrl-controls-card: 'controls' (min. 1 Eintrag) ist Pflicht.")}static getConfigElement(){return document.createElement("growctrl-controls-editor")}static getStubConfig(){return{columns:4,controls:[{entity:"switch.demo_licht",kind:"light",name:"Licht"},{entity:"switch.demo_luefter",kind:"fan",name:"L\xFCfter"},{entity:"switch.demo_pumpe",kind:"pump",name:"Pumpe"},{entity:"switch.demo_heizung",kind:"heat",name:"Heizung"}]}}render(){let n=this._config;if(!this.hass)return u;let t=n.columns??4,e=new Map;return n.controls.forEach(i=>{let s=i.group??"";e.has(s)||e.set(s,[]),e.get(s).push(i)}),o`<div class="card ${n.style?.glass?"glass":""}" style="${P(n.style)};position:relative">
      ${n.title?o`<div class="hd"><div class="ttl">${n.title}</div></div>`:u}
      ${[...e.entries()].map(([i,s])=>o`
        ${i?o`<div class="seclbl">${i}</div>`:u}
        <div class="acts" style="grid-template-columns:repeat(${t},1fr); ${i?"":"margin-top:4px"}">
          ${s.map(r=>{let a=this.hass.states[r.entity]?this.isOn(r.entity):r.kind==="light"||r.kind==="fan",c=r.name??this.friendly(r.entity),p=r.kind??"",d=p==="light"||p==="heat"||p==="water"||p==="dehum"?p:"",g=r.icon??this.hass.states[r.entity]?.attributes?.icon??Cn[p]??An[r.entity.split(".")[0]]??"mdi:power";return o`<button class="gc act ${a?"on":""} ${a?d:""}" style="position:relative"
              title=${r.confirm?"Gesicherter Aktor \u2013 fragt vor dem Schalten nach":c}
              @click=${()=>r.confirm?this.confirmToggle(r.entity,c):this.toggle(r.entity)}>
              ${r.confirm?o`<ha-icon icon="mdi:lock" title="Bestätigung vor dem Schalten"
                style="position:absolute;top:6px;right:6px;--mdc-icon-size:12px;color:var(--tx-3)"></ha-icon>`:u}
              <ha-icon class="aic" icon=${g} style="--mdc-icon-size:18px"></ha-icon>
              <span class="anm">${c}</span>
              <span class="ast">${a?"AN":"AUS"}</span>
            </button>`})}
        </div>`)}
      ${this.renderConfirm()}
    </div>`}};customElements.define("growctrl-controls-card",qt);var En=[h.text("title","\u{1F3F7}\uFE0F Titel"),h.num("columns","\u25A6 Spalten",1,6)],zn=[h.entity("entity","\u{1F4C8} Sensor","sensor"),h.text("name","\u270F\uFE0F Anzeigename (optional)"),h.num("min","Sollbereich Min (optional)"),h.num("max","Sollbereich Max (optional)"),h.select("accent","\u{1F3A8} Akzentfarbe (optional)",[{value:"temp",label:"Temperatur (orange)"},{value:"hum",label:"Feuchte (blau)"},{value:"vpd",label:"VPD (Akzent)"}])],Ln=[h.select("quelle","\u{1F522} Quelle",[{value:"sensor",label:"Eigener Sensor"},{value:"ph",label:"pH (aus Integration)"},{value:"ec",label:"EC (aus Integration)"}]),h.select("darstellung","\u{1F4CA} Darstellung",[{value:"verlauf",label:"Verlauf (Linie + Sollband)"},{value:"balken",label:"Zonen-Balken (schlecht/ideal/gut)"}]),h.entity("entity","\u{1F4C8} Sensor (nur bei \u201EEigener Sensor\u201C)","sensor"),h.text("name","\u270F\uFE0F Anzeigename (optional)"),h.num("min","Sollband Min (nur eigener Sensor)"),h.num("max","Sollband Max (nur eigener Sensor)"),h.num("hours","\u23F1\uFE0F Zeitraum in h (Standard 24)",1,168)],Qt=class extends L{render(){return o`${this.form(En)}
      ${this.form([this.tentSelect("tent","\u{1F3D5}\uFE0F Zelt (f\xFCr pH/EC aus Integration, optional)"),this.stationSelect(this._config?.tent,"station","\u{1F331} Station (= Pflanze, f\xFCr pH/EC)")])}
      ${this.list({key:"sensors",rowSchema:zn,title:"\u{1F4C8} Sensoren (Kacheln)",addLabel:"Sensor hinzuf\xFCgen",newItem:()=>({entity:""})})}
      ${this.list({key:"charts",rowSchema:Ln,title:"\u{1F4C9} Charts (pH/EC mit Zonen oder eigener Sensor)",addLabel:"Chart hinzuf\xFCgen",newItem:()=>({quelle:"ph",darstellung:"balken"})})}
      ${this.styleSection()}
      <div class="hint">Oben <b>Kacheln</b> mit aktuellem Wert. Darunter <b>Charts</b>:
        f\u00fcr <b>pH/EC</b> einfach <b>Zelt + Station</b> w\u00e4hlen und Quelle \u201epH\u201c bzw. \u201eEC\u201c \u2013 Wert und
        die Zonen (schlecht/ideal/gut) kommen automatisch aus der <b>gew\u00e4hlten Pflanze</b>, kein Sensor n\u00f6tig.
        Mit \u201eVerlauf\u201c als Linie mit Sollband, mit \u201eZonen-Balken\u201c wie in der Station-Karte.</div>`}};customElements.define("growctrl-sensors-editor",Qt);var Xt=class extends A{constructor(){super(...arguments);this._hist={}}static{this.styles=T}static{this.properties={...A.properties,_hist:{state:!0}}}validateConfig(t){if(!Array.isArray(t.sensors)||!t.sensors.length)throw new Error("growctrl-sensors-card: 'sensors' (min. 1 Eintrag) ist Pflicht.")}static getConfigElement(){return document.createElement("growctrl-sensors-editor")}static getStubConfig(){return{columns:3,sensors:[{entity:"sensor.demo_temp",name:"Temperatur",accent:"temp",min:20,max:28},{entity:"sensor.demo_hum",name:"Luftfeuchte",accent:"hum",min:50,max:70},{entity:"sensor.demo_vpd",name:"VPD",accent:"vpd",min:.8,max:1.5}]}}connectedCallback(){super.connectedCallback(),this._load(),this._timer=window.setInterval(()=>this._load(),5*6e4)}disconnectedCallback(){super.disconnectedCallback(),this._timer&&clearInterval(this._timer)}async _load(){if(!this.hass){setTimeout(()=>this._load(),1e3);return}let t=this._config.charts??[],e={};for(let i of t){let s=this.resolveChart(i);s.entity&&s.mode==="verlauf"&&(e[s.entity]=await O(this.hass,s.entity,i.hours??24))}this._hist=e}gcBus(){let t=this._config;if(!t.tent||!t.station)return null;let e=R(this.hass,t.tent,t.station,"last_event")??N("sensor",t.tent,t.station,"letztes_ereignis",t.overrides),i=this.hass.states[e]?.attributes??{};return{sensors:i.gc_sensors??{},phR:i.gc_ph_bereich??null,ecR:i.gc_ec_bereich??null}}resolveChart(t){let e=t.quelle??"sensor",i=t.darstellung??"verlauf";if(e==="ph"||e==="ec"){let r=this.gcBus(),a=(e==="ph"?r?.sensors.ph:r?.sensors.ec)??"",c=(e==="ph"?r?.phR:r?.ecR)??null,p=e==="ph"?4:0,d=e==="ph"?8:c?Math.max(3,Math.ceil((c[1]+.8)*2)/2):3.5;return{entity:a,name:t.name??(e==="ph"?"pH":"EC"),min:p,max:d,ideal:c,mode:i,integration:!0}}let s=t.min!==void 0&&t.max!==void 0?[t.min,t.max]:null;return{entity:t.entity??"",name:t.name??this.friendly(t.entity??""),min:t.min,max:t.max,ideal:s,mode:i,integration:!1}}zoneBar(t,e,i,s){let r=i-e||1,a=r*.08,c=[Math.max(e,s[0]-a),Math.min(i,s[1]+a)],p=(f,x)=>Math.max(0,(Math.min(x,i)-Math.max(f,e))/r*100),d=[{cls:"z-bad",w:p(e,c[0])},{cls:"z-low",w:p(c[0],s[0])},{cls:"z-ok",w:p(s[0],s[1])},{cls:"z-high",w:p(s[1],c[1])},{cls:"z-bad",w:p(c[1],i)}],g=t!==null?Math.min(100,Math.max(0,(t-e)/r*100)):null;return o`<span class="zones">
        ${d.map(f=>o`<i class="${f.cls}" style="width:${f.w}%"></i>`)}
        ${g!==null?o`<span class="zmark" style="left:${g}%"></span>`:u}
      </span>
      <span class="zlbl">
        <span style="width:30%;text-align:left">${e}</span>
        <span style="width:40%;color:#4CB87E;font-weight:800">${s[0]}\u2013${s[1]} ${this.t("ideal")}</span>
        <span style="width:30%;text-align:right">${i}</span>
      </span>`}bad(t,e){return t!==null&&(e.min!==void 0&&t<e.min||e.max!==void 0&&t>e.max)}render(){let t=this._config;if(!this.hass)return u;let e=t.columns??3,i=(t.charts??[]).some(r=>{let a=this.resolveChart(r),c=E(this.st(a.entity));return c!==null&&!!a.ideal&&(c<a.ideal[0]||c>a.ideal[1])}),s=t.sensors.some(r=>this.bad(E(this.st(r.entity)),r))||i;return o`<div class="card ${t.style?.glass?"glass":""}" data-level=${s?"warning":"ok"} style=${P(t.style)}>
      ${t.title?o`<div class="hd"><div class="ttl">${t.title}</div></div>`:u}
      <div class="kpis" style="grid-template-columns:repeat(${e},minmax(0,1fr))">
        ${t.sensors.map(r=>{let a=!this.hass.states[r.entity],c=E(this.st(r.entity))??(a?r.accent==="hum"?58:r.accent==="vpd"?1.1:23.4:null),p=this.unit(r.entity)||(a?r.accent==="hum"?"%":r.accent==="vpd"?"kPa":"\xB0C":""),d=this.bad(E(this.st(r.entity)),r),g=r.name??this.friendly(r.entity),f=r.accent?`c-${r.accent}`:"";return o`<button class="gc kpi ${f}" @click=${()=>this.moreInfo(r.entity)}>
            <span class="mlbl" style="overflow:hidden; white-space:nowrap; text-overflow:ellipsis; display:block">${g}</span>
            <span class="v" style="${d?`color:${m.crit}`:""}">${c!==null?c:"--"}<span class="u">${p}</span></span>
          </button>`})}
      </div>
      ${(t.charts??[]).map(r=>{let a=this.resolveChart(r),c=E(this.st(a.entity)),p=c!==null&&a.ideal?c<a.ideal[0]||c>a.ideal[1]:this.bad(c,{min:a.min,max:a.max}),d=this.unit(a.entity);return o`<div style="margin-top:14px">
          <div style="display:flex; justify-content:space-between; align-items:baseline; margin-bottom:4px">
            <span class="seclbl" style="margin:0">${a.name}</span>
            ${c!==null?o`<span style="font:700 13px var(--f-num); color:${p?m.crit:m.ok}">${c}${d?o`<span style="font-size:11px;color:var(--tx-2);margin-left:3px">${d}</span>`:u}</span>`:a.ideal?o`<span style="font:700 12px var(--f-num); color:var(--acc)">${a.ideal[0]} \u2013 ${a.ideal[1]}</span>`:u}
          </div>
          ${a.mode==="balken"?this.zoneBar(c,a.min??0,a.max??100,a.ideal??[a.min??0,a.max??100]):H([{data:this._hist[a.entity]??[],color:p?m.crit:m.ok,fill:!0}],{w:this.chartW(),h:96,band:a.ideal?{min:a.ideal[0],max:a.ideal[1]}:{min:a.min,max:a.max},grid:3,hours:r.hours??24})}
        </div>`})}
    </div>`}};customElements.define("growctrl-sensors-card",Xt);var Pn=[h.text("title","\u{1F3F7}\uFE0F Titel"),h.num("limit","\u{1F4CB} Max. Zeilen",3,50),h.select("min_level","\u{1F50D} Anzeige",[{value:"alle",label:"Alle Ereignisse"},{value:"warnung",label:"Nur Warnungen/Fehler"},{value:"info",label:"Nur Infos"}])],Tn=[h.entity("entity","\u{1F4DC} Letztes-Ereignis-Sensor","sensor"),h.text("name","\u270F\uFE0F Label (optional)")],Yt=class extends L{render(){return o`${this.form(Pn)}
      ${this.list({key:"sources",rowSchema:Tn,title:"\u{1F4E1} Quellen",addLabel:"Quelle hinzuf\xFCgen",newItem:()=>({entity:""})})}
      ${this.styleSection()}
      <div class="hint">Sammelt die Ereignisse mehrerer GROWCTRL-Sensoren in ein Protokoll, neueste zuerst.
        <b>Label</b> ersetzt den Quellennamen. <b>Anzeige</b> kann auf Warnungen/Fehler filtern.</div>`}};customElements.define("growctrl-status-editor",Yt);var Jt=class extends A{static{this.styles=T}validateConfig(n){if(!Array.isArray(n.sources)||!n.sources.length)throw new Error("growctrl-status-card: 'sources' (Letztes-Ereignis-Sensoren) ist Pflicht.")}static getConfigElement(){return document.createElement("growctrl-status-editor")}static getStubConfig(){return{sources:[{entity:"sensor.growctrl_gross_main1_letztes_ereignis"}]}}render(){let n=this._config;if(!this.hass)return u;let t=[],e=[];for(let d of n.sources){let g=this.hass.states[d.entity],f=g?.attributes?.verlauf??[];e.push(g?.attributes?.schweregrad??"ok"),f.forEach((x,y)=>t.push({ts:x.ts,t:typeof x.t=="number"?x.t:void 0,text:x.text,level:x.level,src:d.name??this.friendly(d.entity),entity:d.entity,_i:y}))}t.sort((d,g)=>{let f=d.t??-1,x=g.t??-1;return f!==x?x-f:(g._i??0)-(d._i??0)}),!t.length&&n.sources.every(d=>!this.hass.states[d.entity])&&t.push({ts:"12:30",text:"Licht an (Plan)",level:"info",src:"Station"},{ts:"12:05",text:"VPD im Zielbereich",level:"ok",src:"Station"},{ts:"11:40",text:"Tank niedrig \u2013 bitte nachf\xFCllen",level:"warning",src:"Station"});let s=(n.min_level==="warnung"?t.filter(d=>d.level==="warning"||d.level==="critical"):n.min_level==="info"?t.filter(d=>d.level==="info"):t).slice(0,n.limit??12),r=st(e),a=n.sources.length>1,c=d=>d==="critical"?"c":d==="warning"?"w":d==="info"?"i":"",p=r==="ok"?this.t("Info"):r==="warning"?this.t("Warnung"):r==="critical"?this.t("Kritisch"):this.t("Info");return o`<div class="card ${n.style?.glass?"glass":""}" data-level=${r} style=${P(n.style)}>
      <div class="hd">
        <div class="ttl grow">${n.title??this.t("Ereignisprotokoll")}</div>
        <span class="pill ${Z(r)}">${p}</span>
      </div>
      <div class="log">
        ${s.length?s.map(d=>o`
          <button class="gc lrow ${c(d.level)}" @click=${()=>d.entity&&this.moreInfo(d.entity)}>
            <span class="tm">${d.ts}</span>
            ${a?o`<span class="who">${d.src}</span>`:u}
            <span class="what">${d.text}</span>
          </button>`):o`<div class="lrow"><span class="what" style="color:var(--acc)">\u2713 ${this.t("Noch keine Ereignisse")}</span></div>`}
      </div>
    </div>`}};customElements.define("growctrl-status-card",Jt);var Fn=[h.text("title","\u{1F3F7}\uFE0F Titel (optional)"),h.text("logo","\u{1F5BC}\uFE0F Logo-URL (z.B. /local/growctrl/logo.png)"),h.bool("show_chart","\u{1F4C8} 24h-Chart zus\xE4tzlich zum Zonen-Balken"),h.num("hours","\u23F1\uFE0F Chart-Zeitraum (h)",1,168)],te=class extends L{render(){let n=[this.stationSelect(this._config?.tent),h.text("name","\u270F\uFE0F Anzeigename (optional)")];return o`${this.form([this.tentSelect("tent","\u{1F3D5}\uFE0F Zelt"),...Fn])}
      ${this.list({key:"stations",rowSchema:n,title:"\u{1F331} Stationen (Informationssystem)",addLabel:"Station hinzuf\xFCgen",newItem:()=>({station:""})})}
      ${this.styleSection()}
      <div class="hint">Die Hero-Karte ist die Zelt-\u00dcbersicht: Klima-Werte, VPD-Skala und das
        Informationssystem. Die gelisteten <b>Stationen</b> liefern die Ereigniszeilen darunter.</div>`}};customElements.define("growctrl-hero-editor",te);var Ge=[{w:20,col:"#6E97DE",lbl:"zu feucht"},{w:20,col:"#58E0A5",lbl:"Seedling"},{w:20,col:"#2FB36C",lbl:"Veg"},{w:20,col:"#E5B567",lbl:"Bloom"},{w:20,col:"#D4726F",lbl:"zu trocken"}],ee=2,ne=class extends A{constructor(){super(...arguments);this._logoErr=!1;this._hist=[]}static{this.styles=T}static{this.properties={...A.properties,_hist:{state:!0},_logoErr:{state:!0}}}setConfig(t){t?.logo!==this._config?.logo&&(this._logoErr=!1),super.setConfig(t)}validateConfig(t){if(!t.tent)throw new Error("growctrl-hero-card: 'tent' ist Pflicht (Zelt-Name aus der Integration).")}static getConfigElement(){return document.createElement("growctrl-hero-editor")}static getStubConfig(){return{tent:"gross",stations:[{station:"main1"}]}}te(t){let[e,i,s]=at[t],r=this._config;return r.overrides?.[i]??R(this.hass,r.tent,"zelt",s)??K(e,r.tent,i,r.overrides)}connectedCallback(){super.connectedCallback(),this._load(),this._timer=window.setInterval(()=>this._load(),5*6e4)}disconnectedCallback(){super.disconnectedCallback(),this._timer&&clearInterval(this._timer)}async _load(){if(!this.hass){setTimeout(()=>this._load(),1e3);return}this._hist=await O(this.hass,this.te("vpd"),this._config.hours??24)}tglBtn(t,e,i){return o`<button class="gc tgl ${i?"on":""}" style="flex:1; justify-content:center" @click=${()=>this.confirmToggle(t,e)}>
      <span class="sw"></span> ${e}</button>`}render(){let t=this._config;if(!this.hass)return u;let e=this.hass.states[this.te("vpd")],i=!e&&!this.hass.states[this.te("enabled")],s=E(e?.state)??(i?.76:null),r=e?.attributes?.temp??(i?21.5:null),a=e?.attributes?.rh??(i?61:null),c=e?.attributes?.phase_effektiv??"",p=e?.attributes?.sollwerte,d=this.isOn(this.te("enabled"))||i,g=this.isOn(this.te("climate")),f=this.hass.states[this.te("status")],x=f?.attributes?.probleme??[],y=(t.stations??[]).map(b=>{let z=this.hass.states[R(this.hass,t.tent,b.station,"last_event")??N("sensor",t.tent,b.station,"letztes_ereignis",t.overrides)],M=this.hass.states[R(this.hass,t.tent,b.station,"light_rest")??N("sensor",t.tent,b.station,"licht_restzeit",t.overrides)],B=z?.attributes?.schweregrad??"ok";return{name:b.name??b.station,text:z?.state??"\u2013",level:B,lightText:M?.attributes?.text??(M?.state?`${this.t("Licht")} ${this.t(String(M.attributes?.zustand??""))}`:""),on:M?.attributes?.zustand==="an",ent:R(this.hass,t.tent,b.station,"last_event")??N("sensor",t.tent,b.station,"letztes_ereignis",t.overrides)}}),w=b=>b==="warning"||b==="critical",v=st([(f?.state??"").toLowerCase()==="problem"?"warning":"ok",...y.map(b=>w(b.level)?b.level:"ok")]),_=[...x.map(b=>({label:b,level:"warning"})),...y.filter(b=>w(b.level)).map(b=>({label:`${b.name}: ${b.text}`,level:b.level}))],C=s!==null&&p&&s>=p.vpd_min&&s<=p.vpd_max,k=s!==null?Math.min(100,Math.max(0,s/ee*100)):null,F=this.isOn(this.te("stale")),$=e?.attributes?.temp_entity||this.te("vpd"),S=e?.attributes?.rh_entity||this.te("vpd");return o`<div class="card ${t.style?.glass?"glass":""}" data-level=${v} style="${P(t.style)};position:relative">
      <div class="hd">
        ${t.logo&&!this._logoErr?o`<img src=${t.logo} alt="Logo" @error=${()=>{this._logoErr=!0}}
              style="width:46px;height:46px;border-radius:16px;object-fit:contain;background:rgba(255,255,255,.92);padding:3px;flex-shrink:0" />`:o`<div class="badge-ic"><ha-icon icon="mdi:sprout" style="--mdc-icon-size:22px"></ha-icon></div>`}
        <div class="grow" style="min-width:0">
          <div class="ttl">${t.title??`Growroom \xB7 ${t.tent}`}</div>
          ${c?o`<div class="sub">${this.t("Klima-Phase")} ${this.t(c)}</div>`:u}
        </div>
        <span class="pill ${Z(v)}">${v==="ok"?this.t("Alles OK"):v==="warning"?this.t("Warnung"):v==="critical"?this.t("Kritisch"):this.t("Info")}</span>
      </div>

      <div style="display:flex; gap:8px; margin-bottom:16px">
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

      ${F?o`<div style="margin-top:10px;display:flex;align-items:center;gap:7px;padding:7px 12px;border-radius:10px;
        background:color-mix(in srgb, ${m.warn} 14%, transparent);color:${m.warn};font-size:12.5px;font-weight:700">
        <ha-icon icon="mdi:timer-alert-outline" style="--mdc-icon-size:16px"></ha-icon>
        ${this.t("Klima-Sensoren eingefroren")} \u00b7 ${this.t("Werte evtl. veraltet")}</div>`:u}

      <div style="margin-top:16px">
        <div class="zones">
          ${Ge.map(b=>o`<i style="width:${b.w}%;background:${b.col}"></i>`)}
          ${p?o`<span class="zband" style="left:${p.vpd_min/ee*100}%;width:${(p.vpd_max-p.vpd_min)/ee*100}%"></span>`:u}
          ${k!==null?o`<span class="zmark" style="left:${k}%"></span>`:u}
        </div>
        <div class="zlbl">${Ge.map(b=>o`<span style="width:${b.w}%">${this.t(b.lbl)}</span>`)}</div>
      </div>

      ${t.show_chart===!0&&this._hist.length>1?o`
        <div class="seclbl">VPD · ${t.hours??24}h</div>
        ${H([{data:this._hist,color:C===!1?m.warn:m.ok,fill:!0}],{w:this.chartW(),h:96,band:p?{min:p.vpd_min,max:p.vpd_max}:void 0,grid:3,hours:t.hours??24})}`:u}

      ${y.length?o`<div class="seclbl">${this.t("Stationen")}</div>
        <div style="display:flex; flex-direction:column; gap:7px">
          ${y.map(b=>o`<button class="gc supply" @click=${()=>b.ent&&this.moreInfo(b.ent)}>
            <span class="shd">
              <span class="sic" style="color:${b.on?m.light:"var(--tx-3)"}"><ha-icon icon="mdi:lightbulb${b.on?"-on":"-outline"}" style="--mdc-icon-size:18px"></ha-icon></span>
              <span class="stt">${b.name}</span>
              <span class="sbadge" style="color:${w(b.level)?b.level==="critical"?m.crit:m.warn:m.ok}">${w(b.level)?b.level==="critical"?this.t("Fehler"):this.t("Warnung"):this.t("OK")}</span>
            </span>
            <span class="sft"><span>${b.lightText||b.text}</span><span></span></span>
          </button>`)}
        </div>`:u}

      <div class="seclbl">${this.t("Informationssystem")}</div>
      ${_.length?o`<div style="display:flex; flex-direction:column; gap:7px">
            ${_.map(b=>o`<div class="event" style="cursor:default">
              <span class="edot" style="background:${b.level==="critical"?m.crit:m.warn}"></span>
              <span class="etx" style="color:${b.level==="critical"?m.crit:m.warn}">${b.label}</span></div>`)}
          </div>`:o`<div class="event" style="cursor:default">
            <span class="edot" style="background:${m.ok};box-shadow:0 0 6px ${m.ok}"></span>
            <span class="etx" style="color:${m.ok}">${this.t("Alle Systeme arbeiten normal")}</span></div>`}
      ${this.renderConfirm()}
    </div>`}};customElements.define("growctrl-hero-card",ne);var ie=class extends L{render(){let n=this._config.tent,t=[this.tentSelect("tent","\u{1F3D5}\uFE0F Zelt"),h.text("title","\u{1F3F7}\uFE0F Titel"),h.bool("show_sensors","\u{1F9EA} Sensoren-Sektion zeigen (pH/EC/Temp/RH/\u2026, Standard an)",!0),h.bool("show_controls","\u{1F39B}\uFE0F Steuerungs-Sektion zeigen (Licht/Pumpe/\u2026, Standard an)",!0),h.bool("show_tent_row","\u{1F3D5}\uFE0F Zelt-Sektion zeigen (Aktiv/Klima/VPD/Status)",!0),h.text("tent_name","\u270F\uFE0F Name der Zelt-Zeile (optional)")],e=[this.stationSelect(n,"station","\u{1F331} Station (= Pflanze)"),h.text("name","\u270F\uFE0F Anzeigename (optional)")];return o`${this.form(t)}
      ${this.list({key:"stations",rowSchema:e,title:"\u{1F331} Stationen",addLabel:"Station hinzuf\xFCgen",newItem:()=>({station:""})})}
      ${this.styleSection()}
      <div class="hint">Drei Ampel-Sektionen: <b>Sensoren</b> (pH / EC / Temperatur / Feuchte /
        Wasser- &amp; Bodentemperatur \u2013 nur Spalten, die min. eine Station hat), <b>Steuerung</b>
        (Licht / Pumpe / Heizung / Auto / Eingriff / Status) und <b>Zelt</b> (Aktiv / Klima / VPD / Status).
        Es gen\u00fcgt, die Stationen zu listen \u2013 die <b>Idealbereiche</b> f\u00fcr die Sensor-Ampel
        kommen automatisch aus dem Pflanzen-Preset der Integration (abh\u00e4ngig von Systemtyp + Pflanze).<br>
        Ampel: <b>gr\u00fcn</b> = im Idealbereich, <b>gelb</b> = knapp daneben, <b>rot</b> = Problem,
        <b>grau</b> = kein Wert, <b>leere Zelle</b> = dieser Sensor ist an der Station nicht angelegt. Tippen \u00f6ffnet die Entit\u00e4t.</div>`}};customElements.define("growctrl-checkup-editor",ie);var Mn=[{key:"ph",icon:"mdi:ph",label:"pH",range:"ph",margin:.3},{key:"ec",icon:"mdi:flash-outline",label:"EC",range:"ec",margin:.3},{key:"temp",icon:"mdi:thermometer",label:"Temp",range:null,margin:0},{key:"humidity",icon:"mdi:water-percent",label:"RH",range:null,margin:0},{key:"water_temp",icon:"mdi:coolant-temperature",label:"Wasser",range:null,margin:0},{key:"soil_temp",icon:"mdi:thermometer-low",label:"Boden",range:null,margin:0}],se=class extends A{static{this.styles=T}validateConfig(n){if(!Array.isArray(n.stations)||!n.stations.length)throw new Error("growctrl-checkup-card: 'stations' (min. 1) ist Pflicht.")}static getConfigElement(){return document.createElement("growctrl-checkup-editor")}static getStubConfig(){return{tent:"gross",show_tent_row:!0,stations:[{station:"main1"},{station:"main2"}]}}sEnt(n,t,e){let[i,s,r]=wt[e];return R(this.hass,n,t,r)??N(i,n,t,s)}tEnt(n,t){let[e,i,s]=at[t];return R(this.hass,n,"zelt",s)??K(e,n,i)}sensorColsPresent(n){return Mn.filter(t=>n.some(e=>!!(this.hass.states[this.sEnt(e.tent,e.station,"event")]?.attributes?.gc_sensors??{})[t.key]))}sensorCell(n,t,e,i){let r=this.hass.states[this.sEnt(n,t,"event")]?.attributes??{},c=(r.gc_sensors??{})[e.key];if(!c)return{configured:!1,level:"off",title:""};if(i)return{configured:!0,level:"off",title:this.t("gestoppt")};let p=E(this.hass.states[c]?.state);if(p===null)return{configured:!0,level:"off",title:this.t("kein Wert")};let d=null;if(e.range==="ph"?d=r.gc_ph_bereich??null:e.range==="ec"&&(d=r.gc_ec_bereich??null),!d)return{configured:!0,level:"ok",title:`${p}`};let[g,f]=d,x=p>=g&&p<=f,y=p>=g-e.margin&&p<=f+e.margin;return{configured:!0,level:x?"ok":y?"warning":"critical",title:`${e.label} ${p} (${this.t("ideal")} ${g}\u2013${f})`}}avail(n){let t=this.hass.states[n];return!!t&&t.state!=="unavailable"&&t.state!=="unknown"}exists(n){return!!this.hass.states[n]}stationStopped(n,t){let e=this.tEnt(n,"enabled"),i=this.avail(e)&&!this.isOn(e),s=this.hass.states[this.sEnt(n,t,"stage")]?.state==="Aus";return{stopped:i||s,tentOff:i,off:s}}stationCells(n,t){let e=this.sEnt(n,t,"lightRest"),i=this.sEnt(n,t,"pumpRest"),s=this.sEnt(n,t,"heatActive"),r=this.sEnt(n,t,"auto"),a=this.sEnt(n,t,"pOverride"),c=this.sEnt(n,t,"event"),{stopped:p,tentOff:d}=this.stationStopped(n,t),g=d?this.t("Zelt aus \u2013 gestoppt"):this.t("Station aus"),f=(_t,Xe,Ye)=>({present:this.exists(_t),ent:_t,level:p?"off":this.avail(_t)?Xe:"off",text:p?g:Ye}),x=this.hass.states[e],y=x?.attributes?.zustand==="an",w=this.isOn(this.sEnt(n,t,"pFailsafe")),v=this.isOn(this.sEnt(n,t,"pPower"))||this.isOn(this.sEnt(n,t,"pTime")),_=f(e,w?"critical":v?"warning":y?"ok":"off",w?this.t("Licht-Failsafe ausgel\xF6st"):this.isOn(this.sEnt(n,t,"pPower"))?this.t("Licht AN ohne Leistung"):this.isOn(this.sEnt(n,t,"pTime"))?this.t("Lichtzeiten unvollst\xE4ndig"):y?this.t("Licht an"):x?.attributes?.aktiv===!1?this.t("Licht ausgeschaltet"):this.t("Licht aus")),C=this.isOn(this.sEnt(n,t,"pPump")),k=this.hass.states[i],F=f(i,C?"critical":k?.attributes?.aktiv===!1?"off":"ok",C?this.t("Pumpe gesperrt (F\xFCllstand)"):k?.attributes?.aktiv===!1?this.t("Pumpe ausgeschaltet"):k?.attributes?.text??this.t("Zyklus l\xE4uft")),$=this.isOn(this.sEnt(n,t,"heatSensorFault")),S=this.isOn(this.sEnt(n,t,"heatOvertemp")),b=this.isOn(this.sEnt(n,t,"heatEnabled")),z=this.hass.states[s],M=z?.state==="on",B=z?.attributes??{},U=f(s,$||S?"critical":b?"ok":"off",$?this.t("Heizung Sensorfehler"):S?this.t("Heizung \xDCbertemperatur"):b?M?`${this.t("Heizung heizt")}${typeof B.ist_temp=="number"?` \xB7 ${B.ist_temp} \xB0C`:""}`:this.t("Heizung bereit"):this.t("Heizung aus")),j=this.isOn(r),q=this.isOn(this.sEnt(n,t,"wartung")),D=f(r,q?"info":j?"ok":"warning",q?this.t("Wartungsmodus aktiv"):j?this.t("Automatik AN"):this.t("Automatik AUS (manuell)")),he=this.isOn(a),qe=f(a,he?"warning":"ok",he?this.t("Manueller Eingriff aktiv"):this.t("Kein Eingriff")),me=this.hass.states[c],ge=me?.attributes?.schweregrad??"ok",Qe={present:!0,ent:c,keepClick:!0,level:p?"off":ge==="critical"?"critical":ge==="warning"?"warning":"ok",text:p?g:me?.state??"OK"};return{licht:_,pumpe:F,heizung:U,auto:D,eingriff:qe,status:Qe}}tentCells(n){let t=this.isOn(this.tEnt(n,"enabled")),e=t?"ok":"warning",i=t?this.t("Zelt aktiv"):this.t("Zelt deaktiviert"),s=this.isOn(this.tEnt(n,"climate")),r=s?"ok":"off",a=s?this.t("Klima-Automatik AN"):this.t("Klima-Automatik AUS"),c=this.hass.states[this.tEnt(n,"vpd")],p=E(c?.state),d=c?.attributes?.sollwerte,g=p!==null&&d?p>=d.vpd_min&&p<=d.vpd_max?"ok":"warning":c?"ok":"off",f=p!==null?`VPD ${p.toFixed(2)} kPa${d?` (${this.t("Soll")} ${d.vpd_min}\u2013${d.vpd_max})`:""}`:"\u2014",x=this.hass.states[this.tEnt(n,"status")],y=(x?.state??"").toLowerCase()==="problem",w=x?.attributes?.probleme??[],v=y?"warning":"ok",_=y?w[0]??this.t("Problem erkannt"):this.t("Alles OK");return{aktiv:e,klima:r,vpd:g,status:v,aktivText:i,klimaText:a,vpdText:f,statusText:_,ent:{aktiv:this.tEnt(n,"enabled"),klima:this.tEnt(n,"climate"),vpd:this.tEnt(n,"vpd"),status:this.tEnt(n,"status")}}}dot(n){return o`<span class="dot ${n==="off"?"off":Z(n)}"></span>`}mc(n,t,e){return o`<button class="gc mc" title=${t} @click=${()=>e&&this.moreInfo(e)}>${this.dot(n)}</button>`}pCell(n,t){return n.configured?n.level==="off"?o`<span class="mc" style="cursor:default">${this.dot("off")}</span>`:this.mc(n.level,n.title,t):o`<span class="mc" style="cursor:default"></span>`}cCell(n){return n.present?n.level==="off"&&!n.keepClick?o`<span class="mc" style="cursor:default" title=${n.text}>${this.dot("off")}</span>`:this.mc(n.level,n.text,n.ent):o`<span class="mc" style="cursor:default"></span>`}mh(n,t){return o`<span class="mh" title=${this.t(t)}><ha-icon icon=${n}></ha-icon></span>`}mClass(n){return n===4?"m4":n===5?"m5":n===6?"m6":""}gridStyle(n){return this.mClass(n)?"":`grid-template-columns:1fr repeat(${n}, minmax(0,46px))`}render(){let n=this._config;if(!this.hass)return u;let t=(n.stations??[]).map(v=>({tent:v.tent??n.tent??"gross",station:v.station,name:v.name??v.station})),e=n.tent??t[0]?.tent??"gross",i=n.show_tent_row!==!1,s=n.show_sensors!==!1,r=n.show_controls!==!1,a=[],c=s?this.sensorColsPresent(t):[],p=c.length?t.map(v=>{let _=this.stationStopped(v.tent,v.station).stopped,C=c.map(k=>({col:k,cell:this.sensorCell(v.tent,v.station,k,_)}));return C.forEach(k=>{k.cell.configured&&k.cell.level!=="off"&&a.push(k.cell.level)}),{...v,cells:C}}):[],d=t.some(v=>!!this.hass.states[this.sEnt(v.tent,v.station,"heatActive")]),g=r?t.map(v=>{let _=this.stationCells(v.tent,v.station);return[_.status,_.pumpe,_.licht,_.auto,_.eingriff,...d?[_.heizung]:[]].forEach(C=>{C.present&&C.level!=="off"&&a.push(C.level)}),{...v,cells:_}}):[],f=i?this.tentCells(e):null;f&&a.push(f.status,f.aktiv,f.vpd);let x=st(a),y=c.length,w=d?6:5;return o`<div class="card ${n.style?.glass?"glass":""}" data-level=${x} style=${P(n.style)}>
      <div class="hd">
        <div class="grow">
          <div class="ttl">${n.title??this.t("Checkup")}</div>
          <div class="sub">${t.length} ${t.length===1?this.t("Station"):this.t("Stationen")}${i?` \xB7 1 ${this.t("Zelt")}`:""}</div>
        </div>
        <span class="pill ${Z(x)}">${x==="ok"?this.t("Alles OK"):x==="warning"?this.t("Warnung"):x==="critical"?this.t("Kritisch"):this.t("Info")}</span>
      </div>

      ${y?o`
        <div class="seclbl" style="margin-top:12px">${this.t("Sensoren")}</div>
        <div class="matrix ${this.mClass(y)}" style=${this.gridStyle(y)}>
          <span></span>
          ${c.map(v=>this.mh(v.icon,v.label))}
          ${p.map(v=>o`
            <div class="mn">${v.name}</div>
            ${v.cells.map(({col:_,cell:C})=>this.pCell(C,this.hass.states[this.sEnt(v.tent,v.station,"event")]?.attributes?.gc_sensors?.[_.key]??void 0))}`)}
        </div>`:u}

      ${g.length?o`
        <div class="seclbl">${this.t("Steuerung")}</div>
        <div class="matrix ${d?"m6":"m5"}" style=${this.gridStyle(w)}>
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
          <div class="mn">${n.tent_name??`${this.t("Zelt")} ${e}`}</div>
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
    </div>`}};customElements.define("growctrl-checkup-card",se);var Rn=[h.text("title","\u{1F3F7}\uFE0F Titel"),h.entity("entity","\u{1F4A7} F\xFCllstand-Sensor (%) (Pflicht)","sensor"),h.num("min","\u26A0\uFE0F Mindeststand (%)",0,100),h.num("volume_l","\u{1FAA3} Tankvolumen (Liter, optional)",0,2e3)],re=class extends L{render(){return o`${this.form(Rn)}${this.styleSection()}
      <div class="hint">Der <b>F\u00fcllstand-Sensor</b> liefert Prozent. Unter dem <b>Mindeststand</b> wird der
        Tank rot. Mit <b>Tankvolumen</b> zeigt die Karte zus\u00e4tzlich die ungef\u00e4hren Liter an.</div>`}};customElements.define("growctrl-tank-editor",re);var ae=class extends A{constructor(){super(...arguments);this._tankHist=[]}static{this.styles=T}static{this.properties={...A.properties,_tankHist:{state:!0}}}validateConfig(t){if(!t.entity)throw new Error("growctrl-tank-card: 'entity' (Fuellstand-Sensor in %) ist Pflicht.")}static getConfigElement(){return document.createElement("growctrl-tank-editor")}static getStubConfig(){return{entity:"sensor.gc_slot1_level1",title:"Tank",min:30,volume_l:200}}connectedCallback(){super.connectedCallback(),this._load(),this._timer=window.setInterval(()=>this._load(),5*6e4)}disconnectedCallback(){super.disconnectedCallback(),this._timer&&clearInterval(this._timer)}async _load(){if(!this.hass){setTimeout(()=>this._load(),1e3);return}let t=this._config.entity;if(t){let e=await O(this.hass,t,72);e.length&&(this._tankHist=e)}}daysLeft(t,e){let i=this._tankHist;if(!i||i.length<4||t<=e)return null;let s=0;for(let a=1;a<i.length;a++){let c=i[a-1]-i[a];c>0&&(s+=c)}let r=s/(72/24);return r<.4?null:(t-e)/r}render(){let t=this._config;if(!this.hass)return u;let e=!this.hass.states[t.entity],i=Math.min(100,Math.max(0,E(this.st(t.entity))??(e?49:0))),s=t.min!==void 0&&i<t.min,r=s?m.crit:m.water,a=t.volume_l?i/100*t.volume_l:null,c=t.min!==void 0&&!e?this.daysLeft(i,t.min):null,p=c===null?"":c<1?`<1 ${this.t("Tag")}`:`~${Math.round(c)} ${this.t("Tage")}`;return o`<div class="card ${t.style?.glass?"glass":""}" data-level=${s?"critical":"ok"} style=${P(t.style)}>
      <div class="hd">
        <div class="ttl grow">${t.title??this.t("Tank")}</div>
        ${s?o`<span class="pill crit">Nachfüllen</span>`:u}
      </div>
      <div style="display:flex; gap:18px; align-items:center">
        <button class="gc tankv" @click=${()=>this.moreInfo(t.entity)}>
          ${t.min!==void 0?o`<span class="minl" style="bottom:${t.min}%"></span>`:u}
          <span class="fill" style="height:${i}%; background:linear-gradient(180deg, ${r}d9, ${r}80)"></span>
        </button>
        <button class="gc" style="flex:1; min-width:0; text-align:left" @click=${()=>this.moreInfo(t.entity)}>
          <span class="mlbl">Aktueller Füllstand</span>
          <div style="font:700 38px/1 var(--f-num); letter-spacing:-1.5px; color:${r}; margin-top:5px; font-variant-numeric:tabular-nums">
            ${Math.round(i)}<span style="font:600 14px var(--f-num); color:var(--tx-2); margin-left:2px">%</span></div>
          ${a!==null?o`<div style="margin-top:6px; font:700 12.5px var(--f-ui); color:var(--tx-2)">≈ ${a.toFixed(1)} l von ${t.volume_l} l</div>`:u}
          ${t.min!==void 0?o`<div style="font:700 10.5px var(--f-ui); color:var(--tx-3); margin-top:2px">Mindeststand ${t.min} %</div>`:u}
          ${p?o`<div style="font:700 11px var(--f-ui); color:var(--water); margin-top:4px">${this.t("Reichweite")}: ${p}</div>`:u}
        </button>
      </div>
    </div>`}};customElements.define("growctrl-tank-card",ae);var On=[h.text("title","\u{1F3F7}\uFE0F Titel"),h.num("hours","\u23F1\uFE0F Zeitraum (h)",1,168),h.num("height","\u{1F4CF} Diagrammh\xF6he (px)",80,300)],Bn=[h.entity("entity","\u{1F4C8} Sensor","sensor"),h.text("name","\u270F\uFE0F Anzeigename (optional)"),h.select("axis","\u{1F4CA} Achse",[{value:"left",label:"Links (Standard)"},{value:"right",label:"Rechts (zweite Achse)"}]),h.text("color","\u{1F3A8} Farbe (optional, z.B. #FF9F5A)")],oe=class extends L{render(){return o`${this.form(On)}
      ${this.list({key:"sensors",rowSchema:Bn,title:"\u{1F4C9} Serien",addLabel:"Sensor hinzuf\xFCgen",newItem:()=>({entity:""})})}
      ${this.styleSection()}
      <div class="hint">Mehrere Serien werden in ein Diagramm gezeichnet (z.B. Temperatur + Luftfeuchte).
        Stell eine Serie auf <b>Achse: Rechts</b>, wenn sie eine eigene Skala braucht (z.B. Temp links \u00b0C, Feuchte rechts %).
        <b>Farbe</b> als Hex-Wert; ohne Angabe automatisch.</div>`}};customElements.define("growctrl-history-editor",oe);var je=["#FFB98A","#7CC8F0","#7BE8A8","#C3ABF5"],In=(l,n,t)=>Array.from({length:48},(e,i)=>+(l+n*Math.sin(i/47*Math.PI*2+t)).toFixed(1)),le=class extends A{constructor(){super(...arguments);this._hist={};this._hidden=new Set}static{this.styles=T}static{this.properties={...A.properties,_hist:{state:!0},_hidden:{state:!0}}}_toggle(t){let e=new Set(this._hidden);e.has(t)?e.delete(t):e.add(t),this._hidden=e}validateConfig(t){if(!Array.isArray(t.sensors)||!t.sensors.length)throw new Error("growctrl-history-card: 'sensors' (min. 1 Eintrag) ist Pflicht.")}static getConfigElement(){return document.createElement("growctrl-history-editor")}static getStubConfig(){return{hours:24,sensors:[{entity:"sensor.demo_temp",name:"Temperatur"},{entity:"sensor.demo_hum",name:"Feuchte"}]}}connectedCallback(){super.connectedCallback(),this._load(),this._timer=window.setInterval(()=>this._load(),5*6e4)}disconnectedCallback(){super.disconnectedCallback(),this._timer&&clearInterval(this._timer)}async _load(){if(!this.hass){setTimeout(()=>this._load(),1e3);return}let t=this._config,e={};for(let i of t.sensors)e[i.entity]=await O(this.hass,i.entity,t.hours??24);this._hist=e}render(){let t=this._config;if(!this.hass)return u;let e=t.sensors.map((a,c)=>({entity:a.entity,data:this._hist[a.entity]?.length?this._hist[a.entity]:this.hass.states[a.entity]?[]:In(c===0?22:58,c===0?3:6,c),color:a.color??je[c%je.length],name:a.name??this.friendly(a.entity),axis:a.axis})),i=e.filter(a=>!this._hidden.has(a.entity)),s=i.length===1,r=i.map(a=>({data:a.data,color:a.color,name:a.name,axis:a.axis,fill:s}));return o`<div class="card ${t.style?.glass?"glass":""}" style=${P(t.style)}>
      <div class="hd">
        <div class="ttl grow">${t.title??this.t("Verlauf")}</div>
        <button class="gc icbtn" style="width:auto; padding:0 13px; font:800 11px var(--f-num)">${t.hours??24}h</button>
      </div>
      ${H(r,{w:this.chartW(),h:t.height??120,grid:3,hours:t.hours??24})}
      <div class="legend">
        ${e.map(a=>{let c=this._hidden.has(a.entity);return o`<button @click=${()=>this._toggle(a.entity)}
            title=${this.t("Serie ein-/ausblenden")}
            style="background:none;border:0;padding:0;cursor:pointer;display:inline-flex;align-items:center;gap:5px;
                   font-size:10px;color:rgba(255,255,255,.6);opacity:${c?".4":"1"}">
            <i style="width:10px;height:3px;border-radius:2px;background:${a.color};display:inline-block;${c?"filter:grayscale(1)":""}"></i>${a.name} · ${E(this.st(a.entity))??"--"} ${this.unit(a.entity)}</button>`})}
      </div>
    </div>`}};customElements.define("growctrl-history-card",le);var Hn=[h.text("title","\u{1F3F7}\uFE0F Titel"),h.entity("entity","\u{1F4C8} Sensor (Pflicht)","sensor"),h.text("name","\u270F\uFE0F Anzeigename (optional)"),h.num("min","Sollbereich Min"),h.num("max","Sollbereich Max"),h.num("decimals","\u{1F522} Nachkommastellen",0,4),h.num("hours","\u23F1\uFE0F Chart-Zeitraum (h)",1,168),h.num("height","\u{1F4CF} Diagrammh\xF6he (px)",80,300)],ce=class extends L{render(){return o`${this.form(Hn)}${this.styleSection()}
      <div class="hint">Zeigt einen Messwert gro\u00df mit Sollbereich und Verlauf. Ideal f\u00fcr <b>EC</b> oder
        <b>pH</b>. Liegt der Wert au\u00dferhalb von Min/Max, f\u00e4rbt sich die Anzeige als Warnung.</div>`}};customElements.define("growctrl-metric-editor",ce);var pe=class extends A{constructor(){super(...arguments);this._hist=[]}static{this.styles=T}static{this.properties={...A.properties,_hist:{state:!0}}}validateConfig(t){if(!t.entity)throw new Error("growctrl-metric-card: 'entity' ist Pflicht.")}static getConfigElement(){return document.createElement("growctrl-metric-editor")}static getStubConfig(){return{entity:"sensor.gc_slot1_ec1",name:"EC",min:1.2,max:2.2}}connectedCallback(){super.connectedCallback(),this._load(),this._timer=window.setInterval(()=>this._load(),5*6e4)}disconnectedCallback(){super.disconnectedCallback(),this._timer&&clearInterval(this._timer)}async _load(){if(!this.hass){setTimeout(()=>this._load(),1e3);return}let t=this._config;this._hist=await O(this.hass,t.entity,t.hours??24)}render(){let t=this._config;if(!this.hass)return u;let e=E(this.st(t.entity))??(this.hass.states[t.entity]?null:1.84),i=e!==null&&t.min!==void 0&&e<t.min,s=e!==null&&t.max!==void 0&&e>t.max,r=i||s,a=e===null?"var(--tx-3)":r?m.crit:m.ok,c=t.decimals??2,p=t.min!==void 0||t.max!==void 0;return o`<div class="card ${t.style?.glass?"glass":""}" data-level=${r?"warning":"ok"} style=${P(t.style)}>
      <div class="hd">
        <div class="grow" style="min-width:0">
          <span class="mlbl">${t.name??this.friendly(t.entity)}</span>
          <button class="gc" style="display:block; margin-top:4px" @click=${()=>this.moreInfo(t.entity)}>
            <span style="font:700 34px/1 var(--f-num); letter-spacing:-1.5px; color:${a}; font-variant-numeric:tabular-nums">
              ${e!==null?e.toFixed(c):"--"}</span>
            <span style="font:600 14px var(--f-num); color:var(--tx-2); margin-left:2px">${this.unit(t.entity)}</span>
          </button>
        </div>
        ${p?o`<div style="text-align:right; flex-shrink:0">
          <span class="mlbl">Sollbereich</span>
          <div style="font:700 13px var(--f-num); color:${r?m.crit:"var(--acc)"}; margin-top:3px">${t.min??"\u2013"} – ${t.max??"\u2013"}</div>
          ${r?o`<div style="font:900 10px var(--f-ui); color:${m.crit}; margin-top:2px">${i?"\u25BC ZU NIEDRIG":"\u25B2 ZU HOCH"}</div>`:u}
        </div>`:u}
      </div>
      <div style="margin-top:6px">
        ${H([{data:this._hist,color:r?m.crit:m.ok,fill:!0}],{w:this.chartW(),h:t.height??104,band:{min:t.min,max:t.max},grid:3,hours:t.hours??24})}
      </div>
    </div>`}};customElements.define("growctrl-metric-card",pe);var Nn=[h.text("title","\u{1F3F7}\uFE0F Titel"),h.num("columns","\u25A6 Spalten",1,4)],Dn=[h.text("label","\u270F\uFE0F Beschriftung"),h.text("icon","\u{1F3A8} Icon (z.B. mdi:lightbulb-off)"),h.text("service","\u26A1 Service (z.B. light.turn_off)"),{name:"data",label:"\u{1F4E6} Service-Daten (optional, YAML/JSON)",selector:{object:{}}},h.bool("confirm","\u2705 Vor dem Ausf\xFChren best\xE4tigen")],de=class extends L{render(){return o`${this.form(Nn)}
      ${this.list({key:"buttons",rowSchema:Dn,title:"\u26A1 Aktionen (Buttons)",addLabel:"Aktion hinzuf\xFCgen",newItem:()=>({label:"",service:""})})}
      ${this.styleSection()}
      <div class="hint">Jeder Button ruft einen <b>Service</b> auf. Beispiele:
        <b>light.turn_off</b> mit Daten <code>{ entity_id: [light.zelt1, light.zelt2] }</code> (alle Lichter aus),
        <b>growctrl.export_config</b> (Konfig-Backup) oder ein eigenes <b>script.\u2026</b>.
        Mit Best\u00e4tigung wird vor dem Ausf\u00fchren nachgefragt.</div>`}};customElements.define("growctrl-actions-editor",de);var ue=class extends A{static{this.styles=T}validateConfig(n){if(!Array.isArray(n.buttons)||!n.buttons.length)throw new Error("growctrl-actions-card: 'buttons' (min. 1 Eintrag) ist Pflicht.")}static getConfigElement(){return document.createElement("growctrl-actions-editor")}static getStubConfig(){return{title:"Schnellaktionen",columns:2,buttons:[{label:"Alle Lichter aus",icon:"mdi:lightbulb-off",service:"light.turn_off",confirm:!0},{label:"Konfig-Backup",icon:"mdi:content-save-cog",service:"growctrl.export_config"}]}}run(n){let[t,e]=(n.service??"").split(".");!t||!e||this.hass.callService(t,e,n.data&&typeof n.data=="object"?n.data:{})}tap(n){n.confirm?this._confirm={text:`${n.label}?`,action:()=>this.run(n)}:this.run(n)}render(){let n=this._config;if(!this.hass)return u;let t=n.columns??2;return o`<div class="card ${n.style?.glass?"glass":""}" style="${P(n.style)};position:relative">
      ${n.title?o`<div class="hd"><div class="ttl">${n.title}</div></div>`:u}
      <div class="acts" style="grid-template-columns:repeat(${t},minmax(0,1fr))">
        ${n.buttons.map(e=>o`<button class="gc act" style="position:relative"
            title=${e.confirm?"Fragt vor dem Ausf\xFChren nach":e.label}
            @click=${()=>this.tap(e)}>
          ${e.confirm?o`<ha-icon icon="mdi:lock" style="position:absolute;top:6px;right:6px;--mdc-icon-size:12px;color:var(--tx-3)"></ha-icon>`:u}
          <ha-icon class="aic" icon="${e.icon||"mdi:flash"}" style="--mdc-icon-size:18px"></ha-icon>
          <span class="anm">${e.label}</span>
        </button>`)}
      </div>
      ${this.renderConfirm()}
    </div>`}};customElements.define("growctrl-actions-card",ue);var Vn="4.12.0",Zn=[{type:"growctrl-tent-card",name:"GROWCTRL Tent",description:"Zelt-Hero: Klima-KPIs, VPD-Skala, Status-Ampel"},{type:"growctrl-station-card",name:"GROWCTRL Station",description:"Station: Licht-/Pumpenbalken, Stage, Auto, Konfiguration"},{type:"growctrl-controls-card",name:"GROWCTRL Controls",description:"Aktoren-Raster mit Gruppen und Bestaetigung"},{type:"growctrl-sensors-card",name:"GROWCTRL Sensors",description:"Sensor-KPIs mit Sollbereich-Ampel"},{type:"growctrl-status-card",name:"GROWCTRL Status",description:"Ereignisprotokoll der Integration mit Schweregrad-Ampel"},{type:"growctrl-hero-card",name:"GROWCTRL Hero",description:"Globale Steuerung, Klima-KPIs, VPD-Chart, Informationssystem"},{type:"growctrl-checkup-card",name:"GROWCTRL Checkup",description:"Checkup-Matrix: Licht/Pumpe/Klima/Status je Station"},{type:"growctrl-tank-card",name:"GROWCTRL Tank",description:"DWC-Fuellstand (vertikaler Tank) mit Warnstufe"},{type:"growctrl-history-card",name:"GROWCTRL History",description:"24h-Diagramm (z.B. Temperatur + Luftfeuchte)"},{type:"growctrl-metric-card",name:"GROWCTRL Metric",description:"EC/pH gross mit Chart und Sollbereich"},{type:"growctrl-actions-card",name:"GROWCTRL Actions",description:"Schnell-Aktionen: konfigurierbare Buttons, rufen Services auf"}];window.customCards=window.customCards??[];window.__gcEpoch=Oe();Zn.forEach(l=>window.customCards.push({...l,preview:!0,documentationURL:"https://github.com/MrDarkvoid/growctrl"}));console.info(`%c GROWCTRL Cards %c v${Vn} `,"background:#1D9E75;color:#fff;font-weight:700","background:#0F6E56;color:#fff");
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
