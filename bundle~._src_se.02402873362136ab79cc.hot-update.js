webpackHotUpdate("bundle~._src_se",{

/***/ "./src/store/middleware/account.saga.tsx":
/*!***********************************************!*\
  !*** ./src/store/middleware/account.saga.tsx ***!
  \***********************************************/
/*! exports provided: AccountSaga */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountSaga", function() { return AccountSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/account.service */ "./src/services/account.service.ts");
/* harmony import */ var _slice_account_slice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../slice/account.slice */ "./src/store/slice/account.slice.ts");
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



function loadingAccountsAsync(param) {
    var data, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 5]);
                return [4 /*yield*/, Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_services_account_service__WEBPACK_IMPORTED_MODULE_1__["getAccountListingService"], param.payload)];
            case 1:
                data = _a.sent();
                return [4 /*yield*/, Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_slice_account_slice__WEBPACK_IMPORTED_MODULE_2__["loadAccountsSuccess"])(data))];
            case 2:
                _a.sent();
                return [3 /*break*/, 5];
            case 3:
                err_1 = _a.sent();
                return [4 /*yield*/, Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_slice_account_slice__WEBPACK_IMPORTED_MODULE_2__["loadAccountsError"])())];
            case 4:
                _a.sent();
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}
function loadingAccountDetailAsync(param) {
    var data, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 5]);
                return [4 /*yield*/, Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_services_account_service__WEBPACK_IMPORTED_MODULE_1__["getAccountDetailService"], param.payload)];
            case 1:
                data = _a.sent();
                return [4 /*yield*/, Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_slice_account_slice__WEBPACK_IMPORTED_MODULE_2__["getAccountDetailSuccess"])(data))];
            case 2:
                _a.sent();
                return [3 /*break*/, 5];
            case 3:
                err_2 = _a.sent();
                return [4 /*yield*/, Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_slice_account_slice__WEBPACK_IMPORTED_MODULE_2__["getAccountDetailError"])())];
            case 4:
                _a.sent();
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}
function updatingAccountAsync(param) {
    var data, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 5]);
                return [4 /*yield*/, Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_services_account_service__WEBPACK_IMPORTED_MODULE_1__["updateAccountService"], param.payload)];
            case 1:
                data = _a.sent();
                return [4 /*yield*/, Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_slice_account_slice__WEBPACK_IMPORTED_MODULE_2__["saveAccountSuccess"])(data))];
            case 2:
                _a.sent();
                return [3 /*break*/, 5];
            case 3:
                err_3 = _a.sent();
                console.log(err_3);
                return [4 /*yield*/, Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_slice_account_slice__WEBPACK_IMPORTED_MODULE_2__["saveAccountError"])())];
            case 4:
                _a.sent();
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}
function AccountSaga() {
    var _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"];
                return [4 /*yield*/, Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_slice_account_slice__WEBPACK_IMPORTED_MODULE_2__["loadAccounts"], loadingAccountsAsync)];
            case 1:
                _b = [
                    _c.sent()
                ];
                return [4 /*yield*/, Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_slice_account_slice__WEBPACK_IMPORTED_MODULE_2__["getAccountDetail"], loadingAccountDetailAsync)];
            case 2:
                _b = _b.concat([
                    _c.sent()
                ]);
                return [4 /*yield*/, Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_slice_account_slice__WEBPACK_IMPORTED_MODULE_2__["saveAccount"], updatingAccountAsync)];
            case 3: return [4 /*yield*/, _a.apply(void 0, [_b.concat([
                        _c.sent()
                    ])])];
            case 4:
                _c.sent();
                return [2 /*return*/];
        }
    });
}


/***/ })

})
//# sourceMappingURL=bundle~._src_se.02402873362136ab79cc.hot-update.js.map