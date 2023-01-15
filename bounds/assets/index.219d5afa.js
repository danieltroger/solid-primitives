(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerpolicy&&(l.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?l.credentials="include":i.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();const y={};function le(e){y.context=e}const re=(e,t)=>e===t,fe=Symbol("solid-proxy"),ue=Symbol("solid-track"),W={equals:re};let Y=ne;const w=1,O=2,Z={owned:null,cleanups:null,context:null,owner:null};var h=null;let x=null,a=null,d=null,b=null,R=0;function ce(e,t){const n=a,s=h,i=e.length===0,l=i?Z:{owned:null,cleanups:null,context:null,owner:t||s},r=i?e:()=>e(()=>A(()=>P(l)));h=l,a=null;try{return C(r,!0)}finally{a=n,h=s}}function U(e,t){t=t?Object.assign({},W,t):W;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=i=>(typeof i=="function"&&(i=i(n.value)),te(n,i));return[pe.bind(n),s]}function ae(e,t,n){const s=V(e,t,!0,w);_(s)}function S(e,t,n){const s=V(e,t,!1,w);_(s)}function z(e,t,n){Y=be;const s=V(e,t,!1,w);s.user=!0,b?b.push(s):_(s)}function he(e){return C(e,!1)}function A(e){const t=a;a=null;try{return e()}finally{a=t}}function k(e,t,n){const s=Array.isArray(e);let i,l=n&&n.defer;return r=>{let o;if(s){o=Array(e.length);for(let u=0;u<e.length;u++)o[u]=e[u]()}else o=e();if(l){l=!1;return}const f=A(()=>t(o,i,r));return i=o,f}}function de(e){z(()=>A(e))}function B(e){return h===null||(h.cleanups===null?h.cleanups=[e]:h.cleanups.push(e)),e}function ee(){return h}function pe(){const e=x;if(this.sources&&(this.state||e))if(this.state===w||e)_(this);else{const t=d;d=null,C(()=>T(this),!1),d=t}if(a){const t=this.observers?this.observers.length:0;a.sources?(a.sources.push(this),a.sourceSlots.push(t)):(a.sources=[this],a.sourceSlots=[t]),this.observers?(this.observers.push(a),this.observerSlots.push(a.sources.length-1)):(this.observers=[a],this.observerSlots=[a.sources.length-1])}return this.value}function te(e,t,n){let s=e.value;return(!e.comparator||!e.comparator(s,t))&&(e.value=t,e.observers&&e.observers.length&&C(()=>{for(let i=0;i<e.observers.length;i+=1){const l=e.observers[i],r=x&&x.running;r&&x.disposed.has(l),(r&&!l.tState||!r&&!l.state)&&(l.pure?d.push(l):b.push(l),l.observers&&se(l)),r||(l.state=w)}if(d.length>1e6)throw d=[],new Error},!1)),t}function _(e){if(!e.fn)return;P(e);const t=h,n=a,s=R;a=h=e,ge(e,e.value,s),a=n,h=t}function ge(e,t,n){let s;try{s=e.fn(t)}catch(i){e.pure&&(e.state=w,e.owned&&e.owned.forEach(P),e.owned=null),ie(i)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?te(e,s):e.value=s,e.updatedAt=n)}function V(e,t,n,s=w,i){const l={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:h,context:null,pure:n};return h===null||h!==Z&&(h.owned?h.owned.push(l):h.owned=[l]),l}function N(e){const t=x;if(e.state===0||t)return;if(e.state===O||t)return T(e);if(e.suspense&&A(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<R);)(e.state||t)&&n.push(e);for(let s=n.length-1;s>=0;s--)if(e=n[s],e.state===w||t)_(e);else if(e.state===O||t){const i=d;d=null,C(()=>T(e,n[0]),!1),d=i}}function C(e,t){if(d)return e();let n=!1;t||(d=[]),b?n=!0:b=[],R++;try{const s=e();return ye(n),s}catch(s){d||(b=null),ie(s)}}function ye(e){if(d&&(ne(d),d=null),e)return;const t=b;b=null,t.length&&C(()=>Y(t),!1)}function ne(e){for(let t=0;t<e.length;t++)N(e[t])}function be(e){let t,n=0;for(t=0;t<e.length;t++){const s=e[t];s.user?e[n++]=s:N(s)}for(y.context&&le(),t=0;t<n;t++)N(e[t])}function T(e,t){const n=x;e.state=0;for(let s=0;s<e.sources.length;s+=1){const i=e.sources[s];i.sources&&(i.state===w||n?i!==t&&N(i):(i.state===O||n)&&T(i,t))}}function se(e){const t=x;for(let n=0;n<e.observers.length;n+=1){const s=e.observers[n];(!s.state||t)&&(s.state=O,s.pure?d.push(s):b.push(s),s.observers&&se(s))}}function P(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),i=n.observers;if(i&&i.length){const l=i.pop(),r=n.observerSlots.pop();s<i.length&&(l.sourceSlots[r]=s,i[s]=l,n.observerSlots[s]=r)}}if(e.owned){for(t=0;t<e.owned.length;t++)P(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function we(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function ie(e){throw e=we(e),e}function D(e,t){return A(()=>e(t||{}))}function ve(e,t,n){let s=n.length,i=t.length,l=s,r=0,o=0,f=t[i-1].nextSibling,u=null;for(;r<i||o<l;){if(t[r]===n[o]){r++,o++;continue}for(;t[i-1]===n[l-1];)i--,l--;if(i===r){const c=l<s?o?n[o-1].nextSibling:n[l-o]:f;for(;o<l;)e.insertBefore(n[o++],c)}else if(l===o)for(;r<i;)(!u||!u.has(t[r]))&&t[r].remove(),r++;else if(t[r]===n[l-1]&&n[o]===t[i-1]){const c=t[--i].nextSibling;e.insertBefore(n[o++],t[r++].nextSibling),e.insertBefore(n[--l],c),t[i]=n[l]}else{if(!u){u=new Map;let p=o;for(;p<l;)u.set(n[p],p++)}const c=u.get(t[r]);if(c!=null)if(o<c&&c<l){let p=r,v=1,m;for(;++p<i&&p<l&&!((m=u.get(t[p]))==null||m!==c+v);)v++;if(v>c-o){const g=t[r];for(;o<c;)e.insertBefore(n[o++],g)}else e.replaceChild(n[o++],t[r++])}else r++;else t[r++].remove()}}}const F="_$DX_DELEGATE";function me(e,t,n,s={}){let i;return ce(l=>{i=l,t===document?e():$(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{i(),t.textContent=""}}function oe(e,t,n){const s=document.createElement("template");s.innerHTML=e;let i=s.content.firstChild;return n&&(i=i.firstChild),i}function xe(e,t=window.document){const n=t[F]||(t[F]=new Set);for(let s=0,i=e.length;s<i;s++){const l=e[s];n.has(l)||(n.add(l),t.addEventListener(l,Ee))}}function q(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function Ae(e,t,n){return A(()=>e(t,n))}function $(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return L(e,t,s,n);S(i=>L(e,t(),i,n),s)}function Ee(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),y.registry&&!y.done&&(y.done=!0,document.querySelectorAll("[id^=pl-]").forEach(s=>{for(;s&&s.nodeType!==8&&s.nodeValue!=="pl-"+e;){let i=s.nextSibling;s.remove(),s=i}s&&s.remove()}));n;){const s=n[t];if(s&&!n.disabled){const i=n[`${t}Data`];if(i!==void 0?s.call(n,i,e):s.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function L(e,t,n,s,i){for(y.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const l=typeof t,r=s!==void 0;if(e=r&&n[0]&&n[0].parentNode||e,l==="string"||l==="number"){if(y.context)return n;if(l==="number"&&(t=t.toString()),r){let o=n[0];o&&o.nodeType===3?o.data=t:o=document.createTextNode(t),n=E(e,n,s,o)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||l==="boolean"){if(y.context)return n;n=E(e,n,s)}else{if(l==="function")return S(()=>{let o=t();for(;typeof o=="function";)o=o();n=L(e,o,n,s)}),()=>n;if(Array.isArray(t)){const o=[],f=n&&Array.isArray(n);if(M(o,t,n,i))return S(()=>n=L(e,o,n,s,!0)),()=>n;if(y.context){if(!o.length)return n;for(let u=0;u<o.length;u++)if(o[u].parentNode)return n=o}if(o.length===0){if(n=E(e,n,s),r)return n}else f?n.length===0?G(e,o,s):ve(e,n,o):(n&&E(e),G(e,o));n=o}else if(t instanceof Node){if(y.context&&t.parentNode)return n=r?[t]:t;if(Array.isArray(n)){if(r)return n=E(e,n,s,t);E(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function M(e,t,n,s){let i=!1;for(let l=0,r=t.length;l<r;l++){let o=t[l],f=n&&n[l];if(o instanceof Node)e.push(o);else if(!(o==null||o===!0||o===!1))if(Array.isArray(o))i=M(e,o,f)||i;else if(typeof o=="function")if(s){for(;typeof o=="function";)o=o();i=M(e,Array.isArray(o)?o:[o],Array.isArray(f)?f:[f])||i}else e.push(o),i=!0;else{const u=String(o);f&&f.nodeType===3&&f.data===u?e.push(f):e.push(document.createTextNode(u))}}return i}function G(e,t,n=null){for(let s=0,i=t.length;s<i;s++)e.insertBefore(t[s],n)}function E(e,t,n,s){if(n===void 0)return e.textContent="";const i=s||document.createTextNode("");if(t.length){let l=!1;for(let r=t.length-1;r>=0;r--){const o=t[r];if(i!==o){const f=o.parentNode===e;!l&&!r?f?e.replaceChild(i,o):e.insertBefore(i,n):f&&o.remove()}else l=!0}}else e.insertBefore(i,n);return[i]}var Se=(e,t)=>{let n=!1,s,i;const l=(...o)=>{i=o,!n&&(n=!0,s=setTimeout(()=>{e(...i),n=!1},t))},r=()=>{clearTimeout(s),n=!1};return ee()&&B(r),Object.assign(l,{clear:r})};function Ce(e){return e!==null&&(typeof e=="object"||typeof e=="function")}var K=e=>typeof e=="function"&&!e.length?e():e,X=e=>Array.isArray(e)?e:[e];function J(e,...t){return typeof e=="function"?e(...t):e}var $e=Object.entries,_e=Object.keys,Oe=e=>ee()?B(e):e;function Ne(e){const t={...e},n={},s=new Map,i=o=>{const f=s.get(o);if(f)return f[0]();const u=U(t[o],{name:typeof o=="string"?o:void 0});return s.set(o,u),delete t[o],u[0]()},l=(o,f)=>{const u=s.get(o);if(u)return u[1](f);o in t&&(t[o]=J(f,[t[o]]))};for(const o of _e(e))n[o]=void 0,Object.defineProperty(n,o,{get:i.bind(void 0,o)});return[n,(o,f)=>(Ce(o)?A(()=>{he(()=>{for(const[u,c]of $e(J(o,n)))l(u,()=>c)})}):l(o,f),n)]}function Te(e,t,n,s){const i=e.length,l=t.length;let r=0;if(!l){for(;r<i;r++)n(e[r]);return}if(!i){for(;r<l;r++)s(t[r]);return}for(;r<l&&t[r]===e[r];r++);let o,f;t=t.slice(r),e=e.slice(r);for(o of t)e.includes(o)||s(o);for(f of e)t.includes(f)||n(f)}function Le(e,t,n,s){return e.addEventListener(t,n,s),Oe(e.removeEventListener.bind(e,t,n,s))}function Be(e,t){const n=new ResizeObserver(e);return B(n.disconnect.bind(n)),{observe:s=>n.observe(s,t),unobserve:n.unobserve.bind(n)}}function Pe(e,t,n){const s=new WeakMap,{observe:i,unobserve:l}=Be(r,n);function r(f){for(const u of f){const{contentRect:c,target:p}=u,v=Math.round(c.width),m=Math.round(c.height),g=s.get(p);(!g||g.width!==v||g.height!==m)&&(t(c,u.target,u),s.set(p,{width:v,height:m}))}}let o;if(typeof e=="function")o=()=>X(e()).slice();else if(Array.isArray(e)&&fe in e)o=()=>(e[ue],e.slice());else{X(e).forEach(i);return}z(k(o,(f,u=[])=>Te(f,u,i,l)))}const je={top:null,left:null,bottom:null,right:null,width:null,height:null};function j(e){if(!e)return Object.assign({},je);const t=e.getBoundingClientRect();return{top:t.top,left:t.left,bottom:t.bottom,right:t.right,width:t.width,height:t.height}}function Ue(e,{trackMutation:t=!0,trackResize:n=!0,trackScroll:s=!0}={}){const[i,l]=Ne(j(K(e))),r=()=>l(j(K(e))),o=f=>l(j(f));if(typeof e=="function"&&(de(()=>o(e())),ae(k(e,o,{defer:!0}))),n){const f=(u,c)=>o(c);Pe(typeof e=="function"?()=>e()||[]:e,typeof n=="function"?n(f):f)}if(s){const f=typeof e=="function"?u=>{const c=e();c&&u.target instanceof Node&&u.target.contains(c)&&o(c)}:u=>{u.target instanceof Node&&u.target.contains(e)&&o(e)};Le(window,"scroll",typeof s=="function"?s(f):f,{capture:!0})}if(t){const f=new MutationObserver(typeof t=="function"?t(r):r);f.observe(document.body,{attributeFilter:["style","class"],subtree:!0,childList:!0}),B(f.disconnect.bind(f))}return i}const De=oe('<div class="flex flex-col"><label class="mb-1">:</label><input type="range" min="10" max="400" step="10"></div>'),Me=oe('<div class="p-24 box-border w-full h-150vh flex flex-col justify-center items-center space-y-4 bg-gray-800 text-white"><div class="w-60vw overflow-x-scroll p-8"><div class="w-80vw"><div class="center-child min-h-82"><div class="w-24 h-24 bg-orange-500 rounded-md shadow-bg-gray-900 shadow-lg center-child"><pre></pre></div></div><div class="wrapper-h"></div></div></div></div>'),Q=e=>(()=>{const t=De.cloneNode(!0),n=t.firstChild,s=n.firstChild,i=n.nextSibling;return $(n,()=>e.name,s),i.$$input=l=>e.setValue(+l.currentTarget.value),S(l=>{const r=e.name,o=e.name;return r!==l._v$&&q(n,"for",l._v$=r),o!==l._v$2&&q(i,"name",l._v$2=o),l},{_v$:void 0,_v$2:void 0}),S(()=>i.value=e.value),t})(),Re=()=>{const[e,t]=U(200),[n,s]=U(200);let i;const l=o=>Se(o,500),r=Ue(()=>i,{trackMutation:l,trackScroll:l});return(()=>{const o=Me.cloneNode(!0),f=o.firstChild,u=f.firstChild,c=u.firstChild,p=c.firstChild,v=p.firstChild,m=c.nextSibling;return Ae(g=>i=g,p),$(v,()=>JSON.stringify(r,void 0,2)),$(m,D(Q,{name:"width",get value(){return e()},setValue:t}),null),$(m,D(Q,{name:"height",get value(){return n()},setValue:s}),null),S(g=>{const I=`${e()}px`,H=`${n()}px`;return I!==g._v$3&&p.style.setProperty("width",g._v$3=I),H!==g._v$4&&p.style.setProperty("height",g._v$4=H),g},{_v$3:void 0,_v$4:void 0}),o})()};me(()=>D(Re,{}),document.getElementById("root"));xe(["input"]);
