import './App.css'
import Card from './Components/Card'

function App() {
  
  let card1Details = {
    firstName : "Wanda",
    lastName : "Maximoff"
  }

  let card2Details = {
    firstName : "Black",
    lastName : "Widow"
  }

  return (
    <>
      <h1 className='bg-green-400 
      text-black p-4 rounded-xl mb-4'> Tailwind test </h1>

      <Card whoamI={card1Details}/>
      <Card whoamI={card2Details}/>
    </>
  )
}

export default App
