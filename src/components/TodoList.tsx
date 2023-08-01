import React from 'react'
import '../App.css'
import { Task } from '../model';

interface Props {
    task_List : Task[];
    setTask_List : React.Dispatch<React.SetStateAction<Task[]>>;
}


const TodoList : React.FC <Props>= ({task_List, setTask_List}) => {
  return (
    <div className='todo_list'>
        {
            task_List.map((task) =>{
            return (
            <div key={task.id} className="todo">
                        <li>
                            {task.task}
                        </li>
            </div>
            )
            })
        }
    </div>
  )
}

export default TodoList