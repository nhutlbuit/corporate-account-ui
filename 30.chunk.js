(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{219:function(e,n,t){"use strict";var a=t(77),r=t.n(a),o=t(78),c=t.n(o)()(r.a);c.push([e.i,".spinner{color:green;margin:5px 5px 5px 30px}.spinner .bounce1{-webkit-animation-delay:-0.48s;animation-delay:-0.48s}.spinner .bounce2{-webkit-animation-delay:-0.32s;animation-delay:-0.32s}.spinner .bounce3{-webkit-animation-delay:-0.16s;animation-delay:-0.16s}.spinner>div{width:15px;height:15px;background-color:green;border-radius:100%;display:inline-block;-webkit-animation:sk-bouncedelay 1.4s infinite ease-in-out both;animation:sk-bouncedelay 1.4s infinite ease-in-out both}@-webkit-keyframes sk-bouncedelay{0%,80%,100%{-webkit-transform:scale(0)}40%{-webkit-transform:scale(1)}}@keyframes sk-bouncedelay{0%,80%,100%{-webkit-transform:scale(0);transform:scale(0)}40%{-webkit-transform:scale(1);transform:scale(1)}}\n","",{version:3,sources:["webpack://src/app/shared/spinner/spinner.scss"],names:[],mappings:"AAAA,SACE,WAAY,CACZ,uBAAwB,CAF1B,kBAKI,8BAA+B,CAC/B,sBAAuB,CAN3B,kBAUI,8BAA+B,CAC/B,sBAAuB,CAX3B,kBAeI,8BAA+B,CAC/B,sBAAuB,CACxB,aAMD,UAAW,CACX,WAAY,CACZ,sBAAuB,CAEvB,kBAAmB,CACnB,oBAAqB,CACrB,+DAAgE,CAChE,uDAAwD,CACzD,kCAGC,YAAgB,0BAA2B,CAC3C,IAAM,0BAA6B,CAAA,CAGrC,0BACE,YACE,0BAA2B,CAC3B,kBAAmB,CACnB,IACE,0BAA6B,CAC7B,kBAAqB,CAAA",sourcesContent:[".spinner {\n  color: green;\n  margin: 5px 5px 5px 30px;\n\n  .bounce1 {\n    -webkit-animation-delay: -0.48s;\n    animation-delay: -0.48s;\n  }\n\n  .bounce2 {\n    -webkit-animation-delay: -0.32s;\n    animation-delay: -0.32s;\n  }\n\n  .bounce3 {\n    -webkit-animation-delay: -0.16s;\n    animation-delay: -0.16s;\n  }\n\n\n}\n\n.spinner > div {\n  width: 15px;\n  height: 15px;\n  background-color: green;\n\n  border-radius: 100%;\n  display: inline-block;\n  -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n  animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n}\n\n@-webkit-keyframes sk-bouncedelay {\n  0%, 80%, 100% { -webkit-transform: scale(0) }\n  40% { -webkit-transform: scale(1.0) }\n}\n\n@keyframes sk-bouncedelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0);\n    transform: scale(0);\n  } 40% {\n      -webkit-transform: scale(1.0);\n      transform: scale(1.0);\n    }\n}\n"],sourceRoot:""}]),n.a=c},386:function(e,n,t){"use strict";var a=t(0),r=t.n(a),o=t(76),c=t.n(o),i=t(219),s={insert:"head",singleton:!1};c()(i.a,s),i.a.locals;n.a=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"spinner"},"Loading  ",r.a.createElement("div",{className:"bounce1"}),r.a.createElement("div",{className:"bounce2"}),r.a.createElement("div",{className:"bounce3"})))}},47:function(e,n,t){"use strict";t.d(n,"e",(function(){return i})),t.d(n,"g",(function(){return s})),t.d(n,"f",(function(){return u})),t.d(n,"h",(function(){return l})),t.d(n,"b",(function(){return d})),t.d(n,"c",(function(){return p})),t.d(n,"d",(function(){return b})),t.d(n,"i",(function(){return f})),t.d(n,"k",(function(){return A})),t.d(n,"j",(function(){return m}));var a,r=t(137),o=t(91),c=Object(r.createSlice)({name:"Account",initialState:{accounts:[],accountDetail:{},filterName:"",loading:!1,error:"",toggleNavbar:!0,isShowAccountListing:!1,isShowContentPage:!1,isUpdateAccount:!1},reducers:{loadAccounts:function(e,n){e.loading=!0,e.error="",e.filterName=n.payload.value,e.isShowContentPage=!1,e.isShowAccountListing=!1},loadAccountsSuccess:function(e,n){var t;e.loading=!1,e.error="",e.accounts=n.payload,(null===(t=n.payload)||void 0===t?void 0:t.length)&&(e.isShowAccountListing=!0)},loadAccountsError:function(e){e.error="failed",e.loading=!0,o.toast.error("get accounts failed. Please contact admin!")},onToggleNavbar:function(e,n){e.toggleNavbar=n.payload},getAccountDetail:function(e,n){e.loading=!0,e.error="",e.isShowContentPage=!0,e.isShowAccountListing=!1,e.isUpdateAccount=!1},getAccountDetailSuccess:function(e,n){e.loading=!1,e.error="",e.accountDetail=n.payload},getAccountDetailError:function(e){e.loading=!1,e.error="failed",o.toast.error("get account detail failed. Please contact admin!")},saveAccount:function(e,n){e.loading=!0,e.error="",e.isUpdateAccount=!1},saveAccountSuccess:function(e,n){e.loading=!1,e.error="",e.isUpdateAccount=!0,o.toast.success("Update Account successfully!")},saveAccountError:function(e){e.loading=!1,e.error="failed",o.toast.error("Update account failed. Please contact admin!")}}}),i=(a=c.actions).loadAccounts,s=a.loadAccountsSuccess,u=a.loadAccountsError,l=a.onToggleNavbar,d=a.getAccountDetail,p=a.getAccountDetailError,b=a.getAccountDetailSuccess,f=a.saveAccount,A=a.saveAccountSuccess,m=a.saveAccountError;n.a=c.reducer},534:function(e,n,t){"use strict";t.r(n);var a,r=t(0),o=t.n(r),c=t(17),i=t.n(c),s=t(206),u=t(146),l=t(76),d=t.n(l),p=t(217),b={insert:"head",singleton:!1},f=(d()(p.a,b),p.a.locals,t(18)),A=t(91),m=(t(433),Object.freeze({TOAST_TIMEOUT:5e3,COMMUNICATION:{COMMENT_TYPES_CREATE:[{label:"Verification",value:"VERIFICATION"},{label:"Risk",value:"RISK"},{label:"Affiliates",value:"AFFILIATES"},{label:"General",value:"GENERAL"},{label:"Casino",value:"CASINO"},{label:"Payments",value:"PAYMENTS"},{label:"RG Limit",value:"RG_LIMIT"},{label:"Wagering",value:"WAGERING"},{label:"Other",value:"OTHER"},{label:"Telesales",value:"TELESALES"}]}}));!function(e){e.PDF="PDF",e.CSV="CSV"}(a||(a={}));var v=t(386),w=(t(434),Object(f.o)(Object(r.lazy)((function(){return Promise.all([t.e(6),t.e(0),t.e(17),t.e(19),t.e(24),t.e(12),t.e(18),t.e(5),t.e(4),t.e(22),t.e(7),t.e(26),t.e(20),t.e(16),t.e(3),t.e(25),t.e(9),t.e(10),t.e(15),t.e(28),t.e(2),t.e(8),t.e(23),t.e(14),t.e(21),t.e(11),t.e(1),t.e(13),t.e(27),t.e(32)]).then(t.bind(null,551))})))),h=Object(f.o)(Object(r.lazy)((function(){return t.e(35).then(t.bind(null,552))}))),y=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("main",null,o.a.createElement(r.Suspense,{fallback:o.a.createElement(v.a,null)},o.a.createElement(f.g,null,o.a.createElement(f.c,{from:"/",exact:!0,to:"/corporate-account-tool"}),o.a.createElement(f.d,{path:"/corporate-account-tool",component:w}),o.a.createElement(f.d,{path:"/corporate-account-report",component:h})))),o.a.createElement(A.ToastContainer,{position:"top-right",autoClose:m.TOAST_TIMEOUT,hideProgressBar:!1,newestOnTop:!0,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}))},g=t(208),C=t(137),k=t(33),E=t(47),B=Object(k.combineReducers)({account:E.a}),N=t(35),D=function(e,n,t,a){return new(t||(t=Promise))((function(r,o){function c(e){try{s(a.next(e))}catch(e){o(e)}}function i(e){try{s(a.throw(e))}catch(e){o(e)}}function s(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(c,i)}s((a=a.apply(e,n||[])).next())}))},O=function(e,n){var t,a,r,o,c={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(o){return function(i){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;c;)try{if(t=1,a&&(r=2&o[0]?a.return:o[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,o[1])).done)return r;switch(a=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return c.label++,{value:o[1],done:!1};case 5:c.label++,a=o[1],o=[0];continue;case 7:o=c.ops.pop(),c.trys.pop();continue;default:if(!(r=c.trys,(r=r.length>0&&r[r.length-1])||6!==o[0]&&2!==o[0])){c=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){c.label=o[1];break}if(6===o[0]&&c.label<r[1]){c.label=r[1],r=o;break}if(r&&c.label<r[2]){c.label=r[2],c.ops.push(o);break}r[2]&&c.ops.pop(),c.trys.pop();continue}o=n.call(e,c)}catch(e){o=[6,e],a=0}finally{t=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,i])}}},I=[{id:1112890,name:"Kevin.os",partnerId:"Fred Dan",level:"Level 3",currency:"GBP",email:"corporate@js.com",status:"ACTIVE",partnerLabelId:"Peter Pan",statusAccount:"pending",license:"Curacao",credit:"No",creditLimit:"N/A",address:"United KingDom",postalCode:"10000",language:"en",phoneNumber:"0968868300",mobile:"0968868300",userName:"nat.os",password:"1234qwer",questionnaireReceiptDate:new Date,approvedDate:new Date,country:"us",deposits:"Yes",withdrawals:"No",casino:"Yes",sportsbook:"No"},{id:1112891,name:"Rob.os",partnerId:"Fred Dan",level:"Level 3",currency:"VND",email:"corporate@js.com",status:"INACTIVE",partnerLabelId:"Peter Pan",statusAccount:"verified",license:"Curacao",credit:"Yes",creditLimit:"N/A",address:"United KingDom",postalCode:"10000",language:"en",phoneNumber:"0968868300",mobile:"0968868300",userName:"nat.os",password:"1234qwer",questionnaireReceiptDate:new Date,approvedDate:new Date,country:"vn",deposits:"Yes",withdrawals:"No",casino:"Yes",sportsbook:"No"},{id:1112892,name:"Kenny.os",partnerId:"Fred Dan",level:"Level 3",currency:"USD",email:"corporate@js.com",status:"ACTIVE",partnerLabelId:"Peter Pan",statusAccount:"inactive",license:"Curacao",credit:"No",creditLimit:"N/A",address:"United KingDom",postalCode:"10000",language:"vn",phoneNumber:"0968868300",mobile:"0968868300",userName:"nat.os",password:"1234qwer",questionnaireReceiptDate:new Date,approvedDate:new Date,country:"uk",deposits:"Yes",withdrawals:"No",casino:"Yes",sportsbook:"No"},{id:1112893,name:"Ali.os",partnerId:"Fred Dan",level:"Level 3",currency:"USD",email:"corporate@js.com",status:"INACTIVE",partnerLabelId:"Conan Huynh",statusAccount:"closed",license:"Curacao",credit:"Yes",creditLimit:"N/A",address:"United KingDom",postalCode:"10000",language:"fr",phoneNumber:"0968868300",mobile:"0968868300",userName:"nat.os",password:"1234qwer",questionnaireReceiptDate:new Date,approvedDate:new Date,country:"us",deposits:"Yes",withdrawals:"No",casino:"Yes",sportsbook:"No"},{id:1112894,name:"Nat.os",partnerId:"Fred Dan",level:"Level 3",currency:"VND",email:"corporate@js.com",status:"ACTIVE",partnerLabelId:"Conan Huynh",statusAccount:"verified",license:"Curacao",credit:"No",creditLimit:"N/A",address:"United KingDom",postalCode:"10000",language:"vn",phoneNumber:"0968868300",mobile:"0968868300",userName:"nat.os",password:"1234qwer",questionnaireReceiptDate:new Date,approvedDate:new Date,country:"vn",deposits:"Yes",withdrawals:"No",casino:"Yes",sportsbook:"No"}],S=function(e){return D(void 0,void 0,void 0,(function(){return O(this,(function(n){switch(n.label){case 0:return[4,function(n){return new Promise((function(t,a){setTimeout((function(){var a=I;switch(n){case"id":a=I.filter((function(n){return n.id.toString().includes(e.value)}));break;case"name":a=I.filter((function(n){var t,a;return null===(t=n.name)||void 0===t?void 0:t.toUpperCase().includes(null===(a=e.value)||void 0===a?void 0:a.toUpperCase())}));break;case"partnerId":a=I.filter((function(n){return n.partnerLabelId.includes(e.value)}))}return t(a)}),1e3)}))}(e.type)];case 1:return[2,n.sent()]}}))}))},j=function(e){return D(void 0,void 0,void 0,(function(){return O(this,(function(n){return[2,I.filter((function(n){return n.id==e}))[0]]}))}))},T=function(e){return D(void 0,void 0,void 0,(function(){var n;return O(this,(function(t){return(n=I.filter((function(n){return n.id!=e.id}))).push(e),I=n,[2,"ok"]}))}))},L=function(e,n){var t,a,r,o,c={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(o){return function(i){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;c;)try{if(t=1,a&&(r=2&o[0]?a.return:o[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,o[1])).done)return r;switch(a=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return c.label++,{value:o[1],done:!1};case 5:c.label++,a=o[1],o=[0];continue;case 7:o=c.ops.pop(),c.trys.pop();continue;default:if(!(r=c.trys,(r=r.length>0&&r[r.length-1])||6!==o[0]&&2!==o[0])){c=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){c.label=o[1];break}if(6===o[0]&&c.label<r[1]){c.label=r[1],r=o;break}if(r&&c.label<r[2]){c.label=r[2],c.ops.push(o);break}r[2]&&c.ops.pop(),c.trys.pop();continue}o=n.call(e,c)}catch(e){o=[6,e],a=0}finally{t=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,i])}}};function x(e){var n;return L(this,(function(t){switch(t.label){case 0:return t.trys.push([0,3,,5]),[4,Object(N.b)(S,e.payload)];case 1:return n=t.sent(),[4,Object(N.c)(Object(E.g)(n))];case 2:return t.sent(),[3,5];case 3:return t.sent(),[4,Object(N.c)(Object(E.f)())];case 4:return t.sent(),[3,5];case 5:return[2]}}))}function P(e){var n;return L(this,(function(t){switch(t.label){case 0:return t.trys.push([0,3,,5]),[4,Object(N.b)(j,e.payload)];case 1:return n=t.sent(),[4,Object(N.c)(Object(E.d)(n))];case 2:return t.sent(),[3,5];case 3:return t.sent(),[4,Object(N.c)(Object(E.c)())];case 4:return t.sent(),[3,5];case 5:return[2]}}))}function U(e){var n;return L(this,(function(t){switch(t.label){case 0:return t.trys.push([0,3,,5]),[4,Object(N.b)(T,e.payload)];case 1:return n=t.sent(),[4,Object(N.c)(Object(E.k)(n))];case 2:return t.sent(),[3,5];case 3:return t.sent(),[4,Object(N.c)(Object(E.j)())];case 4:return t.sent(),[3,5];case 5:return[2]}}))}function R(){var e,n;return L(this,(function(t){switch(t.label){case 0:return e=N.a,[4,Object(N.d)(E.e,x)];case 1:return n=[t.sent()],[4,Object(N.d)(E.b,P)];case 2:return n=n.concat([t.sent()]),[4,Object(N.d)(E.i,U)];case 3:return[4,e.apply(void 0,[n.concat([t.sent()])])];case 4:return t.sent(),[2]}}))}var Y=function(e,n){var t,a,r,o,c={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(o){return function(i){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;c;)try{if(t=1,a&&(r=2&o[0]?a.return:o[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,o[1])).done)return r;switch(a=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return c.label++,{value:o[1],done:!1};case 5:c.label++,a=o[1],o=[0];continue;case 7:o=c.ops.pop(),c.trys.pop();continue;default:if(!(r=c.trys,(r=r.length>0&&r[r.length-1])||6!==o[0]&&2!==o[0])){c=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){c.label=o[1];break}if(6===o[0]&&c.label<r[1]){c.label=r[1],r=o;break}if(r&&c.label<r[2]){c.label=r[2],c.ops.push(o);break}r[2]&&c.ops.pop(),c.trys.pop();continue}o=n.call(e,c)}catch(e){o=[6,e],a=0}finally{t=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,i])}}};var F=Object(g.default)(),q=Object(C.configureStore)({reducer:B,middleware:[F]});F.run((function(){return Y(this,(function(e){switch(e.label){case 0:return[4,Object(N.a)([R()])];case 1:return e.sent(),[2]}}))}));var G=q,V=document.getElementById("root");i.a.render(o.a.createElement(s.Provider,{store:G},o.a.createElement(u.BrowserRouter,null,o.a.createElement(y,null))),V)}}]);
//# sourceMappingURL=30.chunk.js.map