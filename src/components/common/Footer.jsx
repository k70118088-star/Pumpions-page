import Image from 'next/image'
import React from 'react'
import Icons from './Icons'

const Footer = () => {
  return (
    <div className="w-full bg-[url('/assets/webp/footer-bg.webp')] max-h-83.75 bg-center bg-cover bg-no-repeat">
            <div className='max-w-285 w-full mx-auto mt-22.5 flex flex-col items-center justify-center'>
                <Image src={"/assets/png/pumpions.png"} alt='img' width={322.61} height={81} className='w-48.25 sm:w-[322.61px] h-10.5 sm:h-20.25'/>
                <p className='max-w-[198px] sm:max-w-106.25 text-white/70 text-[8px] sm:text-[12px] leading-[202%] font-normal text-center'>Suspendisse vestibulum a tellus sit amet mattis</p>
                <div className='flex mt-6 items-center justify-center gap-2.75'>
                    <Icons icon={"disco"}/>
                    <Icons icon={"twit"}/>
                    <Icons icon={"me"}/>
                </div>
            </div>
    </div>
  )
}

export default Footer