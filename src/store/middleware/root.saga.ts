import {all} from 'redux-saga/effects';
import {AccountSaga} from './account.saga';
import {DirectorSaga} from './director.saga';
import {AccountReportSaga} from './account.report.saga';
import { GroupSaga } from './group.saga';

export function* RootSaga() {
    yield all([
        AccountSaga(),
        DirectorSaga(),
        AccountReportSaga(),
        GroupSaga()
    ]);
}
