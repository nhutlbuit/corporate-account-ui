webpackHotUpdate("bundle~._src_se",{

/***/ "./src/services/account.service.ts":
/*!*****************************************!*\
  !*** ./src/services/account.service.ts ***!
  \*****************************************/
/*! exports provided: getAccountListingService, getAccountDetailService, updateAccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAccountListingService", function() { return getAccountListingService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAccountDetailService", function() { return getAccountDetailService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateAccountService", function() { return updateAccountService; });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
var accounts = [
    {
        id: 1112890, name: 'Kevin.os', partnerId: 'Fred Dan', level: 'Level 3', currency: 'GBP', email: 'corporate@js.com', status: 'ACTIVE',
        partnerLabelId: 'Peter Pan', statusAccount: 'pending', license: 'Curacao', credit: 'No', creditLimit: 'N/A',
        address: 'United KingDom', postalCode: '10000', language: 'en', phoneNumber: '0968868300', mobile: '0968868300',
        userName: 'nat.os', password: '1234qwer', questionnaireReceiptDate: new Date(), approvedDate: new Date(),
        country: 'us',
        deposits: 'Yes', withdrawals: 'No', casino: 'Yes', sportsbook: 'No', parentId: 0
    },
    {
        id: 1112891, name: 'Rob.os', partnerId: 'Fred Dan', level: 'Level 3', currency: 'VND', email: 'corporate@js.com', status: 'INACTIVE',
        partnerLabelId: 'Peter Pan', statusAccount: 'verified', license: 'Curacao', credit: 'Yes', creditLimit: 'N/A',
        address: 'United KingDom', postalCode: '10000', language: 'en', phoneNumber: '0968868300', mobile: '0968868300',
        userName: 'nat.os', password: '1234qwer', questionnaireReceiptDate: new Date(), approvedDate: new Date(),
        country: 'vn',
        deposits: 'Yes', withdrawals: 'No', casino: 'Yes', sportsbook: 'No', parentId: 0
    },
    {
        id: 1112892, name: 'Kenny.os', partnerId: 'Fred Dan', level: 'Level 3', currency: 'USD', email: 'corporate@js.com', status: 'ACTIVE',
        partnerLabelId: 'Peter Pan', statusAccount: 'inactive', license: 'Curacao', credit: 'No', creditLimit: 'N/A',
        address: 'United KingDom', postalCode: '10000', language: 'vn', phoneNumber: '0968868300', mobile: '0968868300',
        userName: 'nat.os', password: '1234qwer', questionnaireReceiptDate: new Date(), approvedDate: new Date(),
        country: 'uk',
        deposits: 'Yes', withdrawals: 'No', casino: 'Yes', sportsbook: 'No', parentId: 0
    },
    {
        id: 1112893, name: 'Ali.os', partnerId: 'Fred Dan', level: 'Level 2', currency: 'USD', email: 'corporate@js.com', status: 'INACTIVE',
        partnerLabelId: 'Conan Huynh', statusAccount: 'closed', license: 'Curacao', credit: 'Yes', creditLimit: 'N/A',
        address: 'United KingDom', postalCode: '10000', language: 'fr', phoneNumber: '0968868300', mobile: '0968868300',
        userName: 'nat.os', password: '1234qwer', questionnaireReceiptDate: new Date(), approvedDate: new Date(),
        country: 'us',
        deposits: 'Yes', withdrawals: 'No', casino: 'Yes', sportsbook: 'No', parentId: 0
    },
    {
        id: 1112894, name: 'Nat.os', partnerId: 'Fred Dan', level: 'Level 2', currency: 'VND', email: 'corporate@js.com', status: 'ACTIVE',
        partnerLabelId: 'Conan Huynh', statusAccount: 'verified', license: 'Curacao', credit: 'No', creditLimit: 'N/A',
        address: 'United KingDom', postalCode: '10000', language: 'vn', phoneNumber: '0968868300', mobile: '0968868300',
        userName: 'nat.os', password: '1234qwer', questionnaireReceiptDate: new Date(), approvedDate: new Date(),
        country: 'vn',
        deposits: 'Yes', withdrawals: 'No', casino: 'Yes', sportsbook: 'No', parentId: 0
    }
];
var getAccountListingService = function (account) { return __awaiter(void 0, void 0, void 0, function () {
    var getAccounts;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                getAccounts = function (type) {
                    return new Promise(function (resolve, reject) {
                        setTimeout(function () {
                            var result = accounts;
                            switch (type) {
                                case 'id': {
                                    result = accounts.filter(function (e) { return e.id.toString().includes(account.value); });
                                    break;
                                }
                                case 'name': {
                                    result = accounts.filter(function (e) { var _a, _b; return (_a = e.name) === null || _a === void 0 ? void 0 : _a.toUpperCase().includes((_b = account.value) === null || _b === void 0 ? void 0 : _b.toUpperCase()); });
                                    break;
                                }
                                case 'partnerId':
                                    result = accounts.filter(function (e) { return e.partnerLabelId.includes(account.value); });
                                    break;
                                default: {
                                    break;
                                }
                            }
                            return resolve(result);
                        }, 1000);
                    });
                };
                return [4 /*yield*/, getAccounts(account.type)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
var getAccountDetailService = function (accountId) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, accounts.filter(function (e) { return e.id == accountId; })[0]];
    });
}); };
var updateAccountService = function (account) { return __awaiter(void 0, void 0, void 0, function () {
    var acc;
    return __generator(this, function (_a) {
        acc = accounts.filter(function (e) { return e.id != account.id; });
        acc.push(account);
        if (acc.length === accounts.length && account.level === 'Level 3') {
            debugger;
            // const accountLevel2: any = accounts.find((e: any) => e.id === account.parentId);
            // accountLevel2.parentId = account.parentId;
            acc.map(function (e) {
                if (e.id === account.parentId) {
                    e.parentId = account.parentId;
                }
                return e;
            });
            // update lai accountlv2
        }
        accounts = acc;
        // handle to add acc lv3
        // update parentId for lv 2
        // add new level 3
        return [2 /*return*/, 'ok'];
    });
}); };


/***/ })

})
//# sourceMappingURL=bundle~._src_se.2d5d659553d621c1cd1b.hot-update.js.map