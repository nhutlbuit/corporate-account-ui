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

function AddEditProfile(propsAddEditProfile: any) {
    const {closeAddEditProfilePopup, accountDetail} = propsAddEditProfile;
    const {isUpdateAccount} = useSelector((state: any) => state.account);
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

    useEffect(() => {
        if (isUpdateAccount) {
            handleClose();
        }
    }, [isUpdateAccount]);

    useEffect(() => {
        if (account) {
            setStatusAccount(listStatus.find((e: any) => e.value === account.statusAccount));
            setCurrency(currencies.find((e: any) => e.value === account.currency));
            setCountry(countries.find((e: any) => e.value === account.country));
            setLanguage(languages.find((e: any) => e.value === account.language));
        }
       // console.log(JSON.stringify(account));
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

    const updateAccount = (values: any) => {
        const newState: any = {};
        Object.keys(values).forEach((e: any) => {
            newState[e] = values[e];
        });

        const accountSubmit = {...account, ...newState};
        dispatch(saveAccount(accountSubmit));
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
            id: Yup.number().required(),
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
                    touched,
                    errors,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    setFieldValue
                } = props;
                return (
                    <form onSubmit={handleSubmit}>
                        <Modal show={true} onHide={handleClose} keyboard={false} dialogClassName='modal-dialog modal-xl'>
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
                                                <input
                                                    id='name'
                                                    type='text'
                                                    value={values.name}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    className={errors.name && touched.name ? 'text-input error' : 'text-input'}
                                                />
                                            </td>
                                            <td className='required-field'>Account ID</td>
                                            <td>
                                                <input
                                                    id='id'
                                                    type='number'
                                                    value={values.id}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    className={errors.id && touched.id ? 'text-input error' : 'text-input'}
                                                    disabled={accountDetail}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='required-field'>Partner Label ID</td>
                                            <td>
                                                <input
                                                    id='partnerLabelId'
                                                    type='text'
                                                    value={values.partnerLabelId}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    className={errors.partnerLabelId && touched.partnerLabelId ? 'text-input error' : 'text-input'}
                                                />
                                            </td>
                                            <td className='required-field'>Level</td>
                                            <td>
                                                <input
                                                    id='level'
                                                    type='text'
                                                    value={values.level}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    className={errors.level && touched.level ? 'text-input error' : 'text-input'}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='required-field'>Status</td>
                                            <td>
                                                <FastField
                                                    name='statusAccount'
                                                    component={SelectField}
                                                    value={values?.statusAccount}
                                                    styles={{
                                                        control: (base: any) => ({
                                                            ...base,
                                                            borderColor: errors.statusAccount && touched.statusAccount ? 'red' : 'hsl(0,0%,80%)',
                                                        })
                                                    }}
                                                    options={listStatus}
                                                />
                                            </td>
                                            <td className='required-field'>Language</td>
                                            <td>
                                                <FastField
                                                    name='language'
                                                    component={SelectField}
                                                    value={values?.language}
                                                    styles={{
                                                        control: (base: any) => ({
                                                            ...base,
                                                            borderColor: errors.language && touched.language ? 'red' : 'hsl(0,0%,80%)',
                                                        })
                                                    }}
                                                    options={languages}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>License</td>
                                            <td><input type='text' onChange={handleInputChange} name='license' defaultValue={accountDetail?.license}/></td>
                                            <td className='required-field'>Email Address</td>
                                            <td>
                                                <input
                                                    id='email'
                                                    type='text'
                                                    value={values.email}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    className={errors.email && touched.email ? 'text-input error' : 'text-input'}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='required-field'>Currency</td>
                                            <td>
                                                <FastField
                                                    name='currency'
                                                    component={SelectField}
                                                    value={values?.currency}
                                                    styles={{
                                                        control: (base: any) => ({
                                                            ...base,
                                                            borderColor: errors.currency && touched.currency ? 'red' : 'hsl(0,0%,80%)',
                                                        })
                                                    }}
                                                    options={currencies}
                                                />
                                            </td>
                                            <td>Phone</td>
                                            <td><input type='text' onChange={handleInputChange} name='phoneNumber' defaultValue={accountDetail?.phoneNumber}/></td>
                                        </tr>
                                        <tr>
                                            <td className='required-field'>Credit Account</td>
                                            <td>
                                                <input
                                                    id='credit'
                                                    type='text'
                                                    value={values.credit}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    className={errors.credit && touched.credit ? 'text-input error' : 'text-input'}
                                                />
                                            </td>
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
                                            <td>
                                                <FastField
                                                    name='country'
                                                    component={SelectField}
                                                    value={values?.country}
                                                    styles={{
                                                        control: (base: any) => ({
                                                            ...base,
                                                            borderColor: errors.country && touched.country ? 'red' : 'hsl(0,0%,80%)',
                                                        })
                                                    }}
                                                    options={countries}
                                                />
                                            </td>
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
