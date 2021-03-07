import React from 'react'
import './Button.scss'

interface IButtonProps {
  children: string
}

const Button = (props: IButtonProps) => {
  return <button className="button">{props.children}</button>
}

export default Button
