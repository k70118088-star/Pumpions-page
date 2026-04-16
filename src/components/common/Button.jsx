import React from 'react'

const Button = ({text , className}) => {
  return (
    <button className={`bg-[url('/assets/png/button.png')] cursor-pointer w-full max-w-47 sm:max-w-63.5 h-12.75 sm:h-16.5 ${className} bg-cover bg-center flex items-center justify-center font-normal text-[12px] sm:text-base leading-[229%] text-[#000000]`}>
        {text}
    </button>
  )
}

export default Button