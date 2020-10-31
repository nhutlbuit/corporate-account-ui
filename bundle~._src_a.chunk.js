(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bundle~._src_a"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./src/app/shared/spinner/spinner.scss":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/sass-loader/dist/cjs.js!./src/app/shared/spinner/spinner.scss ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".spinner {\n  color: green;\n  margin: 5px 5px 5px 30px; }\n  .spinner .bounce1 {\n    -webkit-animation-delay: -0.48s;\n    animation-delay: -0.48s; }\n  .spinner .bounce2 {\n    -webkit-animation-delay: -0.32s;\n    animation-delay: -0.32s; }\n  .spinner .bounce3 {\n    -webkit-animation-delay: -0.16s;\n    animation-delay: -0.16s; }\n\n.spinner > div {\n  width: 15px;\n  height: 15px;\n  background-color: green;\n  border-radius: 100%;\n  display: inline-block;\n  -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n  animation: sk-bouncedelay 1.4s infinite ease-in-out both; }\n\n@-webkit-keyframes sk-bouncedelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0); }\n  40% {\n    -webkit-transform: scale(1); } }\n\n@keyframes sk-bouncedelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0);\n    transform: scale(0); }\n  40% {\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n", "",{"version":3,"sources":["webpack://src/app/shared/spinner/spinner.scss"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,wBAAwB,EAAA;EAF1B;IAKI,+BAA+B;IAC/B,uBAAuB,EAAA;EAN3B;IAUI,+BAA+B;IAC/B,uBAAuB,EAAA;EAX3B;IAeI,+BAA+B;IAC/B,uBAAuB,EAAA;;AAM3B;EACE,WAAW;EACX,YAAY;EACZ,uBAAuB;EAEvB,mBAAmB;EACnB,qBAAqB;EACrB,gEAAgE;EAChE,wDAAwD,EAAA;;AAG1D;EACE;IAAgB,2BAA2B,EAAA;EAC3C;IAAM,2BAA6B,EAAA,EAAA;;AAGrC;EACE;IACE,2BAA2B;IAC3B,mBAAmB,EAAA;EACnB;IACE,2BAA6B;IAC7B,mBAAqB,EAAA,EAAA","sourcesContent":[".spinner {\n  color: green;\n  margin: 5px 5px 5px 30px;\n\n  .bounce1 {\n    -webkit-animation-delay: -0.48s;\n    animation-delay: -0.48s;\n  }\n\n  .bounce2 {\n    -webkit-animation-delay: -0.32s;\n    animation-delay: -0.32s;\n  }\n\n  .bounce3 {\n    -webkit-animation-delay: -0.16s;\n    animation-delay: -0.16s;\n  }\n\n\n}\n\n.spinner > div {\n  width: 15px;\n  height: 15px;\n  background-color: green;\n\n  border-radius: 100%;\n  display: inline-block;\n  -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n  animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n}\n\n@-webkit-keyframes sk-bouncedelay {\n  0%, 80%, 100% { -webkit-transform: scale(0) }\n  40% { -webkit-transform: scale(1.0) }\n}\n\n@keyframes sk-bouncedelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0);\n    transform: scale(0);\n  } 40% {\n      -webkit-transform: scale(1.0);\n      transform: scale(1.0);\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/app/App.tsx":
/*!*************************!*\
  !*** ./src/app/App.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.scss */ "./src/app/app.scss");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var _common_constants_CommonConst__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/constants/CommonConst */ "./src/common/constants/CommonConst.ts");
/* harmony import */ var _shared_spinner_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/spinner/spinner */ "./src/app/shared/spinner/spinner.tsx");
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-datepicker/dist/react-datepicker.css */ "./node_modules/react-datepicker/dist/react-datepicker.css");









var CorporateAccountTool = Object(react_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(function () { return Promise.all(/*! import() */[__webpack_require__.e(7), __webpack_require__.e(20), __webpack_require__.e(6), __webpack_require__.e(13), __webpack_require__.e(10), __webpack_require__.e(14), __webpack_require__.e(11)]).then(__webpack_require__.bind(null, /*! ./corporate-account-tool/corporate-account-tool */ "./src/app/corporate-account-tool/corporate-account-tool.tsx")); }));
var CorporateAccountReport = Object(react_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(function () { return __webpack_require__.e(/*! import() */ 15).then(__webpack_require__.bind(null, /*! ./corporate-account-report/corporate-account-report */ "./src/app/corporate-account-report/corporate-account-report.tsx")); }));
var App = function () {
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], { fallback: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_spinner_spinner__WEBPACK_IMPORTED_MODULE_7__["default"], null) },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], { from: '/', exact: true, to: '/corporate-account-tool' }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], { path: '/corporate-account-tool', component: CorporateAccountTool }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], { path: '/corporate-account-report', component: CorporateAccountReport })))),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_toastify__WEBPACK_IMPORTED_MODULE_4__["ToastContainer"], { position: 'top-right', autoClose: _common_constants_CommonConst__WEBPACK_IMPORTED_MODULE_6__["CONSTANT"].TOAST_TIMEOUT, hideProgressBar: false, newestOnTop: true, closeOnClick: true, rtl: false, pauseOnFocusLoss: true, draggable: true, pauseOnHover: true })));
};
/* harmony default export */ __webpack_exports__["default"] = (App);


/***/ }),

/***/ "./src/app/app.scss":
/*!**************************!*\
  !*** ./src/app/app.scss ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../node_modules/sass-loader/dist/cjs.js!./app.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./src/app/app.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = _node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals;

    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../node_modules/sass-loader/dist/cjs.js!./app.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./src/app/app.scss",
      function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../node_modules/sass-loader/dist/cjs.js!./app.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./src/app/app.scss");
(function () {
        if (!isEqualLocals(oldLocals, _node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals, undefined)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = _node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_1__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this)
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/app/shared/spinner/spinner.scss":
/*!*********************************************!*\
  !*** ./src/app/shared/spinner/spinner.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_sass_loader_dist_cjs_js_spinner_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../node_modules/sass-loader/dist/cjs.js!./spinner.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./src/app/shared/spinner/spinner.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_sass_loader_dist_cjs_js_spinner_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_sass_loader_dist_cjs_js_spinner_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = _node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_sass_loader_dist_cjs_js_spinner_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals;

    module.hot.accept(
      /*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../node_modules/sass-loader/dist/cjs.js!./spinner.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./src/app/shared/spinner/spinner.scss",
      function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_sass_loader_dist_cjs_js_spinner_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../node_modules/sass-loader/dist/cjs.js!./spinner.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./src/app/shared/spinner/spinner.scss");
(function () {
        if (!isEqualLocals(oldLocals, _node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_sass_loader_dist_cjs_js_spinner_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals, undefined)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = _node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_sass_loader_dist_cjs_js_spinner_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_sass_loader_dist_cjs_js_spinner_scss__WEBPACK_IMPORTED_MODULE_1__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this)
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_sass_loader_dist_cjs_js_spinner_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/app/shared/spinner/spinner.tsx":
/*!********************************************!*\
  !*** ./src/app/shared/spinner/spinner.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _spinner_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spinner.scss */ "./src/app/shared/spinner/spinner.scss");


function Spinner() {
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: 'spinner' },
            'Loading  ',
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: 'bounce1' }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: 'bounce2' }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: 'bounce3' }))));
}
/* harmony default export */ __webpack_exports__["default"] = (Spinner);


/***/ }),

/***/ "./src/common/constants/CommonConst.ts":
/*!*********************************************!*\
  !*** ./src/common/constants/CommonConst.ts ***!
  \*********************************************/
/*! exports provided: CONSTANT, PermissionEnum, DEFAULT_PAGING, AdditionAllOption, ExportType, METHOD */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONSTANT", function() { return CONSTANT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionEnum", function() { return PermissionEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_PAGING", function() { return DEFAULT_PAGING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdditionAllOption", function() { return AdditionAllOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportType", function() { return ExportType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "METHOD", function() { return METHOD; });
var CONSTANT = Object.freeze({
    TOAST_TIMEOUT: 5000,
    ACCOUNT_CREATION: {
        STATUS: [
            { name: 'statusAccount', value: 'pending', label: 'Pending Verification' },
            { name: 'statusAccount', value: 'verified', label: 'Verified' },
            { name: 'statusAccount', value: 'inactive', label: 'Inactive' },
            { name: 'statusAccount', value: 'closed', label: 'Closed' }
        ],
        CURRENCIES: [
            { name: 'currency', value: 'GBP', label: 'GPG' },
            { name: 'currency', value: 'VND', label: 'VND' },
            { name: 'currency', value: 'USD', label: 'USD' },
        ],
        COUNTRIES: [
            { name: 'country', value: 'uk', label: 'United Kingdom' },
            { name: 'country', value: 'vn', label: 'Viet Nam' },
            { name: 'country', value: 'us', label: 'United states' },
        ],
        LANGUAGES: [
            { name: 'language', value: 'en', label: 'English' },
            { name: 'language', value: 'vn', label: 'Viet Nam' },
            { name: 'language', value: 'fr', label: 'France' },
        ],
    }
});
var PermissionEnum = {
    DATA_CHANGE: {
        COPY_VIEW: "DATACHANGE_COPY_VIEW",
        EXPORT_EXCEL_VIEW: "DATACHANGE_EXPORT_EXCEL_VIEW",
        EXPORT_PDF_VIEW: "DATACHANGE_EXPORT_PDF_VIEW",
        PRINT_VIEW: "DATACHANGE_PRINT_VIEW",
        SEARCH_VIEW: "DATACHANGE_SEARCH_VIEW",
        DATE_FROM_FILTER_VIEW: "DATACHANGE_DATE_FROM_FILTER_VIEW",
        DATE_TO_FILTER_VIEW: "DATACHANGE_DATE_TO_FILTER_VIEW",
        UPDATE_BY_FILTER_VIEW: "DATACHANGE_UPDATE_BY_FILTER_VIEW",
        FIELD_NAME_FILTER_VIEW: "DATACHANGE_FIELD_NAME_FILTER_VIEW",
        FILTER_DATE_FORMAT: "YYYYMMDD"
    },
    COMMUNICATION: {
        TABLE_VIEW: 'COMMUNICATION_TABLE_VIEW',
        ALL_COMMENTS_VIEW: 'COMMUNICATION_ALL_COMMENTS_VIEW',
        SYSTEM_COMMENTS_VIEW: 'COMMUNICATION_SYSTEM_COMMENTS_VIEW',
        EMAIL_COMMENTS_VIEW: 'COMMUNICATION_EMAIL_COMMENTS_VIEW',
        NOTIFICATION_COMMENTS_VIEW: 'COMMUNICATION_NOTIFICATION_COMMENTS_VIEW',
        HISTORICAL_COMMENTS_VIEW: 'COMMUNICATION_HISTORICAL_COMMENTS_VIEW',
        ARCHIVED_COMMENTS_VIEW: 'COMMUNICATION_ARCHIVED_COMMENTS_VIEW',
        FLAGGED_COMMENTS_VIEW: 'COMMUNICATION_FLAGGED_COMMENTS_VIEW',
        ACTION_FLAG_EDIT: 'COMMUNICATION_ACTION_FLAG_COMMENTS_EDIT',
        ACTION_ADD_NEW_BUTTON: 'COMMUNICATION_NEW_COMMENT_BUTTON_EDIT',
        ACTION_ARCHIVE_EDIT: 'COMMUNICATION_ACTION_ARCHIVE_COMMENTS_EDIT',
    }
};
var DEFAULT_PAGING = {
    START_PAGE: 1,
    RECORD_PER_PAGE: 10
};
var AdditionAllOption = [
    { value: '', label: "All" }
];
var ExportType;
(function (ExportType) {
    ExportType["PDF"] = "PDF";
    ExportType["CSV"] = "CSV";
})(ExportType || (ExportType = {}));
var ServiceContextPath = {
    MEMBER_MANAGER: '/member-manager'
};
var METHOD = {
    GET: "get",
    POST: "post",
    PUT: "put",
    DELETE: "delete",
};


/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _app_App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/App */ "./src/app/App.tsx");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store/store */ "./src/store/store.ts");






var rootNode = document.getElementById('root');
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], { store: _store_store__WEBPACK_IMPORTED_MODULE_5__["default"] },
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["BrowserRouter"], { basename: 'corporate-account-ui' },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_App__WEBPACK_IMPORTED_MODULE_4__["default"], null))), rootNode);


/***/ })

}]);
//# sourceMappingURL=bundle~._src_a.chunk.js.map