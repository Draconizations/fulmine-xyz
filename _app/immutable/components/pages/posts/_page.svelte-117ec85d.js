import{S as F,i as H,s as N,k as P,q as S,a as y,v as w,l as O,m as b,r as x,h as d,c as E,w as L,n as q,b as C,D as h,x as M,f as R,t as k,y as A,M as T}from"../../../chunks/index-5ff0f165.js";import{p as $}from"../../../chunks/stores-05a5e317.js";import{P as j,a as z,i as I}from"../../../chunks/PageList-a6bb22b4.js";import"../../../chunks/singletons-3e567f64.js";import"../../../chunks/index-689d7c96.js";function B(s){let e,a,c,f,i,g,l,r,p,o,m;return r=new j({props:{currentPage:s[0],amountOfPages:s[2],path:D}}),o=new z({props:{posts:s[1]}}),{c(){e=P("section"),a=P("h2"),c=S("Recent posts"),f=y(),i=P("a"),g=S("search by tag"),l=y(),w(r.$$.fragment),p=y(),w(o.$$.fragment),this.h()},l(t){e=O(t,"SECTION",{class:!0});var n=b(e);a=O(n,"H2",{});var u=b(a);c=x(u,"Recent posts"),u.forEach(d),f=E(n),i=O(n,"A",{href:!0});var _=b(i);g=x(_,"search by tag"),_.forEach(d),l=E(n),L(r.$$.fragment,n),n.forEach(d),p=E(t),L(o.$$.fragment,t),this.h()},h(){q(i,"href","/posts/tag"),q(e,"class","center")},m(t,n){C(t,e,n),h(e,a),h(a,c),h(e,f),h(e,i),h(i,g),h(e,l),M(r,e,null),C(t,p,n),M(o,t,n),m=!0},p(t,[n]){const u={};n&1&&(u.currentPage=t[0]),n&4&&(u.amountOfPages=t[2]),r.$set(u);const _={};n&2&&(_.posts=t[1]),o.$set(_)},i(t){m||(R(r.$$.fragment,t),R(o.$$.fragment,t),m=!0)},o(t){k(r.$$.fragment,t),k(o.$$.fragment,t),m=!1},d(t){t&&d(e),A(r),t&&d(p),A(o,t)}}}let D="/posts";function G(s,e,a){let c,f,i,g,l,r;T(s,$,m=>a(7,r=m));let{data:p}=e,o;return s.$$set=m=>{"data"in m&&a(3,p=m.data)},s.$$.update=()=>{s.$$.dirty&128&&a(6,c=r.url.pathname.split("/")),s.$$.dirty&192&&(r.url.pathname!==D?a(0,o=parseInt(c[c.length-1])):a(0,o=1)),s.$$.dirty&1&&a(4,f=o*I),s.$$.dirty&16&&a(5,i=f-I),s.$$.dirty&8&&a(2,g=Math.ceil(p.posts.length/I)),s.$$.dirty&56&&a(1,l=p.posts.slice(i,f))},[o,l,g,p,f,i,c,r]}class W extends F{constructor(e){super(),H(this,e,G,B,N,{data:3})}}export{W as default};
