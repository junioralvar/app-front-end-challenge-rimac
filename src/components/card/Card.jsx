import './Card.css'

export const Card = ({
  width = '256px',
  height = '212px',
  title = 'Título de la tarjeta',
  text = 'Este es un párrafo descriptivo de ejemplo.',
  icon = '⭐',
  iconUrl,
  selected = false,
  onSelect,
}) => {
  return (
    <div
      className={`card ${selected ? 'card-selected' : ''}`}
      style={{ width, height }}
      onClick={onSelect}
    >
      <div className="card-header">
        <div className={`custom-check ${selected ? 'checked' : ''}`}>
          {selected && <span className="checkmark">✓</span>}
        </div>
      </div>
      <div className="card-icon">
        {iconUrl ? (
          <img src={iconUrl} alt="icono" className="card-img-icon" />
        ) : (
          icon
        )}
      </div>
      <h3 className="card-title">{title}</h3>
      <p className="card-text">{text}</p>
    </div>
  )
}
