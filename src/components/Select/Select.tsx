import React, { FC } from 'react'
import './Select.scss'

const Select: FC = () => {
  return (
    <select className="select" name="game-mode" id="game-mode">
      <option value="Pick mode" disabled selected>
        Pick mode
      </option>
      <option className="select__option" value="east">
        Easy mode
      </option>
      <option className="select__option" value="normal">
        Normal mode
      </option>
      <option className="select__option" value="hard">
        Hard mode
      </option>
    </select>
  )
}

export default Select
