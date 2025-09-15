import React from "react";
import Button from "./Button";

const HeroPara = () => {
  return (
    <div>
      <div className="mt-20 px-6">
        <div className="font-poppins-medium text-3xl flex items-center">
          <div className="leading-[1.3]">
            <span className="px-10 text-base uppercase font-poppins-regular align-middle hidden md:inline">
              The og lab
            </span>
            <span className="mr-4 opacity-80 align-middle">
              AI-powered, programmatic-first marketing built for brands that
              want to scale smarter. We merge automation, creativity, and
              strategy to maximize ROI and unlock measurable growth.
            </span>
            <span>
              <Button
                tag={`Learn More`}
                className={`bg-black text-white align-middle`}
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPara;
