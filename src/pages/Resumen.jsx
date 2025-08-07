import { useNavigate } from 'react-router-dom'
import { Header } from '../components/header/Header'
import { useEffect, useState } from 'react'
import { CardHorizontal } from '../components/card/CardHorizontal'
import { Pasos } from '../components/pasos/Pasos'

export const Resumen = () => {
  const navigate = useNavigate()
  const [nombreCompleto, setNombreCompleto] = useState('')

  useEffect(() => {
    if (
      !(
        localStorage.getItem('birthDay') &&
        localStorage.getItem('lastName') &&
        localStorage.getItem('name') &&
        localStorage.getItem('nroDoc') &&
        localStorage.getItem('nroCel') &&
        localStorage.getItem('planName') &&
        localStorage.getItem('price')
      )
    ) {
      navigate('/', { replace: true })
    } else {
      setNombreCompleto(
        localStorage.getItem('name') + ' ' + localStorage.getItem('lastName')
      )
    }
  }, [])

  const volver = () => {
    localStorage.removeItem('planName')
    localStorage.removeItem('price')
    navigate('/plans')
  }

  return (
    <>
      <Header />
      <Pasos step2 onClick={() => volver()} />
      <div className="grid-container px-5">
        <div className="grid-item col-xs-6 hide-xs"></div>
        <div className="grid-item col-xs-12 px-4 ">
          <h1>Resumen del seguro</h1>
        </div>
        <div className="grid-item col-xs-12 px-4 ">
          <CardHorizontal
            nombreCompleto={nombreCompleto}
            nroDoc={localStorage.getItem('nroDoc')}
            nroCel={localStorage.getItem('nroCel')}
            plan={localStorage.getItem('planName')}
            price={localStorage.getItem('price')}
          />
        </div>
      </div>
    </>
  )
}
