(this["webpackJsonpsd-0x-project-trybewallet"]=this["webpackJsonpsd-0x-project-trybewallet"]||[]).push([[0],{33:function(e,t,a){e.exports=a(47)},42:function(e,t,a){},43:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(15),o=a.n(l),c=a(19),i=a(10),s=(a(42),a(2)),u=a(12),m=a(17),d=a(18),h=a(8),p=a(22),E=a(21),v=function(e){return{type:"EXPENSE_SUBMIT",state:e}},b=function(){return{type:"EXPENSE_FAIL"}},f=(a(43),function(e){Object(p.a)(a,e);var t=Object(E.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={email:"",password:"",valid:!0},n.handleChange=n.handleChange.bind(Object(h.a)(n)),n.validation=n.validation.bind(Object(h.a)(n)),n.onSubmit=n.onSubmit.bind(Object(h.a)(n)),n}return Object(d.a)(a,[{key:"onSubmit",value:function(){var e=this.state.email;(0,this.props.submitEmail)(e)}},{key:"validation",value:function(){var e=this.state,t=e.email,a=e.password,n=!(/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/.test(t)&&a.length>5);this.setState({valid:n})}},{key:"handleChange",value:function(e){var t=this,a=e.target,n=a.name,r=a.value;this.setState(Object(u.a)({},n,r),(function(){return t.validation()}))}},{key:"render",value:function(){var e=this.state,t=e.email,a=e.password,n=e.valid;return r.a.createElement("div",{id:"divLogin"},r.a.createElement("h1",{className:"fs-2 font-monospace"},"TRYBEWALLET"),r.a.createElement("form",{id:"formLogin"},r.a.createElement("input",{"data-testid":"email-input",type:"email",placeholder:"Seu Email aqui",name:"email",value:t,onChange:this.handleChange}),r.a.createElement("input",{"data-testid":"password-input",type:"password",placeholder:"Sua senha aqui",name:"password",minLength:"6",value:a,onChange:this.handleChange}),r.a.createElement(c.b,{to:"/trybewallet/carteira"},r.a.createElement("button",{type:"button",id:"butaoSubmit",className:"btn btn-dark",disabled:n,onClick:this.onSubmit},"Entrar"))))}}]),a}(r.a.Component)),g=Object(i.b)(null,(function(e){return{submitEmail:function(t){return e({type:"EMAIL_SUBMIT",state:t})}}}))(f),y=a(13),x=a.n(y),j=a(20);var C=function(e){var t=e.value,a=e.handleChange;return r.a.createElement("label",{htmlFor:"valor"},"Valor:",r.a.createElement("input",{id:"valor",type:"text",name:"value",value:t,onChange:a}))};var O=function(e){var t=e.tag,a=e.handleChange;return r.a.createElement("label",{htmlFor:"despesa"},"Tag:",r.a.createElement("select",{className:"form-select",id:"despesa",name:"tag",value:t,onChange:a},r.a.createElement("option",{value:"Alimenta\xe7\xe3o"},"Alimenta\xe7\xe3o"),r.a.createElement("option",{value:"Lazer"},"Lazer"),r.a.createElement("option",{value:"Trabalho"},"Trabalho"),r.a.createElement("option",{value:"Transporte"},"Transporte"),r.a.createElement("option",{value:"Saude"},"Sa\xfade")))};var w=function(e){var t=e.method,a=e.handleChange;return r.a.createElement("label",{htmlFor:"metodo"},"M\xe9todo de pagamento:",r.a.createElement("select",{className:"form-select",id:"metodo",name:"method",value:t,onChange:a},r.a.createElement("option",{value:"Dinheiro"},"Dinheiro"),r.a.createElement("option",{value:"Cart\xe3o de cr\xe9dito"},"Cart\xe3o de cr\xe9dito"),r.a.createElement("option",{value:"Cart\xe3o de d\xe9bito"},"Cart\xe3o de d\xe9bito")))};var S=function(e){var t=e.currency,a=e.moedas,n=e.handleChange;return r.a.createElement("label",{htmlFor:"Moeda"},"Moeda:",r.a.createElement("select",{className:"form-select",role:"combobox",id:"Moeda",name:"currency",value:t,onChange:n},a.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))))};var k=function(e){var t=e.description,a=e.handleChange;return r.a.createElement("label",{htmlFor:"desc"},"Descri\xe7\xe3o:",r.a.createElement("input",{id:"desc",type:"text",name:"description",value:t,onChange:a}))};var N=function(e){var t=e.currency,a=e.moedas,n=e.value,l=e.description,o=e.tag,c=e.method,i=e.handleChange,s=e.submit;return r.a.createElement("form",{className:"form-inline"},r.a.createElement(C,{value:n,handleChange:i}),r.a.createElement(k,{handleChange:i,description:l}),r.a.createElement(S,{handleChange:i,moedas:a,moeda:t}),r.a.createElement(w,{handleChange:i,method:c}),r.a.createElement(O,{handleChange:i,tag:o}),r.a.createElement("button",{type:"button",onClick:s},"Adicionar despesa"))},M=a(7),T=function(e){return function(){var t=Object(j.a)(x.a.mark((function t(a){var n,r;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://economia.awesomeapi.com.br/json/all");case 2:return n=t.sent,t.next=5,n.json();case 5:if(r=t.sent){t.next=8;break}return t.abrupt("return",a(b));case 8:a(v(Object(M.a)(Object(M.a)({},e),{},{exchangeRates:r})));case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};var L=Object(i.b)((function(e){return{expenses:e.wallet.expenses}}),(function(e){return{remove:function(t){return e({type:"DELETE_EXPENSE",state:t})}}}))((function(e){var t=e.expenses,a=e.remove;return r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,["Descri\xe7\xe3o","Tag","M\xe9todo de pagamento","Valor","Moeda","C\xe2mbio utilizado","Valor convertido"," Moeda de convers\xe3o","Editar/Excluir"].map((function(e){return r.a.createElement("th",{scope:"col",key:e},e)})))),r.a.createElement("tbody",null,t.map((function(e){var t=e.description,n=e.tag,l=e.method,o=e.value,c=e.currency,i=e.id,s=e.exchangeRates[c],u=s.name,m=s.ask,d=u.split("/"),h=parseFloat(m).toFixed(2),p=(o*m).toFixed(2);return r.a.createElement("tr",{key:i},r.a.createElement("td",null,t),r.a.createElement("td",null,n),r.a.createElement("td",null,l),r.a.createElement("td",null,o),r.a.createElement("td",null,d[0]),r.a.createElement("td",null,h),r.a.createElement("td",null,p),r.a.createElement("td",null,"Real"),r.a.createElement("td",null,r.a.createElement("button",{type:"button",className:"btn btn-dark",onClick:function(){return a(i)},"data-testid":"delete-btn"},"Delete")))}))))})),F=(a(46),function(e){Object(p.a)(a,e);var t=Object(E.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).state={value:0,description:"",currency:"",moedas:[""],method:"",tag:""},e.handleChange=e.handleChange.bind(Object(h.a)(e)),e.onSubmitExpense=e.onSubmitExpense.bind(Object(h.a)(e)),e.totalExpenses=e.totalExpenses.bind(Object(h.a)(e)),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.fetchMoedas()}},{key:"onSubmitExpense",value:function(){var e=this.props.submitExpense,t=this.state;e({value:t.value,description:t.description,currency:t.currency,method:t.method,tag:t.tag}),this.setState({value:0,description:"",currency:"",method:"",tag:""})}},{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(u.a)({},a,n))}},{key:"totalExpenses",value:function(){var e=this.props.expenses,t=0,a=[];return 0===e.length?t:(1===e.length&&(t=e[0].exchangeRates[e[0].currency].ask*e[0].value),e.length>1&&(e.map((function(e){return a.push(parseFloat(e.exchangeRates[e.currency].ask*e.value))})),t=a.reduce((function(e,t){return e+t}))),t.toFixed(2))}},{key:"fetchMoedas",value:function(){var e=Object(j.a)(x.a.mark((function e(){var t,a,n,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://economia.awesomeapi.com.br/json/all");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,n=Object.keys(a),r=n.filter((function(e){return"USDT"!==e})),this.setState({moedas:r});case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props.email,t=this.state,a=t.currency,n=t.moedas,l=t.value,o=t.description,c=t.tag,i=t.method;return r.a.createElement("div",null,r.a.createElement("header",{className:"d-flex flex-row bd-highlight separate"},r.a.createElement("h3",{className:"separate","data-testid":"email-field"},e),r.a.createElement("h3",{className:"separate","data-testid":"total-field"},this.totalExpenses()),r.a.createElement("h3",{className:"separate","data-testid":"header-currency-field"},"BRL")),r.a.createElement(N,{moedas:n,handleChange:this.handleChange,value:l,description:o,currency:a,method:i,tag:c,submit:this.onSubmitExpense}),r.a.createElement(L,null))}}]),a}(r.a.Component)),D=Object(i.b)((function(e){var t=e.user,a=e.wallet;return{email:t.email,expenses:a.expenses}}),(function(e){return{submitExpense:function(t){return e(T(t))}}}))(F);var _=function(){return r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/trybewallet/carteira",component:D}),r.a.createElement(s.a,{exact:!0,path:"/trybewallet",component:g}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var I=a(9),z=a(30),A=a(31),B={email:""},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"EMAIL_SUBMIT":return{email:t.state};default:return e}},P=a(32),X={expenses:[]},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"EXPENSE_SUBMIT":return Object(M.a)(Object(M.a)({},e),{},{expenses:[].concat(Object(P.a)(e.expenses),[Object(M.a)({id:e.expenses.length},t.state)])});case"EXPENSE_FAIL":return Object(M.a)(Object(M.a)({},e),{},{error:"Ocorreu um erro"});case"DELETE_EXPENSE":return Object(M.a)(Object(M.a)({},e),{},{expenses:e.expenses.filter((function(e){return e.id!==t.state}))});default:return e}},W=Object(I.combineReducers)({user:R,wallet:U}),V=Object(I.createStore)(W,Object(z.composeWithDevTools)(Object(I.applyMiddleware)(A.a)));o.a.render(r.a.createElement(i.a,{store:V},r.a.createElement(c.a,null,r.a.createElement(_,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.0cb7d0d4.chunk.js.map