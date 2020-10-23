
const accounts = [
    {
        id: 1112890, name: 'SL LTD', partnerId: 'Fred Dan', level: 'Level 3', currency: 'GBP', email: 'corporate@js.com', status: 'ACTIVE',
        partnerLabelId: 'Andrew', statusAccount: 'verified', license: 'Curacao', credit: 'No', creditLimit: 'N/A',
        address: 'United KingDom', postalCode: '10000', language: 'English', phoneNumber: '0968868300', mobile: '0968868300',
        userName: 'nat.os', password: '1234qwer', questionnaireReceiptDate: new Date(), approvedDate: new Date()
    },
    {
        id: 1112891, name: 'SL LTD', partnerId: 'Fred Dan', level: 'Level 3', currency: 'GBP', email: 'corporate@js.com', status: 'INACTIVE',
        partnerLabelId: 'Andrew', statusAccount: 'verified', license: 'Curacao', credit: 'No', creditLimit: 'N/A',
        address: 'United KingDom', postalCode: '10000', language: 'English', phoneNumber: '0968868300', mobile: '0968868300',
        userName: 'nat.os', password: '1234qwer', questionnaireReceiptDate: new Date(), approvedDate: new Date()
    },
    {
        id: 1112892, name: 'SL LTD', partnerId: 'Fred Dan', level: 'Level 3', currency: 'GBP', email: 'corporate@js.com', status: 'ACTIVE',
        partnerLabelId: 'Andrew', statusAccount: 'verified', license: 'Curacao', credit: 'No', creditLimit: 'N/A',
        address: 'United KingDom', postalCode: '10000', language: 'English', phoneNumber: '0968868300', mobile: '0968868300',
        userName: 'nat.os', password: '1234qwer', questionnaireReceiptDate: new Date(), approvedDate: new Date()
    },
    {
        id: 1112893, name: 'SL LTD', partnerId: 'Fred Dan', level: 'Level 3', currency: 'GBP', email: 'corporate@js.com', status: 'INACTIVE',
        partnerLabelId: 'Andrew', statusAccount: 'verified', license: 'Curacao', credit: 'No', creditLimit: 'N/A',
        address: 'United KingDom', postalCode: '10000', language: 'English', phoneNumber: '0968868300', mobile: '0968868300',
        userName: 'nat.os', password: '1234qwer', questionnaireReceiptDate: new Date(), approvedDate: new Date()
    },
    {
        id: 1112894, name: 'SL LTD', partnerId: 'Fred Dan', level: 'Level 3', currency: 'GBP', email: 'corporate@js.com', status: 'ACTIVE',
        partnerLabelId: 'Andrew', statusAccount: 'verified', license: 'Curacao', credit: 'No', creditLimit: 'N/A',
        address: 'United KingDom', postalCode: '10000', language: 'English', phoneNumber: '0968868300', mobile: '0968868300',
        userName: 'nat.os', password: '1234qwer', questionnaireReceiptDate: new Date(), approvedDate: new Date()
    }
]

export const getAccountListingService = async (accountId: any) => {
    return accounts.filter(e => e.id.toString().includes(accountId));
};

export const getAccountDetailService = async (accountId: any) => {
    return accounts.filter(e => e.id == accountId)[0];
};





