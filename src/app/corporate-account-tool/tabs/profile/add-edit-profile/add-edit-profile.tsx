import React, { ReactElement, useEffect, useState} from 'react';
import './add-edit-profile.scss';
import {useDispatch, useSelector} from 'react-redux';
import * as Yup from 'yup';
import {getAccountDetail, saveAccount} from '../../../../../store/slice/account.slice';
import {Button, FormCheck, Modal, Spinner} from 'react-bootstrap';
import {FastField, Field, Formik, FormikValues} from 'formik';
import SelectField from '../../../../shared/SelectField';
import InputField from '../../../../shared/InputField';
import DatePickerField from '../../../../shared/DatePickerField';
import ToggleButton from '../../../../shared/toggle-button/toggle-button';
import {CONSTANT} from '../../../../../common/constants/CommonConst';
import PropTypes from 'prop-types';

AddEditProfile.propTypes = {
    onClosePopup: PropTypes.func.isRequired,
    accountDetail: PropTypes.object,
};

function AddEditProfile(propsAddEditProfile: any): ReactElement {

    const {onClosePopup, accountDetail} = propsAddEditProfile;
    const {isUpdateAccount, error} = useSelector((state: any) => state.account);
    const [account, setAccount] = useState(accountDetail);
    const [isSubmit, setSubmit] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isUpdateAccount || error !== '') {
            if (error === '') {
                onClosePopup();
            }
            setSubmit(false);
        }
    }, [isUpdateAccount, error]);

    useEffect(() => {
        if (isUpdateAccount && accountDetail) {
            dispatch(getAccountDetail(accountDetail.id));
        }
    }, [isUpdateAccount]);

    const updateAccount = (values: FormikValues): void => {
        setSubmit(true);
        dispatch(saveAccount({...account, ...values}));
    };

    const generateAccountId = (n: number): number => {
        return Math.floor(Math.random() * (9 * (Math.pow(10, n)))) + (Math.pow(10, n));
    };

    const initialValues = (): FormikValues => {
        return {
            name: accountDetail?.name ?? '',
            id: accountDetail?.id ?? generateAccountId(6),
            email: accountDetail?.email ?? '',
            questionnaireReceiptDate: accountDetail?.questionnaireReceiptDate ?? new Date(),
            statusAccount: accountDetail?.statusAccount ?? 'pending',
            country: accountDetail?.country ?? '',
            currency: accountDetail?.currency ?? '',
            language: accountDetail?.language ?? '',
            partnerLabelId: accountDetail?.partnerLabelId ?? '',
            level: accountDetail?.level ?? 'Level 2',
            credit: accountDetail?.credit ?? false,
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

    const validationSchema = (): Yup.ObjectSchema => {
        return Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string().email().required(),
            questionnaireReceiptDate: Yup.date().required(),
            country: Yup.string().required(),
            currency: Yup.string().required(),
            language: Yup.string().required(),
            partnerLabelId: Yup.string().required(),
            credit: Yup.boolean().required(),
            creditLimit: Yup.string().when('credit', {
                is: isCreditChecked => isCreditChecked,
                then: Yup.string().required(),
                otherwise: Yup.string().notRequired()
            }),
        });
    };

    const profileInfo = (setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void, values: FormikValues): JSX.Element => {
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
                                <FastField name='level' component={InputField} disabled/>
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
                                <Field name='credit' component={ToggleButton} small={true} defaultChecked={values?.credit}/>
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
                                <Field name='creditLimit' component={InputField} disabled={!values?.credit}/>
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

    const productAccess = (): JSX.Element => {
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

    const onChangeProductAccess = (e: React.FormEvent<HTMLInputElement>): void => {
        setAccount({...account, [(e.target as any).name]: (e.target as any).checked ? 'Yes' : 'No'});
    };

    return (
        <Formik initialValues={initialValues()} onSubmit={values => updateAccount(values)}
                validationSchema={validationSchema()}>
            {(props) => {
                const {handleSubmit, setFieldValue, values, isSubmitting} = props;
                return (
                    <form onSubmit={handleSubmit}>
                        <Modal show={true} onHide={onClosePopup} backdrop='static' keyboard={false} dialogClassName=' modal-xl'>
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
                                <Button type='submit' variant='success' onClick={() => handleSubmit()}>
                                    { isSubmitting && isSubmit && <Spinner animation='border' size='sm'/>}
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
