(this["webpackJsonpcanada-immigration-scheduler"]=this["webpackJsonpcanada-immigration-scheduler"]||[]).push([[0],{87:function(e,t,r){"use strict";r.r(t);var n=r(13),a=r(1),c=r.n(a),i=r(14),o=r.n(i),u=r(28),s=new Date,l=s.getFullYear()-25;s.setFullYear(l);var d={birth:s.toISOString(),age:25,setBirth:function(){throw new Error("this func should be replaced but not yet")}},b=c.a.createContext(d),j=function(e){var t=e.children,r=c.a.useState(d.birth),a=Object(u.a)(r,2),i=a[0],o=a[1],s={birth:i,age:function(e){var t=new Date,r=new Date(e),n=t.getFullYear()-r.getFullYear(),a=t.getMonth()-r.getMonth();return(a<0||0===a&&t.getDate()<r.getDate())&&n--,n}(i),setBirth:o};return Object(n.jsx)(b.Provider,{value:s,children:t})},O=function(){return c.a.useContext(b)},h=r(17),S=r(53),f=function(e){var t=e.children;return Object(n.jsx)(h.a,{utils:S.a,children:Object(n.jsx)(j,{children:t})})},_=r(118),g=r(121),v=r(114),I=function(){var e=O(),t=e.birth,r=e.age,a=e.setBirth,i=c.a.useCallback((function(e){e&&(console.log(e),a(e.toISOString()))}),[a]);return Object(n.jsxs)(v.a,{children:[Object(n.jsx)(g.a,{alt:"you"}),Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{children:["age:",r]}),Object(n.jsx)(_.a,{disableFuture:!0,openTo:"year",format:"yyyy-MM-dd",label:"Date of birth",views:["year","month","date"],value:t,onChange:i})]})]})},E=r(40),D=r(55),C=r(54),x=r(51),T=r(52),y=r(120);function A(){return Object(y.a)()}var m,R,p,F,w,Y,U,M=r(33),L="RESOURCE_ID__SHARED__AGE",V="RESOURCE_ID__VISA__STUDY",k="RESOURCE_ID__VISA__COOP",H="RESOURCE_ID__VISA__WORKING_HOLIDAY",N="RESOURCE_ID__STATUS__WORKER",P="RESOURCE_ID__STATUS__STUDENT",B=function(){var e=c.a.useState([]),t=Object(u.a)(e,2),r=t[0],n=t[1];return[r,c.a.useCallback((function(e){var t=new Date(e),r=function(){var e=new Date;return e.setFullYear(e.getFullYear()+10),e.getFullYear()}(),a=function(e,t){for(var r=[],n=e;n<=t;n++)r.push(n);return r}(new Date(e).getFullYear(),r).map((function(e,r){var n=(t.setFullYear(e),t.toISOString()),a=Object(M.a)(new Date(n),11).toISOString();return{id:A(),resourceId:L,title:"Aage:".concat(r),start:n,end:a}}));n(a)}),[])]},W=r(19),G="SHARED",K="VISA",J="STATUS",q="FIELD__H1",z="FIELD__H2",Q=[{group:!0,field:q,headerContent:"Category"},{field:z,headerContent:"Event"}],X="MY_TIME_LINE",Z=Object(W.a)({},X,{type:"resourceTimelineYear",duration:{year:6},buttonText:"TIME_LINE",startStr:"2019-01-01"}),$={left:"today prev,next",center:"title",right:"".concat(X,",listMonth")},ee=[(m={id:L},Object(W.a)(m,q,G),Object(W.a)(m,z,"Age"),m),(R={id:V},Object(W.a)(R,q,K),Object(W.a)(R,z,"Study VISA"),R),(p={id:k},Object(W.a)(p,q,K),Object(W.a)(p,z,"Co-op VISA"),p),(F={id:H},Object(W.a)(F,q,K),Object(W.a)(F,z,"Working Holiday VISA"),F),(w={id:P},Object(W.a)(w,q,J),Object(W.a)(w,z,"Student"),w),(Y={id:N},Object(W.a)(Y,q,J),Object(W.a)(Y,z,"Worker"),Y),(U={id:"etc"},Object(W.a)(U,q,"CUSTOM_CATEGORY"),Object(W.a)(U,z,"CUSTOM_EVENT"),U)],te=[{id:"1",resourceId:V,start:"2020-11-20",end:"2023-01-01"},{id:"2",resourceId:k,start:"2022-01-01",end:"2023-01-01"},{id:"3",resourceId:H,start:"2022-06-01",end:"2023-06-01"},{id:"4",resourceId:P,start:"2020-11-20",end:"2023-01-01"},{id:"5",resourceId:N,start:"2022-01-01",end:"2023-06-01"}],re=[{year:"numeric"},{month:"numeric"}],ne=function(){var e=c.a.useState(te),t=Object(u.a)(e,2),r=t[0],a=t[1],i=O().birth,o=B(),s=Object(u.a)(o,2),l=s[0],d=s[1];c.a.useEffect((function(){d(i)}),[i,d]),c.a.useEffect((function(){console.log("ageEvents",l);var e=[].concat(Object(E.a)(l),Object(E.a)(te));a(e)}),[l]),console.log("ageEvents",l);return Object(n.jsx)(D.a,{selectable:!0,editable:!0,plugins:[T.a,C.a,x.a],initialView:X,headerToolbar:$,events:r,resources:ee,resourceAreaColumns:Q,views:Z,select:function(e){a((function(t){var r;return[].concat(Object(E.a)(t),[{id:A(),resourceId:null===(r=e.resource)||void 0===r?void 0:r.id,start:e.startStr,end:e.endStr}])}))},eventClick:function(e){if(window.confirm("Would you like to remove this event?")){var t=e.event.id;a((function(e){return e.filter((function(e){return e.id!==t}))}))}},slotLabelFormat:re,initialDate:"2020-06-01",schedulerLicenseKey:"GPL-My-Project-Is-Open-Source"})},ae=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(I,{}),Object(n.jsx)("hr",{}),Object(n.jsx)(ne,{})]})};var ce=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(f,{children:Object(n.jsx)(ae,{})})})},ie=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,123)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;r(e),n(e),a(e),c(e),i(e)}))};o.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(ce,{})}),document.getElementById("root")),ie()}},[[87,1,2]]]);
//# sourceMappingURL=main.e55fdc8f.chunk.js.map