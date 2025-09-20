import React from "react";
import Button from "./Button";
import Link from "next/link";

const CaseStudyContact = () => {
  return (
    <div className="bg-[#0E0652] py-15 lg:py-20 xl:py-25 px-6 md:px-10 lg:px-15 lg:flex lg:justify-between lg:items-center">
      <div className="w-fit">
        <h2 className="text-white font-poppins-regular md:text-xl">
          Contact Us
        </h2>
        <div className="text-white font-poppins-semibold text-4xl lg:text-[6.5vw] lg:font-poppins-regular lg:leading-[1.1] my-8">
          <h1>Want similar results</h1>
          <h1>for your business?</h1>
        </div>
      </div>
      <div className="mt-20 lg:mt-0">
        <Link href="/contact">
          <Button
            tag={"Let's Talk"}
            className={"bg-white text-black font-poppins-medium"}
          />
        </Link>
      </div>
    </div>
  );
};

export default CaseStudyContact;
