/*! For license information please see doodle-popup.js.LICENSE.txt */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.DoodlePopup=e():t.DoodlePopup=e()}(self,(function(){return(()=>{"use strict";var t={26:(t,e,o)=>{o.r(e),o.d(e,{customElement:()=>s,eventOptions:()=>a,property:()=>n,query:()=>c,queryAll:()=>u,queryAssignedNodes:()=>f,queryAsync:()=>p,state:()=>r});const s=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:o,elements:s}=e;return{kind:o,elements:s,finisher(e){window.customElements.define(t,e)}}})(t,e),i=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(o){o.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(o){o.createProperty(e.key,t)}};function n(t){return(e,o)=>void 0!==o?((t,e,o)=>{e.constructor.createProperty(o,t)})(t,e,o):i(t,e)}function r(t){return n({...t,state:!0,attribute:!1})}const l=({finisher:t,descriptor:e})=>(o,s)=>{var i;if(void 0===s){const s=null!==(i=o.originalKey)&&void 0!==i?i:o.key,n=null!=e?{kind:"method",placement:"prototype",key:s,descriptor:e(o.key)}:{...o,key:s};return null!=t&&(n.finisher=function(e){t(e,s)}),n}{const i=o.constructor;void 0!==e&&Object.defineProperty(o,s,e(s)),null==t||t(i,s)}};function a(t){return l({finisher:(e,o)=>{Object.assign(e.prototype[o],t)}})}function c(t,e){return l({descriptor:o=>{const s={get(){var e;return null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t)},enumerable:!0,configurable:!0};if(e){const e="symbol"==typeof o?Symbol():"__"+o;s.get=function(){var o;return void 0===this[e]&&(this[e]=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(t)),this[e]}}return s}})}function u(t){return l({descriptor:e=>({get(){var e;return null===(e=this.renderRoot)||void 0===e?void 0:e.querySelectorAll(t)},enumerable:!0,configurable:!0})})}function p(t){return l({descriptor:e=>({async get(){var e;return await this.updateComplete,null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t)},enumerable:!0,configurable:!0})})}const d=Element.prototype,h=d.msMatchesSelector||d.webkitMatchesSelector;function f(t="",e=!1,o=""){return l({descriptor:s=>({get(){var s,i;const n="slot"+(t?`[name=${t}]`:":not([name])");let r=null===(i=null===(s=this.renderRoot)||void 0===s?void 0:s.querySelector(n))||void 0===i?void 0:i.assignedNodes({flatten:e});return r&&o&&(r=r.filter((t=>t.nodeType===Node.ELEMENT_NODE&&(t.matches?t.matches(o):h.call(t,o))))),r},enumerable:!0,configurable:!0})})}},558:(t,e,o)=>{o.r(e),o.d(e,{CSSResult:()=>n,LitElement:()=>ht,ReactiveElement:()=>b,UpdatingElement:()=>dt,_Σ:()=>nt,_Φ:()=>ft,adoptStyles:()=>u,css:()=>c,defaultConverter:()=>y,getCompatibleStyle:()=>p,html:()=>B,noChange:()=>V,notEqual:()=>m,nothing:()=>K,render:()=>Q,supportsAdoptingStyleSheets:()=>s,svg:()=>I,unsafeCSS:()=>a});const s=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol();class n{constructor(t,e){if(e!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return s&&void 0===this.t&&(this.t=new CSSStyleSheet,this.t.replaceSync(this.cssText)),this.t}toString(){return this.cssText}}const r=new Map,l=t=>{let e=r.get(t);return void 0===e&&r.set(t,e=new n(t,i)),e},a=t=>l("string"==typeof t?t:t+""),c=(t,...e)=>{const o=1===t.length?t[0]:e.reduce(((e,o,s)=>e+(t=>{if(t instanceof n)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[s+1]),t[0]);return l(o)},u=(t,e)=>{s?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const o=document.createElement("style");o.textContent=e.cssText,t.appendChild(o)}))},p=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return a(e)})(t):t;var d,h,f,v;const y={toAttribute(t,e){switch(e){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=null!==t;break;case Number:o=null===t?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch(t){o=null}}return o}},m=(t,e)=>e!==t&&(e==e||t==t),g={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:m};class b extends HTMLElement{constructor(){super(),this.Πi=new Map,this.Πo=void 0,this.Πl=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.Πh=null,this.u()}static addInitializer(t){var e;null!==(e=this.v)&&void 0!==e||(this.v=[]),this.v.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,o)=>{const s=this.Πp(o,e);void 0!==s&&(this.Πm.set(s,o),t.push(s))})),t}static createProperty(t,e=g){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const o="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,o,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,o){return{get(){return this[e]},set(s){const i=this[t];this[e]=s,this.requestUpdate(t,i,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||g}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this.Πm=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const o of e)this.createProperty(o,t[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const t of o)e.unshift(p(t))}else void 0!==t&&e.push(p(t));return e}static Πp(t,e){const o=e.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this.Πg=new Promise((t=>this.enableUpdating=t)),this.L=new Map,this.Π_(),this.requestUpdate(),null===(t=this.constructor.v)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,o;(null!==(e=this.ΠU)&&void 0!==e?e:this.ΠU=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(o=t.hostConnected)||void 0===o||o.call(t))}removeController(t){var e;null===(e=this.ΠU)||void 0===e||e.splice(this.ΠU.indexOf(t)>>>0,1)}Π_(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this.Πi.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return u(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)})),this.Πl&&(this.Πl(),this.Πo=this.Πl=void 0)}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)})),this.Πo=new Promise((t=>this.Πl=t))}attributeChangedCallback(t,e,o){this.K(t,o)}Πj(t,e,o=g){var s,i;const n=this.constructor.Πp(t,o);if(void 0!==n&&!0===o.reflect){const r=(null!==(i=null===(s=o.converter)||void 0===s?void 0:s.toAttribute)&&void 0!==i?i:y.toAttribute)(e,o.type);this.Πh=t,null==r?this.removeAttribute(n):this.setAttribute(n,r),this.Πh=null}}K(t,e){var o,s,i;const n=this.constructor,r=n.Πm.get(t);if(void 0!==r&&this.Πh!==r){const t=n.getPropertyOptions(r),l=t.converter,a=null!==(i=null!==(s=null===(o=l)||void 0===o?void 0:o.fromAttribute)&&void 0!==s?s:"function"==typeof l?l:null)&&void 0!==i?i:y.fromAttribute;this.Πh=r,this[r]=a(e,t.type),this.Πh=null}}requestUpdate(t,e,o){let s=!0;void 0!==t&&(((o=o||this.constructor.getPropertyOptions(t)).hasChanged||m)(this[t],e)?(this.L.has(t)||this.L.set(t,e),!0===o.reflect&&this.Πh!==t&&(void 0===this.Πk&&(this.Πk=new Map),this.Πk.set(t,o))):s=!1),!this.isUpdatePending&&s&&(this.Πg=this.Πq())}async Πq(){this.isUpdatePending=!0;try{for(await this.Πg;this.Πo;)await this.Πo}catch(t){Promise.reject(t)}const t=this.performUpdate();return null!=t&&await t,!this.isUpdatePending}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this.Πi&&(this.Πi.forEach(((t,e)=>this[e]=t)),this.Πi=void 0);let e=!1;const o=this.L;try{e=this.shouldUpdate(o),e?(this.willUpdate(o),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(o)):this.Π$()}catch(t){throw e=!1,this.Π$(),t}e&&this.E(o)}willUpdate(t){}E(t){var e;null===(e=this.ΠU)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}Π$(){this.L=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.Πg}shouldUpdate(t){return!0}update(t){void 0!==this.Πk&&(this.Πk.forEach(((t,e)=>this.Πj(e,this[e],t))),this.Πk=void 0),this.Π$()}updated(t){}firstUpdated(t){}}var S,x,w,P;b.finalized=!0,b.elementProperties=new Map,b.elementStyles=[],b.shadowRootOptions={mode:"open"},null===(h=(d=globalThis).reactiveElementPlatformSupport)||void 0===h||h.call(d,{ReactiveElement:b}),(null!==(f=(v=globalThis).reactiveElementVersions)&&void 0!==f?f:v.reactiveElementVersions=[]).push("1.0.0-rc.2");const C=globalThis.trustedTypes,O=C?C.createPolicy("lit-html",{createHTML:t=>t}):void 0,k=`lit$${(Math.random()+"").slice(9)}$`,$="?"+k,_=`<${$}>`,E=document,R=(t="")=>E.createComment(t),j=t=>null===t||"object"!=typeof t&&"function"!=typeof t,A=Array.isArray,T=t=>{var e;return A(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])},U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,M=/-->/g,D=/>/g,H=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,N=/'/g,L=/"/g,z=/^(?:script|style|textarea)$/i,q=t=>(e,...o)=>({_$litType$:t,strings:e,values:o}),B=q(1),I=q(2),V=Symbol.for("lit-noChange"),K=Symbol.for("lit-nothing"),W=new WeakMap,Q=(t,e,o)=>{var s,i;const n=null!==(s=null==o?void 0:o.renderBefore)&&void 0!==s?s:e;let r=n._$litPart$;if(void 0===r){const t=null!==(i=null==o?void 0:o.renderBefore)&&void 0!==i?i:null;n._$litPart$=r=new G(e.insertBefore(R(),t),t,void 0,o)}return r.I(t),r},Z=E.createTreeWalker(E,129,null,!1),J=(t,e)=>{const o=t.length-1,s=[];let i,n=2===e?"<svg>":"",r=U;for(let e=0;e<o;e++){const o=t[e];let l,a,c=-1,u=0;for(;u<o.length&&(r.lastIndex=u,a=r.exec(o),null!==a);)u=r.lastIndex,r===U?"!--"===a[1]?r=M:void 0!==a[1]?r=D:void 0!==a[2]?(z.test(a[2])&&(i=RegExp("</"+a[2],"g")),r=H):void 0!==a[3]&&(r=H):r===H?">"===a[0]?(r=null!=i?i:U,c=-1):void 0===a[1]?c=-2:(c=r.lastIndex-a[2].length,l=a[1],r=void 0===a[3]?H:'"'===a[3]?L:N):r===L||r===N?r=H:r===M||r===D?r=U:(r=H,i=void 0);const p=r===H&&t[e+1].startsWith("/>")?" ":"";n+=r===U?o+_:c>=0?(s.push(l),o.slice(0,c)+"$lit$"+o.slice(c)+k+p):o+k+(-2===c?(s.push(void 0),e):p)}const l=n+(t[o]||"<?>")+(2===e?"</svg>":"");return[void 0!==O?O.createHTML(l):l,s]};class X{constructor({strings:t,_$litType$:e},o){let s;this.parts=[];let i=0,n=0;const r=t.length-1,l=this.parts,[a,c]=J(t,e);if(this.el=X.createElement(a,o),Z.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=Z.nextNode())&&l.length<r;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(k)){const o=c[n++];if(t.push(e),void 0!==o){const t=s.getAttribute(o.toLowerCase()+"$lit$").split(k),e=/([.?@])?(.*)/.exec(o);l.push({type:1,index:i,name:e[2],strings:t,ctor:"."===e[1]?et:"?"===e[1]?ot:"@"===e[1]?st:tt})}else l.push({type:6,index:i})}for(const e of t)s.removeAttribute(e)}if(z.test(s.tagName)){const t=s.textContent.split(k),e=t.length-1;if(e>0){s.textContent=C?C.emptyScript:"";for(let o=0;o<e;o++)s.append(t[o],R()),Z.nextNode(),l.push({type:2,index:++i});s.append(t[e],R())}}}else if(8===s.nodeType)if(s.data===$)l.push({type:2,index:i});else{let t=-1;for(;-1!==(t=s.data.indexOf(k,t+1));)l.push({type:7,index:i}),t+=k.length-1}i++}}static createElement(t,e){const o=E.createElement("template");return o.innerHTML=t,o}}function Y(t,e,o=t,s){var i,n,r,l;if(e===V)return e;let a=void 0!==s?null===(i=o.Σi)||void 0===i?void 0:i[s]:o.Σo;const c=j(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==c&&(null===(n=null==a?void 0:a.O)||void 0===n||n.call(a,!1),void 0===c?a=void 0:(a=new c(t),a.T(t,o,s)),void 0!==s?(null!==(r=(l=o).Σi)&&void 0!==r?r:l.Σi=[])[s]=a:o.Σo=a),void 0!==a&&(e=Y(t,a.S(t,e.values),a,s)),e}class F{constructor(t,e){this.l=[],this.N=void 0,this.D=t,this.M=e}u(t){var e;const{el:{content:o},parts:s}=this.D,i=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:E).importNode(o,!0);Z.currentNode=i;let n=Z.nextNode(),r=0,l=0,a=s[0];for(;void 0!==a;){if(r===a.index){let e;2===a.type?e=new G(n,n.nextSibling,this,t):1===a.type?e=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(e=new it(n,this,t)),this.l.push(e),a=s[++l]}r!==(null==a?void 0:a.index)&&(n=Z.nextNode(),r++)}return i}v(t){let e=0;for(const o of this.l)void 0!==o&&(void 0!==o.strings?(o.I(t,o,e),e+=o.strings.length-2):o.I(t[e])),e++}}class G{constructor(t,e,o,s){this.type=2,this.N=void 0,this.A=t,this.B=e,this.M=o,this.options=s}setConnected(t){var e;null===(e=this.P)||void 0===e||e.call(this,t)}get parentNode(){return this.A.parentNode}get startNode(){return this.A}get endNode(){return this.B}I(t,e=this){t=Y(this,t,e),j(t)?t===K||null==t||""===t?(this.H!==K&&this.R(),this.H=K):t!==this.H&&t!==V&&this.m(t):void 0!==t._$litType$?this._(t):void 0!==t.nodeType?this.$(t):T(t)?this.g(t):this.m(t)}k(t,e=this.B){return this.A.parentNode.insertBefore(t,e)}$(t){this.H!==t&&(this.R(),this.H=this.k(t))}m(t){const e=this.A.nextSibling;null!==e&&3===e.nodeType&&(null===this.B?null===e.nextSibling:e===this.B.previousSibling)?e.data=t:this.$(E.createTextNode(t)),this.H=t}_(t){var e;const{values:o,_$litType$:s}=t,i="number"==typeof s?this.C(t):(void 0===s.el&&(s.el=X.createElement(s.h,this.options)),s);if((null===(e=this.H)||void 0===e?void 0:e.D)===i)this.H.v(o);else{const t=new F(i,this),e=t.u(this.options);t.v(o),this.$(e),this.H=t}}C(t){let e=W.get(t.strings);return void 0===e&&W.set(t.strings,e=new X(t)),e}g(t){A(this.H)||(this.H=[],this.R());const e=this.H;let o,s=0;for(const i of t)s===e.length?e.push(o=new G(this.k(R()),this.k(R()),this,this.options)):o=e[s],o.I(i),s++;s<e.length&&(this.R(o&&o.B.nextSibling,s),e.length=s)}R(t=this.A.nextSibling,e){var o;for(null===(o=this.P)||void 0===o||o.call(this,!1,!0,e);t&&t!==this.B;){const e=t.nextSibling;t.remove(),t=e}}}class tt{constructor(t,e,o,s,i){this.type=1,this.H=K,this.N=void 0,this.V=void 0,this.element=t,this.name=e,this.M=s,this.options=i,o.length>2||""!==o[0]||""!==o[1]?(this.H=Array(o.length-1).fill(K),this.strings=o):this.H=K}get tagName(){return this.element.tagName}I(t,e=this,o,s){const i=this.strings;let n=!1;if(void 0===i)t=Y(this,t,e,0),n=!j(t)||t!==this.H&&t!==V,n&&(this.H=t);else{const s=t;let r,l;for(t=i[0],r=0;r<i.length-1;r++)l=Y(this,s[o+r],e,r),l===V&&(l=this.H[r]),n||(n=!j(l)||l!==this.H[r]),l===K?t=K:t!==K&&(t+=(null!=l?l:"")+i[r+1]),this.H[r]=l}n&&!s&&this.W(t)}W(t){t===K?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class et extends tt{constructor(){super(...arguments),this.type=3}W(t){this.element[this.name]=t===K?void 0:t}}class ot extends tt{constructor(){super(...arguments),this.type=4}W(t){t&&t!==K?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class st extends tt{constructor(){super(...arguments),this.type=5}I(t,e=this){var o;if((t=null!==(o=Y(this,t,e,0))&&void 0!==o?o:K)===V)return;const s=this.H,i=t===K&&s!==K||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==K&&(s===K||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this.H=t}handleEvent(t){var e,o;"function"==typeof this.H?this.H.call(null!==(o=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==o?o:this.element,t):this.H.handleEvent(t)}}class it{constructor(t,e,o){this.element=t,this.type=6,this.N=void 0,this.V=void 0,this.M=e,this.options=o}I(t){Y(this,t)}}const nt={Z:"$lit$",U:k,Y:$,q:1,X:J,tt:F,it:T,st:Y,et:G,ot:tt,nt:ot,rt:st,lt:et,ht:it};var rt,lt,at,ct,ut,pt;null===(x=(S=globalThis).litHtmlPlatformSupport)||void 0===x||x.call(S,X,G),(null!==(w=(P=globalThis).litHtmlVersions)&&void 0!==w?w:P.litHtmlVersions=[]).push("2.0.0-rc.3");const dt=b;(null!==(rt=(pt=globalThis).litElementVersions)&&void 0!==rt?rt:pt.litElementVersions=[]).push("3.0.0-rc.2");class ht extends b{constructor(){super(...arguments),this.renderOptions={host:this},this.Φt=void 0}createRenderRoot(){var t,e;const o=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=o.firstChild),o}update(t){const e=this.render();super.update(t),this.Φt=Q(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!1)}render(){return V}}ht.finalized=!0,ht._$litElement$=!0,null===(at=(lt=globalThis).litElementHydrateSupport)||void 0===at||at.call(lt,{LitElement:ht}),null===(ut=(ct=globalThis).litElementPlatformSupport)||void 0===ut||ut.call(ct,{LitElement:ht});const ft={K:(t,e,o)=>{t.K(e,o)},L:t=>t.L}},878:function(t,e,o){var s=this&&this.__decorate||function(t,e,o,s){var i,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,s);else for(var l=t.length-1;l>=0;l--)(i=t[l])&&(r=(n<3?i(r):n>3?i(e,o,r):i(e,o))||r);return n>3&&r&&Object.defineProperty(e,o,r),r},i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.DoodleAlert=void 0;const n=o(558),r=o(26),l=i(o(836)),a=o(668);let c=class extends l.default{constructor(t="",e="center"){super(t,e)}static get styles(){return a.alertStyles}getAlertClasses(){const t=[];return t.push("popup"),t.push(`popup-${this.position}`),t.join(" ")}render(){return n.html`
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