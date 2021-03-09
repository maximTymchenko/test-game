import React from 'react'
import './Squares.scss'

type servicesParametres = {
  id: number
  isChecked: boolean
}

const Squares = (props) => {
  // const squaresArray = props.squares

  const servicesList = [
    { id: 0, isChecked: false },
    { id: 1, isChecked: false },
    { id: 2, isChecked: false },
    { id: 3, isChecked: false },
    { id: 4, isChecked: false },
    { id: 5, isChecked: false },
    { id: 6, isChecked: false },
    { id: 7, isChecked: false },
    { id: 8, isChecked: false },
    { id: 9, isChecked: false },
    { id: 10, isChecked: false },
    { id: 11, isChecked: false },
    { id: 12, isChecked: false },
    { id: 13, isChecked: false },
    { id: 14, isChecked: false },
    { id: 15, isChecked: false },
    { id: 16, isChecked: false },
    { id: 17, isChecked: false },
    { id: 18, isChecked: false },
    { id: 19, isChecked: false },
    { id: 20, isChecked: false },
    { id: 21, isChecked: false },
    { id: 22, isChecked: false },
    { id: 23, isChecked: false },
    { id: 24, isChecked: false },
  ]

  const handleMouseOver = (event): void => {
    if (event.target.style.background == 'blue') {
      event.target.style.background = 'white'
    } else {
      event.target.style.background = 'blue'
    }
  }

  return (
    <div className="square__wrapper">
      {servicesList.map((services, index) => {
        return (
          <div
            className="square__item"
            key={index}
            onMouseOver={(event) => {
              props.toggleGame && handleMouseOver(event)
            }}
          />
        )
      })}
    </div>
  )
}
export default Squares
