import React from "react"
import styles from './styles.module.scss'

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
        </div>
        </>
    )

}

export default Tasks