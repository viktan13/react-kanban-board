import {v4 as uuidv4} from 'uuid';
import {useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Column from "./Column";

const todo = [
    {
        id: uuidv4(),
        name: 'Learn JS',
        status: 'done',
        priority: 5,
        description: 'learn function'
    },
    {
        id: uuidv4(),
        name: 'Learn React',
        status: 'in progress',
        priority: 3,
        description: 'learn Redux'
    },
    {
        id: uuidv4(),
        name: 'Learn Server',
        status: 'todo',
        priority: 2,
        description: 'learn todo'
    },
    {
        id: uuidv4(),
        name: 'Learn TODO List',
        status: 'review',
        priority: 7,
        description: 'learn bootstrap'
    },
]

function App() {

    const [tasks, setTasks] = useState(todo);
    const [statuses, setStatuses] = useState([
        'todo',
        'in progress',
        'review',
        'done'
    ])

    return (
        <div className="container text-center">
            <div className="row align-items-start">
                {statuses.map((el, i) => (
                    <Column key={i} tasks={tasks} status={el}/>
                ))}
            </div>
        </div>
    );
}

export default App;
