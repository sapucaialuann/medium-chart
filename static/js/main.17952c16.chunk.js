(this["webpackJsonpmedium-chart"]=this["webpackJsonpmedium-chart"]||[]).push([[0],{177:function(e,t,n){},178:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(52),o=n.n(c),i=(n(64),n(65),n(26)),s=n.n(i),u=n(53),l=n(54),f=n(58),d=n(55),m=n.n(d).a.create({baseURL:"https://api.covid19api.com"}),h=n(56);n(177);function p(){var e=Object(a.useState)({}),t=Object(f.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){(function(){var e=Object(l.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],n=[],e.next=4,m.get("dayone/country/brazil/status/confirmed").then((function(e){var a,r=Object(u.a)(e.data);try{for(r.s();!(a=r.n()).done;){var c=a.value;t.push(parseInt(c.Cases));var o=new Date(c.Date);n.push(o.getUTCDate())}}catch(i){r.e(i)}finally{r.f()}}));case 4:c({labels:n,datasets:[{label:"Confirmed cases",data:t}]});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement("div",{className:"container"},r.a.createElement(h.a,{data:n}))}var v=function(){return r.a.createElement(p,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},59:function(e,t,n){e.exports=n(178)},64:function(e,t,n){},65:function(e,t,n){}},[[59,1,2]]]);
//# sourceMappingURL=main.17952c16.chunk.js.map