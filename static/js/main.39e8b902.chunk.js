(this["webpackJsonpreact-redux-hooks-jwt-auth"]=this["webpackJsonpreact-redux-hooks-jwt-auth"]||[]).push([[0],{103:function(e,t,a){},105:function(e,t,a){},243:function(e,t,a){},244:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(33),s=a.n(c),o=a(7),l=a(22),i=a(88),m=a(89),u=a(14),d=JSON.parse(localStorage.getItem("user")),p=d?{isLoggedIn:!0,user:d}:{isLoggedIn:!1,user:null},f={},g=Object(l.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"REGISTER_SUCCESS":case"REGISTER_FAIL":return Object(u.a)({},e,{isLoggedIn:!1});case"LOGIN_SUCCESS":return Object(u.a)({},e,{isLoggedIn:!0,user:n.user});case"LOGIN_FAIL":case"LOGOUT":return Object(u.a)({},e,{isLoggedIn:!1,user:null});default:return e}},message:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"SET_MESSAGE":return{message:n};case"CLEAR_MESSAGE":return{message:""};default:return e}}}),v=[m.a],h=Object(l.createStore)(g,Object(i.composeWithDevTools)(l.applyMiddleware.apply(void 0,v))),E=(a(103),a(3)),b=a(5),w=(a(104),a(105),a(36)),_=a.n(w),N=a(19),O=a.n(N),y=a(37),j=a.n(y),S=a(6),x=a.n(S);function C(){var e=JSON.parse(localStorage.getItem("user"));return e&&e.accessToken?{Authorization:"Bearer "+e.accessToken}:{}}var A="https://chat-app-spring-boot.herokuapp.com/",k=A+"api/auth/",L=function(e,t,a){return x.a.post(k+"signup",{username:e,email:t,password:a})},I=function(e,t){return x.a.post(k+"signin",{username:e,password:t}).then((function(e){return e.data.accessToken&&localStorage.setItem("user",JSON.stringify(e.data)),e.data}))},M=function(){localStorage.removeItem("user")},T=function(){return x.a.get(k+"all",{headers:C()})},R=function(e){return x.a.get(k+"user/".concat(e),{headers:C()})},Z=function(e,t){return x.a.post(k+"user/update-status",{userId:e,status:t})},F=a(17),B=function(e){if(!e)return r.a.createElement("div",{className:"alert alert-danger",role:"alert"},"This field is required!")},G=function(e){var t=Object(n.useRef)(),a=Object(n.useRef)(),c=Object(n.useState)(""),s=Object(E.a)(c,2),l=s[0],i=s[1],m=Object(n.useState)(""),u=Object(E.a)(m,2),d=u[0],p=u[1],f=Object(n.useState)(!1),g=Object(E.a)(f,2),v=g[0],h=g[1],w=Object(o.c)((function(e){return e.auth})).isLoggedIn,N=Object(o.c)((function(e){return e.message})).message,y=Object(o.b)();return w?r.a.createElement(b.a,{to:"/chat-app/chat"}):r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"card card-container"},r.a.createElement("img",{src:"//ssl.gstatic.com/accounts/ui/avatar_2x.png",alt:"profile-img",className:"profile-img-card"}),r.a.createElement(_.a,{onSubmit:function(n){n.preventDefault(),h(!0),t.current.validateAll(),0===a.current.context._errors.length?y(function(e,t){return function(a){return I(e,t).then((function(e){return a({type:"LOGIN_SUCCESS",payload:{user:e}}),Promise.resolve()}),(function(e){var t=e.response&&e.response.data&&e.response.data.message||e.message||e.toString();return a({type:"LOGIN_FAIL"}),a({type:"SET_MESSAGE",payload:t}),Promise.reject()}))}}(l,d)).then((function(){e.history.push("/chat-app/chat"),window.location.reload()})).catch((function(){h(!1)})):h(!1)},ref:t},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement(O.a,{type:"text",className:"form-control",name:"username",value:l,onChange:function(e){var t=e.target.value;i(t)},validations:[B]})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement(O.a,{type:"password",className:"form-control",name:"password",value:d,onChange:function(e){var t=e.target.value;p(t)},validations:[B]})),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{className:"btn btn-primary btn-block",disabled:v},v&&r.a.createElement("span",{className:"spinner-border spinner-border-sm"}),r.a.createElement("span",null,"Login"))),N&&r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"alert alert-danger",role:"alert"},N)),r.a.createElement(j.a,{style:{display:"none"},ref:a})),r.a.createElement("div",{className:"text-center"},r.a.createElement("p",null,"New member?"),r.a.createElement(F.a,{to:"/chat-app/register"},"Sign up now"))))},U=a(91),P=function(e){if(!e)return r.a.createElement("div",{className:"alert alert-danger",role:"alert"},"This field is required!")},q=function(e){if(!Object(U.isEmail)(e))return r.a.createElement("div",{className:"alert alert-danger",role:"alert"},"This is not a valid email.")},H=function(e){if(e.length<3||e.length>20)return r.a.createElement("div",{className:"alert alert-danger",role:"alert"},"The username must be between 3 and 20 characters.")},J=function(e){if(e.length<6||e.length>40)return r.a.createElement("div",{className:"alert alert-danger",role:"alert"},"The password must be between 6 and 40 characters.")},z=function(){var e=Object(n.useRef)(),t=Object(n.useRef)(),a=Object(n.useState)(""),c=Object(E.a)(a,2),s=c[0],l=c[1],i=Object(n.useState)(""),m=Object(E.a)(i,2),u=m[0],d=m[1],p=Object(n.useState)(""),f=Object(E.a)(p,2),g=f[0],v=f[1],h=Object(n.useState)(!1),b=Object(E.a)(h,2),w=b[0],N=b[1],y=Object(o.c)((function(e){return e.message})).message,S=Object(o.b)();return r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"card card-container"},r.a.createElement("img",{src:"//ssl.gstatic.com/accounts/ui/avatar_2x.png",alt:"profile-img",className:"profile-img-card"}),r.a.createElement(_.a,{onSubmit:function(a){a.preventDefault(),N(!1),e.current.validateAll(),0===t.current.context._errors.length&&S(function(e,t,a){return function(n){return L(e,t,a).then((function(e){return n({type:"REGISTER_SUCCESS"}),n({type:"SET_MESSAGE",payload:e.data.message}),Promise.resolve()}),(function(e){var t=e.response&&e.response.data&&e.response.data.message||e.message||e.toString();return n({type:"REGISTER_FAIL"}),n({type:"SET_MESSAGE",payload:t}),Promise.reject()}))}}(s,u,g)).then((function(){N(!0)})).catch((function(){N(!1)}))},ref:e},!w&&r.a.createElement("div",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement(O.a,{type:"text",className:"form-control",name:"username",value:s,onChange:function(e){var t=e.target.value;l(t)},validations:[P,H]})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement(O.a,{type:"text",className:"form-control",name:"email",value:u,onChange:function(e){var t=e.target.value;d(t)},validations:[P,q]})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement(O.a,{type:"password",className:"form-control",name:"password",value:g,onChange:function(e){var t=e.target.value;v(t)},validations:[P,J]})),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{className:"btn btn-primary btn-block"},"Sign Up"))),y&&r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:w?"alert alert-success":"alert alert-danger",role:"alert"},y)),r.a.createElement(j.a,{style:{display:"none"},ref:t})),r.a.createElement("div",{className:"text-center"},r.a.createElement("p",null,"Already have an account?"),r.a.createElement(F.a,{to:"/login"},"Login"))))},D=A+"api/test/",W=function(){return x.a.get(D+"all")},V=function(){return x.a.get(D+"user",{headers:C()})},Y=function(){var e=Object(n.useState)(""),t=Object(E.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){W().then((function(e){c(e.data)}),(function(e){var t=e.response&&e.response.data||e.message||e.toString();c(t)}))}),[]),r.a.createElement("div",{className:"container"},r.a.createElement("header",{className:"jumbotron"},r.a.createElement("h3",null,a)))},$=function(){var e=Object(o.c)((function(e){return e.auth})).user;return e?r.a.createElement("div",{className:"container"},r.a.createElement("header",{className:"jumbotron"},r.a.createElement("h3",null,r.a.createElement("strong",null,e.username)," Profile")),r.a.createElement("p",null,r.a.createElement("strong",null,"Token:")," ",e.accessToken.substring(0,20)," ..."," ",e.accessToken.substr(e.accessToken.length-20)),r.a.createElement("p",null,r.a.createElement("strong",null,"Id:")," ",e.id),r.a.createElement("p",null,r.a.createElement("strong",null,"Email:")," ",e.email),r.a.createElement("strong",null,"Authorities:"),r.a.createElement("ul",null,e.roles&&e.roles.map((function(e,t){return r.a.createElement("li",{key:t},e)})))):r.a.createElement(b.a,{to:"/login"})},K={on:function(e,t){document.addEventListener(e,(function(e){return t(e.detail)}))},dispatch:function(e,t){document.dispatchEvent(new CustomEvent(e,{detail:t}))},remove:function(e,t){document.removeEventListener(e,t)}},Q=a(29),X=a(48),ee=a.n(X),te=a(92),ae=A+"api/conversation/",ne=function(e){return x.a.post(ae+"add",e,{headers:C()})},re=function(e){return x.a.get(ae+"all/".concat(e),{headers:C()})},ce=function(e){return x.a.delete(ae+"delete/".concat(e),{headers:C()})},se=function(e){return x.a.get("https://chat-app-spring-boot.herokuapp.com/api/messages/"+"all-messages/".concat(e),{headers:C()})},oe=function(e){return x.a.get("https://chat-app-spring-boot.herokuapp.com/api/messages/"+"last-message/".concat(e),{headers:C()})};var le=function(e){var t=e.showAddContactForm;return r.a.createElement("div",{className:"add_contact--btn",onClick:t},"Add new contact ")};var ie=function(e){var t=e.currentChatContact,a=e.setCurrentChatContact,c=e.currentUser,s=e.setCurrentConversation,o=e.hideAddContactForm,l=e.contactForm,i=e.showAddContactForm,m=e.onlineUsersIds,d=Object(n.useRef)(),p=Object(n.useState)([]),f=Object(E.a)(p,2),g=f[0],v=f[1],h=Object(n.useState)([]),b=Object(E.a)(h,2),w=b[0],_=b[1],N=Object(n.useState)([]),O=Object(E.a)(N,2),y=O[0],j=O[1],S=Object(n.useState)([]),x=Object(E.a)(S,2),C=x[0],A=x[1],k=Object(n.useState)([]),L=Object(E.a)(k,2),I=L[0],M=L[1];Object(n.useEffect)((function(){0!==C.length&&M(C)}),[C]),Object(n.useEffect)((function(){var e,t=setTimeout((function(){var t=[];C.map((function(e){if("online"===e.status)m.includes(e.id),t.push(e);else if(m.includes(e.id)){Z(e.id,"online").then((function(e){return console.log(e)}));var a=Object(u.a)({},e);a.status="online",t.push(a)}else t.push(e)})),e=setTimeout((function(){M(t)}),1e3)}),3e3);return function(){clearTimeout(e),clearTimeout(t)}}),[m,C]),Object(n.useEffect)((function(){re(c.id).then((function(e){j(e.data)})).catch((function(e){return console.log(e)}))}),[c.id]),Object(n.useEffect)((function(){l&&T().then((function(e){_(e.data),v(e.data)})).catch((function(e){return console.log(e)}))}),[l]);var F=function(e){document.querySelector(".chat").classList.add("chat--show"),a(e);var t=e.conversationId;s(t),function(e,t){var a=new URL(window.location.href);a.searchParams.set(e,t),window.history.pushState({},"",a.toString())}("conversation",t)},B=function(){var e=Object(te.a)(ee.a.mark((function e(t,a,n){var r;return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r="one"===a?t.participantOneId:t.participantTwoId;try{R(r).then((function(e){oe(t.id).then((function(a){n.push(Object(u.a)({},e.data,{conversationId:t.id,lastMessage:a.data}))}))}))}catch(c){console.log("Could not retrieve information!")}case 2:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){if(0!==y.length){var e=[];y.map((function(t){t.participantOneId!==c.id?B(t,"one",e):B(t,"two",e)}));var t=setTimeout((function(){A(e)}),1e3);return function(){clearTimeout(t)}}}),[y,c.id]),r.a.createElement("div",{className:"col-12 col-md-4 col-lg-5 col-xl-3 px-0 messages-page__list-scroll"},r.a.createElement("div",{className:"messages-page__header mb-0 px-4 pt-3 pb-3"},r.a.createElement("span",{className:"messages-page__title"},l?r.a.createElement("div",{style:{cursor:"pointer"},onClick:o},r.a.createElement("svg",{style:{marginBottom:"3px"},xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"}))," Go Back"):c.username),r.a.createElement("div",{className:"messages-page__dark-mode-toogler",onClick:function(){var e=document.querySelector("body");e.classList.contains("dark-mode")?e.classList.remove("dark-mode"):e.classList.add("dark-mode")}},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"svg-icon svg-icon--dark-mode",viewBox:"0 0 49.7 49.7"},r.a.createElement("path",{d:"M25.4,49.7A25.6,25.6,0,0,1,1.3,32.3,25.6,25.6,0,0,1,17.3.1a2,2,0,0,1,2.1.5,2.2,2.2,0,0,1,.5,2.1,19.9,19.9,0,0,0-1.2,6.8A21,21,0,0,0,25,24.7,21,21,0,0,0,40.2,31h0a20.9,20.9,0,0,0,6.9-1.2,2,2,0,0,1,2.5,2.5,25.8,25.8,0,0,1-16,16.1A28.7,28.7,0,0,1,25.4,49.7ZM15,5.5A21.4,21.4,0,0,0,5.1,31.1,21.5,21.5,0,0,0,15.9,43.4a21.2,21.2,0,0,0,28.3-8.8,17.5,17.5,0,0,1-4,.4h0a24.9,24.9,0,0,1-18-7.5,24.9,24.9,0,0,1-7.5-18A26.9,26.9,0,0,1,15,5.5Z",fill:"#f68b3c"})))),r.a.createElement("div",{className:"messages-page__search mb-0 px-3 pb-3"},r.a.createElement("div",{className:"custom-form__search-wrapper"},r.a.createElement("input",{type:"text",className:"form-control custom-form",id:"search",placeholder:"".concat(l?"Search for a user...":"Find a user or a message\u2026"),autoComplete:"off",onChange:function(e){if(l&&""!==e.target.value){var t=w.filter((function(t){return t.username.toLowerCase().startsWith(e.target.value.toLowerCase())}));v(t)}""===e.target.value&&v(w)},ref:d}),r.a.createElement("button",{type:"submit",className:"custom-form__search-submit"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"svg-icon svg-icon--search",viewBox:"0 0 46.6 46.6"},r.a.createElement("path",{d:"M46.1,43.2l-9-8.9a20.9,20.9,0,1,0-2.8,2.8l8.9,9a1.9,1.9,0,0,0,1.4.5,2,2,0,0,0,1.5-.5A2.3,2.3,0,0,0,46.1,43.2ZM4,21a17,17,0,1,1,33.9,0A17.1,17.1,0,0,1,33,32.9h-.1A17,17,0,0,1,4,21Z",fill:"#f68b3c"}))))),r.a.createElement("ul",{className:"messages-page__list pb-5 px-1 px-md-3"},l?g.map((function(e){return r.a.createElement("li",{key:e.id,className:"\n                                            messaging-member messaging-member--new \n                                            ".concat("online"===e.status?"messaging-member--online":""," \n                                            ").concat(t&&t.id===e.id?"messaging-member--active":""),onClick:function(){return function(e){if(C.find((function(t){return t.id===e.id})))alert("Contact already exists!");else{var t={participantOneId:c.id,participantTwoId:e.id};ne(t).then((function(e){R(e.data.participantTwoId).then((function(t){var a=Object(u.a)({conversationId:e.data.id},t.data);A((function(e){return[].concat(Object(Q.a)(e),[a])}))})).catch((function(e){return console.log(e)}))})).catch((function(e){return console.log(e)})),o(),d.current.value=""}}(e)}},r.a.createElement("div",{className:"messaging-member__wrapper"},r.a.createElement("div",{className:"messaging-member__avatar"},r.a.createElement("img",{src:e.profilePicture?e.profilePicture:"/chat-app/avatar_placeholder.png",alt:e.username,loading:"lazy"}),r.a.createElement("div",{className:"user-status"})),r.a.createElement("span",{className:"messaging-member__name"},e.username),r.a.createElement("span",{className:"messaging-member__message"},"Click to add user to contact list!")))})):0===I.length?r.a.createElement("div",null,r.a.createElement("div",{style:{marginTop:"10px",textAlign:"center"}},"No conversations yet..."),r.a.createElement(le,{showAddContactForm:i})):I.map((function(e){var a,n;return r.a.createElement("li",{key:e.id,className:"\n                                                messaging-member \n                                                ".concat("online"===e.status?"messaging-member--online":""," \n                                                ").concat(t&&t.id===e.id?"messaging-member--active":""),onClick:function(){return F(e)}},r.a.createElement("div",{className:"messaging-member__wrapper"},r.a.createElement("div",{className:"messaging-member__avatar"},r.a.createElement("img",{src:e.profilePicture?e.profilePicture:"/chat-app/avatar_placeholder.png",alt:e.username,loading:"lazy"}),r.a.createElement("div",{className:"user-status"})),r.a.createElement("span",{className:"messaging-member__name"},e.username),r.a.createElement("span",{className:"messaging-member__message"},(null===e||void 0===e||null===(a=e.lastMessage)||void 0===a?void 0:a.body)?null===e||void 0===e||null===(n=e.lastMessage)||void 0===n?void 0:n.body:"No messages yet")))}))))},me=function(e){return new URL(window.location.href).searchParams.get(e)||""};var ue=function(e){var t=e.messages,a=e.setMessages,c=e.sendMessage,s=e.currentUser,o=e.currentChatContact,l=e.currentConversation,i=e.logOut,m=Object(n.useRef)();return Object(n.useEffect)((function(){se(l).then((function(e){return a(e.data)})).catch((function(e){return console.log(e)}))}),[l]),Object(n.useEffect)((function(){var e=document.querySelector(".chat");window.innerWidth<=764?e.classList.add("chat--mobile"):e.classList.remove("chat--mobile")}),[]),Object(n.useEffect)((function(){window.addEventListener("resize",(function(){var e=document.querySelector(".chat");window.innerWidth<=764?e.classList.add("chat--mobile"):e.classList.remove("chat--mobile")}))})),r.a.createElement("div",{className:"chat col-12 col-md-8 col-lg-7 col-xl-6 px-0 pl-md-1",style:{display:"block"}},r.a.createElement("div",{className:"chat__container"},r.a.createElement("div",{className:"chat__wrapper py-2 pt-mb-2 pb-md-3"},r.a.createElement("div",{className:"chat__messaging ".concat(o&&"online"===(null===o||void 0===o?void 0:o.status)&&"messaging-member--online "," pb-2 pb-md-2 pl-2 pl-md-4 pr-2")},r.a.createElement("div",{className:"chat__previous d-flex d-md-none",onClick:function(){document.querySelector(".chat").classList.remove("chat--show")}},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"svg-icon svg-icon--previous",viewBox:"0 0 45.5 30.4"},r.a.createElement("path",{d:"M43.5,13.1H7l9.7-9.6A2.1,2.1,0,1,0,13.8.6L.9,13.5h0L.3,14v.6c0,.1-.1.1-.1.2v.4a2,2,0,0,0,.6,1.5l.3.3L13.8,29.8a2.1,2.1,0,1,0,2.9-2.9L7,17.2H43.5a2,2,0,0,0,2-2A2.1,2.1,0,0,0,43.5,13.1Z",fill:"#f68b3c"}))),r.a.createElement("div",{className:"chat__notification d-flex d-md-none chat__notification--new"},r.a.createElement("span",null,"1")),r.a.createElement("div",{className:"chat__infos pl-2 pl-md-0"},r.a.createElement("div",{className:"chat-member__wrapper","data-online":"true"},r.a.createElement("div",{className:"chat-member__avatar"},r.a.createElement("img",{src:!(null===o||void 0===o?void 0:o.profilePicture)&&"/chat-app/avatar_placeholder.png",alt:o&&o.username,loading:"lazy"}),r.a.createElement("div",{className:"user-status user-status--large"})),r.a.createElement("div",{className:"chat-member__details"},r.a.createElement("span",{className:"chat-member__name"},o?o.username:"John Doe"),r.a.createElement("span",{className:"chat-member__status"},o?null===o||void 0===o?void 0:o.status:"Offline")))),r.a.createElement("div",{className:"chat__actions mr-2 "},r.a.createElement("ul",{className:"m-0"},r.a.createElement("li",null,r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"svg-icon",viewBox:"0 0 24 24",onClick:i},r.a.createElement("path",{d:"M10 2v2h12v16h-12v2h14v-20h-14zm0 7.408l2.963 2.592-2.963 2.592v-1.592h-8v-2h8v-1.592zm-2-4.408v4h-8v6h8v4l8-7-8-7z"}))),r.a.createElement("li",null,r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"svg-icon",viewBox:"0 0 48 48"},r.a.createElement("path",{d:"M38.4,48c-2.1,0-5.1-.8-9.5-3.2a62.9,62.9,0,0,1-14.6-11A61.7,61.7,0,0,1,3.2,19C-.9,11.8-.3,8.5.7,6.4A9.7,9.7,0,0,1,4.8,2,21.1,21.1,0,0,1,7.8.4h.3c1.8-.7,3-.3,4.9,1.5h.1a40.1,40.1,0,0,1,5.4,8.2c1.3,2.6,1.6,4.3-.2,6.9l-.5.6c-.8,1-.8,1.2-.8,1.6s1.9,3.4,5.2,6.7S28,30.8,28.8,31s.6,0,1.6-.8l.7-.4c2.5-1.9,4.2-1.6,6.8-.3A40.6,40.6,0,0,1,46.1,35h.1c1.8,1.9,2.2,3.1,1.5,4.9v.2h0a21.1,21.1,0,0,1-1.6,3,10,10,0,0,1-4.3,4.1A7.7,7.7,0,0,1,38.4,48ZM9.5,4.1H9.2L6.9,5.4H6.8A6.3,6.3,0,0,0,4.3,8.1c-.3.7-1.2,2.6,2.4,9A58.9,58.9,0,0,0,17.1,30.9,58.2,58.2,0,0,0,30.9,41.3c6.4,3.6,8.4,2.7,9.1,2.4a6.7,6.7,0,0,0,2.5-2.5.1.1,0,0,0,.1-.1c.5-.8.9-1.6,1.3-2.4v-.2l-.5-.6a35.4,35.4,0,0,0-7.3-4.8c-1.7-.8-1.8-.8-2.7-.1l-.6.4A5.3,5.3,0,0,1,28,34.9c-2.9-.6-7.4-4.9-8.7-6.2s-5.6-5.8-6.2-8.7.6-3.6,1.5-4.8l.4-.6c.7-.9.8-1-.1-2.7a35.4,35.4,0,0,0-4.8-7.3Z",fill:"#f68b3c"}))),r.a.createElement("li",null,r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"svg-icon",viewBox:"0 0 46.8 47.4"},r.a.createElement("path",{d:"M35.8,47.4H11a11,11,0,0,1-11-11V11.6A11,11,0,0,1,11,.6h8.8a2,2,0,1,1,0,4H11a7,7,0,0,0-7,7V36.4a7,7,0,0,0,7,7H35.8a7,7,0,0,0,7-7v-9a2,2,0,1,1,4,0v9A11,11,0,0,1,35.8,47.4Z",fill:"#f68b3c"}),r.a.createElement("path",{d:"M36.6,20.4A10.2,10.2,0,1,1,46.8,10.2,10.2,10.2,0,0,1,36.6,20.4ZM36.6,4a6.2,6.2,0,1,0,6.2,6.2A6.2,6.2,0,0,0,36.6,4Z",fill:"#f68b3c"}))),r.a.createElement("li",{className:"chat__details d-flex d-xl-none",onClick:function(){var e=document.querySelector(".user-profile");document.querySelector("body").clientWidth<=1199&&(e.classList.add("user-profile--large"),e.classList.add("user-profile--show"))}},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"svg-icon",viewBox:"0 0 42.2 11.1"},r.a.createElement("g",null,r.a.createElement("circle",{cx:"5.6",cy:"5.6",r:"5.6",fill:"#d87232"}),r.a.createElement("circle",{cx:"21.1",cy:"5.6",r:"5.6",fill:"#d87232"}),r.a.createElement("circle",{cx:"36.6",cy:"5.6",r:"5.6",fill:"#d87232"}))))))),r.a.createElement("div",{className:"chat__content pt-4 px-3"},r.a.createElement("ul",{className:"chat__list-messages"},o?t.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("div",{className:"chat__bubble ".concat(e.from===s.id?"chat__bubble--me":"chat__bubble--you")},e.body))})):r.a.createElement("p",{style:{textAlign:"center",marginTop:"30px"}},"Open a conversation"))),r.a.createElement("div",{className:"chat__send-container px-2 px-md-3 pt-1 pt-md-3"},r.a.createElement("form",{className:"custom-form__send-wrapper",onSubmit:function(e){e.preventDefault()}},r.a.createElement("input",{type:"text",className:"form-control custom-form",id:"message",placeholder:"Send a message \u2026",autoComplete:"off",ref:m}),r.a.createElement("div",{className:"custom-form__send-img"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"svg-icon svg-icon--send-img",viewBox:"0 0 45.7 45.7"},r.a.createElement("path",{d:"M6.6,45.7A6.7,6.7,0,0,1,0,39.1V6.6A6.7,6.7,0,0,1,6.6,0H39.1a6.7,6.7,0,0,1,6.6,6.6V39.1h0a6.7,6.7,0,0,1-6.6,6.6ZM39,4H6.6A2.6,2.6,0,0,0,4,6.6V39.1a2.6,2.6,0,0,0,2.6,2.6H39.1a2.6,2.6,0,0,0,2.6-2.6V6.6A2.7,2.7,0,0,0,39,4Zm4.7,35.1Zm-4.6-.4H6.6a2.1,2.1,0,0,1-1.8-1.1,2,2,0,0,1,.3-2.1l8.1-10.4a1.8,1.8,0,0,1,1.5-.8,2.4,2.4,0,0,1,1.6.7l4.2,5.1,6.6-8.5a1.8,1.8,0,0,1,1.6-.8,1.8,1.8,0,0,1,1.5.8L40.7,35.5a2,2,0,0,1,.1,2.1A1.8,1.8,0,0,1,39.1,38.7Zm-17.2-4H35.1l-6.5-8.6-6.5,8.4C22,34.6,22,34.7,21.9,34.7Zm-11.2,0H19l-4.2-5.1Z",fill:"#f68b3c"}))),r.a.createElement("div",{className:"custom-form__send-emoji"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"svg-icon svg-icon--send-emoji",viewBox:"0 0 46.2 46.2"},r.a.createElement("path",{d:"M23.1,0A23.1,23.1,0,1,0,46.2,23.1,23.1,23.1,0,0,0,23.1,0Zm0,41.6A18.5,18.5,0,1,1,41.6,23.1,18.5,18.5,0,0,1,23.1,41.6Zm8.1-20.8a3.5,3.5,0,0,0,3.5-3.5,3.5,3.5,0,0,0-7,0,3.5,3.5,0,0,0,3.5,3.5ZM15,20.8a3.5,3.5,0,0,0,3.5-3.5A3.5,3.5,0,0,0,15,13.9a3.4,3.4,0,0,0-3.4,3.4A3.5,3.5,0,0,0,15,20.8Zm8.1,15a12.6,12.6,0,0,0,10.5-5.5,1.7,1.7,0,0,0-1.3-2.6H14a1.7,1.7,0,0,0-1.4,2.6A12.9,12.9,0,0,0,23.1,35.8Z",fill:"#f68b3c"}))),r.a.createElement("button",{type:"submit",className:"custom-form__send-submit",onClick:function(){if(m.current.value&&o){var e=me("conversation");if(e){var t={conversationId:e,from:s.id,to:o.id,body:m.current.value};c(t),m.current.value=""}}}},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"svg-icon svg-icon--send",viewBox:"0 0 45.6 45.6"},r.a.createElement("g",null,r.a.createElement("path",{d:"M20.7,26.7a1.4,1.4,0,0,1-1.2-.6,1.6,1.6,0,0,1,0-2.4L42.6.5a1.8,1.8,0,0,1,2.5,0,1.8,1.8,0,0,1,0,2.5L21.9,26.1A1.6,1.6,0,0,1,20.7,26.7Z",fill:"#d87232"}),r.a.createElement("path",{d:"M29.1,45.6a1.8,1.8,0,0,1-1.6-1L19.4,26.2,1,18.1a1.9,1.9,0,0,1-1-1.7,1.8,1.8,0,0,1,1.2-1.6L43.3.1a1.7,1.7,0,0,1,1.8.4,1.7,1.7,0,0,1,.4,1.8L30.8,44.4a1.8,1.8,0,0,1-1.6,1.2ZM6.5,16.7l14.9,6.6a2,2,0,0,1,.9.9l6.6,14.9L41,4.6Z",fill:"#d87232"})))))))))};var de=function(e){var t,a=e.currentConversation,c=e.currentChatContact,s=e.showAddContactForm;return Object(n.useEffect)((function(){var e=document.querySelector(".user-profile");window.innerWidth<=1200?e.classList.add("user-profile--large"):e.classList.remove("user-profile--large")}),[]),Object(n.useEffect)((function(){window.addEventListener("resize",(function(){var e=document.querySelector(".user-profile");window.innerWidth<=1200?e.classList.add("user-profile--large"):e.classList.remove("user-profile--large")}))})),r.a.createElement("div",{className:"col-12 col-md-5 col-lg-4 col-xl-3 px-4 px-sm-5 px-lg-4 user-profile user",style:{display:"block"}},r.a.createElement("div",{className:"user-profile__close d-flex d-xl-none",onClick:function(){document.querySelector(".user-profile").classList.remove("user-profile--show")}},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"svg-icon",viewBox:"0 0 38.8 38.9"},r.a.createElement("g",null,r.a.createElement("path",{d:"M2,38.9a1.9,1.9,0,0,1-1.4-.5,2.1,2.1,0,0,1,0-2.9L35.4.6a1.9,1.9,0,0,1,2.8,0,1.9,1.9,0,0,1,0,2.8L3.4,38.4A1.9,1.9,0,0,1,2,38.9Z",fill:"#d87232"}),r.a.createElement("path",{d:"M36.8,38.9a1.9,1.9,0,0,1-1.4-.5L.6,3.4A1.9,1.9,0,0,1,.6.6,1.9,1.9,0,0,1,3.4.6L38.2,35.5a2.1,2.1,0,0,1,0,2.9A1.9,1.9,0,0,1,36.8,38.9Z",fill:"#d87232"})))),r.a.createElement("div",{className:"user-profile__wrapper"},r.a.createElement("div",{className:"user-profile__avatar"},r.a.createElement("img",{src:c&&c.profilePicture?c.profilePicture:"/chat-app/avatar_placeholder.png",alt:c?c.username:"image",loading:"lazy"})),r.a.createElement("div",{className:"user-profile__details mt-1"},r.a.createElement("span",{className:"user-profile__name"},c?c.username:"John Doe"),r.a.createElement("span",{className:"user-profile__phone"},"(025) 015-234-567"),r.a.createElement("span",{className:"user-profile__location"},"New York, United States")),r.a.createElement("div",{className:"user-profile__description"},r.a.createElement("p",null,"Fly me to the moon \ud83c\udf19 If you feel like your life is a routine, step back and take a deep breath.")),r.a.createElement("div",{className:"user-profile__learning mt-4"},r.a.createElement("span",{className:"user-profile__label"},"Social Medias"),r.a.createElement("ul",{className:"user-profile__tags user-profile__tags--primary mt-2"},c&&c.socialMedias?c.socialMedias.map((function(e){return r.a.createElement("li",{key:e.name},r.a.createElement("a",{href:e.link,target:"_blank"},e.name))})):r.a.createElement("li",null,r.a.createElement("a",{href:"",target:"_blank"},"No social media added :(")))),r.a.createElement("div",{className:"user-profile__hobbies"},r.a.createElement("span",{className:"user-profile__label"},"Activities"),r.a.createElement("ul",{className:"user-profile__tags user-profile__tags--secondary mt-2"},c&&(null===(t=c.activities)||void 0===t?void 0:t.map((function(e,t){return r.a.createElement("li",{key:t},e)}))))),r.a.createElement(le,{showAddContactForm:s}),c&&r.a.createElement("div",{style:{padding:"10px 30px",borderRadius:"20px",background:"tomato",color:"#fff",maxWidth:"200px",margin:"20px auto",cursor:"pointer"},onClick:function(){ce(a).then((function(e){window.location.reload(!1)})).catch((function(e){alert("Could not delete conversation")}))}},"Delete Contact")))},pe=a(93),fe=a.n(pe),ge=a(94),ve=a.n(ge);a(243);var he=function(){var e=Object(o.c)((function(e){return e.auth})).user,t=Object(b.g)(),a=Object(n.useState)("offline"),c=Object(E.a)(a,2),s=c[0],l=(c[1],{id:e.id,profilePicture:"https://randomuser.me/api/portraits/thumb/men/2.jpg",username:e.username,lastMessage:"Yes, I need your help with the project, it need it done by tomorrow \ud83d\ude2b",status:s,conversations:["stppvuuidjkel123"],description:"Fly me to the moon \ud83c\udf19 If you feel like your life is a routine, step back and take a deep breath.",socialMedias:[{name:"Instagram",link:"#"},{name:"Codepen",link:"#"},{name:"Linkedin",link:"#"}],activities:["Biking","Cooking","Travelling","Graphic Design"]}),i=Object(n.useState)(null),m=Object(E.a)(i,2),u=m[0],d=m[1],p=Object(n.useState)([]),f=Object(E.a)(p,2),g=f[0],v=f[1],h=Object(n.useState)(!1),w=Object(E.a)(h,2),_=w[0],N=w[1],O=Object(n.useState)([]),y=Object(E.a)(O,2),j=y[0],S=y[1],x=Object(n.useRef)(null),C=Object(n.useRef)(null),A=[],k=Object(n.useState)(null),L=Object(E.a)(k,2),I=L[0],M=L[1];if(Object(n.useEffect)((function(){return x.current=new fe.a("https://chat-app-spring-boot.herokuapp.com/ws-message"),C.current=ve.a.over(x.current),C.current.reconnect_delay=5e3,C.current.connect({},(function(t){var a={userId:e.id};C.current.send("/app/send/online-user",{},JSON.stringify(a)),Z(e.id,"online").then((function(e){return console.log(e)}));var n=C.current.subscribe("/topic/online-user",(function(e){S((function(t){return[].concat(Object(Q.a)(t),[e.body])}))})),r=C.current.subscribe("/topic/disconnect-user",(function(e){var t=j.filter((function(t){return t.id!==e.body}));S(t)})),c=C.current.subscribe("/topic/".concat(u),(function(e){var t=JSON.parse(e.body);v((function(e){return[].concat(Object(Q.a)(e),[t])}))}));A.push(n),A.push(r),A.push(c)})),function(){x.current.close()}}),[u]),window.onbeforeunload=function(){!function(){var t={userId:e.id};C.current.send("/app/send/disconnect-user",{},JSON.stringify(t)),C.current.disconnect((function(e){A&&A.map((function(e){return e.unsubscribe()}))}),{})}()},!e)return r.a.createElement(b.a,{to:"/login"});var T=function(){N(!0),document.querySelector(".user-profile").classList.remove("user-profile--show"),document.querySelector(".chat").classList.remove("chat--show")};return r.a.createElement("div",{className:"home-page__content messages-page"},r.a.createElement("div",{className:"container-fluid h-100"},r.a.createElement("div",{className:"row px-0 h-100"},r.a.createElement(ie,{currentChatContact:I,setCurrentChatContact:M,currentUser:l,setCurrentConversation:d,hideAddContactForm:function(){N(!1)},contactForm:_,showAddContactForm:T,onlineUsersIds:j}),r.a.createElement(ue,{sendMessage:function(e){C.current.send("/app/send/".concat(u),{},JSON.stringify(e))},currentUser:l,currentChatContact:I,messages:g,setMessages:v,currentConversation:u,logOut:function(){K.dispatch("logout"),t.push("/"),window.location.reload()}}),r.a.createElement(de,{currentChatContact:I,showAddContactForm:T,currentConversation:u}))))},Ee=function(){var e=Object(n.useState)(""),t=Object(E.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){V().then((function(e){c(!0),console.log(e.data)}),(function(e){var t=e.response&&e.response.data&&e.response.data.message||e.message||e.toString();c(!1),console.log(t),e.response&&401===e.response.status&&K.dispatch("logout")}))}),[]),r.a.createElement(r.a.Fragment,null,a&&r.a.createElement(he,null))},be=a(8),we=Object(be.a)(),_e=function(e){return we.listen((function(){var t=JSON.parse(localStorage.getItem("user"));t&&(1e3*function(e){try{return JSON.parse(atob(e.split(".")[1]))}catch(t){return null}}(t.accessToken).exp<Date.now()&&e.logOut())})),r.a.createElement("div",null)},Ne=function(){var e=Object(n.useState)(!1),t=Object(E.a)(e,2),a=(t[0],t[1]),c=Object(n.useState)(!1),s=Object(E.a)(c,2),l=(s[0],s[1]),i=Object(o.c)((function(e){return e.auth})).user,m=Object(o.b)();Object(n.useEffect)((function(){we.push("/chat-app/login")}),[]),Object(n.useEffect)((function(){we.listen((function(e){m({type:"CLEAR_MESSAGE"})}))}),[m]);var u=Object(n.useCallback)((function(){m((function(e){M(),e({type:"LOGOUT"})}))}),[m]);return Object(n.useEffect)((function(){return i?(a(i.roles.includes("ROLE_MODERATOR")),l(i.roles.includes("ROLE_ADMIN"))):(a(!1),l(!1)),K.on("logout",(function(){u()})),function(){K.remove("logout")}}),[i,u]),r.a.createElement(b.c,{history:we},r.a.createElement(b.d,null,r.a.createElement(b.b,{exact:!0,path:["/chat-app/","/chat-app/home"],component:Y}),r.a.createElement(b.b,{exact:!0,path:"/chat-app/login",component:G}),r.a.createElement(b.b,{exact:!0,path:"/chat-app/register",component:z}),r.a.createElement(b.b,{exact:!0,path:"/chat-app/profile",component:$}),r.a.createElement(b.b,{path:"/chat-app/chat",component:Ee})),r.a.createElement(_e,{logOut:u}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(o.a,{store:h},r.a.createElement(Ne,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},95:function(e,t,a){e.exports=a(244)}},[[95,1,2]]]);
//# sourceMappingURL=main.39e8b902.chunk.js.map