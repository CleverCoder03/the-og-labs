import React from "react";

const CaseStudies = () => {
  return (
    <>
      <div className="mt-10">
        <h2 className="text-center">Our Portfolio</h2>
        <p className="text-4xl font-poppins-medium text-center mt-5">
          Case Studies
        </p>
      </div>
      <div className="mt-5 px-6">
        <div className="py-10 border-b">
            <h1 className="font-poppins-medium text-lg">Elevate Apparel</h1>
            <p className="font-poppins-regular text-black/60 text-sm leading-[1.2] mt-4">Boosted brand awareness and drove a 45% sales increase through targeted campaigns.</p>
        </div>
        <div className="py-10 border-b">
            <h1 className="font-poppins-medium text-lg">NovaTech</h1>
            <p className="font-poppins-regular text-black/60 text-sm leading-[1.2] mt-4">Achieved 3x lead generation with data-driven digital marketing strategies.</p>
        </div>
        <div className="py-10 border-b">
            <h1 className="font-poppins-medium text-lg">GreenGlow Skincare</h1>
            <p className="font-poppins-regular text-black/60 text-sm leading-[1.2] mt-4">Increased online engagement by 60% with creative social media storytelling.</p>
        </div>
        <div className="py-10 border-b">
            <h1 className="font-poppins-medium text-lg">UrbanEats</h1>
            <p className="font-poppins-regular text-black/60 text-sm leading-[1.2] mt-4">Grew customer base by 35% using AI-powered ad campaigns.</p>
        </div>
      </div>
    </>
  );
};

export default CaseStudies;
