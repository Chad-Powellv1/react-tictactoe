import React, { useState } from 'react';
import Winner from './WinCondtions'
import Board from './components/Board';
import { }
import './App.css';

export const App = () => {
  const [board, setBoard] = useState([Array(9).fill(null)]);
  const [move, setMove] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const winner = 
  return (
    <div className="app">

    </div>
  );
}