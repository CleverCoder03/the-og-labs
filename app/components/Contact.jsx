import React from "react";
import Button from "./Button";

const Contact = () => {
  return (
    <div className="bg-[#0E0652] mt-10 py-15 px-6">
      <h2 className="text-white font-poppins-regular">Contact Us</h2>
      <div className="text-white font-poppins-semibold text-4xl my-8">
        <h1>Let's Build</h1>
        <h1>Smarter, Together.</h1>
      </div>
      <p className="text-white font-poppins-regular">
        Bring us your toughest marketing challenge and we’ll engineer solutions
        with AI, data, and precision.
      </p>
      <div className="mt-20">
        <Button tag={"Start Your Project"} className={"bg-white text-black font-poppins-medium"} />
      </div>
    </div>
  );
};

export default Contact;
