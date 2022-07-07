import React from "react"
import styles from './styles.module.scss'
import Clipboard from '/logo/clipboard.svg'

function Tasks () {

    return(
        <>
        <div className={styles.divContent}>
            <div className={styles.labelContent}>
                <div className={styles.tasksContent}>
                    <p className={styles.newTasks}>Tarefas criadas</p>
                    <strong>0</strong>
                </div>
                <div className={styles.finishContent}>
                    <p className={styles.finishTasks}>Concluídas</p>
                    <strong>0</strong>
                </div>
            </div>
            <div className={styles.listTasks}>
                <img src={Clipboard} alt="" />
                <div className={styles.pText}>
                    <p><b>Você ainda não tem tarefas cadastradas</b></p>
                    <p>Crie tarefas e organize seus itens a fazer</p>
                </div>
            </div>
        </div>
        </>
    )

}

export default Tasks