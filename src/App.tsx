import React, { useState, useEffect } from 'react'
import Select from './components/Select'
import Button from './components/Button'
import Title from './components/Title'
import PositionRow from './components/PositionRow'
import Squares from './components/Squares'

export type TSelectTitles = {
  id: number
  title: string
  defaulValue: string
}[]

const App = () => {
  const selectTitles: TSelectTitles = [
    {
      id: 1,
      title: 'Easy mode',
      defaulValue: 'easy',
    },

    {
      id: 2,
      title: 'Normal mode',
      defaulValue: 'normal',
    },
    {
      id: 3,
      title: 'Hard mode',
      defaulValue: 'hard',
    },
  ]

  const [data, setData] = useState<any>([])
  const [toggleGame, setToggleGame] = useState<boolean>(false)
  const [fieldSize, setFieldSize] = useState<string>('')

  useEffect(() => {
    fetch('http://demo1030918.mockable.io/')
      .then((response) => response.json())
      .then((resp) => setData(resp))
  }, [])

  const [squares, setSquares] = useState<any[][]>([])

  // toggle game mode
  const getSelectValue = (e: any): void => {
    if (e.target.value === 'Easy mode') {
      if (data.easyMode !== null && data.easyMode !== undefined) {
        const easyMode = Number(Object.values(data.easyMode))
        setSquares(Array(5 * easyMode).fill(null))
      }
      setFieldSize('easy')
    } else if (e.target.value === 'Normal mode') {
      if (data.normalMode !== null && data.normalMode !== undefined) {
        const normalMode = Number(Object.values(data.normalMode))

        setSquares(Array(10 * normalMode).fill(null))
      }
      setFieldSize('medium')
    } else if (e.target.value === 'Hard mode') {
      if (data.hardMode !== null && data.hardMode !== undefined) {
        const hardMode = Number(Object.values(data.hardMode))
        setSquares(Array(15 * hardMode).fill(null))
      }
      setFieldSize('hard')
    }
  }

  const handleGame = (): void => {
    setToggleGame(!toggleGame)
  }

  return (
    <div className="app">
      <div className="app__header">
        <Select getSelectValue={getSelectValue} selectTitles={selectTitles} />
        <Button handleGame={handleGame}>{toggleGame ? 'Stop' : 'Start'}</Button>
        <Squares
          squares={squares}
          toggleGame={toggleGame}
          fieldSize={fieldSize}
        />
      </div>
      <div className="app__wrapper">
        <Title>Hover squares</Title>
        <PositionRow />
      </div>
    </div>
  )
}

export default App
