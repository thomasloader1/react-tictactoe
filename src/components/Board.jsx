import React, { useContext } from 'react'
import Square from './Square'
import { checkWinner, checkEndGame } from '../logic/board'
import { GameContext } from '../Providers/GameProvider'
import { TURNS } from '../constans'
import confetti from 'canvas-confetti'

const Board = ({board}) => {
  const {winner,turn,setBoard,setTurn,setWinner} = useContext(GameContext)

 const updateBoard = (index) => {

    if (board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }
  return (
    <section className="game">
        {
          board.map((square, index) => {
            return (
              <Square key={index} index={index} updateBoard={updateBoard}>
                {square}
              </Square>
            )
          })
        }
      </section>
  )
}

export default Board