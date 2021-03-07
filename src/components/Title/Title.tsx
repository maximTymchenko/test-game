import React from 'react'
import './Title.scss'

interface ITitleProps {
  children: string
}

const Title = (props: ITitleProps) => {
  return <h1 className="title">{props.children}</h1>
}

export default Title
