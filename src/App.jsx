import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Previsao do tempo</h1>
      <input type='text' placeholder='Digite o nome da cidade' />
      <button>Buscar</button>
    </div>
  )
}

export default App
