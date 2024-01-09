import { useCallback, useEffect, useRef, useState } from 'react'


function App() {
  const [length, setLength] = useState(6)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [spCharAllowed, setSpCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const [isCopied, setIsCopied] = useState(false);

  // for optimization purpose here we are using useCallback: *
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
  }, [length,numberAllowed,spCharAllowed])
  // Note: it's important to note that including setPassword in the dependencies array may lead to an infinite loop. **
  

  // passwordGenerator() // -> we can't call this function like this way, here we need to use useEffect hook: ***
  
  useEffect(()=>{
    passwordGenerator();
  },[length,numberAllowed,spCharAllowed]) 
  // However, including passwordGenerator in the dependencies array could lead to an infinite loop, as explained in the previous response.
  
  // useRef hook: useRef is a React Hook that lets you reference a value that’s not needed for rendering.
  const passwordRef=useRef(null)

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select() // this is use to selecct the text after clicking the copy button (for styling)
    // we can also select between a range 
    // passwordRef.current?.setSelectionRange(0,3)
  
    window.navigator.clipboard.writeText(password)
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  },[password])

  return (
    <>
      <div className='w-full max-w-xl mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-600'>
        <h1 className='text-white text-center my-2 text-2xl'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
          type="text" 
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          ref={passwordRef}
          readOnly
          />
          <button 
          onClick={copyPasswordToClipboard}
          className='bg-blue-600 text-white px-3 py-1 shrink-0 hover:bg-blue-800 focus:outline-none focus:shadow-outline transition duration-300'>
            {isCopied? '✅copied!' : 'copy'}
          </button>
        </div>
        <div className=' flex gap-x-4 text-lg'>
          <div className='flex items-center gap-x-1'> 
            <input 
            type="range"  
            min={4}
            max={50}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'> 
            <input 
            type="checkbox"  
            defaultChecked={numberAllowed}
            className='cursor-pointer'
            id='numberInput'
            onChange={()=>{
              setNumberAllowed((prev) => !prev);
            }}
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'> 
            <input 
            type="checkbox"  
            defaultChecked={spCharAllowed}
            className='cursor-pointer'
            id='spCharInput'
            onChange={()=>{
              setSpCharAllowed((prev)=> !prev);
            }}
            />
            <label htmlFor='spCharInput'>Special character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App


/* 
* In React, the useCallback hook is used to memoize functions. 
The benefit of useCallback is to optimize performance by preventing unnecessary re-creation of functions in situations 
where it's important to avoid unnecessary renders and improve the overall efficiency of your React components.
Here is the syntax:
useCallback(() => {
  // function logic
}, [ dependencies ]); 

As each time when we are changing the length, numberAllowed, spCharAllowed these we are calling passwordGenerator() 
so it's better to wrap it inside useCallback() to memoize and optimize 
*/

/*
** This is because every time setPassword is called, it will recreate the passwordGenerator function, triggering the useEffect again, 
which in turn calls setPassword and so on.
But here setPassword is not occuring any issue, but if we pass password then it lead to an infinite loop.
*/

/* 
*** By using this Hook, you tell React that your component needs to do something after render. 
React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates.
*/