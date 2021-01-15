import React, { ReactElement, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './sub-group-detail.scss';
import { loadGroups, deleteAGroup, updateAGroup } from '../../../../../store/slice/group.slice';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEdit, faTrash} from '@fortawesome/free-solid-svg-icons';
import ModalYesNo from '../../../../shared/model-yes-no/model-yes-no';
import AddEditSubGroup from '../add-edit-sub-group/add-edit-sub-group';

function SubGroupDetail(): ReactElement {

    const { groupsAccountCount, isCreated, isDelete, isUpdate } = useSelector((state: any) => state.group);
    const [isShowConfirmDeleteAGroup, setShowConfirmDeleteAGroup] = useState(false);
    const [isEditASubGroup, setEditASubGroup] = useState(false);
    const dispatch = useDispatch();

    const deleteAGroupSelected = (item: any): void => {
        dispatch(deleteAGroup(item.groupName));
        setShowConfirmDeleteAGroup(false);
    };

    const editAGroupSelected = (item: any): void => {
        console.log('edit');
        dispatch(updateAGroup(item.groupName));
    };

    useEffect(() => {
        dispatch(loadGroups());
    }, [isCreated, isDelete, isUpdate]);

    return (
        <div className='sub-group-detail'>
        <table>
                <thead>
                    <tr>
                        <th>Sub Group</th>
                        <th>Account Count</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {groupsAccountCount?.map((item: any, index: number) => (
                    <tr key={index}>
                        <td>{item?.groupName}</td>
                        <td>{item?.accountCount}</td>
                        <td className='action'>
                            <FontAwesomeIcon icon={faEdit} onClick={() => setEditASubGroup(true)}/>
                            <span> </span>
                            <FontAwesomeIcon icon={faTrash} onClick={() => setShowConfirmDeleteAGroup(true)}/>
                        </td>
                        { isShowConfirmDeleteAGroup &&
                            <ModalYesNo
                                onNo={() => setShowConfirmDeleteAGroup(false)}
                                onYes={() => deleteAGroupSelected(item)}
                                title={ 'Confirm Message!'}
                                message='This will delete this Sub Group. All accounts assigned to this Sub Group will be unassigned. Do you wish to continue?'
                            />
                        }
                         { isEditASubGroup && <AddEditSubGroup onClosePopup={() => setEditASubGroup(false)} currentGroupName={item.groupName}/>}
                    </tr>
                ))}
                {!groupsAccountCount?.length &&
                <tr>
                    <td colSpan={3} className='no-record-found'>
                        No Record Found
                    </td>
                </tr>
                }
                </tbody>
            </table>
        </div>
    );
}

export default SubGroupDetail;
