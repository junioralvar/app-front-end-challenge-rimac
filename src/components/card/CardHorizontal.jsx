import { iconUser } from '../../const'
import './CardHorizontal.css'

export const CardHorizontal = ({
  nombreCompleto,
  nroDoc,
  nroCel,
  plan,
  price,
}) => {
  return (
    <div className="card-horizontal">
      <h4 className="card-title">Precios calculados para:</h4>
      <div className="card-header px-4 pt-1">
        <img src={iconUser} alt="icono" />
        <h2 className="card-title">{nombreCompleto}</h2>
      </div>
      <hr className="card-divider" />
      <p className="card-subtitle fw-bolder">Responsable de pago</p>
      <p className="card-subtitle">DNI: {nroDoc}</p>
      <p className="card-subtitle">Celular: {nroCel}</p>
      <p className="card-subtitle fw-bolder">Plan elegido</p>
      <p className="card-subtitle">{plan}</p>
      <p className="card-subtitle">Costo del Plan: $ {price} al mes</p>
    </div>
  )
}
