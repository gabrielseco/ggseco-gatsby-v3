(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{142:function(e,t,n){"use strict";n.r(t);var r=n(7),o=n.n(r),i=n(0),a=n(152),l=n.n(a),c=n(144),s=n(150),u=n(149),d=n(156),m=n.n(d),f=(n(151),function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){return i.createElement(c.a,{theme:s.a},i.createElement("div",null,i.createElement(l.a,{title:"Gabriel García Seco - Desarrollo Web | Music & More",meta:[{name:"description",content:"Desarrollo Web | Music & More"},{name:"keywords",content:"React, Javascript, Desarrollo Web, CSS"}]}),i.createElement(u.b,{image:m.a},i.createElement(u.f,null),i.createElement(u.d,{title:"Gabriel García Seco",description:"Desarrollo Web | Music & More"}),i.createElement(u.g,null)),this.props.children,i.createElement(u.e,null)))},t}(i.PureComponent));n.d(t,"default",function(){return p}),n.d(t,"HomePageQuery",function(){return h});var p=function(e){function t(t,n){return e.call(this,t,n)||this}return o()(t,e),t.prototype.render=function(){return i.createElement(f,null,i.createElement(u.a,{items:this.props.data.allMarkdownRemark.edges}))},t}(i.Component),h="3580229242"},145:function(e,t,n){var r;e.exports=(r=n(148))&&r.default||r},146:function(e,t,n){"use strict";function r(e){return 16*e/10+"rem"}n.d(t,"a",function(){return r})},147:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return p}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return f});var r=n(0),o=n.n(r),i=n(4),a=n.n(i),l=n(143),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var s=n(145),u=n.n(s);n.d(t,"PageRenderer",function(){return u.a});var d=n(33);n.d(t,"parsePath",function(){return d.a});var m=o.a.createContext({}),f=function(e){return o.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:a.a.object,query:a.a.string.isRequired,render:a.a.func,children:a.a.func}},148:function(e,t,n){"use strict";n.r(t);n(34);var r=n(0),o=n.n(r),i=n(4),a=n.n(i),l=n(49),c=n(2),s=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return o.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:a.a.shape({pathname:a.a.string.isRequired}).isRequired},t.default=s},149:function(e,t,n){"use strict";n(48),n(75);var r=n(0),o=n(147),i=n(144),a=i.b.article.withConfig({displayName:"BlogListstyle__Article",componentId:"sc-17ksmpo-0"})(["padding:9rem 0 5.8rem;&:nth-child(odd){background:#f9f9f9;}"]),l=i.b.div.withConfig({displayName:"BlogListstyle__Wrapper",componentId:"sc-17ksmpo-1"})(["margin:0 auto;max-width:90rem;width:90%;"]),c=i.b.ul.withConfig({displayName:"BlogListstyle__List",componentId:"sc-17ksmpo-2"})(["display:flex;justify-content:space-between;overflow:hidden;margin:0;padding:0;list-style:none;line-height:2.8rem;"]),s=i.b.a.withConfig({displayName:"BlogListstyle__DateTime",componentId:"sc-17ksmpo-3"})(["color:#b5b5b5;font-size:1.5rem;font-family:",";letter-spacing:-1px;padding:0 0.8rem;"],function(e){return e.theme.fonts.montserrat}),u=i.b.h2.withConfig({displayName:"BlogListstyle__Title",componentId:"sc-17ksmpo-4"})(["font-family:",";font-size:4.8rem;font-weight:600;letter-spacing:-1px;line-height:6.2rem;margin:4.5rem 0;a{color:#373737;}"],function(e){return e.theme.fonts.varela}),d=i.b.p.withConfig({displayName:"BlogListstyle__Excerpt",componentId:"sc-17ksmpo-5"})(["color:#62646c;color:rgba(35,37,40,0.7);font-family:",";font-size:1.9rem;font-weight:400;overflow:hidden;margin:4rem 0;line-height:4.5rem;"],function(e){return e.theme.fonts.noto}),m=function(e){var t,n,i,m,f,p=e.item;return r.createElement(a,null,r.createElement(l,null,r.createElement(c,null,r.createElement("li",null,r.createElement(D,null,p.tags[0])),r.createElement("li",null,r.createElement(s,{href:"#"},r.createElement("span",null,(t=p.date,n=t.split("-"),i=n[0],m=n[1],f=n[2],parseInt(f,10)+" de "+function(e){return["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"][e-1]}(parseInt(m.slice(1),10))+" de "+i))))),r.createElement(u,null,r.createElement(o.Link,{to:"blog/"+p.path},p.title)),r.createElement(d,null,p.excerpt," [...]")))},f=function(e){return e.items.map(function(e,t){return r.createElement(m,{key:t,item:e.node.frontmatter})})},p=i.b.section.withConfig({displayName:"Coverstyle__Container",componentId:"sc-1s3i0q9-0"})(["background:#101010;display:table;height:100vh;position:relative;overflow:hidden;width:100%;"]),h=i.b.div.withConfig({displayName:"Coverstyle__BackgroundImage",componentId:"sc-1s3i0q9-1"})(["background-image:url('","');background-size:cover;height:100%;position:absolute;opacity:0.2;overflow:hidden;transform:translate3d(0,0,0);width:100%;"],function(e){return e.url}),b=function(e){var t=e.children,n=e.image;return r.createElement(p,null,r.createElement(h,{url:n}),t)},g=i.b.section.withConfig({displayName:"CoverContainer",componentId:"sc-1jr8nd1-0"})(["display:table-cell;max-width:90rem;position:relative;vertical-align:middle;text-align:",";width:",";"],function(e){return e.center?"center":"inherit"},function(e){return e.center?"inherit":"80%"}),y=n(143),w=n.n(y),v=n(146),E=i.b.h1.withConfig({displayName:"CoverTitlestyle__Title",componentId:"sc-1ddiuob-0"})(["color:",";font-size:",";font-weight:600;font-family:",";line-height:",";margin:10% 0 ",";"],function(e){return e.theme.colors.white},Object(v.a)(2.75),function(e){return e.theme.fonts.varela},Object(v.a)(3.25),Object(v.a)(3.125)),C="#b3b3b3",_=i.b.p.withConfig({displayName:"CoverTitlestyle__Description",componentId:"sc-1ddiuob-1"})(["color:",";font-size:",";font-family:",";letter-spacing:",";line-height:",";margin:"," 0 ",";max-width:",";a{border-bottom:2px solid ",";color:",";}"],C,Object(v.a)(1.4375),function(e){return e.theme.fonts.varela},Object(v.a)(-.0625),Object(v.a)(2.375),Object(v.a)(2.5),Object(v.a)(2.1875),function(e){return e.center?"100%":Object(v.a)(30)},C,C),k=function(e){var t=e.title,n=e.description,o=e.separator,i=void 0===o||o,a=e.center,l=void 0!==a&&a;return r.createElement(g,{center:l},r.createElement(w.a,{to:"/"},r.createElement(E,{itemProp:"headline"},t)),r.createElement(_,{center:l,itemProp:"description"},n),i&&r.createElement(B,null))},x=n(153),j=i.b.footer.withConfig({displayName:"Footerstyle__Container",componentId:"sc-1o898pr-0"})(["background:#242526;display:flex;height:10rem;padding:3rem;"]),I=i.b.ul.withConfig({displayName:"Footerstyle__List",componentId:"sc-1o898pr-1"})(["align-items:center;display:flex;justify-content:flex-end;list-style:none;padding:0;width:100%;li{border-left:1px solid #4b4b4b;display:inline-block;}li:first-child{border:0;}"]),N=i.b.a.withConfig({displayName:"Footerstyle__IconLink",componentId:"sc-1o898pr-2"})(["color:",";font-size:1.4rem;padding:0 1.7rem;text-decoration:none;&:hover{color:",";}"],function(e){return e.theme.colors.white},function(e){return e.hoverColor}),S=function(){return r.createElement(j,null,r.createElement(I,null,r.createElement("li",null,r.createElement(N,{hoverColor:"#55acee",href:"https://twitter.com/GGarciaSeco10/",target:"_blank"},r.createElement(x,{name:"twitter"}))),r.createElement("li",null,r.createElement(N,{hoverColor:"#0e76a8",href:"http://es.linkedin.com/in/gabrielgarciaseco",target:"_blank"},r.createElement(x,{name:"linkedin"}))),r.createElement("li",null,r.createElement(N,{hoverColor:"#999",href:"https://github.com/gabrielseco",target:"_blank"},r.createElement(x,{name:"github"})))))},O=n(7),q=n.n(O),L=i.b.header.withConfig({displayName:"Headerstyle__Container",componentId:"sc-12fuabv-0"})(["background:transparent;border:0;display:flex;height:7.5rem;justify-content:space-between;left:0;padding:3.5rem;position:absolute;top:0;width:100%;z-index:2;"]),M=Object(i.b)(w.a).withConfig({displayName:"Headerstyle__SuperLink",componentId:"sc-12fuabv-1"})(["color:",";font-family:",";font-size:1.8rem;font-weight:600;text-decoration:none;"],function(e){return e.theme.colors.white},function(e){return e.theme.fonts.varela}),G=i.b.nav.withConfig({displayName:"Headerstyle__Nav",componentId:"sc-12fuabv-2"})(["ul{list-style:none;margin:0;padding:0;}"]),z=function(e){function t(){return e.apply(this,arguments)||this}return q()(t,e),t.prototype.render=function(){return r.createElement(L,null,r.createElement(M,{to:"/"},"Gabriel García Seco"),r.createElement(G,null,r.createElement("ul",null,r.createElement("li",null,r.createElement(M,{to:"/contacto"},"Contacto")))))},t}(r.Component),T=i.b.div.withConfig({displayName:"MouseScrollstyle__Mouse",componentId:"iv2aag-0"})(["border:2px solid #888;border:2px solid rgba(255,255,255,0.27);border-radius:",";bottom:",";cursor:pointer;position:absolute;right:",";margin-left:",";height:",";transition:border-color 0.2s ease-in;width:",";"],Object(v.a)(.9375),Object(v.a)(2.5),Object(v.a)(2.5),Object(v.a)(-.75),Object(v.a)(2.25),Object(v.a)(1.5625)),R=i.b.div.withConfig({displayName:"MouseScrollstyle__Scroll",componentId:"iv2aag-1"})(["animation-duration:2s;animation-name:scroll;animation-iteration-count:infinite;border-radius:0.25em;display:block;margin:"," auto;width:",";height:",";background:#b0b1b1;@keyframes scroll{0%{opacity:0;}10%{opacity:1;transform:translateY(0px);}100%{opacity:0;transform:translateY(10px);}}"],Object(v.a)(.375),Object(v.a)(.1875),Object(v.a)(.375)),P=function(){return r.createElement(T,null,r.createElement(R,null))},B=i.b.hr.withConfig({displayName:"Separator",componentId:"tde201-0"})(["background:#5a5a5a;border:0;display:inline-block;height:0.3rem;margin:0;width:10%;"]),D=i.b.span.withConfig({displayName:"Tag",componentId:"hq3r5b-0"})(["border-radius:0.3rem;background:#0085c3;color:",";display:inline-block;font-size:1.2rem;font-family:",";padding:0.3rem 1.5rem;text-transform:uppercase;"],function(e){return e.theme.colors.white},function(e){return e.theme.fonts.montserrat});n.d(t,"a",function(){return f}),n.d(t,"b",function(){return b}),n.d(t,"c",function(){return g}),n.d(t,"d",function(){return k}),n.d(t,"e",function(){return S}),n.d(t,"f",function(){return z}),n.d(t,"g",function(){return P}),n.d(t,"h",function(){return B}),n.d(t,"i",function(){return D})},150:function(e,t,n){"use strict";t.a={colors:{white:"#ffffff"},fonts:{montserrat:'"Montserrat","Arial",Sans-Serif',noto:'"Noto Serif","Times New Roman",Serif',varela:'"Varela Round","Arial",Sans-Serif'}}},151:function(e,t,n){},156:function(e,t,n){e.exports=n.p+"static/cover-8d689d85a2354391166bede1b8031f5f.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-tsx-97790f80a8798e81b412.js.map