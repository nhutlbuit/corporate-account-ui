import {all, call, put, takeLatest} from 'redux-saga/effects';
import {getDirectorsService, updateDirectorService, addDirectorService, deleteDirectorService} from '../../services/account.service';
import {
    loadDirectors,
    loadDirectorsSuccess,
    loadDirectorsError,

    updateDirector,
    updateDirectorSuccess,
    updateDirectorError,

    addDirector,
    addDirectorSuccess,
    addDirectorError,

    deleteDirector,
    deleteDirectorSuccess,
    deleteDirectorError
} from '../slice/director.slice';

function* loadingDirectorsAsync(param: any) {
    try {
        const data = yield call(getDirectorsService, param.payload);
        yield put(loadDirectorsSuccess(data));
    } catch (err) {
        yield put(loadDirectorsError());
    }
}

function* addingDirectorAsync(param: any) {
    try {
        const data = yield call(addDirectorService, param.payload);
        yield put(addDirectorSuccess(data));
    } catch (err) {
        yield put(addDirectorError());
    }
}

function* updatingDirectorAsync(param: any) {
    try {
        const data = yield call(updateDirectorService, param.payload);
        yield put(updateDirectorSuccess(data));
    } catch (err) {
        yield put(updateDirectorError());
    }
}

function* deletingDirectorAsync(param: any) {
    try {
        const data = yield call(deleteDirectorService, param.payload);
        yield put(deleteDirectorSuccess(data));
    } catch (err) {
        yield put(deleteDirectorError());
    }
}

export function* DirectorSaga() {
    yield all([
        yield takeLatest(loadDirectors, loadingDirectorsAsync),
        yield takeLatest(addDirector, addingDirectorAsync),
        yield takeLatest(updateDirector, updatingDirectorAsync),
        yield takeLatest(deleteDirector, deletingDirectorAsync),
    ]);
}
