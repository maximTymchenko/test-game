import React from 'react'
import './Button.scss'

interface IButtonProps {
  children: string
  handleGame: () => void
}

const Button = (props: IButtonProps) => {
  return (
    <button onClick={props.handleGame} className="button">
      {props.children}
    </button>
  )
}

export default Button
