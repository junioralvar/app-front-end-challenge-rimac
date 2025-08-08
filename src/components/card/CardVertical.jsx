import { Button } from '../button/Button'
import './CardVertical.css'

export const CardVertical = ({
  title,
  subtitle1,
  subtitle2,
  description,
  icon,
  onClick,
}) => {
  return (
    <div className="card-vertical">
      {/* HEADER */}
      <div className="card-header px-4 pt-1">
        <h2 className="card-title">{title}</h2>
        <img src={icon} alt="icono" />
      </div>
      <p className="card-subtitle mt-5">{subtitle1}</p>
      <p className="card-subtitle">{subtitle2}</p>
      <hr className="card-divider" />
      {/* BODY */}
      <ul className="card-description">
        {description?.map((item, index) => (
          <li key={index} className="card-list-item">
            {item}
          </li>
        ))}
      </ul>
      {/* FOOTER */}
      <div className="card-button-container">
        <Button text="Seleccionar Plan" bgColor="#FF1C44" onClick={onClick} />
      </div>
    </div>
  )
}
