"use client";
import { faqData } from "@/utils/helper";
import React, { useRef, useState } from "react";
import Icons from "./common/Icons";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative bg-transparent  pt-20 sm:pt-28 md:pt-32 lg:pt-35.25 pb-13.25 sm:pb-32 md:pb-36 lg:pb-42.75 w-full px-4">
      <div className="bg-[#2c4552] absolute -z-2 top-0 left-0 w-full h-full"></div>
      <div className="max-w-3xl w-full relative z-10 mx-auto flex flex-col items-center justify-center">
        <h6 className="font-normal mb-6 sm:mb-8 md:mb-10 lg:mb-11.5 text-2xl sm:text-3xl md:text-3xl lg:text-[32px] leading-[180%] sm:leading-[200%] lg:leading-[202%] text-white">
          FAQ
        </h6>

        <div className="w-full max-w-[735px] mx-auto">
          <div className="flex flex-col gap-2.5 sm:gap-5 md:gap-6">
            {faqData.map((item, i) => (
              <div key={i} className="w-full">
                {/* Top question row */}
                <div
                  className="bg-[url('/assets/png/faq-img.png')] bg-contain bg-center bg-no-repeat min-h-[43px] sm:min-h-[65px] md:min-h-[71px] w-full min-w-0 sm:min-w-[500px] md:min-w-[735px] pr-1.5 min-[375px]:pl-3 sm:pl-6 md:pl-[40px] pl-1.5 min-[375px]:pr-3 sm:pr-5 md:pr-[31px] cursor-pointer"
                  onClick={() => toggleFAQ(i)}
                >
                  <div className="flex items-center justify-between py-3">
                    <p className="font-normal text-[9px] sm:text-base text-black sm:pr-2">
                      {item.title}
                    </p>

                    <button
                      className={`w-6 h-6 sm:w-9 sm:h-9 md:w-10.25 md:h-10.25 rounded-full flex items-center justify-center bg-gradient-to-b from-[#E8770E] to-[#FCA32B] duration-300 ease-in transform transition-all`}
                    >
                      <span
                        className={`inline-block transition-all duration-300 ${openIndex === i ? "rotate-180 opacity-0" : "rotate-0 opacity-100"}`}
                      >
                        <Icons icon={item.add} />
                      </span>

                      <span
                        className={`absolute inline-block w-[18px] sm:w-[20px] md:w-[21px] h-1 bg-white rounded transition-all duration-300 ${openIndex === i ? "opacity-100 rotate-0" : "opacity-0 -rotate-180"}`}
                      ></span>
                    </button>
                  </div>
                </div>

                {/* Smooth animated dropdown */}
                <div
                  ref={(el) => (contentRefs.current[i] = el)}
                  style={{
                    height:
                      openIndex === i
                        ? contentRefs.current[i]?.scrollHeight + "px"
                        : "0px",
                  }}
                  className="overflow-hidden transition-all duration-500 ease-in-out"
                >
                  <p className="text-xs sm:text-sm text-white mt-2 px-1 sm:px-0">
                    {item.paragraph}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
