import './CardHorizontal.css'
import IcUsers from '../../assets/IcUsers.png'

export const CardHorizontal = ({
  nombreCompleto,
  nroDoc,
  nroCel,
  plan,
  price,
}) => {
  return (
    <div className="card-horizontal">
      <div className="grid-container px-5">
        <div className="grid-item col-xs-12">
          PRECIOS CALCULADOS PARA:
        </div>
        <div className="grid-item col-xs-1">
          <img src={IcUsers} alt="icono" className="user-icon" />
        </div>
        <div className="grid-item col-xs-11">
          <h2 className="card-name">{nombreCompleto}</h2>
        </div>
        <div className="grid-item col-xs-12">
          <hr className="card-divider" />
        </div>
        <div className="grid-item col-xs-12">
          <div className="card-body">
            <p className="card-subtitle fw-bolder">Responsable de pago</p>
            <p className="card-subtitle">DNI: {nroDoc}</p>
            <p className="card-subtitle">Celular: {nroCel}</p>
            <p className="card-subtitle fw-bolder">Plan elegido</p>
            <p className="card-subtitle">{plan}</p>
            <p className="card-subtitle">
              Costo del Plan: $ {price} al mes
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}
