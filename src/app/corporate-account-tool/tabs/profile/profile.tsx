import React, {lazy, useEffect, useState} from 'react';
import './profile.scss';
import {useDispatch, useSelector} from 'react-redux';
import Select from 'react-select';
import { Button } from 'react-bootstrap';
import {getAccountDetail, saveAccount} from '../../../../store/slice/account.slice';

const ModalYesNo = lazy(() => import('../../../shared/confirm-popup/confirm-popup'));

function Profile() {
    const {accountDetail, isUpdateAccount} = useSelector((state: any) => state.account);
    const [isViewMode, setViewMode] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [account, setAccount] = useState(accountDetail);
    const [statusAccount, setStatusAccount] = useState<any>();
    const [currency, setCurrency] = useState<any>();
    const [country, setCountry] = useState<any>();
    const [language, setLanguage] = useState<any>();
    const dispatch = useDispatch();

    const listStatus = [
        { name: 'statusAccount', value: 'pending', label: 'Pending Verification' },
        { name: 'statusAccount', value: 'verified', label: 'Verified' },
        { name: 'statusAccount', value: 'inactive', label: 'Inactive' },
        { name: 'statusAccount', value: 'closed',label: 'Closed' }
    ];

    const currencies = [
        { name: 'currency', value: 'GBP', label: 'GPG' },
        { name: 'currency', value: 'VND', label: 'VND' },
        { name: 'currency', value: 'USD', label: 'USD' },
    ];

    const countries = [
        { name: 'country', value: 'uk', label: 'United Kingdom' },
        { name: 'country', value: 'vn', label: 'Viet Nam' },
        { name: 'country', value: 'us', label: 'United states' },
    ];

    const languages = [
        { name: 'language', value: 'en', label: 'English' },
        { name: 'language', value: 'vn', label: 'Viet Nam' },
        { name: 'language', value: 'fr', label: 'France' },
    ];

    const onEdit = () => {
        setViewMode(false);
        if (!isViewMode) {
            setShowModal(true);
        }
    };

    const closeModal = () => {
        setShowModal(false);
        setViewMode(true);
    }

    const updateAccount = () => {
        setShowModal(false);
        setViewMode(true);
        closeModal();
        dispatch(saveAccount(account));
    }

    const onChangeDropdown = (e: any) => {
        debugger
        setAccount({...account, [e.name]: e.value});
    }

    useEffect(() => {
        setStatusAccount(listStatus.find((e: any) => e.value === account.statusAccount));
        setCurrency(currencies.find((e: any) => e.value === account.currency));
        setCountry(countries.find((e: any) => e.value === account.country));
        setLanguage(languages.find((e: any) => e.value === account.language));
    }, [account])

    useEffect(() => {
        if (isUpdateAccount) {
            dispatch(getAccountDetail(accountDetail.id));
        }
    }, [isUpdateAccount])

    function handleInputChange(e: any) {
        setAccount({...account, [e.target.name]: e.target.value});
    }

    return (
        <>
            <div className='profile'>
                {showModal && (
                    <ModalYesNo
                        message={`Are you sure want to update Corporate Account ID <b> ${accountDetail?.id}</b>?`}
                        onNo={closeModal}
                        onYes={updateAccount}
                    />
                )}
                <table>
                    <thead>
                        <tr>
                            <th colSpan={3}>CORPORATE PROFILE {accountDetail?.id}</th>
                            <th>
                                <Button onClick={onEdit} className='edit-action'>{isViewMode? 'Edit' : 'Save'}</Button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Account Name</td>
                            <td><input type='text' onChange={handleInputChange} disabled={isViewMode} defaultValue={accountDetail?.name} name='name' placeholder='Account Name'/></td>
                            <td>Account ID</td>
                            <td><input type='text' onChange={handleInputChange} disabled={true} defaultValue={accountDetail?.id} name='id' placeholder='Account ID'/></td>
                        </tr>
                        <tr>
                            <td>Partner Label ID</td>
                            <td><input type='text' onChange={handleInputChange} name='partnerLabelId' disabled={isViewMode} defaultValue={accountDetail?.partnerLabelId}/></td>
                            <td>Level</td>
                            <td><input type='text' onChange={handleInputChange} name='level' disabled={isViewMode} defaultValue={accountDetail?.level}/></td>
                        </tr>
                        <tr>
                            <td>Status</td>
                            <td><Select onChange={onChangeDropdown} isDisabled={isViewMode} options={listStatus} value={statusAccount} /></td>
                            <td>Language</td>
                            <td><Select onChange={onChangeDropdown} isDisabled={isViewMode} options={languages} value={language} /></td>
                        </tr>
                        <tr>
                            <td>License</td>
                            <td><input type='text' onChange={handleInputChange} name='license' disabled={isViewMode} defaultValue={accountDetail?.license}/></td>
                            <td>Email Address</td>
                            <td><input type='text' onChange={handleInputChange} name='email' disabled={isViewMode} defaultValue={accountDetail?.email}/></td>
                        </tr>
                        <tr>
                            <td>Currency</td>
                            <td><Select onChange={onChangeDropdown} isDisabled={isViewMode} options={currencies} value={currency} /></td>
                            <td>Phone</td>
                            <td><input type='text' onChange={handleInputChange} name='phoneNumber' disabled={isViewMode} defaultValue={accountDetail?.phoneNumber}/></td>
                        </tr>
                        <tr>
                            <td>Credit Account</td>
                            <td><input type='text' onChange={handleInputChange} name='creditAccount' disabled={isViewMode} defaultValue={accountDetail?.credit}/></td>
                            <td>Mobile</td>
                            <td><input type='text' onChange={handleInputChange} name='mobile' disabled={isViewMode} defaultValue={accountDetail?.mobile}/></td>
                        </tr>
                        <tr>
                            <td>Credit Limit</td>
                            <td><input type='text' onChange={handleInputChange} name='creditLimit' disabled={isViewMode} defaultValue={accountDetail?.creditLimit}/></td>
                            <td>username</td>
                            <td><input type='text' onChange={handleInputChange} name='username' disabled={isViewMode} defaultValue={accountDetail?.userName}/></td>
                        </tr>
                        <tr>
                            <td>Address</td>
                            <td><input type='text' onChange={handleInputChange} name='address' disabled={isViewMode} defaultValue={accountDetail?.address}/></td>
                            <td>Password</td>
                            <td><input type='password' onChange={handleInputChange} name='password' disabled={isViewMode} defaultValue={accountDetail?.password}/></td>
                        </tr>
                        <tr>
                            <td>City</td>
                            <td><input type='text' onChange={handleInputChange} disabled={isViewMode} defaultValue={accountDetail?.city}/></td>
                            <td/>
                            <td/>
                        </tr>
                        <tr>
                            <td>Country</td>
                            <td><Select onChange={onChangeDropdown} isDisabled={isViewMode} options={countries} value={country} /></td>
                            <td>Questionnaire Receipt Date</td>
                            <td><input type='text' onChange={handleInputChange} name='questionnaireReceiptDate' disabled={isViewMode} defaultValue={accountDetail?.questionnaireReceiptDate}/></td>
                        </tr>
                        <tr>
                            <td>Postal Code</td>
                            <td><input type='text' onChange={handleInputChange} name='postalCode' disabled={isViewMode} defaultValue={accountDetail?.postalCode}/></td>
                            <td>Account Approval Date</td>
                            <td><input type='text' onChange={handleInputChange} name='approvedDate' disabled={isViewMode} defaultValue={accountDetail?.approvedDate}/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Profile;
