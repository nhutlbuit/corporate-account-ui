import React, {ReactElement, useEffect, useRef, useState} from 'react';
import './add-edit-director.scss';
import {useDispatch, useSelector} from 'react-redux';
import {string, object, number, ObjectSchema} from 'yup';
import {addDirector, updateDirector, deleteDirector} from '../../../../../store/slice/director.slice';
import {Button, FormCheck, Modal, Spinner} from 'react-bootstrap';
import {FastField, Field, Formik, FormikErrors, FormikValues} from 'formik';
import SelectField from '../../../../shared/SelectField';
import InputField from '../../../../shared/InputField';
import {CONSTANT} from '../../../../../common/constants/CommonConst';
import DatePickerField from '../../../../shared/DatePickerField';
import PropTypes from 'prop-types';

AddEditDirector.propTypes = {
    closeAddEditProfilePopup: PropTypes.func.isRequired,
    directorDetail: PropTypes.object.isRequired,
};

function AddEditDirector(propsAddEditDirector: any): ReactElement {

    const {closeAddEditProfilePopup, directorDetail} = propsAddEditDirector;
    const {accountDetail} = useSelector((state: any) => state.account);
    const {isAdd, isUpdate, isDelete, error} = useSelector((state: any) => state.director);
    const [director, setDirector] = useState(directorDetail);
    const dispatch = useDispatch();
    const isAddNew = useRef(!directorDetail?.idNumber);
    const [requiredMsg, setRequiredMsg] = useState('');
    const [isSubmit, setSubmit] = useState(false);
    const [isDeleteDirector, setDeleteDirector] = useState(false);

    const onClosePopup = (): void => {
        closeAddEditProfilePopup(false);
    };

    const generateDirectorId = (n: number): number => {
        return Math.floor(Math.random() * (9 * (Math.pow(10, n)))) + (Math.pow(10, n));
    };

    useEffect(() => {
        if (isAdd || isUpdate || isDelete || error?.length > 0) {
            if (error === '') {
                onClosePopup();
            }
            setSubmit(false);
            setDeleteDirector(false);
        }
    }, [isAdd, isUpdate, isDelete, error]);

    useEffect(() => {
        setRequiredMsg('Document at least one must be selected');
        if (director?.passport || director?.nationalId || director?.proofOfAddress || director?.certificateOfIncumbency) {
            setRequiredMsg('');
        }
    }, [director]);

    const saveDirector = (values: FormikValues): void => {
        if (requiredMsg.length === 0) {
            setSubmit(true);
            if (isAddNew.current) {
                dispatch(addDirector({...director, ...values, id: generateDirectorId(6), partnerLabelId: accountDetail?.partnerLabelId}));
            } else {
                dispatch(updateDirector({...director, ...values}));
            }
        }
    };

    const deleteDirectorSelected = (): void => {
        setDeleteDirector(true);
        dispatch(deleteDirector(directorDetail.id));
    };

    const initialValues = (): FormikValues => {
        return {
            name: directorDetail?.name ?? '',
            dateOfBirth: directorDetail?.dateOfBirth ?? '',
            countryOfResidence: directorDetail?.countryOfResidence ?? '',
            idType: directorDetail?.idType ?? '',
            idNumber: directorDetail?.idNumber ?? ''
        };
    };

    const validationSchema = (): ObjectSchema => {
        return object().shape({
            name: string().required(),
            dateOfBirth: string().required(),
            countryOfResidence: string().required(),
            idType: string().required(),
            idNumber: number().positive().required()
        });
    };

    const profileInfo = (setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void, errors: FormikErrors<FormikValues>): JSX.Element => {
        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td className='required-field'>
                                Name
                            </td>
                            <td>
                                <FastField name='name' component={InputField}/>
                            </td>
                        </tr>
                        <tr>
                            <td className='required-field'>
                               Date Of Birth
                            </td>
                            <td>
                                <FastField name='dateOfBirth' component={DatePickerField} onChange={setFieldValue}/>
                            </td>
                        </tr>
                        <tr>
                            <td className='required-field'>
                                Country of Residence
                            </td>
                            <td>
                                <Field name='countryOfResidence' component={SelectField} options={CONSTANT.ACCOUNT_CREATION.COUNTRIES}/>
                            </td>
                        </tr>
                        <tr>
                            <td className='required-field'>
                                ID Type
                            </td>
                            <td>
                                <Field name='idType' component={SelectField} options={CONSTANT.ACCOUNT_CREATION.ID_TYPES}/>
                            </td>
                        </tr>
                        <tr>
                            <td className='required-field'>
                                ID Number
                            </td>
                            <td>
                                <FastField name='idNumber' component={InputField}/>
                            </td>
                        </tr>
                        <tr>
                            <td className='required-field'>Documents</td>
                            <td className='document'>
                                <div className='inline'>
                                    <FormCheck name='passport' type='checkbox' defaultChecked={directorDetail?.passport } onClick={onChangeDocument}/>
                                     Passport
                                </div>
                                <div className='inline'>
                                    <FormCheck name='nationalId' type='checkbox' defaultChecked={directorDetail?.nationalId} onClick={onChangeDocument}/>
                                    National ID
                                </div>
                                <div className='inline'>
                                    <FormCheck name='proofOfAddress' type='checkbox' defaultChecked={directorDetail?.proofOfAddress} onClick={onChangeDocument}/>
                                    Proof Of Address
                                </div>
                                <div className='inline'>
                                    <FormCheck name='certificateOfIncumbency' type='checkbox' defaultChecked={directorDetail?.certificateOfIncumbency} onClick={onChangeDocument}/>
                                    Certificate Of Incumbency
                                </div>
                                <div className='required-msg' dangerouslySetInnerHTML= {{__html: requiredMsg}}/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    };

    const onChangeDocument = (e: React.FormEvent<HTMLInputElement>): void => {
        setDirector({...director, [(e.target as any).name]: (e.target as any).checked});
    };

    return (
        <Formik initialValues={initialValues()} onSubmit={values => saveDirector(values)}
                validationSchema={validationSchema()}>
            {(props) => {
                const {handleSubmit, setFieldValue, isSubmitting, errors} = props;
                return (
                    <form>
                        <Modal show={true} onHide={onClosePopup} keyboard={false} dialogClassName='modal-dialog modal-lg'>
                            <Modal.Header closeButton>
                                <Modal.Title className='title'>
                                    {isAddNew.current ? 'ADD NEW' : 'EDIT'} DIRECTOR
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className='director-detail'>
                                    {profileInfo(setFieldValue, errors)}
                                    { !isAddNew.current &&
                                        <Button className='btn-add' onClick={deleteDirectorSelected} >
                                            { isDeleteDirector && <Spinner animation='border' size='sm'/>}
                                            {'  DELETE DIRECTOR'}
                                        </Button>
                                    }
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant='primary' onClick={onClosePopup}>
                                    Close
                                </Button>
                                <Button variant='success' onClick={() => handleSubmit()}>
                                    { isSubmitting && requiredMsg === '' && isSubmit && <Spinner animation='border' size='sm'/>}
                                    Save
                                </Button>
                                {JSON.stringify(props)}
                            </Modal.Footer>
                        </Modal>
                    </form>
                );
            }}
        </Formik>
    );
}

export default AddEditDirector;
