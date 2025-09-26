import React from "react";
import Button from "./Button";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="bg-[#0E0652] py-15 lg:py-20 xl:py-25 px-6 md:px-10 lg:px-15 lg:flex lg:justify-between lg:items-center">
      <div className="w-fit flex flex-col items-center lg:items-start">
        <h2 className="text-white font-poppins-regular md:text-xl">
          Contact Us
        </h2>
        <div className="text-white font-poppins-semibold text-4xl lg:text-[6.5vw] lg:font-poppins-regular lg:leading-[1.1] my-8 text-center lg:text-left">
          <h1>Let's Build</h1>
          <h1>Smarter, Together.</h1>
        </div>
        <p className="text-white/70 font-poppins-regular lg:w-[60vw] text-center lg:text-left">
          Bring us your toughest marketing challenge and we’ll engineer
          solutions with AI, data, and precision.
        </p>
      </div>
      <div className="mt-20 lg:mt-0 text-center lg:text-left">
        <Link href="/contact">
          <Button
          tag={"Start Your Project"}
          className={"bg-white text-black font-poppins-medium rounded-md shadow-2xl"}
        />
        </Link>
      </div>
    </div>
  );
};

export default Contact;
