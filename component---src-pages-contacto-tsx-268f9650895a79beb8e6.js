(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{138:function(e,t,n){"use strict";n.r(t);var r=n(7),o=n.n(r),i=n(0),a=n(151),l=n.n(a),c=n(144),s=n(149),m=n(148),u=n(172),d=n.n(u),f=(n(150),function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){return i.createElement(c.a,{theme:s.a},i.createElement("div",null,i.createElement(l.a,{title:"Gabriel García Seco - Desarrollo Web | Music & More",meta:[{name:"description",content:"Desarrollo Web | Music & More"},{name:"keywords",content:"React, Javascript, Desarrollo Web, CSS"}]}),i.createElement(m.b,{image:d.a},i.createElement(m.f,null),i.createElement(m.d,{title:"Contacto",description:["Puedes contactar conmigo en ",i.createElement("a",{href:"mailto:ggarciaseco@gmail.com"},"ggarciaseco@gmail.com")],center:!0}))))},t}(i.PureComponent));t.default=f},145:function(e,t,n){var r;e.exports=(r=n(147))&&r.default||r},146:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return p}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return f});var r=n(0),o=n.n(r),i=n(4),a=n.n(i),l=n(143),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var s=n(145),m=n.n(s);n.d(t,"PageRenderer",function(){return m.a});var u=n(33);n.d(t,"parsePath",function(){return u.a});var d=o.a.createContext({}),f=function(e){return o.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:a.a.object,query:a.a.string.isRequired,render:a.a.func,children:a.a.func}},147:function(e,t,n){"use strict";n.r(t);n(34);var r=n(0),o=n.n(r),i=n(4),a=n.n(i),l=n(49),c=n(2),s=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return o.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:a.a.shape({pathname:a.a.string.isRequired}).isRequired},t.default=s},148:function(e,t,n){"use strict";n(48),n(75);var r=n(0),o=n(146),i=n(144),a=i.b.article.withConfig({displayName:"BlogListstyle__Article",componentId:"sc-17ksmpo-0"})(["padding:5.625em 0 3.625em;&:nth-child(odd){background:#f9f9f9;}"]),l=i.b.div.withConfig({displayName:"BlogListstyle__Wrapper",componentId:"sc-17ksmpo-1"})(["margin:0 auto;max-width:56.25em;width:90%;"]),c=i.b.ul.withConfig({displayName:"BlogListstyle__List",componentId:"sc-17ksmpo-2"})(["display:flex;justify-content:space-between;overflow:hidden;margin:0;padding:0;list-style:none;line-height:1.75em;"]),s=i.b.a.withConfig({displayName:"BlogListstyle__DateTime",componentId:"sc-17ksmpo-3"})(["color:#b5b5b5;font-size:0.9375rem;font-family:",";letter-spacing:-1px;padding:0 0.5rem;"],function(e){return e.theme.fonts.montserrat}),m=i.b.h2.withConfig({displayName:"BlogListstyle__Title",componentId:"sc-17ksmpo-4"})(["font-family:",";font-size:3rem;font-weight:600;letter-spacing:-1px;line-height:3.875rem;margin:2.8125rem 0;a{color:#373737;}"],function(e){return e.theme.fonts.varela}),u=i.b.p.withConfig({displayName:"BlogListstyle__Excerpt",componentId:"sc-17ksmpo-5"})(["color:#62646c;color:rgba(35,37,40,0.7);font-family:",";font-size:1.1875rem;font-weight:400;overflow:hidden;margin:2.5rem 0;line-height:2.1875rem;"],function(e){return e.theme.fonts.noto}),d=function(e){var t,n,i,d,f,p=e.item;return r.createElement(a,null,r.createElement(l,null,r.createElement(c,null,r.createElement("li",null,r.createElement(D,null,p.tags[0])),r.createElement("li",null,r.createElement(s,{href:"#"},r.createElement("span",null,(t=p.date,n=t.split("-"),i=n[0],d=n[1],f=n[2],parseInt(f,10)+" de "+function(e){return["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"][e-1]}(parseInt(d.slice(1),10))+" de "+i))))),r.createElement(m,null,r.createElement(o.Link,{to:"blog/"+p.path},p.title)),r.createElement(u,null,p.excerpt," [...]")))},f=function(e){return e.items.map(function(e,t){return r.createElement(d,{key:t,item:e.node.frontmatter})})},p=i.b.section.withConfig({displayName:"Coverstyle__Container",componentId:"sc-1s3i0q9-0"})(["background:#101010;display:table;height:100vh;position:relative;overflow:hidden;width:100%;"]),h=i.b.div.withConfig({displayName:"Coverstyle__BackgroundImage",componentId:"sc-1s3i0q9-1"})(["background-image:url('","');background-size:cover;height:100%;position:absolute;opacity:0.2;overflow:hidden;transform:translate3d(0,0,0);width:100%;"],function(e){return e.url}),g=function(e){var t=e.children,n=e.image;return r.createElement(p,null,r.createElement(h,{url:n}),t)},b=i.b.section.withConfig({displayName:"CoverContainer",componentId:"sc-1jr8nd1-0"})(["display:table-cell;max-width:56.25em;position:relative;vertical-align:middle;text-align:",";width:",";"],function(e){return e.center?"center":"inherit"},function(e){return e.center?"inherit":"80%"}),y=n(143),w=n.n(y),v=i.b.h1.withConfig({displayName:"CoverTitlestyle__Title",componentId:"sc-1ddiuob-0"})(["color:",";font-size:2.75rem;font-weight:600;font-family:",";line-height:3.25rem;margin:10% 0 3.125rem;"],function(e){return e.theme.colors.white},function(e){return e.theme.fonts.varela}),E="#b3b3b3",C=i.b.p.withConfig({displayName:"CoverTitlestyle__Description",componentId:"sc-1ddiuob-1"})(["color:",";font-size:1.4375rem;font-family:",";letter-spacing:-0.0625rem;line-height:2.375rem;margin:2.5rem 0 2.1875rem;max-width:",";a{border-bottom:2px solid ",";color:",";}"],E,function(e){return e.theme.fonts.varela},function(e){return e.center?"100%":"30rem"},E,E),_=function(e){var t=e.title,n=e.description,o=e.separator,i=void 0===o||o,a=e.center,l=void 0!==a&&a;return r.createElement(b,{center:l},r.createElement(w.a,{to:"/"},r.createElement(v,{itemProp:"headline"},t)),r.createElement(C,{center:l,itemProp:"description"},n),i&&r.createElement(B,null))},k=n(152),x=i.b.footer.withConfig({displayName:"Footerstyle__Container",componentId:"sc-1o898pr-0"})(["background:#242526;display:flex;height:6.25em;padding:1.875em;"]),I=i.b.ul.withConfig({displayName:"Footerstyle__List",componentId:"sc-1o898pr-1"})(["align-items:center;display:flex;justify-content:flex-end;list-style:none;padding:0;width:100%;li{border-left:1px solid #4b4b4b;display:inline-block;}li:first-child{border:0;}"]),N=i.b.a.withConfig({displayName:"Footerstyle__IconLink",componentId:"sc-1o898pr-2"})(["color:",";font-size:0.875rem;padding:0 1.0625rem;text-decoration:none;&:hover{color:",";}"],function(e){return e.theme.colors.white},function(e){return e.hoverColor}),S=function(){return r.createElement(x,null,r.createElement(I,null,r.createElement("li",null,r.createElement(N,{hoverColor:"#55acee",href:"https://twitter.com/GGarciaSeco10/",target:"_blank"},r.createElement(k,{name:"twitter"}))),r.createElement("li",null,r.createElement(N,{hoverColor:"#0e76a8",href:"http://es.linkedin.com/in/gabrielgarciaseco",target:"_blank"},r.createElement(k,{name:"linkedin"}))),r.createElement("li",null,r.createElement(N,{hoverColor:"#999",href:"https://github.com/gabrielseco",target:"_blank"},r.createElement(k,{name:"github"})))))},q=n(7),L=n.n(q),z=i.b.header.withConfig({displayName:"Headerstyle__Container",componentId:"sc-12fuabv-0"})(["background:transparent;border:0;display:flex;height:4.6875em;justify-content:space-between;left:0;padding:2.1875em;position:absolute;top:0;width:100%;z-index:2;"]),T=Object(i.b)(w.a).withConfig({displayName:"Headerstyle__SuperLink",componentId:"sc-12fuabv-1"})(["color:",";font-family:",";font-size:1.125rem;font-weight:600;text-decoration:none;"],function(e){return e.theme.colors.white},function(e){return e.theme.fonts.varela}),G=i.b.nav.withConfig({displayName:"Headerstyle__Nav",componentId:"sc-12fuabv-2"})(["ul{list-style:none;margin:0;padding:0;}"]),M=function(e){function t(){return e.apply(this,arguments)||this}return L()(t,e),t.prototype.render=function(){return r.createElement(z,null,r.createElement(T,{to:"/"},"Gabriel García Seco"),r.createElement(G,null,r.createElement("ul",null,r.createElement("li",null,r.createElement(T,{to:"/contacto"},"Contacto")))))},t}(r.Component),j=i.b.div.withConfig({displayName:"MouseScrollstyle__Mouse",componentId:"iv2aag-0"})(["border:2px solid #888;border:2px solid rgba(255,255,255,0.27);border-radius:0.9375em;bottom:2.5em;cursor:pointer;position:absolute;right:2.5em;margin-left:-0.75em;height:2.25em;transition:border-color 0.2s ease-in;width:1.5625em;"]),P=i.b.div.withConfig({displayName:"MouseScrollstyle__Scroll",componentId:"iv2aag-1"})(["animation-duration:2s;animation-name:scroll;animation-iteration-count:infinite;border-radius:0.25em;display:block;margin:0.375em auto;width:0.1875em;height:0.375em;background:#b0b1b1;@keyframes scroll{0%{opacity:0;}10%{opacity:1;transform:translateY(0px);}100%{opacity:0;transform:translateY(10px);}}"]),R=function(){return r.createElement(j,null,r.createElement(P,null))},B=i.b.hr.withConfig({displayName:"Separator",componentId:"tde201-0"})(["background:#5a5a5a;border:0;display:inline-block;height:0.1875em;margin:0;width:10%;"]),D=i.b.span.withConfig({displayName:"Tag",componentId:"hq3r5b-0"})(["border-radius:3px;background:#0085c3;color:",";display:inline-block;font-size:0.75rem;font-family:",";padding:0.1875rem 0.9375em;text-transform:uppercase;"],function(e){return e.theme.colors.white},function(e){return e.theme.fonts.montserrat});n.d(t,"a",function(){return f}),n.d(t,"b",function(){return g}),n.d(t,"c",function(){return b}),n.d(t,"d",function(){return _}),n.d(t,"e",function(){return S}),n.d(t,"f",function(){return M}),n.d(t,"g",function(){return R}),n.d(t,"h",function(){return B}),n.d(t,"i",function(){return D})},149:function(e,t,n){"use strict";t.a={colors:{white:"#ffffff"},fonts:{montserrat:'"Montserrat","Arial",Sans-Serif',noto:'"Noto Serif","Times New Roman",Serif',varela:'"Varela Round","Arial",Sans-Serif'}}},150:function(e,t,n){},172:function(e,t,n){e.exports=n.p+"static/contact-a05f79908736d31093ed2967bc7031cd.jpg"}}]);
//# sourceMappingURL=component---src-pages-contacto-tsx-268f9650895a79beb8e6.js.map