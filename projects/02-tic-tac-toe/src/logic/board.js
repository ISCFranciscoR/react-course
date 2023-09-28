import { WINNER_COMBS } from "../constants";


export const checkWinner = (boardToCheck) => {
  for (const combo of WINNER_COMBS) {
    const [a, b, c] = combo;
    if (boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] && 
      boardToCheck[a] === boardToCheck[c]) {
      return boardToCheck[a];
        
    }
  }
  if (boardToCheck.every(square => square)) {
    return false;
  }
  return null;
}