import { useCallback, useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  // State to set the length of the password
  const [length, setLength] = useState(8);

  //State to determine whether numbers and special characters are allowed
  const [numberAllow, setNumberAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);

  const [password, setPassword] = useState("");

  //useRef hook
  const passwordRef = useRef(null);  

  const passwordGenerator  = useCallback(()=>{
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

    if(numberAllow) str += "1234567890"
    if(charAllow) str += "!@#$%^&*()"

    for(let i=1; i<=length; i++){
      let charIndex = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(charIndex)
    }    
    setPassword(pass)
  }, [length, numberAllow, charAllow, setPassword])

  const copyPasswordToClip = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,20);
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(()=>{
    passwordGenerator();
  }, [length, numberAllow, charAllow, passwordGenerator])

  return (
    <>
      <div className="text-orange-500 bg-gray-700 w-full max-w-md mx-auto shadow-md rounded-lg my-8 py-3 px-3">
        <h1 className='text-white my-3'>Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 ">
          <input 
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly
          ref={passwordRef}
          />
          <button className='outline-none bg-blue-700 px-3 text-white shrink-0 py-0.5' onClick={copyPasswordToClip}>Copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1 ">
            <input
              type="range"
              min={2}
              max={50}
              value={length}
              className='cursor-pointer'
              onChange={(event)=>{setLength(event.target.value)}}
            />
            <label >Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox" 
              defaultChecked = {numberAllow}
              id='numberInput'
              onChange={()=>{
                setNumberAllow((prev) => !prev);
              }}
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox" 
              defaultChecked = {numberAllow}
              id='charInput'
              onChange={()=>{
                setCharAllow((prev) => !prev);
              }}
            />
            <label htmlFor='charInput' >Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
