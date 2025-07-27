import React from 'react'
import Container from '../ui/Container'
import Flex from '../ui/Flex'
import Logo from '../ui/Logo'

const Footer = () => {
  return (
    <div className='py-[24px] text-white text-[12px] bg-black'>
      <Container>
        <Flex>
          <Logo className="!text-white"/>
          <div>
            <span>@ 2025 Meheraj H.</span><br />
           <span> Made With NextJs</span>
          </div>
        </Flex>
      </Container>
    </div>
  )
}

export default Footer