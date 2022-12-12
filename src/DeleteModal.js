import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function DeleteModal(props) {
    const{modal, toggle, task, onDelete} = props;

    const onClickHandler = () => {
        onDelete(task.id);
        toggle();
    }

    return (
        <div>

            <Modal isOpen={modal} toggle={toggle} {...props}>
                <ModalHeader toggle={toggle}>Delete Task</ModalHeader>
                <ModalBody>
                    Are you sure you want to delete "{task.name}"?
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="danger"
                        onClick={onClickHandler}
                    >Delete
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default DeleteModal;