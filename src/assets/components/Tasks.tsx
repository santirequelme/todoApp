import  clipboard  from '../../assets/clipboard.svg'
import { TaskProps } from '../../App';
import { Task } from './Task';
import styles from './Tasks.module.css';


interface Props {
  tasks: TaskProps[];
  onDelete:(taskId: string) => void;
  onComplete:(taskId: string) => void;
}

export function Tasks({ tasks, onDelete, onComplete }: Props) {
  const tasksQuantity = tasks.length;
  const completedTasks = tasks.filter((task) => task.isCompleted).length;
  return (
    <div className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p> Tasks created</p>
          <span>{ tasksQuantity }</span>
        </div>
        <div>
          <p className={styles.textPurple}>Done</p>
          <span>{completedTasks} of {tasksQuantity}</span>
        </div>
      </header>
      <div className={styles.list}>
        {tasks.map((task)=>(
        <Task 
          onDelete={onDelete}
          key={task.id}
          task={task}
          onComplete= {onComplete}
        />
          ))}
        {tasks.length <= 0 &&(
          <div className={styles.empty}>
            <img src={clipboard} />
            <div>
              <p>Seems there is nothing TO DO 👀</p>
             
              <span>🚀⬆️Stop procrastinating and start creating a new task⬆️</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}