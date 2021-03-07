import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Select from './components/Select'
import Button from './components/Button'
import Title from './components/Title'
import PositionRow from './components/PositionRow'
import Squares from './components/Squares'

const App = () => {
  // const [data, setData] = useState([])

  const squares: any[] = Array(25).fill(null)

  const data = [
    {
      easyMode: {
        field: 5,
      },
      normalMode: {
        field: 10,
      },
      hardMode: {
        field: 15,
      },
    },
  ]

  useEffect(() => {
    fetch('http://demo1030918.mockable.io/')
      .then((response) => response.json())
      .then((json) => console.log(json))
  }, [])

  return (
    <div className="app">
      <div className="app__header">
        <Select />
        <Button>Start</Button>
        <Squares squares={squares} />
      </div>
      <div className="app__wrapper">
        <Title>Hover squares</Title>
        <PositionRow />
        <PositionRow />
        <PositionRow />
        <PositionRow />
      </div>
    </div>
  )
}

export default App
