(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"516c":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-page",[n("q-page-container",[n("pregunta",{attrs:{pregunta:e.pregunta}}),n("image-component",{attrs:{url:e.url,eval:e.eval}})],1)],1)},s=[],i=n("b4c8"),r=n("663b"),o={components:{ImageComponent:r["a"],Pregunta:i["a"]},data:()=>({pregunta:"¿Qué me enamoró de ti físicamente?",nice:!0,bad:!1,url:[{src:"/img/eith/1.jpg",val:!0},{src:"/img/eith/2.jpg",val:!1},{src:"/img/eith/3.jpg",val:!1},{src:"/img/eith/4.jpg",val:!1}],mensaje:"mi Click",mensaje2:"No baby eso no fue",color:"",to:"/nineStage"}),watch:{date(e){this.eval(e)}},methods:{showNotif(e,t,n){this.$q.notify({message:e,color:t,icon:n,position:"center",timeout:1500})},eval(e){e?(this.showNotif(this.mensaje,"green","mdi-heart"),this.$store.dispatch("addScore",5),setTimeout(()=>this.$router.push(this.to),2e3)):(this.showNotif(this.mensaje2,"red","mdi-heart-broken"),this.$store.dispatch("addScore",-5),setTimeout(()=>this.$router.push(this.to),2e3))}}},c=o,l=n("2877"),u=n("9989"),p=n("09e3"),m=n("eebe"),h=n.n(m),g=Object(l["a"])(c,a,s,!1,null,null,null);t["default"]=g.exports;h()(g,"components",{QPage:u["a"],QPageContainer:p["a"]})},"663b":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-center"},e._l(e.url,(function(t){return n("div",{key:t},[n("q-img",{staticClass:"q-ma-sm q-mt-lg",staticStyle:{"max-height":"150px","max-width":"150px",width:"150px",height:"150px"},attrs:{transition:"slide-down",src:t.src},on:{click:function(n){return e.eval(t.val)}}})],1)})),0)},s=[],i={name:"imageComponent",props:{url:{type:Array},eval:{type:Function}}},r=i,o=n("2877"),c=n("068f"),l=n("eebe"),u=n.n(l),p=Object(o["a"])(r,a,s,!1,null,"d6ce6b20",null);t["a"]=p.exports;u()(p,"components",{QImg:c["a"]})},b4c8:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h3",{staticClass:"flex-center q-ma-lg text-center"},[e._v("\n    "+e._s(e.pregunta)+"\n")])},s=[],i={name:"Pregunta",props:{pregunta:{type:String}}},r=i,o=n("2877"),c=Object(o["a"])(r,a,s,!1,null,"d315e940",null);t["a"]=c.exports}}]);