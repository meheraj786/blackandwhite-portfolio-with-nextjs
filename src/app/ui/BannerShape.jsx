import Image from 'next/image'
import React from 'react'
import Bannershape from '../../../public/bannerShape.svg'
import BannerVector from '../../../public/bannerVector.svg'
import BannerImage from '../../../public/bannerImg.png'

const BannerShape = () => {
  return (
    <div className='relative'>
          <Image
      src={Bannershape}
      width={500}
      height={500}
      alt="bannerShape"
    />
    
          <Image
      src={BannerVector}
      className='absolute animate-pulse top-0 left-0'
      width={500}
      height={500}
      alt="bannerShape"
    />
          <Image
      src={BannerImage}
      className='absolute rounded-full top-[45%] left-1/2 -translate-1/2 '
      width={400}
      height={400}
      alt="bannerShape"
    />

    </div>
  )
}

export default BannerShape