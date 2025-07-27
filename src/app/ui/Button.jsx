import React from 'react'

const Button = ({children, className}) => {
  return (
    <button className={`bg-black cursor-pointer hover:bg-white border hover:text-black transition-colors text-white px-5 py-4 rounded-[4px] ${className}`}>{children}</button>
  )
}

export default Button