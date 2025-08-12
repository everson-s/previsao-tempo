import { useState, useRef } from 'react'
import axios from 'axios'
import './App.css'
import WeatherInformation from './components/WeatherInformation/WeatherInformation'

function App() {
  const inputRef = useRef()
  const [weather, setWeather] = useState({})

  async function searchCity(){
    
    const city = inputRef.current.value
    const key = "23f150ab5386b6c40024af907b7859f4"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`

    const ApiData = await axios.get(url)

    setWeather(ApiData.data)
  }

  return (
    <div>
      <h1>Previsao do tempo</h1>
      <input ref={inputRef} type='text' placeholder='Digite o nome da cidade' />
      <button onClick={searchCity}>Buscar</button>

      <WeatherInformation weather={weather}/>
    </div>
  )
}

export default App
