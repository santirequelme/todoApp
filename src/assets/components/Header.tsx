import { AiOutlinePlusCircle } from "react-icons/ai";

import styles from './Header.module.css'
import todoLogo from '../../assets/todologo.svg'
import { ChangeEvent, FormEvent, useState } from 'react';

interface Props {
  onAddTask: (taskTitle: string) => void;
}

export function Header ({onAddTask}: Props) {
  const [title, setTitle] = useState('');
  //  <>>>>>>>>></>
  function handleAddTask(event: FormEvent){
    event.preventDefault();

    onAddTask(title);
    setTitle("");
  }
  //  <>>>>>>>>></>
  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }
  //  <>>>>>>>>></>
  return (
    <header className={styles.header}>
      <img src={todoLogo} alt="" />

      <form onSubmit={handleAddTask} className={styles.newTaskForm}>
        <input 
        placeholder="Add new task" 
        onChange={onChangeTitle} 
        value={title}
        />
        <button>Add<AiOutlinePlusCircle size={20}/></button>
      </form>
    </header>
  )
}