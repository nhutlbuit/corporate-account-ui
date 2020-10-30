import {all, call, put, takeLatest} from 'redux-saga/effects';
import {getAccountListingService, getAccountDetailService, updateAccountService} from "../../services/account.service";
import {
    loadAccounts, loadAccountsSuccess, loadAccountsError,
    getAccountDetail, getAccountDetailSuccess, getAccountDetailError,
    saveAccount, saveAccountSuccess, saveAccountError
} from '../slice/account.slice'

function* loadingAccountsAsync(param: any) {
    try {
        const data = yield call(getAccountListingService, param.payload);
        yield put(loadAccountsSuccess(data));
    } catch (err) {
        yield put(loadAccountsError());
    }
}

function* loadingAccountDetailAsync(param: any) {
    try {
        const data = yield call(getAccountDetailService, param.payload);
        yield put(getAccountDetailSuccess(data));
    } catch (err) {
        yield put(getAccountDetailError());
    }
}

function* updatingAccountAsync(param: any) {
    try {
        const data = yield call(updateAccountService, param.payload);
        yield put(saveAccountSuccess(data));
    } catch (err) {
        console.log(err);
        yield put(saveAccountError());
    }
}

export function* AccountSaga() {
    yield all([
        yield takeLatest(loadAccounts, loadingAccountsAsync),
        yield takeLatest(getAccountDetail, loadingAccountDetailAsync),
        yield takeLatest(saveAccount, updatingAccountAsync),
    ]);
}
