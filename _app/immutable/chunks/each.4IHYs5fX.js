import{b as $,E as F,i as j,H as ee,c as ae,d as re,e as G,f as J,g as te,I as ne,h as fe,u as se,j as R,s as K,k as M,l as O,m as ve,n as Q,o as le,q as ie,t as ue,v as oe,w as de,S as pe,x as Ee}from"./runtime.Cfu3TZaB.js";import{e as P,h as b,d as U,g as k,i as X,p as _e}from"./disclose-version.BwHU9XtL.js";let L=null;function Te(a,t){return t}function ge(a,t,v){for(var i=[],l=a.length,o=0;o<l;o++)le(a[o].e,i,!0);if(l>0&&i.length===0&&t!==null){var u=t.parentNode;u.textContent="",u.append(t)}ie(i,()=>{for(var A=0;A<l;A++)ue(a[A].e);v!==void 0&&v()})}function Ce(a,t,v,i,l,o=null){var u={flags:t,items:new Map,next:null},A=(t&F)!==0;if(A){var x=a;a=b?U(x.firstChild):x.appendChild(P())}var d=null;$(()=>{var S=v(),r=j(S)?S:S==null?[]:Array.from(S),p=r.length,n=u.flags;n&O&&!de(r)&&!(pe in r)&&(n^=O,n&Ee&&!(n&R)&&(n^=R));let E=!1;if(b){var _=a.data===ee;_!==(p===0)&&(ae(X),k(!1),E=!0)}if(b){for(var s=X[0],m=u,g,e=0;e<p;e++){if(s.nodeType!==8||s.data!==re){E=!0,k(!1);break}var f=s;s=U(s);var w=r[e],N=i(w,e);g=W(f,s,m,null,w,N,e,l,n),u.items.set(N,g),s=s.nextSibling,m=g}if(p>0)for(;s!==a;){var y=s.nextSibling;s.remove(),s=y}}b||xe(r,u,a,l,n,i),o!==null&&(p===0?d?G(d):d=J(()=>o(a)):d!==null&&te(d,()=>{d=null})),E&&k(!0)})}function xe(a,t,v,i,l,o){var V,q,z,B;var u=(l&oe)!==0,A=(l&(R|M))!==0,x=a.length,d=t.items,S=t.next,r=S,p=new Set,n=t,E=new Set,_=[],s=[],m,g,e,f;if(u)for(f=0;f<x;f+=1)m=a[f],g=o(m,f),e=d.get(g),e!==void 0&&((V=e.a)==null||V.measure(),E.add(e));for(f=0;f<x;f+=1){if(m=a[f],g=o(m,f),e=d.get(g),e===void 0){var w=_e(P()),N=r?r.o:v;N.before(w),n=W(w,N,n,n.next,m,g,f,i,l),d.set(g,n),_=[],s=[],r=n.next;continue}if(A&&Ae(e,m,f,l),e.e.f&ne&&(G(e.e),u&&((q=e.a)==null||q.unfix(),E.delete(e))),e!==r){if(p.has(e)){if(_.length<s.length){var y=s[0],T;n=y.prev;var Y=_[0],h=_[_.length-1];for(T=0;T<_.length;T+=1)c(_[T],y,v);for(T=0;T<s.length;T+=1)p.delete(s[T]);I(Y.prev,h.next),I(n,Y),I(h,y),r=y,n=h,f-=1,_=[],s=[]}else p.delete(e),c(e,r,v),I(e.prev,e.next),I(e,n.next),I(n,e),n=e;continue}for(_=[],s=[];r!==null&&r.k!==g;)p.add(r),s.push(r),r=r.next;if(r===null)continue;e=r}_.push(e),n=e,r=e.next}const C=Array.from(p);for(;r;)C.push(r),r=r.next;var Z=l&F&&x===0?v:null;if(u){for(f=0;f<C.length;f+=1)(z=C[f].a)==null||z.measure();for(f=0;f<C.length;f+=1)(B=C[f].a)==null||B.fix()}ge(C,Z,()=>{for(var H=0;H<C.length;H+=1){var D=C[H];d.delete(D.k),I(D.prev,D.next)}}),u&&fe(()=>{se(()=>{var H;for(e of E)(H=e.a)==null||H.apply()})})}function Ae(a,t,v,i){i&R&&K(a.v,t),i&M?K(a.i,v):a.i=v}function W(a,t,v,i,l,o,u,A,x){var d=L;try{var S=(x&R)!==0,r=(x&O)===0,p=S?r?ve(l):Q(l):l,n=x&M?Q(u):u,E={i:n,v:p,k:o,a:null,e:null,o:a,prev:v,next:i};return v.next=E,i!==null&&(i.prev=E),L=E,E.e=J(()=>A(t,p,n)),E}finally{L=d}}function c(a,t,v){for(var i=a.next?a.next.o:v,l=t?t.o:v,o=a.o;o!==i;){var u=o.nextSibling;l.before(o),o=u}}function I(a,t){a.next=t,t!==null&&(t.prev=a)}export{Ce as e,Te as i};