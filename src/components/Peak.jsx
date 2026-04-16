import React from "react";
import Carousol from "./common/Carousol";
import Image from "next/image";

const Peak = () => {
  return (
    <div className="w-full ">
      <div
        className="w-full relative h-[600px] md:h-[800px] lg:h-[1000px] bg-center bg-cover"
        style={{ backgroundImage: "url('/assets/webp/familier-bg.webp')" }}
      >
        <Image 
          src={"/assets/webp/sunset-club-top-layer.webp"} 
          alt="img" 
          width={1440} 
          height={147} 
          className="w-full hidden lg:flex absolute top-[500px] lg:top-232 min-h-36.75"
        />
        <div className="max-w-285 mx-auto w-full text-center px-4">
          <p className="pt-24 sm:pt-32 md:pt-40 lg:pt-55 text-[#FFFFFF] font-normal text-base md:text-lg lg:text-xl leading-[180%] sm:leading-[200%] lg:leading-[204.97%]">
            PEAK AT THE SUNSET
          </p>

          <h2 className="text-[#FFFFFF] font-normal text-2xl sm:text-3xl md:text-3xl lg:text-4xl mt-3 sm:mt-4 md:mt-5 leading-[180%] sm:leading-[200%] lg:leading-[204.97%]">
            THEY SURE LOOK FAMILIAR
          </h2>
        </div>
        <Carousol />
      </div>
    </div>
  );
};

export default Peak;
