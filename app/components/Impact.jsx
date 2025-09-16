import React from "react";
import Button from "./Button";

const Impact = () => {
  return (
    <div className="bg-black text-white mt-10 py-15 px-6">
      <div>
        <h1>The OG Labs Expertise</h1>
        <div className="my-8 text-4xl font-poppins-semibold">
          <h1>How We</h1>
          <h1>Create Impact</h1>
        </div>
        <Button
          tag={"Learn More"}
          className={"bg-white text-black font-bold"}
        />
      </div>
      <div className="">
        <div className="w-full bg-[#0E0652] mt-10 p-5">
          <h1 className="font-poppins-medium text-lg">
            Programmatic Advertising & SEM
          </h1>
          <p className="font-poppins-regular text-xs opacity-75">
            AI-Powered Campaigns, Optimized in Real-Time
          </p>
          <ul className="text-xs mt-10 list-disc pl-3 flex flex-col gap-4">
            <li>Automated bidding for efficiency and scale</li>
            <li>Audience targeting that adapts on the fly</li>
            <li>Performance analytics that sharpen every decision</li>
          </ul>
        </div>
        <div className="w-full bg-[#0C0070] mt-10 p-5">
          <h1 className="font-poppins-medium text-lg">
            Social Media & Performance Marketing
          </h1>
          <p className="font-poppins-regular text-xs opacity-75">
            Turning Engagement Into Measurable Growth
          </p>
          <ul className="text-xs mt-10 list-disc pl-3 flex flex-col gap-4">
            <li>Data-backed paid social strategies</li>
            <li>AI-driven optimization across platforms</li>
            <li>Conversion-focused campaigns that adapt in real time</li>
          </ul>
        </div>
        <div className="w-full bg-[#895BBC] mt-10 p-5">
          <h1 className="font-poppins-medium text-lg">
            Creative Content & Storytelling
          </h1>
          <p className="font-poppins-regular text-xs opacity-75">
            Turning Engagement Into Measurable Growth
          </p>
          <ul className="text-xs mt-10 list-disc pl-3 flex flex-col gap-4">
            <li>Data-backed paid social strategies</li>
            <li>AI-driven optimization across platforms</li>
            <li>Conversion-focused campaigns that adapt in real time</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Impact;
