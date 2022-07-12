import { useState } from 'react'
import Tasks from '../Tasks';
import styles from './styles.module.scss'
import Add from '/logo/add.svg'


interface Task {
  id: number;
  description: string;
  status: boolean;
};


function Inserts() {

  const [task, setTask] = useState<Task[]>([]);
  const [newDescription, setNewDescription] = useState('');

  function addTask() {
    
    const description = newDescription;

    if(!description) return;

    const newTask = {
      id: Math.random(),
      description: description,
      status: false
    }

    //console.log(newTask)
    setTask((oldState) => [...oldState, newTask])
  }




  return (
    <>
    <div className={styles.divContent}>
        <input placeholder='Adicione uma nova tarefa'
        type="text"
        name="task" 
        className={styles.inputContent}
        value={newDescription}
        onChange={(e) => setNewDescription(e.target.value)}
        />
        <button
        className={styles.buttonContent}
        type="button"
        onClick={addTask}
      >
        Criar 
        <img src={Add} alt="Fechal modal" />
      </button>

    </div>

    <Tasks task={task} newTasks={task.length}/>
    </>
  )
}

export default Inserts