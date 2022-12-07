(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerpolicy&&(l.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?l.credentials="include":o.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();const y={};function le(e){y.context=e}const re=(e,t)=>e===t,fe=Symbol("solid-proxy"),ue=Symbol("solid-track"),W={equals:re};let Y=ne;const v=1,O=2,Z={owned:null,cleanups:null,context:null,owner:null};var h=null;let A=null,a=null,d=null,b=null,M=0;function ce(e,t){const n=a,s=h,o=e.length===0,l=o?Z:{owned:null,cleanups:null,context:null,owner:t||s},r=o?e:()=>e(()=>x(()=>I(l)));h=l,a=null;try{return S(r,!0)}finally{a=n,h=s}}function j(e,t){t=t?Object.assign({},W,t):W;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=o=>(typeof o=="function"&&(o=o(n.value)),te(n,o));return[pe.bind(n),s]}function ae(e,t,n){const s=R(e,t,!0,v);_(s)}function C(e,t,n){const s=R(e,t,!1,v);_(s)}function z(e,t,n){Y=be;const s=R(e,t,!1,v);s.user=!0,b?b.push(s):_(s)}function he(e){return S(e,!1)}function x(e){const t=a;a=null;try{return e()}finally{a=t}}function k(e,t,n){const s=Array.isArray(e);let o,l=n&&n.defer;return r=>{let i;if(s){i=Array(e.length);for(let u=0;u<e.length;u++)i[u]=e[u]()}else i=e();if(l){l=!1;return}const f=x(()=>t(i,o,r));return o=i,f}}function de(e){z(()=>x(e))}function B(e){return h===null||(h.cleanups===null?h.cleanups=[e]:h.cleanups.push(e)),e}function ee(){return h}function pe(){const e=A;if(this.sources&&(this.state||e))if(this.state===v||e)_(this);else{const t=d;d=null,S(()=>T(this),!1),d=t}if(a){const t=this.observers?this.observers.length:0;a.sources?(a.sources.push(this),a.sourceSlots.push(t)):(a.sources=[this],a.sourceSlots=[t]),this.observers?(this.observers.push(a),this.observerSlots.push(a.sources.length-1)):(this.observers=[a],this.observerSlots=[a.sources.length-1])}return this.value}function te(e,t,n){let s=e.value;return(!e.comparator||!e.comparator(s,t))&&(e.value=t,e.observers&&e.observers.length&&S(()=>{for(let o=0;o<e.observers.length;o+=1){const l=e.observers[o],r=A&&A.running;r&&A.disposed.has(l),(r&&!l.tState||!r&&!l.state)&&(l.pure?d.push(l):b.push(l),l.observers&&se(l)),r||(l.state=v)}if(d.length>1e6)throw d=[],new Error},!1)),t}function _(e){if(!e.fn)return;I(e);const t=h,n=a,s=M;a=h=e,ge(e,e.value,s),a=n,h=t}function ge(e,t,n){let s;try{s=e.fn(t)}catch(o){e.pure&&(e.state=v),ie(o)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?te(e,s):e.value=s,e.updatedAt=n)}function R(e,t,n,s=v,o){const l={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:h,context:null,pure:n};return h===null||h!==Z&&(h.owned?h.owned.push(l):h.owned=[l]),l}function N(e){const t=A;if(e.state===0||t)return;if(e.state===O||t)return T(e);if(e.suspense&&x(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<M);)(e.state||t)&&n.push(e);for(let s=n.length-1;s>=0;s--)if(e=n[s],e.state===v||t)_(e);else if(e.state===O||t){const o=d;d=null,S(()=>T(e,n[0]),!1),d=o}}function S(e,t){if(d)return e();let n=!1;t||(d=[]),b?n=!0:b=[],M++;try{const s=e();return ye(n),s}catch(s){d||(b=null),ie(s)}}function ye(e){if(d&&(ne(d),d=null),e)return;const t=b;b=null,t.length&&S(()=>Y(t),!1)}function ne(e){for(let t=0;t<e.length;t++)N(e[t])}function be(e){let t,n=0;for(t=0;t<e.length;t++){const s=e[t];s.user?e[n++]=s:N(s)}for(y.context&&le(),t=0;t<n;t++)N(e[t])}function T(e,t){const n=A;e.state=0;for(let s=0;s<e.sources.length;s+=1){const o=e.sources[s];o.sources&&(o.state===v||n?o!==t&&N(o):(o.state===O||n)&&T(o,t))}}function se(e){const t=A;for(let n=0;n<e.observers.length;n+=1){const s=e.observers[n];(!s.state||t)&&(s.state=O,s.pure?d.push(s):b.push(s),s.observers&&se(s))}}function I(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),o=n.observers;if(o&&o.length){const l=o.pop(),r=n.observerSlots.pop();s<o.length&&(l.sourceSlots[r]=s,o[s]=l,n.observerSlots[s]=r)}}if(e.owned){for(t=0;t<e.owned.length;t++)I(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function ve(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function ie(e){throw e=ve(e),e}function U(e,t){return x(()=>e(t||{}))}function we(e,t,n){let s=n.length,o=t.length,l=s,r=0,i=0,f=t[o-1].nextSibling,u=null;for(;r<o||i<l;){if(t[r]===n[i]){r++,i++;continue}for(;t[o-1]===n[l-1];)o--,l--;if(o===r){const c=l<s?i?n[i-1].nextSibling:n[l-i]:f;for(;i<l;)e.insertBefore(n[i++],c)}else if(l===i)for(;r<o;)(!u||!u.has(t[r]))&&t[r].remove(),r++;else if(t[r]===n[l-1]&&n[i]===t[o-1]){const c=t[--o].nextSibling;e.insertBefore(n[i++],t[r++].nextSibling),e.insertBefore(n[--l],c),t[o]=n[l]}else{if(!u){u=new Map;let p=i;for(;p<l;)u.set(n[p],p++)}const c=u.get(t[r]);if(c!=null)if(i<c&&c<l){let p=r,w=1,m;for(;++p<o&&p<l&&!((m=u.get(t[p]))==null||m!==c+w);)w++;if(w>c-i){const g=t[r];for(;i<c;)e.insertBefore(n[i++],g)}else e.replaceChild(n[i++],t[r++])}else r++;else t[r++].remove()}}}const F="_$DX_DELEGATE";function me(e,t,n,s={}){let o;return ce(l=>{o=l,t===document?e():$(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{o(),t.textContent=""}}function oe(e,t,n){const s=document.createElement("template");s.innerHTML=e;let o=s.content.firstChild;return n&&(o=o.firstChild),o}function Ae(e,t=window.document){const n=t[F]||(t[F]=new Set);for(let s=0,o=e.length;s<o;s++){const l=e[s];n.has(l)||(n.add(l),t.addEventListener(l,Ee))}}function q(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function xe(e,t,n){return x(()=>e(t,n))}function $(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return L(e,t,s,n);C(o=>L(e,t(),o,n),s)}function Ee(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),y.registry&&!y.done&&(y.done=!0,document.querySelectorAll("[id^=pl-]").forEach(s=>s.remove()));n;){const s=n[t];if(s&&!n.disabled){const o=n[`${t}Data`];if(o!==void 0?s.call(n,o,e):s.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function L(e,t,n,s,o){for(y.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const l=typeof t,r=s!==void 0;if(e=r&&n[0]&&n[0].parentNode||e,l==="string"||l==="number"){if(y.context)return n;if(l==="number"&&(t=t.toString()),r){let i=n[0];i&&i.nodeType===3?i.data=t:i=document.createTextNode(t),n=E(e,n,s,i)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||l==="boolean"){if(y.context)return n;n=E(e,n,s)}else{if(l==="function")return C(()=>{let i=t();for(;typeof i=="function";)i=i();n=L(e,i,n,s)}),()=>n;if(Array.isArray(t)){const i=[],f=n&&Array.isArray(n);if(D(i,t,n,o))return C(()=>n=L(e,i,n,s,!0)),()=>n;if(y.context){if(!i.length)return n;for(let u=0;u<i.length;u++)if(i[u].parentNode)return n=i}if(i.length===0){if(n=E(e,n,s),r)return n}else f?n.length===0?G(e,i,s):we(e,n,i):(n&&E(e),G(e,i));n=i}else if(t instanceof Node){if(y.context&&t.parentNode)return n=r?[t]:t;if(Array.isArray(n)){if(r)return n=E(e,n,s,t);E(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function D(e,t,n,s){let o=!1;for(let l=0,r=t.length;l<r;l++){let i=t[l],f=n&&n[l];if(i instanceof Node)e.push(i);else if(!(i==null||i===!0||i===!1))if(Array.isArray(i))o=D(e,i,f)||o;else if(typeof i=="function")if(s){for(;typeof i=="function";)i=i();o=D(e,Array.isArray(i)?i:[i],Array.isArray(f)?f:[f])||o}else e.push(i),o=!0;else{const u=String(i);f&&f.nodeType===3&&f.data===u?e.push(f):e.push(document.createTextNode(u))}}return o}function G(e,t,n=null){for(let s=0,o=t.length;s<o;s++)e.insertBefore(t[s],n)}function E(e,t,n,s){if(n===void 0)return e.textContent="";const o=s||document.createTextNode("");if(t.length){let l=!1;for(let r=t.length-1;r>=0;r--){const i=t[r];if(o!==i){const f=i.parentNode===e;!l&&!r?f?e.replaceChild(o,i):e.insertBefore(o,n):f&&i.remove()}else l=!0}}else e.insertBefore(o,n);return[o]}var Ce=(e,t)=>{let n=!1,s,o;const l=(...i)=>{o=i,!n&&(n=!0,s=setTimeout(()=>{e(...o),n=!1},t))},r=()=>{clearTimeout(s),n=!1};return ee()&&B(r),Object.assign(l,{clear:r})};function Se(e){return e!==null&&(typeof e=="object"||typeof e=="function")}var K=e=>typeof e=="function"&&!e.length?e():e,X=e=>Array.isArray(e)?e:[e];function J(e,...t){return typeof e=="function"?e(...t):e}var $e=Object.entries,_e=Object.keys,Oe=e=>ee()?B(e):e;function Ne(e){const t={...e},n={},s=new Map,o=i=>{const f=s.get(i);if(f)return f[0]();const u=j(t[i],{name:typeof i=="string"?i:void 0});return s.set(i,u),delete t[i],u[0]()},l=(i,f)=>{const u=s.get(i);if(u)return u[1](f);i in t&&(t[i]=J(f,[t[i]]))};for(const i of _e(e))n[i]=void 0,Object.defineProperty(n,i,{get:o.bind(void 0,i)});return[n,(i,f)=>(Se(i)?x(()=>{he(()=>{for(const[u,c]of $e(J(i,n)))l(u,()=>c)})}):l(i,f),n)]}function Te(e,t,n,s){const o=e.length,l=t.length;let r=0;if(!l){for(;r<o;r++)n(e[r]);return}if(!o){for(;r<l;r++)s(t[r]);return}for(;r<l&&t[r]===e[r];r++);let i,f;t=t.slice(r),e=e.slice(r);for(i of t)e.includes(i)||s(i);for(f of e)t.includes(f)||n(f)}function Le(e,t,n,s){return e.addEventListener(t,n,s),Oe(e.removeEventListener.bind(e,t,n,s))}function Be(e,t){const n=new ResizeObserver(e);return B(n.disconnect.bind(n)),{observe:s=>n.observe(s,t),unobserve:n.unobserve.bind(n)}}function Pe(e,t,n){const s=new WeakMap,{observe:o,unobserve:l}=Be(r,n);function r(f){for(const u of f){const{contentRect:c,target:p}=u,w=Math.round(c.width),m=Math.round(c.height),g=s.get(p);(!g||g.width!==w||g.height!==m)&&(t(c,u.target,u),s.set(p,{width:w,height:m}))}}let i;if(typeof e=="function")i=()=>X(e()).slice();else if(Array.isArray(e)&&fe in e)i=()=>(e[ue],e.slice());else{X(e).forEach(o);return}z(k(i,(f,u=[])=>Te(f,u,o,l)))}const je={top:null,left:null,bottom:null,right:null,width:null,height:null};function P(e){if(!e)return Object.assign({},je);const t=e.getBoundingClientRect();return{top:t.top,left:t.left,bottom:t.bottom,right:t.right,width:t.width,height:t.height}}function Ue(e,{trackMutation:t=!0,trackResize:n=!0,trackScroll:s=!0}={}){const[o,l]=Ne(P(K(e))),r=()=>l(P(K(e))),i=f=>l(P(f));if(typeof e=="function"&&(de(()=>i(e())),ae(k(e,i,{defer:!0}))),n){const f=(u,c)=>i(c);Pe(typeof e=="function"?()=>e()||[]:e,typeof n=="function"?n(f):f)}if(s){const f=typeof e=="function"?u=>{const c=e();c&&u.target instanceof Node&&u.target.contains(c)&&i(c)}:u=>{u.target instanceof Node&&u.target.contains(e)&&i(e)};Le(window,"scroll",typeof s=="function"?s(f):f,{capture:!0})}if(t){const f=new MutationObserver(typeof t=="function"?t(r):r);f.observe(document.body,{attributeFilter:["style","class"],subtree:!0,childList:!0}),B(f.disconnect.bind(f))}return o}const De=oe('<div class="flex flex-col"><label class="mb-1">:</label><input type="range" min="10" max="400" step="10"></div>'),Me=oe('<div class="p-24 box-border w-full h-150vh flex flex-col justify-center items-center space-y-4 bg-gray-800 text-white"><div class="w-60vw overflow-x-scroll p-8"><div class="w-80vw"><div class="center-child min-h-82"><div class="w-24 h-24 bg-orange-500 rounded-md shadow-bg-gray-900 shadow-lg center-child"><pre></pre></div></div><div class="wrapper-h"></div></div></div></div>'),Q=e=>(()=>{const t=De.cloneNode(!0),n=t.firstChild,s=n.firstChild,o=n.nextSibling;return $(n,()=>e.name,s),o.$$input=l=>e.setValue(+l.currentTarget.value),C(l=>{const r=e.name,i=e.name;return r!==l._v$&&q(n,"for",l._v$=r),i!==l._v$2&&q(o,"name",l._v$2=i),l},{_v$:void 0,_v$2:void 0}),C(()=>o.value=e.value),t})(),Re=()=>{const[e,t]=j(200),[n,s]=j(200);let o;const l=i=>Ce(i,500),r=Ue(()=>o,{trackMutation:l,trackScroll:l});return(()=>{const i=Me.cloneNode(!0),f=i.firstChild,u=f.firstChild,c=u.firstChild,p=c.firstChild,w=p.firstChild,m=c.nextSibling;return xe(g=>o=g,p),$(w,()=>JSON.stringify(r,void 0,2)),$(m,U(Q,{name:"width",get value(){return e()},setValue:t}),null),$(m,U(Q,{name:"height",get value(){return n()},setValue:s}),null),C(g=>{const V=`${e()}px`,H=`${n()}px`;return V!==g._v$3&&p.style.setProperty("width",g._v$3=V),H!==g._v$4&&p.style.setProperty("height",g._v$4=H),g},{_v$3:void 0,_v$4:void 0}),i})()};me(()=>U(Re,{}),document.getElementById("root"));Ae(["input"]);