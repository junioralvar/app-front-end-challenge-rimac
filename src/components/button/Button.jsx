import './Button.css'

export const Button = ({ text, onClick, bgColor = '#000' }) => {
  return (
    <div>
      <button onClick={onClick} style={{ backgroundColor: bgColor }}>
        {text}
      </button>
    </div>
  )
}
