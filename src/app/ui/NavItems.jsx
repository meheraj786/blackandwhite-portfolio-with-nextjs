"use client"

import React from 'react'

const NavItems = () => {
  return (
    <>
      <li><a href="#about" className="cursor-pointer hover:text-gray-400">About Me</a></li>
      <li><a href="#skill" className="cursor-pointer hover:text-gray-400">Skills</a></li>
      <li><a href="#projects" className="cursor-pointer hover:text-gray-400">Project</a></li>
      <li><a href="#contact" className="cursor-pointer hover:text-gray-400">Contact Me</a></li>
    </>
  )
}

export default NavItems