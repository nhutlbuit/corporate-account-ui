import PropTypes from 'prop-types';
import React, { ReactElement, useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addAGroup, resetIsCreated, updateAGroup } from '../../../../../store/slice/group.slice';
import './add-edit-sub-group.scss';

AddEditSubGroup.propTypes = {
    onClosePopup: PropTypes.func.isRequired,
    currentGroupName: PropTypes.string.isRequired,
};

function AddEditSubGroup(propsAddEditProfile: any): ReactElement {

    const { onClosePopup, currentGroupName } = propsAddEditProfile;
    const { isCreated, isUpdate, error } = useSelector((state: any) => state.group);
    const [groupName, setGroupName] = useState(currentGroupName);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isCreated || isUpdate || error !== '') {
            if (error === '') {
                onClosePopup();
                dispatch(resetIsCreated());
            }
        }
    }, [isCreated, error, isUpdate]);

    const handleSubmit = (): void => {
        // validate group name: empty, duplicate
        if (currentGroupName !== '') {
            dispatch(updateAGroup({currentGroupName: currentGroupName, newGroupName: groupName}));
        } else {
            dispatch(addAGroup(groupName));
        }
    };

    const onChangeGroupName = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setGroupName(e.target.value);
   };

    return (
        <Modal show={true} onHide={onClosePopup} backdrop='static' keyboard={false}>
            <Modal.Header closeButton>
                <Modal.Title className='title'>
                    {currentGroupName !== '' ? 'EDIT' : 'ADD NEW'} SUB GROUP
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='new-sub-group'>
                    <span className='title'>Sub Group Name</span>
                    <input className='input' type='text' value={groupName} onChange={onChangeGroupName}></input>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='primary' onClick={onClosePopup}>
                    Close
            </Button>
                <Button type='submit' variant='success' onClick={handleSubmit}>
                    Save
            </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default AddEditSubGroup;
