import React from 'react'
import Container from '../ui/Container'
import Flex from '../ui/Flex'
import BannerShape from '../ui/BannerShape'
import SocialIcons from '../ui/SocialIcons'
import TypeWriterH1 from '../ui/TypeWriterH1'
import ParralaxEffect from '../ui/ParralaxEffect'

const Banner = () => {
  return (
    <div className='pt-[250px] text-black font-primary pb-[32px]'>
      {/* <Image src={html} className='absolute animate-pulse top-[10%] left-[10%]'
      width={140}
      height={140}
      alt="bannerShape" />
      <Image src={git} className='absolute animate-pulse top-[70%] left-[5%]'
      width={140}
      height={140}
      alt="bannerShape" />
      <Image src={express} className='absolute animate-pulse top-[40%] right-[5%]'
      width={140}
      height={140}
      alt="bannerShape" />
      <Image src={next} className='absolute animate-pulse top-[10%] right-[10%]'
      width={140}
      height={140}
      alt="bannerShape" />
      <Image src={js} className='absolute animate-pulse bottom-[10%] right-[10%]'
      width={140}
      height={140}
      alt="bannerShape" />
      <Image src={mongo} className='absolute animate-pulse bottom-[60%] right-[40%]'
      width={140}
      height={140}
      alt="bannerShape" />
      <Image src={socket} className='absolute animate-pulse bottom-[20%] right-[40%]'
      width={140}
      height={140}
      alt="bannerShape" />
      <Image src={react} className='absolute animate-pulse bottom-[40%] left-[5%]'
      width={140}
      height={140}
      alt="bannerShape" />
       */}

       <ParralaxEffect/>
      <Container>
        <Flex>
          <div className="left relative z-[10] w-1/2">
            <TypeWriterH1/>
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