(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{139:function(e,t,n){"use strict";n.r(t);var r=n(7),o=n.n(r),i=n(0),a=n(151),l=n.n(a),c=n(141),s=n(146),m=n(145),u=n(155),d=n.n(u),f=(n(147),function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){return i.createElement(c.a,{theme:s.a},i.createElement("div",null,i.createElement(l.a,{title:"Gabriel García Seco - Desarrollo Web | Music & More",meta:[{name:"description",content:"Desarrollo Web | Music & More"},{name:"keywords",content:"React, Javascript, Desarrollo Web, CSS"}]}),i.createElement(m.b,{image:d.a},i.createElement(m.e,null),i.createElement(m.c,{title:"Gabriel García Seco",description:"Desarrollo Web | Music & More"}),i.createElement(m.f,null)),this.props.children,i.createElement(m.d,null)))},t}(i.PureComponent));n.d(t,"default",function(){return p}),n.d(t,"HomePageQuery",function(){return h});var p=function(e){function t(t,n){return e.call(this,t,n)||this}return o()(t,e),t.prototype.render=function(){return i.createElement(f,null,i.createElement(m.a,{items:this.props.data.allMarkdownRemark.edges}))},t}(i.Component),h="3580229242"},142:function(e,t,n){var r;e.exports=(r=n(144))&&r.default||r},143:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return p}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return f});var r=n(0),o=n.n(r),i=n(4),a=n.n(i),l=n(140),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var s=n(142),m=n.n(s);n.d(t,"PageRenderer",function(){return m.a});var u=n(33);n.d(t,"parsePath",function(){return u.a});var d=o.a.createContext({}),f=function(e){return o.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:a.a.object,query:a.a.string.isRequired,render:a.a.func,children:a.a.func}},144:function(e,t,n){"use strict";n.r(t);n(34);var r=n(0),o=n.n(r),i=n(4),a=n.n(i),l=n(49),c=n(2),s=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return o.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:a.a.shape({pathname:a.a.string.isRequired}).isRequired},t.default=s},145:function(e,t,n){"use strict";n(48);var r=n(0),o=n(143),i=n(141),a=i.b.article.withConfig({displayName:"BlogListstyle__Article",componentId:"sc-17ksmpo-0"})(["padding:5.625em 0 3.625em;&:nth-child(odd){background:#f9f9f9;}"]),l=i.b.div.withConfig({displayName:"BlogListstyle__Wrapper",componentId:"sc-17ksmpo-1"})(["margin:0 auto;max-width:56.25em;width:90%;"]),c=i.b.ul.withConfig({displayName:"BlogListstyle__List",componentId:"sc-17ksmpo-2"})(["display:flex;justify-content:space-between;overflow:hidden;margin:0;padding:0;list-style:none;line-height:1.75em;"]),s=i.b.span.withConfig({displayName:"BlogListstyle__Tag",componentId:"sc-17ksmpo-3"})(["border-radius:3px;background:#0085c3;color:",";display:inline-block;font-size:0.75rem;font-family:",";padding:0.1875rem 0.9375em;text-transform:uppercase;"],function(e){return e.theme.colors.white},function(e){return e.theme.fonts.montserrat}),m=i.b.a.withConfig({displayName:"BlogListstyle__DateTime",componentId:"sc-17ksmpo-4"})(["color:#b5b5b5;font-size:0.9375rem;font-family:",";letter-spacing:-1px;padding:0 0.5rem;"],function(e){return e.theme.fonts.montserrat}),u=i.b.h2.withConfig({displayName:"BlogListstyle__Title",componentId:"sc-17ksmpo-5"})(["font-family:",";font-size:3rem;font-weight:600;letter-spacing:-1px;line-height:3.875rem;margin:2.8125rem 0;a{color:#373737;}"],function(e){return e.theme.fonts.varela}),d=i.b.p.withConfig({displayName:"BlogListstyle__Excerpt",componentId:"sc-17ksmpo-6"})(["color:#62646c;color:rgba(35,37,40,0.7);font-family:",";font-size:1.1875rem;font-weight:400;overflow:hidden;margin:2.5rem 0;line-height:2.1875rem;"],function(e){return e.theme.fonts.noto}),f=function(e){var t=e.item;return r.createElement(a,null,r.createElement(l,null,r.createElement(c,null,r.createElement("li",null,r.createElement(s,null,t.tags[0])),r.createElement("li",null,r.createElement(m,{href:"#"},r.createElement("span",null,t.date)))),r.createElement(u,null,r.createElement(o.Link,{to:"blog/"+t.path},t.title)),r.createElement(d,null,t.excerpt," [...]")))},p=function(e){return e.items.map(function(e,t){return r.createElement(f,{key:t,item:e.node.frontmatter})})},h=i.b.section.withConfig({displayName:"Coverstyle__Container",componentId:"sc-1s3i0q9-0"})(["background:#101010;display:table;height:100vh;position:relative;overflow:hidden;width:100%;"]),g=i.b.div.withConfig({displayName:"Coverstyle__BackgroundImage",componentId:"sc-1s3i0q9-1"})(["background-image:url('","');background-size:cover;height:100%;position:absolute;opacity:0.2;overflow:hidden;transform:translate3d(0,0,0);width:100%;"],function(e){return e.url}),b=function(e){var t=e.children,n=e.image;return r.createElement(h,null,r.createElement(g,{url:n}),t)},y=n(140),w=n.n(y),v=i.b.section.withConfig({displayName:"CoverTitlestyle__Container",componentId:"sc-1ddiuob-0"})(["display:table-cell;max-width:56.25em;position:relative;vertical-align:middle;width:80%;",";"],function(e){return e.center?"\n    text-align: center;\n    width: inherit;\n  ":""}),E=i.b.h1.withConfig({displayName:"CoverTitlestyle__Title",componentId:"sc-1ddiuob-1"})(["color:",";font-size:2.75rem;font-weight:600;font-family:",";line-height:3.25rem;margin:10% 0 3.125rem;"],function(e){return e.theme.colors.white},function(e){return e.theme.fonts.varela}),_="#b3b3b3",C=i.b.p.withConfig({displayName:"CoverTitlestyle__Description",componentId:"sc-1ddiuob-2"})(["color:",";font-size:1.4375rem;font-family:",";letter-spacing:-0.0625em;line-height:2.375rem;margin:2.5rem 0 2.1875rem;max-width:30em;"," a{border-bottom:2px solid ",";color:",";}"],_,function(e){return e.theme.fonts.varela},function(e){return e.center?"\n    max-width: 100%;\n  ":""},_,_),k=i.b.hr.withConfig({displayName:"CoverTitlestyle__Separator",componentId:"sc-1ddiuob-3"})(["background:#5a5a5a;border:0;height:0.1875em;margin:0;width:10%;",";"],function(e){return e.center?"\n    display: inline-block;\n  ":""}),x=function(e){var t=e.title,n=e.description,o=e.separator,i=void 0===o||o,a=e.center,l=void 0!==a&&a;return r.createElement(v,{center:l},r.createElement(w.a,{to:"/"},r.createElement(E,{itemProp:"headline"},t)),r.createElement(C,{center:l,itemProp:"description"},n),i&&r.createElement(k,{center:l}))},I=n(154),N=i.b.footer.withConfig({displayName:"Footerstyle__Container",componentId:"sc-1o898pr-0"})(["background:#242526;display:flex;height:6.25em;padding:1.875em;"]),S=i.b.ul.withConfig({displayName:"Footerstyle__List",componentId:"sc-1o898pr-1"})(["align-items:center;display:flex;justify-content:flex-end;list-style:none;padding:0;width:100%;li{border-left:1px solid #4b4b4b;display:inline-block;}li:first-child{border:0;}"]),L=i.b.a.withConfig({displayName:"Footerstyle__IconLink",componentId:"sc-1o898pr-2"})(["color:",";font-size:0.875rem;padding:0 1.0625rem;text-decoration:none;&:hover{color:",";}"],function(e){return e.theme.colors.white},function(e){return e.hoverColor}),T=function(){return r.createElement(N,null,r.createElement(S,null,r.createElement("li",null,r.createElement(L,{hoverColor:"#55acee",href:"https://twitter.com/GGarciaSeco10/",target:"_blank"},r.createElement(I,{name:"twitter"}))),r.createElement("li",null,r.createElement(L,{hoverColor:"#0e76a8",href:"http://es.linkedin.com/in/gabrielgarciaseco",target:"_blank"},r.createElement(I,{name:"linkedin"}))),r.createElement("li",null,r.createElement(L,{hoverColor:"#999",href:"https://github.com/gabrielseco",target:"_blank"},r.createElement(I,{name:"github"})))))},q=n(7),G=n.n(q),M=i.b.header.withConfig({displayName:"Headerstyle__Container",componentId:"sc-12fuabv-0"})(["background:transparent;border:0;display:flex;height:4.6875em;justify-content:space-between;left:0;padding:2.1875em;position:absolute;top:0;width:100%;z-index:2;"]),z=Object(i.b)(w.a).withConfig({displayName:"Headerstyle__SuperLink",componentId:"sc-12fuabv-1"})(["color:",";font-family:",";font-size:1.125rem;font-weight:600;text-decoration:none;"],function(e){return e.theme.colors.white},function(e){return e.theme.fonts.varela}),R=i.b.nav.withConfig({displayName:"Headerstyle__Nav",componentId:"sc-12fuabv-2"})(["ul{list-style:none;margin:0;padding:0;}"]),P=function(e){function t(){return e.apply(this,arguments)||this}return G()(t,e),t.prototype.render=function(){return r.createElement(M,null,r.createElement(z,{to:"/"},"Gabriel García Seco"),r.createElement(R,null,r.createElement("ul",null,r.createElement("li",null,r.createElement(z,{to:"/contacto"},"Contacto")))))},t}(r.Component),j=i.b.div.withConfig({displayName:"MouseScrollstyle__Mouse",componentId:"iv2aag-0"})(["border:2px solid #888;border:2px solid rgba(255,255,255,0.27);border-radius:0.9375em;bottom:2.5em;cursor:pointer;position:absolute;right:2.5em;margin-left:-0.75em;height:2.25em;transition:border-color 0.2s ease-in;width:1.5625em;"]),B=i.b.div.withConfig({displayName:"MouseScrollstyle__Scroll",componentId:"iv2aag-1"})(["animation-duration:2s;animation-name:scroll;animation-iteration-count:infinite;border-radius:0.25em;display:block;margin:0.375em auto;width:0.1875em;height:0.375em;background:#b0b1b1;@keyframes scroll{0%{opacity:0;}10%{opacity:1;transform:translateY(0px);}100%{opacity:0;transform:translateY(10px);}}"]),D=function(){return r.createElement(j,null,r.createElement(B,null))};n.d(t,"a",function(){return p}),n.d(t,"b",function(){return b}),n.d(t,"c",function(){return x}),n.d(t,"d",function(){return T}),n.d(t,"e",function(){return P}),n.d(t,"f",function(){return D})},146:function(e,t,n){"use strict";t.a={colors:{white:"#ffffff"},fonts:{montserrat:'"Montserrat","Arial",Sans-Serif',noto:'"Noto Serif","Times New Roman",Serif',varela:'"Varela Round","Arial",Sans-Serif'}}},147:function(e,t,n){},155:function(e,t,n){e.exports=n.p+"static/cover-8d689d85a2354391166bede1b8031f5f.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-tsx-dd71adf5861d3f18e429.js.map