import React from 'react';
import './model-yes-no.scss';
import PropTypes from 'prop-types';
import {Button, Modal} from 'react-bootstrap';


const ModalYesNo = (props: any) => {
    const {title, message, onYes, onNo} = props;
    return (
        <Modal className='model-yes-no' show={true} onHide={onNo} keyboard={false} dialogClassName='modal-dialog modal-lg' centered>
            <Modal.Header closeButton>
                <Modal.Title>
                    {title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    {message}
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='secondary' onClick={onNo}>
                    No
                </Button>
                <Button type='submit' variant='primary' onClick={onYes}>
                    Yes
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

ModalYesNo.propTypes = {
    onYes: PropTypes.func.isRequired,
    onNo: PropTypes.func.isRequired,
    message: PropTypes.string.isRequired,
    title: PropTypes.string
};

export default ModalYesNo;
