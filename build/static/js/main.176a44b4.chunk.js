(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},20:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(13),c=t.n(a),l=(t(20),t(14)),u=t(2),i=function(e){var n=e.persons,t=e.filter,r=e.onDelete;console.log("Handling entry data: ",n);var a=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})).map((function(e){return o.a.createElement(s,{key:e.name,person:e,onDelete:r})}));return o.a.createElement("div",null,a)},s=function(e){var n=e.person,t=e.onDelete,r={container:{marginTop:5},entry:{},button:{backgroundColor:"transparent",border:"none",color:"red",paddingLeft:10,paddingRight:10,paddingTop:5,paddingBottom:5,marginRight:5}};return o.a.createElement("div",{style:r.container},o.a.createElement("div",null,o.a.createElement("button",{style:r.button,onClick:function(){return t(n)}},"X"),n.name," ",n.number))},d=function(e){var n=Object(r.useState)(""),t=Object(u.a)(n,2),a=t[0],c=t[1],l=Object(r.useState)(""),i=Object(u.a)(l,2),s=i[0],d=i[1];return o.a.createElement("form",null,o.a.createElement("div",null,"Name: ",o.a.createElement("input",{value:a,onChange:function(e){c(e.target.value)}})),o.a.createElement("div",null,"Number: ",o.a.createElement("input",{value:s,onChange:function(e){d(e.target.value)}})),o.a.createElement("div",null,o.a.createElement("button",{type:"submit",onClick:function(n){n.preventDefault(),e.handleForm({name:a,number:s})}},"Add")))},f=function(e){var n=Object(r.useState)(""),t=Object(u.a)(n,2),a=t[0],c=t[1];return o.a.createElement("div",{style:{marginTop:15,marginBottom:15}},"Filter: ",o.a.createElement("input",{value:a,onChange:function(n){c(n.target.value),e.filterChangedHandler(n.target.value)}}))},m=t(3),p=t.n(m),b="/api/persons",g=function(e){return e.then((function(e){return e.data}))},v=function(){return g(p.a.get(b))},h=function(e){return g(p.a.post(b,e))},y=function(e){return g(p.a.put("".concat(b,"/").concat(e.id),e))},O=function(e){return g(p.a.delete("".concat(b,"/").concat(e.id)))},E=function(e){var n=e.label;if(!n)return null;var t=e.type,r={container:{backgroundColor:function(){switch(t){case"danger":return"red";case"success":return"green";default:return"#555555"}}(),marginTop:10,width:400,verticalAlign:"center"},label:{color:"white",lineHeight:3,paddingLeft:10}};return console.log("message",n,t),o.a.createElement("div",{style:r.container},o.a.createElement("label",{style:r.label},n))};function j(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}var w=function(){var e=Object(r.useState)([]),n=Object(u.a)(e,2),t=n[0],a=n[1],c=Object(r.useState)(""),s=Object(u.a)(c,2),m=s[0],p=s[1],b=Object(r.useState)({}),g=Object(u.a)(b,2),w=g[0],k=g[1];Object(r.useEffect)((function(){v().then((function(e){console.log("rendering",e),a(e)}))}),[]);var C=function(e,n){console.log("message",{text:e,type:n}),k({text:e,type:n}),setTimeout((function(){return k({})}),5e3)};return o.a.createElement("div",{style:{marginLeft:25}},o.a.createElement("h2",null,"Phonebook"),o.a.createElement(d,{handleForm:function(e){var n=t.find((function(n){return n.name===e.name}));if(n){if(window.confirm("".concat(e.name," already found in the phonebook. Change number to ").concat(e.number,"?"))){var r=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?j(t,!0).forEach((function(n){Object(l.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):j(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},n,{number:e.number});y(r).then(a(t.map((function(e){return e.id!==r.id?e:r})))).catch((function(e){console.log("error updating person",e),C("Person ".concat(n.name," already removed."),"danger"),a(t.filter((function(e){return e.id!==r.id})))}))}}else h(e).then((function(n){console.log("person added",n),C("Person ".concat(e.name," added."),"success"),a(t.concat(n))}))}}),o.a.createElement("h2",null,"Numbers"),o.a.createElement(f,{filterChangedHandler:function(e){return p(e)}}),o.a.createElement(i,{persons:t,filter:m,onDelete:function(e){var n=window.confirm("Are you sure you want to delete entry\n".concat(e.name));console.log("delete person ".concat(e," confirmation"),n),n?O(e).then((function(n){console.log("person deleted",e),a(t.filter((function(n){return n.id!==e.id})))})):console.log("person not deleted",e)}}),o.a.createElement(E,{label:w.text,type:w.type}))};c.a.render(o.a.createElement(w,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.176a44b4.chunk.js.map