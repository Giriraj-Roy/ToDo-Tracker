import React, { useRef, useState } from 'react'
import '../../src/App.css'

interface Props {
    task : string;
    setTask : React.Dispatch<React.SetStateAction<string>>;
    handleSubmit: (e: React.FormEvent)=> void;
}

const InputField : React.FC <Props> = ({task, setTask, handleSubmit}) => {
const input_ref = useRef<HTMLInputElement>(null)
const [priority,setPriority] = useState<string>("");
    
  return (
    <form
          className='input-field'
          onSubmit={(e) =>{
            handleSubmit(e);
            input_ref.current?.blur();
          }}
    >   
        <div className='priority_head'>
          <div className={`${priority==="high" ? 'priorityHigh' : 'prioritynotSelected'}`} onClick={()=>setPriority("high")}></div>
          <div className={`${priority==="medium" ? 'priorityMedium' : 'prioritynotSelected'}`} onClick={()=>setPriority("medium")}></div>
          <div className={`${priority==="low" ? 'priorityLow' : 'prioritynotSelected'}`} onClick={()=>setPriority("low")}></div>
        </div>

        <input 
              type='text'
              value={task}
              onChange={(e)=> setTask(e.target.value)}
              placeholder="What's Your Next Task ?" 
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
