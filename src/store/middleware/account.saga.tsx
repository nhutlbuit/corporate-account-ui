import {all, call, put, takeLatest} from 'redux-saga/effects';
import {
    getAccountListingService,
    getAccountDetailService,
    updateAccountService,
    getDownLineListing
} from '../../services/account.service';
import {
    loadAccounts, loadAccountsSuccess, loadAccountsError,
    getAccountDetail, getAccountDetailSuccess, getAccountDetailError,
    saveAccount, saveAccountSuccess, saveAccountError
} from '../slice/account.slice';
import {loadDownLines, loadDownLinesSuccess, loadDownLinesError} from '../slice/account-drill-down.slice';

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
        yield put(saveAccountError());
    }
}

function* loadingDownLineAsync(param: any) {
    try {
        const data = yield call(getDownLineListing, param.payload);
        yield put(loadDownLinesSuccess(data));
    } catch (err) {
        yield put(loadDownLinesError());
    }
}

export function* AccountSaga() {
    yield all([
        yield takeLatest(loadAccounts, loadingAccountsAsync),
        yield takeLatest(getAccountDetail, loadingAccountDetailAsync),
        yield takeLatest(saveAccount, updatingAccountAsync),
        yield takeLatest(loadDownLines, loadingDownLineAsync),
    ]);
}
