import{S as v,i as y,s as w,F as g,c as x,m as C,t as $,a as L,d as P,O as T,G as H,E as M,g as r,o as a,e as u,b as _,f,u as b,y as p}from"./index-b4931617.js";function S(o){let t,s,e,n,l;return{c(){t=u("div"),t.innerHTML=`<div class="icon"><i class="ri-error-warning-line"></i></div> 
            <div class="content txt-bold"><p>Invalid or expired verification token.</p></div>`,s=_(),e=u("button"),e.textContent="Close",f(t,"class","alert alert-danger"),f(e,"type","button"),f(e,"class","btn btn-transparent btn-block")},m(i,c){r(i,t,c),r(i,s,c),r(i,e,c),n||(l=b(e,"click",o[4]),n=!0)},p,d(i){i&&a(t),i&&a(s),i&&a(e),n=!1,l()}}}function F(o){let t,s,e,n,l;return{c(){t=u("div"),t.innerHTML=`<div class="icon"><i class="ri-checkbox-circle-line"></i></div> 
            <div class="content txt-bold"><p>Successfully verified email address.</p></div>`,s=_(),e=u("button"),e.textContent="Close",f(t,"class","alert alert-success"),f(e,"type","button"),f(e,"class","btn btn-transparent btn-block")},m(i,c){r(i,t,c),r(i,s,c),r(i,e,c),n||(l=b(e,"click",o[3]),n=!0)},p,d(i){i&&a(t),i&&a(s),i&&a(e),n=!1,l()}}}function I(o){let t;return{c(){t=u("div"),t.innerHTML='<div class="loader loader-lg"><em>Please wait...</em></div>',f(t,"class","txt-center")},m(s,e){r(s,t,e)},p,d(s){s&&a(t)}}}function V(o){let t;function s(l,i){return l[1]?I:l[0]?F:S}let e=s(o),n=e(o);return{c(){n.c(),t=M()},m(l,i){n.m(l,i),r(l,t,i)},p(l,i){e===(e=s(l))&&n?n.p(l,i):(n.d(1),n=e(l),n&&(n.c(),n.m(t.parentNode,t)))},d(l){n.d(l),l&&a(t)}}}function q(o){let t,s;return t=new g({props:{nobranding:!0,$$slots:{default:[V]},$$scope:{ctx:o}}}),{c(){x(t.$$.fragment)},m(e,n){C(t,e,n),s=!0},p(e,[n]){const l={};n&67&&(l.$$scope={dirty:n,ctx:e}),t.$set(l)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){L(t.$$.fragment,e),s=!1},d(e){P(t,e)}}}function E(o,t,s){let{params:e}=t,n=!1,l=!1;i();async function i(){s(1,l=!0);const d=new T("../");try{const m=H(e==null?void 0:e.token);await d.collection(m.collectionId).confirmVerification(e==null?void 0:e.token),s(0,n=!0)}catch{s(0,n=!1)}s(1,l=!1)}const c=()=>window.close(),k=()=>window.close();return o.$$set=d=>{"params"in d&&s(2,e=d.params)},[n,l,e,c,k]}class N extends v{constructor(t){super(),y(this,t,E,q,w,{params:2})}}export{N as default};
