(function(e){function n(n){for(var o,a,i=n[0],c=n[1],u=n[2],p=0,s=[];p<i.length;p++)a=i[p],Object.prototype.hasOwnProperty.call(l,a)&&l[a]&&s.push(l[a][0]),l[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);h&&h(n);while(s.length)s.shift()();return r.push.apply(r,u||[]),t()}function t(){for(var e,n=0;n<r.length;n++){for(var t=r[n],o=!0,a=1;a<t.length;a++){var c=t[a];0!==l[c]&&(o=!1)}o&&(r.splice(n--,1),e=i(i.s=t[0]))}return e}var o={},l={3:0},r=[];function a(e){return i.p+"js/"+({}[e]||e)+"."+{1:"b6e8bff4",2:"55c1523f",4:"10a30d2b",5:"8d2d13bd",6:"0db1a68a",7:"dcd7ded3",8:"b2f131ca",9:"8881a721",10:"ad60cf4b",11:"491105e0",12:"e631062c",13:"fc51c7ed",14:"a3ddd3b5",15:"9108f068",16:"c376a413",17:"3ab86132",18:"9f80ec71",19:"7c80c33e",20:"458a791c"}[e]+".js"}function i(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t=l[e];if(0!==t)if(t)n.push(t[2]);else{var o=new Promise((function(n,o){t=l[e]=[n,o]}));n.push(t[2]=o);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=a(e);var u=new Error;r=function(n){c.onerror=c.onload=null,clearTimeout(p);var t=l[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;u.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",u.name="ChunkLoadError",u.type=o,u.request=r,t[1](u)}l[e]=void 0}};var p=setTimeout((function(){r({type:"timeout",target:c})}),12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(n)},i.m=e,i.c=o,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)i.d(t,o,function(n){return e[n]}.bind(null,o));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=n,c=c.slice();for(var p=0;p<c.length;p++)n(c[p]);var h=u;r.push([0,0]),t()})({0:function(e,n,t){e.exports=t("2f39")},"0047":function(e,n,t){},"2f39":function(e,n,t){"use strict";t.r(n);var o=t("c973"),l=t.n(o),r=(t("9f29"),t("7d6e"),t("e54f"),t("985d"),t("0047"),t("2b0e")),a=t("1f91"),i=t("42d2"),c=t("b05d"),u=t("2a19"),p=t("b12a");r["a"].use(c["a"],{config:{},lang:a["a"],iconSet:i["a"],plugins:{Notify:u["a"],AppFullscreen:p["a"]}});var h=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"q-app"}},[t("router-view")],1)},s=[],d={name:"App"},m=d,f=t("2877"),b=Object(f["a"])(m,h,s,!1,null,null,null),P=b.exports,g=t("2f62");r["a"].use(g["a"]);var v=function(){const e=new g["a"].Store({modules:{},state:{score:0},mutations:{increment(e,n){e.score=e.score+n}},actions:{addScore({commit:e},n){e("increment",n)}},strict:!1});return e},y=t("8c4f");t("e6cf");const S=[{path:"/",component:()=>Promise.all([t.e(0),t.e(2)]).then(t.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([t.e(0),t.e(19)]).then(t.bind(null,"8b24"))}]},{path:"/index2",component:()=>Promise.all([t.e(0),t.e(2)]).then(t.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([t.e(0),t.e(20)]).then(t.bind(null,"1178"))}]},{path:"/firstStage",component:()=>Promise.all([t.e(0),t.e(1)]).then(t.bind(null,"0435")),children:[{path:"",component:()=>Promise.all([t.e(0),t.e(14)]).then(t.bind(null,"44f0"))}]},{path:"/secondStage",component:()=>Promise.all([t.e(0),t.e(1)]).then(t.bind(null,"0435")),children:[{path:"",component:()=>Promise.all([t.e(0),t.e(16)]).then(t.bind(null,"e3f0"))}]},{path:"/thirthStage",component:()=>Promise.all([t.e(0),t.e(1)]).then(t.bind(null,"0435")),children:[{path:"",component:()=>Promise.all([t.e(0),t.e(4)]).then(t.bind(null,"3a0f"))}]},{path:"/fourStage",component:()=>Promise.all([t.e(0),t.e(1)]).then(t.bind(null,"0435")),children:[{path:"",component:()=>Promise.all([t.e(0),t.e(15)]).then(t.bind(null,"685d"))}]},{path:"/fifthStage",component:()=>Promise.all([t.e(0),t.e(1)]).then(t.bind(null,"0435")),children:[{path:"",component:()=>Promise.all([t.e(0),t.e(13)]).then(t.bind(null,"8b96"))}]},{path:"/sixStage",component:()=>Promise.all([t.e(0),t.e(1)]).then(t.bind(null,"0435")),children:[{path:"",component:()=>Promise.all([t.e(0),t.e(9)]).then(t.bind(null,"e223"))}]},{path:"/sevenStage",component:()=>Promise.all([t.e(0),t.e(1)]).then(t.bind(null,"0435")),children:[{path:"",component:()=>Promise.all([t.e(0),t.e(8)]).then(t.bind(null,"490e"))}]},{path:"/eithStage",component:()=>Promise.all([t.e(0),t.e(1)]).then(t.bind(null,"0435")),children:[{path:"",component:()=>Promise.all([t.e(0),t.e(5)]).then(t.bind(null,"516c"))}]},{path:"/nineStage",component:()=>Promise.all([t.e(0),t.e(1)]).then(t.bind(null,"0435")),children:[{path:"",component:()=>Promise.all([t.e(0),t.e(7)]).then(t.bind(null,"319d"))}]},{path:"/tenStage",component:()=>Promise.all([t.e(0),t.e(1)]).then(t.bind(null,"0435")),children:[{path:"",component:()=>Promise.all([t.e(0),t.e(17)]).then(t.bind(null,"b54f"))}]},{path:"/ilevenStage",component:()=>Promise.all([t.e(0),t.e(1)]).then(t.bind(null,"0435")),children:[{path:"",component:()=>Promise.all([t.e(0),t.e(6)]).then(t.bind(null,"137f"))}]},{path:"/tuelfStage",component:()=>Promise.all([t.e(0),t.e(1)]).then(t.bind(null,"0435")),children:[{path:"",component:()=>Promise.all([t.e(0),t.e(10)]).then(t.bind(null,"d37f"))}]},{path:"/13Stage",component:()=>Promise.all([t.e(0),t.e(1)]).then(t.bind(null,"0435")),children:[{path:"",component:()=>Promise.all([t.e(0),t.e(11)]).then(t.bind(null,"a075"))}]},{path:"/14Stage",component:()=>Promise.all([t.e(0),t.e(2)]).then(t.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([t.e(0),t.e(12)]).then(t.bind(null,"6407"))}]},{path:"*",component:()=>Promise.all([t.e(0),t.e(18)]).then(t.bind(null,"e51e"))}];var w=S;r["a"].use(y["a"]);var j=function(){const e=new y["a"]({scrollBehavior:()=>({x:0,y:0}),routes:w,mode:"hash",base:""});return e},O=function(){return x.apply(this,arguments)};function x(){return x=l()((function*(){const e="function"===typeof v?yield v({Vue:r["a"]}):v,n="function"===typeof j?yield j({Vue:r["a"],store:e}):j;e.$router=n;const t={router:n,store:e,render:e=>e(P),el:"#q-app"};return{app:t,store:e,router:n}})),x.apply(this,arguments)}function _(){return k.apply(this,arguments)}function k(){return k=l()((function*(){const{app:e,store:n,router:t}=yield O();new r["a"](e)})),k.apply(this,arguments)}_()}});