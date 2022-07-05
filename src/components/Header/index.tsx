import Logo from '../../../public/logo/logo.svg'
import styles from './styles.module.scss'

function Header() {
  return (
    <>
    <div className={styles.headerContent}>
    <img src={Logo} alt="" />
    </div>
    </>
  )
}

export default Header