import React, { useRef } from 'react'
import '../../src/App.css'

interface Props {
    task : string;
    setTask : React.Dispatch<React.SetStateAction<string>>;
    handleSubmit: (e: React.FormEvent)=> void;
}

const InputField : React.FC <Props> = ({task, setTask, handleSubmit}) => {
const input_ref = useRef<HTMLInputElement>(null)
    
  return (
    <form
          className='input-field'
          onSubmit={(e) =>{
            handleSubmit(e);
            input_ref.current?.blur();
          }}
    >
        <input 
              type='text'
              value={task}
              onChange={(e)=> setTask(e.target.value)}
              placeholder='Task Name' 
              className='input_task'
        />
        <button
                className='btn_task'
                type='submit'
        >
                  Add Task
        </button>
    </form>
  )
}

export default InputField
