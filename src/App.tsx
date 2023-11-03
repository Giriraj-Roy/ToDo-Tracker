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
      <div className='left'>
        <div className='left-head'>Akagami No Shanks</div>

        <div className='left-subhead'>Inspiring Productivity, One Click at a Time</div>
        <div>
          Urgent tasks
        </div>
        <div className='left-logout'>
          Log Out
        </div>
      </div>
      <div className='blob'></div>
      <div className='right'>
        <header className="header-container">
          Today's Focus
        </header>
        <InputField task={task} setTask={setTask} handleSubmit={(e) => handleSubmit(e)}/>
        < TodoList task_List={task_List} setTask_List={setTask_List} />
      </div>
    </div>
  )
}

export default  App
