(this.webpackJsonpdeployreactapp=this.webpackJsonpdeployreactapp||[]).push([[0],{31:function(e,a,n){e.exports=n(68)},36:function(e,a,n){},37:function(e,a,n){},38:function(e,a,n){},44:function(e,a,n){},45:function(e,a,n){e.exports=n.p+"static/media/_Logo.37cd571e.png"},46:function(e,a,n){},47:function(e,a,n){},48:function(e,a,n){},49:function(e,a,n){},68:function(e,a,n){"use strict";n.r(a);var t=n(0),l=n.n(t),r=n(29),i=n.n(r),s=(n(36),n(37),function(){return l.a.createElement("div",{className:"header-wrapper1"},l.a.createElement("div",{className:"main-info1"},l.a.createElement("h1",null,"Welcome User"),l.a.createElement("h2",null,"Thank you for choosing Lead Force! We are a start up company that focuses on helping business's grow ")))}),o=n(8);n(38);var c=function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light "},l.a.createElement("div",{className:"container"},l.a.createElement("a",{className:"navbar-brand",href:"#"},"Lead Force"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav ms-auto"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(o.b,{className:"nav-link",to:"/"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(o.b,{className:"nav-link",to:"/login"},"Sign Up"))))))};n(44),n(45);var m=function(){return l.a.createElement("div",{className:"container-1"},l.a.createElement("div",{id:"about"}),l.a.createElement("div",{className:"about"},l.a.createElement("h1",{class:"about-Name"},"Lead Force"),l.a.createElement("h2",{className:"Lead-Header"},"| Lead Management System |")))},u=(n(46),function(){return l.a.createElement("div",{className:"header-wrapper"},l.a.createElement("div",{className:"contact-box"},l.a.createElement("h1",null,"Contact Us"),l.a.createElement("div",{className:"line-break1"}),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-6"},l.a.createElement("div",{className:"social-icons"},l.a.createElement("a",{href:"https://github.com/austinwoo123",target:"_blank"},l.a.createElement("i",{className:"fab fa-github-square"})),l.a.createElement("a",{href:"https://www.linkedin.com/in/awoo95/",target:"_blank"},l.a.createElement("i",{className:"fab fa-linkedin"})),l.a.createElement("a",{href:"mailto:awoo004@ucr.edu",target:"_blank"},l.a.createElement("i",{className:"fas fa-envelope"}))),l.a.createElement("div",{className:"line-break2"}),l.a.createElement("h3",null,"   Austin Woo   ")),l.a.createElement("div",{className:"col-6"},l.a.createElement("div",{className:"social-icons"},l.a.createElement("a",{href:"https://github.com/vincent-nguyen8931",target:"_blank"},l.a.createElement("i",{className:"fab fa-github-square"})),l.a.createElement("a",{href:"https://www.linkedin.com/in/vincent-nguyen-74226a107/",target:"_blank"},l.a.createElement("i",{className:"fab fa-linkedin"})),l.a.createElement("a",{href:"mailto:vincent.nguyen8931@gmail.com",target:"_blank"},l.a.createElement("i",{className:"fas fa-envelope"}))),l.a.createElement("div",{className:"line-break2"}),l.a.createElement("h3",null," Vincent Nguyen ")))))});n(47);var g=function(){return l.a.createElement("nav",{className:"navbar fixed-bottom navbar-light bg-light"},l.a.createElement("a",{classname:"navbar-brand",href:"#"},"Fixed bottom"))};n(48);var d=function(){return l.a.createElement("div",{className:"container-2"},l.a.createElement("div",{id:"about"}),l.a.createElement("div",{className:"about"},l.a.createElement("h1",{class:"about-Name"},"WHY CHOOSE LEAD FORCE?"),l.a.createElement("p",null,"Our goal is to help companies find new customers and to help organize customer and propspect information"),l.a.createElement("div",{className:"line-break"}),l.a.createElement("h1",{class:"description"},"WHAT ARE LEADS?"),l.a.createElement("p",null)))};function p(){return l.a.createElement("div",null,l.a.createElement(c,null),l.a.createElement(s,null),l.a.createElement(m,null),l.a.createElement(d,null),l.a.createElement(u,null),l.a.createElement(g,null))}var h=n(11),E=n(12),v=n(7),b=n(14),f=n(13),N=(n(49),n(18)),w=n.n(N),S=function(e){return w.a.post("/api/registerUser",e)},C=function(e){return w.a.post("/api/login",e)},L=function(e){Object(b.a)(n,e);var a=Object(f.a)(n);function n(){return Object(h.a)(this,n),a.apply(this,arguments)}return Object(E.a)(n,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(c,null),l.a.createElement(g,null))}}]),n}(t.Component),k=function(e){Object(b.a)(n,e);var a=Object(f.a)(n);function n(e){var t;return Object(h.a)(this,n),(t=a.call(this,e)).onChangeUsername=t.onChangeUsername.bind(Object(v.a)(t)),t.onChangePasswordSignup=t.onChangePasswordSignup.bind(Object(v.a)(t)),t.onChangePasswordLogin=t.onChangePasswordLogin.bind(Object(v.a)(t)),t.onChangeEmailSignup=t.onChangeEmailSignup.bind(Object(v.a)(t)),t.onChangeEmailLogin=t.onChangeEmailLogin.bind(Object(v.a)(t)),t.userSignup=t.userSignup.bind(Object(v.a)(t)),t.userLogin=t.userLogin.bind(Object(v.a)(t)),t.state={username:"",passwordSignup:"",passwordLogin:"",emailSignup:"",emailLogin:""},t}return Object(E.a)(n,[{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onChangePasswordSignup",value:function(e){this.setState({passwordSignup:e.target.value})}},{key:"onChangePasswordLogin",value:function(e){this.setState({passwordLogin:e.target.value})}},{key:"onChangeEmailSignup",value:function(e){this.setState({emailSignup:e.target.value})}},{key:"onChangeEmailLogin",value:function(e){this.setState({emailLogin:e.target.value})}},{key:"userSignup",value:function(e){e.preventDefault();var a={username:this.state.username,password:this.state.passwordSignup,email:this.state.emailSignup};S(a).then((function(e){console.log(e.data)})).catch((function(e){return console.log(e)})),this.setState({username:"",passwordSignup:"",emailSignup:""})}},{key:"userLogin",value:function(e){e.preventDefault();var a={email:this.state.emailLogin,password:this.state.passwordLogin};C(a).then((function(e){console.log(e.data)})).catch((function(e){return console.log(e)})),this.setState({emailLogin:"",passwordLogin:""})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(c,null),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-6"},l.a.createElement("div",{className:"div-login"},l.a.createElement("h2",{className:"signup"},"SignUp"),l.a.createElement("div",{className:"linebreak"}),l.a.createElement("input",{placeholder:"Username",onChange:this.onChangeUsername,name:"username",value:this.state.username}),l.a.createElement("input",{placeholder:"Password",onChange:this.onChangePasswordSignup,name:"passwordSignup",value:this.state.passwordSignup}),l.a.createElement("input",{placeholder:"Email Address",onChange:this.onChangeEmailSignup,name:"emailSignup",value:this.state.emailSignup}),l.a.createElement("button",{name:"userSignup",onClick:this.userSignup},"Sign Up"))),l.a.createElement("div",{className:"col-6"},l.a.createElement("div",{className:"div-login1"},l.a.createElement("h2",{className:"login"},"Login"),l.a.createElement("div",{className:"linebreak"}),l.a.createElement("input",{placeholder:"Email Address",onChange:this.onChangeEmailLogin,name:"emailLogin",value:this.state.emailLogin}),l.a.createElement("input",{placeholder:"Password",onChange:this.onChangePasswordLogin,name:"passwordLogin",value:this.state.passwordLogin}),l.a.createElement(o.b,{to:"/member",commponent:L},l.a.createElement("button",{name:"userLogin",onClick:this.userLogin},"Login")))),l.a.createElement("div",{className:"logo"})))}}]),n}(t.Component),y=n(1);var O=function(){return l.a.createElement(o.a,null,l.a.createElement("div",null,l.a.createElement(y.c,null,l.a.createElement(y.a,{exact:!0,path:"/login",component:k}),l.a.createElement(y.a,{exact:!0,path:"/",component:p}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.6ad68a72.chunk.js.map