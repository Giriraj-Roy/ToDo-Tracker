import React from 'react'
import '../App.css'
import { Task } from '../model';
import TodoTask from './TodoTask';

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
              <TodoTask key={task.id} task={task.task}
                        task_List = {task_List}
                        setTask_List = {setTask_List}
              />
            )
            })
        }
    </div>
  )
}

export default TodoList