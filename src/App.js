import setWinner  from './components/WinConditions'
import { Board } from './components/Board';
import React, { useState } from 'react';
import './App.css';

export const App = () => {
  const [board, setBoard] = useState([Array(9).fill(null)]);
  const [move, setMove] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const winner = setWinner(board[move]);
  const player = xIsNext ? 'X' : 'O';

  const handleClick = (i) => {
    const boardCheck = board.slice(0, move + 1);
    const current = boardCheck[move];
    const tiles = [...current];
    // return if winner or tile is already in use
    if(winner || tiles[i]) return;
    // player select tile 
    tiles[i] = player
    setBoard([...boardCheck, tiles]);
    setMove(boardCheck.length);
    setXisNext(!xIsNext);
  };

  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      <Board tiles={board[move]} onClick={handleClick} />
      <div className='info-wrapper'>
      <h3>{winner ? `Winner: ${winner}` : `Next player: ${player}`}</h3>
      </div>
      
    </div>
  );
}