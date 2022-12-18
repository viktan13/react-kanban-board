import React, {useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, InputGroup, InputGroupText, Input} from 'reactstrap';
import {v4 as uuidv4} from 'uuid';

function CreateTaskModal({statuses, priority, addTask}) {
    const [modal, setModal] = useState(false);
    const [name, setName] = useState('')
    const [status, setStatus] = useState(statuses[0])
    const [tsPriority, setTsPriority] = useState(priority[0])
    const [description, setDescription] = useState('')

    const toggle = () => {
        setName('');
        setDescription('');
        setStatus(statuses[0]);
        setTsPriority(priority[0]);
        setModal(!modal);
    }

    const createButtonHandler = () => {
        const newTask = {
            id: uuidv4(),
            name,
            description,
            status,
            priority: tsPriority,
        }
        addTask(newTask);
        toggle();
    }

    return (
        <div>
            <div style={{textAlign: 'right', margin: '30px 0'}}>
                <Button
                    color="outline-primary"
                    onClick={toggle}
                >
                    Create New Task
                </Button>
            </div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Create New Task</ModalHeader>
                <ModalBody>
                    <InputGroup>
                        <InputGroupText>
                            Task name
                        </InputGroupText>
                        <Input value={name} onChange={e => setName(e.target.value)}/>
                    </InputGroup>
                    <br/>
                    <InputGroup>
                        <InputGroupText>
                            Description
                        </InputGroupText>
                        <Input value={description} onChange={e => setDescription(e.target.value)}/>
                    </InputGroup>
                    <br/>
                    <InputGroup>
                        <InputGroupText>
                            Status
                        </InputGroupText>
                        <select
                            className="form-select"
                            aria-label="Default select example"
                            value={status}
                            onChange={e => setStatus(e.target.value)}
                        >
                            {statuses.map((el, i) => (
                                <option key={i} value={el}>{el}</option>
                            ))}
                        </select>
                    </InputGroup>
                    <br/>
                    <InputGroup>
                        <InputGroupText>
                            Priority
                        </InputGroupText>
                        <select
                            className="form-select"
                            aria-label="Default select example"
                            value={tsPriority}
                            onChange={e => setTsPriority(e.target.value)}
                        >
                            {priority.map((el, i) => (
                                <option key={i} value={el}>{el}</option>
                            ))}
                        </select>
                    </InputGroup>

                </ModalBody>
                <ModalFooter>
                    <Button
                        color="primary"
                        onClick={createButtonHandler}>
                        Create
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default CreateTaskModal;