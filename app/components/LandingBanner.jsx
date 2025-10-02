"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React, { useRef } from "react";

const LandingBanner = ({ title }) => {
  const landingBannerRef = useRef(null);
  useGSAP(() =>
    gsap.from(landingBannerRef.current, {
      opacity: 0,
      delay: 0.4,
    })
  );
  return (
    <div className="h-[30vh] lg:h-[60vh] w-screen">
      <div className="relative h-full w-full">
        <div className="absolute h-full w-full">
          <div className="relative h-full w-full z-[-1]">
            <Image
              className="object-cover"
              src="/hero-bg.png"
              alt="Hero-bg"
              fill
            />
          </div>
          {/* <div className="relative lg:bottom-0 left-0 px-6 py-5 md:px-10 md:py-10 lg:px-15 w-full">
            <div className="relative h-full w-full flex justify-center items-center">
              <h1
                ref={landingBannerRef}
                className="text-5xl lg:text-7xl xl:text-8xl font-poppins-semibold text-white text-center md:text-left"
              >
                {title}
              </h1>
            </div>
          </div> */}
          <div className="absolute top-0 lg:bottom-0 h-full w-full flex items-center justify-center md:px-10 md:py-10 lg:px-15">
            <h1
                ref={landingBannerRef}
                className="text-4xl lg:text-7xl xl:text-8xl font-poppins-semibold text-white text-center md:text-left"
              >
                {title}
              </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingBanner;
