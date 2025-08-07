import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Seguro } from '../pages/Seguro'
import { Resumen } from '../pages/Resumen'
import { Planes } from '../pages/Planes'

export const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Seguro />} />
      <Route path="/summary" element={<Resumen />} />
      <Route path="/plans" element={<Planes />} />
      <Route path="*" element={'Oops!!! ... Ruta no encontrada'} />
    </Routes>
  </BrowserRouter>
)
