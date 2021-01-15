import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { startCase } from 'lodash';
import {toast} from 'react-toastify';

const initialState = {
    accountReport: [],
    totalRecords: 0,
    totalPages: 0,
    accountDetail: {},
    accountIdSelected: 0,
    partnerLabelId: 0,
    filterName: '',
    loading: false,
    error: '',
    toggleNavbar: true,
    isShowAccountReportListing: false,
    isLoadingAccountReportListing: false
    
};

export const AccountReportSlice = createSlice({
    name: 'AccountReport',
    initialState,
    reducers: {
        loadAccountReport: (state, payloadAction: PayloadAction<any>) => {
            state.isLoadingAccountReportListing = true;
            state.error = '';
            state.filterName = payloadAction.payload.value;
            state.isShowContentPage = false;
            state.isShowAccountReportListing = false;
        },
        loadAccountReportSuccess: (state, payloadAction: PayloadAction<any>) => {
            state.isLoadingAccountReportListing = false;
            state.isShowAccountReportListing = true;
            state.error = '';
            state.accountReport = payloadAction.payload.records;
            state.totalRecords = payloadAction.payload.totalRecords;
            state.totalPages = payloadAction.payload.totalPages;
        },
        loadAccountReportError: (state) => {
            state.error = 'failed';
            state.isLoadingAccountReportListing = true;
            toast.error('get accounts report failed. Please contact admin!');
        },

        onToggleNavbar: (state, payloadAction: PayloadAction<any>) => {
            state.toggleNavbar = payloadAction.payload;
        },
    }
});

export const {
    loadAccountReport,
    loadAccountReportSuccess,
    loadAccountReportError,

    onToggleNavbar

} = AccountReportSlice.actions;

export default AccountReportSlice.reducer;
