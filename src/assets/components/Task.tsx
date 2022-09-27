import styles from './Task.module.css';
import {TbTrash} from 'react-icons/tb';

export function Task () {
  return (
    <div className={styles.task}>
      <button className={styles.checkContainer}>
        <div  />

      </button>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, accusantium distinctio! Corrupti</p>
      <button className={styles.deleteButton}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}