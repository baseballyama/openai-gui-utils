import{b as Z,E as X,i as $,H as j,r as ee,c as ae,d as F,e as G,f as re,I as te,g as ne,u as fe,h as N,s as B,j as M,k as O,m as se,l as K,n as ve,o as le,q as ie,v as ue,w as oe,S as de,x as _e}from"./runtime.C_tlSiHQ.js";import{e as J,h,b as Q,d as k,g as Ee,i as pe,j as ge}from"./disclose-version.6aZjTlSh.js";let L=null;function Ie(a,t){return t}function xe(a,t,v){for(var i=[],l=a.length,o=0;o<l;o++)ve(a[o].e,i,!0);if(l>0&&i.length===0&&t!==null){var u=t.parentNode;Ee(u),u.append(t)}le(i,()=>{for(var A=0;A<l;A++)ie(a[A].e);v!==void 0&&v()})}function Ce(a,t,v,i,l,o=null){var u={flags:t,items:new Map,next:null},A=(t&X)!==0;if(A){var x=a;a=h?Q(x.firstChild):x.appendChild(J())}var d=null;Z(()=>{var S=v(),r=$(S)?S:S==null?[]:Array.from(S),_=r.length,n=u.flags;n&O&&!oe(r)&&!(de in r)&&(n^=O,n&_e&&!(n&N)&&(n^=N));let E=!1;if(h){var p=a.data===j;p!==(_===0)&&(ee(pe),k(!1),E=!0)}if(h){for(var s=ge,m=u,g,e=0;e<_;e++){if(s.nodeType!==8||s.data!==ae){E=!0,k(!1);break}var f=s;s=Q(s);var b=r[e],w=i(b,e);g=P(f,s,m,null,b,w,e,l,n),u.items.set(w,g),s=s.nextSibling,m=g}if(_>0)for(;s!==a;){var y=s.nextSibling;s.remove(),s=y}}h||Ae(r,u,a,l,n,i),o!==null&&(_===0?d?F(d):d=G(()=>o(a)):d!==null&&re(d,()=>{d=null})),E&&k(!0)})}function Ae(a,t,v,i,l,o){var c,V,q,z;var u=(l&ue)!==0,A=(l&(N|M))!==0,x=a.length,d=t.items,S=t.next,r=S,_=new Set,n=t,E=new Set,p=[],s=[],m,g,e,f;if(u)for(f=0;f<x;f+=1)m=a[f],g=o(m,f),e=d.get(g),e!==void 0&&((c=e.a)==null||c.measure(),E.add(e));for(f=0;f<x;f+=1){if(m=a[f],g=o(m,f),e=d.get(g),e===void 0){var b=J(),w=r?r.o:v;w.before(b),n=P(b,w,n,n.next,m,g,f,i,l),d.set(g,n),p=[],s=[],r=n.next;continue}if(A&&me(e,m,f,l),e.e.f&te&&(F(e.e),u&&((V=e.a)==null||V.unfix(),E.delete(e))),e!==r){if(_.has(e)){if(p.length<s.length){var y=s[0],T;n=y.prev;var Y=p[0],D=p[p.length-1];for(T=0;T<p.length;T+=1)U(p[T],y,v);for(T=0;T<s.length;T+=1)_.delete(s[T]);C(Y.prev,D.next),C(n,Y),C(D,y),r=y,n=D,f-=1,p=[],s=[]}else _.delete(e),U(e,r,v),C(e.prev,e.next),C(e,n.next),C(n,e),n=e;continue}for(p=[],s=[];r!==null&&r.k!==g;)_.add(r),s.push(r),r=r.next;if(r===null)continue;e=r}p.push(e),n=e,r=e.next}const I=Array.from(_);for(;r;)I.push(r),r=r.next;var W=l&X&&x===0?v:null;if(u){for(f=0;f<I.length;f+=1)(q=I[f].a)==null||q.measure();for(f=0;f<I.length;f+=1)(z=I[f].a)==null||z.fix()}xe(I,W,()=>{for(var H=0;H<I.length;H+=1){var R=I[H];d.delete(R.k),R.o.remove(),C(R.prev,R.next)}}),u&&ne(()=>{fe(()=>{var H;for(e of E)(H=e.a)==null||H.apply()})})}function me(a,t,v,i){i&N&&B(a.v,t),i&M?B(a.i,v):a.i=v}function P(a,t,v,i,l,o,u,A,x){var d=L;try{var S=(x&N)!==0,r=(x&O)===0,_=S?r?se(l):K(l):l,n=x&M?K(u):u,E={i:n,v:_,k:o,a:null,e:null,o:a,prev:v,next:i};return v.next=E,i!==null&&(i.prev=E),L=E,E.e=G(()=>A(t,_,n)),E}finally{L=d}}function U(a,t,v){for(var i=a.next?a.next.o:v,l=t?t.o:v,o=a.o;o!==i;){var u=o.nextSibling;l.before(o),o=u}}function C(a,t){a.next=t,t!==null&&(t.prev=a)}export{Ce as e,Ie as i};
