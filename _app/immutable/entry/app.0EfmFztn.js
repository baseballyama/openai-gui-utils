const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../nodes/0.DyY4M2IU.js","../chunks/disclose-version.hGTx8sci.js","../chunks/runtime.CFYtZ9C8.js","../chunks/render.qJrxnjUV.js","../chunks/class.B4VsmEEk.js","../chunks/stores.D4h3o0ri.js","../chunks/entry.rWyMaIul.js","../chunks/attributes.CbgpMgqx.js","../assets/0.SwhSQTLN.css","../nodes/1.Cm3KzIbF.js","../nodes/2.C0JH0TCE.js","../assets/2.CZi8PWBX.css","../nodes/3.ChLHWxTS.js","../chunks/if.BhwhHJvv.js","../chunks/index-client.aGEd1IlC.js","../chunks/each.4VXHTORS.js","../assets/3.D925Ie99.css","../nodes/4.Czy3OsGn.js","../assets/4.BfC-7cBh.css"])))=>i.map(i=>d[i]);
var j=r=>{throw TypeError(r)};var B=(r,t,e)=>t.has(r)||j("Cannot "+e);var a=(r,t,e)=>(B(r,t,"read from private field"),e?e.call(r):t.get(r)),P=(r,t,e)=>t.has(r)?j("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(r):t.set(r,e),R=(r,t,e,s)=>(B(r,t,"write to private field"),s?s.call(r,e):t.set(r,e),e);import{p as I,i as L}from"../chunks/if.BhwhHJvv.js";import{n as G,x as O,a as p,t as W,f as k,s as q,c as H,y as J}from"../chunks/disclose-version.hGTx8sci.js";import{h as K,m as Q,u as X,s as Y}from"../chunks/render.qJrxnjUV.js";import{b as N,d as M,e as $,p as tt,$ as et,Z as rt,x,s as A,a0 as st,a as ot,j as C,t as nt}from"../chunks/runtime.CFYtZ9C8.js";import{p as S,o as at,b as T}from"../chunks/index-client.aGEd1IlC.js";function D(r,t,e){let s,n;N(()=>{s!==(s=t())&&(n&&($(n),n=null),s&&(n=M(()=>e(r,s))))})}function it(r){return class extends ct{constructor(t){super({component:r,...t})}}}var h,l;class ct{constructor(t){P(this,h);P(this,l);const e=I({...t.props||{},$$events:{}},!1);R(this,l,(t.hydrate?K:Q)(t.component,{target:t.target,props:e,context:t.context,intro:t.intro,recover:t.recover})),R(this,h,e.$$events);for(const s of Object.keys(a(this,l)))s==="$set"||s==="$destroy"||s==="$on"||G(this,s,{get(){return a(this,l)[s]},set(n){a(this,l)[s]=n},enumerable:!0});a(this,l).$set=s=>{Object.assign(e,s)},a(this,l).$destroy=()=>{X(a(this,l))}}$set(t){a(this,l).$set(t)}$on(t,e){a(this,h)[t]=a(this,h)[t]||[];const s=(...n)=>e.call(this,...n);return a(this,h)[t].push(s),()=>{a(this,h)[t]=a(this,h)[t].filter(n=>n!==s)}}$destroy(){a(this,l).$destroy()}}h=new WeakMap,l=new WeakMap;const lt="modulepreload",ut=function(r,t){return new URL(r,t).href},U={},b=function(t,e,s){let n=Promise.resolve();if(e&&e.length>0){const f=document.getElementsByTagName("link"),i=document.querySelector("meta[property=csp-nonce]"),y=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));n=Promise.all(e.map(c=>{if(c=ut(c,s),c in U)return;U[c]=!0;const _=c.endsWith(".css"),w=_?'[rel="stylesheet"]':"";if(!!s)for(let u=f.length-1;u>=0;u--){const m=f[u];if(m.href===c&&(!_||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${w}`))return;const o=document.createElement("link");if(o.rel=_?"stylesheet":lt,_||(o.as="script",o.crossOrigin=""),o.href=c,y&&o.setAttribute("nonce",y),document.head.appendChild(o),_)return new Promise((u,m)=>{o.addEventListener("load",u),o.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${c}`)))})}))}return n.then(()=>t()).catch(f=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=f,window.dispatchEvent(i),!i.defaultPrevented)throw f})},Et={};var mt=W('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),dt=W("<!> <!>",1);function ft(r,t){tt(t,!0);let e=S(t,"components",15,()=>I([])),s=S(t,"data_0",3,null),n=S(t,"data_1",3,null);et(()=>t.stores.page.set(t.page)),rt(()=>{t.stores,t.page,t.constructors,e(),t.form,s(),n(),t.stores.page.notify()});let f=C(!1),i=C(!1),y=C(null);at(()=>{const v=t.stores.page.subscribe(()=>{x(f)&&(A(i,!0),st().then(()=>{A(y,I(document.title||"untitled page"))}))});return A(f,!0),v});var c=dt(),_=k(c);L(_,()=>t.constructors[1],v=>{var o=O(),u=k(o);D(u,()=>t.constructors[0],(m,g)=>{T(g(m,{get data(){return s()},children:(d,ht)=>{var V=O(),Z=k(V);D(Z,()=>t.constructors[1],(z,F)=>{T(F(z,{get data(){return n()},get form(){return t.form}}),E=>e()[1]=E,()=>{var E;return(E=e())==null?void 0:E[1]})}),p(d,V)},$$slots:{default:!0}}),d=>e()[0]=d,()=>{var d;return(d=e())==null?void 0:d[0]})}),p(v,o)},v=>{var o=O(),u=k(o);D(u,()=>t.constructors[0],(m,g)=>{T(g(m,{get data(){return s()},get form(){return t.form}}),d=>e()[0]=d,()=>{var d;return(d=e())==null?void 0:d[0]})}),p(v,o)});var w=q(q(_,!0));L(w,()=>x(f),v=>{var o=mt(),u=H(o);L(u,()=>x(i),m=>{var g=J(m);nt(()=>Y(g,x(y))),p(m,g)}),p(v,o)}),p(r,c),ot()}const kt=it(ft),xt=[()=>b(()=>import("../nodes/0.DyY4M2IU.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8]),import.meta.url),()=>b(()=>import("../nodes/1.Cm3KzIbF.js"),__vite__mapDeps([9,1,2,3,5,6]),import.meta.url),()=>b(()=>import("../nodes/2.C0JH0TCE.js"),__vite__mapDeps([10,1,2,11]),import.meta.url),()=>b(()=>import("../nodes/3.ChLHWxTS.js"),__vite__mapDeps([12,1,2,13,14,3,15,4,16]),import.meta.url),()=>b(()=>import("../nodes/4.Czy3OsGn.js"),__vite__mapDeps([17,1,2,3,13,15,7,18]),import.meta.url)],wt=[],Pt={"/":[2],"/completions":[3],"/embeddings":[4]},Rt={handleError:({error:r})=>{console.error(r)},reroute:()=>{}};export{Pt as dictionary,Rt as hooks,Et as matchers,xt as nodes,kt as root,wt as server_loads};