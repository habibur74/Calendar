(this.webpackJsonpplangoab=this.webpackJsonpplangoab||[]).push([[0],{132:function(e,n,r){},133:function(e,n,r){},134:function(e,n,r){"use strict";r.r(n);var t=r(3),a=r(0),c=r.n(a),o=r(17),i=r.n(o),d=r(27),s=r(91);function l(e){var n=e.children;return Object(t.jsx)(d.a,{utils:s.a,children:n})}var u=r(20),b=r(21),j=r(175),f=r(184),O=r(165),v=r(168),h=r(176),I=r(180),p=r(14),y=r(31),x=r(86),m=Object(x.a)(new Date,-25).toISOString(),g=Object(y.b)({name:"user",initialState:{birthday:m,age:25,canWorkingholiday:!0},reducers:{updateBirthday:function(e,n){var r=n.payload.birthday;e.birthday=r,e.age=function(e){var n=new Date,r=new Date(e),t=n.getFullYear()-r.getFullYear(),a=n.getMonth()-r.getMonth();return(a<0||0===a&&n.getDate()<r.getDate())&&t--,t}(r)},toggleWorkingholiday:function(e,n){e.canWorkingholiday=!e.canWorkingholiday}}}),C=g.actions,S=C.updateBirthday,k=C.toggleWorkingholiday,w=g.reducer,E=function(e){return e.features.user},M=function(){var e=Object(p.b)(),n=c.a.useCallback((function(n){return e(S({birthday:n}))}),[e]),r=c.a.useCallback((function(){e(k())}),[e]),t=Object(p.c)(E);return{birth:t.birthday,age:t.age,setBirth:n,toggleWorkingholiday:r,canWorkingholiday:t.canWorkingholiday}};function D(){var e=Object(u.a)(["\n  display: flex;\n  gap: 1rem;\n  padding: 2rem;\n"]);return D=function(){return e},e}function L(){var e=M(),n=e.birth,r=e.age,a=e.setBirth,o=e.toggleWorkingholiday,i=e.canWorkingholiday,d=c.a.useCallback((function(e){e&&a(e.toISOString())}),[a]),s=c.a.useCallback((function(){o()}),[o]);return Object(t.jsx)(O.a,{children:Object(t.jsxs)(v.a,{children:[Object(t.jsx)("h2",{children:"Profile"}),Object(t.jsxs)(P,{children:[Object(t.jsx)(f.a,{alt:"you"}),Object(t.jsx)(h.a,{id:"age-text",label:"Your Age",disabled:!0,InputProps:{readOnly:!0},InputLabelProps:{shrink:!0},type:"number",value:r}),Object(t.jsx)(j.a,{disableFuture:!0,openTo:"year",format:"yyyy-MM-dd",label:"Date of birth",views:["year","month","date"],value:n,onChange:d}),Object(t.jsxs)("div",{children:[Object(t.jsx)("span",{children:"with working holiday"}),Object(t.jsx)(I.a,{checked:i,onChange:s})]})]})]})})}var P=b.a.div(D()),R=r(28),T=r(179),F=r(173),A=r(178),W=r(12),_=r(93),N=r(92),G=r(96),B=r(97),H=r(9),Y="FIELD1",U="FIELD2",V="storyId",z="order",J="MY_CALENDAR_ID",K="RESOURCE_ID__SHARED__AGE",$="RESOURCE_ID__SHARED__LIMIT",q="MY_TIME_LINE_NAME",Q={left:"today prev,next",center:"title",right:"".concat(q,",listMonth")},X={initialView:q},Z={resourceGroupField:V},ee=Object(H.a)({},q,{type:"resourceTimelineYear",duration:{year:15},buttonText:"TIME_LINE"}),ne={resourceOrder:z,resourcesInitiallyExpanded:!1},re=[{field:Y,headerContent:"Field1"},{field:U,headerContent:"Field2"}],te=Object(W.a)(Object(W.a)(Object(W.a)(Object(W.a)(Object(W.a)(Object(W.a)({views:ee,headerToolbar:Q,slotLabelFormat:[{year:"numeric"},{month:"numeric"}],resourceAreaColumns:re},X),Z),{schedulerLicenseKey:"GPL-My-Project-Is-Open-Source"}),{nowIndicator:!0}),ne),{height:700});function ae(e){return Object(t.jsx)(_.a,Object(W.a)(Object(W.a)({},te),{},{plugins:[B.a,N.a,G.a]},e))}function ce(e){return Object(t.jsx)(ae,Object(W.a)(Object(W.a)({},e),{}))}var oe=r(58),ie="COMMUNITY_COLLEGE";var de,se,le,ue,be,je=r(94),fe="#00008b",Oe="VISA",ve="STATUS",he=(de={},Object(H.a)(de,Y,Oe),Object(H.a)(de,U,"Study VISA"),Object(H.a)(de,"eventBorderColor",fe),de),Ie=(se={},Object(H.a)(se,Y,Oe),Object(H.a)(se,U,"Co-op VISA"),Object(H.a)(se,"eventBorderColor",fe),se),pe=(le={},Object(H.a)(le,Y,Oe),Object(H.a)(le,U,"Working Holiday VISA"),Object(H.a)(le,"eventBorderColor",fe),le),ye=(ue={},Object(H.a)(ue,Y,ve),Object(H.a)(ue,U,"Student"),Object(H.a)(ue,"eventBorderColor",fe),ue),xe=(be={},Object(H.a)(be,Y,ve),Object(H.a)(be,U,"Worker"),Object(H.a)(be,"eventBorderColor",fe),be),me=r(182);function ge(){return Object(me.a)()}var Ce=r(18),Se=function(e){return e.split("T")[0]},ke=function(e){var n=null!==e&&void 0!==e?e:{},r=n.id,t=n.calendarId,a=n.resourceId,c=n.storyId,o=n.title,i=n.start,d=n.end,s=null!==c&&void 0!==c?c:ge(),l=null!==a&&void 0!==a?a:ge(),u=null!==o&&void 0!==o?o:"New Event";return{id:null!==r&&void 0!==r?r:ge(),resourceId:l,storyId:s,title:u,start:null!==i&&void 0!==i?i:(new Date).toISOString(),end:null!==d&&void 0!==d?d:(new Date).toISOString(),extendedProps:{calendarId:t,storyId:s,resourceId:l}}},we=function(e){var n,r=null!==e&&void 0!==e?e:{},t=r.id,a=r.calendarId,c=r.storyId;return n={id:null!==t&&void 0!==t?t:ge(),calendarId:null!==a&&void 0!==a?a:ge()},Object(H.a)(n,V,null!==c&&void 0!==c?c:ge()),Object(H.a)(n,z,1),Object(H.a)(n,Y,"Field1"),Object(H.a)(n,U,"Field2"),n},Ee=function(e){return"from "+(n=e.toISOString(),Se(n).replace(/-[0-9][0-9]$/,""));var n},Me="#8fbc8b",De="#ffd700",Le=function(e){var n,r,t,a,c,o,i=e.calendarId,d=e.storyId,s=e.startDate,l=e.canWorkingholiday,u=[],b=[],j=ge();u.push(Object(W.a)(Object(W.a)({},Ie),{},(c={id:j,calendarId:i},Object(H.a)(c,V,d),Object(H.a)(c,z,1),c))),b.push((o={id:ge(),resourceId:j,storyId:d,start:s.toISOString(),end:Object(oe.a)(s,24).toISOString()},Object(H.a)(o,z,1),Object(H.a)(o,"backgroundColor",Me),Object(H.a)(o,"extendedProps",{resourceId:j,calendarId:i,storyId:d}),o));var f=ge();if(u.push(Object(W.a)(Object(W.a)({},he),{},(n={id:f,calendarId:i},Object(H.a)(n,V,d),Object(H.a)(n,z,2),n))),b.push((r={id:ge(),resourceId:f,storyId:d,start:s.toISOString(),end:Object(oe.a)(s,24).toISOString()},Object(H.a)(r,z,2),Object(H.a)(r,"backgroundColor",Me),Object(H.a)(r,"extendedProps",{resourceId:f,calendarId:i,storyId:d}),r)),l){var O,v,h,I,p,y=ge();u.push(Object(W.a)(Object(W.a)({},pe),{},(O={id:y,calendarId:i},Object(H.a)(O,V,d),Object(H.a)(O,z,3),O)));var m=Object(oe.a)(s,24);b.push((v={id:ge(),resourceId:y,storyId:d,start:m.toISOString(),end:Object(oe.a)(m,12).toISOString()},Object(H.a)(v,z,3),Object(H.a)(v,"backgroundColor",Me),Object(H.a)(v,"extendedProps",{resourceId:y,calendarId:i,storyId:d}),v)),b.push((h={id:ge(),resourceId:y,storyId:d,start:Object(je.a)(Object(x.a)(m,-1),8).toISOString(),end:m.toISOString()},Object(H.a)(h,z,3),Object(H.a)(h,"backgroundColor","#e73758"),Object(H.a)(h,"extendedProps",{resourceId:y,calendarId:i,storyId:d}),h));var g=ge();u.push(Object(W.a)(Object(W.a)({},xe),{},(I={id:g,calendarId:i},Object(H.a)(I,V,d),Object(H.a)(I,z,5),I))),b.push((p={id:ge(),resourceId:g,storyId:d,start:Object(oe.a)(s,12).toISOString(),end:Object(oe.a)(s,36).toISOString()},Object(H.a)(p,z,5),Object(H.a)(p,"eventBackgroundCoor",De),Object(H.a)(p,"extendedProps",{resourceId:g,calendarId:i,storyId:d}),p))}var C=ge();return u.push(Object(W.a)(Object(W.a)({},ye),{},(t={id:C,calendarId:i},Object(H.a)(t,V,d),Object(H.a)(t,z,4),t))),b.push((a={id:ge(),resourceId:C,storyId:d,start:s.toISOString(),end:Object(oe.a)(s,24).toISOString()},Object(H.a)(a,z,4),Object(H.a)(a,"eventBackgroundCoor",De),Object(H.a)(a,"extendedProps",{resourceId:C,calendarId:i,storyId:d}),a)),[[].concat(u),[].concat(b)]},Pe=[1,5,9],Re=function(e,n,r){for(var t=[e],a=e;a<n;)t.push(a+=r||1);return t}(21,31),Te=function(e){var n=e.birth,r=e.calendarId,t=e.canWorkingholiday;return Re.map((function(e){return Object(x.a)(n,e)})).flatMap((function(e){return Pe.map((function(n){return Object(oe.a)(e,n)}))})).map((function(e){return function(e){var n=e.startDate,r=e.calendarId,t=e.canWorkingholiday,a=ge(),c=Ee(n),o=Le({calendarId:r,storyId:a,startDate:n,canWorkingholiday:t}),i=Object(R.a)(o,2),d=i[0];return{id:a,calendarId:r,name:c,events:i[1],resources:d}}({startDate:e,calendarId:r,canWorkingholiday:t})}))},Fe=Object(y.b)({name:"templateCalendarTable",initialState:Object(H.a)({},ie,void 0),reducers:{upsertPrivateCollegeStories:function(e,n){var r=n.payload,t=r.birth,a=r.canWorkingholiday,c=function(e){var n=e.birth,r=e.canWorkingholiday,t=Te({birth:n,calendarId:ie,canWorkingholiday:r});return{id:ie,stories:t}}({birth:new Date(t),canWorkingholiday:a});e.COMMUNITY_COLLEGE=c}}}),Ae=Fe.reducer,We=Fe.actions.upsertPrivateCollegeStories,_e=function(e){return e.features.templateCalendar.COMMUNITY_COLLEGE},Ne=Object(y.b)({name:"userCalendars",initialState:{calendars:[]},reducers:{updateCalendars:function(e,n){var r=n.payload.calendars;e.calendars=r},pushResource:function(e,n){var r=n.payload,t=r.calendarId,a=r.storyId,c=r.resource,o=e.calendars.findIndex((function(e){return e.id===t}));if(-1===o)console.warn("cannot find calendar on updateResource",t);else{var i=e.calendars[o].stories.findIndex((function(e){return e.id===a}));-1===i?console.warn("cannot find story on updateResource",t):e.calendars[o].stories[i].resources.push(c)}},updateResources:function(e,n){var r=n.payload,t=r.calendarId,a=r.storyId,c=r.newResources,o=e.calendars.findIndex((function(e){return e.id===t}));if(-1===o)console.warn("cannot find calendar on updateResource",t);else{var i=e.calendars[o].stories.findIndex((function(e){return e.id===a}));-1===i?console.warn("cannot find story on updateResource",t):e.calendars[o].stories[i].resources=c}},removeResource:function(e,n){var r=n.payload,t=r.calendarId,a=r.resourceId,c=r.storyId,o=e.calendars.findIndex((function(e){return e.id===t}));if(-1===o)console.warn("cannot find calendar on removeResource",t);else{var i=e.calendars[o].stories.findIndex((function(e){return e.id===c}));-1===i?console.warn("cannot find story on removeResource",t):e.calendars[o].stories[i].resources=e.calendars[o].stories[i].resources.filter((function(e){return e.id!==a}))}},addStory:function(e,n){var r=n.payload,t=r.calendarId,a=r.story,c=e.calendars.findIndex((function(e){return e.id===t}));-1===c?console.warn("cannot find calendar on addStory",t):e.calendars[c].stories.push(a)},removeStory:function(e,n){var r=n.payload,t=r.calendarId,a=r.storyId,c=e.calendars.findIndex((function(e){return e.id===t}));-1===c?console.warn("cannot find calendar on removeStory",t):e.calendars[c].stories=e.calendars[c].stories.filter((function(e){return e.id!==a}))},updateStory:function(e,n){var r=n.payload,t=r.calendarId,a=r.storyId,c=r.newStory,o=e.calendars.findIndex((function(e){return e.id===t}));if(-1===o)console.warn("cannot find calendar on updateStory",t);else{var i=e.calendars[o].stories.findIndex((function(e){return e.id===a}));-1===i?console.warn("cannot find story on updateStory",t):e.calendars[o].stories[i]=c}},addEvent:function(e,n){var r=n.payload,t=r.calendarId,a=r.storyId,c=r.event,o=e.calendars.findIndex((function(e){return e.id===t}));if(-1===o)console.warn("cannot find calendar on addEvent",t);else{var i=e.calendars[o].stories.findIndex((function(e){return e.id===a}));-1===i?console.warn("cannot find story on addEvent",t):e.calendars[o].stories[i].events.push(c)}},removeEvent:function(e,n){var r=n.payload,t=r.calendarId,a=r.storyId,c=r.eventId,o=e.calendars.findIndex((function(e){return e.id===t}));if(-1===o)console.warn("cannot find calendar on removeEvent",t);else{var i=e.calendars[o].stories.findIndex((function(e){return e.id===a}));-1===i?console.warn("cannot find story on removeEvent",i):e.calendars[o].stories[i].events=e.calendars[o].stories[i].events.filter((function(e){return e.id!==c}))}},updateEvent:function(e,n){var r=n.payload,t=r.calendarId,a=r.storyId,c=r.eventId,o=r.newEvent,i=e.calendars.findIndex((function(e){return e.id===t}));if(-1===i)console.warn("cannot find calendar on updateStory",t);else{var d=e.calendars[i].stories.findIndex((function(e){return e.id===a}));if(-1===d)console.warn("cannot find story on updateStory",t);else{var s=e.calendars[i].stories[d].events.findIndex((function(e){return e.id===c}));-1===s?console.warn("cannot find event on updateEvent"):e.calendars[i].stories[d].events[s]=o}}}}}),Ge=Ne.actions,Be=Ge.updateCalendars,He=Ge.pushResource,Ye=(Ge.updateResources,Ge.removeResource),Ue=Ge.addStory,Ve=Ge.removeStory,ze=Ge.updateStory,Je=Ge.addEvent,Ke=Ge.removeEvent,$e=Ge.updateEvent,qe=Ne.reducer,Qe=function(e){return e.features.userCalendars.calendars[0]},Xe={selectable:!1,editable:!1},Ze=[{field:Y,headerContent:"Field1"},{field:U,headerContent:"Field2"}];function en(e){var n=Object(p.b)(),r=function(e){var n=e.createClickHandel,r=Object(p.c)(_e);return{resourceGroupLabelContent:c.a.useCallback((function(e){var t=e.groupValue;if(r){var a=r.stories.find((function(e){return e.id===t}));if(a){var c;a.name?c=a.name:(console.warn("cannot find this story name",t),c="No Name");var o=n({calendarId:J,story:a}),i=document.createElement("i");i.innerHTML=c+" ",i.style.marginLeft="1rem";var d=document.createElement("button");return d.innerHTML="Copy to my calendar",d.style.marginLeft="1rem",d.onclick=o,{domNodes:[i,d]}}console.warn("cannot find story",t)}}),[r,n])}}({createClickHandel:c.a.useCallback((function(e){var r=e.story,t=e.calendarId;return function(){window.confirm("Do you copy this story to My Calendar?")&&n(Ue({calendarId:t,story:r}))}}),[n])}).resourceGroupLabelContent;return Object(t.jsx)(ce,Object(W.a)(Object(W.a)({},e),{},{initialDate:"2020-06-01",resourceGroupLabelContent:r,resourceAreaColumns:Ze},Xe))}function nn(){var e=M(),n=e.birth,r=e.canWorkingholiday,a=function(){var e=Object(p.b)(),n=c.a.useCallback((function(n){var r=n.birth,t=n.canWorkingholiday;e(We({birth:r,canWorkingholiday:t}))}),[e]),r=Object(p.c)(_e),t=c.a.useMemo((function(){var e;return null!==(e=null===r||void 0===r?void 0:r.stories)&&void 0!==e?e:[]}),[r]),a=c.a.useMemo((function(){return t.reduce((function(e,n){return[].concat(Object(Ce.a)(e),Object(Ce.a)(n.resources))}),[])}),[t]),o=c.a.useMemo((function(){return t.reduce((function(e,n){return[].concat(Object(Ce.a)(e),Object(Ce.a)(n.events))}),[])}),[t]);return{stories:t,generate:n,resources:a,events:o}}(),o=a.resources,i=a.events,d=a.generate;return c.a.useEffect((function(){d({birth:n,canWorkingholiday:r})}),[d,n,r]),Object(t.jsx)(en,{events:i,resources:o})}function rn(){return Object(t.jsx)("div",{children:"TODO: PublicCollegeTemplate"})}function tn(){return Object(t.jsx)("div",{children:"TODO: EslTemplate"})}var an=function(e){var n=e.shouldShow,r=e.children;return n?Object(t.jsx)("div",{role:"tabpanel",children:Object(t.jsx)(A.a,{p:3,children:r})}):Object(t.jsx)(t.Fragment,{})};function cn(){var e=c.a.useState(0),n=Object(R.a)(e,2),r=n[0],a=n[1],o=c.a.useCallback((function(e,n){a(n)}),[]);return Object(t.jsxs)("div",{children:[Object(t.jsxs)(T.a,{value:r,onChange:o,children:[Object(t.jsx)(F.a,{label:"Private College"}),Object(t.jsx)(F.a,{label:"Public College"}),Object(t.jsx)(F.a,{label:"ESL"})]}),Object(t.jsx)(an,{shouldShow:0===r,children:Object(t.jsx)(nn,{})}),Object(t.jsx)(an,{shouldShow:1===r,children:Object(t.jsx)(rn,{})}),Object(t.jsx)(an,{shouldShow:2===r,children:Object(t.jsx)(tn,{})})]})}function on(){var e=Object(u.a)(["\n  display: inline-block;\n  height: 100%;\n  object-fit: contain;\n  background: white;\n  padding: .3rem;\n"]);return on=function(){return e},e}function dn(){return Object(t.jsx)(sn,{src:"/logo457_transparent.png",alt:"img"})}var sn=b.a.img(on()),ln="https://github.com/snamiki1212/plangoab";function un(){var e=Object(u.a)(["\n  display: flex;\n  color: white;\n  font-size: 4rem;\n"]);return un=function(){return e},e}function bn(){var e=Object(u.a)(["\n  height: 4rem;\n  width: 4rem;\n"]);return bn=function(){return e},e}function jn(){var e=Object(u.a)(["\n  padding: 5rem;\n  min-height: 30vh;\n  background: var(--main-color);\n  color: white;\n"]);return jn=function(){return e},e}function fn(){return Object(t.jsxs)(On,{children:[Object(t.jsxs)(hn,{children:[Object(t.jsx)(vn,{children:Object(t.jsx)(dn,{})}),Object(t.jsx)("span",{children:"Plangoab"})]}),Object(t.jsx)("a",{href:ln,target:"_blank",rel:"noreferrer",children:"Github"})]})}var On=b.a.div(jn()),vn=b.a.div(bn()),hn=b.a.div(un()),In=r(171),pn=r(183),yn=r(174),xn=r(169);function mn(e){var n=e.isOpen,r=e.onClose,a=e.children;return Object(t.jsxs)(pn.a,{onClose:r,open:n,children:[Object(t.jsx)(yn.a,{children:"About Plangoab"}),Object(t.jsx)(xn.a,{dividers:!0,children:a})]})}function gn(){return Object(t.jsxs)("div",{children:[Object(t.jsxs)("div",{children:[Object(t.jsx)("h2",{children:"About"}),Object(t.jsx)("p",{children:"A web calendar for a person going abroad, generating a suitable schedule and customizable. Using React, Redux(Redux Toolkit), and Fullcalendar."})]}),Object(t.jsxs)("div",{children:[Object(t.jsx)("h2",{children:"License"}),Object(t.jsx)("li",{children:"GPL-3.0"})]}),Object(t.jsxs)("div",{children:[Object(t.jsx)("h2",{children:"Author"}),Object(t.jsx)("li",{children:Object(t.jsx)("a",{href:"https://github.com/snamiki1212",children:"GitHub:snamiki1212"})}),Object(t.jsx)("li",{children:Object(t.jsx)("a",{href:"https://twitter.com/snamiki1212",children:"Twitter:snamiki1212"})}),Object(t.jsx)("li",{children:Object(t.jsx)("a",{href:"https://snamiki1212.github.io",children:"Portfolio"})})]}),Object(t.jsxs)("div",{children:[Object(t.jsx)("h2",{children:"Source"}),Object(t.jsxs)("span",{children:["This page is managed at"," ",Object(t.jsx)("a",{href:ln,children:"GitHub"}),"."]})]})]})}function Cn(){var e=Object(u.a)(["\n  margin-left: auto;\n"]);return Cn=function(){return e},e}function Sn(){var e=Object(u.a)(["\n  color: white;\n  font-size: 3rem;\n  padding: 1rem;\n"]);return Sn=function(){return e},e}function kn(){var e=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  height: 6rem;\n  background: var(--main-color);\n  padding: 1rem;\n"]);return kn=function(){return e},e}function wn(){var e=function(e){var n=c.a.useState(!!e),r=Object(R.a)(n,2),t=r[0],a=r[1];return{isOpen:t,open:c.a.useCallback((function(){a(!0)}),[]),close:c.a.useCallback((function(){a(!1)}),[]),toggle:c.a.useCallback((function(){a((function(e){return!e}))}),[])}}(),n=e.isOpen,r=e.open,a=e.close;return Object(t.jsxs)(t.Fragment,{children:[Object(t.jsxs)(En,{children:[Object(t.jsx)(dn,{}),Object(t.jsx)(Mn,{children:"Plangoab"}),Object(t.jsx)(Dn,{children:Object(t.jsx)(In.a,{variant:"contained",onClick:r,children:"About Plangoab"})})]}),Object(t.jsx)(mn,{isOpen:n,onClose:a,children:Object(t.jsx)(gn,{})})]})}var En=b.a.div(kn()),Mn=b.a.span(Sn()),Dn=b.a.div(Cn()),Ln=function(e){var n,r,t=e.calendarId,a=e.storyId;return[(n={id:K},Object(H.a)(n,Y,""),Object(H.a)(n,U,"Age"),Object(H.a)(n,V,a),Object(H.a)(n,z,0),Object(H.a)(n,"calendarId",t),Object(H.a)(n,"eventBorderColor",fe),n),(r={id:$},Object(H.a)(r,Y,""),Object(H.a)(r,U,"Working Holiday"),Object(H.a)(r,V,a),Object(H.a)(r,z,1),Object(H.a)(r,"calendarId",t),Object(H.a)(r,"eventBorderColor",fe),r)]},Pn=function(e){var n=e.startDate,r=e.storyId,t=e.calendarId,a=function(e,n){for(var r=[],t=e;t<=n;t++)r.push(t);return r}(new Date(n).getFullYear(),Rn()),c=Tn(n,r,t),o=a.map((function(e,a){var c=function(){n.setFullYear(e);var r=n.toISOString();return Se(r)}(),o=Object(oe.a)(new Date(c),11).toISOString(),i=Se(o);return{id:ge(),title:"Aage:".concat(a),start:c,end:i,storyId:r,resourceId:K,extendedProps:{resourceId:K,calendarId:t,storyId:r}}}));return[].concat(Object(Ce.a)(c),Object(Ce.a)(o))},Rn=function(){var e=new Date;return Object(x.a)(e,10).getFullYear()},Tn=function(e,n,r){var t=Object(x.a)(e,31),a=Se(e.toISOString()),c=Object(oe.a)(t,11),o=Se(c.toISOString()),i=Se(Object(x.a)(Object(je.a)(c,6),-1).toISOString());return[{id:ge(),title:"Limitation till WorkingHoliday",start:a,end:o,resourceId:$,storyId:n,extendedProps:{resourceId:$,storyId:n,calendarId:r}},{id:ge(),title:"Application Limit",start:a,end:i,storyId:n,resourceId:$,extendedProps:{storyId:n,resourceId:$,calendarId:r}}]},Fn=function(){var e=Object(p.b)(),n=Object(p.c)(Qe),r=c.a.useCallback((function(n){var r,t=J,a=function(e){var n=e.birth,r=e.calendarId,t=new Date(n),a="PROFILE_ID";return{id:a,calendarId:r,name:Ee(t),resources:Ln({calendarId:r,storyId:a}),events:Pn({calendarId:r,storyId:a,startDate:t})}}({birth:n,calendarId:t}),c={id:(r={id:t,stories:[a]}).id,stories:r.stories};e(Be({calendars:[c]}))}),[e]),t=c.a.useCallback((function(n){if(n.resource){var r=n.resource.extendedProps.storyId;if(r){var t=n.resource.extendedProps.calendarId;if(t){var a=ke({id:ge(),resourceId:n.resource.id,calendarId:t,storyId:r,start:n.startStr,end:n.endStr});e(Je({event:a,calendarId:t,storyId:r}))}else console.warn("Unexpected data not including calendarId.")}else console.warn("Unexpected data not including storyId.")}else console.warn("Unexpected data that info does not have resource.")}),[e]),a=c.a.useMemo((function(){var e;return null!==(e=null===n||void 0===n?void 0:n.stories)&&void 0!==e?e:[]}),[n]),o=c.a.useMemo((function(){var e;return null!==(e=null===n||void 0===n?void 0:n.stories.flatMap((function(e){return e.events})))&&void 0!==e?e:[]}),[n]),i=c.a.useMemo((function(){var e;return null!==(e=null===n||void 0===n?void 0:n.stories.flatMap((function(e){return e.resources})))&&void 0!==e?e:[]}),[n]);return{calendar:n,stories:a,events:o,resources:i,init:r,select:t}},An=Object(y.b)({name:"storyModal",initialState:{story:null},reducers:{push:function(e,n){var r=n.payload;e.story=r},pop:function(e,n){e.story=null}}}),Wn=function(e){return!!e.ui.storyModal.story},_n=function(e){return e.ui.storyModal.story},Nn=function(e){var n=e.ui.storyModal.story;if(!n)return null;var r=n.calendarId,t=n.storyId,a=e.features.userCalendars.calendars.findIndex((function(e){return e.id===r}));if(-1!==a)return e.features.userCalendars.calendars[a].stories.find((function(e){return e.id===t}));console.warn("cannot find calendar on removeStory",r)},Gn=An.actions,Bn=Gn.push,Hn=Gn.pop,Yn=An.reducer,Un=Object(y.b)({name:"eventModal",initialState:{event:null},reducers:{push:function(e,n){var r=n.payload;e.event=r},pop:function(e,n){e.event=null}}}),Vn=function(e){return!!e.ui.eventModal.event},zn=function(e){return e.ui.eventModal.event},Jn=function(e){var n=e.ui.eventModal.event;if(!n)return null;var r=n.calendarId,t=n.storyId,a=n.eventId,c=e.features.userCalendars.calendars.findIndex((function(e){return e.id===r}));if(-1===c)console.warn("cannot find calendar on removeResource",r);else{var o=e.features.userCalendars.calendars[c].stories.findIndex((function(e){return e.id===t}));if(!(-1===o))return e.features.userCalendars.calendars[c].stories[o].events.find((function(e){return e.id===a}));console.warn("cannot find story on removeResource",r)}},Kn=Un.actions,$n=Kn.push,qn=Kn.pop,Qn=Un.reducer,Xn=r(72),Zn=r(170),er=function(){var e=Object(p.b)();return{remove:c.a.useCallback((function(n){var r=n.calendarId,t=n.storyId;window.confirm("Do you remove this story?")&&e(Ve({storyId:t,calendarId:r}))}),[e]),update:c.a.useCallback((function(n,r,t){var a=function(e,n){if(n.name&&(e=Object(W.a)(Object(W.a)({},e),{},{name:n.name})),n.resources){var r=n.resources.reduce((function(n,r){var t=e.resources.findIndex((function(e){return e.id===r.id}));if(-1===t)return console.warn("not upsert feature on story yet"),n;var a=e.resources[t],c=Object(W.a)(Object(W.a)({},a),r);return[].concat(Object(Ce.a)(n),[c])}),[]);e=Object(W.a)(Object(W.a)({},e),{},{resources:r})}return e}(r,t);e(ze(Object(W.a)(Object(W.a)({},n),{},{newStory:a})))}),[e]),create:c.a.useCallback((function(n,r){var t=n.calendarId,a=function(e){var n=null!==e&&void 0!==e?e:{},r=n.id,t=n.calendarId,a=n.events,c=n.resources,o=n.name,i=null!==r&&void 0!==r?r:ge(),d=null!==t&&void 0!==t?t:ge(),s=ge();return{id:i,calendarId:d,events:null!==a&&void 0!==a?a:[ke({id:s,storyId:i})],resources:null!==c&&void 0!==c?c:[we({calendarId:d,storyId:i})],name:null!==o&&void 0!==o?o:"No Name"}}({calendarId:t});e(Ue({calendarId:t,story:a}))}),[e])}};function nr(){var e=Object(u.a)(["\n  padding: 1rem;\n  text-align: right;\n"]);return nr=function(){return e},e}function rr(){var e=Object(u.a)(["\n  padding: 1rem;\n"]);return rr=function(){return e},e}function tr(){var e=Object(u.a)(["\n  border: none;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 1rem;\n  padding: 1rem;\n  margin: 1rem;\n  border: 1px solid lightgray;\n"]);return tr=function(){return e},e}function ar(){var e=Object(u.a)(["\n  display: flex;\n  align-items: center;\n"]);return ar=function(){return e},e}function cr(e){var n=e.isOpen,r=e.onClose,a=Object(p.c)(_n),o=null===a||void 0===a?void 0:a.calendarId,i=Object(p.c)(Nn),d=Object(Xn.a)(),s=d.register,l=d.handleSubmit,u=er(),b=u.create,j=u.remove,f=u.update,O=function(){var e=Object(p.b)(),n=Object(p.c)(Qe),r=c.a.useCallback((function(r){var t=r.calendarId,a=r.storyId,c=n.stories.findIndex((function(e){return e.id===a}));if(-1===c)console.warn("cannot find story on updateResource",t);else{for(var o=n.stories[c].resources,i={idx:-1,order:-1},d=0;d<o.length;d++){var s,l=null!==(s=o[d].order)&&void 0!==s?s:-1;l>i.order&&(i={idx:d,order:l})}var u=we({calendarId:t,storyId:a,order:i.order+1});e(He({calendarId:t,storyId:a,resource:u}))}}),[e,n]);return{remove:c.a.useCallback((function(n){var r=n.calendarId,t=n.resourceId,a=n.storyId;window.confirm("Do you remove this resource?")&&e(Ye({resourceId:t,storyId:a,calendarId:r}))}),[e]),push:r}}(),v=O.push,I=O.remove,y=c.a.useCallback((function(){if(!a)return console.warn("Invalid data status when to update resource.");j(a),r()}),[a,j,r]),x=c.a.useCallback((function(e){return function(){if(!a)return console.warn("Invalid data status when to remove resource.");I(Object(W.a)(Object(W.a)({},a),{},{resourceId:e}))}}),[a,I]),m=c.a.useCallback((function(){if(!a)return console.warn("Invalid data status when to add resource.");v(a)}),[a,v]),g=c.a.useCallback((function(){o&&b({calendarId:o})}),[b,o]),C=c.a.useCallback((function(e){if(!a||!i)return console.warn("Invalid data status when to update story.");f(a,i,e),r()}),[f,a,i,r]);return i?Object(t.jsxs)(pn.a,{onClose:r,open:n,children:[Object(t.jsx)(yn.a,{children:Object(t.jsx)("form",{onSubmit:l(C),children:Object(t.jsx)(or,{children:Object(t.jsx)(h.a,{inputRef:s,name:"name",defaultValue:i.name,variant:"outlined",label:"Story Name"})})})}),Object(t.jsx)(xn.a,{dividers:!0,children:Object(t.jsx)("div",{children:Object(t.jsxs)("form",{onSubmit:l(C),children:[i.resources.map((function(e,n){var r="resources[".concat(n,"]");return Object(t.jsxs)(ir,{name:r,children:[Object(t.jsx)("input",{type:"hidden",name:"".concat(r,".id"),ref:s,value:e.id}),Object(t.jsx)(h.a,{defaultValue:e.FIELD1,inputRef:s,name:"".concat(r,".").concat(Y),label:"Field1"}),Object(t.jsx)(h.a,{defaultValue:e.FIELD2,inputRef:s,name:"".concat(r,".").concat(U),label:"Field2"}),Object(t.jsx)(In.a,{onClick:x(e.id),color:"secondary",variant:"contained",children:"Delete"})]},r)})),Object(t.jsx)(dr,{children:Object(t.jsx)(In.a,{onClick:m,variant:"outlined",color:"primary",children:"+ Add Resource"})}),Object(t.jsx)(sr,{children:Object(t.jsx)(In.a,{type:"submit",variant:"contained",color:"primary",children:"Update"})})]})})}),Object(t.jsxs)(Zn.a,{children:[Object(t.jsx)(In.a,{onClick:y,color:"secondary",variant:"contained",children:"Delete this story"}),Object(t.jsx)(In.a,{onClick:g,color:"primary",children:"Add New Story"})]})]}):Object(t.jsx)(t.Fragment,{})}var or=b.a.div(ar()),ir=b.a.fieldset(tr()),dr=b.a.div(rr()),sr=b.a.div(nr()),lr=function(){var e=Object(p.b)();return{remove:c.a.useCallback((function(n){var r=n.calendarId,t=n.storyId,a=n.eventId;window.confirm("Do you remove this story?")&&e(Ke({calendarId:r,storyId:t,eventId:a}))}),[e]),update:c.a.useCallback((function(n,r,t){var a=function(e,n){var r=n.title;return Object.assign(Object(W.a)({},e),void 0!==r&&{title:r})}(r,t);e($e(Object(W.a)(Object(W.a)({},n),{},{newEvent:a})))}),[e])}};function ur(e){var n=e.isOpen,r=e.onClose,a=Object(p.c)(zn),o=Object(p.c)(Jn),i=lr(),d=i.remove,s=i.update,l=c.a.useCallback((function(){if(!a)return console.warn("Invalid data status when to update event.");d(a),r()}),[a,d,r]),u=c.a.useCallback((function(e){if(!a||!o)return console.warn("Invalid data status when to remove event.");s(a,o,e),r()}),[a,o,s,r]),b=Object(Xn.a)(),j=b.register,f=b.handleSubmit;return Object(t.jsxs)(pn.a,{onClose:r,open:n,children:[Object(t.jsx)(yn.a,{children:"Event"}),Object(t.jsx)(xn.a,{dividers:!0,children:Object(t.jsxs)("form",{onSubmit:f(u),children:[Object(t.jsx)(h.a,{inputRef:j,name:"title",defaultValue:null===o||void 0===o?void 0:o.title,label:"Title",variant:"outlined"}),Object(t.jsx)(In.a,{type:"submit",children:"rename"})]})}),Object(t.jsx)(Zn.a,{children:Object(t.jsx)(In.a,{onClick:l,variant:"contained",color:"secondary",children:"Remove"})})]})}var br={selectable:!0,editable:!0};function jr(){var e=function(){var e=Object(p.b)();return{push:c.a.useCallback((function(n){var r=n.storyId,t=n.calendarId;e(Bn({calendarId:t,storyId:r}))}),[e]),pop:c.a.useCallback((function(){e(Hn())}),[e]),isOpen:Object(p.c)(Wn)}}(),n=e.push,r=e.pop,a=e.isOpen,o=function(){var e=Object(p.b)();return{push:c.a.useCallback((function(n){var r=n.eventId,t=n.storyId,a=n.calendarId;e($n({calendarId:a,eventId:r,storyId:t}))}),[e]),pop:c.a.useCallback((function(){e(qn())}),[e]),isOpen:Object(p.c)(Vn)}}(),i=o.pop,d=o.isOpen,s=M().birth,l=Object(p.b)(),u=function(e){var n=e.createOpenHandle,r=Object(p.c)(Qe);return{resourceGroupLabelContent:c.a.useCallback((function(e){var t=e.groupValue;if(r){var a=r.stories.find((function(e){return e.id===t}));if(a){var c;a.name?c=a.name:(console.warn("cannot find this story name",t),c="No Name");var o=n({calendarId:"MY_CALENDAR_ID",storyId:t}),i=document.createElement("span");i.style.display="flex",i.style.justifyContent="space-between";var d=document.createElement("i");d.innerHTML=c+" ",i.appendChild(d);var s=document.createElement("button");return s.innerHTML="\ufe19",s.onclick=o,i.appendChild(s),{domNodes:[i]}}console.warn("cannot find story",t)}}),[r,n])}}({createOpenHandle:c.a.useCallback((function(e){var r=e.calendarId,t=e.storyId;return function(){l(Bn({calendarId:r,storyId:t})),n({calendarId:r,storyId:t})}}),[n,l])}).resourceGroupLabelContent,b=Fn(),j=b.events,f=b.resources,O=b.init,v=b.select,h=c.a.useCallback((function(e){var n=e.event.extendedProps.calendarId;if(!n)return console.warn("Invalid data. cannot find calendarId.");var r=e.event.id;if(!r)return console.warn("Invalid data. cannot find eventId.");var t=e.event.extendedProps.storyId;if(!t)return console.warn("Invalid data. cannot find storyId.");l($n({calendarId:n,eventId:r,storyId:t}))}),[l]);return c.a.useEffect((function(){O(s)}),[s,O]),Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)(ce,Object(W.a)({events:j,resources:f,select:v,eventClick:h,initialDate:"2020-06-01",resourceGroupLabelContent:u},br)),Object(t.jsx)(cr,{isOpen:a,onClose:r}),Object(t.jsx)(ur,{isOpen:d,onClose:i})]})}function fr(){var e=Object(u.a)(["\n  display: grid;\n  gap: 1rem;\n  padding: 0.3rem;\n  grid-template-columns: auto 2rem 1fr;\n  grid-template-rows: auto;\n"]);return fr=function(){return e},e}function Or(){var e=Object(u.a)(["\n  display: inline-block;\n  margin-right: 1rem;\n"]);return Or=function(){return e},e}function vr(){var e=c.a.useState(24),n=Object(R.a)(e,2),r=n[0],a=n[1],o=c.a.useState(12),i=Object(R.a)(o,2),d=i[0],s=i[1],l=c.a.useCallback((function(e){var n=e.target.value,r=""===n?0:parseInt(n);Number.isInteger(r)&&a(r)}),[]),u=c.a.useCallback((function(e){var n=e.target.value,r=""===n?0:parseInt(n);Number.isInteger(r)&&s(r)}),[]);return Object(t.jsx)(O.a,{children:Object(t.jsxs)(v.a,{children:[Object(t.jsx)("h2",{children:"Template Options(TODO: not working yet)"}),Object(t.jsxs)(Ir,{children:[Object(t.jsx)("label",{children:"School Period(Month)"}),Object(t.jsx)(h.a,{value:r,onChange:l}),Object(t.jsx)("input",{type:"range",min:"0",max:60,id:"schoolPeriod",onChange:l,value:r}),Object(t.jsx)("label",{children:"Co-op Period(Month)"}),Object(t.jsx)(h.a,{value:d,onChange:u}),Object(t.jsx)("input",{type:"range",min:"0",max:60,id:"schoolPeriod",onChange:u,value:d}),Object(t.jsx)("label",{children:"School start from (Month)"}),Object(t.jsx)("span",{}),Object(t.jsx)("div",{children:Array.from({length:12}).map((function(e,n){var r=n+1;return Object(t.jsxs)(hr,{children:[Object(t.jsx)("label",{children:r}),Object(t.jsx)("input",{type:"checkbox",value:r})]},r)}))})]})]})})}var hr=b.a.div(Or()),Ir=b.a.div(fr());function pr(){var e=Object(u.a)([""]);return pr=function(){return e},e}function yr(){var e=Object(u.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 2rem;\n"]);return yr=function(){return e},e}function xr(){var e=Object(u.a)(["\n  padding: 0 3rem;\n  display: grid;\n  gap: 5rem;\n"]);return xr=function(){return e},e}function mr(){var e=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n"]);return mr=function(){return e},e}var gr=function(){return Object(t.jsx)("h2",{children:"Temapltes"})};function Cr(){return Object(t.jsxs)(Sr,{children:[Object(t.jsx)(wn,{}),Object(t.jsxs)(kr,{children:[Object(t.jsx)(jr,{}),Object(t.jsxs)(wr,{children:[Object(t.jsx)(L,{}),Object(t.jsx)(vr,{})]}),Object(t.jsxs)(Er,{children:[Object(t.jsx)(gr,{}),Object(t.jsx)(cn,{})]})]}),Object(t.jsx)(fn,{})]})}var Sr=b.a.div(mr()),kr=b.a.div(xr()),wr=b.a.div(yr()),Er=b.a.div(pr());r(132),r(133);var Mr=function(){return Object(t.jsx)("div",{className:"App",children:Object(t.jsx)(l,{children:Object(t.jsx)(Cr,{})})})},Dr=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,188)).then((function(n){var r=n.getCLS,t=n.getFID,a=n.getFCP,c=n.getLCP,o=n.getTTFB;r(e),t(e),a(e),c(e),o(e)}))},Lr=r(35),Pr=Object(Lr.c)({storyModal:Yn,eventModal:Qn}),Rr=Object(Lr.c)({templateCalendar:Ae,userCalendars:qe,user:w}),Tr=Object(Lr.c)({features:Rr,ui:Pr});var Fr=Object(y.a)({reducer:Tr});function Ar(e){var n=e.children;return Object(t.jsx)(p.a,{store:Fr,children:n})}i.a.render(Object(t.jsx)(c.a.StrictMode,{children:Object(t.jsx)(Ar,{children:Object(t.jsx)(Mr,{})})}),document.getElementById("root")),Dr()}},[[134,1,2]]]);
//# sourceMappingURL=main.b2d1cd76.chunk.js.map