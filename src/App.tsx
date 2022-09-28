import { useState } from 'react'
import { Header } from './assets/components/Header';
import { Tasks } from './assets/components/Tasks';
import "./global.css";
import { Task } from './assets/components/Task';
import { TbFlaskOff } from 'react-icons/tb';

export interface TaskProps {
  id: string;
  title: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([
    {
      id: 'test',
      title: 'Feed the dog',
      isCompleted: true
    },
    {
      id: 'test2',
      title: 'Clean dishes',
      isCompleted: false
    }
  ]);

  function addTask(taskTitle: string) {
    setTasks([
      ...tasks, {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false,
      }
    ]);
  }

  function deleteTaskById (taskId:string){
    const newTasks= tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

function toggleIsCompletedByID(taskId: string){
  const newTasks = tasks.map( (task) =>{
    if(task.id === taskId){
      return {
        ...task,
      isCompleted: !task.isCompleted,
    };
    }

    return task;
  });
  setTasks(newTasks);
}
  return (
    <div className="App">
      <Header onAddTask={addTask} />
      <Tasks 
        tasks={tasks}
        onDelete={deleteTaskById}
        onComplete={toggleIsCompletedByID}/>
    </div>
  )
}

export default App
