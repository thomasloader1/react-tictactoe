import React, { useContext } from 'react'
import { GameContext } from '../Providers/GameProvider'

const LoginModal = ({showModal}) => {
    if(showModal === null) return null
    const { playerName, setPlayerName,playerIcon, setPlayerIcon} = useContext(GameContext)
  return (
    <section className="modal-container flex items-center justify-center">
    <div className="modal bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Crear sala</h2>
      <div className="mb-4">
        <label htmlFor="playerName" className="block mb-1">Nombre del jugador:</label>
        <input
          type="text"
          id="playerName"
          value={playerName}
          onChange={(evt) => setPlayerName(evt.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="playerIcon" className="block mb-1">Icono del jugador:</label>
        <input
          type="text"
          id="playerIcon"
          value={playerIcon}
          onChange={(evt) => setPlayerIcon(evt.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>
      <button onClick={() => {}} className="bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2">
        Crear sala
      </button>
    </div>
  </section>  
  )
}

export default LoginModal