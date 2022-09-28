import styles from './Task.module.css';
import {TbTrash} from 'react-icons/tb';
import { TaskProps } from '../../App';
import { BsFillCheckCircleFill } from 'react-icons/bs'
interface Props {
  task: TaskProps;
  onDelete: (taskId: string) => void;
  onComplete: (taskId: string) => void;
}

export function Task ({task, onDelete, onComplete}: Props) {

  return (
    <div className={styles.task}>
      <button 
      className={styles.checkContainer} 
      onClick={()=> onComplete(task.id)}>
      {task.isCompleted ? <BsFillCheckCircleFill size={20}/> : <div  />}

      </button>
      <p className={task.isCompleted ? styles.textCompleted : ''}>{ task.title }</p>
      <button onClick={() => onDelete(task.id)} className={styles.deleteButton}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}