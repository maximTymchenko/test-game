import React from 'react'
import './Select.scss'
import { TSelectTitles } from '../../App'

interface ISelectProps {
  selectTitles: TSelectTitles
  getSelectValue?: (e: any) => void
}

const Select = (props: ISelectProps) => {
  return (
    <select
      onChange={props.getSelectValue}
      className="select"
      name="game-mode"
      id="game-mode"
    >
      <option defaultValue="Pick mode" disabled selected>
        Pick mode
      </option>
      {props.selectTitles.map((option) => (
        <option
          key={option.id}
          className="select__option"
          defaultValue={option.defaulValue}
        >
          {option.title}
        </option>
      ))}
    </select>
  )
}

export default Select
