(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{137:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n(153),o=n.n(i),a=n(144),c=n(151),l=n(150),u=n(159),s=n.n(u);n(152);t.default=function(e){var t=e.children;return r.createElement(a.a,{theme:c.a},r.createElement("div",null,r.createElement(o.a,{title:"No se encontró la página | Gabriel García Seco",meta:[{name:"description",content:"Desarrollo Web | Music & More"},{name:"keywords",content:"React, Javascript, Desarrollo Web, CSS"}]}),r.createElement(l.b,{image:s.a},r.createElement(l.f,null),r.createElement(l.d,{title:"Error 404",description:"La página que estás buscando puede que ya no exista",separator:!1})),t))}},145:function(e,t,n){"use strict";n.d(t,"b",function(){return i}),n.d(t,"a",function(){return a});n(75),n(50),n(155),n(48);var r=n(144);function i(e){return 16*e/10+"rem"}var o={giant:1200,large:900,medium:600,small:320},a=Object.keys(o).reduce(function(e,t){var n=o[t]/16;return e[t]=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return Object(r.b)(["@media (min-width:","em){",";}"],n,Object(r.b)(t))},e},{})},146:function(e,t,n){var r;e.exports=(r=n(148))&&r.default||r},147:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return p}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return f});var r=n(0),i=n.n(r),o=n(4),a=n.n(o),c=n(143),l=n.n(c);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var u=n(146),s=n.n(u);n.d(t,"PageRenderer",function(){return s.a});var d=n(33);n.d(t,"parsePath",function(){return d.a});var m=i.a.createContext({}),f=function(e){return i.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:a.a.object,query:a.a.string.isRequired,render:a.a.func,children:a.a.func}},148:function(e,t,n){"use strict";n.r(t);n(34);var r=n(0),i=n.n(r),o=n(4),a=n.n(o),c=n(51),l=n(2),u=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:a.a.shape({pathname:a.a.string.isRequired}).isRequired},t.default=u},150:function(e,t,n){"use strict";n(49),n(76);var r=n(0),i=n(147),o=n(154),a=n(144),c=a.c.article.withConfig({displayName:"BlogListstyle__Article",componentId:"sc-17ksmpo-0"})(["padding:9rem 0 5.8rem;&:nth-child(odd){background:#f9f9f9;}"]),l=a.c.div.withConfig({displayName:"BlogListstyle__Wrapper",componentId:"sc-17ksmpo-1"})(["margin:0 auto;max-width:90rem;width:90%;"]),u=a.c.ul.withConfig({displayName:"BlogListstyle__List",componentId:"sc-17ksmpo-2"})(["display:flex;justify-content:space-between;overflow:hidden;margin:0;padding:0;list-style:none;line-height:2.8rem;"]),s=a.c.a.withConfig({displayName:"BlogListstyle__DateTime",componentId:"sc-17ksmpo-3"})(["color:#b5b5b5;font-size:1.5rem;font-family:",";letter-spacing:-1px;padding:0 0.8rem;"],function(e){return e.theme.fonts.montserrat}),d=a.c.h2.withConfig({displayName:"BlogListstyle__Title",componentId:"sc-17ksmpo-4"})(["font-family:",";font-size:4.8rem;font-weight:600;letter-spacing:-1px;line-height:6.2rem;margin:4.5rem 0;a{color:#373737;}"],function(e){return e.theme.fonts.varela}),m=a.c.p.withConfig({displayName:"BlogListstyle__Excerpt",componentId:"sc-17ksmpo-5"})(["color:#62646c;color:rgba(35,37,40,0.7);font-family:",";font-size:1.9rem;font-weight:400;overflow:hidden;margin:4rem 0;line-height:4.5rem;"],function(e){return e.theme.fonts.noto}),f=function(e,t){var n=e.split("-"),r=n[0],i=n[1],o=n[2];return t({day:parseInt(o,10),month:function(e){return["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"][e-1]}(parseInt(i.slice(1),10)),year:parseInt(r,10)})},p=function(e){return e.day+" de "+e.month+" de "+e.year},h=function(e){return e.day+" "+e.month+" "+e.year},g=function(e){var t=e.item;return r.createElement(c,null,r.createElement(l,null,r.createElement(u,null,r.createElement("li",null,r.createElement(Y,null,t.tags[0])),r.createElement("li",null,r.createElement(s,{href:"#"},r.createElement(o.a,{query:"(max-width: 768px)"},function(e){return e?r.createElement("span",null,f(t.date,h)):r.createElement("span",null,f(t.date,p))})))),r.createElement(d,null,r.createElement(i.Link,{to:"blog/"+t.path},t.title)),r.createElement(m,null,t.excerpt," [...]")))},b=function(e){return e.items.map(function(e,t){return r.createElement(g,{key:t,item:e.node.frontmatter})})},y=a.c.section.withConfig({displayName:"Coverstyle__Container",componentId:"sc-1s3i0q9-0"})(["background:#101010;display:table;height:100vh;position:relative;overflow:hidden;width:100%;"]),v=a.c.div.withConfig({displayName:"Coverstyle__BackgroundImage",componentId:"sc-1s3i0q9-1"})(["background-image:url('","');background-size:cover;height:100%;position:absolute;opacity:0.2;overflow:hidden;transform:translate3d(0,0,0);width:100%;"],function(e){return e.url}),w=function(e){var t=e.children,n=e.image;return r.createElement(y,null,r.createElement(v,{url:n}),t)},E=a.c.section.withConfig({displayName:"CoverContainer",componentId:"sc-1jr8nd1-0"})(["display:table-cell;max-width:90rem;position:relative;vertical-align:middle;text-align:",";width:",";"],function(e){return e.center?"center":"inherit"},function(e){return e.center?"inherit":"80%"}),C=n(143),_=n.n(C),k=n(149),x=n.n(k),I=n(145);function N(){var e=x()(["\n    font-size: 4.4rem;\n  "]);return N=function(){return e},e}var j=a.c.h1.withConfig({displayName:"CoverTitlestyle__Title",componentId:"sc-1ddiuob-0"})(["color:",";font-size:4rem;font-weight:600;font-family:",";line-height:5rem;margin:10% 0 5rem;",";"],function(e){return e.theme.colors.white},function(e){return e.theme.fonts.varela},I.a.medium(N())),S="#b3b3b3",q=a.c.p.withConfig({displayName:"CoverTitlestyle__Description",componentId:"sc-1ddiuob-1"})(["color:",";font-size:2.3rem;font-family:",";letter-spacing:-0.1rem;line-height:3.8rem;margin:4rem 0 3.5rem;max-width:",";a{border-bottom:2px solid ",";color:",";}"],S,function(e){return e.theme.fonts.varela},function(e){return e.center?"100%":"48rem"},S,S),O=function(e){var t=e.title,n=e.description,i=e.separator,o=void 0===i||i,a=e.center,c=void 0!==a&&a;return r.createElement(E,{center:c},r.createElement(_.a,{to:"/"},r.createElement(j,{itemProp:"headline"},t)),r.createElement(q,{center:c,itemProp:"description"},n),o&&r.createElement(U,null))},L=n(156),z=a.c.footer.withConfig({displayName:"Footerstyle__Container",componentId:"sc-1o898pr-0"})(["background:#242526;display:flex;height:10rem;padding:3rem;"]),T=a.c.ul.withConfig({displayName:"Footerstyle__List",componentId:"sc-1o898pr-1"})(["align-items:center;display:flex;justify-content:flex-end;list-style:none;padding:0;width:100%;li{border-left:1px solid #4b4b4b;display:inline-block;}li:first-child{border:0;}"]),G=a.c.a.withConfig({displayName:"Footerstyle__IconLink",componentId:"sc-1o898pr-2"})(["color:",";font-size:1.4rem;padding:0 1.7rem;text-decoration:none;&:hover{color:",";}"],function(e){return e.theme.colors.white},function(e){return e.hoverColor}),R=function(){return r.createElement(z,null,r.createElement(T,null,r.createElement("li",null,r.createElement(G,{hoverColor:"#55acee",href:"https://twitter.com/GGarciaSeco10/",target:"_blank"},r.createElement(L,{name:"twitter"}))),r.createElement("li",null,r.createElement(G,{hoverColor:"#0e76a8",href:"http://es.linkedin.com/in/gabrielgarciaseco",target:"_blank"},r.createElement(L,{name:"linkedin"}))),r.createElement("li",null,r.createElement(G,{hoverColor:"#999",href:"https://github.com/gabrielseco",target:"_blank"},r.createElement(L,{name:"github"})))))},M=n(7),B=n.n(M);function P(){var e=x()(["\n    padding: 3.5rem;\n  "]);return P=function(){return e},e}var A=a.c.header.withConfig({displayName:"Headerstyle__Container",componentId:"sc-12fuabv-0"})(["background:transparent;border:0;display:flex;height:7.5rem;justify-content:space-between;left:0;padding:2.5rem 1rem;position:absolute;top:0;width:100%;z-index:2;",";"],I.a.medium(P())),D=Object(a.c)(_.a).withConfig({displayName:"Headerstyle__SuperLink",componentId:"sc-12fuabv-1"})(["color:",";font-family:",";font-size:1.8rem;font-weight:600;text-decoration:none;"],function(e){return e.theme.colors.white},function(e){return e.theme.fonts.varela}),F=a.c.nav.withConfig({displayName:"Headerstyle__Nav",componentId:"sc-12fuabv-2"})(["ul{list-style:none;margin:0;padding:0;}"]),J=function(e){function t(){return e.apply(this,arguments)||this}return B()(t,e),t.prototype.render=function(){return r.createElement(A,null,r.createElement(D,{to:"/"},"Gabriel García Seco"),r.createElement(F,null,r.createElement("ul",null,r.createElement("li",null,r.createElement(D,{to:"/contacto"},"Contacto")))))},t}(r.Component),H=a.c.div.withConfig({displayName:"MouseScrollstyle__Mouse",componentId:"iv2aag-0"})(["border:2px solid #888;border:2px solid rgba(255,255,255,0.27);border-radius:",";bottom:",";cursor:pointer;position:absolute;right:",";margin-left:",";height:",";transition:border-color 0.2s ease-in;width:",";"],Object(I.b)(.9375),Object(I.b)(2.5),Object(I.b)(2.5),Object(I.b)(-.75),Object(I.b)(2.25),Object(I.b)(1.5625)),Q=a.c.div.withConfig({displayName:"MouseScrollstyle__Scroll",componentId:"iv2aag-1"})(["animation-duration:2s;animation-name:scroll;animation-iteration-count:infinite;border-radius:0.25em;display:block;margin:"," auto;width:",";height:",";background:#b0b1b1;@keyframes scroll{0%{opacity:0;}10%{opacity:1;transform:translateY(0px);}100%{opacity:0;transform:translateY(10px);}}"],Object(I.b)(.375),Object(I.b)(.1875),Object(I.b)(.375)),W=function(){return r.createElement(H,null,r.createElement(Q,null))},U=a.c.hr.withConfig({displayName:"Separator",componentId:"tde201-0"})(["background:#5a5a5a;border:0;display:inline-block;height:0.3rem;margin:0;width:10%;"]),Y=a.c.span.withConfig({displayName:"Tag",componentId:"hq3r5b-0"})(["border-radius:0.3rem;background:#0085c3;color:",";display:inline-block;font-size:1.2rem;font-family:",";padding:0.3rem 1.5rem;text-transform:uppercase;"],function(e){return e.theme.colors.white},function(e){return e.theme.fonts.montserrat});n.d(t,"a",function(){return b}),n.d(t,"b",function(){return w}),n.d(t,"c",function(){return E}),n.d(t,"d",function(){return O}),n.d(t,"e",function(){return R}),n.d(t,"f",function(){return J}),n.d(t,"g",function(){return W}),n.d(t,"h",function(){return U}),n.d(t,"i",function(){return Y})},151:function(e,t,n){"use strict";t.a={colors:{white:"#ffffff"},fonts:{montserrat:'"Montserrat","Arial",Sans-Serif',noto:'"Noto Serif","Times New Roman",Serif',varela:'"Varela Round","Arial",Sans-Serif'}}},152:function(e,t,n){},159:function(e,t,n){e.exports=n.p+"static/cover-8d689d85a2354391166bede1b8031f5f.jpg"}}]);
//# sourceMappingURL=component---src-pages-404-tsx-7592587a5a3c94ec9b3f.js.map