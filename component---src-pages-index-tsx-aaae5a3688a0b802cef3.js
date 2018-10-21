(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{138:function(e,t,n){"use strict";n.r(t);var r=n(7),o=n.n(r),i=n(0),a=n(139),l=n.n(a),c=n(150),u=n.n(c),s=n(140),d=n(143),m=n(149),p=n(174),f=n.n(p),h=(n(145),function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){return i.createElement(s.a,{theme:d.a},i.createElement("div",null,i.createElement(u.a,{title:"Gabriel García Seco - Desarrollo Web | Music & More",meta:[{name:"description",content:"Desarrollo Web | Music & More"},{name:"keywords",content:"React, Javascript, Desarrollo Web, CSS"}]}),i.createElement(m.a,{image:f.a},i.createElement(m.d,null),i.createElement(m.b,{title:"Gabriel García Seco",description:"Desarrollo Web | Music & More"}),i.createElement(m.e,null)),this.props.children,i.createElement(m.c,null)))},t}(i.PureComponent));n.d(t,"default",function(){return b}),n.d(t,"pageQuery",function(){return g});var b=function(e){function t(t,n){return e.call(this,t,n)||this}return o()(t,e),t.prototype.render=function(){return i.createElement(h,null,i.createElement("h1",null,"Hi people"),i.createElement(l.a,{to:"/page-2/"},"Go to page 2"))},t}(i.Component),g="3783718424"},141:function(e,t,n){var r;e.exports=(r=n(142))&&r.default||r},142:function(e,t,n){"use strict";n.r(t);n(34);var r=n(0),o=n.n(r),i=n(4),a=n.n(i),l=n(48),c=n(2),u=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return o.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:a.a.shape({pathname:a.a.string.isRequired}).isRequired},t.default=u},143:function(e,t,n){"use strict";t.a={colors:{white:"#ffffff"},fonts:{varela:'"Varela Round","Arial",Sans-Serif'}}},144:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return p});var r=n(0),o=n.n(r),i=n(4),a=n.n(i),l=n(139),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var u=n(141),s=n.n(u);n.d(t,"PageRenderer",function(){return s.a});var d=n(33);n.d(t,"parsePath",function(){return d.a});var m=o.a.createContext({}),p=function(e){return o.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:a.a.object,query:a.a.string.isRequired,render:a.a.func,children:a.a.func}},145:function(e,t,n){},149:function(e,t,n){"use strict";var r=n(0),o=n(140),i=o.b.section.withConfig({displayName:"Coverstyle__Container",componentId:"sc-1s3i0q9-0"})(["background:#101010;display:table;height:100vh;position:relative;overflow:hidden;width:100%;"]),a=o.b.div.withConfig({displayName:"Coverstyle__BackgroundImage",componentId:"sc-1s3i0q9-1"})(["background-image:url('","');background-size:cover;height:100%;position:absolute;opacity:0.2;overflow:hidden;transform:translate3d(0,0,0);width:100%;"],function(e){return e.url}),l=function(e){var t=e.children,n=e.image;return r.createElement(i,null,r.createElement(a,{url:n}),t)},c=n(139),u=n.n(c),s=o.b.section.withConfig({displayName:"CoverTitlestyle__Container",componentId:"sc-1ddiuob-0"})(["display:table-cell;max-width:56.25em;position:relative;vertical-align:middle;width:80%;",";"],function(e){return e.center?"\n    text-align: center;\n    width: inherit;\n  ":""}),d=o.b.h1.withConfig({displayName:"CoverTitlestyle__Title",componentId:"sc-1ddiuob-1"})(["color:",";font-size:2.75rem;font-weight:600;font-family:",";line-height:3.25rem;margin:10% 0 3.125rem;"],function(e){return e.theme.colors.white},function(e){return e.theme.fonts.varela}),m="#b3b3b3",p=o.b.p.withConfig({displayName:"CoverTitlestyle__Description",componentId:"sc-1ddiuob-2"})(["color:",";font-size:1.4375rem;font-family:",";letter-spacing:-0.0625em;line-height:2.375rem;margin:2.5rem 0 2.1875rem;max-width:30em;"," a{border-bottom:2px solid ",";color:",";}"],m,function(e){return e.theme.fonts.varela},function(e){return e.center?"\n    max-width: 100%;\n  ":""},m,m),f=o.b.hr.withConfig({displayName:"CoverTitlestyle__Separator",componentId:"sc-1ddiuob-3"})(["background:#5a5a5a;border:0;height:0.1875em;margin:0;width:10%;",";"],function(e){return e.center?"\n    display: inline-block;\n  ":""}),h=function(e){var t=e.title,n=e.description,o=e.separator,i=void 0===o||o,a=e.center,l=void 0!==a&&a;return r.createElement(s,{center:l},r.createElement(u.a,{to:"/"},r.createElement(d,{itemProp:"headline"},t)),r.createElement(p,{center:l,itemProp:"description"},n),i&&r.createElement(f,{center:l}))},b=n(153),g=o.b.footer.withConfig({displayName:"Footerstyle__Container",componentId:"sc-1o898pr-0"})(["background:#242526;display:flex;height:6.25em;padding:1.875em;"]),y=o.b.ul.withConfig({displayName:"Footerstyle__List",componentId:"sc-1o898pr-1"})(["align-items:center;display:flex;justify-content:flex-end;list-style:none;padding:0;width:100%;li{border-left:1px solid #4b4b4b;display:inline-block;}li:first-child{border:0;}"]),v=o.b.a.withConfig({displayName:"Footerstyle__IconLink",componentId:"sc-1o898pr-2"})(["color:",";font-size:0.875rem;padding:0 1.0625rem;text-decoration:none;&:hover{color:",";}"],function(e){return e.theme.colors.white},function(e){return e.hoverColor}),w=function(){return r.createElement(g,null,r.createElement(y,null,r.createElement("li",null,r.createElement(v,{hoverColor:"#55acee",href:"https://twitter.com/GGarciaSeco10/",target:"_blank"},r.createElement(b,{name:"twitter"}))),r.createElement("li",null,r.createElement(v,{hoverColor:"#0e76a8",href:"http://es.linkedin.com/in/gabrielgarciaseco",target:"_blank"},r.createElement(b,{name:"linkedin"}))),r.createElement("li",null,r.createElement(v,{hoverColor:"#999",href:"https://github.com/gabrielseco",target:"_blank"},r.createElement(b,{name:"github"})))))},E=n(7),C=n.n(E),_=o.b.header.withConfig({displayName:"Headerstyle__Container",componentId:"sc-12fuabv-0"})(["background:transparent;border:0;display:flex;height:4.6875em;justify-content:space-between;left:0;padding:2.1875em;position:absolute;top:0;width:100%;z-index:2;"]),k=Object(o.b)(u.a).withConfig({displayName:"Headerstyle__SuperLink",componentId:"sc-12fuabv-1"})(["color:",";font-family:",";font-size:1.125rem;font-weight:600;text-decoration:none;"],function(e){return e.theme.colors.white},function(e){return e.theme.fonts.varela}),x=o.b.nav.withConfig({displayName:"Headerstyle__Nav",componentId:"sc-12fuabv-2"})(["ul{list-style:none;margin:0;padding:0;}"]),I=function(e){function t(){return e.apply(this,arguments)||this}return C()(t,e),t.prototype.render=function(){return r.createElement(_,null,r.createElement(k,{to:"/"},"Gabriel García Seco"),r.createElement(x,null,r.createElement("ul",null,r.createElement("li",null,r.createElement(k,{to:"/contacto"},"Contacto")))))},t}(r.Component),S=o.b.div.withConfig({displayName:"MouseScrollstyle__Mouse",componentId:"iv2aag-0"})(["border:2px solid #888;border:2px solid rgba(255,255,255,0.27);border-radius:0.9375em;bottom:2.5em;cursor:pointer;position:absolute;right:2.5em;margin-left:-0.75em;height:2.25em;transition:border-color 0.2s ease-in;width:1.5625em;"]),N=o.b.div.withConfig({displayName:"MouseScrollstyle__Scroll",componentId:"iv2aag-1"})(["animation-duration:2s;animation-name:scroll;animation-iteration-count:infinite;border-radius:0.25em;display:block;margin:0.375em auto;width:0.1875em;height:0.375em;background:#b0b1b1;@keyframes scroll{0%{opacity:0;}10%{opacity:1;transform:translateY(0px);}100%{opacity:0;transform:translateY(10px);}}"]),G=function(){return r.createElement(S,null,r.createElement(N,null))};n.d(t,"a",function(){return l}),n.d(t,"b",function(){return h}),n.d(t,"c",function(){return w}),n.d(t,"d",function(){return I}),n.d(t,"e",function(){return G})},174:function(e,t,n){e.exports=n.p+"static/cover-8d689d85a2354391166bede1b8031f5f.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-tsx-aaae5a3688a0b802cef3.js.map