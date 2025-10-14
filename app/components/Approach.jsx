import React from "react";

const Approach = ({ headline, introText, steps }) => {
  return (
    <div className="relative mt-10 md:mt-15 lg:mt-18 pt-10 md:pt-15 lg:pt-18">
      <div className="px-6 md:px-10 lg:px-15">
        <h1 className="text-4xl md:text-5xl font-playfair-semibold text-white">{headline}</h1>
        <p className="md:text-lg font-poppins-regular mt-5 text-white/70">{introText}</p>
      </div>
      <div className='absolute bg-black h-full lg:h-[60%] w-full left-0 top-0 -z-10'></div>
      <div className="relative px-6 md:px-10 lg:px-15 mt-10 pb-5">
        <div className="mt-10 md:mt-15 lg:mt-18 flex flex-col gap-6 lg:gap-10 xl:gap-15 lg:flex-row lg:justify-between lg:w-full text-white">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-[#0C0070] p-4 flex flex-col justify-between gap-8 lg:gap-30 xl:gap-40 lg:w-1/4"
            >
              <div className="font-poppins-semibold">
                <h1>{step.id}</h1>
                <h1>{step.title}</h1>
              </div>
              <p className="font-poppins-light text-sm text-white/70 capitalize">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Approach;
