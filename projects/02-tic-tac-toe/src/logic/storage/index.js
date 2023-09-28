
const localStorage = window.localStorage;
export const saveStoredGame = ({ board, turn }) => {
  localStorage.setItem('board', JSON.stringify(board));
  localStorage.setItem('turn', turn);
}

export const recoverStoredBoard = () => {
  return localStorage.getItem('board');
}

export const recoverStoredTurn = () => {
  return localStorage.getItem('turn'); 
}

export const removeStoredGame = () => {
  localStorage.removeItem('board');
  localStorage.removeItem('turn');
}