import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {toast} from "react-toastify";

const initialState = {
    accounts: [],
    accountDetail: {},
    filterName: '',
    loading: false,
    error: '',
    toggleNavbar: true,
    isShowAccountListing: false,
    isShowContentPage: false
};

export const AccountSlice = createSlice({
    name: 'Account',
    initialState,
    reducers: {
        loadAccounts: (state, payloadAction: PayloadAction<any>) => {
            state.loading = true;
            state.error = '';
            state.filterName = payloadAction.payload;
            state.isShowContentPage = false;
        },
        loadAccountsSuccess: (state, payloadAction: PayloadAction<any>) => {
            state.loading = false;
            state.error = '';
            state.accounts = payloadAction.payload;
            if (payloadAction.payload.length) {
                state.isShowAccountListing = true;
            }
        },
        loadAccountsError: (state) => {
            state.error = 'failed';
            toast.error("get accounts failed. Please contact admin!");
        },

        onToggleNavbar: (state, payloadAction: PayloadAction<any>) => {
            state.toggleNavbar = payloadAction.payload;
        },

        getAccountDetail: (state, payloadAction: PayloadAction<any>) => {
            state.loading = true;
            state.error = '';
            state.isShowContentPage = true;
            state.isShowAccountListing = false;
        },
        getAccountDetailSuccess: (state, payloadAction: PayloadAction<any>) => {
            state.loading = false;
            state.error = '';
            state.accountDetail = payloadAction.payload;
        },
        getAccountDetailError: (state) => {
            state.loading = false;
            state.error = 'failed';
            toast.error("get account detail failed. Please contact admin!");
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

} = AccountSlice.actions;

export default AccountSlice.reducer;