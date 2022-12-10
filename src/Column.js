import React from 'react';
import Task from './Task'

const Column = (props) => {
    const {status, tasks} = props;
    return (
        <div className='col'>
            <h2>{status.toUpperCase()}</h2>
            {tasks.map(el => (
                <Task task={el} />
            ))}
        </div>
    );
};

export default Column;