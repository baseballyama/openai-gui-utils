import{c as l,a7 as p,P as m,F as u,a8 as h,a9 as v,aa as T}from"./runtime.C_tlSiHQ.js";function y(e){console.warn("hydration_mismatch")}let o=!1;function E(e){o=e}let c=null,r;function R(e){c=e,r=e&&e[0]}function d(e){if(e.nodeType!==8)return e;var n=e;if(n.data!==l)return e;for(var t=[],i=0;(n=n.nextSibling)!==null;){if(n.nodeType===8){var a=n.data;if(a===l)i+=1;else if(a[0]===p){if(i===0)return c=t,r=t[0],n;i-=1}}t.push(n)}throw y(),m}var _;function A(){if(_===void 0){_=window;var e=Element.prototype;e.__click=void 0,e.__className="",e.__attributes=null,e.__e=void 0,Text.prototype.__nodeValue=" "}}function f(){return document.createTextNode("")}function O(e){const n=e.firstChild;return o?n===null?e.appendChild(f()):d(n):n}function b(e,n){if(!o)return e.firstChild;if(n&&(r==null?void 0:r.nodeType)!==3){var t=f(),i=u.dom;return i.unshift(t),r==null||r.before(t),t}return d(r)}function g(e,n=!1){const t=e.nextSibling;if(!o)return t;if(n&&(t==null?void 0:t.nodeType)!==3){var i=f(),a=u.dom;return a.unshift(i),t==null||t.before(i),i}return d(t)}function C(e){e.textContent=""}function s(e){var n=u;n.dom===null&&(n.dom=e)}function D(e,n){var t=(n&v)!==0,i=(n&T)!==0,a;return()=>o?(s(t?c:r),r):(a||(a=h(e),t||(a=a.firstChild)),i?document.importNode(a,!0):a.cloneNode(!0))}function I(e){if(!o)return f();var n=r;return n||e.before(n=f()),s(n),n}function S(){if(o)return s(c),r;var e=document.createDocumentFragment(),n=f();return e.append(n),e}function P(e,n){if(!o){var t=u;t.dom=n.nodeType===11?[...n.childNodes]:n,e.before(n)}}const w="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(w);export{P as a,d as b,O as c,E as d,f as e,b as f,C as g,o as h,c as i,r as j,A as k,R as l,S as m,I as n,g as s,D as t};
