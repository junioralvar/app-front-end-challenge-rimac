import './Spinner.css'

export const ButtonLoader = ({ text, loading, onClick }) => {
  return (
    <div>
      <button onClick={onClick} disabled={loading}>
        {loading && <span className="spinner" />}
        {text}
      </button>
    </div>
  )
}
