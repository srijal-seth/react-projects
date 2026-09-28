import { useState } from 'react'
import './App.css'
import useCurrencyInfo from './customHooks/useCurrencyInfo'

function App() {
  const [count, setCount] = useState(0)
  useCurrencyInfo("usd")
  return (
    <>
      <h1 className='text-4xl text-blue-400 text-center'>Hello World</h1>
    </>
  )
}

export default App
