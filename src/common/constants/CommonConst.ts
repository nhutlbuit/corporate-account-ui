
export const CONSTANT = Object.freeze({
    TOAST_TIMEOUT: 5000,
    COMMUNICATION: {
        COMMENT_TYPES_CREATE: [
            { label: 'Verification', value: 'VERIFICATION' },
            { label: 'Risk', value: 'RISK' },
            { label: 'Affiliates', value: 'AFFILIATES' },
            { label: 'General', value: 'GENERAL' },
            { label: 'Casino', value: 'CASINO' },
            { label: 'Payments', value: 'PAYMENTS' },
            { label: 'RG Limit', value: 'RG_LIMIT' },
            { label: 'Wagering', value: 'WAGERING' },
            { label: 'Other', value: 'OTHER' },
            { label: 'Telesales', value: 'TELESALES' }
        ]
    }
});

export const PermissionEnum = {
    DATA_CHANGE: {
        COPY_VIEW: "DATACHANGE_COPY_VIEW",
        EXPORT_EXCEL_VIEW: "DATACHANGE_EXPORT_EXCEL_VIEW",
        EXPORT_PDF_VIEW: "DATACHANGE_EXPORT_PDF_VIEW",
        PRINT_VIEW: "DATACHANGE_PRINT_VIEW",
        SEARCH_VIEW: "DATACHANGE_SEARCH_VIEW",
        DATE_FROM_FILTER_VIEW: "DATACHANGE_DATE_FROM_FILTER_VIEW",
        DATE_TO_FILTER_VIEW: "DATACHANGE_DATE_TO_FILTER_VIEW",
        UPDATE_BY_FILTER_VIEW: "DATACHANGE_UPDATE_BY_FILTER_VIEW",
        FIELD_NAME_FILTER_VIEW: "DATACHANGE_FIELD_NAME_FILTER_VIEW",
        FILTER_DATE_FORMAT: "YYYYMMDD"
    },

    COMMUNICATION: {
        TABLE_VIEW: 'COMMUNICATION_TABLE_VIEW',
        ALL_COMMENTS_VIEW: 'COMMUNICATION_ALL_COMMENTS_VIEW',
        SYSTEM_COMMENTS_VIEW: 'COMMUNICATION_SYSTEM_COMMENTS_VIEW',
        EMAIL_COMMENTS_VIEW: 'COMMUNICATION_EMAIL_COMMENTS_VIEW',
        NOTIFICATION_COMMENTS_VIEW: 'COMMUNICATION_NOTIFICATION_COMMENTS_VIEW',
        HISTORICAL_COMMENTS_VIEW: 'COMMUNICATION_HISTORICAL_COMMENTS_VIEW',
        ARCHIVED_COMMENTS_VIEW: 'COMMUNICATION_ARCHIVED_COMMENTS_VIEW',
        FLAGGED_COMMENTS_VIEW: 'COMMUNICATION_FLAGGED_COMMENTS_VIEW',
        ACTION_FLAG_EDIT: 'COMMUNICATION_ACTION_FLAG_COMMENTS_EDIT',
        ACTION_ADD_NEW_BUTTON: 'COMMUNICATION_NEW_COMMENT_BUTTON_EDIT',
        ACTION_ARCHIVE_EDIT: 'COMMUNICATION_ACTION_ARCHIVE_COMMENTS_EDIT',
    }
};

export const DEFAULT_PAGING = {
    START_PAGE: 1,
    RECORD_PER_PAGE: 10
};

export const AdditionAllOption = [
    { value: '', label: "All" }
];

export enum ExportType {
    PDF = 'PDF',
    CSV = 'CSV',
}

const ServiceContextPath = {
    MEMBER_MANAGER: '/member-manager'
}

export const METHOD = {
    GET: "get",
    POST: "post",
    PUT: "put",
    DELETE: "delete",
};
