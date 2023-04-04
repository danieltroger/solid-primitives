(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();const ge={context:void 0,registry:void 0},ye=(e,t)=>e===t,be=Symbol("solid-track"),D={equals:ye};let oe=fe;const C=1,F=2,re={owned:null,cleanups:null,context:null,owner:null};var g=null;let H=null,d=null,b=null,$=null,q=0;function N(e,t){const n=d,o=g,s=e.length===0,r=s?re:{owned:null,cleanups:null,context:null,owner:t===void 0?o:t},l=s?e:()=>e(()=>x(()=>V(r)));g=r,d=null;try{return T(l,!0)}finally{d=n,g=o}}function L(e,t){t=t?Object.assign({},D,t):D;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},o=s=>(typeof s=="function"&&(s=s(n.value)),ue(n,s));return[ce.bind(n),o]}function k(e,t,n){const o=G(e,t,!1,C);j(o)}function ie(e,t,n){oe=Ae;const o=G(e,t,!1,C);o.user=!0,$?$.push(o):j(o)}function P(e,t,n){n=n?Object.assign({},D,n):D;const o=G(e,t,!0,0);return o.observers=null,o.observerSlots=null,o.comparator=n.equals||void 0,j(o),ce.bind(o)}function me(e){return T(e,!1)}function x(e){if(d===null)return e();const t=d;d=null;try{return e()}finally{d=t}}function we(e){ie(()=>x(e))}function R(e){return g===null||(g.cleanups===null?g.cleanups=[e]:g.cleanups.push(e)),e}function le(){return d}function W(){return g}function ve(e,t){const n=g,o=d;g=e,d=null;try{return T(t,!0)}catch(s){Q(s)}finally{g=n,d=o}}function ce(){if(this.sources&&this.state)if(this.state===C)j(this);else{const e=b;b=null,T(()=>X(this),!1),b=e}if(d){const e=this.observers?this.observers.length:0;d.sources?(d.sources.push(this),d.sourceSlots.push(e)):(d.sources=[this],d.sourceSlots=[e]),this.observers?(this.observers.push(d),this.observerSlots.push(d.sources.length-1)):(this.observers=[d],this.observerSlots=[d.sources.length-1])}return this.value}function ue(e,t,n){let o=e.value;return(!e.comparator||!e.comparator(o,t))&&(e.value=t,e.observers&&e.observers.length&&T(()=>{for(let s=0;s<e.observers.length;s+=1){const r=e.observers[s],l=H&&H.running;l&&H.disposed.has(r),(l?!r.tState:!r.state)&&(r.pure?b.push(r):$.push(r),r.observers&&ae(r)),l||(r.state=C)}if(b.length>1e6)throw b=[],new Error},!1)),t}function j(e){if(!e.fn)return;V(e);const t=g,n=d,o=q;d=g=e,xe(e,e.value,o),d=n,g=t}function xe(e,t,n){let o;try{o=e.fn(t)}catch(s){return e.pure&&(e.state=C,e.owned&&e.owned.forEach(V),e.owned=null),e.updatedAt=n+1,Q(s)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?ue(e,o):e.value=o,e.updatedAt=n)}function G(e,t,n,o=C,s){const r={fn:e,state:o,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:g,context:null,pure:n};return g===null||g!==re&&(g.owned?g.owned.push(r):g.owned=[r]),r}function U(e){if(e.state===0)return;if(e.state===F)return X(e);if(e.suspense&&x(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<q);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===C)j(e);else if(e.state===F){const o=b;b=null,T(()=>X(e,t[0]),!1),b=o}}function T(e,t){if(b)return e();let n=!1;t||(b=[]),$?n=!0:$=[],q++;try{const o=e();return Se(n),o}catch(o){n||($=null),b=null,Q(o)}}function Se(e){if(b&&(fe(b),b=null),e)return;const t=$;$=null,t.length&&T(()=>oe(t),!1)}function fe(e){for(let t=0;t<e.length;t++)U(e[t])}function Ae(e){let t,n=0;for(t=0;t<e.length;t++){const o=e[t];o.user?e[n++]=o:U(o)}for(t=0;t<n;t++)U(e[t])}function X(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const o=e.sources[n];if(o.sources){const s=o.state;s===C?o!==t&&(!o.updatedAt||o.updatedAt<q)&&U(o):s===F&&X(o,t)}}}function ae(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=F,n.pure?b.push(n):$.push(n),n.observers&&ae(n))}}function V(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),o=e.sourceSlots.pop(),s=n.observers;if(s&&s.length){const r=s.pop(),l=n.observerSlots.pop();o<s.length&&(r.sourceSlots[l]=o,s[o]=r,n.observerSlots[o]=l)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)V(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function Q(e){throw e}const Ee=Symbol("fallback");function Z(e){for(let t=0;t<e.length;t++)e[t]()}function $e(e,t,n={}){let o=[],s=[],r=[],l=0,i=t.length>1?[]:null;return R(()=>Z(r)),()=>{let c=e()||[],f,u;return c[be],x(()=>{let a=c.length,y,S,_,h,A,w,m,v,E;if(a===0)l!==0&&(Z(r),r=[],o=[],s=[],l=0,i&&(i=[])),n.fallback&&(o=[Ee],s[0]=N(pe=>(r[0]=pe,n.fallback())),l=1);else if(l===0){for(s=new Array(a),u=0;u<a;u++)o[u]=c[u],s[u]=N(p);l=a}else{for(_=new Array(a),h=new Array(a),i&&(A=new Array(a)),w=0,m=Math.min(l,a);w<m&&o[w]===c[w];w++);for(m=l-1,v=a-1;m>=w&&v>=w&&o[m]===c[v];m--,v--)_[v]=s[m],h[v]=r[m],i&&(A[v]=i[m]);for(y=new Map,S=new Array(v+1),u=v;u>=w;u--)E=c[u],f=y.get(E),S[u]=f===void 0?-1:f,y.set(E,u);for(f=w;f<=m;f++)E=o[f],u=y.get(E),u!==void 0&&u!==-1?(_[u]=s[f],h[u]=r[f],i&&(A[u]=i[f]),u=S[u],y.set(E,u)):r[f]();for(u=w;u<a;u++)u in _?(s[u]=_[u],r[u]=h[u],i&&(i[u]=A[u],i[u](u))):s[u]=N(p);s=s.slice(0,l=a),o=c.slice(0)}return s});function p(a){if(r[u]=a,i){const[y,S]=L(u);return i[u]=S,t(c[u],y)}return t(c[u])}}}function M(e,t){return x(()=>e(t||{}))}const Ce=e=>`Stale read from <${e}>.`;function _e(e){const t="fallback"in e&&{fallback:()=>e.fallback};return P($e(()=>e.each,e.children,t||void 0))}function Le(e){const t=e.keyed,n=P(()=>e.when,void 0,{equals:(o,s)=>t?o===s:!o==!s});return P(()=>{const o=n();if(o){const s=e.children;return typeof s=="function"&&s.length>0?x(()=>s(t?o:()=>{if(!x(n))throw Ce("Show");return e.when})):s}return e.fallback},void 0,void 0)}function Pe(e,t,n){let o=n.length,s=t.length,r=o,l=0,i=0,c=t[s-1].nextSibling,f=null;for(;l<s||i<r;){if(t[l]===n[i]){l++,i++;continue}for(;t[s-1]===n[r-1];)s--,r--;if(s===l){const u=r<o?i?n[i-1].nextSibling:n[r-i]:c;for(;i<r;)e.insertBefore(n[i++],u)}else if(r===i)for(;l<s;)(!f||!f.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[r-1]&&n[i]===t[s-1]){const u=t[--s].nextSibling;e.insertBefore(n[i++],t[l++].nextSibling),e.insertBefore(n[--r],u),t[s]=n[r]}else{if(!f){f=new Map;let p=i;for(;p<r;)f.set(n[p],p++)}const u=f.get(t[l]);if(u!=null)if(i<u&&u<r){let p=l,a=1,y;for(;++p<s&&p<r&&!((y=f.get(t[p]))==null||y!==u+a);)a++;if(a>u-i){const S=t[l];for(;i<u;)e.insertBefore(n[i++],S)}else e.replaceChild(n[i++],t[l++])}else l++;else t[l++].remove()}}}const z="_$DX_DELEGATE";function Te(e,t,n,o={}){let s;return N(r=>{s=r,t===document?e():O(t,e(),t.firstChild?null:void 0,n)},o.owner),()=>{s(),t.textContent=""}}function J(e,t,n){let o;const s=()=>{const l=document.createElement("template");return l.innerHTML=e,n?l.content.firstChild.firstChild:l.content.firstChild},r=t?()=>(o||(o=s())).cloneNode(!0):()=>x(()=>document.importNode(o||(o=s()),!0));return r.cloneNode=r,r}function Ie(e,t=window.document){const n=t[z]||(t[z]=new Set);for(let o=0,s=e.length;o<s;o++){const r=e[o];n.has(r)||(n.add(r),t.addEventListener(r,Ne))}}function Oe(e,t,n){return x(()=>e(t,n))}function O(e,t,n,o){if(n!==void 0&&!o&&(o=[]),typeof t!="function")return Y(e,t,o,n);k(s=>Y(e,t(),s,n),o)}function Ne(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}});n;){const o=n[t];if(o&&!n.disabled){const s=n[`${t}Data`];if(s!==void 0?o.call(n,s,e):o.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function Y(e,t,n,o,s){for(;typeof n=="function";)n=n();if(t===n)return n;const r=typeof t,l=o!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,r==="string"||r==="number")if(r==="number"&&(t=t.toString()),l){let i=n[0];i&&i.nodeType===3?i.data=t:i=document.createTextNode(t),n=I(e,n,o,i)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t;else if(t==null||r==="boolean")n=I(e,n,o);else{if(r==="function")return k(()=>{let i=t();for(;typeof i=="function";)i=i();n=Y(e,i,n,o)}),()=>n;if(Array.isArray(t)){const i=[],c=n&&Array.isArray(n);if(K(i,t,n,s))return k(()=>n=Y(e,i,n,o,!0)),()=>n;if(i.length===0){if(n=I(e,n,o),l)return n}else c?n.length===0?ee(e,i,o):Pe(e,n,i):(n&&I(e),ee(e,i));n=i}else if(t instanceof Node){if(Array.isArray(n)){if(l)return n=I(e,n,o,t);I(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}else console.warn("Unrecognized value. Skipped inserting",t)}return n}function K(e,t,n,o){let s=!1;for(let r=0,l=t.length;r<l;r++){let i=t[r],c=n&&n[r];if(i instanceof Node)e.push(i);else if(!(i==null||i===!0||i===!1))if(Array.isArray(i))s=K(e,i,c)||s;else if(typeof i=="function")if(o){for(;typeof i=="function";)i=i();s=K(e,Array.isArray(i)?i:[i],Array.isArray(c)?c:[c])||s}else e.push(i),s=!0;else{const f=String(i);c&&c.nodeType===3?(c.data=f,e.push(c)):e.push(document.createTextNode(f))}}return s}function ee(e,t,n=null){for(let o=0,s=t.length;o<s;o++)e.insertBefore(t[o],n)}function I(e,t,n,o){if(n===void 0)return e.textContent="";const s=o||document.createTextNode("");if(t.length){let r=!1;for(let l=t.length-1;l>=0;l--){const i=t[l];if(s!==i){const c=i.parentNode===e;!r&&!l?c?e.replaceChild(s,i):e.insertBefore(s,n):c&&i.remove()}else r=!0}}else e.insertBefore(s,n);return[s]}function Me(e){return e!==null&&(typeof e=="object"||typeof e=="function")}var te=(e,t,n)=>Math.min(Math.max(e,t),n),ke=e=>typeof e=="function"&&!e.length?e():e,Re=e=>typeof e=="function"?e:()=>e;function ne(e,...t){return typeof e=="function"?e(...t):e}var je=R,Be=()=>{let e=[];const t=()=>e=[];return{push:(...n)=>e.push(...n),execute(n,o,s,r){e.forEach(l=>l(n,o,s,r)),t()},clear:t}};function De(e,t,n,o){return e.addEventListener(t,n,o),je(e.removeEventListener.bind(e,t,n,o))}function de(e,t){const{push:n,execute:o}=Be();return[(s,r,l)=>{const i=De(e,s,r,l??t);return n(i),i},R(o)]}const he={passive:!0},Fe={x:0,y:0,isInside:!1,sourceType:null},Ue={x:0,y:0,top:0,left:0,width:0,height:0,isInside:!0};function Xe(e=window,t,n={}){const{touch:o=!0,followTouch:s=!0}=n,[r,l]=de(e,he),i=c=>t({x:c.pageX,y:c.pageY,sourceType:"mouse"});if(r("mousemove",i),r("dragover",i),o){const c=f=>{f.touches.length&&t({x:f.touches[0].clientX,y:f.touches[0].clientY,sourceType:"touch"})};r("touchstart",c),s&&r("touchmove",c)}return l}function Ye(e=window,t,n={}){const{touch:o=!0}=n,[s,r]=de(e,he);let l=!1,i=!o;function c(f){this==="mouse"?l=f:i=f,t(l||i)}return s("mouseover",c.bind("mouse",!0)),s("mouseout",c.bind("mouse",!1)),s("mousemove",c.bind("mouse",!0),{passive:!0,once:!0}),o&&(s("touchstart",c.bind("touch",!0)),s("touchend",c.bind("touch",!1))),r}const qe=(e,t,n)=>{const o=n.getBoundingClientRect(),s=o.top+window.scrollY,r=o.left+window.scrollX,l=e-r,i=t-s,{width:c,height:f}=o;return{x:l,y:i,top:s,left:r,width:c,height:f,isInside:l>=0&&i>=0&&l<=c&&i<=f}};function Ve(e,t=W()){let n=0,o,s;return()=>(n++,R(()=>{n--,queueMicrotask(()=>{!n&&s&&(s(),s=o=void 0)})}),s||N(r=>o=e(s=r),t),o)}function He(e){const t=W(),n=Ve(e,t);return()=>n()}function Ke(e){const t={...e},n={...e},o={},s=l=>{let i=o[l];if(!i){if(!le())return t[l];o[l]=i=L(t[l],{internal:!0}),delete t[l]}return i[0]()};for(const l in e)Object.defineProperty(n,l,{get:()=>s(l),enumerable:!0});const r=(l,i)=>{const c=o[l];if(c)return c[1](i);l in t&&(t[l]=ne(i,[t[l]]))};return[n,(l,i)=>{if(Me(l)){const c=x(()=>Object.entries(ne(l,n)));me(()=>{for(const[f,u]of c)r(f,()=>u)})}else r(l,i);return n}]}function We(e,t,n){const o=W(),s=P(e,t,n),r={...x(s)},l={};for(const i in r)Object.defineProperty(r,i,{get(){let c=l[i];if(!c){if(!le())return s()[i];ve(o,()=>l[i]=c=P(()=>s()[i]))}return c()},enumerable:!0});return r}function Ge(e,t={}){const n={...Fe,...t.initialValue},[o,s]=Ke(n),r=l=>{Xe(l,s,t),Ye(l,s.bind(void 0,"isInside"),t)};return typeof e!="function"?r(e):ie(()=>r(e())),o}const Qe=He(Ge.bind(void 0,void 0,void 0));function Je(e,t,n={}){const o={...Ue,...n.initialValue},s=typeof e=="function",r=ge.context,l=Re(e),[i,c]=L(!!r,{equals:!1});return s&&we(()=>c(!1)),We(()=>{let f;if(i()||!(f=l()))return o;const{x:u,y:p}=t();return qe(u,p,f)})}function Ze(e){const[t,n]=L(!1);let o=0;const s=i=>{o=requestAnimationFrame(s),e(i)},r=()=>{t()||(n(!0),o=requestAnimationFrame(s))},l=()=>{n(!1),cancelAnimationFrame(o)};return R(l),[t,r,l]}const B=(e,t,n)=>(1-n)*e+n*t;const ze=J("<p>: "),se=e=>M(_e,{get each(){return Object.keys(e.record)},children:t=>(()=>{const n=ze(),o=n.firstChild;return O(n,t,o),O(n,()=>{const s=ke(e.record[t]);return typeof s=="number"?parseInt(s):String(s)},null),n})()}),et=J('<div class="top-25vh left-25vw w-50vw h-50vh bg-opacity-15 border-1 fixed z-10 overflow-hidden rounded-3xl border-gray-400 border-opacity-40 bg-gray-300 backdrop-blur backdrop-filter"><div class="pointer-events-none h-24 w-24 rounded-full bg-amber-500 bg-opacity-80">'),tt=J('<div class="box-border h-screen w-full overflow-hidden bg-indigo-800 text-white"><div class="pointer-events-none h-36 w-36 rounded-full bg-violet-700 filter"></div><div class="top-25vh left-25vw rounded-lt border-1 pointer-events-none fixed z-20 rounded-2xl border-white border-opacity-20 bg-white bg-opacity-10 p-6 py-4 text-white text-opacity-50 transition-opacity"></div><div class="caption fixed left-6 top-6 select-none text-white text-opacity-60"></div><button class="fixed right-6 top-6 cursor-pointer rounded-lg border-none bg-gray-300 bg-opacity-25 p-2 font-medium text-gray-300 opacity-80 hover:opacity-100">Toggle Container'),nt=()=>{const[e,t]=L(!0),[n,o]=L(),s=Qe(),r=Je(n,()=>s),l=P(()=>te(r.x,0,r.width)),i=P(()=>te(r.y,0,r.height)),[c,f]=L({x:0,y:0,elX:0,elY:0}),[,u]=Ze(()=>{f(p=>({x:B(p.x,s.x,.1),y:B(p.y,s.y,.1),elX:B(p.elX,r.x,.2),elY:B(p.elY,r.y,.2)}))});return u(),(()=>{const p=tt(),a=p.firstChild,y=a.nextSibling,S=y.nextSibling,_=S.nextSibling;return a.style.setProperty("transition","opacity 500ms, filter 300ms"),O(p,M(Le,{get when(){return e()},get children(){const h=et(),A=h.firstChild;return Oe(o,h),k(()=>`translate(${c().elX-54}px, ${c().elY-54}px)`!=null?A.style.setProperty("transform",`translate(${c().elX-54}px, ${c().elY-54}px)`):A.style.removeProperty("transform")),h}}),y),O(y,M(se,{get record(){return{x:l(),y:i()}}})),O(S,M(se,{record:s})),_.$$click=()=>t(h=>!h),k(h=>{const A=!s.isInside,w=!s.isInside,m=`translate(${c().x-81}px, ${c().y-81}px)`,v=`translate(${l()}px, ${i()}px)`,E=r.isInside?1:0;return A!==h._v$&&a.classList.toggle("opacity-0",h._v$=A),w!==h._v$2&&a.classList.toggle("blur-xl",h._v$2=w),m!==h._v$3&&((h._v$3=m)!=null?a.style.setProperty("transform",m):a.style.removeProperty("transform")),v!==h._v$4&&((h._v$4=v)!=null?y.style.setProperty("transform",v):y.style.removeProperty("transform")),E!==h._v$5&&((h._v$5=E)!=null?y.style.setProperty("opacity",E):y.style.removeProperty("opacity")),h},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0}),p})()};Te(()=>M(nt,{}),document.getElementById("root"));Ie(["click"]);