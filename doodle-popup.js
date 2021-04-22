/*! For license information please see doodle-popup.js.LICENSE.txt */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.DoodlePopup=e():t.DoodlePopup=e()}(self,(function(){return(()=>{"use strict";var t={26:(t,e,o)=>{o.r(e),o.d(e,{customElement:()=>s,eventOptions:()=>a,property:()=>n,query:()=>c,queryAll:()=>u,queryAssignedNodes:()=>f,queryAsync:()=>p,state:()=>r});const s=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:o,elements:s}=e;return{kind:o,elements:s,finisher(e){window.customElements.define(t,e)}}})(t,e),i=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(o){o.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(o){o.createProperty(e.key,t)}};function n(t){return(e,o)=>void 0!==o?((t,e,o)=>{e.constructor.createProperty(o,t)})(t,e,o):i(t,e)}function r(t){return n({...t,state:!0,attribute:!1})}const l=({finisher:t,descriptor:e})=>(o,s)=>{var i;if(void 0===s){const s=null!==(i=o.originalKey)&&void 0!==i?i:o.key,n=null!=e?{kind:"method",placement:"prototype",key:s,descriptor:e(o.key)}:{...o,key:s};return null!=t&&(n.finisher=function(e){t(e,s)}),n}{const i=o.constructor;void 0!==e&&Object.defineProperty(o,s,e(s)),null==t||t(i,s)}};function a(t){return l({finisher:(e,o)=>{Object.assign(e.prototype[o],t)}})}function c(t,e){return l({descriptor:o=>{const s={get(){var e;return null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t)},enumerable:!0,configurable:!0};if(e){const e="symbol"==typeof o?Symbol():"__"+o;s.get=function(){var o;return void 0===this[e]&&(this[e]=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(t)),this[e]}}return s}})}function u(t){return l({descriptor:e=>({get(){var e;return null===(e=this.renderRoot)||void 0===e?void 0:e.querySelectorAll(t)},enumerable:!0,configurable:!0})})}function p(t){return l({descriptor:e=>({async get(){var e;return await this.updateComplete,null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t)},enumerable:!0,configurable:!0})})}const d=Element.prototype,h=d.msMatchesSelector||d.webkitMatchesSelector;function f(t="",e=!1,o=""){return l({descriptor:s=>({get(){var s,i;const n="slot"+(t?`[name=${t}]`:":not([name])");let r=null===(i=null===(s=this.renderRoot)||void 0===s?void 0:s.querySelector(n))||void 0===i?void 0:i.assignedNodes({flatten:e});return r&&o&&(r=r.filter((t=>t.nodeType===Node.ELEMENT_NODE&&(t.matches?t.matches(o):h.call(t,o))))),r},enumerable:!0,configurable:!0})})}},558:(t,e,o)=>{var s,i,n,r;o.r(e),o.d(e,{CSSResult:()=>K,LitElement:()=>dt,ReactiveElement:()=>it,UpdatingElement:()=>pt,_Σ:()=>B,_Φ:()=>ht,adoptStyles:()=>J,css:()=>Z,defaultConverter:()=>et,getCompatibleStyle:()=>X,html:()=>O,noChange:()=>$,notEqual:()=>ot,nothing:()=>_,render:()=>R,supportsAdoptingStyleSheets:()=>I,svg:()=>k,unsafeCSS:()=>W});const l=globalThis.trustedTypes,a=l?l.createPolicy("lit-html",{createHTML:t=>t}):void 0,c=`lit$${(Math.random()+"").slice(9)}$`,u="?"+c,p=`<${u}>`,d=document,h=(t="")=>d.createComment(t),f=t=>null===t||"object"!=typeof t&&"function"!=typeof t,v=Array.isArray,y=t=>{var e;return v(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])},m=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,g=/-->/g,b=/>/g,S=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,x=/'/g,w=/"/g,C=/^(?:script|style|textarea)$/i,P=t=>(e,...o)=>({_$litType$:t,strings:e,values:o}),O=P(1),k=P(2),$=Symbol.for("lit-noChange"),_=Symbol.for("lit-nothing"),E=new WeakMap,R=(t,e,o)=>{var s,i;const n=null!==(s=null==o?void 0:o.renderBefore)&&void 0!==s?s:e;let r=n._$litPart$;if(void 0===r){const t=null!==(i=null==o?void 0:o.renderBefore)&&void 0!==i?i:null;n._$litPart$=r=new M(e.insertBefore(h(),t),t,void 0,o)}return r.I(t),r},j=d.createTreeWalker(d,129,null,!1),A=(t,e)=>{const o=t.length-1,s=[];let i,n=2===e?"<svg>":"",r=m;for(let e=0;e<o;e++){const o=t[e];let l,a,u=-1,d=0;for(;d<o.length&&(r.lastIndex=d,a=r.exec(o),null!==a);)d=r.lastIndex,r===m?"!--"===a[1]?r=g:void 0!==a[1]?r=b:void 0!==a[2]?(C.test(a[2])&&(i=RegExp("</"+a[2],"g")),r=S):void 0!==a[3]&&(r=S):r===S?">"===a[0]?(r=null!=i?i:m,u=-1):void 0===a[1]?u=-2:(u=r.lastIndex-a[2].length,l=a[1],r=void 0===a[3]?S:'"'===a[3]?w:x):r===w||r===x?r=S:r===g||r===b?r=m:(r=S,i=void 0);const h=r===S&&t[e+1].startsWith("/>")?" ":"";n+=r===m?o+p:u>=0?(s.push(l),o.slice(0,u)+"$lit$"+o.slice(u)+c+h):o+c+(-2===u?(s.push(void 0),e):h)}const l=n+(t[o]||"<?>")+(2===e?"</svg>":"");return[void 0!==a?a.createHTML(l):l,s]};class T{constructor({strings:t,_$litType$:e},o){let s;this.parts=[];let i=0,n=0;const r=t.length-1,a=this.parts,[p,d]=A(t,e);if(this.el=T.createElement(p,o),j.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=j.nextNode())&&a.length<r;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(c)){const o=d[n++];if(t.push(e),void 0!==o){const t=s.getAttribute(o.toLowerCase()+"$lit$").split(c),e=/([.?@])?(.*)/.exec(o);a.push({type:1,index:i,name:e[2],strings:t,ctor:"."===e[1]?N:"?"===e[1]?L:"@"===e[1]?z:H})}else a.push({type:6,index:i})}for(const e of t)s.removeAttribute(e)}if(C.test(s.tagName)){const t=s.textContent.split(c),e=t.length-1;if(e>0){s.textContent=l?l.emptyScript:"";for(let o=0;o<e;o++)s.append(t[o],h()),j.nextNode(),a.push({type:2,index:++i});s.append(t[e],h())}}}else if(8===s.nodeType)if(s.data===u)a.push({type:2,index:i});else{let t=-1;for(;-1!==(t=s.data.indexOf(c,t+1));)a.push({type:7,index:i}),t+=c.length-1}i++}}static createElement(t,e){const o=d.createElement("template");return o.innerHTML=t,o}}function U(t,e,o=t,s){var i,n,r,l;if(e===$)return e;let a=void 0!==s?null===(i=o.Σi)||void 0===i?void 0:i[s]:o.Σo;const c=f(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==c&&(null===(n=null==a?void 0:a.O)||void 0===n||n.call(a,!1),void 0===c?a=void 0:(a=new c(t),a.T(t,o,s)),void 0!==s?(null!==(r=(l=o).Σi)&&void 0!==r?r:l.Σi=[])[s]=a:o.Σo=a),void 0!==a&&(e=U(t,a.S(t,e.values),a,s)),e}class D{constructor(t,e){this.l=[],this.N=void 0,this.D=t,this.M=e}u(t){var e;const{el:{content:o},parts:s}=this.D,i=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:d).importNode(o,!0);j.currentNode=i;let n=j.nextNode(),r=0,l=0,a=s[0];for(;void 0!==a;){if(r===a.index){let e;2===a.type?e=new M(n,n.nextSibling,this,t):1===a.type?e=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(e=new q(n,this,t)),this.l.push(e),a=s[++l]}r!==(null==a?void 0:a.index)&&(n=j.nextNode(),r++)}return i}v(t){let e=0;for(const o of this.l)void 0!==o&&(void 0!==o.strings?(o.I(t,o,e),e+=o.strings.length-2):o.I(t[e])),e++}}class M{constructor(t,e,o,s){this.type=2,this.N=void 0,this.A=t,this.B=e,this.M=o,this.options=s}setConnected(t){var e;null===(e=this.P)||void 0===e||e.call(this,t)}get parentNode(){return this.A.parentNode}get startNode(){return this.A}get endNode(){return this.B}I(t,e=this){t=U(this,t,e),f(t)?t===_||null==t||""===t?(this.H!==_&&this.R(),this.H=_):t!==this.H&&t!==$&&this.m(t):void 0!==t._$litType$?this._(t):void 0!==t.nodeType?this.$(t):y(t)?this.g(t):this.m(t)}k(t,e=this.B){return this.A.parentNode.insertBefore(t,e)}$(t){this.H!==t&&(this.R(),this.H=this.k(t))}m(t){const e=this.A.nextSibling;null!==e&&3===e.nodeType&&(null===this.B?null===e.nextSibling:e===this.B.previousSibling)?e.data=t:this.$(d.createTextNode(t)),this.H=t}_(t){var e;const{values:o,_$litType$:s}=t,i="number"==typeof s?this.C(t):(void 0===s.el&&(s.el=T.createElement(s.h,this.options)),s);if((null===(e=this.H)||void 0===e?void 0:e.D)===i)this.H.v(o);else{const t=new D(i,this),e=t.u(this.options);t.v(o),this.$(e),this.H=t}}C(t){let e=E.get(t.strings);return void 0===e&&E.set(t.strings,e=new T(t)),e}g(t){v(this.H)||(this.H=[],this.R());const e=this.H;let o,s=0;for(const i of t)s===e.length?e.push(o=new M(this.k(h()),this.k(h()),this,this.options)):o=e[s],o.I(i),s++;s<e.length&&(this.R(o&&o.B.nextSibling,s),e.length=s)}R(t=this.A.nextSibling,e){var o;for(null===(o=this.P)||void 0===o||o.call(this,!1,!0,e);t&&t!==this.B;){const e=t.nextSibling;t.remove(),t=e}}}class H{constructor(t,e,o,s,i){this.type=1,this.H=_,this.N=void 0,this.V=void 0,this.element=t,this.name=e,this.M=s,this.options=i,o.length>2||""!==o[0]||""!==o[1]?(this.H=Array(o.length-1).fill(_),this.strings=o):this.H=_}get tagName(){return this.element.tagName}I(t,e=this,o,s){const i=this.strings;let n=!1;if(void 0===i)t=U(this,t,e,0),n=!f(t)||t!==this.H&&t!==$,n&&(this.H=t);else{const s=t;let r,l;for(t=i[0],r=0;r<i.length-1;r++)l=U(this,s[o+r],e,r),l===$&&(l=this.H[r]),n||(n=!f(l)||l!==this.H[r]),l===_?t=_:t!==_&&(t+=(null!=l?l:"")+i[r+1]),this.H[r]=l}n&&!s&&this.W(t)}W(t){t===_?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class N extends H{constructor(){super(...arguments),this.type=3}W(t){this.element[this.name]=t===_?void 0:t}}class L extends H{constructor(){super(...arguments),this.type=4}W(t){t&&t!==_?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class z extends H{constructor(){super(...arguments),this.type=5}I(t,e=this){var o;if((t=null!==(o=U(this,t,e,0))&&void 0!==o?o:_)===$)return;const s=this.H,i=t===_&&s!==_||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==_&&(s===_||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this.H=t}handleEvent(t){var e,o;"function"==typeof this.H?this.H.call(null!==(o=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==o?o:this.element,t):this.H.handleEvent(t)}}class q{constructor(t,e,o){this.element=t,this.type=6,this.N=void 0,this.V=void 0,this.M=e,this.options=o}I(t){U(this,t)}}const B={Z:"$lit$",U:c,Y:u,q:1,X:A,tt:D,it:y,st:U,et:M,ot:H,nt:L,rt:z,lt:N,ht:q};null===(i=(s=globalThis).litHtmlPlatformSupport)||void 0===i||i.call(s,T,M),(null!==(n=(r=globalThis).litHtmlVersions)&&void 0!==n?n:r.litHtmlVersions=[]).push("2.0.0-rc.2");const I=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,V=Symbol();class K{constructor(t,e){if(e!==V)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return I&&void 0===this.t&&(this.t=new CSSStyleSheet,this.t.replaceSync(this.cssText)),this.t}toString(){return this.cssText}}const W=t=>new K(t+"",V),Q=new Map,Z=(t,...e)=>{const o=e.reduce(((e,o,s)=>e+(t=>{if(t instanceof K)return t.cssText;if("number"==typeof t)return t;throw Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(o)+t[s+1]),t[0]);let s=Q.get(o);return void 0===s&&Q.set(o,s=new K(o,V)),s},J=(t,e)=>{I?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const o=document.createElement("style");o.textContent=e.cssText,t.appendChild(o)}))},X=I?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return W(e)})(t):t;var Y,F,G,tt;const et={toAttribute(t,e){switch(e){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=null!==t;break;case Number:o=null===t?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch(t){o=null}}return o}},ot=(t,e)=>e!==t&&(e==e||t==t),st={attribute:!0,type:String,converter:et,reflect:!1,hasChanged:ot};class it extends HTMLElement{constructor(){super(),this.Πi=new Map,this.Πo=void 0,this.Πl=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.Πh=null,this.u()}static addInitializer(t){var e;null!==(e=this.v)&&void 0!==e||(this.v=[]),this.v.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,o)=>{const s=this.Πp(o,e);void 0!==s&&(this.Πm.set(s,o),t.push(s))})),t}static createProperty(t,e=st){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const o="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,o,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,o){return{get(){return this[e]},set(s){const i=this[t];this[e]=s,this.requestUpdate(t,i,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||st}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this.Πm=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const o of e)this.createProperty(o,t[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const t of o)e.unshift(X(t))}else void 0!==t&&e.push(X(t));return e}static Πp(t,e){const o=e.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this.Πg=new Promise((t=>this.enableUpdating=t)),this.L=new Map,this.Π_(),this.requestUpdate(),null===(t=this.constructor.v)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,o;(null!==(e=this.ΠU)&&void 0!==e?e:this.ΠU=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(o=t.hostConnected)||void 0===o||o.call(t))}removeController(t){var e;null===(e=this.ΠU)||void 0===e||e.splice(this.ΠU.indexOf(t)>>>0,1)}Π_(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this.Πi.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return J(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)})),this.Πl&&(this.Πl(),this.Πo=this.Πl=void 0)}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)})),this.Πo=new Promise((t=>this.Πl=t))}attributeChangedCallback(t,e,o){this.K(t,o)}Πj(t,e,o=st){var s,i;const n=this.constructor.Πp(t,o);if(void 0!==n&&!0===o.reflect){const r=(null!==(i=null===(s=o.converter)||void 0===s?void 0:s.toAttribute)&&void 0!==i?i:et.toAttribute)(e,o.type);this.Πh=t,null==r?this.removeAttribute(n):this.setAttribute(n,r),this.Πh=null}}K(t,e){var o,s,i;const n=this.constructor,r=n.Πm.get(t);if(void 0!==r&&this.Πh!==r){const t=n.getPropertyOptions(r),l=t.converter,a=null!==(i=null!==(s=null===(o=l)||void 0===o?void 0:o.fromAttribute)&&void 0!==s?s:"function"==typeof l?l:null)&&void 0!==i?i:et.fromAttribute;this.Πh=r,this[r]=a(e,t.type),this.Πh=null}}requestUpdate(t,e,o){let s=!0;void 0!==t&&(((o=o||this.constructor.getPropertyOptions(t)).hasChanged||ot)(this[t],e)?(this.L.has(t)||this.L.set(t,e),!0===o.reflect&&this.Πh!==t&&(void 0===this.Πk&&(this.Πk=new Map),this.Πk.set(t,o))):s=!1),!this.isUpdatePending&&s&&(this.Πg=this.Πq())}async Πq(){this.isUpdatePending=!0;try{for(await this.Πg;this.Πo;)await this.Πo}catch(t){Promise.reject(t)}const t=this.performUpdate();return null!=t&&await t,!this.isUpdatePending}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this.Πi&&(this.Πi.forEach(((t,e)=>this[e]=t)),this.Πi=void 0);let e=!1;const o=this.L;try{e=this.shouldUpdate(o),e?(this.willUpdate(o),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(o)):this.Π$()}catch(t){throw e=!1,this.Π$(),t}e&&this.E(o)}willUpdate(t){}E(t){var e;null===(e=this.ΠU)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}Π$(){this.L=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.Πg}shouldUpdate(t){return!0}update(t){void 0!==this.Πk&&(this.Πk.forEach(((t,e)=>this.Πj(e,this[e],t))),this.Πk=void 0),this.Π$()}updated(t){}firstUpdated(t){}}var nt,rt,lt,at,ct,ut;it.finalized=!0,it.shadowRootOptions={mode:"open"},null===(F=(Y=globalThis).reactiveElementPlatformSupport)||void 0===F||F.call(Y,{ReactiveElement:it}),(null!==(G=(tt=globalThis).reactiveElementVersions)&&void 0!==G?G:tt.reactiveElementVersions=[]).push("1.0.0-rc.1");const pt=it;(null!==(nt=(ut=globalThis).litElementVersions)&&void 0!==nt?nt:ut.litElementVersions=[]).push("3.0.0-rc.1");class dt extends it{constructor(){super(...arguments),this.renderOptions={host:this},this.Φt=void 0}createRenderRoot(){var t,e;const o=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=o.firstChild),o}update(t){const e=this.render();super.update(t),this.Φt=R(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!1)}render(){return $}}dt.finalized=!0,dt._$litElement$=!0,null===(lt=(rt=globalThis).litElementHydrateSupport)||void 0===lt||lt.call(rt,{LitElement:dt}),null===(ct=(at=globalThis).litElementPlatformSupport)||void 0===ct||ct.call(at,{LitElement:dt});const ht={K:(t,e,o)=>{t.K(e,o)},L:t=>t.L}},878:function(t,e,o){var s=this&&this.__decorate||function(t,e,o,s){var i,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,s);else for(var l=t.length-1;l>=0;l--)(i=t[l])&&(r=(n<3?i(r):n>3?i(e,o,r):i(e,o))||r);return n>3&&r&&Object.defineProperty(e,o,r),r},i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.DoodleAlert=void 0;const n=o(558),r=o(26),l=i(o(836)),a=o(668);let c=class extends l.default{constructor(t="",e="center"){super(t,e)}static get styles(){return a.alertStyles}getAlertClasses(){const t=[];return t.push("popup"),t.push(`popup-${this.position}`),t.join(" ")}render(){return n.html`
      <div class="popup-overlay" @mousedown="${this.onOverlayMouseDown}">
        <div class="${this.getAlertClasses()}">
          <div>${this.message}</div>
          <div class="popup-buttons">
            <button class="popup-button popup-button-ok" @click="${this.onClickOk}">OK</button>
          </div>
        </div>
      </div>
    `}onClickOk(){this.close(!0)}};c=s([r.customElement("doodle-alert")],c),e.DoodleAlert=c},212:function(t,e,o){var s=this&&this.__decorate||function(t,e,o,s){var i,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,s);else for(var l=t.length-1;l>=0;l--)(i=t[l])&&(r=(n<3?i(r):n>3?i(e,o,r):i(e,o))||r);return n>3&&r&&Object.defineProperty(e,o,r),r},i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.DoodleConfirm=void 0;const n=o(558),r=o(26),l=i(o(836)),a=o(668);let c=class extends l.default{constructor(t="",e="center"){super(t,e)}static get styles(){return a.confirmStyles}getAlertClasses(){const t=[];return t.push("popup"),t.push(`popup-${this.position}`),t.join(" ")}render(){return n.html`
      <div class="popup-overlay" @mousedown="${this.onOverlayMouseDown}">
        <div class="${this.getAlertClasses()}">
          <div>${this.message}</div>
          <div class="popup-buttons">
            <button class="popup-button popup-button-ok" @click="${this.onClickOk}">OK</button>
            <button class="popup-button popup-button-cancel" @click="${this.onClickCancel}">Cancel</button>
          </div>
        </div>
      </div>
    `}onClickOk(){this.close(!0)}onClickCancel(){this.close(!1)}};c=s([r.customElement("doodle-confirm")],c),e.DoodleConfirm=c},591:function(t,e,o){var s=this&&this.__decorate||function(t,e,o,s){var i,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,s);else for(var l=t.length-1;l>=0;l--)(i=t[l])&&(r=(n<3?i(r):n>3?i(e,o,r):i(e,o))||r);return n>3&&r&&Object.defineProperty(e,o,r),r},i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.DoodlePrompt=void 0;const n=o(558),r=o(26),l=i(o(836)),a=o(668);let c=class extends l.default{constructor(t="",e="center"){super(t,e),this.value=""}static get styles(){return a.promptStyle}getPromptClasses(){const t=[];return t.push("popup"),t.push(`popup-${this.position}`),t.join(" ")}render(){return n.html`
      <div class="popup-overlay" @mousedown="${this.onOverlayMouseDown}">
        <div class="${this.getPromptClasses()}">
          <div>${this.message}</div>
          <input class="popup-input-text" type="text" @input="${this.onInputValue}" />
          <div class="popup-buttons">
            <button class="popup-button popup-button-ok" @click="${this.onClickOk}">OK</button>
            <button class="popup-button popup-button-cancel" @click="${this.onClickCancel}">Cancel</button>
          </div>
        </div>
      </div>
    `}onClickOk(){this.close(this.value)}onClickCancel(){this.close(null)}onInputValue(t){const e=t.target;this.value=e.value}};s([r.property({type:String})],c.prototype,"value",void 0),c=s([r.customElement("doodle-prompt")],c),e.DoodlePrompt=c},888:function(t,e,o){var s=this&&this.__decorate||function(t,e,o,s){var i,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,s);else for(var l=t.length-1;l>=0;l--)(i=t[l])&&(r=(n<3?i(r):n>3?i(e,o,r):i(e,o))||r);return n>3&&r&&Object.defineProperty(e,o,r),r},i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.DoodleToast=void 0;const n=o(558),r=o(26),l=i(o(836)),a=o(668);let c=class extends l.default{constructor(t="",e="bottom",o=3e3){super(t,e,o)}static get styles(){return a.toastStyles}getToastClasses(){const t=[];return t.push("popup"),t.push(`popup-${this.position}`),t.join(" ")}render(){return n.html`
      <div class="popup-overlay">
        <div class="${this.getToastClasses()}">
          <div>${this.message}</div>
        </div>
      </div>
    `}};c=s([r.customElement("doodle-toast")],c),e.DoodleToast=c},836:function(t,e,o){var s=this&&this.__decorate||function(t,e,o,s){var i,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,s);else for(var l=t.length-1;l>=0;l--)(i=t[l])&&(r=(n<3?i(r):n>3?i(e,o,r):i(e,o))||r);return n>3&&r&&Object.defineProperty(e,o,r),r};Object.defineProperty(e,"__esModule",{value:!0});const i=o(558),n=o(26),r=[];let l=null;class a extends i.LitElement{constructor(t="",e="center",o=0){super(),this.message="",this.position="center",this.duration=0,this.resolve=null,this.message=t,this.position=e,this.duration=o}static processPopupQueue(){null===l&&r.length>0&&(l=r.shift(),l?(document.body.append(l),l.duration>0&&window.setTimeout((()=>{null==l||l.close(!1)}),l.duration)):l=null)}static push(t){r.push(t)}static resetCurrentPopup(){l=null}static getCurrentPopup(){return l}onOverlayMouseDown(t){t.preventDefault(),t.stopPropagation()}show(){return new Promise((t=>{this.resolve=t,a.push(this),a.processPopupQueue()}))}close(t){const e=a.getCurrentPopup();e&&(e.remove(),e.resolve&&e.resolve(t),a.resetCurrentPopup(),a.processPopupQueue())}}s([n.property({type:String})],a.prototype,"message",void 0),s([n.property({type:String})],a.prototype,"position",void 0),s([n.property({type:Number})],a.prototype,"duration",void 0),e.default=a},668:(t,e,o)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.promptStyle=e.confirmStyles=e.alertStyles=e.toastStyles=void 0;const s=o(558),i=s.css`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  .popup-overlay {
    font-family: sans-serif;
    position: fixed;
    top: 0px;
    left: 0px;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    oveflow: hidden;
    background: rgba(0, 0, 0, 0.4);
    pointer-events: auto;
  }

  .popup {
    max-width: 80%;
    width: 300px;
    background: rgba(0, 0, 0, 0.7);
    border-radius: 5px;
    color: #fff;
    text-align: center;
    z-index: 9999;
    user-select: none;
    pointer-events: auto;
    padding: 20px;
  }

  .popup-top {
    margin-top: 40px;
    align-self: flex-start;
  }

  .popup-center {
    align-self: center;
  }

  .popup-bottom {
    margin-bottom: 40px;
    align-self: flex-end;
  }

  .popup-input-text {
    width: 100%;
    border: none;
    outline: none;
    text-align: center;
    margin-top: 10px;
    padding: 10px;
    border-radius: 5px;
    background-color: #ffffff;
    border: 2px solid #ffffff;
  }

  .popup-input-text:focus {
    border-color: #3b82f6;
  }

  .popup-buttons {
    display: flex;
  }

  .popup-button {
    margin-top: 10px;
    padding: 10px 20px;
    width: 100%;
    border-radius: 5px;
    cursor: pointer;
    border: none;
  }

  .popup-button-ok {
    background-color: #3b82f6;
    color: #ffffff;
  }

  .popup-button-cancel {
    background: none;
    border: 2px solid #3b82f6;
    color: #ffffff;
    margin-left: 10px;
  }
`;e.toastStyles=s.css`
  ${i}

  .popup-overlay {
    background: rgba(0, 0, 0, 0);
    pointer-events: none;
  }

  .popup {
    padding: 10px 20px;
    width: auto;
  }
`,e.alertStyles=s.css`
  ${i}
`,e.confirmStyles=s.css`
  ${i}
`,e.promptStyle=s.css`
  ${i}
`}},e={};function o(s){var i=e[s];if(void 0!==i)return i.exports;var n=e[s]={exports:{}};return t[s].call(n.exports,n,n.exports,o),n.exports}o.d=(t,e)=>{for(var s in e)o.o(e,s)&&!o.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var s={};return(()=>{var t=s;Object.defineProperty(t,"__esModule",{value:!0}),t.toast=t.prompt=t.confirm=t.alert=void 0;const e=o(878),i=o(212),n=o(591),r=o(888);t.alert=(t="",o="center")=>new e.DoodleAlert(t,o),t.confirm=(t="",e="center")=>new i.DoodleConfirm(t,e),t.prompt=(t="",e="center")=>new n.DoodlePrompt(t,e),t.toast=(t="",e="bottom",o=3e3)=>new r.DoodleToast(t,e,o)})(),s})()}));