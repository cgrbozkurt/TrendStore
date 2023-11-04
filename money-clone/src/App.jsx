import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import ShowProduct from './Components/ShowProduct'

function App() {
  const [money, setMoney]=useState(300000)

  return (
    <>
     <Header money={money} />
     <ShowProduct money={money}/>
    </>
  )
}

export default App
