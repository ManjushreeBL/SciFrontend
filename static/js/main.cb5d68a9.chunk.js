(this["webpackJsonpbmi-frontend"]=this["webpackJsonpbmi-frontend"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c=n(1),i=n.n(c),s=n(8),a=n.n(s),o=(n(14),n(2)),r=n(3),h=n(5),j=n(4),b=n.p+"static/media/sci-logo.7ff660d0.PNG",l=(n(7),n(0)),u=(c.Component,n(9)),d=function(t){Object(h.a)(n,t);var e=Object(j.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Welcome to SCI world"}),Object(l.jsx)(O,{})]})}}]),n}(i.a.Component),O=function(t){Object(h.a)(n,t);var e=Object(j.a)(n);function n(t){var c;return Object(o.a)(this,n),(c=e.call(this,t)).onSubmit=function(t){t.preventDefault();var e=encodeURIComponent(c.state.height),n=encodeURIComponent(c.state.weight);fetch("https://localhost:8080/api/v1/?foo=".concat(e,"&bar=").concat(n)),c.setState({height:"",weight:""})},c.state={height:"",weight:""},c}return Object(r.a)(n,[{key:"onChange",value:function(t){this.setState(Object(u.a)({},t.target.name,t.target.value))}},{key:"render",value:function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)("form",{id:"main-login",action:this.props.action,method:this.props.method,onSubmit:this.onSubmit,children:[Object(l.jsx)("h2",{children:"Check your BMI "}),Object(l.jsxs)("label",{children:[Object(l.jsx)("span",{class:"text",children:"height"}),Object(l.jsx)("input",{name:"height",value:this.state.height}),Object(l.jsx)("br",{})]}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsxs)("label",{children:[Object(l.jsx)("span",{class:"text",children:"weight"}),Object(l.jsx)("input",{name:"weight",value:this.state.weight}),Object(l.jsx)("br",{})]}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("div",{class:"align-right",children:Object(l.jsx)("button",{children:"Submit "})})]})})}}]),n}(i.a.Component),p=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,s=e.getLCP,a=e.getTTFB;n(t),c(t),i(t),s(t),a(t)}))};a.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(d,{})}),document.getElementById("root")),p()},7:function(t,e,n){}},[[16,1,2]]]);
//# sourceMappingURL=main.cb5d68a9.chunk.js.map