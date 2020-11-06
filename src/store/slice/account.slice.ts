import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { startCase } from 'lodash';
import {toast} from 'react-toastify';

const initialState = {
    accounts: [],
    accountDetail: {},
    accountIdSelected: 0,
    partnerLabelId: 0,
    filterName: '',
    loading: false,
    isLoadingAccountListing: false,
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
            state.isLoadingAccountListing = true;
            state.error = '';
            state.filterName = payloadAction.payload.value;
            state.isShowContentPage = false;
            state.isShowAccountListing = false;
        },
        loadAccountsSuccess: (state, payloadAction: PayloadAction<any>) => {
            state.isLoadingAccountListing = false;
            state.error = '';
            state.accounts = payloadAction.payload;
            state.isShowAccountListing = true;
        },
        loadAccountsError: (state) => {
            state.error = 'failed';
            state.isLoadingAccountListing = true;
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
            state.accountDetail = {};
            state.accountIdSelected = payloadAction.payload.id;
            state.partnerLabelId = payloadAction.payload.partnerLabelId;
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
