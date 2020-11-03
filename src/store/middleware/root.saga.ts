import {all} from 'redux-saga/effects';
import {AccountSaga} from './account.saga';
import {DirectorSaga} from './director.saga';

export function* RootSaga() {
    yield all([
        AccountSaga(),
        DirectorSaga()
    ]);
}
