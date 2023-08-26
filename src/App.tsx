import React, {useState} from 'react'
import './App.css'
import InputField from './components/InputField'
import { Task } from './model';
import TodoList from './components/TodoList';

const App : React.FC = () => {

  const [task, setTask] = useState<string>("");
  const [task_List, setTask_List] = useState<Task[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(task){
          setTask_List([...task_List, {
            id: Date.now(),
            task,
            isDone: false,
          }]);
          setTask("")
        }
        
  }

  // console.log(task_List);
  


  return (
    <div className='App'>
      <header className="header-container">
        TODIFY
      </header>
      <InputField task={task} setTask={setTask} handleSubmit={(e) => handleSubmit(e)}/>
      < TodoList task_List={task_List} setTask_List={setTask_List} />
    </div>
  )
}

export default  App
