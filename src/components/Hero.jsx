import Image from 'next/image'
import React from 'react'
import Button from './common/Button'

const Hero = () => {
  return (
    <div className="w-full bg-[url('/assets/webp/hero-bg.webp')] h-125 sm:h-162.5 md:h-187.5 lg:h-213.25 bg-cover bg-no-repeat bg-center">
       
       <Image 
         width={899} 
         height={225} 
         className='max-w-70 sm:max-w-100 md:max-w-150 lg:max-w-224.75 w-full mx-auto mt-32 lg:mt-37 bg-cover bg-center' 
         alt='img' 
         src={"/assets/png/pumpions.png"}
       />

       <div className='max-w-70 sm:max-w-100 md:max-w-212.5 lg:max-w-146.25 w-full mx-auto mt-6 sm:mt-8 md:mt-10 lg:mt-[26.28px] flex flex-col items-center justify-center sm:px-0 px-4'>
        
        <p className='text-[#000000] font-normal text-sm sm:text-base md:text-lg lg:text-xl leading-[180%] sm:leading-[200%] lg:leading-[229%] text-center'>
          OWN, SUPPORT & CELEBRATE ART.
        </p>

        <Button className={"mt-8 sm:mt-12 md:mt-14 lg:mt-18.75"} text={"GET STARTED"}/>
       </div>

    </div>
  )
}

export default Hero
