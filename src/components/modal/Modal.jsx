import { useEffect, useRef } from 'react'
import './Modal.css'

export const Modal = ({ titulo, texto, isOpen, onClose }) => {
  const modalRef = useRef(null)

  // Efecto para manejar clics fuera del modal y cerrar el modal
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, onClose])

  // Si el modal no está abierto, no renderizamos nada
  if (!isOpen) {
    return null
  }

  return (
    <div className="modal-overlay">
      <div className="modal-container" ref={modalRef}>
        <div className="modal-header">
          <button className="modal-close" onClick={onClose}>
            &times;
          </button>
          <h2 className="modal-title">{titulo}</h2>
        </div>

        <div className="modal-body">
          <p>{texto}</p>
        </div>
      </div>
    </div>
  )
}
