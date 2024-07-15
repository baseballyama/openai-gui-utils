const Mn=4096;const yn=32768,Pn=65536;const Un=Symbol("$state"),Vn=Symbol("$state.frozen"),bn=Symbol("");function $(n){return n===this.v}function Rn(n,t){return n!=n?t==t:n!==t||n!==null&&typeof n=="object"||typeof n=="function"}function G(n){return!Rn(n,this.v)}const Wn=1,gn=2,Kn=4,$n=8,Gn=16,Zn=64,jn=1,zn=2,Qn=4,Xn=8,Jn=1,nt=2,tt="[",Dn="]",et="",rt=`${Dn}!`,ut={},dn=Symbol(),st=["touchstart","touchmove","touchend"];function Nn(n){throw new Error("effect_in_teardown")}function pn(){throw new Error("effect_in_unowned_derived")}function Cn(n){throw new Error("effect_orphan")}function hn(){throw new Error("effect_update_depth_exceeded")}function lt(){throw new Error("hydration_failed")}function it(n){throw new Error("props_invalid_value")}function An(){throw new Error("state_unsafe_mutation")}function Z(n){return{f:0,v:n,reactions:null,equals:$,version:0}}function ot(n){var e;const t=Z(n);return t.equals=G,T!==null&&T.l!==null&&((e=T.l).s??(e.s=[])).push(t),t}function ft(n,t){var e=n.v!==dn;return e&&a!==null&&q()&&a.f&2&&An(),n.equals(t)||(n.v=t,n.version=fn(),U(n,1024,!0),q()&&e&&_!==null&&_.f&512&&!(_.f&32)&&(E!==null&&E.includes(n)?(R(_,1024),k(_)):d===null?mn([n]):d.push(n))),t}function j(n){_===null&&a===null&&Cn(),a!==null&&a.f&128&&pn(),y&&Nn()}function V(n,t){var e=t.last;e===null?t.last=t.first=n:(e.next=n,n.prev=e,t.last=n)}function F(n,t,e,r=!0){var u=(n&64)!==0,s={ctx:T,deps:null,nodes:null,f:n|1024,first:null,fn:t,last:null,next:null,parent:u?null:_,prev:null,teardown:null,transitions:null};if(e){var o=h;try{b(!0),L(s),s.f|=16384}finally{b(o)}}else t!==null&&k(s);var l=e&&s.deps===null&&s.first===null&&s.nodes===null&&s.teardown===null;return!l&&!u&&r&&(_!==null&&V(s,_),a!==null&&a.f&2&&V(s,a)),s}function _t(n){const t=F(8,null,!1);return R(t,512),t.teardown=n,t}function at(n){j();var t=_!==null&&(_.f&8)!==0&&T!==null&&!T.m;if(t){var e=T;(e.e??(e.e=[])).push(n)}else{var r=z(n);return r}}function Et(n){return j(),Q(n)}function ct(n){const t=F(64,n,!0);return()=>{M(t)}}function z(n){return F(4,n,!1)}function Q(n){return F(8,n,!0)}function vt(n){return Q(n)}function Tt(n,t=0){return F(24|t,n,!0)}function Rt(n,t=!0){return F(40,n,!0,t)}function X(n){var t=n.teardown;if(t!==null){const e=y,r=a;W(!0),g(null);try{t.call(null)}finally{W(e),g(r)}}}function M(n,t=!0){var e=!1;if((t||n.f&262144)&&n.nodes!==null){for(var r=n.nodes.start,u=n.nodes.end;r!==null;){var s=r===u?null:r.nextSibling;r.remove(),r=s}e=!0}if(P(n,t&&!e),m(n,0),R(n,8192),n.transitions)for(const l of n.transitions)l.stop();X(n);var o=n.parent;o!==null&&n.f&32&&o.first!==null&&J(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.parent=n.fn=n.nodes=null}function J(n){var t=n.parent,e=n.prev,r=n.next;e!==null&&(e.next=r),r!==null&&(r.prev=e),t!==null&&(t.first===n&&(t.first=r),t.last===n&&(t.last=e))}function Dt(n,t){var e=[];nn(n,e,!0),Fn(e,()=>{M(n),t&&t()})}function Fn(n,t){var e=n.length;if(e>0){var r=()=>--e||t();for(var u of n)u.out(r)}else t()}function nn(n,t,e){if(!(n.f&4096)){if(n.f^=4096,n.transitions!==null)for(const o of n.transitions)(o.is_global||e)&&t.push(o);for(var r=n.first;r!==null;){var u=r.next,s=(r.f&32768)!==0||(r.f&32)!==0;nn(r,t,s?e:!1),r=u}}}function dt(n){tn(n,!0)}function tn(n,t){if(n.f&4096){n.f^=4096,O(n)&&L(n);for(var e=n.first;e!==null;){var r=e.next,u=(e.f&32768)!==0||(e.f&32)!==0;tn(e,u?t:!1),e=r}if(n.transitions!==null)for(const s of n.transitions)(s.is_global||t)&&s.in()}}const Nt=()=>{};function en(n){for(var t=0;t<n.length;t++)n[t]()}const In=typeof requestIdleCallback>"u"?n=>setTimeout(n,1):requestIdleCallback;let Y=!1,w=!1,x=[],B=[];function rn(){Y=!1;const n=x.slice();x=[],en(n)}function un(){w=!1;const n=B.slice();B=[],en(n)}function pt(n){Y||(Y=!0,queueMicrotask(rn)),x.push(n)}function Ct(n){w||(w=!0,In(un)),B.push(n)}function On(){Y&&rn(),w&&un()}function Sn(n){let t=1026;_===null&&(t|=128);const e={deps:null,deriveds:null,equals:$,f:t,first:null,fn:n,last:null,reactions:null,v:null,version:0};if(a!==null&&a.f&2){var r=a;r.deriveds===null?r.deriveds=[e]:r.deriveds.push(e)}return e}function ht(n){const t=Sn(n);return t.equals=G,t}function sn(n){P(n);var t=n.deriveds;if(t!==null){n.deriveds=null;for(var e=0;e<t.length;e+=1)Yn(t[e])}}function ln(n){sn(n);var t=_n(n),e=(C||n.f&128)&&n.deps!==null?2048:512;R(n,e),n.equals(t)||(n.v=t,n.version=fn(),U(n,1024,!1))}function Yn(n){sn(n),m(n,0),R(n,8192),n.first=n.last=n.deps=n.reactions=n.fn=null}const on=0,wn=1;let S=on,I=!1,h=!1,y=!1;function b(n){h=n}function W(n){y=n}let p=[],A=0,a=null;function g(n){a=n}let _=null,E=null,c=0,d=null;function mn(n){d=n}let Ln=0,C=!1,T=null;function fn(){return Ln++}function q(){return T!==null&&T.l===null}function O(n){var N;var t=n.f,e=(t&1024)!==0;if(e)return!0;var r=(t&128)!==0,u=(t&256)!==0;if(t&2048){var s=n.deps;if(s!==null)for(var o=s.length,l,i=0;i<o;i++){var f=s[i];!e&&O(f)&&ln(f);var v=f.version;if(r){if(v>n.version)return!0;!C&&!((N=f==null?void 0:f.reactions)!=null&&N.includes(n))&&(f.reactions??(f.reactions=[])).push(n)}else{if(n.f&1024)return!0;u&&(v>n.version&&(e=!0),l=f.reactions,l===null?f.reactions=[n]:l.includes(n)||l.push(n))}}r||R(n,512),u&&(n.f^=256)}return e}function kn(n,t,e){throw n}function _n(n){const t=E,e=c,r=d,u=a,s=C;E=null,c=0,d=null,a=n.f&96?null:n,C=!h&&(n.f&128)!==0;try{let o=(0,n.fn)(),l=n.deps;if(E!==null){let i;if(l!==null){const f=l.length,v=c===0?E:l.slice(0,c).concat(E),D=v.length>16&&f-c>1?new Set(v):null;for(i=c;i<f;i++){const H=l[i];(D!==null?!D.has(H):!v.includes(H))&&an(n,H)}}if(l!==null&&c>0)for(l.length=c+E.length,i=0;i<E.length;i++)l[c+i]=E[i];else n.deps=l=E;if(!C)for(i=c;i<l.length;i++){const f=l[i],v=f.reactions;v===null?f.reactions=[n]:v[v.length-1]!==n&&!v.includes(n)&&v.push(n)}}else l!==null&&c<l.length&&(m(n,c),l.length=c);return o}finally{E=t,c=e,d=r,a=u,C=s}}function an(n,t){const e=t.reactions;let r=0;if(e!==null){r=e.length-1;const u=e.indexOf(n);u!==-1&&(r===0?t.reactions=null:(e[u]=e[r],e.pop()))}r===0&&t.f&2&&(R(t,2048),t.f&384||(t.f^=256),m(t,0))}function m(n,t){const e=n.deps;if(e!==null){const r=t===0?null:e.slice(0,t);let u;for(u=t;u<e.length;u++){const s=e[u];(r===null||!r.includes(s))&&an(n,s)}}}function P(n,t=!0){let e=n.first;n.first=null,n.last=null;for(var r;e!==null;)r=e.next,M(e,t),e=r}function L(n){var t=n.f;if(!(t&8192)){R(n,512);var e=n.ctx,r=_,u=T;_=n,T=e;try{t&16||P(n),X(n);var s=_n(n);n.teardown=typeof s=="function"?s:null}catch(o){kn(o)}finally{_=r,T=u}}}function En(){A>1e3&&(A=0,hn()),A++}function cn(n){var t=n.length;if(t!==0){En();var e=h;h=!0;try{for(var r=0;r<t;r++){var u=n[r];if(u.first===null&&!(u.f&32))K([u]);else{var s=[];vn(u,s),K(s)}}}finally{h=e}}}function K(n){var t=n.length;if(t!==0)for(var e=0;e<t;e++){var r=n[e];!(r.f&12288)&&O(r)&&(L(r),r.deps===null&&r.first===null&&r.nodes===null&&(r.teardown===null?J(r):r.fn=null))}}function Hn(){if(I=!1,A>1001)return;const n=p;p=[],cn(n),I||(A=0)}function k(n){S===on&&(I||(I=!0,queueMicrotask(Hn)));for(var t=n;t.parent!==null;){t=t.parent;var e=t.f;if(e&32){if(!(e&512))return;R(t,2048)}}p.push(t)}function vn(n,t){var e=n.first,r=[];n:for(;e!==null;){var u=e.f,s=(u&12288)===0,o=u&32,l=(u&512)!==0,i=e.first;if(s&&(!o||!l)){if(o&&R(e,512),u&8){if(!o&&O(e)&&(L(e),i=e.first),i!==null){e=i;continue}}else if(u&4)if(o||l){if(i!==null){e=i;continue}}else r.push(e)}var f=e.next;if(f===null){let D=e.parent;for(;D!==null;){if(n===D)break n;var v=D.next;if(v!==null){e=v;continue n}D=D.parent}}e=f}for(var N=0;N<r.length;N++)i=r[N],t.push(i),vn(i,t)}function Tn(n,t=!0){var e=S,r=p;try{En();const s=[];S=wn,p=s,I=!1,t&&cn(r);var u=n==null?void 0:n();return On(),(p.length>0||s.length>0)&&Tn(),A=0,u}finally{S=e,p=r}}async function At(){await Promise.resolve(),Tn()}function xn(n){const t=n.f;if(t&8192)return n.v;if(a!==null){const e=(a.f&128)!==0,r=a.deps;E===null&&r!==null&&r[c]===n&&!(e&&_!==null)?c++:(r===null||c===0||r[c-1]!==n)&&(E===null?E=[n]:E[E.length-1]!==n&&!E.includes(n)&&E.push(n)),d!==null&&_!==null&&_.f&512&&!(_.f&32)&&d.includes(n)&&(R(_,1024),k(_))}return t&2&&O(n)&&ln(n),n.v}function U(n,t,e){var r=n.reactions;if(r!==null)for(var u=q(),s=r.length,o=0;o<s;o++){var l=r[o],i=l.f;if(!(i&1024||(!e||!u)&&l===_)){R(l,t);var f=(i&2048)!==0,v=(i&128)!==0;(i&512||f&&v)&&(l.f&2?U(l,2048,e):k(l))}}}function Ft(n){const t=a;try{return a=null,n()}finally{a=t}}const Bn=-3585;function R(n,t){n.f=n.f&Bn|t}function qn(n){return typeof n=="object"&&n!==null&&typeof n.f=="number"}function It(n,t=!1,e){T={p:T,c:null,e:null,m:!1,s:n,x:null,l:null},t||(T.l={s:null,u:null,r1:[],r2:Z(!1)})}function Ot(n){const t=T;if(t!==null){n!==void 0&&(t.x=n);const r=t.e;if(r!==null){t.e=null;for(var e=0;e<r.length;e++)z(r[e])}T=t.p,t.m=!0}return n||{}}function St(n){return qn(n)?xn(n):n}export{Et as $,_t as A,Tn as B,ut as C,lt as D,$n as E,ct as F,T as G,rt as H,Mn as I,Nt as J,z as K,bn as L,Q as M,it as N,Pn as O,st as P,Qn as Q,G as R,Un as S,jn as T,dn as U,zn as V,Sn as W,ht as X,Xn as Y,at as Z,St as _,Ot as a,At as a0,Dn as a1,et as a2,Jn as a3,nt as a4,Rn as a5,Tt as b,tt as c,Rt as d,Dt as e,_ as f,Wn as g,gn as h,Zn as i,Z as j,nn as k,Fn as l,ot as m,M as n,Gn as o,It as p,pt as q,dt as r,ft as s,vt as t,Kn as u,Ct as v,Vn as w,xn as x,Ft as y,yn as z};