import { Button } from '../button/Button'
import { Modal } from '../modal/Modal'
import './Formulario.css'
import { useState } from 'react'

export const Formulario = () => {
  const [tipoDocumento, setTipoDocumento] = useState('DNI')
  const [numeroDocumento, setNumeroDocumento] = useState('')
  const [celular, setCelular] = useState('')
  const [aceptaPrivacidad, setAceptaPrivacidad] = useState(false)
  const [aceptaComerciales, setAceptaComerciales] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => setIsModalOpen(true)
  const handleCloseModal = () => setIsModalOpen(false)

  const modalTitle = 'Aplicación de Términos y Condiciones'
  const modalText = `Encontrarás información importante sobre tus derechos y obligaciones al
utilizar nuestros servicios. Cubren aspectos clave como la privacidad, la
seguridad y la conducta esperada. Te recomendamos encarecidamente
familiarizarte con estos términos para estar bien informado.

Si tienes preguntas o inquietudes sobre los 'Términos y Condiciones', no
dudes en ponerte en contacto con nuestro equipo de soporte. Estamos
aquí para ayudarte y garantizar que tu experiencia sea transparente y
segura.`

  return (
    <>
      <form className="formulario">
        <span className="tag">Seguro Salud Flexible</span>
        <h1>Creado para ti y tu familia</h1>
        <p>
          Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
          asesoría. 100% online.
        </p>

        <div className="input-group">
          <select
            value={tipoDocumento}
            onChange={(e) => setTipoDocumento(e.target.value)}
            className="text-pointer"
          >
            <option value="DNI">DNI</option>
            <option value="CE">CE</option>
          </select>

          <input
            type="text"
            placeholder="Nro. de documento"
            value={numeroDocumento}
            onChange={(e) => setNumeroDocumento(e.target.value)}
          />
        </div>

        <input
          type="tel"
          placeholder="Celular"
          value={celular}
          className="input-celular"
          onChange={(e) => setCelular(e.target.value)}
        />

        <label className="checkbox-group text-pointer">
          <input
            type="checkbox"
            checked={aceptaPrivacidad}
            onChange={(e) => setAceptaPrivacidad(e.target.checked)}
          />
          Acepto la Política de Privacidad
        </label>

        <label className="checkbox-group text-pointer">
          <input
            type="checkbox"
            checked={aceptaComerciales}
            onChange={(e) => setAceptaComerciales(e.target.checked)}
          />
          Acepto la Política Comunicaciones Comerciales
        </label>
        <p className="text-underline text-pointer" onClick={handleOpenModal}>
          Aplican terminos y condiciones
        </p>
        <Button text={'Cotiza aqui'} />
      </form>
      <Modal
        titulo={modalTitle}
        texto={modalText}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  )
}

// import './Formulario.css'

// export const Formulario = () => {
//   return (
//     <div className="formulario">
//       <span className="tag">Seguro Salud Flexible</span>
//       <h1>Creado para ti y tu familia</h1>
//       <p>
//         Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
//         asesoría. 100% online.
//       </p>

//       <div className="inputs">
//         <div className="input-group">
//           <select>
//             <option>DNI</option>
//             <option>RUC</option>
//           </select>
//           <input type="text" placeholder="Nro. de documento" />
//         </div>
//         <input type="tel" placeholder="Celular" />
//         <label>
//           <input type="checkbox" /> Acepto la Política de Privacidad
//         </label>
//         <label>
//           <input type="checkbox" /> Acepto la Política Comunicaciones
//           Comerciales
//         </label>
//         <a href="#">Aplican Términos y Condiciones.</a>
//         <button className="btn">Cotiza aquí</button>
//       </div>
//     </div>
//   )
// }
