import './Formulario.css'
import { useState } from 'react'

export const Formulario = () => {
  const [tipoDocumento, setTipoDocumento] = useState('DNI')
  const [numeroDocumento, setNumeroDocumento] = useState('')
  const [celular, setCelular] = useState('')
  const [aceptaPrivacidad, setAceptaPrivacidad] = useState(false)
  const [aceptaComerciales, setAceptaComerciales] = useState(false)

  return (
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
      <p className="text-underline text-pointer">
        Aplican terminos y condiciones
      </p>
    </form>
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
