var qn=Array.isArray,nt=Array.from,tt=Object.isFrozen,et=Object.defineProperty,rt=Object.getOwnPropertyDescriptor,st=Object.prototype,ut=Array.prototype,lt=Object.getPrototypeOf;const O=2,un=4,x=8,ln=16,A=32,G=64,I=128,H=256,T=512,w=1024,k=2048,q=4096,L=8192,xn=16384,on=32768,ot=65536,it=Symbol("$state"),ft=Symbol("$state.frozen"),at=Symbol("");function fn(n){return n===this.v}function Ln(n,t){return n!=n?t==t:n!==t||n!==null&&typeof n=="object"||typeof n=="function"}function an(n){return!Ln(n,this.v)}const _t=1,ct=2,vt=4,pt=8,dt=16,ht=64,Et=1,Tt=2,mt=4,At=8,wt=1,yt=2,Rt="[",Pn="]",It="",St=`${Pn}!`,Ot={},Fn=Symbol(),kt=["touchstart","touchmove","touchend"];function Mn(n){throw new Error("effect_in_teardown")}function bn(){throw new Error("effect_in_unowned_derived")}function Hn(n){throw new Error("effect_orphan")}function Yn(){throw new Error("effect_update_depth_exceeded")}function Nt(){throw new Error("hydration_failed")}function Ct(n){throw new Error("props_invalid_value")}function gn(){throw new Error("state_unsafe_mutation")}function _n(n){return{f:0,reactions:null,equals:fn,v:n,version:0}}function Dt(n){var e;const t=_n(n);return t.equals=an,d!==null&&d.l!==null&&((e=d.l).s??(e.s=[])).push(t),t}function qt(n,t){var e=n.v!==Fn;return!m&&e&&h!==null&&$()&&h.f&O&&gn(),n.equals(t)||(n.v=t,n.version++,$()&&e&&i!==null&&i.f&T&&!(i.f&A)&&(c!==null&&c.includes(n)?(E(i,w),B(i)):R===null?Gn([n]):R.push(n)),X(n,w,!0)),t}function xt(n){var t=document.createElement("template");return t.innerHTML=n,t.content}function Un(n){if(qn(n))for(var t=0;t<n.length;t++){var e=n[t];e.isConnected&&e.remove()}else n.isConnected&&n.remove()}function cn(n){i===null&&h===null&&Hn(),Q&&Mn()}function nn(n,t){var e=t.last;e===null?t.last=t.first=n:(e.next=n,n.prev=e,t.last=n)}function P(n,t,e){var r=(n&G)!==0,s={ctx:d,deps:null,dom:null,f:n|w,first:null,fn:t,last:null,next:null,parent:r?null:i,prev:null,teardown:null,transitions:null};if(e){var l=C;try{tn(!0),j(s),s.f|=xn}finally{tn(l)}}else t!==null&&B(s);var a=e&&s.deps===null&&s.first===null&&s.dom===null&&s.teardown===null;if(!a&&h!==null&&!r){var v=h.f;v&O&&(v&I&&bn(),i!==null&&nn(s,i)),nn(s,h)}return s}function Lt(n){const t=P(x,null,!1);return E(t,T),t.teardown=n,t}function Pt(n){cn();var t=i!==null&&(i.f&x)!==0&&d!==null&&!d.m;if(t){var e=d;(e.e??(e.e=[])).push(n)}else{var r=vn(n);return r}}function Ft(n){return cn(),pn(n)}function Mt(n){const t=P(G,n,!0);return()=>{Z(t)}}function vn(n){return P(un,n,!1)}function pn(n){return P(x,n,!0)}function bt(n){return pn(n)}function Ht(n,t=0){return P(x|ln|t,n,!0)}function Yt(n){return P(x|A,n,!0)}function dn(n){var t=n.teardown;if(t!==null){const e=Q,r=m;en(!0),rn(!0);try{t.call(null)}finally{en(e),rn(r)}}}function Z(n,t=!0){var e=n.dom;if(e!==null&&t&&Un(e),W(n,t),U(n,0),E(n,L),n.transitions)for(const s of n.transitions)s.stop();dn(n);var r=n.parent;r!==null&&n.f&A&&r.first!==null&&hn(n),n.next=n.prev=n.teardown=n.ctx=n.dom=n.deps=n.parent=n.fn=null}function hn(n){var t=n.parent,e=n.prev,r=n.next;e!==null&&(e.next=r),r!==null&&(r.prev=e),t!==null&&(t.first===n&&(t.first=r),t.last===n&&(t.last=e))}function gt(n,t){var e=[];En(n,e,!0),jn(e,()=>{Z(n),t&&t()})}function jn(n,t){var e=n.length;if(e>0){var r=()=>--e||t();for(var s of n)s.out(r)}else t()}function En(n,t,e){if(!(n.f&q)){if(n.f^=q,n.transitions!==null)for(const a of n.transitions)(a.is_global||e)&&t.push(a);for(var r=n.first;r!==null;){var s=r.next,l=(r.f&on)!==0||(r.f&A)!==0;En(r,t,l?e:!1),r=s}}}function Ut(n){Tn(n,!0)}function Tn(n,t){if(n.f&q){n.f^=q,M(n)&&j(n);for(var e=n.first;e!==null;){var r=e.next,s=(e.f&on)!==0||(e.f&A)!==0;Tn(e,s?t:!1),e=r}if(n.transitions!==null)for(const l of n.transitions)(l.is_global||t)&&l.in()}}const jt=()=>{};function mn(n){for(var t=0;t<n.length;t++)n[t]()}const Bn=typeof requestIdleCallback>"u"?n=>setTimeout(n,1):requestIdleCallback;let Y=!1,g=!1,K=[],V=[];function An(){Y=!1;const n=K.slice();K=[],mn(n)}function wn(){g=!1;const n=V.slice();V=[],mn(n)}function Bt(n){Y||(Y=!0,queueMicrotask(An)),K.push(n)}function zt(n){g||(g=!0,Bn(wn)),V.push(n)}function zn(){Y&&An(),g&&wn()}function Kn(n){let t=O|w;i===null&&(t|=I);const e={deps:null,deriveds:null,equals:fn,f:t,first:null,fn:n,last:null,reactions:null,v:null,version:0};if(h!==null&&h.f&O){var r=h;r.deriveds===null?r.deriveds=[e]:r.deriveds.push(e)}return e}function Kt(n){const t=Kn(n);return t.equals=an,t}function yn(n){W(n);var t=n.deriveds;if(t!==null){n.deriveds=null;for(var e=0;e<t.length;e+=1)Vn(t[e])}}function Rn(n,t){yn(n);var e=Sn(n),r=(N||n.f&I)&&n.deps!==null?k:T;E(n,r);var s=n.equals(e);return s||(n.v=e,X(n,w,t)),s}function Vn(n){yn(n),U(n,0),E(n,L),n.first=n.last=n.deps=n.reactions=n.fn=null}const In=0,$n=1;let b=In,F=!1,C=!1,Q=!1;function tn(n){C=n}function en(n){Q=n}function rn(n){m=n}let S=[],D=0,h=null,i=null,c=null,_=0,R=null;function Gn(n){R=n}let m=!1,N=!1,d=null;function $(){return d!==null&&d.l===null}function M(n){var y;var t=n.f,e=(t&w)!==0,r=(t&I)!==0;if(e&&!r)return!0;var s=(t&H)!==0;if(t&k||e&&r){var l=n.deps;if(l!==null)for(var a=l.length,v,u,o=0;o<a;o++){var f=l[o];!e&&M(f)&&(v=Rn(f,!0));var p=f.version;if(r){if(p>n.version)return n.version=p,!v;!N&&!((y=f==null?void 0:f.reactions)!=null&&y.includes(n))&&(u=f.reactions,u===null?f.reactions=[n]:u.push(n))}else{if(n.f&w)return!0;s&&(p>n.version&&(n.version=p,e=!0),u=f.reactions,u===null?f.reactions=[n]:u.includes(n)||u.push(n))}}r||E(n,T),s&&(n.f^=H)}return e}function Zn(n,t,e){throw n}function Sn(n){const t=c,e=_,r=R,s=h,l=N,a=m;c=null,_=0,R=null,h=n,N=!C&&(n.f&I)!==0,m=!1;try{let v=(0,n.fn)(),u=n.deps;if(c!==null){let o;if(u!==null){const f=u.length,p=_===0?c:u.slice(0,_).concat(c),J=p.length>16&&f-_>1?new Set(p):null;for(o=_;o<f;o++){const z=u[o];(J!==null?!J.has(z):!p.includes(z))&&On(n,z)}}if(u!==null&&_>0)for(u.length=_+c.length,o=0;o<c.length;o++)u[_+o]=c[o];else n.deps=u=c;if(!N)for(o=_;o<u.length;o++){const f=u[o],p=f.reactions;p===null?f.reactions=[n]:p[p.length-1]!==n&&p.push(n)}}else u!==null&&_<u.length&&(U(n,_),u.length=_);return v}finally{c=t,_=e,R=r,h=s,N=l,m=a}}function On(n,t){const e=t.reactions;let r=0;if(e!==null){r=e.length-1;const s=e.indexOf(n);s!==-1&&(r===0?t.reactions=null:(e[s]=e[r],e.pop()))}r===0&&t.f&O&&(E(t,k),t.f&(I|H)||(t.f^=H),U(t,0))}function U(n,t){const e=n.deps;if(e!==null){const r=t===0?null:e.slice(0,t);let s;for(s=t;s<e.length;s++){const l=e[s];(r===null||!r.includes(l))&&On(n,l)}}}function W(n,t=!0){let e=n.first;n.first=null,n.last=null;for(var r;e!==null;)r=e.next,Z(e,t),e=r}function j(n){var t=n.f;if(!(t&L)){E(n,T);var e=n.ctx,r=i,s=d;i=n,d=e;try{t&ln||W(n),dn(n);var l=Sn(n);n.teardown=typeof l=="function"?l:null}catch(a){Zn(a)}finally{i=r,d=s}}}function kn(){D>1e3&&(D=0,Yn()),D++}function Nn(n){var t=n.length;if(t!==0){kn();var e=C;C=!0;try{for(var r=0;r<t;r++){var s=n[r];if(s.first===null&&!(s.f&A))sn([s]);else{var l=[];Cn(s,l),sn(l)}}}finally{C=e}}}function sn(n){var t=n.length;if(t!==0)for(var e=0;e<t;e++){var r=n[e];!(r.f&(L|q))&&M(r)&&(j(r),r.deps===null&&r.first===null&&r.dom===null&&(r.teardown===null?hn(r):r.fn=null))}}function Qn(){if(F=!1,D>1001)return;const n=S;S=[],Nn(n),F||(D=0)}function B(n){b===In&&(F||(F=!0,queueMicrotask(Qn)));for(var t=n;t.parent!==null;){t=t.parent;var e=t.f;if(e&A){if(!(e&T))return;E(t,k)}}S.push(t)}function Cn(n,t){var e=n.first,r=[];n:for(;e!==null;){var s=e.f,l=(s&(L|q))===0,a=s&A,v=(s&T)!==0,u=e.first;if(l&&(!a||!v)){if(a&&E(e,T),s&x){if(!a&&M(e)&&(j(e),u=e.first),u!==null){e=u;continue}}else if(s&un)if(a||v){if(u!==null){e=u;continue}}else r.push(e)}var o=e.next;if(o===null){let y=e.parent;for(;y!==null;){if(n===y)break n;var f=y.next;if(f!==null){e=f;continue n}y=y.parent}}e=o}for(var p=0;p<r.length;p++)u=r[p],t.push(u),Cn(u,t)}function Dn(n,t=!0){var e=b,r=S;try{kn();const l=[];b=$n,S=l,F=!1,t&&Nn(r);var s=n==null?void 0:n();return zn(),(S.length>0||l.length>0)&&Dn(),D=0,s}finally{b=e,S=r}}async function Vt(){await Promise.resolve(),Dn()}function Wn(n){const t=n.f;if(t&L)return n.v;if(h!==null&&!(h.f&(A|G))&&!m){const e=(h.f&I)!==0,r=h.deps;c===null&&r!==null&&r[_]===n&&!(e&&i!==null)?_++:(r===null||_===0||r[_-1]!==n)&&(c===null?c=[n]:c[c.length-1]!==n&&c.push(n)),R!==null&&i!==null&&i.f&T&&!(i.f&A)&&R.includes(n)&&(E(i,w),B(i))}return t&O&&M(n)&&Rn(n,!1),n.v}function X(n,t,e){var r=n.reactions;if(r!==null)for(var s=$(),l=r.length,a=0;a<l;a++){var v=r[a],u=v.f;if(!(u&w||(!e||!s)&&v===i)){E(v,t);var o=(u&k)!==0,f=(u&I)!==0;(u&T||o&&f)&&(v.f&O?X(v,k,e):B(v))}}}function $t(n){const t=m;try{return m=!0,n()}finally{m=t}}const Xn=~(w|k|T);function E(n,t){n.f=n.f&Xn|t}function Jn(n){return typeof n=="object"&&n!==null&&typeof n.f=="number"}function Gt(n,t=!1,e){d={p:d,c:null,e:null,m:!1,s:n,x:null,l:null},t||(d.l={s:null,u:null,r1:[],r2:_n(!1)})}function Zt(n){const t=d;if(t!==null){n!==void 0&&(t.x=n);const r=t.e;if(r!==null){t.e=null;for(var e=0;e<r.length;e++)vn(r[e])}d=t.p,t.m=!0}return n||{}}function Qt(n){return Jn(n)?Wn(n):n}export{mt as $,ut as A,et as B,rt as C,Wn as D,pt as E,i as F,$t as G,St as H,q as I,lt as J,on as K,at as L,Lt as M,Dn as N,Ot as O,Nt as P,nt as Q,Mt as R,it as S,kt as T,Fn as U,d as V,jt as W,vn as X,pn as Y,Ct as Z,ot as _,Zt as a,an as a0,Et as a1,Tt as a2,Kn as a3,Kt as a4,At as a5,Pt as a6,Qt as a7,Pn as a8,It as a9,xt as aa,wt as ab,yt as ac,Ft as ad,Vt as ae,Ht as b,Rt as c,Ut as d,Yt as e,gt as f,_t as g,ct as h,qn as i,ht as j,_n as k,En as l,Dt as m,jn as n,Z as o,Gt as p,Bt as q,Un as r,qt as s,bt as t,dt as u,tt as v,vt as w,zt as x,ft as y,st as z};