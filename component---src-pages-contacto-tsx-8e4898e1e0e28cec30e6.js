(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{138:function(e,t,n){"use strict";n.r(t);var r=n(7),o=n.n(r),i=n(0),a=n(154),c=n.n(a),l=n(143),m=n(152),u=n(151),s=n(204),d=n.n(s),f=(n(153),function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){return i.createElement(l.a,{theme:m.a},i.createElement("div",null,i.createElement(c.a,{title:"Gabriel García Seco - Desarrollo Web | Music & More",meta:[{name:"description",content:"Desarrollo Web | Music & More"},{name:"keywords",content:"React, Javascript, Desarrollo Web, CSS"}]}),i.createElement(u.d,{image:d.a},i.createElement(u.i,null),i.createElement(u.f,{title:"Contacto",description:"En este formulario puedes contactar conmigo",center:!0}),i.createElement(u.j,null)),i.createElement(u.h,null)))},t}(i.PureComponent));t.default=f},145:function(e,t,n){"use strict";n.d(t,"a",function(){return i});n(75),n(50),n(156),n(48);var r=n(143),o={giant:1200,large:900,medium:600,small:320},i=Object.keys(o).reduce(function(e,t){var n=o[t]/16;return e[t]=function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];return Object(r.b)(["@media (min-width:","em){",";}"],n,Object(r.b)(t))},e},{})},147:function(e,t,n){var r;e.exports=(r=n(150))&&r.default||r},149:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return p}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return f});var r=n(0),o=n.n(r),i=n(4),a=n.n(i),c=n(144),l=n.n(c);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var m=n(147),u=n.n(m);n.d(t,"PageRenderer",function(){return u.a});var s=n(34);n.d(t,"parsePath",function(){return s.a});var d=o.a.createContext({}),f=function(e){return o.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:a.a.object,query:a.a.string.isRequired,render:a.a.func,children:a.a.func}},150:function(e,t,n){"use strict";n.r(t);n(33);var r=n(0),o=n.n(r),i=n(4),a=n.n(i),c=n(51),l=n(2),m=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return o.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};m.propTypes={location:a.a.shape({pathname:a.a.string.isRequired}).isRequired},t.default=m},151:function(e,t,n){"use strict";var r,o=n(143);!function(e){e[e.SUCCESS=0]="SUCCESS",e[e.ERROR=1]="ERROR"}(r||(r={}));var i=function(e){var t;return(t={})[r.SUCCESS]={background:"rgb(43, 175, 43)",color:e.theme.colors.white},t[r.ERROR]={background:"rgb(239, 87, 52)",color:e.theme.colors.white},t},a=o.c.p.withConfig({displayName:"Alert",componentId:"sc-9p998w-0"})(["background:",";color:",";font-size:1.8rem;padding:2rem;text-align:center;"],function(e){return i(e)[e.type].background},function(e){return i(e)[e.type].color}),c=(n(49),n(76),n(0)),l=n(149),m=n(155),u=n(146),s=n.n(u),d=n(145);function f(){var e=s()(["\n    font-size: 1.9rem;\n    line-height: 4.5rem;\n    margin: 4rem 0;\n  "]);return f=function(){return e},e}function p(){var e=s()(["\n    font-size: 4.8rem;\n    line-height: 6.2rem;\n    margin: 4.5rem 0;\n  "]);return p=function(){return e},e}var h=o.c.article.withConfig({displayName:"BlogListstyle__Article",componentId:"sc-17ksmpo-0"})(["padding:9rem 0 5.8rem;&:nth-child(odd){background:#f9f9f9;}"]),g=o.c.div.withConfig({displayName:"BlogListstyle__Wrapper",componentId:"sc-17ksmpo-1"})(["margin:0 auto;max-width:90rem;width:90%;"]),b=o.c.ul.withConfig({displayName:"BlogListstyle__List",componentId:"sc-17ksmpo-2"})(["display:flex;justify-content:space-between;overflow:hidden;margin:0;padding:0;list-style:none;line-height:2.8rem;"]),y=o.c.a.withConfig({displayName:"BlogListstyle__DateTime",componentId:"sc-17ksmpo-3"})(["color:#b5b5b5;font-size:1.5rem;font-family:",";letter-spacing:-1px;padding:0 0.8rem;"],function(e){return e.theme.fonts.montserrat}),v=o.c.h2.withConfig({displayName:"BlogListstyle__Title",componentId:"sc-17ksmpo-4"})(["font-family:",";font-size:3.2rem;font-weight:600;letter-spacing:-1px;line-height:4.6rem;margin:3rem 0;"," a{color:#373737;&:hover{color:#5e5e5e;}}"],function(e){return e.theme.fonts.varela},d.a.medium(p())),w=o.c.p.withConfig({displayName:"BlogListstyle__Excerpt",componentId:"sc-17ksmpo-5"})(["color:#62646c;color:rgba(35,37,40,0.7);font-family:",";font-size:1.7rem;font-weight:400;overflow:hidden;line-height:2.8rem;margin:3rem 0;",";"],function(e){return e.theme.fonts.noto},d.a.medium(f())),E=function(e,t){var n=e.split("-"),r=n[0],o=n[1],i=n[2];return t({day:parseInt(i,10),month:function(e){return["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"][e-1]}(parseInt(o.slice(1),10)),year:parseInt(r,10)})},C=function(e){return e.day+" de "+e.month+" de "+e.year},_=function(e){return e.day+" "+e.month+" "+e.year},k=function(e){var t=e.item;return c.createElement(h,null,c.createElement(g,null,c.createElement(b,null,c.createElement("li",null,c.createElement(fe,null,t.tags[0])),c.createElement("li",null,c.createElement(y,{href:"#"},c.createElement(m.a,{query:"(max-width: 768px)"},function(e){return e?c.createElement("span",null,E(t.date,_)):c.createElement("span",null,E(t.date,C))})))),c.createElement(v,null,c.createElement(l.Link,{to:"blog/"+t.path},t.title)),c.createElement(w,null,t.excerpt," [...]")))},S=function(e){return e.items.map(function(e,t){return c.createElement(k,{key:t,item:e.node.frontmatter})})},x=o.c.section.withConfig({displayName:"Coverstyle__Container",componentId:"sc-1s3i0q9-0"})(["background:#101010;display:table;height:100vh;position:relative;overflow:hidden;width:100%;"]),I=o.c.div.withConfig({displayName:"Coverstyle__BackgroundImage",componentId:"sc-1s3i0q9-1"})(["background-image:url('","');background-size:cover;height:100%;position:absolute;opacity:0.2;overflow:hidden;transform:translate3d(0,0,0);width:100%;"],function(e){return e.url}),N=function(e){var t=e.children,n=e.image;return c.createElement(x,{id:"cover-container"},c.createElement(I,{url:n}),t)},R=o.c.section.withConfig({displayName:"CoverContainer",componentId:"sc-1jr8nd1-0"})(["display:table-cell;max-width:90rem;position:relative;vertical-align:middle;text-align:",";width:",";"],function(e){return e.center?"center":"inherit"},function(e){return e.center?"inherit":"80%"}),q=n(144),j=n.n(q);function z(){var e=s()(["\n    font-size: 4.4rem;\n  "]);return z=function(){return e},e}var T=o.c.h1.withConfig({displayName:"CoverTitlestyle__Title",componentId:"sc-1ddiuob-0"})(["color:",";font-size:4rem;font-weight:600;font-family:",";line-height:5rem;margin:10% 0 5rem;",";"],function(e){return e.theme.colors.white},function(e){return e.theme.fonts.varela},d.a.medium(z())),F="#b3b3b3",L=o.c.p.withConfig({displayName:"CoverTitlestyle__Description",componentId:"sc-1ddiuob-1"})(["color:",";font-size:2.3rem;font-family:",";letter-spacing:-0.1rem;line-height:3.8rem;margin:4rem 0 3.5rem;max-width:",";a{border-bottom:2px solid ",";color:",";}"],F,function(e){return e.theme.fonts.varela},function(e){return e.center?"100%":"48rem"},F,F),O=function(e){var t=e.title,n=e.description,r=e.separator,o=void 0===r||r,i=e.center,a=void 0!==i&&i;return c.createElement(R,{center:a},c.createElement(j.a,{to:"/"},c.createElement(T,{itemProp:"headline"},t)),c.createElement(L,{center:a,itemProp:"description"},n),o&&c.createElement(de,null))},G=n(157),M=o.c.footer.withConfig({displayName:"Footerstyle__Container",componentId:"sc-1o898pr-0"})(["background:#242526;display:flex;height:10rem;padding:3rem;"]),B=o.c.ul.withConfig({displayName:"Footerstyle__List",componentId:"sc-1o898pr-1"})(["align-items:center;display:flex;justify-content:flex-end;list-style:none;padding:0;width:100%;li{border-left:1px solid #4b4b4b;display:inline-block;}li:first-child{border:0;}"]),A=o.c.a.withConfig({displayName:"Footerstyle__IconLink",componentId:"sc-1o898pr-2"})(["color:",";font-size:1.4rem;padding:0 1.7rem;text-decoration:none;&:hover{color:",";}"],function(e){return e.theme.colors.white},function(e){return e.hoverColor}),D=function(){return c.createElement(M,null,c.createElement(B,null,c.createElement("li",null,c.createElement(A,{hoverColor:"#55acee",href:"https://twitter.com/GGarciaSeco10/",target:"_blank"},c.createElement(G,{name:"twitter"}))),c.createElement("li",null,c.createElement(A,{hoverColor:"#0e76a8",href:"http://es.linkedin.com/in/gabrielgarciaseco",target:"_blank"},c.createElement(G,{name:"linkedin"}))),c.createElement("li",null,c.createElement(A,{hoverColor:"#999",href:"https://github.com/gabrielseco",target:"_blank"},c.createElement(G,{name:"github"})))))},P=(n(33),n(158),n(7)),H=n.n(P),U=n(159),J=n.n(U);function W(){var e=s()(["\n    width: 15rem;\n  "]);return W=function(){return e},e}function Q(){var e=s()(["\n    text-align: left;\n  "]);return Q=function(){return e},e}var Y=o.c.form.withConfig({displayName:"FormContactstyle__Form",componentId:"sc-1de3vgb-0"})(["margin:8rem auto;max-width:90rem;width:90%;"]),V=o.c.div.withConfig({displayName:"FormContactstyle__FormGroup",componentId:"sc-1de3vgb-1"})(["+ div{margin-top:4rem;}"]),K=o.c.label.withConfig({displayName:"FormContactstyle__FormLabel",componentId:"sc-1de3vgb-2"})(["color:rgba(35,37,40,0.7);display:block;font-weight:400;font-size:1.9rem;font-family:",";line-height:3.5rem;margin-bottom:1rem;"],function(e){return e.theme.fonts.noto}),X=o.c.input.withConfig({displayName:"FormContactstyle__FormControl",componentId:"sc-1de3vgb-3"})(["border:0.2rem solid #f5f5f5;border-radius:0.3rem;background:#f5f5f5;font-family:",";font-size:1.4rem;padding:1.4rem 1.8rem;transition:border-color 0.2s ease-in;width:100%;&:focus{border-color:#cdcdcd;outline:none;}"],function(e){return e.theme.fonts.montserrat}),Z=o.c.div.withConfig({displayName:"FormContactstyle__ButtonContainer",componentId:"sc-1de3vgb-4"})(["display:block;text-align:center;",";"],d.a.medium(Q())),$=o.c.button.withConfig({displayName:"FormContactstyle__Button",componentId:"sc-1de3vgb-5"})(["background:#b3b3b3;border:0.2rem solid #f5f5f5;border-radius:3px;color:#fff;cursor:pointer;font-size:1.8rem;padding:1rem 2rem;transition:border-color 0.2s ease-in;width:100%;"," &:focus{border-color:#cdcdcd;outline:none;}"],d.a.medium(W()));function ee(e,t){var n=document.scrollingElement||document.documentElement,r=n.scrollTop,o=e-r,i=0;!function e(){var a=te(i+=20,r,o,t);n.scrollTop=a,i<t&&setTimeout(e,20)}()}var te=function(e,t,n,r){return(e/=r/2)<1?n/2*e*e+t:-n/2*(--e*(e-2)-1)+t},ne=function(){return"https://ggseco-backend.herokuapp.com/api/contacts"},re=function(e){function t(t){var n;return(n=e.call(this,t)||this).onSubmit=function(e){e.preventDefault(),J.a.post(ne(),n.state.form).then(function(){n.setState({success:!0}),ee(document.querySelector("#form-contact").clientHeight-75,1e3)}).catch(function(){n.setState({error:!0}),ee(document.querySelector("#form-contact").clientHeight-75,1e3)})},n.onChange=function(e){var t,r=((t={})[e.currentTarget.name]=e.currentTarget.value,t);n.setState(function(e){return Object.assign({},e,{form:Object.assign({},e.form,r)})})},n.state={form:{name:"",email:"",subject:"",body:""},error:!1,success:!1},n}return H()(t,e),t.prototype.render=function(){return c.createElement(Y,{id:"form-contact",onSubmit:this.onSubmit},this.state.error&&c.createElement(a,{type:r.ERROR},"Rellena todos los campos necesarios"),this.state.success&&c.createElement(a,{type:r.SUCCESS},"Mensaje recibido"),c.createElement(V,null,c.createElement(K,null,"Nombre (Requerido)"),c.createElement(X,{name:"name",onChange:this.onChange})),c.createElement(V,null,c.createElement(K,null,"Email (Requerido)"),c.createElement(X,{name:"email",onChange:this.onChange})),c.createElement(V,null,c.createElement(K,null,"Asunto (Requerido)"),c.createElement(X,{name:"subject",onChange:this.onChange})),c.createElement(V,null,c.createElement(K,null,"Descripción (Requerido)"),c.createElement(X,{name:"body",onChange:this.onChange,cols:"40",rows:"10",as:"textarea"})),c.createElement(Z,null,c.createElement($,{type:"submit"},"Enviar")))},t}(c.Component);function oe(){var e=s()(["\n    padding: 3.5rem;\n  "]);return oe=function(){return e},e}var ie=o.c.header.withConfig({displayName:"Headerstyle__Container",componentId:"sc-12fuabv-0"})(["background:transparent;border:0;display:flex;height:7.5rem;justify-content:space-between;left:0;padding:2.5rem 1rem;position:absolute;top:0;width:100%;z-index:2;",";"],d.a.medium(oe())),ae=Object(o.c)(j.a).withConfig({displayName:"Headerstyle__SuperLink",componentId:"sc-12fuabv-1"})(["color:",";font-family:",";font-size:1.8rem;font-weight:600;text-decoration:none;"],function(e){return e.theme.colors.white},function(e){return e.theme.fonts.varela}),ce=o.c.nav.withConfig({displayName:"Headerstyle__Nav",componentId:"sc-12fuabv-2"})(["ul{list-style:none;margin:0;padding:0;}"]),le=function(e){function t(){return e.apply(this,arguments)||this}return H()(t,e),t.prototype.render=function(){return c.createElement(ie,null,c.createElement(ae,{to:"/"},"Gabriel García Seco"),c.createElement(ce,null,c.createElement("ul",null,c.createElement("li",null,c.createElement(ae,{to:"/contacto"},"Contacto")))))},t}(c.Component),me=o.c.div.withConfig({displayName:"MouseScrollstyle__Mouse",componentId:"iv2aag-0"})(["border:2px solid #888;border:2px solid rgba(255,255,255,0.27);border-radius:1.5rem;bottom:4rem;cursor:pointer;position:absolute;right:4rem;margin-left:-1.2rem;height:3.6rem;transition:border-color 0.2s ease-in;width:2.5rem;"]),ue=o.c.div.withConfig({displayName:"MouseScrollstyle__Scroll",componentId:"iv2aag-1"})(["animation-duration:2s;animation-name:scroll;animation-iteration-count:infinite;border-radius:0.4rem;display:block;margin:0.6rem auto;width:0.3rem;height:0.6rem;background:#b0b1b1;@keyframes scroll{0%{opacity:0;}10%{opacity:1;transform:translateY(0px);}100%{opacity:0;transform:translateY(10px);}}"]),se=function(){return c.createElement(me,{onClick:function(){ee(document.querySelector("#cover-container").clientHeight,2e3)}},c.createElement(ue,null))},de=o.c.hr.withConfig({displayName:"Separator",componentId:"tde201-0"})(["background:#5a5a5a;border:0;display:inline-block;height:0.3rem;margin:0;width:10%;"]),fe=o.c.span.withConfig({displayName:"Tag",componentId:"hq3r5b-0"})(["border-radius:0.3rem;background:#0085c3;color:",";display:inline-block;font-size:1.2rem;font-family:",";padding:0.3rem 1.5rem;text-transform:uppercase;"],function(e){return e.theme.colors.white},function(e){return e.theme.fonts.montserrat});n.d(t,"a",function(){return a}),n.d(t,"b",function(){return r}),n.d(t,"c",function(){return S}),n.d(t,"d",function(){return N}),n.d(t,"e",function(){return R}),n.d(t,"f",function(){return O}),n.d(t,"g",function(){return D}),n.d(t,"h",function(){return re}),n.d(t,"i",function(){return le}),n.d(t,"j",function(){return se}),n.d(t,"k",function(){return de}),n.d(t,"l",function(){return fe})},152:function(e,t,n){"use strict";t.a={colors:{white:"#ffffff"},fonts:{montserrat:'"Montserrat","Arial",Sans-Serif',noto:'"Noto Serif","Times New Roman",Serif',varela:'"Varela Round","Arial",Sans-Serif'}}},153:function(e,t,n){},204:function(e,t,n){e.exports=n.p+"static/contact-a05f79908736d31093ed2967bc7031cd.jpg"}}]);
//# sourceMappingURL=component---src-pages-contacto-tsx-8e4898e1e0e28cec30e6.js.map