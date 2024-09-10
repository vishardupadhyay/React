import { useState } from 'react'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(0)

  const increaseTheValue = () => {

    if(counter >= 20) {
      setCounter(20)
    }
    else{
      setCounter(counter++)
    }
  }

  const decreaseTheValue = () => {
    if(counter <= 0){
      setCounter(0);
    }
    else{
      setCounter(counter--)
    }
  }

  return (
    <>
      <h1> Chai aur React</h1>
      <h2> Counter Value : {counter} </h2>

      <button onClick={increaseTheValue}> Increase Value {counter}</button>
      <br />
      <button onClick={decreaseTheValue}>Decrease Value {counter}</button>

      <p>This is footer : { counter } </p>
    </>
  )
}

export default App
