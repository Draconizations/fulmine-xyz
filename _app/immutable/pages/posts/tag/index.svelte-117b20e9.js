import{S as P,i as U,s as V,e as d,t as x,k as q,c as k,a as b,h as S,d as h,m as H,b as T,g as v,H as m,o as $,p as O,q as E,n as A,E as w,w as z,x as D,y as F,B as G,V as J}from"../../../chunks/index-01d1497b.js";import{T as K}from"../../../chunks/tag-39b8d5dd.js";function I(i,e,l){const a=i.slice();return a[1]=e[l],a}function M(i){let e,l;return{c(){e=d("p"),l=x("No tags found!")},l(a){e=k(a,"P",{});var t=b(e);l=S(t,"No tags found!"),t.forEach(h)},m(a,t){v(a,e,t),m(e,l)},p:w,i:w,o:w,d(a){a&&h(e)}}}function Q(i){let e,l,a=i[0],t=[];for(let o=0;o<a.length;o+=1)t[o]=L(I(i,a,o));const f=o=>$(t[o],1,1,()=>{t[o]=null});return{c(){e=d("ul");for(let o=0;o<t.length;o+=1)t[o].c();this.h()},l(o){e=k(o,"UL",{class:!0});var n=b(e);for(let s=0;s<t.length;s+=1)t[s].l(n);n.forEach(h),this.h()},h(){T(e,"class","tags")},m(o,n){v(o,e,n);for(let s=0;s<t.length;s+=1)t[s].m(e,null);l=!0},p(o,n){if(n&1){a=o[0];let s;for(s=0;s<a.length;s+=1){const c=I(o,a,s);t[s]?(t[s].p(c,n),E(t[s],1)):(t[s]=L(c),t[s].c(),E(t[s],1),t[s].m(e,null))}for(A(),s=a.length;s<t.length;s+=1)f(s);O()}},i(o){if(!l){for(let n=0;n<a.length;n+=1)E(t[n]);l=!0}},o(o){t=t.filter(Boolean);for(let n=0;n<t.length;n+=1)$(t[n]);l=!1},d(o){o&&h(e),J(t,o)}}}function L(i){let e,l;return e=new K({props:{tag:i[1]}}),{c(){z(e.$$.fragment)},l(a){D(e.$$.fragment,a)},m(a,t){F(e,a,t),l=!0},p(a,t){const f={};t&1&&(f.tag=a[1]),e.$set(f)},i(a){l||(E(e.$$.fragment,a),l=!0)},o(a){$(e.$$.fragment,a),l=!1},d(a){G(e,a)}}}function R(i){let e,l,a,t,f,o,n,s,c,u,y;const B=[Q,M],p=[];function N(r,_){return r[0].length>0?0:1}return c=N(i),u=p[c]=B[c](i),{c(){e=d("section"),l=d("h2"),a=x("Tag catalog"),t=q(),f=d("a"),o=x("Back to all posts"),n=q(),s=d("section"),u.c(),this.h()},l(r){e=k(r,"SECTION",{class:!0});var _=b(e);l=k(_,"H2",{});var g=b(l);a=S(g,"Tag catalog"),g.forEach(h),t=H(_),f=k(_,"A",{href:!0});var C=b(f);o=S(C,"Back to all posts"),C.forEach(h),_.forEach(h),n=H(r),s=k(r,"SECTION",{class:!0});var j=b(s);u.l(j),j.forEach(h),this.h()},h(){T(f,"href","/posts"),T(e,"class","center"),T(s,"class","block dropshadow")},m(r,_){v(r,e,_),m(e,l),m(l,a),m(e,t),m(e,f),m(f,o),v(r,n,_),v(r,s,_),p[c].m(s,null),y=!0},p(r,[_]){let g=c;c=N(r),c===g?p[c].p(r,_):(A(),$(p[g],1,1,()=>{p[g]=null}),O(),u=p[c],u?u.p(r,_):(u=p[c]=B[c](r),u.c()),E(u,1),u.m(s,null))},i(r){y||(E(u),y=!0)},o(r){$(u),y=!1},d(r){r&&h(e),r&&h(n),r&&h(s),p[c].d()}}}const Z=async({params:i,fetch:e})=>{const a=await(await e("/api/posts.json")).json();let t=[];return a.forEach(f=>{f.meta.tags&&f.meta.tags.forEach(o=>t.push(o))}),t=[...new Set(t)],{props:{tags:t}}};function W(i,e,l){let{tags:a}=e;return i.$$set=t=>{"tags"in t&&l(0,a=t.tags)},[a]}class tt extends P{constructor(e){super(),U(this,e,W,R,V,{tags:0})}}export{tt as default,Z as load};
