import {Task} from '../Task'
import './style.scss'
import Book from '/book.svg'

interface Props {
    task: Task[];
}

export default function Tasks({task}: Props) {
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
                <div className="contentTask">
                    <p key={task.id}>{task.description}</p>
                </div>
            ))
        )}
        </>
    )
}