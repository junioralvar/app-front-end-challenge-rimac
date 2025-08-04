import './Footer.css'
import logo from '../../assets/logo-rimac-2.png'
import { Imagen } from '../imagen/Imagen'

export const Footer = () => {
  return (
    // <footer className="footer ">
    //   <img src={logo} alt="Rimac logo" className="footer-logo" />
    //   <p className="text-white">© 2025 RIMAC Seguros y Reaseguros.</p>
    // </footer>
    <div className="grid-container footer">
      <div className="grid-item col-xs-3 hide-xs "></div>
      <div className="grid-item col-xs-3 hide-xs ">
        <Imagen src={logo} width={85.37} height={41.99} alt="Imagen" />
      </div>
      <div className="grid-item col-xs-3 hide-xs">
        <p className="text-white">© 2025 RIMAC Seguros y Reaseguros.</p>
      </div>
      <div className="grid-item col-xs-3 hide-xs "></div>
    </div>
  )
}
