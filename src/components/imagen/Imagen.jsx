export const Imagen = ({ src, alt = '', width = 100, height = 100 }) => {
  const style = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
    objectFit: 'contain',
    display: 'block',
  }

  return <img src={src} alt={alt} style={style} />
}
