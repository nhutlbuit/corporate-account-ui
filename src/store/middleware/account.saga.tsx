import {all, call, put, takeLatest} from 'redux-saga/effects';
import {getAccountListingService, getAccountDetailService} from "../../services/account.service";
import {
    loadAccounts, loadAccountsSuccess, loadAccountsError,
    getAccountDetail, getAccountDetailError, getAccountDetailSuccess,
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

export function* AccountSaga() {
    yield all([
        yield takeLatest(loadAccounts, loadingAccountsAsync),
        yield takeLatest(getAccountDetail, loadingAccountDetailAsync),
    ]);
}
