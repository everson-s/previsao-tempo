import { useState, useRef } from 'react'
import axios from 'axios'
import './App.css'
import WeatherInformation from './components/WeatherInformation/WeatherInformation'
import WeatherInformation5Days from './components/WeatherInformation5Days/WeatherInformation5Days'

function App() {
  const inputRef = useRef()
  const [weather, setWeather] = useState()
  const [weather5Days, setWeather5Days] = useState()

  async function searchCity(){
    
    const city = inputRef.current.value
    const key = "23f150ab5386b6c40024af907b7859f4"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
    const url5Days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`

    const ApiData = await axios.get(url)
    const ApiInfo5Days = await axios.get(url5Days)

    setWeather5Days(ApiInfo5Days.data)
    setWeather(ApiData.data)
  }

  return (
    <div className='container'>
      <h1>Previsão do tempo</h1>
      <input ref={inputRef} type='text' placeholder='Digite o nome da cidade' />
      <button onClick={searchCity}>Buscar</button>

      
      {weather && <WeatherInformation weather={weather}/>}
      {weather5Days && <WeatherInformation5Days weather5Days={weather5Days}/>}
    </div>
  )
}

export default App
