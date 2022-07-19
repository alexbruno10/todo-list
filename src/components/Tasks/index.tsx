import { useState } from 'react'
import styles from './styles.module.scss'
import Add from '/logo/add.svg'
import Clipboard from '/logo/clipboard.svg'
import Tb from '/logo/tb.svg'
import {AiOutlineCheckCircle} from 'react-icons/ai'


interface Task {
  id: number;
  description: string;
  status: boolean;
};


function Inserts() {

  const [task, setTask] = useState<Task[]>([]);
  const [newDescription, setNewDescription] = useState('');

  const newTasks = task.length
  const totalTaksFinished = task.filter(tasks => tasks.status === true).length

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
    setNewDescription('');
  }

  function handleCheckbox(id: number) {
    console.log(id);
    const newTask = task.map((tasks) => {
      if(id === tasks.id) {
        return {
          ...tasks,
          status: !tasks.status
        };
      }
      return tasks;
    });
    console.log(newTask);
    setTask(newTask)
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

    <div className={styles.divContentReturn}>
        <div className={styles.labelContent}>
            <div className={styles.tasksContent}>
                <p className={styles.newTasks}>Tarefas criadas</p>
                <strong>{newTasks}</strong>
            </div>
            <div className={styles.finishContent}>
                <p className={styles.finishTasks}>Concluídas</p>
                <strong>{totalTaksFinished} de {newTasks}</strong>
            </div>
        </div>


        {task.length <= 0 ? 
        
        <div className={styles.listTasks}>
            <img src={Clipboard} alt="" />
            <div className={styles.pText}>
                <p><b>Você ainda não tem tarefas cadastradas</b></p>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
        </div>
        
        : task.map(tasks => (

          

          <div className={styles.divTasks} key={tasks.id}>
            <input type="checkbox"
            checked={tasks.status}
            onChange={() => {handleCheckbox(tasks.id)}} />
            <p className={tasks.status == true ? styles.descriptionCompleted : ''}>{tasks.description}</p>
            <button>
              <img src={Tb} alt="Ícone de Lixeira" />
            </button>
          </div>
            
        ))}


        
    </div>


    {/* <Tasks task={task} newTasks={task.length}/> */}
    </>
  )
}

export default Inserts