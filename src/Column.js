import React from 'react';
import Task from './Task'

const Column = (props) => {
    const {updateTask, onDelete, status, tasks, changeStatus, statuses, priority} = props;
    return (
        <div className='col'>
            <h2>{status.toUpperCase()}</h2>
            {tasks.filter(el => el.status === status).map(el => (
                <Task
                    task={el}
                    changePriority={props.changePriority}
                    changeStatus={changeStatus}
                    statuses={statuses}
                    onDelete={onDelete}
                    priority={priority}
                    updateTask={updateTask}
                />
            ))}
        </div>
    );
};

export default Column;