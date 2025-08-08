import { Header } from '../components/header/Header'
import imgFamily from '../assets/family.png'
import { Formulario } from '../components/formulario/Formulario'
import { Footer } from '../components/footer/Footer'

const Body = () => {
  return (
    <>
      <div className="grid-container pt-5">
        <div className="grid-item col-sm-6 hiden-sm hide-xs align-right">
          <img
            src={imgFamily}
            alt="#"
            style={{
              maxWidth: '480px',
              maxHeight: '560px',
              width: '100%',
              height: 'auto',
              display: 'block',
            }}
          />
        </div>
        <div className="grid-item col-xs-12 col-md-6 col-sm-6">
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
          <Body />
        </main>
        <Footer />
      </div>
    </>
  )
}
