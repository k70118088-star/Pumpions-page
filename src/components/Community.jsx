"use client";
import Image from "next/image";
import React from "react";
import Icons from "./common/Icons";
import { cardsData } from "@/utils/helper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Community = () => {
  return (
    <div className="w-full lg:px-0 px-4 pt-10 sm:pt-40 pb-15.25 sm:pb-30.25 bg-[#28424F]">
      <p className="text-center text-[#ffffff] text-base sm:text-xl leading-[204.97%]">
        COMMUNITY + FUNDING + SUNSET
      </p>
      <h2 className="text-center text-[#ffffff] text-2xl sm:text-4xl leading-[204.97%] mt-5">
        SUNSET CLUB MEMBERSHIP PERKS
      </h2>
      <div className="mt-1.75 sm:mt-31.25 flex flex-wrap items-center justify-center gap-7.25">
        <Image
          src={"/assets/png/house.png"}
          alt="img"
          width={892}
          height={446}
        />

        {/* Grid */}
        <div className="max-sm:hidden grid grid-cols-2 gap-[7.21px]">
          {cardsData.map((item, index) => (
            <div
              key={index}
              className="max-w-69.5 lg:max-w-[181.89px] h-76.75 lg:h-[200.55px] leading-[154%] text-[#000000] hover:leading-[204.97%] w-full bg-img bg-[url('/assets/webp/membership-card-bg-white.webp')] hover:bg-[url('/assets/webp/membership-card-bg-orange.webp')] duration-300 bg-cover bg-center flex flex-col justify-center items-center hover:text-white"
            >
              <div className="w-full p-9 lg:p-5.75 mx-auto flex flex-col items-center justify-center">
                <Icons icon={item.icon} />
                <h3 className="mt-[18.7px] text-base lg:text-[12px] font-normal text-center">
                  {item.title}
                </h3>
                <p className="mt-[4.3px] text-center opacity-70 text-[10px] lg:text-[6.53px] font-normal leading-[204.97%]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="hidden max-sm:block w-full ">
          <Swiper
            spaceBetween={10}
            slidesPerView={1.3}
            grabCursor={true}
            modules={[Pagination]}
            pagination={{ clickable: true }}
            className="pb-16 my-swiper"
          >
            {cardsData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="max-w-69.5 h-76.75 leading-[154%] text-[#000000] hover:leading-[204.97%] w-full bg-img bg-[url('/assets/webp/membership-card-bg-white.webp')] hover:bg-[url('/assets/webp/membership-card-bg-orange.webp')] duration-300 bg-cover bg-center flex flex-col justify-center items-center hover:text-white">
                  <div className="w-full p-9 mx-auto flex flex-col items-center justify-center">
                    <img src={item.img} alt="img"/>
                    <h3 className="mt-[18.7px] text-base font-normal text-center">
                      {item.title}
                    </h3>
                    <p className="mt-[4.3px] text-center opacity-70 text-[10px] font-normal leading-[204.97%]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Community;
