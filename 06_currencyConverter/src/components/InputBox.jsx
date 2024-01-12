// In this I've created this inputBox component to re-use it twise

import React, { useId } from 'react'

function InputBox(
  {
    label="", 
    className="", // not needed here
    amount=0, 
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false, // not needed here
    onAmountChange,
    onCurrencyChange,
  }) 
{
  const amoutInputId= useId() // useId is used to get unique id for "<input>" and map with label
  return (
    <div className={`bg-white p-3 rounded-lg text-lg flex mb-2 ${className}`}>
        <div className='w-1/2'>
            <label htmlFor="{amoutInputId}" className='text-black mb-2 inline-block'>
                {label}
            </label>
            <input 
                id={amoutInputId}
                type="number" 
                className='outline-none w-full bg-transparent p-1.5 border-2 border-black/40 rounded-md'
                placeholder='Amount'
                disabled={amountDisable}
                value={amount}
                onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))} //onAmountChange is passing first to ensure the method is present or not, then it is called
            />
        </div>
        <div className='w-1/2 flex flex-wrap justify-end text-right'>
            <p className=' text-black/40 mb-2 w-full'>
                Currency Type
            </p>
            <select 
                className='rounded-lg p-1 bg-gray-100 cursor-pointer outline-none' 
                value={selectCurrency} 
                onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)} // same logic as onAmountChange
                disabled={currencyDisable}
            >
                {currencyOptions.map((currency)=>( // to show all the options
                    <option key={currency} value={currency}> 
                        {currency}
                    </option>
                    // here we need to use 'key' for performance purpose, else the performance of react will drop significantly
                ))}
            </select>
        </div>
    </div>
  )
}

export default InputBox;