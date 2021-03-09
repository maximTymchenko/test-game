import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Select from './components/Select'
import Button from './components/Button'
import Title from './components/Title'
import PositionRow from './components/PositionRow'
import Squares from './components/Squares'

const App = () => {
  const [data, setData] = useState([])
  const [toggleGame, setToggleGame] = useState<boolean>(false)

  const handleGame = (): void => {
    setToggleGame(!toggleGame)
  }

  useEffect(() => {
    fetch('http://demo1030918.mockable.io/')
      .then((response) => response.json())
      .then((resp) => setData(resp))
  }, [])
  console.log(data)

  return (
    <div className="app">
      <div className="app__header">
        <Select />
        <Button handleGame={handleGame}>{toggleGame ? 'Stop' : 'Start'}</Button>
        <Squares toggleGame={toggleGame} />
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
