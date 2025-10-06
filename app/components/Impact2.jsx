import React from "react";
import Button from "./Button";
import Link from "next/link";
import { sectionsData } from "@/lib";

const impactCards = [
  {
    id: 1,
    title: "Programmatic Advertising & SEM",
    subTitle: "AI-Powered Campaigns, Optimized in Real-Time",
    line1: "Automated bidding for efficiency and scale",
    line2: "Audience targeting that adapts on the fly",
    line3: "Performance analytics that sharpen every decision",
    bgColor: "#0E0652",
  },
  {
    id: 2,
    title: "Social Media & Performance Marketing",
    subTitle: "Turning Engagement Into Measurable Growth",
    line1: "Data-backed paid social strategies",
    line2: "AI-driven optimization across platforms",
    line3: "Conversion-focused campaigns that adapt in real time",
    bgColor: "#0C0070",
  },
  {
    id: 3,
    title: "Creative Content & Storytelling",
    subTitle: "Turning Engagement Into Measurable Growth",
    line1: "Data-backed paid social strategies",
    line2: "AI-driven optimization across platforms",
    line3: "Conversion-focused campaigns that adapt in real time",
    bgColor: "#895bbc",
  },
];

const Impact2 = () => {
  return (
    <div className="bg-[#222] text-white mt-10 md:mt-15 lg:mt-18 py-15 lg:py-18 px-6 md:px-10 lg:px-15">
      <div>
        <div className="flex flex-col items-center">
          <h1 className="md:text-xl">The OG Labs Expertise</h1>
          <div className="my-8 text-center text-4xl lg:text-5xl xl:text-6xl font-poppins-semibold">
            <h1>How We</h1>
            <h1>Create Impact</h1>
          </div>
          
        </div>
      </div>

      <div className="flex flex-col items-center">
        {sectionsData.map((card) => (
          <div key={card.id} className="flex gap-4 lg:gap-6 border-b-[0.5] border-gray-300 py-10 lg:py-15 lg:w-[70rem]">
            <div className="font-poppins-semibold text-lg uppercase">{card.id}.</div>
            <div>
              <h1 className="font-poppins-semibold text-lg uppercase">
                {card.title}
              </h1>
              <p className="mt-2 lg:mt-5 font-poppins-light text-white/70">
                {card.description}
              </p>
            </div>
          </div>
        ))}

        <div className="mt-15">
            <Link href="/services">
            <Button
              tag={"Learn More"}
              className={"bg-white text-black font-bold rounded-md shadow-2xl"}
            />
          </Link>
        </div>
      </div>

    </div>
  );
};

export default Impact2;
