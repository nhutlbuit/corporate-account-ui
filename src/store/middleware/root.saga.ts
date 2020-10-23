import {all} from "redux-saga/effects";
import {AccountSaga} from "./account.saga";

export function* RootSaga() {
    yield all([
        AccountSaga()
    ]);
}