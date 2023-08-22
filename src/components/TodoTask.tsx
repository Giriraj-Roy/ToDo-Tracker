import React from 'react'
import '../App.css';
import { Task } from '../model';


interface Props {
    key: number;
    task : string;
    task_List : Task[];
    setTask_List : React.Dispatch<React.SetStateAction<Task[]>>;

}

const TodoTask : React.FC <Props> = ({key, task, task_List, setTask_List}) => {
  return (
    <div className='todo'>
        <li>
            {task}
        </li>
    </div>
  )
}

export default TodoTask
