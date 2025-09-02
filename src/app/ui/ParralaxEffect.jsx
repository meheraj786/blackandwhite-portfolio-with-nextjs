"use client"

import React, { useRef, useEffect } from 'react'
import Image from 'next/image'
import html from '../../../public/html.png'
import git from '../../../public/git.png'
import express from '../../../public/express.png'
import next from '../../../public/next.png'
import js from '../../../public/js.png'
import mongo from '../../../public/mongo.png'
import socket from '../../../public/socket.png'
import react from '../../../public/react.png'

const ParralaxEffect = () => {
    const parallaxRef = useRef(null);
    const pos = useRef({ x: 0, y: 0 });
    const target = useRef({ x: 0, y: 0 });
    const animationFrame = useRef(null);

    const handleMouseMove = (e) => {
        const rect = parallaxRef.current.getBoundingClientRect();
        target.current.x = (e.clientX - rect.left - rect.width / 2) * 0.1;
        target.current.y = (e.clientY - rect.top - rect.height / 2) * 0.1;
    };

    const handleMouseLeave = () => {
        target.current.x = 0;
        target.current.y = 0;
    };

    const animate = () => {
        pos.current.x += (target.current.x - pos.current.x) * 0.1;
        pos.current.y += (target.current.y - pos.current.y) * 0.1;

        parallaxRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;

        animationFrame.current = requestAnimationFrame(animate);
    }

    useEffect(() => {
        animationFrame.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame.current);
    }, []);

    return (
        <div
            ref={parallaxRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="absolute hidden xl:block z-[0] top-0 left-0 w-full h-full"
            style={{ willChange: "transform" }}
        >
            <Image src={html} className='absolute  top-[10%] left-[10%]' width={140} height={140} alt="bannerShape" />
            <Image src={git} className='absolute  top-[70%] left-[5%]' width={140} height={140} alt="bannerShape" />
            <Image src={express} className='absolute  top-[40%] right-[5%]' width={140} height={140} alt="bannerShape" />
            <Image src={next} className='absolute  top-[10%] right-[10%]' width={140} height={140} alt="bannerShape" />
            <Image src={js} className='absolute  bottom-[10%] right-[10%]' width={140} height={140} alt="bannerShape" />
            <Image src={mongo} className='absolute  bottom-[60%] right-[40%]' width={140} height={140} alt="bannerShape" />
            <Image src={socket} className='absolute  bottom-[20%] right-[40%]' width={140} height={140} alt="bannerShape" />
            <Image src={react} className='absolute  bottom-[40%] left-[5%]' width={140} height={140} alt="bannerShape" />
        </div>
    )
}

export default ParralaxEffect
