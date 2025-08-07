import './Formulario.css'
import { modalText, modalTitle } from '../../const'
import { Button } from '../button/Button'
import { Modal } from '../modal/Modal'
import { useState } from 'react'
import { getUser } from '../../api/user.api'
import { ButtonLoader } from '../button/ButtonLoader'
import { useNavigate } from 'react-router-dom'

const allTipoDocumento = [
  { id: 1, nombre: 'DNI' },
  { id: 2, nombre: 'RUC' },
]

const bodyForms = {
  tipoDocumentoId: 1,
  nroDoc: '',
  nroCel: '',
  polPriv: false,
  polCom: false,
}

export const Formulario = () => {
  const [body, setBody] = useState({ ...bodyForms })
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [errors, setErrors] = useState({})
  const [loader, setLoader] = useState(false)
  const navigate = useNavigate()
  localStorage.clear()

  const fetchUser = async () => {
    try {
      const data = await getUser()
      localStorage.setItem('name', data.name)
      localStorage.setItem('lastName', data.lastName)
      localStorage.setItem('birthDay', data.birthDay)
      localStorage.setItem('nroDoc', 30216147)
      localStorage.setItem('nroCel', 5130216147)
      navigate('/plans', { replace: true })
    } catch (error) {
      console.error(error)
    }
  }

  const handleOpenModal = () => setIsModalOpen(true)
  const handleCloseModal = () => setIsModalOpen(false)

  const handleChangeBody = (e) => {
    const { name, value, type, checked } = e.target
    setBody({
      ...body,
      [name]: type === 'checkbox' ? checked : value,
    })
    setErrors({ ...errors, [name]: false }) // Limpia error al escribir
  }

  const validarDatos = async (e) => {
    e.preventDefault()
    const newErrors = {}
    let aux = Number(body.tipoDocumentoId)
    body.tipoDocumentoId = aux

    // Validar checkboxes
    if (!body.polPriv) newErrors.polPriv = true
    if (!body.polCom) newErrors.polCom = true

    // Validar nroDoc según tipoDocumento
    if (body.tipoDocumentoId == 1 && body.nroDoc.length !== 8) {
      newErrors.nroDoc = '*El documento ingresado no es válido'
    }
    if (body.tipoDocumentoId == 2 && body.nroDoc.length !== 11) {
      newErrors.nroDoc = '*El documento ingresado no es válido'
    }

    // Validar nroCel
    if (body.nroCel.length < 1) {
      newErrors.nroCel = '*El celular ingresado no es válido'
    }

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      setLoader(true)

      // Validación de usuario ficticia
      const userIsValid =
        body.tipoDocumentoId === 1 &&
        body.nroDoc === '30216147' &&
        body.nroCel === '5130216147'

      if (userIsValid) {
        try {
          // Ejecuta en paralelo: el fetch y los 3 segundos de espera
          await Promise.all([
            fetchUser(),
            new Promise((resolve) => setTimeout(resolve, 3000)),
          ])
        } catch (error) {
          console.error(error)
        } finally {
          setLoader(false)
        }
      } else {
        setTimeout(() => {
          setErrors({
            nroCel: 'El usuario ingresado no existe',
          })
          setLoader(false)
        }, 3000)
      }
    } else {
      setLoader(false)
    }
  }

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
            value={body.tipoDocumentoId}
            name="tipoDocumentoId"
            onChange={handleChangeBody}
            className="text-pointer"
          >
            {allTipoDocumento.map((item) => (
              <option value={item.id} key={item.id}>
                {item.nombre}
              </option>
            ))}
          </select>

          <input
            type="number"
            placeholder="Nro. de documento"
            name="nroDoc"
            value={body.nroDoc}
            onChange={handleChangeBody}
            className={errors.nroDoc ? 'input-error' : ''}
          />
        </div>
        {errors.nroDoc && <span className="error-text">{errors.nroDoc}</span>}

        <div className="input-wrapper">
          <input
            type="number"
            placeholder="Celular"
            value={body.nroCel}
            className={`input-celular ${errors.nroCel ? 'input-error' : ''}`}
            name="nroCel"
            onChange={handleChangeBody}
          />
          {errors.nroCel && <span className="error-text">{errors.nroCel}</span>}
        </div>

        <label
          className={`checkbox-group text-pointer ${
            errors.polPriv ? 'checkbox-error' : ''
          }`}
        >
          <input
            type="checkbox"
            checked={body.polPriv}
            name="polPriv"
            onChange={handleChangeBody}
          />
          Acepto la Política de Privacidad
        </label>

        <label
          className={`checkbox-group text-pointer ${
            errors.polCom ? 'checkbox-error' : ''
          }`}
        >
          <input
            type="checkbox"
            checked={body.polCom}
            name="polCom"
            onChange={handleChangeBody}
          />
          Acepto la Política Comunicaciones Comerciales
        </label>

        <p className="text-underline text-pointer" onClick={handleOpenModal}>
          Aplican terminos y condiciones
        </p>
        {loader ? (
          <ButtonLoader text="Cotizando..." loading={true} />
        ) : (
          <Button text={'Cotiza aqui'} onClick={validarDatos} />
        )}
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
