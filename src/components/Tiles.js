import React from 'react'

const Tiles = ({ value, onClick }) => {
    const style = value ? `tiles ${value}` : `tiles`;
  return (
    <button className={style} onClick={onClick}>
      {value}
    </button>
  )
}

export default Tiles;