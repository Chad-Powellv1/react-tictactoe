import Tiles from './Tiles';
import React from 'react';

export const Board = ({ tiles, onClick }) => {
  return (
    <div className='board'>
        {tiles.map((tile,i) => (
            <Tiles key={i} value={tile} onClick={() => onClick(i)} />
        ))}
    </div>
  )
}