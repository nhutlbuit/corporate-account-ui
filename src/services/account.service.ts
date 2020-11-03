import axios from 'axios';
import { parseItem, parseList } from './ResponseHandler';

let accounts = [
    {
        id: 1112890, name: 'Kevin.os', partnerId: 'Fred Dan', level: 'Level 3', currency: 'GBP', email: 'corporate@js.com', status: 'ACTIVE',
        partnerLabelId: 'Peter Pan', statusAccount: 'pending', license: 'Curacao', credit: 'No', creditLimit: 'N/A',
        address: 'United KingDom', postalCode: '10000', language: 'en', phoneNumber: '0968868300', mobile: '0968868300',
        userName: 'nat.os', password: '1234qwer', questionnaireReceiptDate: new Date(), approvedDate: new Date(),
        country: 'us',
        deposits: 'Yes', withdrawals: 'No', casino: 'Yes', sportsbook: 'No', parentId: 0

    },
    {
        id: 1112891, name: 'Rob.os', partnerId: 'Fred Dan', level: 'Level 3', currency: 'VND', email: 'corporate@js.com', status: 'INACTIVE',
        partnerLabelId: 'Peter Pan', statusAccount: 'verified', license: 'Curacao', credit: 'Yes', creditLimit: 'N/A',
        address: 'United KingDom', postalCode: '10000', language: 'en', phoneNumber: '0968868300', mobile: '0968868300',
        userName: 'nat.os', password: '1234qwer', questionnaireReceiptDate: new Date(), approvedDate: new Date(),
        country: 'vn',
        deposits: 'Yes', withdrawals: 'No', casino: 'Yes', sportsbook: 'No', parentId: 0
    },
    {
        id: 1112892, name: 'Kenny.os', partnerId: 'Fred Dan', level: 'Level 3', currency: 'USD', email: 'corporate@js.com', status: 'ACTIVE',
        partnerLabelId: 'Peter Pan', statusAccount: 'inactive', license: 'Curacao', credit: 'No', creditLimit: 'N/A',
        address: 'United KingDom', postalCode: '10000', language: 'vn', phoneNumber: '0968868300', mobile: '0968868300',
        userName: 'nat.os', password: '1234qwer', questionnaireReceiptDate: new Date(), approvedDate: new Date(),
        country: 'uk',
        deposits: 'Yes', withdrawals: 'No', casino: 'Yes', sportsbook: 'No', parentId: 0
    },
    {
        id: 1112893, name: 'Ali.os', partnerId: 'Fred Dan', level: 'Level 2', currency: 'USD', email: 'corporate@js.com', status: 'INACTIVE',
        partnerLabelId: 'Conan Huynh', statusAccount: 'pending', license: 'Curacao', credit: 'Yes', creditLimit: 'N/A',
        address: 'United KingDom', postalCode: '10000', language: 'fr', phoneNumber: '0968868300', mobile: '0968868300',
        userName: 'nat.os', password: '1234qwer', questionnaireReceiptDate: new Date(), approvedDate: new Date(),
        country: 'us',
        deposits: 'Yes', withdrawals: 'No', casino: 'Yes', sportsbook: 'No', parentId: 0
    },
    {
        id: 1112894, name: 'Nat.os', partnerId: 'Fred Dan', level: 'Level 2', currency: 'VND', email: 'corporate@js.com', status: 'ACTIVE',
        partnerLabelId: 'Conan Huynh', statusAccount: 'verified', license: 'Curacao', credit: 'No', creditLimit: 'N/A',
        address: 'United KingDom', postalCode: '10000', language: 'vn', phoneNumber: '0968868300', mobile: '0968868300',
        userName: 'nat.os', password: '1234qwer', questionnaireReceiptDate: new Date(), approvedDate: new Date(),
        country: 'vn',
        deposits: 'Yes', withdrawals: 'No', casino: 'Yes', sportsbook: 'No', parentId: 0
    }
];

let directors = [
    {
        id: 1112890, name: 'Kevin.os', dateOfBirth: new Date(), countryOfResidence: 'Malta', idType: 'passport', idNumber: '164 465 987',
        partnerLabelId: 'Peter Pan', passPort: true, nationalId: true, proofOfAddress: false, certificateOfIncumbency: false,
    },
    {
        id: 1112891, name: 'Rob.os', dateOfBirth: new Date(), countryOfResidence: 'Malta', idType: 'nationalID', idNumber: '165 465 987',
        partnerLabelId: 'Peter Pan', passPort: true, nationalID: false, proofOfAddress: false, certificateOfIncumbency: false,
    },
    {
        id: 1112892, name: 'Kenny.os', dateOfBirth: new Date(), countryOfResidence: 'Malta', idType: 'proofOfAddress', idNumber: '166 465 987',
        partnerLabelId: 'Peter Pan', passPort: true, nationalID: false, proofOfAddress: false, certificateOfIncumbency: false,
    },
    {
        id: 1112893, name: 'Ali.os', dateOfBirth: new Date(), countryOfResidence: 'Malta', idType: 'certificateOfIncumbency', idNumber: '167 465 987',
        partnerLabelId: 'Conan Huynh', passPort: true, nationalID: false, proofOfAddress: false, certificateOfIncumbency: false,
    },
    {
        id: 1112894, name: 'nat.os', dateOfBirth: new Date(), countryOfResidence: 'Malta', idType: 'passport', idNumber: '164 465 987',
        partnerLabelId: 'Conan Huynh', passPort: true, nationalID: false, proofOfAddress: false, certificateOfIncumbency: false,
    },

];

export const getAccountListingService = async (account: any) => {

    const getAccounts = (type: String) => {
        return new Promise(function (resolve, reject) {
            setTimeout(() => {
                let result = accounts;
                switch (type) {
                    case 'id': {
                        result = accounts.filter(e => e.id.toString().includes(account.value));
                        break;
                    }
                    case 'name': {
                        result = accounts.filter(e => e.name?.toUpperCase().includes(account.value?.toUpperCase()));
                        break;
                    }
                    case 'partnerId':
                        result = accounts.filter(e => e.partnerLabelId.includes(account.value));
                        break;
                    default: {
                        break;
                    }
                }
                return resolve(result);
            }, 1000);
        });
    };

    return await getAccounts(account.type);
};

export const getAccountDetailService = async (accountId: any) => {
    return accounts.filter(e => e.id == accountId)[0];
};

export const updateAccountService = async (account: any) => {
    let acc = accounts.filter((e: any) => e.id != account.id);
    if ( acc.length === accounts.length && account.level === 'Level 3') {
        acc = acc.map((e: any) => {
            if (e.id === account.parentId) {
                e = {...e , 'parentId': account.id};
            }
            return e;
        });
    }
    acc.push(account);
    accounts = acc;
    return 'ok';
};

export const getDirectorsService = async (partnerLabelId: any) => {
    return directors.filter(e => e.partnerLabelId == partnerLabelId);
};

export const addDirectorService = async (director: any) => {
    directors.push(director);
    return 'success';
};

export const updateDirectorService = async (director: any) => {
    const direc = directors.filter((e: any) => e.id != director.id);
    direc.push(director);
    directors = direc;
    return 'success';
};

export const deleteDirectorService = async (directorId: number) => {
    const direc = directors.filter((e: any) => e.id != directorId);
    directors = direc;
    return 'success';
};






