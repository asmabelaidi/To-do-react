(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{19:function(t,e,n){},20:function(t,e,n){},21:function(t,e,n){},22:function(t,e,n){"use strict";n.r(e);var c=n(0),o=n(1),i=n.n(o),a=n(3),r=n.n(a),s=(n(19),n(7)),u=n(8),l=n(13),j=n(10),b=(n(20),n(11)),d=n(2),m=n(12),f=(n(21),n(9)),O=function(t){var e=t.items.map((function(e){return console.log(t),Object(c.jsx)("div",{className:"list",children:Object(c.jsxs)("p",{children:[Object(c.jsx)("input",{type:"text",value:e.noteText,id:e.key,onChange:function(n){return t.updateNote(n.target.value,e.key)}}),Object(c.jsx)("span",{class:"fa fa-trash my-icon","aria-hidden":"true",onClick:function(){return t.deleteItem(e.key)}})]})},e.key)}));return Object(c.jsx)("div",{children:Object(c.jsx)(f.a,{duration:400,easing:"ease-in-out",children:e})})},p=function(){var t=Object(o.useState)({listItems:[],currentItem:{noteText:"",key:""}}),e=Object(m.a)(t,2),n=e[0],i=e[1];return Object(c.jsxs)("div",{className:"container",children:[Object(c.jsxs)("form",{className:"form-inline to-do-form",onSubmit:function(t){t.preventDefault();var e=n.currentItem;if(console.log(e),""!==e.noteText){console.log("LIST ITEMS"+n.listItems);var c=[].concat(Object(b.a)(n.listItems),[e]);i({listItems:c,currentItem:{noteText:"",key:""}}),console.log(n)}},children:[Object(c.jsx)("input",{type:"text",placeholder:"what to do",maxlength:"35",value:n.currentItem.noteText,onChange:function(t){i(Object(d.a)(Object(d.a)({},n),{},{currentItem:{noteText:t.target.value,key:Date.now()}}))}}),Object(c.jsx)("button",{type:"submit",children:"Add"})]}),Object(c.jsx)(O,{items:n.listItems,deleteItem:function(t){var e=n.listItems.filter((function(e){return e.key!==t}));i(Object(d.a)(Object(d.a)({},n),{},{listItems:e}))},updateNote:function(t,e){var c=n.listItems.map((function(n){return n.key===e&&(n.noteText=t),n}));i(Object(d.a)(Object(d.a)({},n),{},{listItems:c}))}})]})},x=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(c.jsx)("div",{className:"app",children:Object(c.jsx)(p,{})})}}]),n}(o.Component),h=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(e){var n=e.getCLS,c=e.getFID,o=e.getFCP,i=e.getLCP,a=e.getTTFB;n(t),c(t),o(t),i(t),a(t)}))};r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(x,{})}),document.getElementById("root")),h()}},[[22,1,2]]]);
//# sourceMappingURL=main.d7e7371e.chunk.js.map