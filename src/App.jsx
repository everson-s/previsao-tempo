import { useState, useRef } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const inputRef = useRef()

  async function searchCity(){
    const city = inputRef.current.value
    const key = "23f150ab5386b6c40024af907b7859f4"
    url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`

    const ApiData = await axios.get(url)

    console.log(city)
  }

  return (
    <div>
      <h1>Previsao do tempo</h1>
      <input ref={inputRef} type='text' placeholder='Digite o nome da cidade' />
      <button onClick={searchCity}>Buscar</button>
    </div>
  )
}

export default App
