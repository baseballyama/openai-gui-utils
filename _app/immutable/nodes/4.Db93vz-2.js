import{h as se,a as x,t as A,r as _,c as f,s as a,f as le}from"../chunks/disclose-version.C_NTUxiM.js";import{w as ie,f as V,t as k,l as s,s as g,F as l}from"../chunks/runtime.BUv4FOh_.js";import{e as C,s as T}from"../chunks/render.CMFQBS5n.js";import{p as h,i as D}from"../chunks/if.BpjEd2y2.js";import{e as ne,i as oe}from"../chunks/each.t0yKvcuV.js";import{a as ue,r as ce,b as S,s as L}from"../chunks/attributes.mUzeHgD-.js";function ve(e,i,v,u=v){e.addEventListener(i,v);const q=e.__on_r;q?e.__on_r=()=>{q(),u()}:e.__on_r=u,ue()}function F(e,i,v){ve(e,"input",()=>{v(R(e)?G(e.value):e.value)}),ie(()=>{var u=i();if(se&&e.defaultValue!==e.value){v(e.value);return}R(e)&&u===G(e.value)||e.type==="date"&&!u&&!e.value||(e.value=u??"")})}function R(e){var i=e.type;return i==="number"||i==="range"}function G(e){return e===""?null:+e}var de=A('<textarea class="vector svelte-1ruqg1j" readonly=""></textarea>'),pe=A('<textarea class="vector svelte-1ruqg1j" readonly=""></textarea>'),_e=A('<ul class="svelte-1ruqg1j"><li class="svelte-1ruqg1j"><textarea placeholder="Input your sentence" class="svelte-1ruqg1j"></textarea> <!></li> <li class="svelte-1ruqg1j"><textarea placeholder="Input your sentence" class="svelte-1ruqg1j"></textarea> <!></li> <li class="svelte-1ruqg1j"> </li> <li class="svelte-1ruqg1j"><button class="svelte-1ruqg1j">Delete</button></li></ul>'),ge=A('<p class="progress svelte-1ruqg1j"> </p>'),me=A('<p class="openai-api-key svelte-1ruqg1j">OpenAI API key</p> <input placeholder="OpenAI API key" class="api-input svelte-1ruqg1j"> <p class="input-error svelte-1ruqg1j"> </p> <ul class="svelte-1ruqg1j"><li class="svelte-1ruqg1j">Sentence1</li> <li class="svelte-1ruqg1j">Sentence2</li> <li class="svelte-1ruqg1j">Cosine Similarity</li> <li class="svelte-1ruqg1j">Delete</li></ul> <!> <div class="buttons svelte-1ruqg1j"><button class="svelte-1ruqg1j">+ Add</button> <button class="execute-button svelte-1ruqg1j">Embeddings</button></div> <!>',1);function xe(e){let i=V(h(sessionStorage.getItem("openaiApiKey")||"")),v=V("");const u={};let q=V(0),I=V(0),d=V(h([{a:"",aVector:[],b:"",bVector:[],similarity:0}]));const Q=()=>{g(d,h([...s(d),{a:"",aVector:[],b:"",bVector:[],similarity:0}]))},U=r=>{g(d,h(s(d).filter((t,n)=>n!==r)))},M=async r=>{if(u[r])return u[r];const o=(await(await fetch("https://api.openai.com/v1/embeddings",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${s(i)}`},body:JSON.stringify({input:r,model:"text-embedding-3-small"})})).json()).data[0].embedding;return u[r]=o,o},W=(r,t)=>{const n=(c,m)=>{let p=0;for(let b=0;b<c.length;b++)p+=c[b]*m[b];return p},o=c=>{let m=0;for(let p=0;p<c.length;p++)m+=c[p]*c[p];return Math.sqrt(m)};return n(r,t)/(o(r)*o(t))},X=async()=>{if(g(q,h(s(d).length)),g(I,0),g(v,""),s(i)===""){g(v,"Please input your OpenAI API key");return}sessionStorage.setItem("openaiApiKey",s(i)),s(d).flatMap(async r=>{const[t,n]=await Promise.all([M(r.a),M(r.b)]);g(I,s(I)+1);const o=W(t,n);r.aVector=t,r.bVector=n,r.similarity=o,g(d,h([...s(d)]))})};var N=me(),Y=le(N),P=a(a(Y,!0));ce(P);var O=a(a(P,!0)),Z=f(O);_(O);var z=a(a(O,!0));_(z);var B=a(a(z,!0));ne(B,65,()=>s(d),oe,(r,t,n)=>{var o=_e(),c=f(o),m=f(c);S(m);var p=a(a(m,!0));D(p,()=>l(t).aVector.length>0,y=>{var j=de();S(j),k(()=>L(j,`[${l(t).aVector.length>0&&l(t).aVector.join(", ")}]<`)),x(y,j)}),_(c);var b=a(a(c,!0)),E=f(b);S(E);var te=a(a(E,!0));D(te,()=>l(t).bVector.length>0,y=>{var j=pe();S(j),k(()=>L(j,`[${l(t).bVector.length>0&&l(t).bVector.join(", ")}]<`)),x(y,j)}),_(b);var K=a(a(b,!0)),ae=f(K);k(()=>T(ae,l(t).similarity===0?"(Not Embedded)":l(t).similarity.toFixed(6))),_(K);var J=a(a(K,!0)),re=f(J);_(J),_(o),F(m,()=>l(t).a,y=>l(t).a=y),F(E,()=>l(t).b,y=>l(t).b=y),C("click",re,()=>U(l(n)),!1),x(r,o)});var $=a(a(B,!0)),H=f($),w=a(a(H,!0));_($);var ee=a(a($,!0));D(ee,()=>s(q)>0,r=>{var t=ge(),n=f(t);_(t),k(()=>T(n,`${s(I)??""}/${s(q)??""} tasks completed`)),x(r,t)}),k(()=>T(Z,s(v))),F(P,()=>s(i),r=>g(i,r)),C("click",H,Q,!1),C("click",w,X,!1),x(e,N)}export{xe as component};