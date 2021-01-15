import {all, call, put, takeLatest} from 'redux-saga/effects';
import {
  getAccounReportListingService
} from '../../services/account.report.service';
import {
  loadAccountReport, loadAccountReportSuccess, loadAccountReportError
} from '../slice/account.report.slice';
import {loadDownLines, loadDownLinesSuccess, loadDownLinesError} from '../slice/account-drill-down.slice';

function* loadingAccountReportAsync(param: any) {
    try {
        const data = yield call(getAccounReportListingService, param.payload);
        yield put(loadAccountReportSuccess(data));
    } catch (err) {
        yield put(loadAccountReportError());
    }
}

export function* AccountReportSaga() {
    yield all([
        yield takeLatest(loadAccountReport, loadingAccountReportAsync)
    ]);
}
