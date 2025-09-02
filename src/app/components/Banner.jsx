import React from "react";
import Container from "../ui/Container";
import Flex from "../ui/Flex";
import BannerShape from "../ui/BannerShape";
import SocialIcons from "../ui/SocialIcons";
import TypeWriterH1 from "../ui/TypeWriterH1";
import ParralaxEffect from "../ui/ParralaxEffect";

const Banner = () => {
  return (
    <div className="pt-[250px] text-black font-primary pb-[32px]">
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

      <ParralaxEffect />
      <Container>
        <Flex>
          <div className="left relative z-[10] xl:w-1/2 w-full">
            <TypeWriterH1 />
            <p className="mt-[32px] text-[#71717A] mb-[80px]">
              A Passionate MERN stack Dev and Tech Enthusiast from the Milky Way
              Galaxy, within the Orion Arm, orbiting the Sol (Sun) star, living
              on the third orbital planet named Earth(A Blue Planet), in the
              continent of Asia, in the country of Bangladesh, in the city of
              Dhaka — a negligible being in the grand scheme of the cosmos.
            </p>
            <SocialIcons />
          </div>
          <div className="right flex justify-end xl:w-1/2 w-full">
            <BannerShape />
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Banner;
