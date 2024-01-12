import { useState } from 'react'
import {InputBox} from './components';
import useCurrencyInfo from './hooks/useCurrencyInfo'
function App() {
  const [amount, setAmount] = useState(0)
  const [convertedAmount, setConvertedAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")

  const currencyInfo = useCurrencyInfo(from) // passing the 'from' currency to get all converted data from it  

  const options = Object.keys(currencyInfo) // as inside json, all the currency is stored as 'key' so we need to get all keys

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat text-lg"
      style={{
        backgroundImage: `url('https://d32ijn7u0aqfv4.cloudfront.net/wp/wp-content/uploads/raw/SOBK0223015_1560x880_desktop.jpg')`,
      }}
    >
      <div className='w-full'>
        <div className='w-full max-w-lg mx-auto border border-gray-50 rounded-lg p-5 backdrop-blur-sm bg-black/40'>
          <form 
            onSubmit={(e)=> {
              e.preventDefault();
              convert(); // after the convert press/form submit the convert function will trigered
            }}
          >
            <div className='w-full mb-1'>
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                selectCurrency={from}
                onAmountChange={(amount)=> setAmount(amount)}
                onCurrencyChange={(currency)=>setFrom(currency)}
              />
            </div>
            <div className='relative w-full h-0.5'>
              <button 
                type='button'
                className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-500 text-white px-2 py-0.5 hover:bg-blue-900'
                onClick={swap}
              >
                Swap
              </button>
            </div>
            <div className='w-full mt-1 mb-4'>
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                selectCurrency={to}
                amountDisable 
                onCurrencyChange={(currency)=>setTo(currency)}
              />
            </div>
            <button type='submit' className='w-full bg-blue-500 text-white p-3 hover:bg-blue-900'>
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>

    </div>
  )
}

export default App
