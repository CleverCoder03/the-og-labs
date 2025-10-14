import React from "react";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Process from "../components/Process";
import Clients from "../components/Clients";
import LandingBanner from "../components/LandingBanner";
import IntroPara from "../components/IntroPara";
import Marquee from "react-fast-marquee";
import ImageCard from "../components/ImageCard";
import Image from "next/image";
import { AboutIntroPara } from "@/lib";

const values = [
  {
    id: 1,
    value: "Data Driven Creativity",
    imgSrc: "/value-1.png",
    bgColor: "bg-[#0E0652]",
    desc: "We believe that data doesn't limit creativity — it unlocks it. At OG Labs, we use real-time insights and behavioral analytics to inform every creative decision, ensuring your campaigns are not only visually compelling but strategically grounded. Our creative strategies are shaped by what works, and continuously refined to outperform expectations."
  },
  {
    id: 2,
    value: "Precision Targeting",
    imgSrc: "/value-2.png",
    bgColor: "bg-[#DBCAFF]",
    desc: "Reaching the right audience at the right moment is everything. Our precision targeting capabilities use advanced segmentation, predictive modeling, and machine learning to connect your brand with the customers who matter most. We don't just buy impressions — we buy outcomes."
  },
  {
    id: 3,
    value: "Scalable Growth",
    imgSrc: "/value-3.png",
    bgColor: "bg-[#FECE6F]",
    desc: "Growth should never be a guessing game. From local pilots to global rollouts, our programmatic solutions are built to scale. We architect campaigns with future expansion in mind, using automation, omnichannel integrations, and performance tracking to fuel consistent, measurable growth for your brand."
  },
  {
    id: 4,
    value: "Future-Ready Innovation",
    imgSrc: "/value-4.png",
    bgColor: "bg-[#9FDAFA]",
    desc: "The digital landscape never stands still — and neither do we. OG Labs is committed to staying ahead of the curve by investing in emerging technologies, AI-driven optimizations, and evolving platforms. We future-proof your campaigns so that you're not just keeping up with trends, you're setting them."
  },
];

const AboutPage = () => {
  const introTitle = "Who are we?";
  return (
    <div>
      <Navbar />
      <LandingBanner title={"About Us"} />
      <div className="h-full w-full">
            <div className="px-6 md:px-10 lg:px-15 mt-10 md:mt-15 lg:mt-18 flex flex-col items-center md:items-start">
              <h1 className="font-playfair-semibold text-3xl md:text-4xl lg:text-[5vw] text-center md:text-left">
                {introTitle}
              </h1>
              {AboutIntroPara.map((para)=>(
                <p key={para.id} className={`font-poppins-regular text-sm mt-5 md:mt-8 lg:mt-10 md:text-base lg:text-lg text-center md:text-left`}>
                {para.para}
              </p>
              ))}
              {/* <div className="mt-5 md:mt-8 lg:mt-10">{button}</div> */}
            </div>
          </div>
      <div className="relative">
        <Marquee>
          <ImageCard src={"/about-1.png"} />
          <ImageCard src={"/about-2.png"} />
          <ImageCard src={"/about-3.png"} />
          <ImageCard src={"/about-4.png"} />
        </Marquee>
        <div className="absolute bg-black h-[70%] w-full bottom-0"></div>
      </div>
      <div className="mt-20 px-6 md:px-10 lg:px-15">
        <h1 className="text-center text-4xl md:text-5xl font-playfair-semibold">
          Our Values
        </h1>
        <div className="lg:flex lg:flex-wrap lg:justify-between">
          {values.map((value) => (
            <div
              key={value.id}
              className="mt-10 lg:mt-15 border flex gap-5 p-4 items-center flex-col lg:flex-row lg:w-[42vw]"
            >
              <div className={`w-fit p-3 ${value.bgColor}`}>
                <div className="relative size-[6rem] mix-blend-hard-light">
                  <Image src={value.imgSrc} alt="value" fill />
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-lg lg:text-xl font-poppins-medium text-black/80">
                {value.value}
              </div>
              <div className="text-xs lg:text-sm font-poppins-regular mt-3">
                {value.desc}
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <Process /> */}
        <Clients />
      <div className="mt-10">
      <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
