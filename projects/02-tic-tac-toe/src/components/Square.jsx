// eslint-disable-next-line react/prop-types
export const Square = ({ children, isSelected, uptateBoard, index }) => {
  const className = isSelected ? 'square is-selected' : 'square'

  const handleClick = () => {
    uptateBoard(index)
  }

  return (
    <div className={className} onClick={handleClick}>
      {children}
    </div>
  )
}
