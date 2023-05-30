import React, { createContext, useState } from 'react';
import { TURNS } from '../constans';

// Crear el contexto
const GameContext = createContext();

// Crear el proveedor del contexto
const GameProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);
  const [winner, setWinner] = useState(null);
  const [showModal, setShowModal] = useState(true);
  const [playerName, setPlayerName] = useState('');
  const [playerIcon, setPlayerIcon] = useState('');

  // Renderizar el proveedor y pasar los estados al valor del contexto
  return (
    <GameContext.Provider
      value={{
        socket,
        setSocket,
        board,
        setBoard,
        turn,
        setTurn,
        winner,
        setWinner,
        showModal,
        setShowModal,
        playerName,
        setPlayerName,
        playerIcon,
        setPlayerIcon,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameProvider };
