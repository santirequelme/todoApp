import { useEffect, useState } from 'react'
import { Footer } from './assets/components/Footer';
import { Header } from './assets/components/Header';
import { Tasks } from './assets/components/Tasks';
import "./global.css";

const LOCAL_STORAGE_KEY = "savedTasks"

export interface TaskProps {
  id: string;
  title: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  function loadSavedTasks() {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      setTasks(JSON.parse(saved));
    }
  }

  useEffect(() => {
    loadSavedTasks();
  }, []);

  function setTasksAndSave(newTasks: TaskProps[]){
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  }

  function addTask(taskTitle: string) {
    setTasksAndSave([
      ...tasks, {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false,
      }
    ]);
  }

  function deleteTaskById (taskId:string){
    const newTasks= tasks.filter((task) => task.id !== taskId);
    setTasksAndSave(newTasks);
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
  setTasksAndSave(newTasks);
}
  return (
    <div className="App">
      <Header onAddTask={addTask} />
      <Tasks 
        tasks={tasks}
        onDelete={deleteTaskById}
        onComplete={toggleIsCompletedByID}/>
      < Footer />  
    </div>
  )
}

export default App
