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

const values = [
  {
    id: 1,
    value: "Data Driven Creativity",
    imgSrc: "/value-1.png",
    bgColor: "bg-[#0E0652]",
  },
  {
    id: 2,
    value: "Precision Targeting",
    imgSrc: "/value-2.png",
    bgColor: "bg-[#DBCAFF]",
  },
  {
    id: 3,
    value: "Scalable Growth",
    imgSrc: "/value-3.png",
    bgColor: "bg-[#FECE6F]",
  },
  {
    id: 4,
    value: "Future-Ready Innovation",
    imgSrc: "/value-4.png",
    bgColor: "bg-[#9FDAFA]",
  },
];

const AboutPage = () => {
  const introTitle = "Who are we?";
  const introPara =
    "At The OG Labs, we combine AI, automation, and creativity to deliver smarter digital marketing. We go beyond impressions and clicks to engineer campaigns that are precise, scalable, and ROI-focused. Our team blends data science, strategy, and innovation to help brands and agencies cut through the noise, maximize visibility, and achieve sustainable growth.";
  return (
    <div>
      <Navbar />
      <LandingBanner title={"About Us"} />
      <IntroPara
        title={introTitle}
        para={introPara}
        className={"lg:w-[80%] xl:w-[75%]"}
      />
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
        <h1 className="text-center text-4xl md:text-5xl font-poppins-medium">
          Our Values
        </h1>
        <div className="lg:flex lg:flex-wrap lg:justify-between">
          {values.map((value) => (
            <div
              key={value.id}
              className="mt-10 lg:mt-15 border flex gap-5 p-4 items-center lg:flex-col lg:items-start lg:w-[42vw]"
            >
              <div className={`w-fit p-2 ${value.bgColor}`}>
                <div className="relative size-[5rem] mix-blend-hard-light">
                  <Image src={value.imgSrc} alt="value" fill />
                </div>
              </div>
              <div className="text-lg font-poppins-medium text-black/80">
                {value.value}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Process />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
};

export default AboutPage;
