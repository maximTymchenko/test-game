import React, { FC } from 'react'
import './Button.scss'

interface IButtonProps {
  children: string
  handleGame: () => void
}

const Button: FC<IButtonProps> = (props) => {
  return (
    <button onClick={props.handleGame} className="button">
      {props.children}
    </button>
  )
}

export default Button
