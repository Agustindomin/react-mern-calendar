(this["webpackJsonpcalendar-app"]=this["webpackJsonpcalendar-app"]||[]).push([[0],{209:function(e,t,n){},211:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(9),c=n.n(r),o=n(10),s=n(27),i=n(82),l=n(6),u="[ui] Open modal",d="[ui] Close modal",j="[event] Set active",b="[event] Add new",m="[event] Clear active event",f="[event] Event updated",p="[event] Event deleted",O="[event] Logout",v="[event] Events loaded",h="[auth] Finish checking login state",x="[auth] Login",g="[auth] Logout",y={modalOpen:!1},w=n(58),N={events:[],activeEvent:null},E={checking:!0},k=Object(s.b)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(l.a)(Object(l.a)({},e),{},{modalOpen:!0});case d:return Object(l.a)(Object(l.a)({},e),{},{modalOpen:!1});default:return e}},calendar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(l.a)(Object(l.a)({},e),{},{activeEvent:t.payload});case b:return Object(l.a)(Object(l.a)({},e),{},{events:[].concat(Object(w.a)(e.events),[t.payload])});case m:return Object(l.a)(Object(l.a)({},e),{},{activeEvent:null});case f:return Object(l.a)(Object(l.a)({},e),{},{events:e.events.map((function(e){return e.id===t.payload.id?t.payload:e}))});case p:return Object(l.a)(Object(l.a)({},e),{},{events:e.events.filter((function(t){return t.id!==e.activeEvent.id})),activeEvent:null});case v:return Object(l.a)(Object(l.a)({},e),{},{events:Object(w.a)(t.payload)});case O:return Object(l.a)({},N);default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(l.a)(Object(l.a)(Object(l.a)({},e),t.payload),{},{checking:!1});case h:return Object(l.a)(Object(l.a)({},e),{},{checking:!1});case g:return{checking:!1};default:return e}}}),S="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.c,C=Object(s.d)(k,S(Object(s.a)(i.a))),I=n(38),D=n(11),P=n(20),T=n(28),L=n.n(T),_=n(14),B=n.n(_),R=n(26),A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useState)(e),n=Object(P.a)(t,2),r=n[0],c=n[1],o=function(){c(e)},s=function(e){var t=e.target;c(Object(l.a)(Object(l.a)({},r),{},Object(R.a)({},t.name,t.value)))};return[r,s,o]},G=n(13),F=n.n(G),J=n(23),V="https://mern-calendar-adom.herokuapp.com/api",H=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(V,"/").concat(e);return"GET"===n?fetch(a):fetch(a,{method:n,headers:{"Content-type":"application/json"},body:JSON.stringify(t)})},M=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(V,"/").concat(e),r=localStorage.getItem("token")||"";return"GET"===n?fetch(a,{method:n,headers:{"x-token":r},body:JSON.stringify(t)}):fetch(a,{method:n,headers:{"Content-type":"application/json","x-token":r},body:JSON.stringify(t)})},U=n(19),X=n.n(U),q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){return Object(l.a)(Object(l.a)({},e),{},{start:X()(e.start).toDate(),end:X()(e.end).toDate()})}))},z=function(e){return{type:b,payload:e}},K=function(){return{type:m}},Q=function(e){return{type:f,payload:e}},W=function(){return{type:p}},Y=function(e){return{type:v,payload:e}},Z=function(){return{type:h}},$=function(){return function(e){localStorage.clear(),e({type:O}),e(ee())}},ee=function(){return{type:g}},te=function(e){return{type:x,payload:e}},ne=(n(96),n(2)),ae=function(){var e=Object(o.b)(),t=A({lEmail:"agustindomin@gmail.com",lPassword:"123456"}),n=Object(P.a)(t,2),a=n[0],r=n[1],c=A({rName:"agust\xedn Domin",rEmail:"agustindo@gmail.com",rPassword1:"123456",rPassword2:"123456"}),s=Object(P.a)(c,2),i=s[0],l=s[1],u=a.lEmail,d=a.lPassword,j=i.rName,b=i.rEmail,m=i.rPassword1,f=i.rPassword2;return Object(ne.jsx)("div",{className:"container login-container",children:Object(ne.jsxs)("div",{className:"row",children:[Object(ne.jsxs)("div",{className:"col-md-6 login-form-1",children:[Object(ne.jsx)("h3",{children:"Ingreso"}),Object(ne.jsxs)("form",{onSubmit:function(t){return t.preventDefault(),L.a.isEmail(u)?L.a.isLength(d,6)?void e((n=u,a=d,function(){var e=Object(J.a)(F.a.mark((function e(t){var r,c;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H("auth",{email:n,password:a},"POST");case 2:return r=e.sent,e.next=5,r.json();case 5:(c=e.sent).ok?(localStorage.setItem("token",c.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(te({uid:c.uid,name:c.name}))):B.a.fire("Error",c.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())):B.a.fire({title:"Password error",text:"El password ha de tener 6 caracteres como minimo",icon:"error",showCloseButton:!0}):B.a.fire({title:"Email error",text:"El email introducido no es v\xe1lido",icon:"error",showCloseButton:!0});var n,a},children:[Object(ne.jsx)("div",{className:"form-group",children:Object(ne.jsx)("input",{type:"text",className:"form-control",placeholder:"Correo",name:"lEmail",value:u,onChange:r})}),Object(ne.jsx)("div",{className:"form-group",children:Object(ne.jsx)("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"lPassword",value:d,onChange:r})}),Object(ne.jsx)("div",{className:"form-group",children:Object(ne.jsx)("input",{type:"submit",className:"btnSubmit",value:"Login"})})]})]}),Object(ne.jsxs)("div",{className:"col-md-6 login-form-2",children:[Object(ne.jsx)("h3",{children:"Registro"}),Object(ne.jsxs)("form",{onSubmit:function(t){return t.preventDefault(),L.a.isEmpty(j)?B.a.fire({title:"Name error",text:"El name es obligatorio",icon:"error",showCloseButton:!0}):L.a.isEmail(b)?L.a.isLength(m,6)?m!==f?B.a.fire({title:"Passwords error",text:"Las contrase\xf1as no coinciden",icon:"error",showCloseButton:!0}):void e((n=b,a=m,r=j,function(){var e=Object(J.a)(F.a.mark((function e(t){var c,o;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H("auth/new",{email:n,password:a,name:r},"POST");case 2:return c=e.sent,e.next=5,c.json();case 5:(o=e.sent).ok?(localStorage.setItem("token",o.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(te({uid:o.uid,name:o.name}))):B.a.fire("Error",o.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())):B.a.fire({title:"Password error",text:"El password ha de tener 6 caracteres como minimo",icon:"error",showCloseButton:!0}):B.a.fire({title:"Email error",text:"El email introducido no es v\xe1lido",icon:"error",showCloseButton:!0});var n,a,r},children:[Object(ne.jsx)("div",{className:"form-group",children:Object(ne.jsx)("input",{type:"text",className:"form-control",placeholder:"Nombre",name:"rName",value:j,onChange:l})}),Object(ne.jsx)("div",{className:"form-group",children:Object(ne.jsx)("input",{type:"email",className:"form-control",placeholder:"Correo",name:"rEmail",value:b,onChange:l})}),Object(ne.jsx)("div",{className:"form-group",children:Object(ne.jsx)("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"rPassword1",value:m,onChange:l})}),Object(ne.jsx)("div",{className:"form-group",children:Object(ne.jsx)("input",{type:"password",className:"form-control",placeholder:"Repita la contrase\xf1a",name:"rPassword2",value:f,onChange:l})}),Object(ne.jsx)("div",{className:"form-group",children:Object(ne.jsx)("input",{type:"submit",className:"btnSubmit",value:"Crear cuenta"})})]})]})]})})},re=n(57),ce=function(){var e=Object(o.c)((function(e){return e.auth})).name,t=Object(o.b)();return Object(ne.jsxs)("div",{className:"navbar navbar-dark bg-dark mb-4",children:[Object(ne.jsx)("span",{className:"navbar-brand",children:e}),Object(ne.jsxs)("button",{className:"btn btn-outline-danger",onClick:function(){t($())},children:[Object(ne.jsx)("i",{className:"fas fa-sign-out-alt"}),Object(ne.jsx)("span",{children:" Salir"})]})]})},oe={allDay:"Todo el d\xeda",previous:"<",next:">",today:"Hoy",month:"Mes",week:"Semana",day:"D\xeda",agenda:"Agenda",date:"Fecha",time:"Hora",event:"Evento",noEventsInRange:"No hay eventos en este rango",showMore:function(e){return"+ Ver m\xe1s (".concat(e,")")}},se=function(e){var t=e.event,n=t.title,a=t.user;return Object(ne.jsxs)("div",{children:[Object(ne.jsxs)("strong",{children:[" ",n," "]}),Object(ne.jsxs)("span",{children:["- ",a.name," "]})]})},ie=n(52),le=n.n(ie),ue=n(53),de=n.n(ue),je=function(){return{type:u}},be={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};le.a.setAppElement("#root");var me=X()().minute(0).second(0).add(1,"hours"),fe=me.clone().add(1,"hours"),pe={title:"",notes:"",start:me.toDate(),end:fe.toDate()},Oe=function(){var e=Object(o.c)((function(e){return e.ui})).modalOpen,t=Object(o.c)((function(e){return e.calendar})).activeEvent,n=Object(o.b)(),r=Object(a.useState)(!0),c=Object(P.a)(r,2),s=c[0],i=c[1],u=Object(a.useState)(pe),j=Object(P.a)(u,2),b=j[0],m=j[1],f=b.title,p=b.notes,O=b.start,v=b.end;Object(a.useEffect)((function(){m(t||pe)}),[t,m]);var h=function(e){var t=e.target;m(Object(l.a)(Object(l.a)({},b),{},Object(R.a)({},t.name,t.value)))},x=function(){n({type:d}),n(K()),m(pe)};return Object(ne.jsxs)(le.a,{isOpen:e,onRequestClose:x,style:be,closeTimeoutMS:200,className:"modal",overlayClassName:"modal-fondo",children:[Object(ne.jsxs)("h1",{children:[" ",t?"Editar evento":"Nuevo evento"," "]}),Object(ne.jsx)("hr",{}),Object(ne.jsxs)("form",{className:"container",onSubmit:function(e){e.preventDefault();var a,r=X()(O),c=X()(v);return r.isSameOrAfter(c)?B.a.fire("Error","La fecha fin ha de ser mayor a la fecha de inicio","error"):f.trim().length<2?i(!1):(n(t?(a=b,function(){var e=Object(J.a)(F.a.mark((function e(t,n){var r,c;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M("events/".concat(a.id),a,"PUT");case 3:return r=e.sent,e.next=6,r.json();case 6:(c=e.sent).ok?t(Q(a)):B.a.fire("Error",c.msg,"error"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,n){return e.apply(this,arguments)}}()):function(e){return function(){var t=Object(J.a)(F.a.mark((function t(n,a){var r,c,o,s,i;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a().auth,c=r.uid,o=r.name,t.prev=1,t.next=4,M("events",e,"POST");case 4:return s=t.sent,t.next=7,s.json();case 7:(i=t.sent).ok&&(e.id=i.evento.id,e.user={_id:c,name:o},n(z(e))),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e,n){return t.apply(this,arguments)}}()}(b)),i(!0),void x())},children:[Object(ne.jsxs)("div",{className:"form-group",children:[Object(ne.jsx)("label",{children:"Fecha y hora inicio"}),Object(ne.jsx)(de.a,{name:"start",onChange:function(e){m(Object(l.a)(Object(l.a)({},b),{},{start:e}))},value:O,className:"form-control"})]}),Object(ne.jsxs)("div",{className:"form-group",children:[Object(ne.jsx)("label",{children:"Fecha y hora fin"}),Object(ne.jsx)(de.a,{name:"end",onChange:function(e){m(Object(l.a)(Object(l.a)({},b),{},{end:e}))},value:v,minDate:O,className:"form-control"})]}),Object(ne.jsx)("hr",{}),Object(ne.jsxs)("div",{className:"form-group",children:[Object(ne.jsx)("label",{children:"Titulo y notas"}),Object(ne.jsx)("input",{type:"text",className:"form-control ".concat(!s&&"is-invalid"),placeholder:"T\xedtulo del evento",name:"title",value:f,autoComplete:"off",onChange:h}),Object(ne.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Una descripci\xf3n corta"})]}),Object(ne.jsxs)("div",{className:"form-group",children:[Object(ne.jsx)("textarea",{type:"text",className:"form-control",placeholder:"Notas",rows:"3",name:"notes",value:p,onChange:h}),Object(ne.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Informaci\xf3n adicional"})]}),Object(ne.jsxs)("button",{type:"submit",className:"btn btn-outline-primary btn-block",children:[Object(ne.jsx)("i",{className:"far fa-save"}),Object(ne.jsx)("span",{children:" Guardar"})]})]})]})},ve=function(){var e=Object(o.b)();return Object(ne.jsx)("button",{className:"btn btn-primary fab",onClick:function(){e(je())},children:Object(ne.jsx)("i",{className:"fas fa-plus"})})},he=(n(204),n(205),function(){var e=Object(o.b)();return Object(ne.jsxs)("button",{className:"btn btn-danger fab-danger",onClick:function(){e(function(){var e=Object(J.a)(F.a.mark((function e(t,n){var a,r,c;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().calendar.activeEvent,e.prev=1,e.next=4,M("events/".concat(a.id),{},"DELETE");case 4:return r=e.sent,e.next=7,r.json();case 7:(c=e.sent).ok?t(W()):B.a.fire("Error",c.msg,"error"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,n){return e.apply(this,arguments)}}())},children:[Object(ne.jsx)("i",{className:"fas fa-trush"}),Object(ne.jsx)("span",{children:" Borrar evento"})]})});X.a.locale("es");var xe=Object(re.b)(X.a),ge=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.calendar})),n=t.events,r=t.activeEvent,c=Object(o.c)((function(e){return e.auth})).uid,s=Object(a.useState)(localStorage.getItem("lastView")||"month"),i=Object(P.a)(s,2),l=i[0],u=i[1];Object(a.useEffect)((function(){e(function(){var e=Object(J.a)(F.a.mark((function e(t){var n,a,r;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M("events");case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,r=q(a.eventos),console.log(r),t(Y(r)),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}())}),[e]);return Object(ne.jsxs)("div",{className:"calendar-screen",children:[Object(ne.jsx)(ce,{}),Object(ne.jsx)(re.a,{localizer:xe,events:n,startAccessor:"start",endAccessor:"end",messages:oe,eventPropGetter:function(e,t,n,a){return{style:{backgroundColor:c===e.user._id?"#367CF7":"#465660",borderRadius:"0px",opacity:.8,display:"block",color:"white"}}},onDoubleClickEvent:function(t){e(je())},onSelectEvent:function(t){e({type:j,payload:t})},onView:function(e){u(e),localStorage.setItem("lastView",e)},onSelectSlot:function(t){e(K())},selectable:!0,view:l,components:{event:se}}),r&&Object(ne.jsx)(he,{}),Object(ne.jsx)(ve,{}),Object(ne.jsx)(Oe,{})]})},ye=n(41),we=function(e){var t=e.isLoggedIn,n=e.component,a=Object(ye.a)(e,["isLoggedIn","component"]);return Object(ne.jsx)(D.b,Object(l.a)(Object(l.a)({},a),{},{component:function(e){return t?Object(ne.jsx)(D.a,{to:"/"}):Object(ne.jsx)(n,Object(l.a)({},e))}}))},Ne=function(e){var t=e.isLoggedIn,n=e.component,a=Object(ye.a)(e,["isLoggedIn","component"]);return Object(ne.jsx)(D.b,Object(l.a)(Object(l.a)({},a),{},{component:function(e){return t?Object(ne.jsx)(n,Object(l.a)({},e)):Object(ne.jsx)(D.a,{to:"/login"})}}))},Ee=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.auth})),n=t.checking,r=t.uid;return Object(a.useEffect)((function(){e(function(){var e=Object(J.a)(F.a.mark((function e(t){var n,a;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M("auth/renew");case 2:return n=e.sent,e.next=5,n.json();case 5:(a=e.sent).ok?(localStorage.setItem("token",a.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(te({uid:a.uid,name:a.name}))):t(Z());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),n?Object(ne.jsx)("h5",{children:"Espere..."}):Object(ne.jsx)(I.a,{children:Object(ne.jsx)("div",{children:Object(ne.jsxs)(D.d,{children:[Object(ne.jsx)(we,{exact:!0,path:"/login",component:ae,isLoggedIn:!!r}),Object(ne.jsx)(Ne,{exact:!0,path:"/",component:ge,isLoggedIn:!!r}),Object(ne.jsx)(D.a,{to:"/"})]})})})},ke=function(){return Object(ne.jsx)(o.a,{store:C,children:Object(ne.jsx)(Ee,{})})};n(209);c.a.render(Object(ne.jsx)(ke,{}),document.getElementById("root"))},96:function(e,t,n){}},[[211,1,2]]]);
//# sourceMappingURL=main.d74e3c78.chunk.js.map