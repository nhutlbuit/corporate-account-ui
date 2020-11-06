import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {toast} from 'react-toastify';

const initialState = {
    downLines: [],
    loading: false,
    error: ''
};

export const AccountDrillDownSlice = createSlice({
    name: 'AccountDrillDown',
    initialState,
    reducers: {
        loadDownLines: (state, payloadAction: PayloadAction<any>) => {
            state.loading = true;
            state.error = '';
        },
        loadDownLinesSuccess: (state, payloadAction: PayloadAction<any>) => {
            state.loading = false;
            state.error = '';
            state.downLines = payloadAction.payload.downLines;
        },
        loadDownLinesError: (state) => {
            state.error = 'failed';
            state.loading = true;
            toast.error('get down line accounts failed. Please contact admin!');
        },
    }
});

export const {
    loadDownLines,
    loadDownLinesSuccess,
    loadDownLinesError,
} = AccountDrillDownSlice.actions;

export default AccountDrillDownSlice.reducer;
