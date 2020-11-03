import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {toast} from 'react-toastify';

const initialState = {
    accounts: [],
    accountDetail: {},
    filterName: '',
    loading: false,
    error: '',
    toggleNavbar: true,
    isShowAccountListing: false,
    isShowContentPage: false,
    isUpdateAccount: false,
};

export const AccountSlice = createSlice({
    name: 'Account',
    initialState,
    reducers: {
        loadAccounts: (state, payloadAction: PayloadAction<any>) => {
            state.loading = true;
            state.error = '';
            state.filterName = payloadAction.payload.value;
            state.isShowContentPage = false;
            state.isShowAccountListing = false;
        },
        loadAccountsSuccess: (state, payloadAction: PayloadAction<any>) => {
            state.loading = false;
            state.error = '';
            state.accounts = payloadAction.payload;
            state.isShowAccountListing = true;
        },
        loadAccountsError: (state) => {
            state.error = 'failed';
            state.loading = true;
            toast.error('get accounts failed. Please contact admin!');
        },

        onToggleNavbar: (state, payloadAction: PayloadAction<any>) => {
            state.toggleNavbar = payloadAction.payload;
        },

        getAccountDetail: (state, payloadAction: PayloadAction<any>) => {
            state.loading = true;
            state.error = '';
            state.isShowContentPage = true;
            state.isShowAccountListing = false;
            state.isUpdateAccount = false;
        },
        getAccountDetailSuccess: (state, payloadAction: PayloadAction<any>) => {
            state.loading = false;
            state.error = '';
            state.accountDetail = payloadAction.payload;
        },
        getAccountDetailError: (state) => {
            state.loading = false;
            state.error = 'failed';
            toast.error('get account detail failed. Please contact admin!');
        },

        saveAccount: (state, payloadAction: PayloadAction<any>) => {
            state.loading = true;
            state.error = '';
            state.isUpdateAccount = false;
        },
        saveAccountSuccess: (state, payloadAction: PayloadAction<any>) => {
            state.loading = false;
            state.error = '';
            state.isUpdateAccount = true;
            toast.success('Update Account successfully!');
        },
        saveAccountError: (state) => {
            state.loading = false;
            state.error = 'failed';
            toast.error('Update account failed. Please contact admin!');
        },
    }
});

export const {
    loadAccounts,
    loadAccountsSuccess,
    loadAccountsError,

    onToggleNavbar,

    getAccountDetail,
    getAccountDetailError,
    getAccountDetailSuccess,

    saveAccount,
    saveAccountSuccess,
    saveAccountError

} = AccountSlice.actions;

export default AccountSlice.reducer;
