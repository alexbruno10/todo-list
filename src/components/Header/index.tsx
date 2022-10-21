import './style.scss'
import Logo from '../../assets/Logo.svg'

export default function Header() {
    return (
        <div className="header">
        <img src={Logo} alt="Logo written ToDo with a rocket, symbolizing growth" />
        </div>
    )
}