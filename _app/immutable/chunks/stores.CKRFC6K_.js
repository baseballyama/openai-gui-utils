import{X as t,g as c,u as a,D as f,U as o,s as b,m as l}from"./runtime.C_tlSiHQ.js";import{s as g}from"./entry.C-Q_Zg8a.js";function _(s,n,u){if(s==null)return n(void 0),u&&u(void 0),t;const e=s.subscribe(n,u);return e.unsubscribe?()=>e.unsubscribe():e}function y(s,n,u){let e=u[n];const r=e===void 0;r&&(e={store:null,last_value:null,value:l(o),unsubscribe:t},u[n]=e),(r||e.store!==s)&&(e.unsubscribe(),e.store=s??null,e.unsubscribe=d(s,e.value));const i=f(e.value);return i===o?e.last_value:i}function d(s,n){return s==null?(b(n,void 0),t):_(s,u=>b(n,u))}function D(s){p(()=>{let n;for(n in s)s[n].unsubscribe()})}function p(s){c(()=>()=>a(s))}const m=()=>{const s=g;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},N={subscribe(s){return m().page.subscribe(s)}};export{N as p,y as s,D as u};
