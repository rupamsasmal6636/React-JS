import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  /* Old technique in js: 
  let count=0;
  const increase = ()=>{
    count+=1;
    console.log('increased: ',count);
  }
  const decrease = ()=>{
    count-=1
    console.log('decreased: ',count);
  }
  // This will be working fine in console but it will not effect the data in interface as we are using react..
  // for that we need to use hook -> here we are using useState hook
  */
  
  const [count, setCount] = useState(0) // here 0 is the initial value, it can be anything, count is variable to store data and setCount is function to change count
  const increase = ()=>{
    setCount(count+1)
  }
  const decrease = ()=>{
    setCount(count-1)
  }
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>This is a counting app</h1>
      <div className="card">
        <button onClick={increase}>
          Increase {count}
        </button>
        <br />
        <br />
        <button onClick={decrease}>
          Decrease {count}
        </button>
        <h2>
          The final count is : {count}
        </h2>
      </div>
    </>
  )
}

export default App
