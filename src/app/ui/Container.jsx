import React from 'react'

const Container = ({children}) => {
  return (
    <div className='xl:w-[1280px] w-full xl:px-0 mx-auto'>{children}</div>
  )
}

export default Container