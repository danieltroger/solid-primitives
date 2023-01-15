(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerpolicy&&(l.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?l.credentials="include":s.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(s){if(s.ep)return;s.ep=!0;const l=n(s);fetch(s.href,l)}})();const w={};function ue(e){w.context=e}const ce=(e,t)=>e===t,he=Symbol("solid-proxy"),ae=Symbol("solid-track"),I={equals:ce};let J=ie;const x=1,T=2,Z={owned:null,cleanups:null,context:null,owner:null};var a=null;let A=null,h=null,d=null,y=null,j=0;function de(e,t){const n=h,i=a,s=e.length===0,l=s?Z:{owned:null,cleanups:null,context:null,owner:t||i},r=s?e:()=>e(()=>$(()=>M(l)));a=l,h=null;try{return _(r,!0)}finally{h=n,a=i}}function P(e,t){t=t?Object.assign({},I,t):I;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},i=s=>(typeof s=="function"&&(s=s(n.value)),te(n,s));return[ye.bind(n),i]}function C(e,t,n){const i=ne(e,t,!1,x);z(i)}function k(e,t,n){J=Se;const i=ne(e,t,!1,x);i.user=!0,y?y.push(i):z(i)}function ge(e){return _(e,!1)}function $(e){const t=h;h=null;try{return e()}finally{h=t}}function pe(e,t,n){const i=Array.isArray(e);let s,l=n&&n.defer;return r=>{let o;if(i){o=Array(e.length);for(let f=0;f<e.length;f++)o[f]=e[f]()}else o=e();if(l){l=!1;return}const u=$(()=>t(o,s,r));return s=o,u}}function we(e){k(()=>$(e))}function ee(e){return a===null||(a.cleanups===null?a.cleanups=[e]:a.cleanups.push(e)),e}function be(){return a}function ye(){const e=A;if(this.sources&&(this.state||e))if(this.state===x||e)z(this);else{const t=d;d=null,_(()=>O(this),!1),d=t}if(h){const t=this.observers?this.observers.length:0;h.sources?(h.sources.push(this),h.sourceSlots.push(t)):(h.sources=[this],h.sourceSlots=[t]),this.observers?(this.observers.push(h),this.observerSlots.push(h.sources.length-1)):(this.observers=[h],this.observerSlots=[h.sources.length-1])}return this.value}function te(e,t,n){let i=e.value;return(!e.comparator||!e.comparator(i,t))&&(e.value=t,e.observers&&e.observers.length&&_(()=>{for(let s=0;s<e.observers.length;s+=1){const l=e.observers[s],r=A&&A.running;r&&A.disposed.has(l),(r&&!l.tState||!r&&!l.state)&&(l.pure?d.push(l):y.push(l),l.observers&&se(l)),r||(l.state=x)}if(d.length>1e6)throw d=[],new Error},!1)),t}function z(e){if(!e.fn)return;M(e);const t=a,n=h,i=j;h=a=e,ve(e,e.value,i),h=n,a=t}function ve(e,t,n){let i;try{i=e.fn(t)}catch(s){e.pure&&(e.state=x,e.owned&&e.owned.forEach(M),e.owned=null),oe(s)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?te(e,i):e.value=i,e.updatedAt=n)}function ne(e,t,n,i=x,s){const l={fn:e,state:i,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:a,context:null,pure:n};return a===null||a!==Z&&(a.owned?a.owned.push(l):a.owned=[l]),l}function N(e){const t=A;if(e.state===0||t)return;if(e.state===T||t)return O(e);if(e.suspense&&$(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<j);)(e.state||t)&&n.push(e);for(let i=n.length-1;i>=0;i--)if(e=n[i],e.state===x||t)z(e);else if(e.state===T||t){const s=d;d=null,_(()=>O(e,n[0]),!1),d=s}}function _(e,t){if(d)return e();let n=!1;t||(d=[]),y?n=!0:y=[],j++;try{const i=e();return xe(n),i}catch(i){d||(y=null),oe(i)}}function xe(e){if(d&&(ie(d),d=null),e)return;const t=y;y=null,t.length&&_(()=>J(t),!1)}function ie(e){for(let t=0;t<e.length;t++)N(e[t])}function Se(e){let t,n=0;for(t=0;t<e.length;t++){const i=e[t];i.user?e[n++]=i:N(i)}for(w.context&&ue(),t=0;t<n;t++)N(e[t])}function O(e,t){const n=A;e.state=0;for(let i=0;i<e.sources.length;i+=1){const s=e.sources[i];s.sources&&(s.state===x||n?s!==t&&N(s):(s.state===T||n)&&O(s,t))}}function se(e){const t=A;for(let n=0;n<e.observers.length;n+=1){const i=e.observers[n];(!i.state||t)&&(i.state=T,i.pure?d.push(i):y.push(i),i.observers&&se(i))}}function M(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),i=e.sourceSlots.pop(),s=n.observers;if(s&&s.length){const l=s.pop(),r=n.observerSlots.pop();i<s.length&&(l.sourceSlots[r]=i,s[i]=l,n.observerSlots[i]=r)}}if(e.owned){for(t=0;t<e.owned.length;t++)M(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function me(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function oe(e){throw e=me(e),e}function B(e,t){return $(()=>e(t||{}))}function Ae(e,t,n){let i=n.length,s=t.length,l=i,r=0,o=0,u=t[s-1].nextSibling,f=null;for(;r<s||o<l;){if(t[r]===n[o]){r++,o++;continue}for(;t[s-1]===n[l-1];)s--,l--;if(s===r){const c=l<i?o?n[o-1].nextSibling:n[l-o]:u;for(;o<l;)e.insertBefore(n[o++],c)}else if(l===o)for(;r<s;)(!f||!f.has(t[r]))&&t[r].remove(),r++;else if(t[r]===n[l-1]&&n[o]===t[s-1]){const c=t[--s].nextSibling;e.insertBefore(n[o++],t[r++].nextSibling),e.insertBefore(n[--l],c),t[s]=n[l]}else{if(!f){f=new Map;let g=o;for(;g<l;)f.set(n[g],g++)}const c=f.get(t[r]);if(c!=null)if(o<c&&c<l){let g=r,p=1,b;for(;++g<s&&g<l&&!((b=f.get(t[g]))==null||b!==c+p);)p++;if(p>c-o){const S=t[r];for(;o<c;)e.insertBefore(n[o++],S)}else e.replaceChild(n[o++],t[r++])}else r++;else t[r++].remove()}}}const H="_$DX_DELEGATE";function $e(e,t,n,i={}){let s;return de(l=>{s=l,t===document?e():v(t,e(),t.firstChild?null:void 0,n)},i.owner),()=>{s(),t.textContent=""}}function le(e,t,n){const i=document.createElement("template");i.innerHTML=e;let s=i.content.firstChild;return n&&(s=s.firstChild),s}function Ee(e,t=window.document){const n=t[H]||(t[H]=new Set);for(let i=0,s=e.length;i<s;i++){const l=e[i];n.has(l)||(n.add(l),t.addEventListener(l,_e))}}function q(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function Ce(e,t,n){return $(()=>e(t,n))}function v(e,t,n,i){if(n!==void 0&&!i&&(i=[]),typeof t!="function")return L(e,t,i,n);C(s=>L(e,t(),s,n),i)}function _e(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),w.registry&&!w.done&&(w.done=!0,document.querySelectorAll("[id^=pl-]").forEach(i=>{for(;i&&i.nodeType!==8&&i.nodeValue!=="pl-"+e;){let s=i.nextSibling;i.remove(),i=s}i&&i.remove()}));n;){const i=n[t];if(i&&!n.disabled){const s=n[`${t}Data`];if(s!==void 0?i.call(n,s,e):i.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function L(e,t,n,i,s){for(w.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const l=typeof t,r=i!==void 0;if(e=r&&n[0]&&n[0].parentNode||e,l==="string"||l==="number"){if(w.context)return n;if(l==="number"&&(t=t.toString()),r){let o=n[0];o&&o.nodeType===3?o.data=t:o=document.createTextNode(t),n=E(e,n,i,o)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||l==="boolean"){if(w.context)return n;n=E(e,n,i)}else{if(l==="function")return C(()=>{let o=t();for(;typeof o=="function";)o=o();n=L(e,o,n,i)}),()=>n;if(Array.isArray(t)){const o=[],u=n&&Array.isArray(n);if(R(o,t,n,s))return C(()=>n=L(e,o,n,i,!0)),()=>n;if(w.context){if(!o.length)return n;for(let f=0;f<o.length;f++)if(o[f].parentNode)return n=o}if(o.length===0){if(n=E(e,n,i),r)return n}else u?n.length===0?F(e,o,i):Ae(e,n,o):(n&&E(e),F(e,o));n=o}else if(t instanceof Node){if(w.context&&t.parentNode)return n=r?[t]:t;if(Array.isArray(n)){if(r)return n=E(e,n,i,t);E(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function R(e,t,n,i){let s=!1;for(let l=0,r=t.length;l<r;l++){let o=t[l],u=n&&n[l];if(o instanceof Node)e.push(o);else if(!(o==null||o===!0||o===!1))if(Array.isArray(o))s=R(e,o,u)||s;else if(typeof o=="function")if(i){for(;typeof o=="function";)o=o();s=R(e,Array.isArray(o)?o:[o],Array.isArray(u)?u:[u])||s}else e.push(o),s=!0;else{const f=String(o);u&&u.nodeType===3&&u.data===f?e.push(u):e.push(document.createTextNode(f))}}return s}function F(e,t,n=null){for(let i=0,s=t.length;i<s;i++)e.insertBefore(t[i],n)}function E(e,t,n,i){if(n===void 0)return e.textContent="";const s=i||document.createTextNode("");if(t.length){let l=!1;for(let r=t.length-1;r>=0;r--){const o=t[r];if(s!==o){const u=o.parentNode===e;!l&&!r?u?e.replaceChild(s,o):e.insertBefore(s,n):u&&o.remove()}else l=!0}}else e.insertBefore(s,n);return[s]}function Te(e){return e!==null&&(typeof e=="object"||typeof e=="function")}var G=e=>Array.isArray(e)?e:[e];function K(e,...t){return typeof e=="function"?e(...t):e}var Ne=Object.entries,Oe=Object.keys,Le=e=>be()?ee(e):e;function re(e){const t={...e},n={},i=new Map,s=o=>{const u=i.get(o);if(u)return u[0]();const f=P(t[o],{name:typeof o=="string"?o:void 0});return i.set(o,f),delete t[o],f[0]()},l=(o,u)=>{const f=i.get(o);if(f)return f[1](u);o in t&&(t[o]=K(u,[t[o]]))};for(const o of Oe(e))n[o]=void 0,Object.defineProperty(n,o,{get:s.bind(void 0,o)});return[n,(o,u)=>(Te(o)?$(()=>{ge(()=>{for(const[f,c]of Ne(K(o,n)))l(f,()=>c)})}):l(o,u),n)]}function ze(e,t,n,i){const s=e.length,l=t.length;let r=0;if(!l){for(;r<s;r++)n(e[r]);return}if(!s){for(;r<l;r++)i(t[r]);return}for(;r<l&&t[r]===e[r];r++);let o,u;t=t.slice(r),e=e.slice(r);for(o of t)e.includes(o)||i(o);for(u of e)t.includes(u)||n(u)}function Me(e,t,n,i){return e.addEventListener(t,n,i),Le(e.removeEventListener.bind(e,t,n,i))}function Pe(e,t){const n=new ResizeObserver(e);return ee(n.disconnect.bind(n)),{observe:i=>n.observe(i,t),unobserve:n.unobserve.bind(n)}}function Be(e,t,n){const i=new WeakMap,{observe:s,unobserve:l}=Pe(r,n);function r(u){for(const f of u){const{contentRect:c,target:g}=f,p=Math.round(c.width),b=Math.round(c.height),S=i.get(g);(!S||S.width!==p||S.height!==b)&&(t(c,f.target,f),i.set(g,{width:p,height:b}))}}let o;if(typeof e=="function")o=()=>G(e()).slice();else if(Array.isArray(e)&&he in e)o=()=>(e[ae],e.slice());else{G(e).forEach(s);return}k(pe(o,(u,f=[])=>ze(u,f,s,l)))}function X(){return{width:window.innerWidth,height:window.innerHeight}}function Re(){const[e,t]=re(X());return Me(window,"resize",()=>t(X())),e}function Q(e){if(!e)return{width:null,height:null};const{width:t,height:n}=e.getBoundingClientRect();return{width:t,height:n}}function je(e){const[t,n]=re(typeof e!="function"?Q(e):(()=>(we(()=>n(Q(e()))),{width:null,height:null}))());return Be(typeof e=="function"?()=>e()||[]:e,s=>n({width:s.width,height:s.height})),t}const Ve=le('<div class="flex flex-col"><label class="mb-1">:</label><input type="range" min="10" max="400" step="10"></div>'),De=le('<div class="p-24 box-border w-full min-h-screen flex flex-col justify-center items-center space-y-4 bg-gray-800 text-white"><div class="center-child min-h-82"><div class="w-24 h-24 bg-orange-500 rounded-md shadow-bg-gray-900 shadow-lg center-child">px x <!>px</div></div><div class="wrapper-h"></div><div class="fixed bottom-4 right-4">window: <!>px x <!>px</div></div>'),Y=e=>(()=>{const t=Ve.cloneNode(!0),n=t.firstChild,i=n.firstChild,s=n.nextSibling;return v(n,()=>e.name,i),s.$$input=l=>e.setValue(+l.currentTarget.value),C(l=>{const r=e.name,o=e.name;return r!==l._v$&&q(n,"for",l._v$=r),o!==l._v$2&&q(s,"name",l._v$2=o),l},{_v$:void 0,_v$2:void 0}),C(()=>s.value=e.value),t})(),Ue=()=>{const[e,t]=P(200),[n,i]=P(200);let s;const l=Re(),r=je(()=>s);return(()=>{const o=De.cloneNode(!0),u=o.firstChild,f=u.firstChild,c=f.firstChild,g=c.nextSibling;g.nextSibling;const p=u.nextSibling,b=p.nextSibling,S=b.firstChild,V=S.nextSibling,fe=V.nextSibling,D=fe.nextSibling;return D.nextSibling,Ce(m=>s=m,f),v(f,()=>Math.round(r.width??0),c),v(f,()=>Math.round(r.height??0),g),v(p,B(Y,{name:"width",get value(){return e()},setValue:t}),null),v(p,B(Y,{name:"height",get value(){return n()},setValue:i}),null),v(b,()=>Math.round(l.width),V),v(b,()=>Math.round(l.height),D),C(m=>{const U=`${e()}px`,W=`${n()}px`;return U!==m._v$3&&f.style.setProperty("width",m._v$3=U),W!==m._v$4&&f.style.setProperty("height",m._v$4=W),m},{_v$3:void 0,_v$4:void 0}),o})()};$e(()=>B(Ue,{}),document.getElementById("root"));Ee(["input"]);
