/* eslint-disable react/prop-types */
import { Square } from './Square'

export function WinnerModal ({ winner, resetGame }) {
  if (!winner) return null

  const winnerText = winner === false ? 'Tie' : 'winner'

  return (
    <section className='winner'>
      <div className='text'>
        <h1>{winnerText}</h1>

        <header className='win'>{winner && <Square>{winner}</Square>}</header>

        <footer>
          <button onClick={resetGame}>Restart</button>
        </footer>
      </div>
    </section>
  )
}
