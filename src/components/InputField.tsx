import React from 'react'
import '../../src/App.css'

interface Props {
    task : string;
    setTask : React.Dispatch<React.SetStateAction<string>>;
    handleSubmit: (e: React.FormEvent)=> void;
}

const InputField : React.FC <Props> = ({task, setTask, handleSubmit}) => {

    
  return (
    <form className='input-field'>
        <input type='text' value={task} onChange={(e)=> setTask(e.target.value)} placeholder='Task Name' className='input_task'/>
        <button className='btn_task'  onSubmit={(e) =>handleSubmit(e)} type='submit' >Add Task</button>
    </form>
  )
}

export default InputField
