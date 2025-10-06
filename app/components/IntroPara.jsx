import React from "react";

const IntroPara = ({ title, para, className, button }) => {
  return (
    <div className="h-full w-full">
      <div className="px-6 md:px-10 lg:px-15 mt-10 md:mt-15 lg:mt-18 flex flex-col items-center">
        <h1 className="font-poppins-medium text-3xl md:text-4xl lg:text-[5vw] text-center md:text-left">
          {title}
        </h1>
        <div className="mt-2 xl:w-[70rem] ">
          <p className={`font-poppins-regular text-sm md:text-base lg:text-lg text-center ${className}`}>
          {para}
        </p>
        </div>
        <div className="mt-5 md:mt-8 lg:mt-10">{button}</div>
      </div>
    </div>
  );
};

export default IntroPara;
