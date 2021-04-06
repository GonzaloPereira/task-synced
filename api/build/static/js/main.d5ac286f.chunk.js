(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{45:function(e,t,n){},51:function(e,t,n){},77:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(28),s=n.n(a),i=(n(77),n(15)),u=n(11),o=n(3),j=n.n(o),l=n(5),b=n(4),d=(n(45),n(115)),p=n(114);function f(){return(f=Object(l.a)(j.a.mark((function e(t,n,r){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,password:n,name:r})},e.abrupt("return",fetch("/api/register",c));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(){return(m=Object(l.a)(j.a.mark((function e(t,n){var r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,password:n})},e.abrupt("return",fetch("/api/login",r));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(){return(O=Object(l.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("/api/logout"));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(){return x.apply(this,arguments)}function x(){return(x=Object(l.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("/api/isAuthenticated").then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return y.apply(this,arguments)}function y(){return(y=Object(l.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("/api/users/".concat(t)).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var k=n(0),w=c.a.createContext();function g(){return Object(r.useContext)(w)}function N(e){var t=e.children,n=Object(r.useState)(),c=Object(b.a)(n,2),a=c[0],s=c[1],i=Object(r.useState)(!0),u=Object(b.a)(i,2),o=u[0],d=u[1],p=Object(r.useRef)(!1);function x(){return v.apply(this,arguments)}function v(){return(v=Object(l.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:t=e.sent,s(t),d(!1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(){OneSignal.push(Object(l.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:t=e.sent,OneSignal.setExternalUserId(String(t._id));case 4:case"end":return e.stop()}}),e)}))))}Object(r.useEffect)((function(){return p.current=!0,function(){p.current=!1}})),Object(r.useEffect)(Object(l.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=function(){s(null)},!p.current){e.next=4;break}return e.next=4,x();case 4:return e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)}))),[]);var g={currentUser:a,refreshUser:x,login:function(e,t){return function(e,t){return m.apply(this,arguments)}(e,t).then((function(){return x()})).then((function(){return y()}))},signup:function(e,t,n){return function(e,t,n){return f.apply(this,arguments)}(e,t,n).then((function(){return x()})).then((function(){return y()}))},logout:function(){return function(){return O.apply(this,arguments)}().then((function(){return x()}))}};return Object(k.jsx)(w.Provider,{value:g,children:!o&&t})}function T(){var e=Object(r.useRef)(""),t=Object(r.useRef)(""),n=Object(r.useRef)(""),c=Object(r.useRef)(""),a=g(),s=a.signup,u=(a.refreshUser,Object(r.useState)("")),o=Object(b.a)(u,2),f=o[0],m=o[1],O=Object(r.useState)(!1),h=Object(b.a)(O,2),x=h[0],v=h[1],y=Object(r.useRef)(!1);function w(){return(w=Object(l.a)(j.a.mark((function r(a){return j.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(a.preventDefault(),t.current.value===n.current.value){r.next=3;break}return r.abrupt("return",m("Passwords do not match"));case 3:if(e.current.value&&t.current.value&&n.current.value&&c.current.value){r.next=5;break}return r.abrupt("return",m("Empty field not allowed"));case 5:if(!(c.current.value&&c.current.value.length>20)){r.next=7;break}return r.abrupt("return",m("Name too long"));case 7:return r.prev=7,m(""),v(!0),r.next=12,s(e.current.value,t.current.value,c.current.value);case 12:if(r.sent.ok){r.next=15;break}throw new Error;case 15:r.next=20;break;case 17:r.prev=17,r.t0=r.catch(7),m("Failed to create an account");case 20:y.current&&v(!1);case 21:case"end":return r.stop()}}),r,null,[[7,17]])})))).apply(this,arguments)}return Object(r.useEffect)((function(){return y.current=!0,function(){y.current=!1}})),Object(k.jsxs)("div",{className:"form",children:[Object(k.jsx)("h2",{children:"Sign Up"}),Object(k.jsxs)("form",{onSubmit:function(e){return w.apply(this,arguments)},children:[Object(k.jsxs)("label",{htmlFor:"email",children:[Object(k.jsx)("p",{children:"Email"}),Object(k.jsx)("input",{type:"email",id:"email",ref:e})]}),Object(k.jsxs)("label",{htmlFor:"password",children:[Object(k.jsx)("p",{children:"Password"}),Object(k.jsx)("input",{type:"password",ref:t,id:"password"})]}),Object(k.jsxs)("label",{htmlFor:"passwordConfirm",children:[Object(k.jsx)("p",{children:"Confirm password"}),Object(k.jsx)("input",{type:"password",ref:n,id:"passwordConfirm"})]}),Object(k.jsxs)("label",{htmlFor:"name",children:[Object(k.jsx)("p",{children:"Name"}),Object(k.jsx)("input",{type:"text",ref:c,id:"name"})]}),Object(k.jsx)("button",{disabled:x,type:"submit",children:"Sign Up"}),Object(k.jsxs)("p",{children:["Already have and account?"," ",Object(k.jsx)(i.b,{to:"/login",style:{color:"#00adb5"},children:"Log In"})]})]}),x&&Object(k.jsx)(d.a,{style:{backgroundColor:"#0000"}}),f&&Object(k.jsx)(p.a,{severity:"error",children:f})]})}function S(){var e=Object(r.useRef)(),t=Object(r.useRef)(),n=g().login,c=Object(r.useState)(""),a=Object(b.a)(c,2),s=a[0],u=a[1],o=Object(r.useState)(!1),f=Object(b.a)(o,2),m=f[0],O=f[1],h=Object(r.useRef)(!1);function x(){return(x=Object(l.a)(j.a.mark((function r(c){return j.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(c.preventDefault(),e.current.value&&t.current.value){r.next=3;break}return r.abrupt("return",u("Empty field not allowed"));case 3:return r.prev=3,u(""),O(!0),r.next=8,n(e.current.value,t.current.value);case 8:if(r.sent.ok){r.next=11;break}throw new Error;case 11:r.next=16;break;case 13:r.prev=13,r.t0=r.catch(3),u("Failed to login");case 16:h.current&&O(!1);case 17:case"end":return r.stop()}}),r,null,[[3,13]])})))).apply(this,arguments)}return Object(r.useEffect)((function(){return h.current=!0,function(){h.current=!1}})),Object(k.jsxs)("div",{className:"form",children:[Object(k.jsx)("h2",{children:"Log In"}),Object(k.jsxs)("form",{onSubmit:function(e){return x.apply(this,arguments)},children:[Object(k.jsxs)("label",{htmlFor:"email",children:[Object(k.jsx)("p",{children:"Email"}),Object(k.jsx)("input",{type:"email",ref:e,id:"email"})]}),Object(k.jsxs)("label",{htmlFor:"password",children:[Object(k.jsx)("p",{children:"Password"}),Object(k.jsx)("input",{type:"password",ref:t,id:"password"})]}),Object(k.jsx)("button",{type:"submit",children:"Log In"}),Object(k.jsxs)("p",{children:["Don't have and account yet?"," ",Object(k.jsx)(i.b,{to:"/signup",style:{color:"#00adb5"},children:"Sign up"})]})]}),m&&Object(k.jsx)(d.a,{style:{backgroundColor:"#0000"}}),s&&Object(k.jsx)(p.a,{severity:"error",children:s})]})}function C(){return Object(k.jsxs)("div",{className:"join form",children:[Object(k.jsx)("h1",{children:"Join the community!"}),Object(k.jsx)(i.b,{to:"/login",style:{textDecoration:"none"},children:Object(k.jsx)("button",{type:"button",children:"Log In"})}),Object(k.jsx)(i.b,{to:"/signup",style:{textDecoration:"none"},children:Object(k.jsx)("button",{type:"button",children:"Sign up"})})]})}var E=n(7),I=n(43);var R=function(e){var t=e.component,n=Object(I.a)(e,["component"]),r=g().currentUser;return Object(k.jsx)(u.b,Object(E.a)(Object(E.a)({},n),{},{render:function(e){return r._id?Object(k.jsx)(t,Object(E.a)({},e)):Object(k.jsx)(u.a,{to:"/join"})}}))},A=(n(85),n(86),n(56)),U=n.n(A),_=(n(87),n(48)),F=n.n(_),D=n(55),M=n.n(D),P=n(53),J=n.n(P),L=n(54),W=n.n(L),z=n(26),H=n.n(z);function B(e,t){return G.apply(this,arguments)}function G(){return(G=Object(l.a)(j.a.mark((function e(t,n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("/api/users/".concat(t,"/notifications/").concat(n),{method:"DELETE"}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Y(e){switch(e){case 1:return Object(k.jsx)(J.a,{className:"notification-icon blue-icon"});case 2:return Object(k.jsx)(W.a,{className:"notification-icon red-icon"});case 3:return Object(k.jsx)(M.a,{className:"notification-icon blue-icon"});default:return Object(k.jsx)(F.a,{className:"notification-icon"})}}function q(e){var t=e.notification,n=e.refreshUser,c=e.userId,a=t._id,s=t.name,i=t.description,u=t.date,o=t.type,d=Object(r.useRef)(""),p=Object(r.useRef)(""),f=Object(r.useState)(1),m=Object(b.a)(f,2),O=m[0],h=m[1];function x(){return(x=Object(l.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:p.current=setInterval((function(){h((function(e){return e-.05}))}),50),d.current=setTimeout(Object(l.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B(c,a);case 2:n();case 3:case"end":return e.stop()}}),e)}))),1e3);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.useEffect)((function(){return function(){p.current&&clearInterval(p.current),d.current&&clearTimeout(d.current)}}),[]),Object(k.jsxs)("div",{className:"notification",style:{opacity:O},children:[Y(o),Object(k.jsx)("h5",{className:"notification-name",children:s}),Object(k.jsxs)("p",{className:"notification-description",children:[" ",i]}),Object(k.jsx)("p",{className:"notification-date",children:H()(new Date(u)).fromNow()}),Object(k.jsx)(F.a,{className:"notification-done blue-icon",onClick:function(){return x.apply(this,arguments)}})]})}function K(e){var t=e.userId,n=e.refreshUser,r=e.notifications;return Object(k.jsx)("div",{className:"notification-container",children:r.map((function(e,r){return Object(k.jsxs)("div",{children:[0!==r&&Object(k.jsx)("hr",{className:"teams-separator-line"}),Object(k.jsx)(q,{className:"notification",notification:e,userId:t,refreshUser:n})]},e._id)}))})}function Q(e){var t=e.count;return Object(k.jsx)("div",{className:"notification-count",children:Object(k.jsx)("p",{children:t})})}var V=function(){var e=Object(u.g)().url,t=Object(r.useReducer)((function(e){return!e}),!1),n=Object(b.a)(t,2),c=n[0],a=n[1],s=g(),o=s.currentUser,j=s.refreshUser,l=o.notifications,d=l.length;return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)("div",{className:"header",children:[Object(k.jsx)("h1",{className:"links",children:"Task Synced"}),Object(k.jsx)(i.b,{to:"".concat(e,"/schedule"),className:"schedule-link links material-ui-link",children:Object(k.jsx)("h2",{children:"Schedule"})}),Object(k.jsx)(i.b,{to:"".concat(e,"/teams"),className:"teams-link  links material-ui-link",children:Object(k.jsx)("h2",{children:"Teams"})}),Object(k.jsx)(i.b,{to:"".concat(e,"/profile"),className:"profile-link links material-ui-link",children:Object(k.jsx)("h2",{children:"Profile"})}),Object(k.jsxs)("div",{className:"notification-open-icon",children:[Object(k.jsx)(U.a,{onClick:a,className:"links "}),d>0&&Object(k.jsx)(Q,{count:d})]})]}),c&&Object(k.jsx)(K,{userId:o._id,refreshUser:j,notifications:l})]})};n(90);var X=function(){var e=(new Date).getFullYear();return Object(k.jsx)("div",{className:"footer",children:Object(k.jsxs)("p",{children:["Copyright \xa9 ",e," Gonzalo Pereira"]})})},Z=(n(91),n(92),n(93),n(60)),$=n.n(Z),ee=n(59),te=n.n(ee),ne=n(61),re=n.n(ne),ce=n(62),ae=n.n(ce),se=n(57),ie=n.n(se),ue=n(58),oe=n.n(ue),je=n(40),le=n.n(je);function be(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}function de(){var e=Object(r.useState)(be()),t=Object(b.a)(e,2),n=t[0],c=t[1];return Object(r.useEffect)((function(){function e(){c(be())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),n}function pe(e){var t=e.task,n=e.editable,c=e.deleteTask,a=e.userIsAdmin,s=t._id,i=t.name,u=t.description,o=t.date,d=de().width,p=Object(r.useState)(),f=Object(b.a)(p,2),m=f[0],O=f[1],h=Object(r.useState)(!1),x=Object(b.a)(h,2),v=x[0],y=x[1],w=Object(r.useReducer)((function(e){return!e}),!1),g=Object(b.a)(w,2),N=g[0],T=g[1],S=Object(r.useReducer)((function(e){return!e}),!1),C=Object(b.a)(S,2),I=C[0],R=C[1],A=n&&d>700||d<=700&&N&&n,U=o?new Date(o):"",_=U<new Date;H.a.locale("es-us"),Object(r.useEffect)((function(){O(n?d<=700?{gridTemplateColumns:N?"50px 5fr 40px":"50px 5fr ".concat(U?"40px minmax(120px,1fr)":""),gridTemplateRows:N?"minmax(2.5rem, auto) 2rem  auto":"minmax(2.5rem, auto) auto"}:{gridTemplateColumns:"50px 5fr ".concat(U?"50px 1fr":""," 50px"),gridTemplateRows:"minmax(2.5rem, auto) auto"}:{gridTemplateColumns:"50px 5fr ".concat(U?"30px minmax(120px,1fr)":"")})}),[d,N]);var F=Object(r.useRef)(""),D=Object(r.useRef)(""),M=Object(r.useState)(1),P=Object(b.a)(M,2),J=P[0],L=P[1];return Object(r.useEffect)((function(){return function(){D.current&&clearInterval(D.current),F.current&&clearTimeout(F.current)}}),[]),Object(k.jsxs)("div",{className:"task",onMouseOver:function(){return y(!0)},onMouseOut:function(){return y(!1)},onClick:function(){return T(!0)},style:Object(E.a)(Object(E.a)({},m),{},{opacity:J}),children:[v||N?Object(k.jsxs)(k.Fragment,{children:[N?Object(k.jsx)(ie.a,{}):Object(k.jsx)(oe.a,{})," "]}):Object(k.jsxs)(k.Fragment,{children:[I?Object(k.jsx)(te.a,{}):Object(k.jsx)($.a,{})," "]}),Object(k.jsx)("h4",{style:{gridColumn:N&&n&&d<=700?"2/7":"2/3"},children:i}),(U||n&&N&&d<=700)&&Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(re.a,{}),Object(k.jsx)("h5",{style:{color:_?"#e84545":"white"},children:H()(U).calendar(null,{sameElse:"dddd MMMM h:mm A"})})]}),A&&a&&Object(k.jsx)(k.Fragment,{children:I?Object(k.jsx)(le.a,{className:"task-button red-icon",onMouseOver:function(e){return e.stopPropagation()},onMouseOut:function(e){return e.stopPropagation()},onClick:function(){var e=Object(l.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.stopPropagation(),R(),clearTimeout(F.current),clearInterval(D.current),L(1);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}):Object(k.jsx)(ae.a,{className:"task-button blue-icon",onMouseOver:function(e){return e.stopPropagation()},onMouseOut:function(e){return e.stopPropagation()},onClick:function(){var e=Object(l.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.stopPropagation(),R(),D.current=setInterval((function(){L((function(e){return e-.025}))}),50),F.current=setTimeout((function(){c(s)}),2e3);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()})}),N&&Object(k.jsx)("div",{className:"task-description",style:{color:u?"white":"gray"},children:null!==u&&void 0!==u?u:"No description"})]})}function fe(e){return me.apply(this,arguments)}function me(){return(me=Object(l.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("/api/teams/".concat(t)).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Oe(e,t){return he.apply(this,arguments)}function he(){return(he=Object(l.a)(j.a.mark((function e(t,n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fe(t);case 2:if(!e.sent.members.find((function(e){return String(e._id)===n._id}))){e.next=5;break}throw new Error("Member already in team");case 5:return e.abrupt("return",fetch("/api/teams/".concat(t,"/members"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({_id:n._id,name:n.name,isAdmin:0})}));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function xe(e,t){return ve.apply(this,arguments)}function ve(){return(ve=Object(l.a)(j.a.mark((function e(t,n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("/api/teams/".concat(t,"/members/").concat(n),{method:"DELETE"}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ye(e,t){return ke.apply(this,arguments)}function ke(){return(ke=Object(l.a)(j.a.mark((function e(t,n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("/api/teams/".concat(t,"/members/").concat(n,"/admin"),{method:"PATCH"}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function we(e,t){return ge.apply(this,arguments)}function ge(){return(ge=Object(l.a)(j.a.mark((function e(t,n){var r,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/teams",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()}));case 2:return r=e.sent,c=r._id,e.next=6,Oe(c,n);case 6:return e.abrupt("return",ye(c,n._id));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ne(e,t){return Te.apply(this,arguments)}function Te(){return(Te=Object(l.a)(j.a.mark((function e(t,n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("/api/teams/".concat(t,"/tasks"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Se(e,t){return Ce.apply(this,arguments)}function Ce(){return(Ce=Object(l.a)(j.a.mark((function e(t,n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("/api/teams/".concat(t,"/tasks/").concat(n),{method:"DELETE"}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ee(e){var t=e.tasks,n=e.style,r=e.teamId,c=e.refreshTeam,a=e.editable,s=e.userIsAdmin,i=g().refreshUser;function u(e){return o.apply(this,arguments)}function o(){return(o=Object(l.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Se(r,t);case 3:return e.next=5,i();case 5:return e.next=7,c();case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}return Object(k.jsx)("div",{className:"tasks-container",style:n,children:t.map((function(e,t){return Object(k.jsxs)("div",{children:[0!==t&&Object(k.jsx)("hr",{className:"dark-separator-line"}),Object(k.jsx)(pe,{task:e,userIsAdmin:s,deleteTask:u,editable:a})]},e._id)}))})}var Ie=function(){var e=g().currentUser.tasks;return Object(k.jsxs)("div",{className:"schedule",children:[Object(k.jsx)("h2",{children:"Tasks"}),Object(k.jsx)(Ee,{tasks:e,style:{borderRadius:"5px",width:"100%"}})]})},Re=(n(51),n(64)),Ae=n.n(Re),Ue=n(49),_e=n.n(Ue);var Fe=function(e){var t=e.toggle,n=e.toggleCreateTeam,r=e.toggleJoinTeam;return Object(k.jsxs)("div",{className:"team-add",children:[Object(k.jsxs)("div",{className:"team-add-row",onClick:function(){t(),r()},children:[Object(k.jsx)(_e.a,{fontSize:"inherit",style:{color:"00adb5"}}),Object(k.jsx)("p",{children:"Join a team"})]}),Object(k.jsxs)("div",{className:"team-add-row",onClick:function(){t(),n()},children:[Object(k.jsx)(_e.a,{fontSize:"inherit",style:{color:"00adb5"}}),Object(k.jsx)("p",{children:"Create a new team"})]})]})},De=n(23),Me=(n(94),n(63)),Pe=n.n(Me);function Je(e){var t=e.children,n=e.close;return Object(k.jsx)("div",{className:"popup-out",onMouseDown:n,children:Object(k.jsxs)("div",{className:"popup-in form",onMouseDown:function(e){return e.stopPropagation()},children:[Object(k.jsx)(Pe.a,{className:"popup-close-icon",onClick:n}),t]})})}function Le(e,t){return Object(E.a)(Object(E.a)({},e),{},Object(De.a)({},t.name,t.value))}function We(e){var t=e.close,n=Object(r.useReducer)(Le,{}),c=Object(b.a)(n,2),a=c[0],s=c[1],i=Object(r.useState)(""),u=Object(b.a)(i,2),o=u[0],f=u[1],m=Object(r.useState)(!1),O=Object(b.a)(m,2),h=O[0],x=O[1],v=g(),y=v.currentUser,w=v.refreshUser,N=Object(r.useRef)(!1);function T(){return(T=Object(l.a)(j.a.mark((function e(n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),a.name){e.next=3;break}return e.abrupt("return",f("Empty name not allowed"));case 3:if(!(a.name&&a.name.length>=40)){e.next=5;break}return e.abrupt("return",f("Name too long"));case 5:return e.prev=5,f(""),x(!0),e.next=10,we(a,y);case 10:if(e.sent.ok){e.next=13;break}throw new Error;case 13:return e.next=15,t();case 15:return e.next=17,w();case 17:e.next=22;break;case 19:e.prev=19,e.t0=e.catch(5),f("Failed to create team");case 22:N.current&&x(!1);case 23:case"end":return e.stop()}}),e,null,[[5,19]])})))).apply(this,arguments)}function S(e){s({name:e.target.name,value:e.target.value})}return Object(r.useEffect)((function(){return N.current=!0,function(){N.current=!1}})),Object(k.jsxs)(Je,{close:t,children:[Object(k.jsx)("h2",{children:"Create new Team"}),Object(k.jsxs)("form",{onSubmit:function(e){return T.apply(this,arguments)},children:[Object(k.jsxs)("label",{htmlFor:"name",children:[Object(k.jsx)("p",{children:"Name"}),Object(k.jsx)("input",{type:"text",id:"name",name:"name",value:a.name||"",onChange:S})]}),Object(k.jsxs)("label",{htmlFor:"description",children:[Object(k.jsx)("p",{children:"Description"}),Object(k.jsx)("textarea",{type:"text",id:"description",name:"description",value:a.description||"",onChange:S})]}),Object(k.jsx)("button",{type:"submit",children:"Create"})]}),Object(k.jsx)("br",{}),h&&Object(k.jsx)(d.a,{style:{backgroundColor:"#0000"}}),o&&Object(k.jsx)(p.a,{severity:"error",children:o})]})}function ze(e,t){return Object(E.a)(Object(E.a)({},e),{},Object(De.a)({},t.name,t.value))}function He(e){var t=e.close,n=Object(r.useReducer)(ze,{}),c=Object(b.a)(n,2),a=c[0],s=c[1],i=Object(r.useState)(""),u=Object(b.a)(i,2),o=u[0],f=u[1],m=Object(r.useState)(!1),O=Object(b.a)(m,2),h=O[0],x=O[1],v=g(),y=v.currentUser,w=v.refreshUser,N=Object(r.useRef)(!1);function T(){return(T=Object(l.a)(j.a.mark((function e(n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),a.teamId){e.next=3;break}return e.abrupt("return",f("Empty field not allowed"));case 3:return e.prev=3,f(""),x(!0),e.next=8,Oe(a.teamId,y);case 8:if(e.sent.ok){e.next=11;break}throw new Error;case 11:return e.next=13,t();case 13:return e.next=15,w();case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(3),f("Failed to join the team!");case 20:N.current&&x(!1);case 21:case"end":return e.stop()}}),e,null,[[3,17]])})))).apply(this,arguments)}return Object(r.useEffect)((function(){return N.current=!0,function(){N.current=!1}})),Object(k.jsxs)(Je,{close:t,children:[Object(k.jsx)("h2",{children:"Join a Team"}),Object(k.jsxs)("form",{onSubmit:function(e){return T.apply(this,arguments)},children:[Object(k.jsxs)("label",{htmlFor:"teamId",children:[Object(k.jsx)("p",{children:"Team's ID"}),Object(k.jsx)("input",{type:"text",id:"teamId",name:"teamId",value:a.teamId||"",onChange:function(e){s({name:e.target.name,value:e.target.value})}})]}),Object(k.jsx)("button",{type:"submit",children:"Join"})]}),Object(k.jsx)("br",{}),h&&Object(k.jsx)(d.a,{style:{backgroundColor:"#0000"}}),o&&Object(k.jsx)(p.a,{severity:"error",children:o})]})}var Be=function(){var e=Object(r.useReducer)((function(e){return!e}),!1),t=Object(b.a)(e,2),n=t[0],c=t[1],a=Object(r.useReducer)((function(e){return!e}),!1),s=Object(b.a)(a,2),i=s[0],u=s[1],o=Object(r.useReducer)((function(e){return!e}),!1),j=Object(b.a)(o,2),l=j[0],d=j[1];return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)("div",{className:"team-title",children:[Object(k.jsx)("h3",{children:"My teams"}),Object(k.jsx)(Ae.a,{onClick:c,className:"add-icon"}),n&&Object(k.jsx)(Fe,{toggle:c,toggleCreateTeam:u,toggleJoinTeam:d})]}),i&&Object(k.jsx)(We,{close:u}),l&&Object(k.jsx)(He,{close:d})]})},Ge=n(41),Ye=n.n(Ge);var qe=function(e){var t=e.team,n=e.selectTeam;return Object(k.jsxs)("div",{className:"team-link",onClick:function(){n(t._id)},children:[Object(k.jsx)(Ye.a,{className:"team-icon"}),Object(k.jsx)("h4",{children:t.name})]})};var Ke=function(e){var t=e.teams,n=e.selectTeam,r=e.style;return Object(k.jsxs)("div",{className:"team-nav",style:r,children:[Object(k.jsx)(Be,{}),t.map((function(e,t){return Object(k.jsxs)("div",{children:[0!==t&&Object(k.jsx)("hr",{className:"teams-separator-line"}),Object(k.jsx)(qe,{team:e,selectTeam:n})]},e._id)}))]})},Qe=n(68),Ve=n.n(Qe),Xe=n(69),Ze=n.n(Xe);function $e(e,t){return Object(E.a)(Object(E.a)({},e),{},Object(De.a)({},t.name,t.value))}function et(e){var t=e.close,n=e.currTeam,c=e.refreshTeam,a=Object(r.useReducer)($e,{}),s=Object(b.a)(a,2),i=s[0],u=s[1],o=Object(r.useState)(""),f=Object(b.a)(o,2),m=f[0],O=f[1],h=Object(r.useState)(!1),x=Object(b.a)(h,2),v=x[0],y=x[1],w=g().refreshUser,N=Object(r.useRef)(!1);function T(){return(T=Object(l.a)(j.a.mark((function e(r){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),i.name){e.next=3;break}return e.abrupt("return",O("Empty name not allowed"));case 3:if(!(i.name&&i.name.length>50)){e.next=5;break}return e.abrupt("return",O("Name too long"));case 5:return e.prev=5,O(""),y(!0),a=Object(E.a)(Object(E.a)({},i),{},{date:H()(i.date).toISOString()}),e.next=11,Ne(n._id,a);case 11:if(e.sent.ok){e.next=14;break}throw new Error;case 14:return e.next=16,t();case 16:return e.next=18,w();case 18:return e.next=20,c();case 20:e.next=25;break;case 22:e.prev=22,e.t0=e.catch(5),O("Failed to create a new task");case 25:N.current&&y(!1);case 26:case"end":return e.stop()}}),e,null,[[5,22]])})))).apply(this,arguments)}function S(e){u({name:e.target.name,value:e.target.value})}return Object(r.useEffect)((function(){return N.current=!0,function(){N.current=!1}})),Object(k.jsxs)(Je,{close:t,children:[Object(k.jsx)("h2",{children:"Create new Task"}),Object(k.jsxs)("form",{onSubmit:function(e){return T.apply(this,arguments)},children:[Object(k.jsxs)("label",{htmlFor:"name",children:[Object(k.jsx)("p",{children:"Name"}),Object(k.jsx)("input",{type:"text",id:"name",name:"name",value:i.name||"",onChange:S})]}),Object(k.jsxs)("label",{htmlFor:"description",children:[Object(k.jsx)("p",{children:"Description"}),Object(k.jsx)("textarea",{type:"text",id:"description",name:"description",value:i.description||"",onChange:S})]}),Object(k.jsxs)("label",{htmlFor:"date",children:[Object(k.jsx)("p",{children:"Expected date"}),Object(k.jsx)("input",{type:"datetime-local",id:"date",name:"date",value:i.date||"",onChange:S,min:"2020-01-01",max:"2022-01-01"})]}),Object(k.jsx)("button",{type:"submit",children:"Add task"})]}),Object(k.jsx)("br",{}),v&&Object(k.jsx)(d.a,{style:{backgroundColor:"#0000"}}),m&&Object(k.jsx)(p.a,{severity:"error",children:m})]})}var tt=n(67),nt=n.n(tt),rt=n(66),ct=n.n(rt),at=n(65),st=n.n(at);function it(e){var t=e.teamId,n=e.member,c=e.deleteMember,a=e.userIsAdmin,s=e.refreshTeam,i=e.numAdmins,u=n._id,o=n.name,d=n.isAdmin,p=Object(r.useReducer)((function(e){return!e}),!1),f=Object(b.a)(p,2),m=f[0],O=f[1],h=Object(r.useReducer)((function(e){return!e}),!1),x=Object(b.a)(h,2),v=x[0],y=x[1],w=Object(r.useState)(!1),g=Object(b.a)(w,2),N=g[0],T=g[1],S=Object(r.useRef)(""),C=Object(r.useRef)(""),E=Object(r.useState)(1),I=Object(b.a)(E,2),R=I[0],A=I[1];Object(r.useEffect)((function(){return function(){return clearInterval(C)}}),[]);var U=Object(r.useRef)("");return Object(r.useEffect)((function(){return function(){clearTimeout(U.current)}}),[]),Object(k.jsxs)("div",{className:"member",style:{opacity:R},children:[Object(k.jsx)(st.a,{}),Object(k.jsx)("h4",{children:o}),Object(k.jsx)("h6",{className:"admin-name",onClick:y,children:d?"Admin":"Member"}),v&&a&&Object(k.jsx)("div",{className:"admin-status",onClick:function(){if(y(),1===i&&d)return T(!0),void(U.current=setTimeout((function(){T(!1)}),2e3));ye(t,u),s()},children:Object(k.jsx)("h6",{children:d?"Set user to member":"Set user to admin"})}),N&&Object(k.jsxs)("div",{className:"admin-status",children:[Object(k.jsx)(ct.a,{className:"red"}),Object(k.jsx)("h6",{children:"Team needs at least one admin"})]}),a&&Object(k.jsx)(k.Fragment,{children:m?Object(k.jsx)(le.a,{className:"task-button",style:{color:"e84545"},onClick:function(){var e=Object(l.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:O(),clearTimeout(S.current),clearInterval(C.current),A(1);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}):Object(k.jsx)(nt.a,{className:"member-button",style:{color:"e84545"},onClick:function(){O(),C.current=setInterval((function(){A((function(e){return e-.025}))}),50),S.current=setTimeout((function(){c(u)}),2e3)}})})]})}n(95);function ut(e){var t=e.members,n=e.teamId,r=e.refreshTeam,c=e.userIsAdmin,a=e.numAdmins,s=g().refreshUser;function i(e){return u.apply(this,arguments)}function u(){return(u=Object(l.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,xe(n,t);case 3:return e.next=5,s();case 5:return e.next=7,r();case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}return Object(k.jsx)("div",{className:"members-container",children:t.map((function(e,t){return Object(k.jsxs)("div",{children:[0!==t&&Object(k.jsx)("hr",{className:"dark-separator-line"}),Object(k.jsx)(it,{member:e,teamId:n,userIsAdmin:c,numAdmins:a,refreshTeam:r,deleteMember:i})]},e._id)}))})}function ot(e,t){return Object(E.a)(Object(E.a)({},e),{},Object(De.a)({},t.name,t.value))}function jt(e){var t=e.close,n=e.currTeam,c=e.refreshTeam,a=Object(r.useReducer)(ot,{}),s=Object(b.a)(a,2),i=s[0],u=s[1],o=Object(r.useState)(""),f=Object(b.a)(o,2),m=f[0],O=f[1],h=Object(r.useState)(!1),x=Object(b.a)(h,2),y=x[0],w=x[1],g=Object(r.useRef)(!1);function N(){return(N=Object(l.a)(j.a.mark((function e(r){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),i.id){e.next=3;break}return e.abrupt("return",O("Empty field not allowed"));case 3:return e.prev=3,O(""),w(!0),e.next=8,v(i.id);case 8:if((a=e.sent)._id){e.next=11;break}throw new Error("User doesn't exist");case 11:return e.next=13,Oe(n._id,a);case 13:if(e.sent.ok){e.next=16;break}throw new Error;case 16:return e.next=18,t();case 18:return e.next=20,c();case 20:e.next=25;break;case 22:e.prev=22,e.t0=e.catch(3),"User doesn't exist"===e.t0.message?O(e.t0.message):O("Failed to add new member");case 25:g.current&&w(!1);case 26:case"end":return e.stop()}}),e,null,[[3,22]])})))).apply(this,arguments)}return Object(r.useEffect)((function(){return g.current=!0,function(){g.current=!1}})),Object(k.jsxs)(Je,{close:t,children:[Object(k.jsx)("h2",{children:"Add new member"}),Object(k.jsxs)("form",{onSubmit:function(e){return N.apply(this,arguments)},children:[Object(k.jsxs)("label",{htmlFor:"id",children:[Object(k.jsx)("p",{children:"Add member with User's ID"}),Object(k.jsx)("input",{type:"text",id:"id",name:"id",value:i.id||"",onChange:function(e){u({name:e.target.name,value:e.target.value})}})]}),Object(k.jsx)("button",{type:"submit",children:"Add member"}),Object(k.jsx)("p",{children:"Or send him this team's ID"}),Object(k.jsx)("div",{className:"add-member-team-id",children:n._id})]}),Object(k.jsx)("br",{}),y&&Object(k.jsx)(d.a,{style:{backgroundColor:"#0000"}}),m&&Object(k.jsx)(p.a,{severity:"error",children:m})]})}var lt=function(e){var t=e.currTeam,n=e.resetTeams,c=e.selectTeam,a=e.userIsAdmin,s=e.style;if(!t)return Object(k.jsx)("div",{className:"team-content",style:s,children:Object(k.jsx)("h2",{children:"Select a team!"})});var i=t.name,u=t.description,o=t.tasks,j=t.members,l=Object(r.useReducer)((function(e){return!e}),!1),d=Object(b.a)(l,2),p=d[0],f=d[1],m=Object(r.useReducer)((function(e){return!e}),!1),O=Object(b.a)(m,2),h=O[0],x=O[1],v=de().width,y=j.reduce((function(e,t){return e+t.isAdmin}),0);function w(){c(t._id)}return Object(k.jsxs)("div",{className:"team-content",style:s,children:[Object(k.jsx)("h3",{children:i}),Object(k.jsx)("div",{className:"team-description",children:Object(k.jsx)("p",{children:u})}),Object(k.jsx)("h3",{children:"Tasks"}),Object(k.jsx)(Ee,{tasks:o,teamId:t._id,userIsAdmin:a,refreshTeam:w,editable:!0}),Object(k.jsxs)("div",{className:"add-task",onClick:f,style:o&&o.length?{}:{borderRadius:"5px"},children:[Object(k.jsx)(Ve.a,{style:{color:"00adb5"}}),Object(k.jsx)("h5",{children:"Add new task"})]}),Object(k.jsx)("h3",{children:"Members"}),Object(k.jsx)(ut,{members:j,teamId:t._id,userIsAdmin:a,numAdmins:y,refreshTeam:w}),Object(k.jsxs)("div",{className:"add-member",onClick:x,style:j&&j.length?{}:{borderRadius:"5px"},children:[Object(k.jsx)(Ze.a,{style:{color:"00adb5"}}),Object(k.jsx)("h5",{children:"Add new member"})]}),p&&Object(k.jsx)(et,{close:f,currTeam:t,refreshTeam:w}),h&&Object(k.jsx)(jt,{close:x,currTeam:t,refreshTeam:w}),v<=700&&Object(k.jsxs)("h2",{className:"responsive-teams-button",onClick:n,children:[" ","Teams"," "]})]})};var bt=function(){var e=Object(r.useState)(""),t=Object(b.a)(e,2),n=t[0],c=t[1],a=de().width,s=g().currentUser,i=s.teams,u=n?1===n.members.find((function(e){return e._id===s._id})).isAdmin:0,o=Object(r.useState)({minWidth:"100%",maxWidth:"100%",display:"block"}),d=Object(b.a)(o,2),p=d[0],f=d[1],m=Object(r.useState)({display:"none"}),O=Object(b.a)(m,2),h=O[0],x=O[1];function v(e){return y.apply(this,arguments)}function y(){return(y=Object(l.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fe(t);case 2:n=e.sent,c(n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.useEffect)((function(){a<=700?n?(f({display:"none"}),x({display:"block"})):(f({minWidth:"100%",maxWidth:"100%",display:"block"}),x({display:"none"})):(f({minWidth:"210px",maxWidth:"210px",display:"block"}),x({display:"block"}))}),[n,a]),Object(k.jsxs)("div",{className:"teams-container",children:[Object(k.jsx)(Ke,{teams:i,selectTeam:v,style:p}),Object(k.jsx)(lt,{currTeam:n,selectTeam:v,style:h,resetTeams:function(){c("")},userIsAdmin:u})]})};n(96);function dt(){var e=g(),t=e.logout,n=e.currentUser,r=n.name,c=n.username,a=n._id;return Object(k.jsxs)("div",{className:"profile",children:[Object(k.jsx)("h2",{children:"My Profile"}),Object(k.jsx)("div",{className:"profile-pic",children:Object(k.jsx)(Ye.a,{fontSize:"inherit"})}),Object(k.jsx)("h3",{children:"Name"}),Object(k.jsx)("p",{children:r}),Object(k.jsx)("h3",{children:"Email"}),Object(k.jsx)("p",{children:c}),Object(k.jsx)("h3",{children:"User ID"}),Object(k.jsx)("p",{children:a}),Object(k.jsx)("button",{className:"logout-button",type:"button",onClick:function(){t()},children:"Log out"})]})}var pt=function(){var e=Object(u.g)().path;return Object(k.jsxs)("main",{children:[Object(k.jsx)(V,{}),Object(k.jsx)("div",{className:"content-container",children:Object(k.jsxs)(u.d,{children:[Object(k.jsx)(R,{path:e,exact:!0,children:Object(k.jsx)(u.a,{to:"".concat(e,"/schedule")})}),Object(k.jsx)(R,{path:"".concat(e,"/schedule"),component:Ie,exact:!0}),Object(k.jsx)(R,{path:"".concat(e,"/teams"),component:bt}),Object(k.jsx)(R,{path:"".concat(e,"/profile"),component:dt,exact:!0})]})}),Object(k.jsx)(X,{})]})};var ft=function(e){var t=e.component,n=e.restricted,r=Object(I.a)(e,["component","restricted"]),c=g().currentUser;return Object(k.jsx)(u.b,Object(E.a)(Object(E.a)({},r),{},{render:function(e){return c._id&&n?Object(k.jsx)(u.a,{to:"/"}):Object(k.jsx)(t,Object(E.a)({},e))}}))};function mt(){return Object(k.jsx)(i.a,{children:Object(k.jsx)(N,{children:Object(k.jsxs)(u.d,{children:[Object(k.jsx)(ft,{restricted:!0,path:"/login",component:S,exact:!0}),Object(k.jsx)(ft,{restricted:!0,path:"/signup",component:T,exact:!0}),Object(k.jsx)(ft,{restricted:!0,path:"/join",component:C,exact:!0}),Object(k.jsx)(R,{path:"/home",component:pt}),Object(k.jsx)(u.b,{path:"/",exact:!0,children:Object(k.jsx)(u.a,{to:"/home"})})]})})})}s.a.render(Object(k.jsx)(c.a.StrictMode,{children:Object(k.jsx)(mt,{})}),document.getElementById("root"))}},[[97,1,2]]]);
//# sourceMappingURL=main.d5ac286f.chunk.js.map