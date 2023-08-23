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
                      className='task_edit'
                      ref = {inputRef}
                      value={editTask}
                      onChange={(e)=> setEditTask(e.target.value)}
              />
              :
              
                task.isDone ? 
                  <s className='task_name'>{task.task}</s>
                  : 
                  <span className='task_name'>{task.task}</span>
              

      }

        
        <div className='task_actions'>
          <span className='icon' onClick={()=> { if (!edit && !task.isDone)  setEdit(!edit)}}>
            <AiFillEdit size={28} />
          </span>
          <span className='icon' onClick={()=>handleDelete(task.id)}>
            <AiFillDelete size={28}/>
          </span>
          <span className='icon' onClick={()=>handleDone(task.id)}>
            <MdDone size={28}/>
          </span>

        </div>
    </form>
  )
}

export default TodoTask
