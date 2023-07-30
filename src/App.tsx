import React, {useState} from 'react'
import './App.css'
import InputField from './components/InputField'
import { Todo } from './model';

const App : React.FC = () => {

  const [task, setTask] = useState<string>("");
  const [task_List, setTask_List] = useState<Todo[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        
  }


  return (
    <div className='App'>
      <header className="header-container">
        TODFY
      </header>
      <InputField task={task} setTask={setTask} handleSubmit={(e) => handleSubmit(e)}/>
    </div>
  )
}

export default  App
