import './Footer.css'
import logoEscritorio from '../../assets/rimac-escritorio-blanco.png'
import logoMovil from '../../assets/rimac-movil-blanco.png'

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-desktop">
        <img src={logoEscritorio} alt="Logo Rimac" className="logo-desktop" />
        <span className="text-desktop fw-bolder">
          © 2025 RIMAC Seguros y Reaseguros.
        </span>
      </div>

      <div className="footer-mobile">
        <img src={logoMovil} alt="Logo Rimac" className="logo-mobile" />
        <span className="text-mobile fw-bolder">
          © 2025 RIMAC Seguros y Reaseguros.
        </span>
      </div>
    </footer>
  )
}
