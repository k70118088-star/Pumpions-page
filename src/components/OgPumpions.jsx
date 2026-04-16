"use client";
import Image from "next/image";
import React from "react";
import Icons from "./common/Icons";
import { teamData } from "@/utils/helper";
import Button from "./common/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const OgPumpions = () => {
  return (
    <div className="w-full relative bg-[#28424F] pt-16.5 sm:pt-45.75">
      <Image
        src={"/assets/png/ogbottom-img.png"}
        alt="img"
        width={1440}
        height={149}
        className="absolute z-[-1] top-160 sm:top-192 h-37.25 w-full"
      />

      <div className="max-w-285 mx-auto flex flex-col items-center justify-center">
        <h4 className="font-normal text-[#FFFFFF] text-2xl sm:text-[32px] leading-[202%]">
          OG PUMPIONS
        </h4>

        {/* Mobile Slider */}
        <div className="sm:hidden w-full mt-19.75">
          <Swiper
            spaceBetween={15}
            breakpoints={{
              0: {
                slidesPerView: 1.5,
              },
              480: {
                slidesPerView: 2,
              },
            }}
            grabCursor={true}
            modules={[Pagination]}
            pagination={{ clickable: true }}
            className="pb-16 my-slider"
          >
            {teamData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="max-w-[226.55px] w-full mx-auto">
                  <Image
                    src={item.img}
                    alt="og img"
                    width={226.55}
                    height={208}
                    className="max-w-[226.55px] w-full h-52"
                  />
                  <h5 className="mt-7.75 text-center font-normal text-2xl leading-[202%] text-white">
                    {item.name}
                  </h5>
                  <p className="text-center font-normal text-base leading-[202%] text-white/70">
                    {item.role}
                  </p>
                  <div className="flex justify-center mt-4 items-center gap-[11.26px]">
                    <Icons icon={"dis"} />
                    <Icons icon={"tiw"} />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Grid */}
        <div className="hidden sm:grid w-full max-w-285 gap-22.25 mt-19.75 grid-cols-2 lg:grid-cols-4">
          {teamData.map((item, index) => (
            <div key={index} className="max-w-[226.55px] mx-auto w-full">
              <Image
                src={item.img}
                alt="og img"
                width={226.55}
                height={208}
                className="max-w-[226.55px] w-full h-52"
              />
              <h5 className="mt-7.75 text-center font-normal text-2xl leading-[202%] text-white">
                {item.name}
              </h5>
              <p className="text-center font-normal text-base leading-[202%] text-white/70">
                {item.role}
              </p>
              <div className="flex justify-center mt-4 items-center gap-[11.26px]">
                <Icons icon={"dis"} />
                <Icons icon={"tiw"} />
              </div>
            </div>
          ))}
        </div>

        <Button text={"WE ARE HIRING"} className={"mt-15.25 z-1"} />
      </div>
    </div>
  );
};

export default OgPumpions;
