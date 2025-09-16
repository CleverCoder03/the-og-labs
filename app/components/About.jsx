import React from "react";
import Button from "./Button";

const About = () => {
  return (
    <>
      <div className="mt-10">
        <h2 className="text-center">The OG Lab Story</h2>
        <p className="text-4xl font-poppins-medium text-center mt-5">
          About Us
        </p>
      </div>
      <div className="px-6">
        <p className="mt-12 text-center font-poppins-regular">
          We didn’t start The OG Labs to be another digital marketing agency. We
          started it to redefine how marketing works in the age of AI.
        </p>
        <div className="text-center mt-8 font-poppins-regular">
          <p>
            Our founders came together with one mission, eliminate wasteful
            strategies, outdated tactics, and guesswork from advertising. In
            their place, we built a model where AI automation, and human
            creativity work seamlessly together.
          </p>
        </div>

        <div className="text-center mt-10">
          <Button
            tag={"Learn More"}
            className={`bg-black text-white align-middle`}
          />
        </div>
      </div>
    </>
  );
};

export default About;
