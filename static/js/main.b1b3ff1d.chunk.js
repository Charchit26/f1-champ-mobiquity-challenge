(this["webpackJsonpf1-champ-mobiquity-challenge"]=this["webpackJsonpf1-champ-mobiquity-challenge"]||[]).push([[0],{110:function(e,t,a){},111:function(e,t,a){},139:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(26),s=a.n(c),i=(a(110),a(111),a(5)),o=a(21),u=a.n(o),d=a(69),j=a(34),l=a(23),b=a(75),v=a.n(b),m="mobiquity",p="".concat(m,"-allWinners"),f="".concat(m,"-selectedYear"),h="http://ergast.com/api/f1",O="".concat(h,"/driverStandings/1.json"),x=function(){var e=Object(j.a)(u.a.mark((function e(){var t,a,n,r,c=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=c.length>0&&void 0!==c[0]?c[0]:2005,!(a=sessionStorage.getItem("".concat(p,"-").concat(t)))){e.next=4;break}return e.abrupt("return",JSON.parse(a));case 4:return n=t-1950,e.prev=5,e.next=8,v.a.get("".concat(O,"?offset=").concat(n));case 8:return r=e.sent,sessionStorage.setItem("".concat(p,"-").concat(t),JSON.stringify(r.data)),e.abrupt("return",r.data);case 13:return e.prev=13,e.t0=e.catch(5),e.abrupt("return",void 0);case 16:case"end":return e.stop()}}),e,null,[[5,13]])})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(j.a)(u.a.mark((function e(t){var a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a=sessionStorage.getItem("".concat(f,"-").concat(t)))){e.next=3;break}return e.abrupt("return",JSON.parse(a));case 3:return e.prev=3,e.next=6,v.a.get("".concat(h,"/").concat(t,"/results/1.json"));case 6:return n=e.sent,sessionStorage.setItem("".concat(f,"-").concat(t),JSON.stringify(n.data)),e.abrupt("return",n.data);case 11:return e.prev=11,e.t0=e.catch(3),e.abrupt("return",void 0);case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}(),y=a(68),N=a(153),S=a(154),D=a(4);function w(e){var t=e.data;if(!t)return Object(D.jsx)(D.Fragment,{children:"No Data"});var a=t.StandingsTable;return Object(D.jsx)("div",{className:"centeredList",children:Object(D.jsx)(N.a,{"data-testid":"listItem",animated:!0,relaxed:!0,verticalAlign:"middle",children:null===a||void 0===a?void 0:a.StandingsLists.map((function(e){var t=e.season,a=e.DriverStandings[0].Driver;return Object(D.jsx)(N.a.Item,{children:Object(D.jsx)(y.b,{to:"/year/".concat(t),state:{selectedDriver:a},children:Object(D.jsx)(S.a,{fluid:!0,header:"".concat(a.givenName," ").concat(a.familyName),meta:t})},t)})}))})})}function I(){var e=Object(n.useState)(),t=Object(l.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){function e(){return(e=Object(j.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(2005);case 2:(t=e.sent)&&r(Object(d.a)({},t.MRData));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)("h1",{children:"World Champions"}),a?Object(D.jsx)(w,{data:a}):Object(D.jsx)("div",{children:"loading..."})]})}var k=a(97),J=a.n(k);function R(e){var t=e.data,a=e.selectedDriver;if(!t)return Object(D.jsx)(D.Fragment,{children:"No Data"});var n=t.RaceTable;return Object(D.jsx)("div",{className:"centeredList",children:Object(D.jsx)(N.a,{"data-testid":"yearlyListItem",animated:!0,verticalAlign:"middle",children:null===n||void 0===n?void 0:n.Races.map((function(e){var t=e.round,n=e.raceName,r=e.Results[0].Driver;return Object(D.jsx)(S.a,{fluid:!0,className:J()({highlightedItem:a&&r.givenName===a.givenName}),header:"".concat(r.givenName," ").concat(r.familyName),meta:"Race Number ".concat(t," - ").concat(n)},t)}))})})}function F(){var e=Object(i.g)().year,t=Object(i.e)().state,a=t?t.selectedDriver:void 0,r=Object(n.useState)(),c=Object(l.a)(r,2),s=c[0],o=c[1];return Object(n.useEffect)((function(){function t(){return(t=Object(j.a)(u.a.mark((function t(){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g(e);case 2:(a=t.sent)&&o(Object(d.a)({},a.MRData));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),Object(D.jsxs)(D.Fragment,{children:[Object(D.jsxs)("h1",{children:["Winners Season ",e]}),s?Object(D.jsx)(R,{data:s,selectedDriver:a}):Object(D.jsx)("div",{children:"loading..."})]})}var L=a(155);var q=function(){return Object(D.jsxs)("div",{className:"App",children:[Object(D.jsx)(L.a,{as:"h2",image:"/images/f1_logo.svg","data-testid":"navHeader",className:"navHeader"}),Object(D.jsx)(y.a,{children:Object(D.jsxs)(i.c,{children:[Object(D.jsx)(i.a,{path:"/",element:Object(D.jsx)(I,{})}),Object(D.jsx)(i.a,{path:"year/:year",element:Object(D.jsx)(F,{})}),Object(D.jsx)(i.a,{path:"*",element:Object(D.jsx)(I,{})})]})})]})};a(138);s.a.render(Object(D.jsx)(r.a.StrictMode,{children:Object(D.jsx)(q,{})}),document.getElementById("root"))}},[[139,1,2]]]);
//# sourceMappingURL=main.b1b3ff1d.chunk.js.map