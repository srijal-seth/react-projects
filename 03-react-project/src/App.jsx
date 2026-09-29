import { use, useState } from 'react'
import './App.css'
import { InputBox } from './components'
import useCurrencyInfo from './customHooks/useCurrencyInfo'

function App() {
  
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)


  return (
    <>
      <h1 className='text-4xl text-blue-400 text-center'>Hello World</h1>
    </>
  )
}

export default App
