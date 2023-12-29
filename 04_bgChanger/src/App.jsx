import { useState } from "react"

function App() {
  const [color, setColor]=useState("black");
  return (
    <div className="w-full h-screen " style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-10 inset-x-0">
        <button className="flex flex-wrap justify-center bg-white shadow-2xl gap-6 px-4 py-2 rounded-lg m-2 border-solid border-2 border-black" onClick={()=> setColor("white")}>
          White
        </button>
        <button className="flex flex-wrap justify-center bg-green-600 shadow-lg gap-6 px-4 py-2 rounded-lg m-2 border-solid border-2 border-black" onClick={()=> setColor("green")}>
          Green
        </button>
        <button className="flex flex-wrap justify-center bg-red-600 shadow-lg gap-6 px-4 py-2 rounded-lg m-2 border-solid border-2 border-black" onClick={()=> setColor("red")}>
          Red
        </button>
        <button className="flex flex-wrap justify-center bg-blue-700 shadow-lg gap-6 px-4 py-2 rounded-lg m-2 border-solid border-2 border-black" onClick={()=> setColor("blue")}>
          Blue
        </button>
        <button className="flex flex-wrap justify-center bg-orange-400 shadow-lg gap-6 px-4 py-2 rounded-lg m-2 border-solid border-2 border-black" onClick={()=> setColor("orange")}>
          Orange
        </button>
      </div>
    </div>
  )
}

export default App
