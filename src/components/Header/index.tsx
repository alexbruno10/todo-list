import Logo from '/logo/logo.svg'
import styles from './styles.module.scss'

function Header() {
  return (
    <>
    <div className={styles.headerContent}>
    <img src={Logo} alt="Logo ToDo" />
    </div>
    </>
  )
}

export default Header