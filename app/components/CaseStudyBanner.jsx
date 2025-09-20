"use client"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";

const CaseStudyBanner = ({title}) => {
  useGSAP(()=> (
    gsap.from("h1", {
      opacity: 0,
      delay: 0.4
    })
  ))
  return (
    <div className="h-[75vh] w-screen">
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
          <div className="absolute h-full w-full flex justify-center items-center bottom-0 left-0 px-6 py-5 md:px-10 md:py-10 lg:px-15">
            <h1 className="text-4xl lg:text-[4.6vw] font-playfair-regular text-white text-center">{title}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyBanner;
