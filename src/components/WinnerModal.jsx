import Square from './Square'

const WinnerModal = ({ winner, resetGame }) => {
    if (winner === null) return null
    return (

        <section className="winner">
            <div className="text">
                <h2>
                    {winner === false ? 'Empate' : 'Gano:'}
                </h2>
                <header className="win">
                    {winner && <Square>{winner}</Square>}
                </header>
                <footer>
                    <button onClick={resetGame}>Jugar otra vez</button>
                </footer>
            </div>
        </section>
    )
}

export default WinnerModal