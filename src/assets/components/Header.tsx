import { AiOutlinePlusCircle } from "react-icons/ai";

import styles from './Header.module.css'
import todoLogo from '../../assets/todologo.svg'

export function Header () {

return (
  <header className={styles.header}>
    <img src={todoLogo} alt="" />

    <form className={styles.newTaskForm}>
      <input placeholder="Add new task" />
      <button>Add<AiOutlinePlusCircle size={20}/></button>
    </form>
  </header>
)
}