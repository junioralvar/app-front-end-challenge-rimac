import './Pasos.css'
export const Pasos = ({ step2, onClick }) => {
  return (
    <>
      <div className="grid-container px-5 bg-morado">
        <div className="grid-item col-xs-6 hide-xs fw-bold">
          <span className="bg-number-active">1</span> Planes y coberturas - - -
        </div>
        <div
          className={`grid-item col-xs-6 hide-xs ${
            step2 ? 'fw-bold' : 'text-muted'
          }`}
        >
          <span className={`${step2 ? 'bg-number-active' : 'bg-number'}`}>
            2
          </span>{' '}
          Resumen
        </div>
      </div>
      <div className="grid-container px-5">
        <div className="grid-item col-xs-12 hide-xs text-morado fw-bold">
          <span className="icono-volver">{'<'}</span>
          <span className="text-volver" onClick={onClick}>
            Volver
          </span>
        </div>
      </div>
    </>
  )
}
