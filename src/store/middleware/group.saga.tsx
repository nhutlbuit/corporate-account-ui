import {all, call, put, takeLatest} from 'redux-saga/effects';
import { createAGroupService, getGroupsService, updateAGroupService, deleteAGroupService } from '../../services/group.service';
import {
    loadGroups,
    loadGroupsSuccess,
    loadGroupsError,

    updateAGroup,
    updateAGroupSuccess,
    updateAGroupError,

    addAGroup,
    addAGroupSuccess,
    addAGroupError,

    deleteAGroup,
    deleteAGroupSuccess,
    deleteAGroupError
} from '../slice/group.slice';

function* loadingGroupsAsync() {
    try {
        const data = yield call(getGroupsService);
        yield put(loadGroupsSuccess(data));
    } catch (err) {
        yield put(loadGroupsError());
    }
}

function* addingAGroupAsync(param: any) {
    try {
        const data = yield call(createAGroupService, param.payload);
        yield put(addAGroupSuccess(data));
    } catch (err) {
        yield put(addAGroupError());
    }
}

function* updatingAGroupAsync(param: any) {
    try {
        const data = yield call(updateAGroupService, param.payload);
        yield put(updateAGroupSuccess(data));
    } catch (err) {
        yield put(updateAGroupError());
    }
}

function* deletingAGroupAsync(param: any) {
    try {
        const data = yield call(deleteAGroupService, param.payload);
        yield put(deleteAGroupSuccess(data));
    } catch (err) {
        yield put(deleteAGroupError());
    }
}

export function* GroupSaga() {
    yield all([
        yield takeLatest(loadGroups, loadingGroupsAsync),
        yield takeLatest(addAGroup, addingAGroupAsync),
        yield takeLatest(updateAGroup, updatingAGroupAsync),
        yield takeLatest(deleteAGroup, deletingAGroupAsync),
    ]);
}
