webpackHotUpdate(19,{

/***/ "./src/app/corporate-account-tool/tabs/profile/profile.tsx":
/*!*****************************************************************!*\
  !*** ./src/app/corporate-account-tool/tabs/profile/profile.tsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _profile_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.scss */ "./src/app/corporate-account-tool/tabs/profile/profile.scss");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");







var AddEditProfile = Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(function () { return Promise.all(/*! import() */[__webpack_require__.e(4), __webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(5)]).then(__webpack_require__.bind(null, /*! ./add-edit-profile/add-edit-profile */ "./src/app/corporate-account-tool/tabs/profile/add-edit-profile/add-edit-profile.tsx")); });
function Profile() {
    var accountDetail = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) { return state.account; }).accountDetail;
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false), isEdit = _a[0], setEdit = _a[1];
    var _b = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false), isCreateParentAccount = _b[0], setCreateParentAccount = _b[1];
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
        isEdit && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AddEditProfile, { accountDetail: accountDetail, closeAddEditProfilePopup: function (isClose) { return setEdit(isClose); } }),
        isCreateParentAccount && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AddEditProfile, { accountDetail: accountDetail, isLevel3: true, closeAddEditProfilePopup: function (isClose) { return setCreateParentAccount(isClose); } }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: 'profile' },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: 'profile-info' },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", { colSpan: 3 },
                                "CORPORATE PROFILE ", accountDetail === null || accountDetail === void 0 ? void 0 :
                                accountDetail.id),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], { onClick: function () { return setEdit(true); }, className: 'edit-action' },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], { icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faPencilAlt"] }),
                                    " Edit")))),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Account Name"),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, accountDetail === null || accountDetail === void 0 ? void 0 : accountDetail.name),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Account ID"),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, accountDetail === null || accountDetail === void 0 ? void 0 :
                                accountDetail.id,
                                " ")),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Partner Label ID"),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, accountDetail === null || accountDetail === void 0 ? void 0 : accountDetail.partnerLabelId),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Level"),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, accountDetail === null || accountDetail === void 0 ? void 0 : accountDetail.level)),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Status"),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", { className: (accountDetail === null || accountDetail === void 0 ? void 0 : accountDetail.statusAccount) === 'verified' ? 'status-account' : '' }, accountDetail === null || accountDetail === void 0 ? void 0 : accountDetail.statusAccount),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Language"),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, accountDetail === null || accountDetail === void 0 ? void 0 : accountDetail.language)),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "License"),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, accountDetail === null || accountDetail === void 0 ? void 0 : accountDetail.license),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Email Address"),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, accountDetail === null || accountDetail === void 0 ? void 0 : accountDetail.email)),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Currency"),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, accountDetail === null || accountDetail === void 0 ? void 0 : accountDetail.currency),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Phone"),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, accountDetail === null || accountDetail === void 0 ? void 0 : accountDetail.phoneNumber)),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Credit Account"),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, accountDetail === null || accountDetail === void 0 ? void 0 : accountDetail.credit),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Mobile"),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, accountDetail === null || accountDetail === void 0 ? void 0 : accountDetail.mobile)),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Credit Limit"),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, accountDetail === null || accountDetail === void 0 ? void 0 : accountDetail.creditLimit),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "username"),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, accountDetail === null || accountDetail === void 0 ? void 0 : accountDetail.userName)),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Address"),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, accountDetail === null || accountDetail === void 0 ? void 0 : accountDetail.address),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Password"),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", { type: 'password', value: accountDetail === null || accountDetail === void 0 ? void 0 : accountDetail.password, disabled: true }))),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "City"),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, accountDetail === null || accountDetail === void 0 ? void 0 : accountDetail.city),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null)),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Country"),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, accountDetail === null || accountDetail === void 0 ? void 0 : accountDetail.country),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Questionnaire Receipt Date"),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, (accountDetail === null || accountDetail === void 0 ? void 0 : accountDetail.questionnaireReceiptDate) && Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["format"])(accountDetail === null || accountDetail === void 0 ? void 0 : accountDetail.questionnaireReceiptDate, 'dd MMM yyyy'))),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Postal Code"),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, accountDetail === null || accountDetail === void 0 ? void 0 : accountDetail.postalCode),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Account Approval Date"),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, (accountDetail === null || accountDetail === void 0 ? void 0 : accountDetail.approvedDate) && Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["format"])(accountDetail === null || accountDetail === void 0 ? void 0 : accountDetail.approvedDate, 'dd MMM yyyy')))))),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: 'product-access' },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", { colSpan: 4 }, " Product Access"))),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: 'inline' },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: 'type-product' }, "Deposits"),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, accountDetail === null || accountDetail === void 0 ? void 0 : accountDetail.deposits))),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: 'inline' },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: 'type-product' }, "Withdrawals"),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, accountDetail === null || accountDetail === void 0 ? void 0 : accountDetail.withdrawals))),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: 'inline' },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: 'type-product' }, "Casino"),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, accountDetail === null || accountDetail === void 0 ? void 0 : accountDetail.casino))),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: 'inline' },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: 'type-product' }, "Sportsbook"),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, accountDetail === null || accountDetail === void 0 ? void 0 : accountDetail.sportsbook))))))),
            (!(accountDetail === null || accountDetail === void 0 ? void 0 : accountDetail.parentId) || (accountDetail === null || accountDetail === void 0 ? void 0 : accountDetail.parentId) === 0) && accountDetail.level === 'Level 2' &&
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], { variant: 'primary', className: 'create-parent-account', onClick: function () { return setCreateParentAccount(true); } }, "CREATE PARENT ACCOUNT (LEVEL 3)"))));
}
/* harmony default export */ __webpack_exports__["default"] = (Profile);


/***/ })

})
//# sourceMappingURL=19.251b02c11c9277372bbd.hot-update.js.map