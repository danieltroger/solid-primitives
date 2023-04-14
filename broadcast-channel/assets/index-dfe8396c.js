(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();const Me=(e,t)=>e===t,E=Symbol("solid-proxy"),ne=Symbol("solid-track"),W={equals:Me};let he=$e;const P=1,H=2,ge={owned:null,cleanups:null,context:null,owner:null};var b=null;let ee=null,y=null,w=null,_=null,Y=0;function q(e,t){const n=y,s=b,l=e.length===0,i=l?ge:{owned:null,cleanups:null,context:null,owner:t===void 0?s:t},r=l?e:()=>e(()=>N(()=>z(i)));b=i,y=null;try{return I(r,!0)}finally{y=n,b=s}}function R(e,t){t=t?Object.assign({},W,t):W;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=l=>(typeof l=="function"&&(l=l(n.value)),we(n,l));return[be.bind(n),s]}function T(e,t,n){const s=oe(e,t,!1,P);U(s)}function Le(e,t,n){he=De;const s=oe(e,t,!1,P);(!n||!n.render)&&(s.user=!0),_?_.push(s):U(s)}function se(e,t,n){n=n?Object.assign({},W,n):W;const s=oe(e,t,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,U(s),be.bind(s)}function ke(e){return I(e,!1)}function N(e){if(y===null)return e();const t=y;y=null;try{return e()}finally{y=t}}function je(e,t,n){const s=Array.isArray(e);let l,i=n&&n.defer;return r=>{let o;if(s){o=Array(e.length);for(let u=0;u<e.length;u++)o[u]=e[u]()}else o=e();if(i){i=!1;return}const f=N(()=>t(o,l,r));return l=o,f}}function pe(e){return b===null||(b.cleanups===null?b.cleanups=[e]:b.cleanups.push(e)),e}function ye(){return y}function be(){if(this.sources&&this.state)if(this.state===P)U(this);else{const e=w;w=null,I(()=>G(this),!1),w=e}if(y){const e=this.observers?this.observers.length:0;y.sources?(y.sources.push(this),y.sourceSlots.push(e)):(y.sources=[this],y.sourceSlots=[e]),this.observers?(this.observers.push(y),this.observerSlots.push(y.sources.length-1)):(this.observers=[y],this.observerSlots=[y.sources.length-1])}return this.value}function we(e,t,n){let s=e.value;return(!e.comparator||!e.comparator(s,t))&&(e.value=t,e.observers&&e.observers.length&&I(()=>{for(let l=0;l<e.observers.length;l+=1){const i=e.observers[l],r=ee&&ee.running;r&&ee.disposed.has(i),(r?!i.tState:!i.state)&&(i.pure?w.push(i):_.push(i),i.observers&&me(i)),r||(i.state=P)}if(w.length>1e6)throw w=[],new Error},!1)),t}function U(e){if(!e.fn)return;z(e);const t=b,n=y,s=Y;y=b=e,Be(e,e.value,s),y=n,b=t}function Be(e,t,n){let s;try{s=e.fn(t)}catch(l){return e.pure&&(e.state=P,e.owned&&e.owned.forEach(z),e.owned=null),e.updatedAt=n+1,Ae(l)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?we(e,s):e.value=s,e.updatedAt=n)}function oe(e,t,n,s=P,l){const i={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:b,context:null,pure:n};return b===null||b!==ge&&(b.owned?b.owned.push(i):b.owned=[i]),i}function V(e){if(e.state===0)return;if(e.state===H)return G(e);if(e.suspense&&N(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<Y);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===P)U(e);else if(e.state===H){const s=w;w=null,I(()=>G(e,t[0]),!1),w=s}}function I(e,t){if(w)return e();let n=!1;t||(w=[]),_?n=!0:_=[],Y++;try{const s=e();return Ie(n),s}catch(s){n||(_=null),w=null,Ae(s)}}function Ie(e){if(w&&($e(w),w=null),e)return;const t=_;_=null,t.length&&I(()=>he(t),!1)}function $e(e){for(let t=0;t<e.length;t++)V(e[t])}function De(e){let t,n=0;for(t=0;t<e.length;t++){const s=e[t];s.user?e[n++]=s:V(s)}for(t=0;t<n;t++)V(e[t])}function G(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const s=e.sources[n];if(s.sources){const l=s.state;l===P?s!==t&&(!s.updatedAt||s.updatedAt<Y)&&V(s):l===H&&G(s,t)}}}function me(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=H,n.pure?w.push(n):_.push(n),n.observers&&me(n))}}function z(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),l=n.observers;if(l&&l.length){const i=l.pop(),r=n.observerSlots.pop();s<l.length&&(i.sourceSlots[r]=s,l[s]=i,n.observerSlots[s]=r)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)z(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function Ae(e){throw e}const Te=Symbol("fallback");function ce(e){for(let t=0;t<e.length;t++)e[t]()}function Ke(e,t,n={}){let s=[],l=[],i=[],r=0,o=t.length>1?[]:null;return pe(()=>ce(i)),()=>{let f=e()||[],u,c;return f[ne],N(()=>{let d=f.length,h,p,C,x,O,g,$,A,S;if(d===0)r!==0&&(ce(i),i=[],s=[],l=[],r=0,o&&(o=[])),n.fallback&&(s=[Te],l[0]=q(Z=>(i[0]=Z,n.fallback())),r=1);else if(r===0){for(l=new Array(d),c=0;c<d;c++)s[c]=f[c],l[c]=q(a);r=d}else{for(C=new Array(d),x=new Array(d),o&&(O=new Array(d)),g=0,$=Math.min(r,d);g<$&&s[g]===f[g];g++);for($=r-1,A=d-1;$>=g&&A>=g&&s[$]===f[A];$--,A--)C[A]=l[$],x[A]=i[$],o&&(O[A]=o[$]);for(h=new Map,p=new Array(A+1),c=A;c>=g;c--)S=f[c],u=h.get(S),p[c]=u===void 0?-1:u,h.set(S,c);for(u=g;u<=$;u++)S=s[u],c=h.get(S),c!==void 0&&c!==-1?(C[c]=l[u],x[c]=i[u],o&&(O[c]=o[u]),c=p[c],h.set(S,c)):i[u]();for(c=g;c<d;c++)c in C?(l[c]=C[c],i[c]=x[c],o&&(o[c]=O[c],o[c](c))):l[c]=q(a);l=l.slice(0,r=d),s=f.slice(0)}return l});function a(d){if(i[c]=d,o){const[h,p]=R(c);return o[c]=p,t(f[c],h)}return t(f[c])}}}function v(e,t){return N(()=>e(t||{}))}const Re=e=>`Stale read from <${e}>.`;function Se(e){const t="fallback"in e&&{fallback:()=>e.fallback};return se(Ke(()=>e.each,e.children,t||void 0))}function Ue(e){const t=e.keyed,n=se(()=>e.when,void 0,{equals:(s,l)=>t?s===l:!s==!l});return se(()=>{const s=n();if(s){const l=e.children;return typeof l=="function"&&l.length>0?N(()=>l(t?s:()=>{if(!N(n))throw Re("Show");return e.when})):l}return e.fallback},void 0,void 0)}function Fe(e,t,n){let s=n.length,l=t.length,i=s,r=0,o=0,f=t[l-1].nextSibling,u=null;for(;r<l||o<i;){if(t[r]===n[o]){r++,o++;continue}for(;t[l-1]===n[i-1];)l--,i--;if(l===r){const c=i<s?o?n[o-1].nextSibling:n[i-o]:f;for(;o<i;)e.insertBefore(n[o++],c)}else if(i===o)for(;r<l;)(!u||!u.has(t[r]))&&t[r].remove(),r++;else if(t[r]===n[i-1]&&n[o]===t[l-1]){const c=t[--l].nextSibling;e.insertBefore(n[o++],t[r++].nextSibling),e.insertBefore(n[--i],c),t[l]=n[i]}else{if(!u){u=new Map;let a=o;for(;a<i;)u.set(n[a],a++)}const c=u.get(t[r]);if(c!=null)if(o<c&&c<i){let a=r,d=1,h;for(;++a<l&&a<i&&!((h=u.get(t[a]))==null||h!==c+d);)d++;if(d>c-o){const p=t[r];for(;o<c;)e.insertBefore(n[o++],p)}else e.replaceChild(n[o++],t[r++])}else r++;else t[r++].remove()}}}const fe="_$DX_DELEGATE";function qe(e,t,n,s={}){let l;return q(i=>{l=i,t===document?e():m(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{l(),t.textContent=""}}function F(e,t,n){let s;const l=()=>{const r=document.createElement("template");return r.innerHTML=e,n?r.content.firstChild.firstChild:r.content.firstChild},i=t?()=>(s||(s=l())).cloneNode(!0):()=>N(()=>document.importNode(s||(s=l()),!0));return i.cloneNode=i,i}function We(e,t=window.document){const n=t[fe]||(t[fe]=new Set);for(let s=0,l=e.length;s<l;s++){const i=e[s];n.has(i)||(n.add(i),t.addEventListener(i,He))}}function ue(e,t,n={}){const s=Object.keys(t||{}),l=Object.keys(n);let i,r;for(i=0,r=l.length;i<r;i++){const o=l[i];!o||o==="undefined"||t[o]||(ae(e,o,!1),delete n[o])}for(i=0,r=s.length;i<r;i++){const o=s[i],f=!!t[o];!o||o==="undefined"||n[o]===f||!f||(ae(e,o,!0),n[o]=f)}return n}function m(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return J(e,t,s,n);T(l=>J(e,t(),l,n),s)}function ae(e,t,n){const s=t.trim().split(/\s+/);for(let l=0,i=s.length;l<i;l++)e.classList.toggle(s[l],n)}function He(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}});n;){const s=n[t];if(s&&!n.disabled){const l=n[`${t}Data`];if(l!==void 0?s.call(n,l,e):s.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function J(e,t,n,s,l){for(;typeof n=="function";)n=n();if(t===n)return n;const i=typeof t,r=s!==void 0;if(e=r&&n[0]&&n[0].parentNode||e,i==="string"||i==="number")if(i==="number"&&(t=t.toString()),r){let o=n[0];o&&o.nodeType===3?o.data=t:o=document.createTextNode(t),n=M(e,n,s,o)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t;else if(t==null||i==="boolean")n=M(e,n,s);else{if(i==="function")return T(()=>{let o=t();for(;typeof o=="function";)o=o();n=J(e,o,n,s)}),()=>n;if(Array.isArray(t)){const o=[],f=n&&Array.isArray(n);if(le(o,t,n,l))return T(()=>n=J(e,o,n,s,!0)),()=>n;if(o.length===0){if(n=M(e,n,s),r)return n}else f?n.length===0?de(e,o,s):Fe(e,n,o):(n&&M(e),de(e,o));n=o}else if(t instanceof Node){if(Array.isArray(n)){if(r)return n=M(e,n,s,t);M(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}else console.warn("Unrecognized value. Skipped inserting",t)}return n}function le(e,t,n,s){let l=!1;for(let i=0,r=t.length;i<r;i++){let o=t[i],f=n&&n[i];if(o instanceof Node)e.push(o);else if(!(o==null||o===!0||o===!1))if(Array.isArray(o))l=le(e,o,f)||l;else if(typeof o=="function")if(s){for(;typeof o=="function";)o=o();l=le(e,Array.isArray(o)?o:[o],Array.isArray(f)?f:[f])||l}else e.push(o),l=!0;else{const u=String(o);f&&f.nodeType===3?(f.data=u,e.push(f)):e.push(document.createTextNode(u))}}return l}function de(e,t,n=null){for(let s=0,l=t.length;s<l;s++)e.insertBefore(t[s],n)}function M(e,t,n,s){if(n===void 0)return e.textContent="";const l=s||document.createTextNode("");if(t.length){let i=!1;for(let r=t.length-1;r>=0;r--){const o=t[r];if(l!==o){const f=o.parentNode===e;!i&&!r?f?e.replaceChild(l,o):e.insertBefore(l,n):f&&o.remove()}else i=!0}}else e.insertBefore(l,n);return[l]}const X=Symbol("store-raw"),K=Symbol("store-node");function Ce(e){let t=e[E];if(!t&&(Object.defineProperty(e,E,{value:t=new Proxy(e,Je)}),!Array.isArray(e))){const n=Object.keys(e),s=Object.getOwnPropertyDescriptors(e);for(let l=0,i=n.length;l<i;l++){const r=n[l];s[r].get&&Object.defineProperty(e,r,{enumerable:s[r].enumerable,get:s[r].get.bind(t)})}}return t}function k(e){let t;return e!=null&&typeof e=="object"&&(e[E]||!(t=Object.getPrototypeOf(e))||t===Object.prototype||Array.isArray(e))}function j(e,t=new Set){let n,s,l,i;if(n=e!=null&&e[X])return n;if(!k(e)||t.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):t.add(e);for(let r=0,o=e.length;r<o;r++)l=e[r],(s=j(l,t))!==l&&(e[r]=s)}else{Object.isFrozen(e)?e=Object.assign({},e):t.add(e);const r=Object.keys(e),o=Object.getOwnPropertyDescriptors(e);for(let f=0,u=r.length;f<u;f++)i=r[f],!o[i].get&&(l=e[i],(s=j(l,t))!==l&&(e[i]=s))}return e}function re(e){let t=e[K];return t||Object.defineProperty(e,K,{value:t=Object.create(null)}),t}function ie(e,t,n){return e[t]||(e[t]=xe(n))}function Ve(e,t){const n=Reflect.getOwnPropertyDescriptor(e,t);return!n||n.get||!n.configurable||t===E||t===K||(delete n.value,delete n.writable,n.get=()=>e[E][t]),n}function _e(e){if(ye()){const t=re(e);(t._||(t._=xe()))()}}function Ge(e){return _e(e),Reflect.ownKeys(e)}function xe(e){const[t,n]=R(e,{equals:!1,internal:!0});return t.$=n,t}const Je={get(e,t,n){if(t===X)return e;if(t===E)return n;if(t===ne)return _e(e),n;const s=re(e),l=s[t];let i=l?l():e[t];if(t===K||t==="__proto__")return i;if(!l){const r=Object.getOwnPropertyDescriptor(e,t);ye()&&(typeof i!="function"||e.hasOwnProperty(t))&&!(r&&r.get)&&(i=ie(s,t,i)())}return k(i)?Ce(i):i},has(e,t){return t===X||t===E||t===ne||t===K||t==="__proto__"?!0:(this.get(e,t,e),t in e)},set(){return!0},deleteProperty(){return!0},ownKeys:Ge,getOwnPropertyDescriptor:Ve};function B(e,t,n,s=!1){if(!s&&e[t]===n)return;const l=e[t],i=e.length;n===void 0?delete e[t]:e[t]=n;let r=re(e),o;(o=ie(r,t,l))&&o.$(()=>n),Array.isArray(e)&&e.length!==i&&(o=ie(r,"length",i))&&o.$(e.length),(o=r._)&&o.$()}function Oe(e,t){const n=Object.keys(t);for(let s=0;s<n.length;s+=1){const l=n[s];B(e,l,t[l])}}function Xe(e,t){if(typeof t=="function"&&(t=t(e)),t=j(t),Array.isArray(t)){if(e===t)return;let n=0,s=t.length;for(;n<s;n++){const l=t[n];e[n]!==l&&B(e,n,l)}B(e,"length",s)}else Oe(e,t)}function D(e,t,n=[]){let s,l=e;if(t.length>1){s=t.shift();const r=typeof s,o=Array.isArray(e);if(Array.isArray(s)){for(let f=0;f<s.length;f++)D(e,[s[f]].concat(t),n);return}else if(o&&r==="function"){for(let f=0;f<e.length;f++)s(e[f],f)&&D(e,[f].concat(t),n);return}else if(o&&r==="object"){const{from:f=0,to:u=e.length-1,by:c=1}=s;for(let a=f;a<=u;a+=c)D(e,[a].concat(t),n);return}else if(t.length>1){D(e[s],t,[s].concat(n));return}l=e[s],n=[s].concat(n)}let i=t[0];typeof i=="function"&&(i=i(l,n),i===l)||s===void 0&&i==null||(i=j(i),s===void 0||k(l)&&k(i)&&!Array.isArray(i)?Oe(l,i):B(e,s,i))}function ve(...[e,t]){const n=j(e||{}),s=Array.isArray(n),l=Ce(n);function i(...r){ke(()=>{s&&r.length===1?Xe(n,r[0]):D(n,r)})}return[l,i]}const Q=new WeakMap,Ne={get(e,t){if(t===X)return e;const n=e[t];let s;return k(n)?Q.get(n)||(Q.set(n,s=new Proxy(n,Ne)),s):n},set(e,t,n){return B(e,t,j(n)),!0},deleteProperty(e,t){return B(e,t,void 0,!0),!0}};function Pe(e){return t=>{if(k(t)){let n;(n=Q.get(t))||Q.set(t,n=new Proxy(t,Ne)),e(n)}return t}}const L={};function Ee(e){const t=Symbol(),n=L[e];let s;const l=(a,d)=>{const{onMessageCBList:h,instance:p}=L[e],C=p.instance;h.push({id:t,cb:a}),!(h.length>=2)&&(s=x=>{const{onMessageCBList:O}=L[e];O.forEach(g=>{g.cb(x)})},C.addEventListener("message",s,d))},i=()=>{const a=L[e];if(!a)return;if(!(a.instanceCount<=1)){a.instanceCount=a.instanceCount-1,a.onMessageCBList=a.onMessageCBList.filter(p=>p.id!==t);return}const h=a.instance.instance;h.close(),h.removeEventListener("message",s),L[e]=null};if(pe(i),n)return n.instanceCount+=1,{onMessage:l,postMessage:n.instance.postMessage.bind(n.instance.instance),close:i,channelName:n.instance.channelName,instance:n.instance.instance};const r={instanceCount:1,onMessageCBList:[],instance:null},o=new BroadcastChannel(e),{name:f,postMessage:u}=o,c={onMessage:l,postMessage:u.bind(o),close:i,channelName:f,instance:o};return r.instance=c,L[e]=r,c}function Qe(e){const[t,n]=R(null),{channelName:s,close:l,instance:i,onMessage:r,postMessage:o}=Ee(e);return r(({data:f})=>{n(()=>f)}),{message:t,postMessage:o.bind(i),channelName:s,instance:i,close:l}}const Ye=()=>{const e=new Date,t=`${e.getHours()}${e.getMinutes()}${e.getSeconds()}${e.getMilliseconds()}`;return parseInt(t).toString(16)};function ze(e){const t=e||"track-pages-same-origin",n=Ye(),{onMessage:s,postMessage:l}=Ee(t),[i,r]=ve({id:n,count:1,pages:{[n]:!0}});let o=0,f={[n]:!0};return s(({data:u})=>{const{id:c,ids:a,state:d}=u;window.clearInterval(o),r(Pe(h=>{d==="close"?delete h.pages[c]:h.pages={...h.pages,...a,[c]:!0},h.count=Object.keys(h.pages).length})),d==="open"&&l({id:n,state:"open::success",ids:JSON.parse(JSON.stringify(i.pages))}),d==="close"&&delete f[c]}),o=window.setInterval(()=>{l({id:n,ids:f,state:"open"}),console.log("postMessage poll")},200),window.addEventListener("beforeunload",u=>{l({id:n,state:"close"})},!1),i}const Ze=F('<div class=""><div class="wrapper-v"><h3><span class="font-normal opacity-90">BroadcastChannel name:</span> </h3><button class="btn flex gap-2 "><span>Post Message</span><span></span></button><ul>'),et=F('<li class="flex gap-2"><span class="font-mono"></span><span>-</span><span class="font-mono opacity-50">'),tt=F('<div class="w-full"><button class="btn block"> Content</button><div class="">'),nt=F('<div class="flex min-h-screen justify-between gap-4 bg-gray-800 p-5 pt-[80px] text-white"><header class="fixed left-0 top-0 z-10 flex h-[60px] w-full items-center gap-8 bg-gray-800 px-5"><h1>Page Id: <span class="font-mono"></span></h1></header><div><div class="sticky top-[80px]"><div class="text-2xl">Pages: <span class="font-mono"></span></div><ul class="pl-[14px]"></ul></div></div><div class="flex-grow-1 flex flex-col gap-4 [@media(min-width:825px)]:flex-row">'),st=F('<li class="whitespace-nowrap font-mono">id: '),lt=e=>{const t=()=>e.page.count>1,[n,s]=R(0),l=()=>s(n()+1),[i,r]=ve([]),{message:o,postMessage:f}=Qe(e.channelName);Le(je(o,c=>{r(Pe(a=>{a.push(c)}))},{defer:!0}));const u=()=>{l(),f({id:e.page.id,count:n()})};return(()=>{const c=Ze(),a=c.firstChild,d=a.firstChild;d.firstChild.nextSibling;const p=d.nextSibling,C=p.firstChild,x=C.nextSibling,O=p.nextSibling;return m(d,()=>e.channelName,null),p.$$click=u,m(x,n),m(O,v(Se,{each:i,children:g=>(()=>{const $=et(),A=$.firstChild,S=A.nextSibling,Z=S.nextSibling;return m(A,()=>g.count),m(Z,()=>g.id),$})()})),T(g=>{const $={["opacity-50"]:!t()},A={["cursor-default"]:!t(),["hover:bg-teal-600"]:!t()},S=!t();return g._v$=ue(c,$,g._v$),g._v$2=ue(p,A,g._v$2),S!==g._v$3&&(p.disabled=g._v$3=S),g},{_v$:void 0,_v$2:void 0,_v$3:void 0}),c})()},te=e=>{const[t,n]=R(!0);return(()=>{const s=tt(),l=s.firstChild,i=l.firstChild,r=l.nextSibling;return l.$$click=()=>n(!t()),m(l,()=>t()?"Destroy":"Add",i),m(r,v(Ue,{get when(){return t()},get children(){return v(lt,{get page(){return e.page},get channelName(){return e.channelName}})}})),s})()},it=()=>{const e=ze();return(()=>{const t=nt(),n=t.firstChild,s=n.firstChild,l=s.firstChild,i=l.nextSibling,r=n.nextSibling,o=r.firstChild,f=o.firstChild,u=f.firstChild,c=u.nextSibling,a=f.nextSibling,d=r.nextSibling;return m(i,()=>e.id),m(c,()=>e.count),m(a,v(Se,{get each(){return Object.keys(e.pages)},children:h=>(()=>{const p=st();return p.firstChild,m(p,h,null),T(()=>p.classList.toggle("color-blue-400",e.id===h)),p})()})),m(d,v(te,{page:e,channelName:"the_matrix"}),null),m(d,v(te,{page:e,channelName:"sc2"}),null),m(d,v(te,{page:e,channelName:"sc2"}),null),t})()};qe(()=>v(it,{}),document.getElementById("root"));We(["click"]);