import React, {useEffect, useState} from 'react';
import './directors.scss';
import {useDispatch, useSelector} from 'react-redux';
import {loadDirectors} from '../../../../store/slice/director.slice';
import {format} from 'date-fns';
import {Button} from 'react-bootstrap';
import AddEditDirector from './add-edit-director/add-edit-director';

function Directors() {
    const {directors, isAdd, isUpdate, isDelete} = useSelector((state: any) => state.director);
    const {accountDetail} = useSelector((state: any) => state.account);
    const dispatch = useDispatch();
    const [isAddEdit, setAddEdit] = useState(false);
    const [directorSelected, setDirectorSelected] = useState({});

    useEffect(() => {
        if (accountDetail.id) {
            dispatch(loadDirectors(accountDetail.partnerLabelId));
        }
    }, []);

    useEffect(() => {
        if (isAdd || isUpdate || isDelete) {
            dispatch(loadDirectors(accountDetail.partnerLabelId));
        }
    }, [isAdd, isUpdate, isDelete]);

    const editDirector = (item: any) => {
        setAddEdit(true);
        setDirectorSelected(item);
    };

    const addDirector = () => {
        setAddEdit(true);
        setDirectorSelected({id: accountDetail.id});
    };

    const getDocuments = (item: any): string => {
        const documents = [];
        if (item.passport) {
            documents.push('Passport');
        }
        if (item.nationalId) {
            documents.push('National ID');
        }
        if (item.proofOfAddress) {
            documents.push('Proof Of Address');
        }
        if (item.certificateOfIncumbency) {
            documents.push('Certificate Of Incumbency');
        }
        return documents.join(', ');
    };

    return (
        <>
            {isAddEdit && <AddEditDirector directorDetail={directorSelected} closeAddEditProfilePopup={(isClose: boolean) => setAddEdit(isClose)}/>}
            <div className='director'>

                <p className='title' >
                    <b>Director for Corporate Account {accountDetail.id}</b>
                    <Button className='btn-add' onClick={addDirector}>ADD DIRECTOR</Button>
                </p>
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Date of Birth</th>
                        <th>Country Of Residence</th>
                        <th>ID Type</th>
                        <th>ID Number</th>
                        <th>Documents</th>
                    </tr>
                    </thead>
                    <tbody>
                    {directors?.map((item: any, index: number) => (
                        <tr key={index} onClick={() => editDirector(item)}>
                            <td>{item?.name}</td>
                            <td>{item?.dateOfBirth && format(item?.dateOfBirth, 'dd MMM yyyy')}</td>
                            <td>{item?.countryOfResidence}</td>
                            <td>{item?.idType}</td>
                            <td>{item?.idNumber}</td>
                            <td>{getDocuments(item)}</td>
                        </tr>
                    ))}
                    {!directors?.length &&
                    <tr>
                        <td colSpan={7} className='no-record-found'>
                            No Record Found
                        </td>
                    </tr>
                    }
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Directors;
