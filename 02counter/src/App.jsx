import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(10);

  const addValue = ()=>{
    if(counter<20){
      // setCounter(counter+1);
      setCounter(prevCounter => prevCounter+1);
      setCounter(prevCounter => prevCounter+1);
      setCounter(prevCounter => prevCounter+1);
      setCounter(prevCounter => prevCounter+1);
    }
  }
  const remValue = ()=>{
    if(counter>0){
      setCounter(counter-1);
    }
  }

  return (
    <>
      <h1>chai aur react</h1>
      <h3>counter value: {counter}</h3>

      <button onClick={addValue}>add value {counter}</button>
      <br />
      <button onClick={remValue}>remove value {counter} </button>
    </>
  )
}

export default App
