"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { row1, row2 } from "@/utils/helper";

const Carousol = () => {
  return (
    <div
      className="w-full">

      {/* Row 1 → Left to Right */}
      <Swiper
        modules={[Autoplay]}
        loop={true}
        slidesPerView="auto"
        spaceBetween={26}
        speed={1500}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: true, 
        }}
        className="mt-[50px] lg:mt-[104px] max-w-315 ml-0!"
      >
        {[...row1, ...row1].map((img, i) => (
          <SwiperSlide key={i} className="!w-auto">
            <Card img={img} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Row 2 → Right to Left */}
      <Swiper
        modules={[Autoplay]}
        loop={true}
        slidesPerView="auto"
        spaceBetween={26}
        speed={1500}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: false, 
        }}
        className="mt-6 max-w-315 mr-0!"
      >
        {[...row2, ...row2].map((img, i) => (
          <SwiperSlide key={i} className="!w-auto">
            <Card img={img} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const Card = ({ img }) => {
  return (
    <div className=" flex items-center justify-center">
      <img src={img} alt="char" className="w-26.75 md:w-43.75 h-29.5 md:h-48.25 object-contain" />
    </div>
  );
};

export default Carousol;
