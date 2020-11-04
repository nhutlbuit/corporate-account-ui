import React, {useEffect, useRef, useState} from 'react';
import './add-edit-director.scss';
import {useDispatch, useSelector} from 'react-redux';
import { string, object, number} from 'yup';
import {addDirector, updateDirector, deleteDirector} from '../../../../../store/slice/director.slice';
import {Button, FormCheck, Modal} from 'react-bootstrap';
import {FastField, Field, Formik} from 'formik';
import SelectField from '../../../../shared/SelectField';
import InputField from '../../../../shared/InputField';
import {CONSTANT} from '../../../../../common/constants/CommonConst';
import DatePickerField from '../../../../shared/DatePickerField';

function AddEditDirector(propsAddEditProfile: any) {
    const {closeAddEditProfilePopup, directorDetail} = propsAddEditProfile;
    const {accountDetail} = useSelector((state: any) => state.account);
    const [director, setDirector] = useState(directorDetail);
    const dispatch = useDispatch();
    const isAddNew = useRef(!directorDetail?.idNumber);
    const [errorMsg, setErrorMsg] = useState('');

    const onClosePopup = () => {
        closeAddEditProfilePopup(false);
    };

    const generateDirectorId = (n: number) => {
        return Math.floor(Math.random() * (9 * (Math.pow(10, n)))) + (Math.pow(10, n));
    };

    const saveDirector = (values: any) => {
        setErrorMsg('');
        if (director.passport || director.nationalId || director.proofOfAddress || director.certificateOfIncumbency) {
            if (isAddNew.current) {
                dispatch(addDirector({...director, ...values, id: generateDirectorId(6), partnerLabelId: accountDetail.partnerLabelId}));
            } else {
                dispatch(updateDirector({...director, ...values}));
            }
            onClosePopup();
        } else {
            setErrorMsg('Document at least one must be selected');
        }
    };

    const deleteDirectorSelected = () => {
        dispatch(deleteDirector(directorDetail.id));
        onClosePopup();
    };

    const initialValues = () => {
        return {
            name: directorDetail?.name ?? '',
            dateOfBirth: directorDetail?.dateOfBirth ?? '',
            countryOfResidence: directorDetail?.countryOfResidence ?? '',
            idType: directorDetail?.idType ?? '',
            idNumber: directorDetail?.idNumber ?? '',
            // passPort: directorDetail?.passPort ?? false,
            // nationalId: directorDetail?.nationalId ?? false,
            // proofOfAddress: directorDetail?.proofOfAddress ?? false,
            // certificateOfIncumbency: directorDetail?.certificateOfIncumbency ?? false,
        };
    };

    const validationSchema = () => {
        return object().shape({
            name: string().required(),
            dateOfBirth: string().required(),
            countryOfResidence: string().required(),
            idType: string().required(),
            idNumber: number().positive().required(),
            // passPort: Yup.mixed(),
            // nationalId: Yup.mixed(),
            // proofOfAddress: Yup.mixed(),
            // certificateOfIncumbency: Yup.mixed(),
        });
    };

    const profileInfo = (setFieldValue: any, values: any) => {
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
                            <td>
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
                                <div className='message-error' dangerouslySetInnerHTML= {{__html: errorMsg}}/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    };

    const onChangeDocument = (e: any) => {
        setDirector({...director, [e.target.name]: e.target.checked});
    };

    return (
        <Formik initialValues={initialValues()} onSubmit={values => saveDirector(values)}
                validationSchema={validationSchema()}>
            {(props) => {
                const {handleSubmit, setFieldValue, values} = props;
                return (
                    <form onSubmit={handleSubmit}>
                        <Modal show={true} onHide={onClosePopup} keyboard={false} dialogClassName='modal-dialog modal-lg'>
                            <Modal.Header closeButton>
                                <Modal.Title className='title'>
                                    {isAddNew.current ? 'ADD NEW' : 'EDIT'} DIRECTOR
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className='director-detail'>
                                    {profileInfo(setFieldValue, values)}
                                    { !isAddNew.current && <Button className='btn-add' onClick={deleteDirectorSelected} >DELETE DIRECTOR</Button> }
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

export default AddEditDirector;
