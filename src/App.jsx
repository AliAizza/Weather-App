import { useState } from 'react'
import './App.css'
import WeatherApp from './components/Weather src/WeatherApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <WeatherApp/>
    </>
  )
}

export default App
