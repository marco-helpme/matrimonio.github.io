(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13],{"8b96":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",[a("q-page-container",[a("pregunta",{attrs:{pregunta:e.pregunta}}),a("div",{staticClass:"flex flex-center"},[a("q-icon",{staticClass:"q-ma-md",attrs:{name:"mdi-numeric-1",size:"100px",color:"light-green-13"},on:{click:function(t){return e.eval(e.bad)}}}),a("q-icon",{staticClass:"q-ma-md",attrs:{name:"mdi-numeric-2",size:"100px",color:"deep-orange"},on:{click:function(t){return e.eval(e.nice)}}}),a("q-icon",{staticClass:"q-ma-md",attrs:{name:"mdi-numeric-3",size:"100px",color:"teal"},on:{click:function(t){return e.eval(e.bad)}}}),a("q-icon",{staticClass:"q-ma-md",attrs:{name:"mdi-numeric-4",size:"100px",color:"amber"},on:{click:function(t){return e.eval(e.bad)}}})],1)],1)],1)},i=[],s=a("b4c8"),r={components:{Pregunta:s["a"]},data:()=>({pregunta:"¿Cuántos hijos vamos a tener?",nice:!0,bad:!1}),watch:{date(e){this.eval(e)}},methods:{showNotif(e,t,a){this.$q.notify({message:e,color:t,icon:a,position:"center",timeout:1500})},eval(e){!0===e?(this.showNotif("Mmmm cómo lo sabias","green","mdi-heart"),this.$store.dispatch("addScore",5),setTimeout(()=>this.$router.push("/sixStage"),2e3)):(this.showNotif("bad","red","mdi-heart-broken"),this.$store.dispatch("addScore",-5))}}},o=r,c=a("2877"),l=a("9989"),u=a("09e3"),m=a("0016"),d=a("eebe"),p=a.n(d),h=Object(c["a"])(o,n,i,!1,null,null,null);t["default"]=h.exports;p()(h,"components",{QPage:l["a"],QPageContainer:u["a"],QIcon:m["a"]})},b4c8:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h3",{staticClass:"flex-center q-ma-lg text-center"},[e._v("\n    "+e._s(e.pregunta)+"\n")])},i=[],s={name:"Pregunta",props:{pregunta:{type:String}}},r=s,o=a("2877"),c=Object(o["a"])(r,n,i,!1,null,"d315e940",null);t["a"]=c.exports}}]);