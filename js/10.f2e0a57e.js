(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{"663b":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"flex flex-center"},e._l(e.url,(function(t){return a("div",{key:t},[a("q-img",{staticClass:"q-ma-sm q-mt-lg",staticStyle:{"max-height":"150px","max-width":"150px",width:"150px",height:"150px"},attrs:{transition:"slide-down",src:t.src},on:{click:function(a){return e.eval(t.val)}}})],1)})),0)},s=[],i={name:"imageComponent",props:{url:{type:Array},eval:{type:Function}}},o=i,r=a("2877"),l=a("068f"),c=a("eebe"),u=a.n(c),p=Object(r["a"])(o,n,s,!1,null,"d6ce6b20",null);t["a"]=p.exports;u()(p,"components",{QImg:l["a"]})},b4c8:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h3",{staticClass:"flex-center q-ma-lg text-center"},[e._v("\n    "+e._s(e.pregunta)+"\n")])},s=[],i={name:"Pregunta",props:{pregunta:{type:String}}},o=i,r=a("2877"),l=Object(r["a"])(o,n,s,!1,null,"d315e940",null);t["a"]=l.exports},d37f:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",[a("q-page-container",[a("pregunta",{attrs:{pregunta:e.pregunta}}),a("image-component",{attrs:{url:e.url,eval:e.eval}})],1)],1)},s=[],i=a("b4c8"),o=a("663b"),r={components:{ImageComponent:o["a"],Pregunta:i["a"]},data:()=>({pregunta:"¿Quién le pidió ser novios a quien?",nice:!0,bad:!1,url:[{src:"img/nosotros/yo.jpg",val:!1},{src:"img/nosotros/tu.jpg",val:!0}],frases:[{title:"positivo",val:!1},{title:"OHHH yeaa",val:!1},{title:"Matao",val:!0},{title:"Mmm Delicius",val:!1}],mensaje:"pues si con una carta muy linda",mensaje2:"No baby eso no",color:"",to:"/13Stage"}),watch:{date(e){this.eval(e)}},methods:{showNotif(e,t,a){this.$q.notify({message:e,color:t,icon:a,position:"center",timeout:1500})},eval(e){e?(this.showNotif(this.mensaje,"green","mdi-heart"),this.$store.dispatch("addScore",5),setTimeout(()=>this.$router.push(this.to),2e3)):(this.showNotif(this.mensaje2,"red","mdi-heart-broken"),this.$store.dispatch("addScore",-5),setTimeout(()=>this.$router.push(this.to),2e3))}}},l=r,c=a("2877"),u=a("9989"),p=a("09e3"),m=a("eebe"),h=a.n(m),g=Object(c["a"])(l,n,s,!1,null,null,null);t["default"]=g.exports;h()(g,"components",{QPage:u["a"],QPageContainer:p["a"]})}}]);