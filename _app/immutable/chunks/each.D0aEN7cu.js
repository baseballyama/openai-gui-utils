import{b as Z,E as X,i as $,H as j,r as ee,c as ae,d as F,e as G,f as re,I as te,g as ne,u as fe,h as w,s as B,j as O,k as L,m as se,l as K,n as le,o as ve,q as ie,v as ue,w as oe,S as de,x as _e}from"./runtime.CJFtSYn6.js";import{e as J,h as N,b as Q,d as k,g as Ee,i as pe,j as xe}from"./disclose-version.BavRm7sN.js";let h=null;function ye(a,t){return t}function Ae(a,t,i){for(var o=[],l=a.length,d=0;d<l;d++)le(a[d].e,o,!0);var u=l>0&&o.length===0&&t!==null;if(u){var S=t.parentNode;Ee(S),S.append(t),i.clear(),y(a[0].prev,a[l-1].next)}ve(o,()=>{for(var _=0;_<l;_++){var v=a[_];u||(i.delete(v.k),v.o.remove(),y(v.prev,v.next)),ie(v.e,!u)}})}function Ce(a,t,i,o,l,d=null){var u={flags:t,items:new Map,next:null},S=(t&X)!==0;if(S){var _=a;a=N?Q(_.firstChild):_.appendChild(J())}var v=null;Z(()=>{var T=i(),r=$(T)?T:T==null?[]:Array.from(T),E=r.length,n=u.flags;n&L&&!oe(r)&&!(de in r)&&(n^=L,n&_e&&!(n&w)&&(n^=w));let p=!1;if(N){var x=a.data===j;x!==(E===0)&&(ee(pe),k(!1),p=!0)}if(N){for(var s=xe,g=u,A,e=0;e<E;e++){if(s.nodeType!==8||s.data!==ae){p=!0,k(!1);break}var f=s;s=Q(s);var m=r[e],b=o(m,e);A=P(f,s,g,null,m,b,e,l,n),u.items.set(b,A),s=s.nextSibling,g=A}if(E>0)for(;s!==a;){var C=s.nextSibling;s.remove(),s=C}}N||ge(r,u,a,l,n,o),d!==null&&(E===0?v?F(v):v=G(()=>d(a)):v!==null&&re(v,()=>{v=null})),p&&k(!0)})}function ge(a,t,i,o,l,d){var M,Y,V,q;var u=(l&ue)!==0,S=(l&(w|O))!==0,_=a.length,v=t.items,T=t.next,r=T,E=new Set,n=t,p=new Set,x=[],s=[],g,A,e,f;if(u)for(f=0;f<_;f+=1)g=a[f],A=d(g,f),e=v.get(A),e!==void 0&&((M=e.a)==null||M.measure(),p.add(e));for(f=0;f<_;f+=1){if(g=a[f],A=d(g,f),e=v.get(A),e===void 0){var m=J(),b=r?r.o:i;b.before(m),n=P(m,b,n,n.next,g,A,f,o,l),v.set(A,n),x=[],s=[],r=n.next;continue}if(S&&Se(e,g,f,l),e.e.f&te&&(F(e.e),u&&((Y=e.a)==null||Y.unfix(),p.delete(e))),e!==r){if(E.has(e)){if(x.length<s.length){var C=s[0],I;n=C.prev;var c=x[0],R=x[x.length-1];for(I=0;I<x.length;I+=1)U(x[I],C,i);for(I=0;I<s.length;I+=1)E.delete(s[I]);y(c.prev,R.next),y(n,c),y(R,C),r=C,n=R,f-=1,x=[],s=[]}else E.delete(e),U(e,r,i),y(e.prev,e.next),y(e,n.next),y(n,e),n=e;continue}for(x=[],s=[];r!==null&&r.k!==A;)E.add(r),s.push(r),r=r.next;if(r===null)continue;e=r}x.push(e),n=e,r=e.next}const H=Array.from(E);for(;r!==null;)H.push(r),r=r.next;var D=H.length;if(D>0){var W=l&X&&_===0?i:null;if(u){for(f=0;f<D;f+=1)(V=H[f].a)==null||V.measure();for(f=0;f<D;f+=1)(q=H[f].a)==null||q.fix()}Ae(H,W,v)}u&&ne(()=>{fe(()=>{var z;for(e of p)(z=e.a)==null||z.apply()})})}function Se(a,t,i,o){o&w&&B(a.v,t),o&O?B(a.i,i):a.i=i}function P(a,t,i,o,l,d,u,S,_){var v=h;try{var T=(_&w)!==0,r=(_&L)===0,E=T?r?se(l):K(l):l,n=_&O?K(u):u,p={i:n,v:E,k:d,a:null,e:null,o:a,prev:i,next:o};return i.next=p,o!==null&&(o.prev=p),h=p,p.e=G(()=>S(t,E,n)),p}finally{h=v}}function U(a,t,i){for(var o=a.next?a.next.o:i,l=t?t.o:i,d=a.o;d!==o;){var u=d.nextSibling;l.before(d),d=u}}function y(a,t){a.next=t,t!==null&&(t.prev=a)}export{Ce as e,ye as i};