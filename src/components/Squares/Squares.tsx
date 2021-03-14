import React, { ChangeEvent, FC } from 'react'
import './Squares.scss'

interface ISquaresProps {
  squares: any[][]
  toggleGame: boolean
  fieldSize?: string
}

const Squares: FC<ISquaresProps> = (props) => {
  const squaresArray = props.squares

  const handleMouseOver = (event: ChangeEvent<HTMLSelectElement>): void => {
    if (event.target.style.background === 'blue') {
      event.target.style.background = 'white'
    } else {
      event.target.style.background = 'blue'
    }
  }

  return (
    <div className={`square__wrapper square__wrapper--${props.fieldSize}`}>
      {squaresArray.map((square, index) => {
        return (
          <div
            className="square__item"
            key={index}
            onMouseOver={(event: any): void => {
              props.toggleGame && handleMouseOver(event)
            }}
          />
        )
      })}
    </div>
  )
}
export default Squares
