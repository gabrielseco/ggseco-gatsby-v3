(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{134:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(152),i=n.n(a),o=n(139),l=n(143),c=n(151);n(147);t.default=function(e){var t=e.children;return r.createElement(o.a,{theme:l.a},r.createElement("div",null,r.createElement(i.a,{title:"No se encontró la página | Gabriel García Seco",meta:[{name:"description",content:"Desarrollo Web | Music & More"},{name:"keywords",content:"React, Javascript, Desarrollo Web, CSS"}]}),r.createElement(c.a,null,r.createElement(c.d,null),r.createElement(c.b,{title:"Error 404",description:"La página que estás buscando puede que ya no exista",separator:!1})),t))}},140:function(e,t,n){var r;e.exports=(r=n(141))&&r.default||r},141:function(e,t,n){"use strict";n.r(t);n(34);var r=n(0),a=n.n(r),i=n(4),o=n.n(i),l=n(50),c=n(2),s=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return a.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},142:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return p}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return f});var r=n(0),a=n.n(r),i=n(4),o=n.n(i),l=n(138),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var s=n(140),u=n.n(s);n.d(t,"PageRenderer",function(){return u.a});var d=n(33);n.d(t,"parsePath",function(){return d.a});var m=a.a.createContext({}),f=function(e){return a.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},143:function(e,t,n){"use strict";t.a={colors:{white:"#ffffff"},fonts:{varela:'"Varela Round","Arial",Sans-Serif'}}},144:function(e,t,n){e.exports=n.p+"static/cover-8d689d85a2354391166bede1b8031f5f.jpg"},147:function(e,t,n){},151:function(e,t,n){"use strict";var r=n(0),a=n(139),i=a.b.section.withConfig({displayName:"Coverstyle__Container",componentId:"sc-1s3i0q9-0"})(["background:#101010;display:table;height:100vh;position:relative;overflow:hidden;width:100%;"]),o=a.b.div.withConfig({displayName:"Coverstyle__BackgroundImage",componentId:"sc-1s3i0q9-1"})(["background-image:url('","');background-size:cover;height:100%;position:absolute;opacity:0.2;overflow:hidden;transform:translate3d(0,0,0);width:100%;"],function(e){return e.url}),l=n(144),c=n.n(l),s=function(e){var t=e.children;return r.createElement(i,null,r.createElement(o,{url:c.a}),t)},u=n(138),d=n.n(u),m=a.b.section.withConfig({displayName:"CoverTitlestyle__Container",componentId:"sc-1ddiuob-0"})(["display:table-cell;max-width:56.25em;position:relative;vertical-align:middle;width:80%;"]),f=a.b.h1.withConfig({displayName:"CoverTitlestyle__Title",componentId:"sc-1ddiuob-1"})(["color:",";font-size:2.75rem;font-weight:600;font-family:",";line-height:3.25rem;margin:10% 0 3.125rem;"],function(e){return e.theme.colors.white},function(e){return e.theme.fonts.varela}),p=a.b.p.withConfig({displayName:"CoverTitlestyle__Description",componentId:"sc-1ddiuob-2"})(["color:#b3b3b3;font-size:1.4375rem;font-family:",";letter-spacing:-0.0625em;line-height:2.375rem;margin:2.5rem 0 2.1875rem;max-width:30em;"],function(e){return e.theme.fonts.varela}),h=a.b.hr.withConfig({displayName:"CoverTitlestyle__Separator",componentId:"sc-1ddiuob-3"})(["background:#5a5a5a;border:0;height:0.1875em;margin:0;width:10%;"]),b=function(e){var t=e.title,n=e.description,a=e.separator,i=void 0===a||a;return r.createElement(m,null,r.createElement(d.a,{to:"/"},r.createElement(f,{itemProp:"headline"},t)),r.createElement(p,{itemProp:"description"},n),i&&r.createElement(h,null))},g=n(154),y=a.b.footer.withConfig({displayName:"Footerstyle__Container",componentId:"sc-1o898pr-0"})(["background:#242526;display:flex;padding:1.875em;"]),v=a.b.ul.withConfig({displayName:"Footerstyle__List",componentId:"sc-1o898pr-1"})(["display:flex;justify-content:flex-end;list-style:none;width:100%;li{display:inline-block;padding:0 2em;}li a{color:#fff;text-decoration:none;}"]),w=function(){return r.createElement(y,null,r.createElement(v,null,r.createElement("li",null,r.createElement("a",{href:"https://twitter.com/GGarciaSeco10/",target:"_blank"},r.createElement(g,{name:"twitter"}))),r.createElement("li",null,r.createElement("a",{href:"http://es.linkedin.com/in/gabrielgarciaseco",target:"_blank"},r.createElement(g,{name:"linkedin"}))),r.createElement("li",null,r.createElement("a",{href:"https://github.com/gabrielseco",target:"_blank"},r.createElement(g,{name:"github"})))))},E=n(7),C=n.n(E),_=a.b.header.withConfig({displayName:"Headerstyle__Container",componentId:"sc-12fuabv-0"})(["background:transparent;border:0;height:4.6875em;left:0;padding:2.1875em;position:absolute;top:0;width:100%;"]),k=Object(a.b)(d.a).withConfig({displayName:"Headerstyle__SuperLink",componentId:"sc-12fuabv-1"})(["color:",";font-family:",";font-size:1.125rem;font-weight:600;text-decoration:none;"],function(e){return e.theme.colors.white},function(e){return e.theme.fonts.varela}),x=function(e){function t(){return e.apply(this,arguments)||this}return C()(t,e),t.prototype.render=function(){return r.createElement(_,null,r.createElement(k,{to:"/"},"Gabriel García Seco"))},t}(r.Component),S=a.b.div.withConfig({displayName:"MouseScrollstyle__Mouse",componentId:"iv2aag-0"})(["border:2px solid #888;border:2px solid rgba(255,255,255,0.27);border-radius:0.9375em;bottom:2.5em;cursor:pointer;position:absolute;right:2.5em;margin-left:-0.75em;height:2.25em;transition:border-color 0.2s ease-in;width:1.5625em;"]),q=a.b.div.withConfig({displayName:"MouseScrollstyle__Scroll",componentId:"iv2aag-1"})(["animation-duration:2s;animation-name:scroll;animation-iteration-count:infinite;border-radius:0.25em;display:block;margin:0.375em auto;width:0.1875em;height:0.375em;background:#b0b1b1;@keyframes scroll{0%{opacity:0;}10%{opacity:1;transform:translateY(0px);}100%{opacity:0;transform:translateY(10px);}}"]),I=function(){return r.createElement(S,null,r.createElement(q,null))};n.d(t,"a",function(){return s}),n.d(t,"b",function(){return b}),n.d(t,"c",function(){return w}),n.d(t,"d",function(){return x}),n.d(t,"e",function(){return I})}}]);
//# sourceMappingURL=component---src-pages-404-tsx-1c40ada0c5c0e06d9ed8.js.map