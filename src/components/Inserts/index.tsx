import styles from './styles.module.scss'
import Add from '/logo/add.svg'

function Inserts() {
  return (
    <>
    <div className={styles.divContent}>
        <input placeholder='Adicione uma nova tarefa' type="text" name="task" className={styles.inputContent}/>
        
        <button
        className={styles.buttonContent}
        type="button"
        // onClick={onRequestClose}
      >
        <img src={Add} alt="Fechal modal" />
      </button>

    </div>
    </>
  )
}

export default Inserts