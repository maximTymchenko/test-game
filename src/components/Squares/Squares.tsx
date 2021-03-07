import React from 'react'
import './Squares.scss'

interface ISquaresProps {
  squares: any[]
}

const Squares = (props: ISquaresProps) => {
  return (
    <div className="square__wrapper">
      {props.squares.map((square, index) => (
        <div key={index} className="square__item">
          {square}
        </div>
      ))}
    </div>
  )
}

export default Squares
