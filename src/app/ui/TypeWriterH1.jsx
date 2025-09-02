"use client"

import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const TypeWriterH1 = () => {
  return (
    <h1 className='xl:text-[48px] text-[28px]'>
  Hello I'm <span className='font-black'>Meheraj H. </span>
  <br />
  <span className='font-black'>
    <Typewriter
      words={['FrontEnd Developer', 'BackEnd Developer', 'MERN Stack Developer']}
      loop={0}
      cursor
      cursorStyle='_'
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1000}
    />
  </span>
  <br />
  Basen In <span className='font-black'>Bangladesh</span>
</h1>
  )
}

export default TypeWriterH1