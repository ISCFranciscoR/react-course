export default function Winner({ winner, handleReset }) {
  if (winner === null) return null;
  const winnerText = winner === false ? 'Empate' : 'Ganador';
  return (
    <section className="winner">
        <div className="winner-text">
          <span>{winnerText}</span>
          <span>{winner}</span>
        </div>
        <div className="winner-options">
          <button className="restart-game" onClick={handleReset}>
            <i className="fas fa-undo fa-2x">&nbsp;</i>
          </button>
        </div>
    </section>
  )
}
