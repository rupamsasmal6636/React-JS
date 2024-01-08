import { useCallback, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(6)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [spCharAllowed, setSpCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  /* In React, the useCallback hook is used to memoize functions. 
  The benefit of useCallback is to optimize performance by preventing unnecessary re-creation of functions in situations 
  where it's important to avoid unnecessary renders and improve the overall efficiency of your React components.
  Here is the syntax:
  useCallback(() => {
    // function logic
  }, [ dependencies ]); */

  /* As each time when we are changing the length, numberAllowed, spCharAllowed these we are calling passwordGenerator() 
  so it's better to wrap it inside useCallback() to memoize and optimize*/

 const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str +="0123456789"
    if(spCharAllowed) str+="@#$%&"
    for (let i = 1; i <= length; i++) {
      let index= Math.floor(Math.random()* str.length + 1)
      pass+=str.charAt(index);
    }
    setPassword(pass);
  }, [length,numberAllowed,spCharAllowed,setPassword])

  return (
    <>
      <h1>Password Generator {Math.random()}</h1>
    </>
  )
}

export default App
