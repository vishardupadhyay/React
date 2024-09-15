import React , { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  let passwordDefaultLength = 8
  const [passwordLength, setPasswordLength] = useState(passwordDefaultLength)
  const [isNumberSelected, setIsNumberSelected] = useState(false)
  const [isCharsSelected, setIsCharsSelected] = useState(false)
  const [generatdPassword, setGeneratedPassword] = useState()
  let passwordReference = useRef(null)
  let copyButtonReference = useRef(null)

  const copyPasswordToClipBoard = useCallback(()=> {
    passwordReference.current?.select()
    passwordReference.current?.setSelectionRange(0, passwordLength)
    // copy to clipboard
    window.navigator.clipboard.writeText(generatdPassword)

    copyButtonReference.current.style.backgroundColor = '#0a790a'
    copyButtonReference.current.innerText = "Copied"
  }, [generatdPassword])

  

  const generateYourPassword = useCallback(() => {
    let generatorPassword = ""
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(isNumberSelected) chars += "0123456789"

    if(isCharsSelected) chars += "!@#$%^&*()[]{}~`"

    for (let index = 1; index <= passwordLength; index++) {
      let char = Math.floor(Math.random() * chars.length + 1)

      generatorPassword += chars.charAt(char)
    }

    setGeneratedPassword(generatorPassword)

  }, [passwordLength, isNumberSelected, isCharsSelected, setGeneratedPassword])
  
  useEffect(() => {
    generateYourPassword()
  }, [passwordLength, isNumberSelected, isCharsSelected, generateYourPassword])
  return (
    <>
      <div 
      className='w-full m-w-md mx-auto shadow-md 
      rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
        <h1 
        className='text-white text-center my-3'>Generator your password</h1>
        <div
        className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
          type='text'
          value = {generatdPassword}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readonly
          ref = {passwordReference}
          />
          <button
          onClick={copyPasswordToClipBoard}
          className='outline-none bg-blue-700 text-white
          px-3 py-0.5 shrink-0'
          ref = {copyButtonReference} > Copy </button>

        </div>
        <div
        className='flex text-sm gap-x-2'>
          <div
          className='flex items-center gap-x-1'>
            <input type="range"
            min= {6}
            max={50}
            value = {passwordLength}
            className='cursor-pointer'
            onChange={(e) => setPasswordLength(e.target.value)}
            />
            <label>Length : {passwordLength} </label>
          </div>
          <div className='flex items-center gap-x-1'>
              <input type="checkbox"
              defaultChecked = {isNumberSelected}
              id = "numberInput" 
              onChange={() => {
                setIsNumberSelected((prev) => !prev)
              }}/>
              <label> Also include numbers.</label>
          </div>
          <div className='flex items-center gap-x-1'>
              <input type="checkbox"
              defaultChecked = {isCharsSelected}
              id = "charsInput" 
              onChange={() => {
                setIsCharsSelected((prev) => !prev)
              }}/>
              <label>Also include special characters.</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
