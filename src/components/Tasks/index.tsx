import {Task} from '../Task'
import './style.scss'
import Book from '/book.svg'
import {TbTrash} from 'react-icons/tb'
import { BsFillCheckCircleFill } from 'react-icons/bs'

interface Props {
    task: Task[];
    checkTask: (id: number) => void;
}

export default function Tasks({task, checkTask}: Props) {


    function handleCheckButton(id: number) {
        checkTask(id)
    }

    return (
        <>
        <div className="tasks">
            <div className="informationTask">
                <div className="createdTasks">
                    <p>
                        Tarefas criadas
                    </p>
                    <span>
                        10
                    </span>
                </div>
                <div className="completedTasks">
                    <p>
                        Concluídas
                    </p>
                    <span>
                        0
                    </span>
                </div>
            </div>
            <hr/>

        </div>
        {task.length === 0 ? (
            <div className="tasksNotRegistered">
            <img src={Book} alt="Image of a book, symbolizing attribution" />
            <p><b>Você ainda não tem tarefas cadastradas</b></p>
            <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
        ) : (
            task.map(task => (
                <div key={task.id} className="contentTask">
                    <button onClick={() => handleCheckButton(task.id)} className="checkButton">
                        {task.completed === true ? <BsFillCheckCircleFill /> : <div />}
                    </button> 
                    <p className={task.completed === true ? "taskCompleted" : ""}>{task.description}</p>
                    <button className="TrashIcon">
                        <TbTrash size={25}/>
                    </button>
                </div>
            ))
        )}
        </>
    )
}