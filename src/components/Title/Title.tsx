import React, { FC } from 'react'
import './Title.scss'

interface ITitleProps {
  children: string
}

const Title: FC<ITitleProps> = (props) => {
  return <h1 className="title">{props.children}</h1>
}

export default Title
