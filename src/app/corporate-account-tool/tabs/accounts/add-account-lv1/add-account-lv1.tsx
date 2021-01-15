import React, { ReactElement, useEffect, useState} from 'react';
import './add-account-lv1.scss';
import {useDispatch, useSelector} from 'react-redux';
import * as Yup from 'yup';
import {createAccount } from '../../../../../store/slice/account.slice';
import {Button, FormCheck, Modal, Spinner} from 'react-bootstrap';
import {FastField, Field, Formik, FormikValues} from 'formik';
import SelectField from '../../../../shared/SelectField';
import InputField from '../../../../shared/InputField';
import ToggleButton from '../../../../shared/toggle-button/toggle-button';
import {CONSTANT} from '../../../../../common/constants/CommonConst';
import PropTypes from 'prop-types';

AddAccountLv1.propTypes = {
    onClosePopup: PropTypes.func.isRequired,
    accountDetail: PropTypes.object,
};

function AddAccountLv1(propsAddEditProfile: any): ReactElement {

    const {onClosePopup, accountDetail} = propsAddEditProfile;
    const {isCreated, error} = useSelector((state: any) => state.account);
    const [account, setAccount] = useState({casino: 'Yes', sportsbook: 'Yes'});
    const [isSubmit, setSubmit] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isCreated || error !== '') {
            if (error === '') {
                onClosePopup();
            }
            setSubmit(false);
        }
    }, [isCreated, error]);

    const updateAccount = (values: FormikValues): void => {
      setSubmit(true);
      dispatch(createAccount({...account, ...values}));
    };

    const initialValues = (): FormikValues => {
        return {

            level: 'Level 1',
            numberOfAccounts: 1,
            parentAccounts: accountDetail?.id,
            emailAddress: accountDetail?.email,
            currency: accountDetail?.currency,
            creditAccount: false,
            creditAmount: '',
            status: accountDetail?.statusAccount,
            customUserNameFormat: false,
            userNameFormat: '',
        };
    };

    const validationSchema = (): Yup.ObjectSchema => {
        return Yup.object().shape({
            numberOfAccounts: Yup.number()
                .min(1, 'Number of Accounts min is 1')
                .max(25, 'Number of Accounts max is 25')
                .required('Number of Accounts is a required field'),
            creditAccount: Yup.boolean().required(),
            creditAmount: Yup.string().when('creditAccount', {
                is: isCreditChecked => isCreditChecked,
                then: Yup.string().required('Credit Amount is a required field'),
                otherwise: Yup.string().notRequired()
            }),
            customUserNameFormat: Yup.boolean().required(),
            userNameFormat: Yup.string().when('customUserNameFormat', {
                is: isCreditChecked => isCreditChecked,
                then: Yup.string().required('User Name Format is a required field'),
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
                            <td>
                                Level
                            </td>
                            <td>
                                <FastField name='level' component={InputField} disabled/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                               Number of Accounts
                            </td>
                            <td>
                                <div className='number-of-accounts'>
                                    <FastField name='numberOfAccounts' component={InputField} type='number'/>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Parent Account
                            </td>
                            <td>
                                <FastField name='parentAccounts' component={InputField} disabled/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Email Address
                            </td>
                            <td>
                                <FastField name='emailAddress' component={InputField} disabled/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Currency
                            </td>
                            <td>
                                <FastField name='currency' component={InputField} disabled/>
                            </td>
                        </tr>
                        <tr>
                            <td>Credit Account</td>
                            <td>
                                <Field name='creditAccount' component={ToggleButton} small={false} defaultChecked={false}/>
                            </td>
                        </tr>
                        <tr>
                            <td className={values?.creditAccount ? 'required-field' : ''}>
                                Credit Amount
                            </td>
                            <td>
                                <Field name='creditAmount' component={InputField} disabled={!values?.creditAccount}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Status
                            </td>
                            <td>
                                <Field name='status' component={SelectField} options={CONSTANT.ACCOUNT_CREATION.STATUS} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Custom UserName Format
                            </td>
                            <td>
                                <Field name='customUserNameFormat' component={ToggleButton} small={true} defaultChecked={false}/>
                            </td>
                        </tr>
                        <tr>
                            <td/>
                            <td>
                                <Field name='userNameFormat' component={InputField} disabled={!values?.customUserNameFormat}/>
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
                        <th colSpan={2}> Product Access</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className='inline'>
                                    <FormCheck name='casino' type='checkbox' defaultChecked={true} onClick={onChangeProductAccess}/>
                                    Casino
                                </div>
                            </td>
                            <td>
                                <div className='inline'>
                                    <FormCheck name='sportsbook' type='checkbox' defaultChecked={true} onClick={onChangeProductAccess}/>
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
                        <Modal show={true} onHide={onClosePopup} backdrop='static' keyboard={false} dialogClassName=' modal-lg'>
                            <Modal.Header closeButton>
                                <Modal.Title className='title'>
                                    ADD CORPORATE ACCOUNT
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

export default AddAccountLv1;
