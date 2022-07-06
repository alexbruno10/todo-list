import { useState } from 'react'
import styles from './styles.module.scss'
import Add from '/logo/add.svg'

function Inserts() {

  const [task, setTask] = useState('');

  function addTask() {
    console.log(task)
  }

  return (
    <>
    <div className={styles.divContent}>
        <input placeholder='Adicione uma nova tarefa'
        type="text"
        name="task" 
        className={styles.inputContent}
        value={task}
        onChange={({ target }) => setTask(target.value)}
        />
        <button
        className={styles.buttonContent}
        type="button"
        onClick={addTask}
      >
        <img src={Add} alt="Fechal modal" />
      </button>

    </div>
    </>
  )
}

export default Inserts