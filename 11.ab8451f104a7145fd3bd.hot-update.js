webpackHotUpdate(11,{

/***/ "./src/app/corporate-account-tool/corporate-account-tool.tsx":
/*!*******************************************************************!*\
  !*** ./src/app/corporate-account-tool/corporate-account-tool.tsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _header_bar_header_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header-bar/header-bar */ "./src/app/corporate-account-tool/header-bar/header-bar.tsx");
/* harmony import */ var _search_panel_search_panel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search-panel/search-panel */ "./src/app/corporate-account-tool/search-panel/search-panel.tsx");
/* harmony import */ var _account_listing_account_listing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account-listing/account-listing */ "./src/app/corporate-account-tool/account-listing/account-listing.tsx");
/* harmony import */ var _nav_bar_nav_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nav-bar/nav-bar */ "./src/app/corporate-account-tool/nav-bar/nav-bar.tsx");
/* harmony import */ var _corporate_account_tool_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./corporate-account-tool.scss */ "./src/app/corporate-account-tool/corporate-account-tool.scss");
/* harmony import */ var _shared_spinner_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/spinner/spinner */ "./src/app/shared/spinner/spinner.tsx");










var Profile = Object(react_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(function () { return __webpack_require__.e(/*! import() */ 21).then(__webpack_require__.bind(null, /*! ./tabs/profile/profile */ "./src/app/corporate-account-tool/tabs/profile/profile.tsx")); }));
var Accounts = Object(react_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(function () { return __webpack_require__.e(/*! import() */ 16).then(__webpack_require__.bind(null, /*! ./tabs/accounts/accounts */ "./src/app/corporate-account-tool/tabs/accounts/accounts.tsx")); }));
var Directors = Object(react_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(function () { return __webpack_require__.e(/*! import() */ 18).then(__webpack_require__.bind(null, /*! ./tabs/directors/directors */ "./src/app/corporate-account-tool/tabs/directors/directors.tsx")); }));
var ChangeLog = Object(react_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(function () { return __webpack_require__.e(/*! import() */ 17).then(__webpack_require__.bind(null, /*! ./tabs/change-log/change-log */ "./src/app/corporate-account-tool/tabs/change-log/change-log.tsx")); }));
function CorporateAccountTool() {
    var _a = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) { return state.account; }), toggleNavbar = _a.toggleNavbar, isShowAccountListing = _a.isShowAccountListing, isShowContentPage = _a.isShowContentPage, loading = _a.loading;
    var match = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useRouteMatch"])();
    var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useHistory"])();
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (isShowContentPage) {
            history.push(match.url + "/profile");
        }
    }, [isShowContentPage]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_header_bar_header_bar__WEBPACK_IMPORTED_MODULE_4__["default"], null),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_search_panel_search_panel__WEBPACK_IMPORTED_MODULE_5__["default"], null),
        loading && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_spinner_spinner__WEBPACK_IMPORTED_MODULE_9__["default"], null),
        isShowAccountListing && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_account_listing_account_listing__WEBPACK_IMPORTED_MODULE_6__["default"], null),
        isShowContentPage &&
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: 'columns' },
                toggleNavbar && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_nav_bar_nav_bar__WEBPACK_IMPORTED_MODULE_7__["default"], null),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: 'main-menu' },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], { fallback: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_spinner_spinner__WEBPACK_IMPORTED_MODULE_9__["default"], null) },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], { path: match.url + "/profile", component: Profile }),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], { path: match.url + "/accounts", component: Accounts }),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], { path: match.url + "/directors", component: Directors }),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], { path: match.url + "/change-log", component: ChangeLog })))))));
}
/* harmony default export */ __webpack_exports__["default"] = (CorporateAccountTool);


/***/ })

})
//# sourceMappingURL=11.ab8451f104a7145fd3bd.hot-update.js.map