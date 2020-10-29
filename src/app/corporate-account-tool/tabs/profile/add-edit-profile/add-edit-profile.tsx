import React, {useEffect, useState} from 'react';
import './add-edit-profile.scss';
import {useDispatch, useSelector} from 'react-redux';
import * as Yup from 'yup';

import {getAccountDetail, saveAccount} from '../../../../../store/slice/account.slice';
import DatePicker from 'react-datepicker';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCalendarAlt} from '@fortawesome/free-solid-svg-icons';
import {Button, Modal, FormCheck} from 'react-bootstrap';
import {FastField, Field, Formik} from 'formik';
import SelectField from '../../../../shared/SelectField';
import InputField from '../../../../shared/InputField';
import DatePickerField from '../../../../shared/DatePickerField';
import ToggleButton from '../../../../shared/toggle-button/toggle-button';

function AddEditProfile(propsAddEditProfile: any) {
    const {closeAddEditProfilePopup, accountDetail} = propsAddEditProfile;
    const {isUpdateAccount} = useSelector((state: any) => state.account);
    const [account, setAccount] = useState(accountDetail);
    const dispatch = useDispatch();

    const listStatus = [
        {name: 'statusAccount', value: 'pending', label: 'Pending Verification'},
        {name: 'statusAccount', value: 'verified', label: 'Verified'},
        {name: 'statusAccount', value: 'inactive', label: 'Inactive'},
        {name: 'statusAccount', value: 'closed', label: 'Closed'}
    ];

    const currencies = [
        {name: 'currency', value: 'GBP', label: 'GPG'},
        {name: 'currency', value: 'VND', label: 'VND'},
        {name: 'currency', value: 'USD', label: 'USD'},
    ];

    const countries = [
        {name: 'country', value: 'uk', label: 'United Kingdom'},
        {name: 'country', value: 'vn', label: 'Viet Nam'},
        {name: 'country', value: 'us', label: 'United states'},
    ];

    const languages = [
        {name: 'language', value: 'en', label: 'English'},
        {name: 'language', value: 'vn', label: 'Viet Nam'},
        {name: 'language', value: 'fr', label: 'France'},
    ];

    useEffect(() => {
        if (isUpdateAccount) {
            handleClose();
        }
    }, [isUpdateAccount]);

    useEffect(() => {
        if (isUpdateAccount && accountDetail) {
            dispatch(getAccountDetail(accountDetail.id));
        }
    }, [isUpdateAccount]);

    function handleInputChange(e: any) {
        setAccount({...account, [e.target.name]: e.target.value});
    }

    const handleClose = () => {
        closeAddEditProfilePopup(false);
    };

    const onApprovedDateChange = (value: any) => {
        setAccount({...account, 'approvedDate': value});
    };

    const updateAccount = (values: any) => {
        dispatch(saveAccount({...account, ...values}));
    };

    const initialValues = () => {
        return {
            name: accountDetail?.name ?? '',
            id: accountDetail?.id ?? undefined,
            email: accountDetail?.email ?? '',
            questionnaireReceiptDate: accountDetail?.questionnaireReceiptDate ?? new Date(),
            statusAccount: accountDetail?.statusAccount ?? '',
            country: accountDetail?.country ?? '',
            currency: accountDetail?.currency ?? '',
            language: accountDetail?.language ?? '',
            partnerLabelId: accountDetail?.partnerLabelId ?? '',
            level: accountDetail?.level ?? '',
            creditLimit: accountDetail?.creditLimit ?? ''
        };
    };

    const validationSchema = () => {
        return Yup.object().shape({
            name: Yup.string().required(),
            id: Yup.number().positive().integer().required(),
            email: Yup.string().email().required(),
            questionnaireReceiptDate: Yup.date().required(),
            statusAccount: Yup.string().required(),
            country: Yup.string().required(),
            currency: Yup.string().required(),
            language: Yup.string().required(),
            partnerLabelId: Yup.string().required(),
            level: Yup.string().required(),
            ...(account?.credit === 'Yes' ? {creditLimit: Yup.string().required()} : {creditLimit: Yup.string()}),
        });
    };

    const onChangeCredit = (e: any) => {
        setAccount({...account, [e.target.name]: e.target.checked ? 'Yes' : 'No'});
    };

    const profileInfo = (setFieldValue: any) => {
        return (
            <div className='profile-info'>
                <table>
                    <tbody>
                    <tr>
                        <td className='required-field'>Account Name</td>
                        <td><FastField name='name' type='text' component={InputField}/></td>
                        <td className='required-field'>Account ID</td>
                        <td><FastField name='id' type='number' component={InputField} disabled={!!accountDetail}/></td>
                    </tr>
                    <tr>
                        <td className='required-field'>Partner Label ID</td>
                        <td><FastField name='partnerLabelId' type='text' component={InputField}/></td>
                        <td className='required-field'>Level</td>
                        <td><FastField name='level' type='text' component={InputField}/></td>
                    </tr>
                    <tr>
                        <td className='required-field'>Status</td>
                        <td><FastField name='statusAccount' component={SelectField} options={listStatus}/></td>
                        <td className='required-field'>Language</td>
                        <td><FastField name='language' component={SelectField} options={languages}/></td>
                    </tr>
                    <tr>
                        <td>License</td>
                        <td><input type='text' className='custom-input' onChange={handleInputChange} name='license' defaultValue={accountDetail?.license}/></td>
                        <td className='required-field'>Email Address</td>
                        <td><FastField name='email' type='text' component={InputField}/></td>
                    </tr>
                    <tr>
                        <td className='required-field'>Currency</td>
                        <td><FastField name='currency' component={SelectField} options={currencies}/></td>
                        <td>Phone</td>
                        <td><input type='text' className='custom-input' onChange={handleInputChange} name='phoneNumber' defaultValue={accountDetail?.phoneNumber}/></td>
                    </tr>
                    <tr>
                        <td className='required-field'>Credit Account</td>
                        <td>
                            <ToggleButton name='credit' small={true} onClick={onChangeCredit} defaultChecked={accountDetail?.credit === 'Yes'}/>
                        </td>
                        <td>Mobile</td>
                        <td><input type='text' className='custom-input' onChange={handleInputChange} name='mobile' defaultValue={accountDetail?.mobile}/></td>
                    </tr>
                    <tr>
                        <td>Credit Limit</td>
                        <td><Field name='creditLimit' type='text' component={InputField} disabled={account?.credit !== 'Yes'}/></td>
                        <td>username</td>
                        <td><input type='text' className='custom-input' onChange={handleInputChange} name='userName' defaultValue={accountDetail?.userName}/></td>
                    </tr>
                    <tr>
                        <td>Address</td>
                        <td><input type='text' className='custom-input' onChange={handleInputChange} name='address' defaultValue={accountDetail?.address}/></td>
                        <td>Password</td>
                        <td><input type='password' className='custom-input' onChange={handleInputChange} name='password' defaultValue={accountDetail?.password}/></td>
                    </tr>
                    <tr>
                        <td>City</td>
                        <td><input type='text' className='custom-input' onChange={handleInputChange} defaultValue={accountDetail?.city}/></td>
                        <td/>
                        <td/>
                    </tr>
                    <tr>
                        <td className='required-field'>Country</td>
                        <td><FastField name='country' component={SelectField} options={countries}/></td>
                        <td className='required-field'>Questionnaire Receipt Date</td>
                        <td>
                            <label className='calendar-container'>
                                <FastField name='questionnaireReceiptDate' component={DatePickerField} onChange={setFieldValue}/>
                                <div className='calendar-alt'><FontAwesomeIcon icon={faCalendarAlt} size='lg'/></div>
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>Postal Code</td>
                        <td><input type='text' className='custom-input' onChange={handleInputChange} name='postalCode' defaultValue={accountDetail?.postalCode}/></td>
                        <td>Account Approval Date</td>
                        <td>
                            <label className='calendar-container'>
                                <DatePicker className='custom-input' onChange={onApprovedDateChange} selected={account?.approvedDate} name='approvedDate'/>
                                <div className='calendar-alt'><FontAwesomeIcon icon={faCalendarAlt} size='lg'/></div>
                            </label>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    };

    const productAccess = () => {
        return (
            <div className='product-access'>
                <table>
                    <thead>
                    <tr>
                        <th colSpan={4}> Product Access</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            <div className='inline'><FormCheck name='deposits' type='checkbox' defaultChecked={accountDetail?.deposits === 'Yes'}onClick={onChangeProductAccess}/> Deposits</div>
                        </td>
                        <td>
                            <div className='inline'><FormCheck name='withdrawals' type='checkbox' defaultChecked={accountDetail?.withdrawals === 'Yes'} onClick={onChangeProductAccess}/>
                            Withdrawals</div>
                        </td>
                        <td>
                            <div className='inline'><FormCheck name='casino' type='checkbox' defaultChecked={accountDetail?.casino === 'Yes'} onClick={onChangeProductAccess}/> Casino</div>
                        </td>
                        <td>
                            <div className='inline'><FormCheck name='sportsbook' type='checkbox' defaultChecked={accountDetail?.sportsbook === 'Yes'} onClick={onChangeProductAccess}/> Sportsbook</div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    };

    const onChangeProductAccess = (e: any) => {
        setAccount({...account, [e.target.name]: e.target.checked ? 'Yes' : 'No'});
    };

    return (
        <Formik initialValues={initialValues()} onSubmit={values => updateAccount(values)} validationSchema={validationSchema()}>
            {(props) => {
                const {handleSubmit, setFieldValue} = props;
                return (
                    <form onSubmit={handleSubmit}>
                        <Modal show={true} onHide={handleClose} keyboard={false} dialogClassName='modal-dialog modal-xl'>
                            <Modal.Header closeButton>
                                <Modal.Title className='title'> {accountDetail ? 'EDIT' : 'ADD NEW'} CORPORATE PROFILE</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className='profile-detail'>
                                    {profileInfo(setFieldValue)}
                                    {productAccess()}
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant='primary' onClick={handleClose}>
                                    Close
                                </Button>
                                <Button type='submit' variant='success' disabled={!props.isValid} onClick={props.handleSubmit}>
                                    Save
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </form>
                );
            }}
        </Formik>
    );
}

export default AddEditProfile;
