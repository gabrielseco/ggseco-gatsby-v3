(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{137:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(152),i=n.n(a),o=n(144),c=n(150),l=n(149),s=n(156),u=n.n(s);n(151);t.default=function(e){var t=e.children;return r.createElement(o.a,{theme:c.a},r.createElement("div",null,r.createElement(i.a,{title:"No se encontró la página | Gabriel García Seco",meta:[{name:"description",content:"Desarrollo Web | Music & More"},{name:"keywords",content:"React, Javascript, Desarrollo Web, CSS"}]}),r.createElement(l.b,{image:u.a},r.createElement(l.f,null),r.createElement(l.d,{title:"Error 404",description:"La página que estás buscando puede que ya no exista",separator:!1})),t))}},145:function(e,t,n){"use strict";function r(e){return 16*e/10+"rem"}n.d(t,"a",function(){return r})},146:function(e,t,n){var r;e.exports=(r=n(148))&&r.default||r},147:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return p}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return f});var r=n(0),a=n.n(r),i=n(4),o=n.n(i),c=n(143),l=n.n(c);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var s=n(146),u=n.n(s);n.d(t,"PageRenderer",function(){return u.a});var d=n(33);n.d(t,"parsePath",function(){return d.a});var m=a.a.createContext({}),f=function(e){return a.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},148:function(e,t,n){"use strict";n.r(t);n(34);var r=n(0),a=n.n(r),i=n(4),o=n.n(i),c=n(49),l=n(2),s=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return a.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},149:function(e,t,n){"use strict";n(48),n(75);var r=n(0),a=n(147),i=n(144),o=n(145),c=i.b.article.withConfig({displayName:"BlogListstyle__Article",componentId:"sc-17ksmpo-0"})(["padding:"," 0 ",";&:nth-child(odd){background:#f9f9f9;}"],Object(o.a)(5.625),Object(o.a)(3.625)),l=i.b.div.withConfig({displayName:"BlogListstyle__Wrapper",componentId:"sc-17ksmpo-1"})(["margin:0 auto;max-width:",";width:90%;"],Object(o.a)(56.25)),s=i.b.ul.withConfig({displayName:"BlogListstyle__List",componentId:"sc-17ksmpo-2"})(["display:flex;justify-content:space-between;overflow:hidden;margin:0;padding:0;list-style:none;line-height:",";"],Object(o.a)(1.75)),u=i.b.a.withConfig({displayName:"BlogListstyle__DateTime",componentId:"sc-17ksmpo-3"})(["color:#b5b5b5;font-size:",";font-family:",";letter-spacing:-1px;padding:0 ",";"],Object(o.a)(.9375),function(e){return e.theme.fonts.montserrat},Object(o.a)(.5)),d=i.b.h2.withConfig({displayName:"BlogListstyle__Title",componentId:"sc-17ksmpo-4"})(["font-family:",";font-size:",";font-weight:600;letter-spacing:-1px;line-height:",";margin:"," 0;a{color:#373737;}"],function(e){return e.theme.fonts.varela},Object(o.a)(3),Object(o.a)(3.875),Object(o.a)(2.8125)),m=i.b.p.withConfig({displayName:"BlogListstyle__Excerpt",componentId:"sc-17ksmpo-5"})(["color:#62646c;color:rgba(35,37,40,0.7);font-family:",";font-size:",";font-weight:400;overflow:hidden;margin:"," 0;line-height:",";"],function(e){return e.theme.fonts.noto},Object(o.a)(1.1875),Object(o.a)(2.5),Object(o.a)(2.8125)),f=function(e){var t,n,i,o,f,p=e.item;return r.createElement(c,null,r.createElement(l,null,r.createElement(s,null,r.createElement("li",null,r.createElement(A,null,p.tags[0])),r.createElement("li",null,r.createElement(u,{href:"#"},r.createElement("span",null,(t=p.date,n=t.split("-"),i=n[0],o=n[1],f=n[2],parseInt(f,10)+" de "+function(e){return["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"][e-1]}(parseInt(o.slice(1),10))+" de "+i))))),r.createElement(d,null,r.createElement(a.Link,{to:"blog/"+p.path},p.title)),r.createElement(m,null,p.excerpt," [...]")))},p=function(e){return e.items.map(function(e,t){return r.createElement(f,{key:t,item:e.node.frontmatter})})},b=i.b.section.withConfig({displayName:"Coverstyle__Container",componentId:"sc-1s3i0q9-0"})(["background:#101010;display:table;height:100vh;position:relative;overflow:hidden;width:100%;"]),h=i.b.div.withConfig({displayName:"Coverstyle__BackgroundImage",componentId:"sc-1s3i0q9-1"})(["background-image:url('","');background-size:cover;height:100%;position:absolute;opacity:0.2;overflow:hidden;transform:translate3d(0,0,0);width:100%;"],function(e){return e.url}),g=function(e){var t=e.children,n=e.image;return r.createElement(b,null,r.createElement(h,{url:n}),t)},y=i.b.section.withConfig({displayName:"CoverContainer",componentId:"sc-1jr8nd1-0"})(["display:table-cell;max-width:",";position:relative;vertical-align:middle;text-align:",";width:",";"],Object(o.a)(56.25),function(e){return e.center?"center":"inherit"},function(e){return e.center?"inherit":"80%"}),w=n(143),v=n.n(w),j=i.b.h1.withConfig({displayName:"CoverTitlestyle__Title",componentId:"sc-1ddiuob-0"})(["color:",";font-size:",";font-weight:600;font-family:",";line-height:",";margin:10% 0 ",";"],function(e){return e.theme.colors.white},Object(o.a)(2.75),function(e){return e.theme.fonts.varela},Object(o.a)(3.25),Object(o.a)(3.125)),E="#b3b3b3",O=i.b.p.withConfig({displayName:"CoverTitlestyle__Description",componentId:"sc-1ddiuob-1"})(["color:",";font-size:",";font-family:",";letter-spacing:",";line-height:",";margin:"," 0 ",";max-width:",";a{border-bottom:2px solid ",";color:",";}"],E,Object(o.a)(1.4375),function(e){return e.theme.fonts.varela},Object(o.a)(-.0625),Object(o.a)(2.375),Object(o.a)(2.5),Object(o.a)(2.1875),function(e){return e.center?"100%":Object(o.a)(30)},E,E),C=function(e){var t=e.title,n=e.description,a=e.separator,i=void 0===a||a,o=e.center,c=void 0!==o&&o;return r.createElement(y,{center:c},r.createElement(v.a,{to:"/"},r.createElement(j,{itemProp:"headline"},t)),r.createElement(O,{center:c,itemProp:"description"},n),i&&r.createElement(P,null))},_=n(153),k=i.b.footer.withConfig({displayName:"Footerstyle__Container",componentId:"sc-1o898pr-0"})(["background:#242526;display:flex;height:",";padding:",";"],Object(o.a)(6.25),Object(o.a)(1.875)),x=i.b.ul.withConfig({displayName:"Footerstyle__List",componentId:"sc-1o898pr-1"})(["align-items:center;display:flex;justify-content:flex-end;list-style:none;padding:0;width:100%;li{border-left:1px solid #4b4b4b;display:inline-block;}li:first-child{border:0;}"]),I=i.b.a.withConfig({displayName:"Footerstyle__IconLink",componentId:"sc-1o898pr-2"})(["color:",";font-size:",";padding:0 ",";text-decoration:none;&:hover{color:",";}"],function(e){return e.theme.colors.white},Object(o.a)(.875),Object(o.a)(1.0625),function(e){return e.hoverColor}),N=function(){return r.createElement(k,null,r.createElement(x,null,r.createElement("li",null,r.createElement(I,{hoverColor:"#55acee",href:"https://twitter.com/GGarciaSeco10/",target:"_blank"},r.createElement(_,{name:"twitter"}))),r.createElement("li",null,r.createElement(I,{hoverColor:"#0e76a8",href:"http://es.linkedin.com/in/gabrielgarciaseco",target:"_blank"},r.createElement(_,{name:"linkedin"}))),r.createElement("li",null,r.createElement(I,{hoverColor:"#999",href:"https://github.com/gabrielseco",target:"_blank"},r.createElement(_,{name:"github"})))))},S=n(7),q=n.n(S),L=i.b.header.withConfig({displayName:"Headerstyle__Container",componentId:"sc-12fuabv-0"})(["background:transparent;border:0;display:flex;height:",";justify-content:space-between;left:0;padding:",";position:absolute;top:0;width:100%;z-index:2;"],Object(o.a)(4.6875),Object(o.a)(2.1875)),z=Object(i.b)(v.a).withConfig({displayName:"Headerstyle__SuperLink",componentId:"sc-12fuabv-1"})(["color:",";font-family:",";font-size:",";font-weight:600;text-decoration:none;"],function(e){return e.theme.colors.white},function(e){return e.theme.fonts.varela},Object(o.a)(1.125)),T=i.b.nav.withConfig({displayName:"Headerstyle__Nav",componentId:"sc-12fuabv-2"})(["ul{list-style:none;margin:0;padding:0;}"]),G=function(e){function t(){return e.apply(this,arguments)||this}return q()(t,e),t.prototype.render=function(){return r.createElement(L,null,r.createElement(z,{to:"/"},"Gabriel García Seco"),r.createElement(T,null,r.createElement("ul",null,r.createElement("li",null,r.createElement(z,{to:"/contacto"},"Contacto")))))},t}(r.Component),R=i.b.div.withConfig({displayName:"MouseScrollstyle__Mouse",componentId:"iv2aag-0"})(["border:2px solid #888;border:2px solid rgba(255,255,255,0.27);border-radius:",";bottom:",";cursor:pointer;position:absolute;right:",";margin-left:",";height:",";transition:border-color 0.2s ease-in;width:",";"],Object(o.a)(.9375),Object(o.a)(2.5),Object(o.a)(2.5),Object(o.a)(-.75),Object(o.a)(2.25),Object(o.a)(1.5625)),M=i.b.div.withConfig({displayName:"MouseScrollstyle__Scroll",componentId:"iv2aag-1"})(["animation-duration:2s;animation-name:scroll;animation-iteration-count:infinite;border-radius:0.25em;display:block;margin:"," auto;width:",";height:",";background:#b0b1b1;@keyframes scroll{0%{opacity:0;}10%{opacity:1;transform:translateY(0px);}100%{opacity:0;transform:translateY(10px);}}"],Object(o.a)(.375),Object(o.a)(.1875),Object(o.a)(.375)),B=function(){return r.createElement(R,null,r.createElement(M,null))},P=i.b.hr.withConfig({displayName:"Separator",componentId:"tde201-0"})(["background:#5a5a5a;border:0;display:inline-block;height:",";margin:0;width:10%;"],Object(o.a)(.1875)),A=i.b.span.withConfig({displayName:"Tag",componentId:"hq3r5b-0"})(["border-radius:3px;background:#0085c3;color:",";display:inline-block;font-size:",";font-family:",";padding:"," ",";text-transform:uppercase;"],function(e){return e.theme.colors.white},Object(o.a)(.75),function(e){return e.theme.fonts.montserrat},Object(o.a)(.1875),Object(o.a)(.9375));n.d(t,"a",function(){return p}),n.d(t,"b",function(){return g}),n.d(t,"c",function(){return y}),n.d(t,"d",function(){return C}),n.d(t,"e",function(){return N}),n.d(t,"f",function(){return G}),n.d(t,"g",function(){return B}),n.d(t,"h",function(){return P}),n.d(t,"i",function(){return A})},150:function(e,t,n){"use strict";t.a={colors:{white:"#ffffff"},fonts:{montserrat:'"Montserrat","Arial",Sans-Serif',noto:'"Noto Serif","Times New Roman",Serif',varela:'"Varela Round","Arial",Sans-Serif'}}},151:function(e,t,n){},156:function(e,t,n){e.exports=n.p+"static/cover-8d689d85a2354391166bede1b8031f5f.jpg"}}]);
//# sourceMappingURL=component---src-pages-404-tsx-aef71ca71a96fa4c43e3.js.map