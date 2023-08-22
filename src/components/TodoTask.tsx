import React, { useEffect, useRef, useState } from 'react'
import '../App.css';
import { Task } from '../model';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'

interface Props {
    // task.id: number;
    task : Task;
    task_List : Task[];
    setTask_List : React.Dispatch<React.SetStateAction<Task[]>>;

}

const TodoTask : React.FC <Props> = ({task, task_List, setTask_List}) => {

  const [edit, setEdit] = useState<boolean>(false);
  const [editTask, setEditTask] = useState<string>(task.task);
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect( ()=>{
    inputRef.current?.focus();
  },[edit])


  const handleDone = (id: number)=>{
    setTask_List(task_List.map(
      (task)=> task.id === id ? { ...task, isDone: !task.isDone } : task))
  }
  const handleDelete = (id: number) => {
    setTask_List(task_List.filter(
      (task)=> task.id !== id
    ))
  }
  const handleEdit = (e :  React.FormEvent, id: number)=>{
    e.preventDefault()
    setTask_List(
      task_List.map((task) => (task.id === id ? { ...task, task: editTask } : task))
    );
    setEdit(false);
    console.log(editTask)


  }

  return (
    <form className='todo'
          onSubmit={(e)=>handleEdit(e, task.id)}
    >


      {
        edit ? 
              <input 
                      ref = {inputRef}
                      value={editTask}
                      onChange={(e)=> setEditTask(e.target.value)}
              />
              :
              
                task.isDone ? 
                  <s>{task.task}</s>
                  : 
                  <span>{task.task}</span>
              

      }

        
        <div>
          <span className='icon' onClick={()=> { if (!edit && !task.isDone)  setEdit(!edit)}}>
            <AiFillEdit />
          </span>
          <span className='icon' onClick={()=>handleDelete(task.id)}>
            <AiFillDelete/>
          </span>
          <span className='icon' onClick={()=>handleDone(task.id)}>
            <MdDone/>
          </span>

        </div>
    </form>
  )
}

export default TodoTask
