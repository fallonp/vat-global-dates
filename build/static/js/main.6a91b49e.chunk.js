(this["webpackJsonpvat-global-dates"]=this["webpackJsonpvat-global-dates"]||[]).push([[0],{102:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(14),r=t.n(l),o=(t(43),t(15)),s=(t(44),t(45),t(8)),i=t.n(s),u=t(36),m=t.n(u),d=t(37),h=t.n(d),p=function(){var e=Object(n.useState)([new Date,new Date]),a=Object(o.a)(e,2),t=a[0],l=a[1],r=Object(n.useState)(""),s=Object(o.a)(r,2),u=s[0],d=s[1],p=Object(o.a)(t,2),f=p[0],g=p[1],E=function(e){return e%100===0?e%400===0:e%4===0},b=Math.round((g.getTime()-f.getTime())/864e5),v=E(f.getFullYear())?"Yes":"No",w=E(g.getFullYear())?"Yes":"No",y=Math.floor(b/7)+(1===f.getDay()?1:0);return Object(n.useEffect)((function(){m.a.get("http://numbersapi.com/".concat(f.getMonth()+1,"/").concat(f.getDate(),"/date")).then((function(e){d(e.data)})).catch((function(e){console.error(e)}))}),[f,g]),c.a.createElement("div",null,c.a.createElement("header",null,c.a.createElement("div",{key:i.a.generate(),class:"animated rubberBand"},"VAT Global Date Range Picker")),c.a.createElement("div",{class:"content"},c.a.createElement(h.a,{onChange:function(e){return l(e)},value:t,clearIcon:null}),c.a.createElement("p",null,"Days Between -"," ",c.a.createElement("span",{class:"animated flash",key:i.a.generate()},b)),c.a.createElement("p",null,"Start Leap Year -"," ",c.a.createElement("span",{class:"animated flash",key:i.a.generate()},v)),c.a.createElement("p",null,"End Leap Year -"," ",c.a.createElement("span",{class:"animated flash",key:i.a.generate()},w)),c.a.createElement("p",null,"Number of Mondays -"," ",c.a.createElement("span",{class:"animated flash",key:i.a.generate()},y)),c.a.createElement("p",null,"What happened on this day",c.a.createElement("span",{class:"what-happened"}," ",u))))},f=function(){return c.a.createElement(p,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},38:function(e,a,t){e.exports=t(102)},43:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){}},[[38,1,2]]]);
//# sourceMappingURL=main.6a91b49e.chunk.js.map