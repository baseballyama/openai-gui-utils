import{X as O,Y as p,G as d,q as L,S as T,C as y,Z as M,_ as Y,$ as x,a0 as U,D as v,s as w,a1 as B,a2 as C,a3 as b,a4 as G,a5 as N,m as V,V as o,a6 as Z}from"./runtime.rAl0xeOE.js";function A(r){throw new Error("lifecycle_outside_component")}function q(r,a){var u;var n=r&&((u=r[T])==null?void 0:u.t);return r===a||n===a}function $(r,a,n,u){O(()=>{var t,i;return p(()=>{t=i,i=(u==null?void 0:u())||[],d(()=>{r!==n(...i)&&(a(r,...i),t&&q(n(...t),r)&&a(null,...t))})}),()=>{L(()=>{i&&q(n(...i),r)&&a(null,...i)})}})}function j(r,a,n,u){var R;var t=(n&B)!==0,i=(n&C)!==0,D=(n&N)!==0,l=r[a],f=(R=y(r,a))==null?void 0:R.set,c=u,S=!0,m=()=>(D&&S&&(S=!1,c=d(u)),c);l===void 0&&u!==void 0&&(f&&i&&M(),l=m(),f&&f(l));var s;if(i)s=()=>{var e=r[a];return e===void 0?m():(S=!0,e)};else{var E=(t?b:G)(()=>r[a]);E.f|=Y,s=()=>{var e=v(E);return e!==void 0&&(c=void 0),e===void 0?c:e}}if(!(n&x))return s;if(f)return function(e){return arguments.length===1?(f(e),e):s()};var P=!1,I=V(l),_=b(()=>{var e=s(),h=v(I);return P?(P=!1,h):I.v=e});return t||(_.equals=U),function(e){var h=v(_);return arguments.length>0?(_.equals(e)||(P=!0,w(I,e),v(_)),e):h}}function k(r){o===null&&A(),o.l!==null?z(o).m.push(r):Z(()=>{const a=d(r);if(typeof a=="function")return a})}function F(r){o===null&&A(),k(()=>()=>d(r))}function z(r){var a=r.l;return a.u??(a.u={a:[],b:[],m:[]})}export{F as a,$ as b,k as o,j as p};