import React from "react";
import Button from "./Button";

const HeroPara = () => {
  return (
    <div>
      <div className="mt-20 px-6 md:px-10 lg:px-15" >
        <div className="font-poppins-medium text-3xl flex items-center">
          <div className="leading-[1.3] lg:leading-[1.7] xl:leading-[2.3]">
            <span className="pr-10 text-base uppercase font-poppins-regular align-middle hidden md:inline lg:text-xl">
              The og lab
            </span>
            <span className="mr-4 opacity-50 align-middle lg:text-4xl xl:text-5xl">
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
