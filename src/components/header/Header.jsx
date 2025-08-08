import './Header.css'
import logoRimac from '../../assets/logo-rimac.png'
import { FaPhoneAlt } from 'react-icons/fa'

export const Header = () => {
  return (
    <header className="navbar">
      <div className="navbar-col logo-col">
        <img src={logoRimac} alt="Logo" className="logo" />
      </div>
      <div className="navbar-col right-col hide-xs">
        <span className="texto-medio">¡Compra por este medio!</span>
      </div>
      <div className="navbar-col right-col">
        <span className="telefono">
          <FaPhoneAlt /> (01) 411 6001
        </span>
      </div>
    </header>
  )
}
