import {useState} from "react"

function App() {

  const [color, setColor] = useState('olive')

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor : color}}>
      <div className="fixed flex flex-wrap 
      justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap 
        justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
            <button
            name = "red"
            onClick={(e) => setColor(e.target.name)}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor : "red"}}> 
              RED 
            </button>
            <button
            name = "green"
            onClick={(e) => setColor(e.target.name)}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor : "green"}}> 
              GREEN 
            </button>
            <button
            name = "blue"
            onClick={(e) => setColor(e.target.name)}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor : "blue"}}> 
              BLUE 
            </button>
            <button
            name = "olive"
            onClick={(e) => setColor(e.target.name)}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor : "olive"}}> 
              OLIVE 
            </button>
            <button
            name = "yellow"
            onClick={(e) => setColor(e.target.name)}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{backgroundColor : "yellow"}}> 
              YELLOW 
            </button>
            <button
            name = "magenta"
            onClick={(e) => setColor(e.target.name)}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor : "magenta"}}> 
              MAGENTA 
            </button>
            <button
            name = "black"
            onClick={(e) => setColor(e.target.name)}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor : "black"}}> 
              BLACK 
            </button>
        </div>
      </div>
    </div>
  )
}

export default App
