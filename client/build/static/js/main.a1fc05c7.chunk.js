(this.webpackJsonpdeployreactapp=this.webpackJsonpdeployreactapp||[]).push([[0],{16:function(e,a,n){e.exports=n.p+"static/media/_Logo.37cd571e.png"},19:function(e,a,n){e.exports=n(49)},24:function(e,a,n){},43:function(e,a,n){},44:function(e,a,n){},45:function(e,a,n){},46:function(e,a,n){},47:function(e,a,n){},48:function(e,a,n){},49:function(e,a,n){"use strict";n.r(a);var t=n(0),l=n.n(t),i=n(13),r=n.n(i),s=(n(24),n(14)),o=n(15),c=n(2),m=n(18),u=n(17),g=n(3),h=n.n(g),p=function(e){return h.a.post("/api/registerUser",e)},d=function(e){return h.a.post("/api/login",e)},v=function(e){Object(m.a)(n,e);var a=Object(u.a)(n);function n(e){var t;return Object(s.a)(this,n),(t=a.call(this,e)).onChangeUsername=t.onChangeUsername.bind(Object(c.a)(t)),t.onChangePasswordSignup=t.onChangePasswordSignup.bind(Object(c.a)(t)),t.onChangePasswordLogin=t.onChangePasswordLogin.bind(Object(c.a)(t)),t.onChangeEmailSignup=t.onChangeEmailSignup.bind(Object(c.a)(t)),t.onChangeEmailLogin=t.onChangeEmailLogin.bind(Object(c.a)(t)),t.userSignup=t.userSignup.bind(Object(c.a)(t)),t.userLogin=t.userLogin.bind(Object(c.a)(t)),t.state={username:"",passwordSignup:"",passwordLogin:"",emailSignup:"",emailLogin:""},t}return Object(o.a)(n,[{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onChangePasswordSignup",value:function(e){this.setState({passwordSignup:e.target.value})}},{key:"onChangePasswordLogin",value:function(e){this.setState({passwordLogin:e.target.value})}},{key:"onChangeEmailSignup",value:function(e){this.setState({emailSignup:e.target.value})}},{key:"onChangeEmailLogin",value:function(e){this.setState({emailLogin:e.target.value})}},{key:"userSignup",value:function(e){e.preventDefault();var a={username:this.state.username,password:this.state.passwordSignup,email:this.state.emailSignup};p(a).then((function(e){console.log(e.data)})).catch((function(e){return console.log(e)})),this.setState({username:"",passwordSignup:"",emailSignup:""})}},{key:"userLogin",value:function(e){e.preventDefault();var a={email:this.state.emailLogin,password:this.state.passwordLogin};console.log(a),d(a).then((function(e){console.log(e.data)})).catch((function(e){return console.log(e)})),this.setState({emailLogin:"",passwordLogin:""})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("input",{onChange:this.onChangeUsername,name:"username",value:this.state.username}),l.a.createElement("input",{onChange:this.onChangePasswordSignup,name:"passwordSignup",value:this.state.passwordSignup}),l.a.createElement("input",{onChange:this.onChangeEmailSignup,name:"emailSignup",value:this.state.emailSignup}),l.a.createElement("button",{name:"userSignup",onClick:this.userSignup},"Sign Up"),l.a.createElement("input",{onChange:this.onChangeEmailLogin,name:"emailLogin",value:this.state.emailLogin}),l.a.createElement("input",{onChange:this.onChangePasswordLogin,name:"passwordLogin",value:this.state.passwordLogin}),l.a.createElement("button",{name:"userLogin",onClick:this.userLogin},"Login"))}}]),n}(t.Component),E=(n(43),function(){return l.a.createElement("div",{className:"header-wrapper"},l.a.createElement("div",{className:"main-info"},l.a.createElement("h1",null,"Welcome User"),l.a.createElement("h2",null,"Thank you for choosing Lead Force! We are a start up company that focuses on helping business's grow ")))});n(44);var b=function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light "},l.a.createElement("div",{className:"container"},l.a.createElement("a",{className:"navbar-brand",href:"#"},"Lead Force"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav ms-auto"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"#"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"#"},"View")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"#"},"Sign Up"))))))},f=(n(45),n(16)),w=n.n(f);var N=function(){return l.a.createElement("div",{className:"container-1"},l.a.createElement("div",{id:"about"}),l.a.createElement("div",{className:"about"},l.a.createElement("img",{src:w.a,className:"profile-pic"})))},S=(n(46),function(){return l.a.createElement("div",{className:"header-wrapper"},l.a.createElement("div",{className:"contact-box"},l.a.createElement("h1",null,"Contact Us"),l.a.createElement("div",{className:"line-break1"}),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-6"},l.a.createElement("div",{className:"social-icons"},l.a.createElement("a",{href:"https://github.com/austinwoo123",target:"_blank"},l.a.createElement("i",{className:"fab fa-github-square"})),l.a.createElement("a",{href:"https://www.linkedin.com/in/awoo95/",target:"_blank"},l.a.createElement("i",{className:"fab fa-linkedin"})),l.a.createElement("a",{href:"mailto:awoo004@ucr.edu",target:"_blank"},l.a.createElement("i",{className:"fas fa-envelope"}))),l.a.createElement("div",{className:"line-break2"}),l.a.createElement("h3",null,"   Austin Woo   ")),l.a.createElement("div",{className:"col-6"},l.a.createElement("div",{className:"social-icons"},l.a.createElement("a",{href:"https://github.com/vincent-nguyen8931",target:"_blank"},l.a.createElement("i",{className:"fab fa-github-square"})),l.a.createElement("a",{href:"https://www.linkedin.com/in/vincent-nguyen-74226a107/",target:"_blank"},l.a.createElement("i",{className:"fab fa-linkedin"})),l.a.createElement("a",{href:"mailto:vincent.nguyen8931@gmail.com",target:"_blank"},l.a.createElement("i",{className:"fas fa-envelope"}))),l.a.createElement("div",{className:"line-break2"}),l.a.createElement("h3",null," Vincent Nguyen ")))))});n(47);var L=function(){return l.a.createElement("nav",{className:"navbar1 navbar-light bg-light"},l.a.createElement("span",{className:"navbar-brand1 mb-0 h1"},"LeadForce "))};n(48);var k=function(){return l.a.createElement("div",{className:"container-2"},l.a.createElement("div",{id:"about"}),l.a.createElement("div",{className:"about"},l.a.createElement("h1",{class:"about-Name"},"Lead Force"),l.a.createElement("div",{className:"line-break"}),l.a.createElement("h2",{className:"LogoName"},"| Lead Management System |"),l.a.createElement("p",null,"We are Lead Force!")))};var C=function(){return l.a.createElement("div",null,l.a.createElement(v,null),l.a.createElement(b,null),l.a.createElement(E,null),l.a.createElement(N,null),l.a.createElement(k,null),l.a.createElement(S,null),l.a.createElement(L,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.a1fc05c7.chunk.js.map