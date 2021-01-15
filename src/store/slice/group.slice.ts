import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {toast} from 'react-toastify';

const initialState = {
    loading: false,
    error: '',
    groups: [],
    groupsAccountCount: [],
    isCreated: false,
    isUpdate: false,
    isDelete: false
};

export const GroupSlice = createSlice({
    name: 'Directors',
    initialState,
    reducers: {
        loadGroups: (state) => {
            state.loading = true;
            state.error = '';
            state.isCreated = false;
            state.isUpdate = false;
            state.isDelete = false;
            state.groups = [];
        },
        loadGroupsSuccess: (state, payloadAction: PayloadAction<any>) => {
            state.loading = false;
            state.error = '';
            state.groupsAccountCount = payloadAction.payload;
        },
        loadGroupsError: (state) => {
            state.error = 'failed';
            state.loading = false;
            toast.error('get Sub Groups failed. Please contact admin!');
        },

        addAGroup: (state, payloadAction: PayloadAction<any>) => {
            state.loading = true;
            state.error = '';
            state.isCreated = false;
        },
        addAGroupSuccess: (state, payloadAction: PayloadAction<any>) => {
            state.loading = false;
            state.error = '';
            state.isCreated = true;
            toast.success('add a new Sub Group successfully');
        },
        addAGroupError: (state) => {
            state.error = 'failed';
            state.loading = true;
            toast.error('add a new Sub Group failed. Please contact admin!');
        },
        resetIsCreated: (state) => {
            state.isCreated = false;
        },

        updateAGroup: (state, payloadAction: PayloadAction<any>) => {
            state.loading = true;
            state.error = '';
            state.isUpdate = false;
        },
        updateAGroupSuccess: (state, payloadAction: PayloadAction<any>) => {
            state.loading = false;
            state.error = '';
            state.isUpdate = true;
            toast.success('update a Sub Group successfully');
        },
        updateAGroupError: (state) => {
            state.error = 'update a Sub Group failed. Please contact admin!';
            state.loading = true;
            toast.error('update a Sub Group failed. Please contact admin!');
        },

        deleteAGroup: (state, payloadAction: PayloadAction<any>) => {
            state.loading = true;
            state.error = '';
            state.isDelete = false;
        },
        deleteAGroupSuccess: (state, payloadAction: PayloadAction<any>) => {
            state.loading = false;
            state.error = '';
            state.isDelete = true;
            toast.success('delete a Sub Group successfully');
        },
        deleteAGroupError: (state) => {
            state.error = 'delete a Sub Group failed. Please contact admin!';
            state.loading = true;
            toast.error(state.error);
        },
    }
});

export const {
    loadGroups,
    loadGroupsSuccess,
    loadGroupsError,

    updateAGroup,
    updateAGroupSuccess,
    updateAGroupError,

    addAGroup,
    addAGroupSuccess,
    addAGroupError,
    resetIsCreated,

    deleteAGroup,
    deleteAGroupSuccess,
    deleteAGroupError

} = GroupSlice.actions;

export default GroupSlice.reducer;
