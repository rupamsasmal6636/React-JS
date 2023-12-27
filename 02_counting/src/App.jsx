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
    // normal struff
    setCount(count+1)

    // some interesting stuff regarding interview:
    // what will happen if we call the method multiple times? 
    setCount(count+1)
    setCount(count+1)
    setCount(count+1)
    setCount(count+1)
    /* The reason the count is not updated +4 times as you might expect is because the setCount function in React is asynchronous. 
    When you call setCount, React schedules an update to the state, but the actual state update may not happen immediately. 
    React batches state updates for performance reasons, and as a result, the count value inside your increase function 
    might not be updated immediately after each call to setCount.
    */
    setCount((count)=>count+1)
    setCount((count)=>count+1)
    setCount((count)=>count+1)
    /* This code will work correctly. When you use the functional form of setCount and pass a function that takes the previous state 
    as an argument, React ensures that you are always working with the latest state. 
    This approach helps to avoid potential issues related to the asynchronous nature of state updates in React.
    */
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
