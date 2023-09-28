import { useState } from "react";
import Square from "./components/Square";
import party from "party-js";
import { TURNS } from "./constants";
import { checkWinner } from "./logic/board";
import Winner from "./components/Winner";
import { recoverStoredBoard, recoverStoredTurn, removeStoredGame, saveStoredGame } from "./logic/storage";

function App() {
  const [board, setBoard] = useState(() => {
    const savedBoard = recoverStoredBoard();
    if (savedBoard) {
      return JSON.parse(savedBoard);
    }
    return Array(9).fill(null);
  });
  const [turn, setTurn] = useState(() => {
    const savedTurn = recoverStoredTurn();
    return savedTurn ?? TURNS.X;
  });
  /**
   * null no hay ganador
   * true hay ganador
   * false juego terminado, empate
   */
  const [winner, setWinner] = useState(null);

  const updateBoard = (index, ref) => {
    if (winner || board[index]) return;

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    const newWinner = checkWinner(newBoard);
    if (newWinner !== null) {
      setWinner(newWinner);
      newWinner && party.confetti(ref.current, {
        count: party.variation.range(20, 40),
        size: party.variation.range(0.8, 1.2),
        shapes: ['star', 'roundedSquare', 'circle']
      });
    } else {
      setTurn(newTurn);
      saveStoredGame({ board: newBoard, turn: newTurn });
    }
  }

  const handleReset = () => {
    setWinner(null);
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    removeStoredGame();
  }

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <section className="game">
        {
          board.map((square, index) => {
            return <Square key={index}
              index={index}
              updateBoard={updateBoard}>
              {square}
            </Square>
          })
        }
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
      <Winner winner={winner} handleReset={handleReset} />
    </main>
  )
}

export default App
