(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{a075:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",[a("q-page-container",[a("pregunta",{attrs:{pregunta:"Solo una más"}}),a("pregunta",{attrs:{pregunta:t.pregunta}}),a("div",{staticClass:" flex flex-center"},[a("q-btn",{staticClass:"q-ma-xl",attrs:{color:"green",rounded:"",size:"xl"},on:{click:function(e){return t.eval(!0)}}},[t._v("SI")]),a("q-btn",{staticClass:"q-ma-xl",attrs:{color:"red",rounded:"",size:"xl"},on:{click:t.no}},[t._v("NO")])],1)],1)],1)},o=[],s=a("b4c8"),r={components:{Pregunta:s["a"]},data:()=>({pregunta:"¿Te gustaría conocer el mundo conmigo?",nice:!0,bad:!1,url:[{src:"/img/nosotros/yo.jpg",val:!1},{src:"/img/nosotros/tu.jpg",val:!0}],frases:[{title:"positivo",val:!1},{title:"OHHH yeaa",val:!1},{title:"Matao",val:!0},{title:"Mmm Delicius",val:!1}],mensaje:"me encantaría",mensaje2:"que triste me pnongo",color:"",to:"/14Stage"}),watch:{date(t){this.eval(t)}},methods:{showNotif(t,e,a){this.$q.notify({message:t,color:e,icon:a,position:"center",timeout:1500})},eval(t){t?(this.showNotif(this.mensaje,"green","mdi-heart"),this.$store.dispatch("addScore",5),setTimeout(()=>this.$router.push(this.to),2e3)):(this.showNotif(this.mensaje2,"red","mdi-heart-broken"),this.$store.dispatch("addScore",-5),setTimeout(()=>this.$router.push(this.to),2e3))},no(){this.showNotif("lo siento el boton no funciona","red","mdi-heart-broken")}}},i=r,c=a("2877"),l=a("9989"),u=a("09e3"),p=a("9c40"),h=a("eebe"),m=a.n(h),g=Object(c["a"])(i,n,o,!1,null,null,null);e["default"]=g.exports;m()(g,"components",{QPage:l["a"],QPageContainer:u["a"],QBtn:p["a"]})},b4c8:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h3",{staticClass:"flex-center q-ma-lg text-center"},[t._v("\n    "+t._s(t.pregunta)+"\n")])},o=[],s={name:"Pregunta",props:{pregunta:{type:String}}},r=s,i=a("2877"),c=Object(i["a"])(r,n,o,!1,null,"d315e940",null);e["a"]=c.exports}}]);