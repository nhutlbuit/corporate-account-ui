import React, {useEffect, useState} from 'react';
import './add-edit-profile.scss';
import {useDispatch, useSelector} from 'react-redux';
import * as Yup from 'yup';

import {getAccountDetail, saveAccount} from '../../../../../store/slice/account.slice';
import DatePicker from 'react-datepicker';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCalendarAlt} from '@fortawesome/free-solid-svg-icons';
import {Button, Modal} from 'react-bootstrap';
import {FastField, Formik} from 'formik';
import SelectField from '../../../../shared/SelectField';
import InputField from '../../../../shared/InputField';

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
            credit: accountDetail?.level ?? ''
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
            credit: Yup.string().required()
        });
    };

    const DatePickerField = (propsDatePicker: any) => {
        const { name, value, onChange, className } = propsDatePicker;
        return (
            <DatePicker
                selected={(value && new Date(value)) || null}
                onChange={val => {
                    onChange(name, val);
                }}
                className={className}
            />
        );
    };

    return (
        <Formik initialValues={initialValues()} onSubmit={values => updateAccount(values)} validationSchema={validationSchema()}>
            {(props) => {
                const {
                    values,
                    handleSubmit,
                    setFieldValue
                } = props;
                return (
                    <form onSubmit={handleSubmit}>
                        <Modal show={true} onHide={handleClose} keyboard={false} dialogClassName='modal-dialog modal-xl'>
                            <Modal.Header closeButton>
                                <Modal.Title className='title'> {accountDetail ? 'EDIT' : 'ADD NEW'} CORPORATE PROFILE</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className='profile-detail'>
                                    <table>
                                        <tbody>
                                        <tr>
                                            <td className='required-field'>Account Name</td>
                                            <td><FastField name='name' type='text' component={InputField}/></td>
                                            <td className='required-field'>Account ID</td>
                                            <td><FastField name='id' type='number' component={InputField} disabled={accountDetail}/></td>
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
                                            <td><input type='text' onChange={handleInputChange} name='license' defaultValue={accountDetail?.license}/></td>
                                            <td className='required-field'>Email Address</td>
                                            <td><FastField name='email' type='text' component={InputField}/></td>
                                        </tr>
                                        <tr>
                                            <td className='required-field'>Currency</td>
                                            <td><FastField name='currency' component={SelectField} options={currencies}/></td>
                                            <td>Phone</td>
                                            <td><input type='text' onChange={handleInputChange} name='phoneNumber' defaultValue={accountDetail?.phoneNumber}/></td>
                                        </tr>
                                        <tr>
                                            <td className='required-field'>Credit Account</td>
                                            <td><FastField name='credit' type='text' component={InputField}/></td>
                                            <td>Mobile</td>
                                            <td><input type='text' onChange={handleInputChange} name='mobile' defaultValue={accountDetail?.mobile}/></td>
                                        </tr>
                                        <tr>
                                            <td>Credit Limit</td>
                                            <td><input type='text' onChange={handleInputChange} name='creditLimit' defaultValue={accountDetail?.creditLimit}/></td>
                                            <td>username</td>
                                            <td><input type='text' onChange={handleInputChange} name='userName' defaultValue={accountDetail?.userName}/></td>
                                        </tr>
                                        <tr>
                                            <td>Address</td>
                                            <td><input type='text' onChange={handleInputChange} name='address' defaultValue={accountDetail?.address}/></td>
                                            <td>Password</td>
                                            <td><input type='password' onChange={handleInputChange} name='password' defaultValue={accountDetail?.password}/></td>
                                        </tr>
                                        <tr>
                                            <td>City</td>
                                            <td><input type='text' onChange={handleInputChange} defaultValue={accountDetail?.city}/></td>
                                            <td/>
                                            <td/>
                                        </tr>
                                        <tr>
                                            <td className='required-field'>Country</td>
                                            <td><FastField name='country' component={SelectField} options={countries}/></td>
                                            <td className='required-field'>Questionnaire Receipt Date</td>
                                            <td>
                                                <label className='calendar-container'>
                                                    <DatePickerField
                                                        name='questionnaireReceiptDate'
                                                        onChange={setFieldValue}
                                                        value={values.questionnaireReceiptDate}
                                                        className={!values.questionnaireReceiptDate ? 'text-input error' : 'text-input'}
                                                        />
                                                    <div className='calendar-alt'><FontAwesomeIcon icon={faCalendarAlt}/></div>
                                                </label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Postal Code</td>
                                            <td><input type='text' onChange={handleInputChange} name='postalCode' defaultValue={accountDetail?.postalCode}/></td>
                                            <td>Account Approval Date</td>
                                            <td>
                                                <label className='calendar-container'>
                                                    <DatePicker onChange={onApprovedDateChange} selected={account?.approvedDate} name='approvedDate'/>
                                                    <div className='calendar-alt'><FontAwesomeIcon icon={faCalendarAlt}/></div>
                                                </label>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
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
                            {/*{JSON.stringify(props)}*/}
                        </Modal>

                    </form>
                );
            }}
        </Formik>
    );
}

export default AddEditProfile;
