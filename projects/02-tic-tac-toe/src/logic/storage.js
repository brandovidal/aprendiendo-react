export const saveGameToStorage = ({ newBoard, newTurn }) => {
  window.localStorage.setItem('board', JSON.stringify(newBoard))
  window.localStorage.setItem('turn', newTurn)
}

export const resetGameStorage = () => {
  window.localStorage.removeItem('board')
  window.localStorage.removeItem('turn')
}

export const getBoardFromStorage = () => {
  return window.localStorage.getItem('board')
}

export const getTurnFromStorage = () => {
  return window.localStorage.getItem('turn')
}
