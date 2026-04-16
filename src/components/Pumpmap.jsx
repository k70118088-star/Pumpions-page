import Image from "next/image";
import React from "react";

const Pumpmap = () => {
  return (
    <div className="w-full bg-[#28424F]">
      <div className="max-w-285 w-full mx-auto flex flex-col-reverse lg:flex-row items-center justify-center gap-[57.64px] px-4">
        <Image
          src={"/assets/webp/pumpmap-img.webp"}
          alt="img"
          width={407.36}
          height={374}
          className="max-w-[407.36px] w-full h-93.5"
        />
        <div>
          <h4 className="text-[#FFFFFF] text-center lg:text-left font-normal text-2xl md:text-4xl leading-[204.97%]">
            PUMPMAP
          </h4>
          <p className="pt-4 max-w-174.75 w-full font-normal text-[#FFFFFF] text-center lg:text-left text-sm leading-[229%]">
            We want to avoid overpromising from the get go. For that, we are
            approaching roadmaps slightly differently. Pumpions will continue to
            evolve overtime as a brand and move closer to its biggest goal. To
            empower individuals with art.
          </p>
          <p className="pt-4 max-w-174.75 w-full font-normal text-[#FFFFFF] text-center lg:text-left text-sm leading-[229%]">
            By owning a Pumpion you will have access to a vibrant, positive, and
            rewarding community, meet like-minded and kind human beings, and
            most importantly, you will be supporting and celebrating the next
            generation of artists and animations studios.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pumpmap;
