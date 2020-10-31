webpackHotUpdate(5,{

/***/ "./src/app/corporate-account-tool/tabs/profile/add-edit-profile/add-edit-profile.tsx":
/*!*******************************************************************************************!*\
  !*** ./src/app/corporate-account-tool/tabs/profile/add-edit-profile/add-edit-profile.tsx ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _add_edit_profile_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-edit-profile.scss */ "./src/app/corporate-account-tool/tabs/profile/add-edit-profile/add-edit-profile.scss");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _store_slice_account_slice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../store/slice/account.slice */ "./src/store/slice/account.slice.ts");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _shared_SelectField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/SelectField */ "./src/app/shared/SelectField/index.tsx");
/* harmony import */ var _shared_InputField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/InputField */ "./src/app/shared/InputField/index.tsx");
/* harmony import */ var _shared_DatePickerField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/DatePickerField */ "./src/app/shared/DatePickerField/index.tsx");
/* harmony import */ var _shared_toggle_button_toggle_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/toggle-button/toggle-button */ "./src/app/shared/toggle-button/toggle-button.tsx");
/* harmony import */ var _common_constants_CommonConst__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../common/constants/CommonConst */ "./src/common/constants/CommonConst.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};












function AddEditProfile(propsAddEditProfile) {
    var closeAddEditProfilePopup = propsAddEditProfile.closeAddEditProfilePopup, accountDetail = propsAddEditProfile.accountDetail, isLevel3 = propsAddEditProfile.isLevel3;
    var isUpdateAccount = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) { return state.account; }).isUpdateAccount;
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(accountDetail), account = _a[0], setAccount = _a[1];
    var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (isUpdateAccount) {
            onClosePopup();
        }
    }, [isUpdateAccount]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (isLevel3) {
            setAccount(__assign(__assign({}, account), { 'parentId': accountDetail.id }));
        }
    }, []);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (isUpdateAccount && accountDetail) {
            dispatch(Object(_store_slice_account_slice__WEBPACK_IMPORTED_MODULE_4__["getAccountDetail"])(accountDetail.id));
        }
    }, [isUpdateAccount]);
    var onClosePopup = function () {
        closeAddEditProfilePopup(false);
    };
    var updateAccount = function (values) {
        dispatch(Object(_store_slice_account_slice__WEBPACK_IMPORTED_MODULE_4__["saveAccount"])(__assign(__assign({}, account), values)));
    };
    var generateAccountId = function (n) {
        return Math.floor(Math.random() * (9 * (Math.pow(10, n)))) + (Math.pow(10, n));
    };
    var initialValues = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v;
        return {
            name: (_a = accountDetail === null || accountDetail === void 0 ? void 0 : accountDetail.name) !== null && _a !== void 0 ? _a : '',
            id: (_b = ((accountDetail === null || accountDetail === void 0 ? void 0 : accountDetail.id) && !isLevel3)) !== null && _b !== void 0 ? _b : generateAccountId(6),
            email: (_c = accountDetail === null || accountDetail === void 0 ? void 0 : accountDetail.email) !== null && _c !== void 0 ? _c : '',
            questionnaireReceiptDate: (_d = accountDetail === null || accountDetail === void 0 ? void 0 : accountDetail.questionnaireReceiptDate) !== null && _d !== void 0 ? _d : new Date(),
            statusAccount: (_e = accountDetail === null || accountDetail === void 0 ? void 0 : accountDetail.statusAccount) !== null && _e !== void 0 ? _e : (isLevel3 ? 'verified' : 'pending'),
            country: (_f = accountDetail === null || accountDetail === void 0 ? void 0 : accountDetail.country) !== null && _f !== void 0 ? _f : '',
            currency: (_g = accountDetail === null || accountDetail === void 0 ? void 0 : accountDetail.currency) !== null && _g !== void 0 ? _g : '',
            language: (_h = accountDetail === null || accountDetail === void 0 ? void 0 : accountDetail.language) !== null && _h !== void 0 ? _h : '',
            partnerLabelId: (_j = accountDetail === null || accountDetail === void 0 ? void 0 : accountDetail.partnerLabelId) !== null && _j !== void 0 ? _j : '',
            level: (_k = accountDetail === null || accountDetail === void 0 ? void 0 : accountDetail.level) !== null && _k !== void 0 ? _k : (isLevel3 ? 'Level 3' : 'Level 2'),
            creditLimit: (_l = accountDetail === null || accountDetail === void 0 ? void 0 : accountDetail.creditLimit) !== null && _l !== void 0 ? _l : '',
            license: (_m = accountDetail === null || accountDetail === void 0 ? void 0 : accountDetail.license) !== null && _m !== void 0 ? _m : '',
            mobile: (_o = accountDetail === null || accountDetail === void 0 ? void 0 : accountDetail.mobile) !== null && _o !== void 0 ? _o : '',
            phoneNumber: (_p = accountDetail === null || accountDetail === void 0 ? void 0 : accountDetail.phoneNumber) !== null && _p !== void 0 ? _p : '',
            userName: (_q = accountDetail === null || accountDetail === void 0 ? void 0 : accountDetail.userName) !== null && _q !== void 0 ? _q : '',
            address: (_r = accountDetail === null || accountDetail === void 0 ? void 0 : accountDetail.address) !== null && _r !== void 0 ? _r : '',
            password: (_s = accountDetail === null || accountDetail === void 0 ? void 0 : accountDetail.password) !== null && _s !== void 0 ? _s : '',
            city: (_t = accountDetail === null || accountDetail === void 0 ? void 0 : accountDetail.city) !== null && _t !== void 0 ? _t : '',
            postalCode: (_u = accountDetail === null || accountDetail === void 0 ? void 0 : accountDetail.postalCode) !== null && _u !== void 0 ? _u : '',
            approvedDate: (_v = accountDetail === null || accountDetail === void 0 ? void 0 : accountDetail.approvedDate) !== null && _v !== void 0 ? _v : null,
        };
    };
    var validationSchema = function () {
        return yup__WEBPACK_IMPORTED_MODULE_3__["object"]().shape(__assign({ name: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required(), id: yup__WEBPACK_IMPORTED_MODULE_3__["number"]().positive().integer().required(), email: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().email().required(), questionnaireReceiptDate: yup__WEBPACK_IMPORTED_MODULE_3__["date"]().required(), statusAccount: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required(), country: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required(), currency: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required(), language: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required(), partnerLabelId: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required(), level: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required() }, ((account === null || account === void 0 ? void 0 : account.credit) === 'Yes' ? { creditLimit: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required() } : { creditLimit: yup__WEBPACK_IMPORTED_MODULE_3__["string"]() })));
    };
    var profileInfo = function (setFieldValue, values) {
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: 'profile-info' },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", { className: 'required-field' }, "Account Name"),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_6__["FastField"], { name: 'name', component: _shared_InputField__WEBPACK_IMPORTED_MODULE_8__["default"] })),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", { className: 'required-field' }, "Account ID"),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_6__["FastField"], { name: 'id', type: 'number', component: _shared_InputField__WEBPACK_IMPORTED_MODULE_8__["default"], disabled: true }))),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", { className: 'required-field' }, "Partner Label ID"),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_6__["FastField"], { name: 'partnerLabelId', component: _shared_InputField__WEBPACK_IMPORTED_MODULE_8__["default"] })),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", { className: 'required-field' }, "Level"),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_6__["FastField"], { name: 'level', component: _shared_InputField__WEBPACK_IMPORTED_MODULE_8__["default"], disabled: !accountDetail || isLevel3 }))),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", { className: 'required-field' }, "Status"),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_6__["Field"], { name: 'statusAccount', component: _shared_SelectField__WEBPACK_IMPORTED_MODULE_7__["default"], options: _common_constants_CommonConst__WEBPACK_IMPORTED_MODULE_11__["CONSTANT"].ACCOUNT_CREATION.STATUS })),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", { className: 'required-field' }, "Language"),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_6__["FastField"], { name: 'language', component: _shared_SelectField__WEBPACK_IMPORTED_MODULE_7__["default"], options: _common_constants_CommonConst__WEBPACK_IMPORTED_MODULE_11__["CONSTANT"].ACCOUNT_CREATION.LANGUAGES }))),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "License"),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_6__["FastField"], { name: 'license', component: _shared_InputField__WEBPACK_IMPORTED_MODULE_8__["default"] })),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", { className: 'required-field' }, "Email Address"),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_6__["FastField"], { name: 'email', component: _shared_InputField__WEBPACK_IMPORTED_MODULE_8__["default"] }))),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", { className: 'required-field' }, "Currency"),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_6__["FastField"], { name: 'currency', component: _shared_SelectField__WEBPACK_IMPORTED_MODULE_7__["default"], options: _common_constants_CommonConst__WEBPACK_IMPORTED_MODULE_11__["CONSTANT"].ACCOUNT_CREATION.CURRENCIES })),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Phone"),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_6__["FastField"], { name: 'phoneNumber', component: _shared_InputField__WEBPACK_IMPORTED_MODULE_8__["default"] }))),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", { className: 'required-field' }, "Credit Account"),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_toggle_button_toggle_button__WEBPACK_IMPORTED_MODULE_10__["default"], { name: 'credit', small: true, onClick: onChangeCredit, defaultChecked: (account === null || account === void 0 ? void 0 : account.credit) === 'Yes' })),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Mobile"),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_6__["FastField"], { name: 'mobile', component: _shared_InputField__WEBPACK_IMPORTED_MODULE_8__["default"] }))),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Credit Limit"),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_6__["Field"], { name: 'creditLimit', component: _shared_InputField__WEBPACK_IMPORTED_MODULE_8__["default"], disabled: (account === null || account === void 0 ? void 0 : account.credit) !== 'Yes' })),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "username"),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_6__["Field"], { name: 'userName', component: _shared_InputField__WEBPACK_IMPORTED_MODULE_8__["default"], disabled: !accountDetail || (values === null || values === void 0 ? void 0 : values.statusAccount) !== 'verified' }))),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Address"),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_6__["FastField"], { name: 'address', component: _shared_InputField__WEBPACK_IMPORTED_MODULE_8__["default"] })),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Password"),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_6__["FastField"], { name: 'password', type: 'password', component: _shared_InputField__WEBPACK_IMPORTED_MODULE_8__["default"], disabled: !accountDetail }))),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "City"),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_6__["Field"], { name: 'city', component: _shared_InputField__WEBPACK_IMPORTED_MODULE_8__["default"] })),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null)),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", { className: 'required-field' }, "Country"),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_6__["FastField"], { name: 'country', component: _shared_SelectField__WEBPACK_IMPORTED_MODULE_7__["default"], options: _common_constants_CommonConst__WEBPACK_IMPORTED_MODULE_11__["CONSTANT"].ACCOUNT_CREATION.COUNTRIES })),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", { className: 'required-field' }, "Questionnaire Receipt Date"),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_6__["FastField"], { name: 'questionnaireReceiptDate', component: _shared_DatePickerField__WEBPACK_IMPORTED_MODULE_9__["default"], onChange: setFieldValue }))),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Postal Code"),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_6__["FastField"], { name: 'postalCode', component: _shared_InputField__WEBPACK_IMPORTED_MODULE_8__["default"] })),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Account Approval Date"),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_6__["FastField"], { name: 'approvedDate', component: _shared_DatePickerField__WEBPACK_IMPORTED_MODULE_9__["default"], onChange: setFieldValue })))))));
    };
    var productAccess = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: 'product-access' },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", { colSpan: 4 }, " Product Access"))),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: 'inline' },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["FormCheck"], { name: 'deposits', type: 'checkbox', defaultChecked: !accountDetail || (accountDetail === null || accountDetail === void 0 ? void 0 : accountDetail.deposits) === 'Yes', onClick: onChangeProductAccess }),
                                "Deposits")),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: 'inline' },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["FormCheck"], { name: 'withdrawals', type: 'checkbox', defaultChecked: !accountDetail || (accountDetail === null || accountDetail === void 0 ? void 0 : accountDetail.withdrawals) === 'Yes', onClick: onChangeProductAccess }),
                                "Withdrawals")),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: 'inline' },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["FormCheck"], { name: 'casino', type: 'checkbox', defaultChecked: !accountDetail || (accountDetail === null || accountDetail === void 0 ? void 0 : accountDetail.casino) === 'Yes', onClick: onChangeProductAccess }),
                                "Casino")),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: 'inline' },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["FormCheck"], { name: 'sportsbook', type: 'checkbox', defaultChecked: !accountDetail || (accountDetail === null || accountDetail === void 0 ? void 0 : accountDetail.sportsbook) === 'Yes', onClick: onChangeProductAccess }),
                                "Sportsbook")))))));
    };
    var onChangeCredit = function (e) {
        var _a;
        setAccount(__assign(__assign({}, account), (_a = {}, _a[e.target.name] = e.target.checked ? 'Yes' : 'No', _a)));
    };
    var onChangeProductAccess = function (e) {
        var _a;
        setAccount(__assign(__assign({}, account), (_a = {}, _a[e.target.name] = e.target.checked ? 'Yes' : 'No', _a)));
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_6__["Formik"], { initialValues: initialValues(), onSubmit: function (values) { return updateAccount(values); }, validationSchema: validationSchema() }, function (props) {
        var handleSubmit = props.handleSubmit, setFieldValue = props.setFieldValue, values = props.values;
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", { onSubmit: handleSubmit },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Modal"], { show: true, onHide: onClosePopup, keyboard: false, dialogClassName: 'modal-dialog modal-xl' },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Modal"].Header, { closeButton: true },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Modal"].Title, { className: 'title' },
                        accountDetail && !isLevel3 ? 'EDIT' : 'ADD NEW',
                        " CORPORATE PROFILE")),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Modal"].Body, null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: 'profile-detail' },
                        profileInfo(setFieldValue, values),
                        productAccess())),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Modal"].Footer, null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], { variant: 'primary', onClick: onClosePopup }, "Close"),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], { type: 'submit', variant: 'success', disabled: !props.isValid, onClick: props.handleSubmit }, "Save")))));
    }));
}
/* harmony default export */ __webpack_exports__["default"] = (AddEditProfile);


/***/ })

})
//# sourceMappingURL=5.1d70225623ffdf911a14.hot-update.js.map