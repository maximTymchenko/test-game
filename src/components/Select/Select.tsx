import React from 'react'
import './Select.scss'

const Select = () => {
  return (
    <select className="select" name="game-mode" id="game-mode">
      <option defaultValue="Pick mode" disabled selected>
        Pick mode
      </option>
      <option className="select__option" defaultValue="east">
        Easy mode
      </option>
      <option className="select__option" defaultValue="normal">
        Normal mode
      </option>
      <option className="select__option" defaultValue="hard">
        Hard mode
      </option>
    </select>
  )
}

export default Select
