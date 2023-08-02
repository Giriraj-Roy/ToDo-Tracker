import React from 'react'
import '../App.css';

interface Props {
    key: number;
    task : string;
}

const TodoTask : React.FC <Props> = ({key, task}) => {
  return (
    <div className='todo'>
        <li>
            {task}
        </li>
    </div>
  )
}

export default TodoTask
