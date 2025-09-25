import React from "react";
import Button from "./Button";
import Link from "next/link";

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

const Impact = () => {
  return (
    <div className="bg-black text-white mt-10 md:mt-15 lg:mt-18 py-15 lg:py-18 px-6 md:px-10 lg:flex lg:px-15  lg:justify-between lg:items-start lg:relative">
      <div className="sticky top-20 flex flex-col items-center md:items-start">
        <h1 className="md:text-xl">The OG Labs Expertise</h1>
        <div className="my-8 text-center md:text-left text-4xl lg:text-5xl xl:text-6xl font-poppins-semibold">
          <h1>How We</h1>
          <h1>Create Impact</h1>
        </div>
        <Link href="/services">
          <Button
            tag={"Learn More"}
            className={"bg-white text-black font-bold"}
          />
        </Link>
      </div>
      <div className="lg:w-1/2">
        {impactCards.map((impact) => (
          <div
            key={impact.id}
            className={`w-full mt-10 p-5 lg:py-10 lg:px-7`}
            style={{ backgroundColor: impact.bgColor }}
          >
            <h1 className="font-poppins-medium text-lg lg:text-xl xl:text-2xl">
              {impact.title}
            </h1>
            <p className="font-poppins-regular text-xs opacity-75 lg:text-sm xl:text-base mt-1">
              {impact.subTitle}
            </p>
            <ul className="text-xs mt-10  list-disc pl-3 flex flex-col gap-4 lg:text-sm xl:text-base lg:mt-18">
              <li>{impact.line1}</li>
              <li>{impact.line2}</li>
              <li>{impact.line3}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Impact;
