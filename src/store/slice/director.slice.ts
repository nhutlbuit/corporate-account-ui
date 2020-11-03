import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {toast} from 'react-toastify';

const initialState = {
    loading: false,
    error: '',
    directors: [],
    isAdd: false,
    isUpdate: false,
    isDelete: false
};

export const DirectorSlice = createSlice({
    name: 'Directors',
    initialState,
    reducers: {
        loadDirectors: (state, payloadAction: PayloadAction<any>) => {
            state.loading = true;
            state.error = '';
        },
        loadDirectorsSuccess: (state, payloadAction: PayloadAction<any>) => {
            state.loading = false;
            state.error = '';
            state.directors = payloadAction.payload;
        },
        loadDirectorsError: (state) => {
            state.error = 'failed';
            state.loading = false;
            toast.error('get directors failed. Please contact admin!');
        },

        addDirector: (state, payloadAction: PayloadAction<any>) => {
            state.loading = true;
            state.error = '';
            state.isAdd = false;
        },
        addDirectorSuccess: (state, payloadAction: PayloadAction<any>) => {
            state.loading = false;
            state.error = '';
            state.isAdd = true;
            toast.success('add director successfully');
        },
        addDirectorError: (state) => {
            state.error = 'failed';
            state.loading = true;
            toast.error('add new director failed. Please contact admin!');
        },

        updateDirector: (state, payloadAction: PayloadAction<any>) => {
            state.loading = true;
            state.error = '';
            state.isUpdate = false;
        },
        updateDirectorSuccess: (state, payloadAction: PayloadAction<any>) => {
            state.loading = false;
            state.error = '';
            state.isUpdate = true;
            toast.success('update director successfully');
        },
        updateDirectorError: (state) => {
            state.error = 'failed';
            state.loading = true;
            toast.error('update director failed. Please contact admin!');
        },

        deleteDirector: (state, payloadAction: PayloadAction<any>) => {
            state.loading = true;
            state.error = '';
            state.isDelete = false;
        },
        deleteDirectorSuccess: (state, payloadAction: PayloadAction<any>) => {
            state.loading = false;
            state.error = '';
            state.isDelete = true;
            toast.success('delete director successfully');
        },
        deleteDirectorError: (state) => {
            state.error = 'failed';
            state.loading = true;
            toast.error('delete director failed. Please contact admin!');
        },
    }
});

export const {
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

} = DirectorSlice.actions;

export default DirectorSlice.reducer;
