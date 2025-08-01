import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Seguro } from '../pages/Seguro'
import { Resumen } from '../pages/Resumen'
import { Planes } from '../pages/Planes'

export const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Seguro />} />
      <Route path="/resumen" element={<Resumen />} />
      <Route path="/planes" element={<Planes />} />
      <Route path="*" element={'Oops!!! ... Ruta no encontrada'} />
    </Routes>
  </BrowserRouter>
)
