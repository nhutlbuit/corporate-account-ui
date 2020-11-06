import React, {FunctionComponent, ReactElement, useEffect, useState} from 'react';
import './directors.scss';
import {useDispatch, useSelector} from 'react-redux';
import {loadDirectors} from '../../../../store/slice/director.slice';
import {format} from 'date-fns';
import {Button} from 'react-bootstrap';
import AddEditDirector from './add-edit-director/add-edit-director';
import Spinner from '../../../shared/spinner/spinner';

const Directors: FunctionComponent = (): ReactElement => {

    const {directors, isAdd, isUpdate, isDelete, loading} = useSelector((state: any) => state.director);
    const {accountIdSelected, partnerLabelId} = useSelector((state: any) => state.account);
    const dispatch = useDispatch();
    const [isAddEdit, setAddEdit] = useState(false);
    const [directorSelected, setDirectorSelected] = useState({});


    useEffect(() => {
        if (isAdd || isUpdate || isDelete || accountIdSelected) {
            dispatch(loadDirectors(partnerLabelId));
        }
    }, [isAdd, isUpdate, isDelete, accountIdSelected]);

    const editDirector = (item: any) => {
        setAddEdit(true);
        setDirectorSelected(item);
    };

    const addDirector = (): void => {
        setAddEdit(true);
        setDirectorSelected({id: accountIdSelected});
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

    const renderTable = (): JSX.Element => {
        return (
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
        );
    };

    return (
        <> { !directors?.length && loading ?
            <Spinner/>
            :
            <>
                {isAddEdit && <AddEditDirector directorDetail={directorSelected} closeAddEditProfilePopup={(isClose: boolean): void => setAddEdit(isClose)}/>}
                <div className='director'>

                    <p className='title' >
                        <b>Director for Corporate Account {accountIdSelected}</b>
                        <Button className='btn-add' onClick={addDirector}>ADD DIRECTOR</Button>
                    </p>
                    {renderTable()}
                </div>
            </>
            }
        </>
    );
};

export default Directors;
