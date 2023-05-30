import { useContext, useEffect } from "react"

import Square from "./components/Square"
import { TURNS } from "./constans"

import WinnerModal from "./components/WinnerModal"
import {io} from 'socket.io-client'
import Board from "./components/Board"
import LoginModal from "./components/LoginModal"
import { GameContext } from "./Providers/GameProvider"

//const socket = io('http://localhost:3000');

function App() {

  const {showModal, board, turn, winner, setSocket,setBoard,
    setTurn,
    setWinner} = useContext(GameContext)

  /*  useEffect(() =>{
    const connectToSocket = () => {
      const newSocket = io('http://localhost:3000'); // Reemplaza con la URL de tu servidor Socket.io

      newSocket.on('connect', () => {
        console.log('Conectado al servidor Socket.io');
      });

      // Otros eventos o lógica de manejo de la conexión Socket.io

      setSocket(newSocket);
    };

    connectToSocket();
  },[])  */




  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  return (
    <main className="board">
  {/*  <LoginModal showModal={showModal}/> */}
      <h1>Tic tac toe</h1>
      <Board board={board} />
      <section className="turn">
     
         <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square> 
      </section>

      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  )
}

export default App
