import React, { useId } from 'react'

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = 'usd',
  amountDisable = false,
  currencyDisable = false,
  className = '',
}) {
  const amountInputId = useId()

  return (
    <div className={`bg-white text-sm rounded-lg p-3 flex ${className}`}>
      <div className='w-1/2'>
        <label
          htmlFor={amountInputId}
          className='text-black/40 mb-2 inline-block'
        >
          {label}
        </label>
        <input
          type='number'
          id={amountInputId}
          className='outline-none py-1.5 bg-transparent w-full'
          placeholder='Amount'
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className='w-1/2 flex flex-wrap justify-end text-right'>
        <p className='text-black/40 mb-2 w-full'>Currency Type</p>
        <select
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          className='outline-none px-1 py-1 bg-gray-100 cursor-pointer rounded-lg'
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default InputBox
