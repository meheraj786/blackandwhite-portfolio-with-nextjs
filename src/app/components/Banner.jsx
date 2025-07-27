import React from 'react'
import Container from '../ui/Container'
import Flex from '../ui/Flex'
import BannerShape from '../ui/BannerShape'
import SocialIcons from '../ui/SocialIcons'

const Banner = () => {
  return (
    <div className='pt-[250px] text-black font-primary pb-[32px]'>
      <Container>
        <Flex>
          <div className="left w-1/2">
            <h1 className='text-[48px]'>
              Hello I'm <span className='font-black'>Meheraj H. </span> 
              <span className='font-black'>FrontEnd </span><span className='text-outline font-black'>Developer </span>
              Basen In <span className='font-black'>Bangladesh</span>
              
            </h1>
            <p className='mt-[32px] text-[#71717A] mb-[80px]'>I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.</p>
            <SocialIcons/>
          </div>
          <div className="right flex justify-end w-1/2">
          <BannerShape/>
          </div>
        </Flex>
      </Container>
    </div>
  )
}

export default Banner