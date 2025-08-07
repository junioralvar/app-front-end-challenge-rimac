import { Header } from '../components/header/Header'
import { Imagen } from '../components/imagen/Imagen'
import imgFamily from '../assets/family.png'
import { Formulario } from '../components/formulario/Formulario'
import { Footer } from '../components/footer/Footer'

const BodyMovil = () => {}

const BodyDesktop = () => {
  return (
    <>
      <div className="grid-container pt-5">
        <div className="grid-item col-xs-6 hide-xs align-right">
          <Imagen src={imgFamily} width={480} height={560} alt="Imagen" />
        </div>
        <div className="grid-item col-xs-6 hide-xs">
          <Formulario />
        </div>
      </div>
    </>
  )
}

export const Seguro = () => {
  return (
    <>
      <div
        style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
      >
        <main style={{ flexGrow: 1 }}>
          <Header />
          <BodyDesktop />
          <BodyMovil />
        </main>
        <Footer />
      </div>
    </>
  )
}
