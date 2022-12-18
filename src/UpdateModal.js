import React, {useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

function UpdateModal(props) {
    const {updateTask, statuses, priority, task, toggle, modal} = props;

    const [name, setName] = useState(task.name);
    const [status, setStatus] = useState(task.status);
    const [taskPriority, setTaskPriority] = useState(task.priority);
    const [description, setDescription] = useState(task.description);


    function onSave() {
        const updTask = {
            id: task.id,
            name,
            description,
            status,
            priority: +taskPriority,
        }
        updateTask(updTask);
        toggle();
    }

    return (


            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Update Task</ModalHeader>
                <ModalBody>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Task</span>
                        <input
                            type="text"
                            className="form-control"
                            aria-describedby="basic-addon1"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />


                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Description</span>
                        <input
                            type="text"
                            className="form-control"
                            aria-describedby="basic-addon1"
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                        />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Priority</span>
                        <select
                            className="form-select"
                            aria-label="Default select example"
                            value={taskPriority}
                            onChange={e => setTaskPriority(e.target.value)}
                        >
                            {priority.map(el => (
                                <option value={el}>{el}</option>
                            ))}
                        </select>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Status</span>
                        <select
                            className="form-select"
                            aria-label="Default select example"
                            value={status}
                            onChange={e => setStatus(e.target.value)}
                        >
                            {statuses.map((el, i) => (
                                <option value={el} key={i}>{el}</option>
                            ))}
                        </select>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="primary"
                        onClick={onSave}
                    >
                        Save
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>

    );
}

export default UpdateModal;