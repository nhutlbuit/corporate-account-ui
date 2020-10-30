import React, {useEffect, useState} from 'react';
import './add-edit-profile.scss';
import {useDispatch, useSelector} from 'react-redux';
import * as Yup from 'yup';
import {getAccountDetail, saveAccount} from '../../../../../store/slice/account.slice';
import {Button, FormCheck, Modal} from 'react-bootstrap';
import {FastField, Field, Formik} from 'formik';
import SelectField from '../../../../shared/SelectField';
import InputField from '../../../../shared/InputField';
import DatePickerField from '../../../../shared/DatePickerField';
import ToggleButton from '../../../../shared/toggle-button/toggle-button';
import {CONSTANT} from '../../../../../common/constants/CommonConst';

function AddEditProfile(propsAddEditProfile: any) {
    const {closeAddEditProfilePopup, accountDetail, isLevel3} = propsAddEditProfile;
    const {isUpdateAccount} = useSelector((state: any) => state.account);
    const [account, setAccount] = useState(accountDetail);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isUpdateAccount) {
            onClosePopup();
        }
    }, [isUpdateAccount]);

    useEffect(() => {
        if (isLevel3) {
            setAccount({...account, 'parentId': accountDetail.id});
        }
    }, []);

    useEffect(() => {
        if (isUpdateAccount && accountDetail) {
            dispatch(getAccountDetail(accountDetail.id));
        }
    }, [isUpdateAccount]);

    const onClosePopup = () => {
        closeAddEditProfilePopup(false);
    };

    const updateAccount = (values: any) => {
        dispatch(saveAccount({...account, ...values}));
    };

    const generateAccountId = (n: number) => {
        return Math.floor(Math.random() * (9 * (Math.pow(10, n)))) + (Math.pow(10, n));
    }

    const initialValues = () => {
        return {
            name: accountDetail?.name ?? '',
            id: accountDetail?.id ?? generateAccountId(6),
            email: accountDetail?.email ?? '',
            questionnaireReceiptDate: accountDetail?.questionnaireReceiptDate ?? new Date(),
            statusAccount: accountDetail?.statusAccount ?? (isLevel3 ? 'verified' : 'pending'),
            country: accountDetail?.country ?? '',
            currency: accountDetail?.currency ?? '',
            language: accountDetail?.language ?? '',
            partnerLabelId: accountDetail?.partnerLabelId ?? '',
            level: accountDetail?.level ?? (isLevel3 ? 'Level 3' : 'Level 2'),
            creditLimit: accountDetail?.creditLimit ?? '',
            license: accountDetail?.license ?? '',
            mobile: accountDetail?.mobile ?? '',
            phoneNumber: accountDetail?.phoneNumber ?? '',
            userName: accountDetail?.userName ?? '',
            address: accountDetail?.address ?? '',
            password: accountDetail?.password ?? '',
            city: accountDetail?.city ?? '',
            postalCode: accountDetail?.postalCode ?? '',
            approvedDate: accountDetail?.approvedDate ?? null,
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

    const profileInfo = (setFieldValue: any, values: any) => {
        return (
            <div className='profile-info'>
                <table>
                    <tbody>
                        <tr>
                            <td className='required-field'>
                                Account Name
                            </td>
                            <td>
                                <FastField name='name' component={InputField}/>
                            </td>
                            <td className='required-field'>
                                Account ID
                            </td>
                            <td>
                                <FastField name='id' type='number' component={InputField} disabled/>
                            </td>
                        </tr>
                        <tr>
                            <td className='required-field'>
                                Partner Label ID
                            </td>
                            <td>
                                <FastField name='partnerLabelId' component={InputField}/>
                            </td>
                            <td className='required-field'>
                                Level
                            </td>
                            <td>
                                <FastField name='level' component={InputField} disabled={!accountDetail || isLevel3}/>
                            </td>
                        </tr>
                        <tr>
                            <td className='required-field'>
                                Status
                            </td>
                            <td>
                                <Field name='statusAccount' component={SelectField} options={CONSTANT.ACCOUNT_CREATION.STATUS}/>
                            </td>
                            <td className='required-field'>
                                Language
                            </td>
                            <td>
                                <FastField name='language' component={SelectField} options={CONSTANT.ACCOUNT_CREATION.LANGUAGES}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                License
                            </td>
                            <td>
                                <FastField name='license' component={InputField}/>
                            </td>
                            <td className='required-field'>
                                Email Address
                            </td>
                            <td>
                                <FastField name='email' component={InputField}/>
                            </td>
                        </tr>
                        <tr>
                            <td className='required-field'>
                                Currency
                            </td>
                            <td>
                                <FastField name='currency' component={SelectField} options={CONSTANT.ACCOUNT_CREATION.CURRENCIES}/>
                            </td>
                            <td>
                                Phone
                            </td>
                            <td>
                                <FastField name='phoneNumber' component={InputField}/>
                            </td>
                        </tr>
                        <tr>
                            <td className='required-field'>Credit Account</td>
                            <td>
                                <ToggleButton name='credit' small={true} onClick={onChangeCredit} defaultChecked={account?.credit === 'Yes'}/>
                            </td>
                            <td>
                                Mobile
                            </td>
                            <td>
                                <FastField name='mobile' component={InputField}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Credit Limit
                            </td>
                            <td>
                                <Field name='creditLimit' component={InputField} disabled={account?.credit !== 'Yes'}/>
                            </td>
                            <td>
                                username
                            </td>
                            <td>
                                <Field name='userName' component={InputField} disabled={!accountDetail || values?.statusAccount !== 'verified'}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Address
                            </td>
                            <td>
                                <FastField name='address' component={InputField}/>
                            </td>
                            <td>
                                Password
                            </td>
                            <td>
                                <FastField name='password' type='password' component={InputField} disabled={!accountDetail}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                City
                            </td>
                            <td>
                                <Field name='city' component={InputField}/>
                            </td>
                            <td/>
                            <td/>
                        </tr>
                        <tr>
                            <td className='required-field'>
                                Country
                            </td>
                            <td>
                                <FastField name='country' component={SelectField} options={CONSTANT.ACCOUNT_CREATION.COUNTRIES}/>
                            </td>
                            <td className='required-field'>
                                Questionnaire Receipt Date
                            </td>
                            <td>
                                <FastField name='questionnaireReceiptDate' component={DatePickerField} onChange={setFieldValue}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Postal Code
                            </td>
                            <td>
                                <FastField name='postalCode' component={InputField}/>
                            </td>
                            <td>
                                Account Approval Date
                            </td>
                            <td>
                                <FastField name='approvedDate' component={DatePickerField} onChange={setFieldValue}/>
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
                                <div className='inline'>
                                    <FormCheck name='deposits' type='checkbox' defaultChecked={!accountDetail || accountDetail?.deposits === 'Yes'} onClick={onChangeProductAccess}/>
                                    Deposits
                                </div>
                            </td>
                            <td>
                                <div className='inline'>
                                    <FormCheck name='withdrawals' type='checkbox' defaultChecked={!accountDetail || accountDetail?.withdrawals === 'Yes'} onClick={onChangeProductAccess}/>
                                    Withdrawals
                                </div>
                            </td>
                            <td>
                                <div className='inline'>
                                    <FormCheck name='casino' type='checkbox' defaultChecked={!accountDetail || accountDetail?.casino === 'Yes'} onClick={onChangeProductAccess}/>
                                    Casino
                                </div>
                            </td>
                            <td>
                                <div className='inline'>
                                    <FormCheck name='sportsbook' type='checkbox' defaultChecked={!accountDetail || accountDetail?.sportsbook === 'Yes'} onClick={onChangeProductAccess}/>
                                    Sportsbook
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    };

    const onChangeCredit = (e: any) => {
        setAccount({...account, [e.target.name]: e.target.checked ? 'Yes' : 'No'});
    };

    const onChangeProductAccess = (e: any) => {
        setAccount({...account, [e.target.name]: e.target.checked ? 'Yes' : 'No'});
    };

    return (
        <Formik initialValues={initialValues()} onSubmit={values => updateAccount(values)}
                validationSchema={validationSchema()}>
            {(props) => {
                const {handleSubmit, setFieldValue, values} = props;
                return (
                    <form onSubmit={handleSubmit}>
                        <Modal show={true} onHide={onClosePopup} keyboard={false} dialogClassName='modal-dialog modal-xl'>
                            <Modal.Header closeButton>
                                <Modal.Title className='title'>
                                    {accountDetail ? 'EDIT' : 'ADD NEW'} CORPORATE PROFILE
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className='profile-detail'>
                                    {profileInfo(setFieldValue, values)}
                                    {productAccess()}
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant='primary' onClick={onClosePopup}>
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
