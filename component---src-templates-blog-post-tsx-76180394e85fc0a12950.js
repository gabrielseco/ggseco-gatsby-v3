(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{141:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(152),o=n.n(a),i=n(144),l=n(150),c=n(149),s=n(145),u=i.b.h1.withConfig({displayName:"BlogPoststyle__Title",componentId:"sc-3t14n-0"})(["color:",";font-size:",";font-family:",";font-weight:600;line-height:",";margin:"," 0;"],function(e){return e.theme.colors.white},Object(s.a)(3),function(e){return e.theme.fonts.varela},Object(s.a)(3.875),Object(s.a)(2.1875)),d=i.b.p.withConfig({displayName:"BlogPoststyle__Subtitle",componentId:"sc-3t14n-1"})(["color:#939393;letter-spacing:-1px;font-size:",";font-family:",";line-height:",";margin:"," 0;"],Object(s.a)(1.5),function(e){return e.theme.fonts.varela},Object(s.a)(2.375),Object(s.a)(2.1875)),m=i.b.section.withConfig({displayName:"BlogPoststyle__Section",componentId:"sc-3t14n-2"})(["color:rgba(35,37,40,0.7);font-family:",";font-size:",";font-weight:400;line-height:",";margin:"," auto;max-width:",";a{border-bottom:1px solid #d4d5de;color:#656770;}h3{color:#b2b2b2;font-family:'Varela Round','Arial',Sans-Serif;font-size:",";font-weight:400;letter-spacing:-1px;line-height:",";margin:"," 0 ",";}li{margin:0 0 ",";padding:0 2.5%;}p{color:rgba(35,37,40,0.7);font-family:",";font-size:",";font-weight:400;line-height:",";margin:"," 0;padding:0;}"],function(e){return e.theme.fonts.noto},Object(s.a)(1.1875),Object(s.a)(2.1875),Object(s.a)(5),Object(s.a)(56.25),Object(s.a)(1.75),Object(s.a)(2.75),Object(s.a)(3.125),Object(s.a)(1.875),Object(s.a)(1.25),function(e){return e.theme.fonts.noto},Object(s.a)(1.1875),Object(s.a)(2.1875),Object(s.a)(2.8125));n(151);n.d(t,"query",function(){return f});var f="2214169647";t.default=function(e){var t="https://gabrielseco.github.io/ggseco-gatsby-v3"+e.data.markdownRemark.frontmatter.featured_image.publicURL;return r.createElement(i.a,{theme:l.a},r.createElement("div",null,r.createElement(o.a,{title:"Gabriel García Seco - Desarrollo Web | Music & More",meta:[{name:"description",content:"Desarrollo Web | Music & More"},{name:"keywords",content:"React, Javascript, Desarrollo Web, CSS"}]}),r.createElement(c.b,{image:t},r.createElement(c.f,null),r.createElement(c.c,{center:!0},r.createElement(c.i,null,e.data.markdownRemark.frontmatter.tags[0]),r.createElement(u,null,e.data.markdownRemark.frontmatter.title),r.createElement(d,null,e.data.markdownRemark.frontmatter.subtitle),r.createElement(c.h,null))),r.createElement(m,{dangerouslySetInnerHTML:{__html:e.data.markdownRemark.html}}),r.createElement(c.e,null)))}},145:function(e,t,n){"use strict";function r(e){return 16*e/10+"rem"}n.d(t,"a",function(){return r})},146:function(e,t,n){var r;e.exports=(r=n(148))&&r.default||r},147:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return p}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return f});var r=n(0),a=n.n(r),o=n(4),i=n.n(o),l=n(143),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var s=n(146),u=n.n(s);n.d(t,"PageRenderer",function(){return u.a});var d=n(33);n.d(t,"parsePath",function(){return d.a});var m=a.a.createContext({}),f=function(e){return a.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},148:function(e,t,n){"use strict";n.r(t);n(34);var r=n(0),a=n.n(r),o=n(4),i=n.n(o),l=n(49),c=n(2),s=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return a.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},149:function(e,t,n){"use strict";n(48),n(75);var r=n(0),a=n(147),o=n(144),i=n(145),l=o.b.article.withConfig({displayName:"BlogListstyle__Article",componentId:"sc-17ksmpo-0"})(["padding:"," 0 ",";&:nth-child(odd){background:#f9f9f9;}"],Object(i.a)(5.625),Object(i.a)(3.625)),c=o.b.div.withConfig({displayName:"BlogListstyle__Wrapper",componentId:"sc-17ksmpo-1"})(["margin:0 auto;max-width:",";width:90%;"],Object(i.a)(56.25)),s=o.b.ul.withConfig({displayName:"BlogListstyle__List",componentId:"sc-17ksmpo-2"})(["display:flex;justify-content:space-between;overflow:hidden;margin:0;padding:0;list-style:none;line-height:",";"],Object(i.a)(1.75)),u=o.b.a.withConfig({displayName:"BlogListstyle__DateTime",componentId:"sc-17ksmpo-3"})(["color:#b5b5b5;font-size:",";font-family:",";letter-spacing:-1px;padding:0 ",";"],Object(i.a)(.9375),function(e){return e.theme.fonts.montserrat},Object(i.a)(.5)),d=o.b.h2.withConfig({displayName:"BlogListstyle__Title",componentId:"sc-17ksmpo-4"})(["font-family:",";font-size:",";font-weight:600;letter-spacing:-1px;line-height:",";margin:"," 0;a{color:#373737;}"],function(e){return e.theme.fonts.varela},Object(i.a)(3),Object(i.a)(3.875),Object(i.a)(2.8125)),m=o.b.p.withConfig({displayName:"BlogListstyle__Excerpt",componentId:"sc-17ksmpo-5"})(["color:#62646c;color:rgba(35,37,40,0.7);font-family:",";font-size:",";font-weight:400;overflow:hidden;margin:"," 0;line-height:",";"],function(e){return e.theme.fonts.noto},Object(i.a)(1.1875),Object(i.a)(2.5),Object(i.a)(2.8125)),f=function(e){var t,n,o,i,f,p=e.item;return r.createElement(l,null,r.createElement(c,null,r.createElement(s,null,r.createElement("li",null,r.createElement(A,null,p.tags[0])),r.createElement("li",null,r.createElement(u,{href:"#"},r.createElement("span",null,(t=p.date,n=t.split("-"),o=n[0],i=n[1],f=n[2],parseInt(f,10)+" de "+function(e){return["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"][e-1]}(parseInt(i.slice(1),10))+" de "+o))))),r.createElement(d,null,r.createElement(a.Link,{to:"blog/"+p.path},p.title)),r.createElement(m,null,p.excerpt," [...]")))},p=function(e){return e.items.map(function(e,t){return r.createElement(f,{key:t,item:e.node.frontmatter})})},b=o.b.section.withConfig({displayName:"Coverstyle__Container",componentId:"sc-1s3i0q9-0"})(["background:#101010;display:table;height:100vh;position:relative;overflow:hidden;width:100%;"]),h=o.b.div.withConfig({displayName:"Coverstyle__BackgroundImage",componentId:"sc-1s3i0q9-1"})(["background-image:url('","');background-size:cover;height:100%;position:absolute;opacity:0.2;overflow:hidden;transform:translate3d(0,0,0);width:100%;"],function(e){return e.url}),g=function(e){var t=e.children,n=e.image;return r.createElement(b,null,r.createElement(h,{url:n}),t)},y=o.b.section.withConfig({displayName:"CoverContainer",componentId:"sc-1jr8nd1-0"})(["display:table-cell;max-width:90rem;position:relative;vertical-align:middle;text-align:",";width:",";"],function(e){return e.center?"center":"inherit"},function(e){return e.center?"inherit":"80%"}),w=n(143),v=n.n(w),j=o.b.h1.withConfig({displayName:"CoverTitlestyle__Title",componentId:"sc-1ddiuob-0"})(["color:",";font-size:",";font-weight:600;font-family:",";line-height:",";margin:10% 0 ",";"],function(e){return e.theme.colors.white},Object(i.a)(2.75),function(e){return e.theme.fonts.varela},Object(i.a)(3.25),Object(i.a)(3.125)),E="#b3b3b3",O=o.b.p.withConfig({displayName:"CoverTitlestyle__Description",componentId:"sc-1ddiuob-1"})(["color:",";font-size:",";font-family:",";letter-spacing:",";line-height:",";margin:"," 0 ",";max-width:",";a{border-bottom:2px solid ",";color:",";}"],E,Object(i.a)(1.4375),function(e){return e.theme.fonts.varela},Object(i.a)(-.0625),Object(i.a)(2.375),Object(i.a)(2.5),Object(i.a)(2.1875),function(e){return e.center?"100%":Object(i.a)(30)},E,E),_=function(e){var t=e.title,n=e.description,a=e.separator,o=void 0===a||a,i=e.center,l=void 0!==i&&i;return r.createElement(y,{center:l},r.createElement(v.a,{to:"/"},r.createElement(j,{itemProp:"headline"},t)),r.createElement(O,{center:l,itemProp:"description"},n),o&&r.createElement(P,null))},k=n(153),C=o.b.footer.withConfig({displayName:"Footerstyle__Container",componentId:"sc-1o898pr-0"})(["background:#242526;display:flex;height:10rem;padding:3rem;"]),x=o.b.ul.withConfig({displayName:"Footerstyle__List",componentId:"sc-1o898pr-1"})(["align-items:center;display:flex;justify-content:flex-end;list-style:none;padding:0;width:100%;li{border-left:1px solid #4b4b4b;display:inline-block;}li:first-child{border:0;}"]),I=o.b.a.withConfig({displayName:"Footerstyle__IconLink",componentId:"sc-1o898pr-2"})(["color:",";font-size:1.4rem;padding:0 1.7rem;text-decoration:none;&:hover{color:",";}"],function(e){return e.theme.colors.white},function(e){return e.hoverColor}),N=function(){return r.createElement(C,null,r.createElement(x,null,r.createElement("li",null,r.createElement(I,{hoverColor:"#55acee",href:"https://twitter.com/GGarciaSeco10/",target:"_blank"},r.createElement(k,{name:"twitter"}))),r.createElement("li",null,r.createElement(I,{hoverColor:"#0e76a8",href:"http://es.linkedin.com/in/gabrielgarciaseco",target:"_blank"},r.createElement(k,{name:"linkedin"}))),r.createElement("li",null,r.createElement(I,{hoverColor:"#999",href:"https://github.com/gabrielseco",target:"_blank"},r.createElement(k,{name:"github"})))))},S=n(7),z=n.n(S),R=o.b.header.withConfig({displayName:"Headerstyle__Container",componentId:"sc-12fuabv-0"})(["background:transparent;border:0;display:flex;height:7.5rem;justify-content:space-between;left:0;padding:3.5rem;position:absolute;top:0;width:100%;z-index:2;"]),L=Object(o.b)(v.a).withConfig({displayName:"Headerstyle__SuperLink",componentId:"sc-12fuabv-1"})(["color:",";font-family:",";font-size:1.8rem;font-weight:600;text-decoration:none;"],function(e){return e.theme.colors.white},function(e){return e.theme.fonts.varela}),q=o.b.nav.withConfig({displayName:"Headerstyle__Nav",componentId:"sc-12fuabv-2"})(["ul{list-style:none;margin:0;padding:0;}"]),T=function(e){function t(){return e.apply(this,arguments)||this}return z()(t,e),t.prototype.render=function(){return r.createElement(R,null,r.createElement(L,{to:"/"},"Gabriel García Seco"),r.createElement(q,null,r.createElement("ul",null,r.createElement("li",null,r.createElement(L,{to:"/contacto"},"Contacto")))))},t}(r.Component),M=o.b.div.withConfig({displayName:"MouseScrollstyle__Mouse",componentId:"iv2aag-0"})(["border:2px solid #888;border:2px solid rgba(255,255,255,0.27);border-radius:",";bottom:",";cursor:pointer;position:absolute;right:",";margin-left:",";height:",";transition:border-color 0.2s ease-in;width:",";"],Object(i.a)(.9375),Object(i.a)(2.5),Object(i.a)(2.5),Object(i.a)(-.75),Object(i.a)(2.25),Object(i.a)(1.5625)),B=o.b.div.withConfig({displayName:"MouseScrollstyle__Scroll",componentId:"iv2aag-1"})(["animation-duration:2s;animation-name:scroll;animation-iteration-count:infinite;border-radius:0.25em;display:block;margin:"," auto;width:",";height:",";background:#b0b1b1;@keyframes scroll{0%{opacity:0;}10%{opacity:1;transform:translateY(0px);}100%{opacity:0;transform:translateY(10px);}}"],Object(i.a)(.375),Object(i.a)(.1875),Object(i.a)(.375)),G=function(){return r.createElement(M,null,r.createElement(B,null))},P=o.b.hr.withConfig({displayName:"Separator",componentId:"tde201-0"})(["background:#5a5a5a;border:0;display:inline-block;height:0.3rem;margin:0;width:10%;"]),A=o.b.span.withConfig({displayName:"Tag",componentId:"hq3r5b-0"})(["border-radius:0.3rem;background:#0085c3;color:",";display:inline-block;font-size:1.2rem;font-family:",";padding:0.3rem 1.5rem;text-transform:uppercase;"],function(e){return e.theme.colors.white},function(e){return e.theme.fonts.montserrat});n.d(t,"a",function(){return p}),n.d(t,"b",function(){return g}),n.d(t,"c",function(){return y}),n.d(t,"d",function(){return _}),n.d(t,"e",function(){return N}),n.d(t,"f",function(){return T}),n.d(t,"g",function(){return G}),n.d(t,"h",function(){return P}),n.d(t,"i",function(){return A})},150:function(e,t,n){"use strict";t.a={colors:{white:"#ffffff"},fonts:{montserrat:'"Montserrat","Arial",Sans-Serif',noto:'"Noto Serif","Times New Roman",Serif',varela:'"Varela Round","Arial",Sans-Serif'}}},151:function(e,t,n){}}]);
//# sourceMappingURL=component---src-templates-blog-post-tsx-76180394e85fc0a12950.js.map