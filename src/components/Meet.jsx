import Image from 'next/image'
import React from 'react'

const Meet = () => {
  return (
    <div className='w-full lg-px-0 px-4'>
      <div className="w-full bg-[url('/assets/png/meet-img.png')] md:bg-[url('/assets/png/meet-bg.png')] lg:bg-[url('/assets/webp/paragraph-bg.webp')] bg-contain bg-no-repeat bg-center max-w-285 mx-auto mt-20 sm:mt-28 md:mt-32 lg:mt-37.5 mb-6 sm:mb-8 md:mb-10 lg:mb-10.75 min-h-83.25 px-4 sm:px-6 md:px-8 lg:px-10.5 py-8 sm:py-10 md:py-8 lg:py-14"
      >
        <div className='text-center mx-auto md:max-w-full max-w-76.25'>
          <h2 className="font-normal text-xl sm:text-3xl md:text-3xl lg:text-4xl leading-[180%] sm:leading-[200%] lg:leading-[229%] text-[#FFFFFF]">
            MEET THE PUMPIONS
          </h2>

          <p className='font-normal text-sm md:text-sm lg:text-sm mt-2 sm:mt-2.5 leading-[180%] sm:leading-[200%] lg:leading-[229%] text-[#FFFFFF] px-2 sm:px-4 md:px-6 lg:px-0'>
            They’re an exclusive collection of 1,000 utility-enabled (& weirdly familiar) PFPs. Each Pumpion unlocks a sunset club membership, exclusive merch, allowlists, giveaways, raffles and contributes to supporting artists & animations studios all over the world.
          </p>
        </div>
      </div>

      <Image
        src={"/assets/png/Vector.png"}
        alt='img'
        width={1440}
        height={194}
        className='w-full h-auto'
      />
    </div>
  )
}

export default Meet;