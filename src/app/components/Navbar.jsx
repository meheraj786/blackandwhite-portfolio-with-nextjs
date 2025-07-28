import React from 'react'
import Container from '../ui/Container'
import Flex from '../ui/Flex'
import Logo from '../ui/Logo'
import Button from '../ui/Button'
import NavItems from '../ui/NavItems'

const Navbar = () => {
  return (
    <div className='py-4 fixed top-0 z-[9999] w-full bg-white px-8 text-primary font-primary my-6'>
      <Container>
        <Flex>
          <Logo/>
          <ul className='flex text-[20px] justify-center items-center gap-x-[32px] font-semibold'>
            <NavItems/>
          </ul>
          <Button>Resume</Button>
        </Flex>
      </Container>
    </div>
  )
}

export default Navbar