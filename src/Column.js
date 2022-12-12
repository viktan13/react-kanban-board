import React from 'react';
import Task from './Task'

const Column = (props) => {
    const {onDelete, status, tasks, changeStatus, statuses} = props;
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
                />
            ))}
        </div>
    );
};

export default Column;