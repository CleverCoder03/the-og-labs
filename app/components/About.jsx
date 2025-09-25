import React from "react";
import Button from "./Button";
import Link from "next/link";

const About = () => {
  return (
    <div className="bg-white">
      <div className="mt-10 md:mt-15 lg:mt-18">
        <h2 className="text-center md:text-xl">The OG Lab Story</h2>
        <p className="text-3xl md:text-5xl  font-poppins-medium text-center mt-5">
          About Us
        </p>
      </div>
      <div className="px-6 md:px-10 lg:px-15">
        <p className="mt-12 text-center font-poppins-regular md:text-lg ">
          We didn’t start The OG Labs to be another digital marketing agency. We
          started it to redefine how marketing works in the age of AI.
        </p>
        <div className="text-center mt-8 font-poppins-regular md:text-lg">
          <p>
            Our founders came together with one mission, eliminate wasteful
            strategies, outdated tactics, and guesswork from advertising. In
            their place, we built a model where AI automation, and human
            creativity work seamlessly together.
          </p>
        </div>

        <div className="text-center mt-10">
          <Link href="/about">
            <Button
              tag={"Learn More"}
              className={`bg-black text-white align-middle`}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
