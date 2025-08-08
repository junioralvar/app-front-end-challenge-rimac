import { useEffect, useState } from 'react'
import { Card } from '../components/card/Card'
import { Header } from '../components/header/Header'
import { getPlans } from '../api/plans.api'
import { DateTime } from 'luxon'
import { useNavigate } from 'react-router-dom'
import { CardVertical } from '../components/card/CardVertical'

import { Pasos } from '../components/pasos/Pasos'
import IcAddUserLight from '../assets/IcAddUserLight.png'
import IcProtectionLight from '../assets/IcProtectionLight.png'
import IcHospitalLight from '../assets/IcHospitalLight.png'
import IcHomeLight from '../assets/IcHomeLight.png'
import { API_PLANS } from '../const'

export const Planes = () => {
  const [selectedCard, setSelectedCard] = useState(null)
  const [planes, setPlanes] = useState()
  const [isValidUser, setIsValidUser] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const birthDay = localStorage.getItem('birthDay')
    const lastName = localStorage.getItem('lastName')
    const name = localStorage.getItem('name')

    if (!(birthDay && lastName && name)) {
      navigate('/', { replace: true })
    } else {
      setIsValidUser(true)
    }
  }, [])

  const fetchPlans = async (id) => {
    try {
      const birthDay = localStorage.getItem('birthDay')
      let edadActual = 0
      if (birthDay) {
        const fechaNacimiento = DateTime.fromFormat(birthDay, 'dd-MM-yyyy')
        const fechaActual = DateTime.local()
        if (fechaNacimiento.isValid) {
          const diferenciaEnAnios = fechaActual.diff(fechaNacimiento, 'years')
          edadActual = Math.floor(diferenciaEnAnios.years)
        }
      }
      const data = await getPlans()
      const planesFiltrados = data.list.filter((plan) => edadActual <= plan.age)
      let planesFinales = planesFiltrados
      if (id === 2) {
        planesFinales = planesFiltrados.map((plan) => ({
          ...plan,
          price: plan.price * 0.95,
        }))
      }
      setPlanes({ list: planesFinales })
    } catch (error) {
      alert(error + '\nError en la API:\n' + API_PLANS)
      console.error('Ocurrió un error al cargar los planes:', error)
    }
  }
  const handleCardSelect = (cardId) => {
    setSelectedCard(cardId)
    cardId === 'card1' ? fetchPlans(1) : fetchPlans(2)
  }

  const planSeleccionado = (item) => {
    localStorage.setItem('planName', item.name)
    localStorage.setItem('price', item.price)
    navigate('/summary', { replace: true })
  }

  // const volver = () => {
  //   localStorage.removeItem('birthDay')
  //   localStorage.removeItem('lastName')
  //   localStorage.removeItem('name')
  //   localStorage.removeItem('planName')
  //   localStorage.removeItem('price')
  //   navigate('/')
  // }
  if (!isValidUser) return <>Cargando...</>
  return (
    <>
      <Header />
      {/* <Pasos step2={false} onClick={() => volver()} /> */}
      <div className="grid-container px-5">
        <div className="grid-item col-xs-6 hide-xs"></div>
        <div className="grid-item col-xs-12 text-center">
          <h1>{localStorage.getItem('name')} ¿Para quién deseas cotizar?</h1>
          <p>Selecciona la opción que se ajuste más a tus necesidades.</p>
        </div>
        <div className="grid-item col-xs-12 col-md-6 justify-content-center">
          <Card
            iconUrl={IcProtectionLight}
            title="Para mí"
            text="Cotiza tu seguro de salud y agrega familiares si así lo deseas."
            selected={selectedCard === 'card1'}
            onSelect={() => handleCardSelect('card1')}
          />
        </div>
        <div className="grid-item col-xs-12 col-md-6 justify-content-center">
          <Card
            iconUrl={IcAddUserLight}
            title="Para alguien más"
            text="Realiza una cotización para uno de tus familiares o cualquier persona."
            selected={selectedCard === 'card2'}
            onSelect={() => handleCardSelect('card2')}
          />
        </div>
        {planes &&
          planes.list.map((item, index) => (
            <div
              className="grid-item col-xs-12 col-md-4 justify-content-center"
              key={index}
            >
              <CardVertical
                icon={
                  item.name === 'Plan en Casa y Clínica'
                    ? IcHospitalLight
                    : IcHomeLight
                }
                title={item.name}
                subtitle1="COSTO DEL PLAN"
                subtitle2={'$ ' + item.price + ' al mes'}
                description={item.description}
                onClick={() => planSeleccionado(item)}
              />
            </div>
          ))}
      </div>
    </>
  )
}
