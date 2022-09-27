import { Task } from './Task';
import styles from './Tasks.module.css';

export function Tasks() {
  return (
    <div className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p> Tasks created</p>
          <span>4</span>
        </div>
        <div>
          <p className={styles.textPurple}>Done</p>
          <span>2 de 4</span>
        </div>
      </header>
      <div className={styles.list}>
        <Task />
        <Task />
      </div>
    </div>
  );
}