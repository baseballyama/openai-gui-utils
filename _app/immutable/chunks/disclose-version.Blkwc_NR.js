import{c as _,a8 as h,O as v,F as c,a9 as T,aa as y,i as p,ab as N,ac as w}from"./runtime.rAl0xeOE.js";function R(e){console.warn("hydration_mismatch")}let o=!1;function A(e){o=e}let d=null,i;function g(e){d=e,i=e&&e[0]}function l(e){if(e.nodeType!==8)return e;var n=e;if(n.data!==_)return e;for(var r=[],a=0;(n=n.nextSibling)!==null;){if(n.nodeType===8){var t=n.data;if(t===_)a+=1;else if(t[0]===h){if(a===0)return d=r,i=r[0],n;a-=1}}r.push(n)}throw R(),v}var m;function C(){if(m===void 0){m=window;var e=Element.prototype;e.__click=void 0,e.__className="",e.__attributes=null,e.__e=void 0,Text.prototype.__t=void 0}}function u(){return document.createTextNode("")}function D(e){const n=e.firstChild;return o?n===null?e.appendChild(u()):l(n):n}function I(e,n){if(!o)return e.firstChild;if(n&&(i==null?void 0:i.nodeType)!==3){var r=u(),a=c.dom;return a.unshift(r),i==null||i.before(r),r}return l(i)}function E(e,n=!1){var r=e.nextSibling;if(!o)return r;var a=r.nodeType;if(a===8&&r.data===T)return E(r,n);if(n&&a!==3){var t=u(),s=c.dom;return s.unshift(t),r==null||r.before(t),t}return l(r)}function S(e){e.textContent=""}function f(e,n=c){var r=n.dom;return r===null?n.dom=e:(p(r)||(r=n.dom=[r]),p(e)?r.push(...e):r.push(e)),e}function H(e,n){var r=(n&N)!==0,a=(n&w)!==0,t;return()=>{if(o)return f(r?d:i),i;t||(t=y(e),r||(t=t.firstChild));var s=a?document.importNode(t,!0):t.cloneNode(!0);return f(r?[...s.childNodes]:s),s}}function M(e){if(!o)return f(u());var n=i;return n||e.before(n=u()),f(n),n}function P(){if(o)return f(d),i;var e=document.createDocumentFragment(),n=u();return e.append(n),f([n]),e}function Y(e,n){o||e.before(n)}const O="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(O);export{Y as a,l as b,D as c,i as d,u as e,I as f,A as g,o as h,S as i,d as j,C as k,g as l,P as m,M as n,E as s,H as t};