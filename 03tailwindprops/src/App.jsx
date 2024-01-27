import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Cards'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username:"Abhi",
    age: 21
  }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind</h1>
      
      {/* <Card channel="chaiaurcode" someObj={myObj} /> */}
      <Card username="chaiaurcode" btnText="click kro na" />
      <Card username="heybae"  />
    </>
  )
}

export default App
