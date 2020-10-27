import React, {lazy, useEffect, useState} from 'react';
import './add-edit-profile.scss';
import {useDispatch, useSelector} from 'react-redux';
import Select from 'react-select';
import * as Yup from 'yup';

import {getAccountDetail, saveAccount} from '../../../../../store/slice/account.slice';
import DatePicker from 'react-datepicker';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCalendarAlt} from '@fortawesome/free-solid-svg-icons';
import {Button, Modal} from 'react-bootstrap';
import {Form, Formik} from 'formik';

function AddEditProfile(props: any) {
    const {closeAddEditProfilePopup, accountDetail} = props;
    const {isUpdateAccount} = useSelector((state: any) => state.account);
    const [isViewMode, setViewMode] = useState(false);
    const [account, setAccount] = useState(accountDetail);
    const [statusAccount, setStatusAccount] = useState<any>();
    const [currency, setCurrency] = useState<any>();
    const [country, setCountry] = useState<any>();
    const [language, setLanguage] = useState<any>();
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

    // const updateAccount = () => {
    //     setViewMode(true);
    //     dispatch(saveAccount(account));
    // };

    useEffect(() => {
        if (isUpdateAccount) {
            handleClose();
        }
    }, [isUpdateAccount]);

    const onChangeDropdown = (e: any) => {
        setAccount({...account, [e.name]: e.value});
    };

    useEffect(() => {
        if (account) {
            setStatusAccount(listStatus.find((e: any) => e.value === account.statusAccount));
            setCurrency(currencies.find((e: any) => e.value === account.currency));
            setCountry(countries.find((e: any) => e.value === account.country));
            setLanguage(languages.find((e: any) => e.value === account.language));
        } else {

        }

        console.log(JSON.stringify(account));
    }, [account]);

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

    const onQuestionnaireReceiptDateChange = (value: any) => {
        setAccount({...account, 'questionnaireReceiptDate': value});
    };

    const updateAccount = (values: any) => {
        console.log('fasfas', values);
    };

    return (
        <>
            <Formik
                initialValues={{name: ''}}
                onSubmit={async values => updateAccount(values)}
                validationSchema={Yup.object().shape({
                    name: Yup.string().required(' ')
                })}
            >
                {FormikProps => {
                    const {values, touched, errors, dirty, isSubmitting, handleChange, handleBlur, handleSubmit, handleReset} = FormikProps;
                    return (
                        <Form onSubmit={handleSubmit}>
                            <Modal show={true} onHide={handleClose} keyboard={false} dialogClassName='modal-dialog modal-lg'>
                                <Modal.Header closeButton>
                                    <Modal.Title className='title'>CORPORATE PROFILE</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <div className='profile-detail'>
                                        <table>
                                            <tbody>
                                            <tr>
                                                <td className='required-field'>Account Name</td>
                                                <td>
                                                    {/*<input  onChange={handleInputChange} disabled={isViewMode} defaultValue={accountDetail?.name} name='name'/>*/}
                                                    <input
                                                        id='name'
                                                        type='text'
                                                        value={accountDetail?.name}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        className={errors.name && touched.name ? 'text-input error' : 'text-input'}
                                                        disabled={isViewMode}
                                                        name='name'
                                                    />

                                                </td>
                                                <td className='required-field'>Account ID</td>
                                                <td><input type='number' onChange={handleInputChange} disabled={isViewMode} defaultValue={accountDetail?.id} name='id'/></td>
                                            </tr>
                                            <tr>
                                                <td className='required-field'>Partner Label ID</td>
                                                <td><input type='text' onChange={handleInputChange} name='partnerLabelId' disabled={isViewMode} defaultValue={accountDetail?.partnerLabelId}/></td>
                                                <td className='required-field'>Level</td>
                                                <td><input type='text' onChange={handleInputChange} name='level' disabled={isViewMode} defaultValue={accountDetail?.level}/></td>
                                            </tr>
                                            <tr>
                                                <td className='required-field'>Status</td>
                                                <td><Select onChange={onChangeDropdown} isDisabled={isViewMode} options={listStatus} value={statusAccount}/></td>
                                                <td className='required-field'>Language</td>
                                                <td><Select onChange={onChangeDropdown} isDisabled={isViewMode} options={languages} value={language}/></td>
                                            </tr>
                                            <tr>
                                                <td>License</td>
                                                <td><input type='text' onChange={handleInputChange} name='license' disabled={isViewMode} defaultValue={accountDetail?.license}/></td>
                                                <td className='required-field'>Email Address</td>
                                                <td><input type='text' onChange={handleInputChange} name='email' disabled={isViewMode} defaultValue={accountDetail?.email}/></td>
                                            </tr>
                                            <tr>
                                                <td className='required-field'>Currency</td>
                                                <td><Select onChange={onChangeDropdown} isDisabled={isViewMode} options={currencies} value={currency}/></td>
                                                <td>Phone</td>
                                                <td><input type='text' onChange={handleInputChange} name='phoneNumber' disabled={isViewMode} defaultValue={accountDetail?.phoneNumber}/></td>
                                            </tr>
                                            <tr>
                                                <td className='required-field'>Credit Account</td>
                                                <td><input type='text' onChange={handleInputChange} name='credit' disabled={isViewMode} defaultValue={accountDetail?.credit}/></td>
                                                <td>Mobile</td>
                                                <td><input type='text' onChange={handleInputChange} name='mobile' disabled={isViewMode} defaultValue={accountDetail?.mobile}/></td>
                                            </tr>
                                            <tr>
                                                <td>Credit Limit</td>
                                                <td><input type='text' onChange={handleInputChange} name='creditLimit' disabled={isViewMode} defaultValue={accountDetail?.creditLimit}/></td>
                                                <td>username</td>
                                                <td><input type='text' onChange={handleInputChange} name='userName' disabled={isViewMode} defaultValue={accountDetail?.userName}/></td>
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
                                                <td className='required-field'>Country</td>
                                                <td><Select onChange={onChangeDropdown} isDisabled={isViewMode} options={countries} value={country}/></td>
                                                <td className='required-field'>Questionnaire Receipt Date</td>
                                                <td>
                                                    <label>
                                                        <DatePicker onChange={onQuestionnaireReceiptDateChange} selected={account?.questionnaireReceiptDate} disabled={isViewMode}
                                                                    name='questionnaireReceiptDate'/>
                                                        <FontAwesomeIcon icon={faCalendarAlt}/>
                                                    </label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Postal Code</td>
                                                <td><input type='text' onChange={handleInputChange} name='postalCode' disabled={isViewMode} defaultValue={accountDetail?.postalCode}/></td>
                                                <td>Account Approval Date</td>
                                                <td>
                                                    <label>
                                                        <DatePicker onChange={onApprovedDateChange} selected={account?.approvedDate} disabled={isViewMode} name='approvedDate'/> <FontAwesomeIcon
                                                        icon={faCalendarAlt}/>
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
                                    <Button type='submit' variant='success' disabled={isSubmitting}>
                                        Save
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                            {/*{JSON.stringify(props)}*/}
                        </Form>
                    );
                }}
            </Formik>

        </>
    );
}

export default AddEditProfile;
