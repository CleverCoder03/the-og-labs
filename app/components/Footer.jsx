import React from "react";
import Marquee from "react-fast-marquee";

const Footer = () => {
  return (
    <>
      <div className="my-10 px-6">
        <h1 className="font-playfair-semibold uppercase text-3xl">
          The OG Labs
        </h1>
        <div className="mt-10 font-poppins-regular">
          <h2 className="text-black/50 font-bold text-lg">Social</h2>
          <ul className="mt-2">
            <li>Linkedin</li>
            <li>Instagram</li>
            <li>Twitter</li>
          </ul>
        </div>
        <div className="mt-10 font-poppins-regular">
          <h2 className="text-black/50 font-bold text-lg">Business Enquires</h2>
          <h1 className="mt-2">hii@theoglabs.com</h1>
        </div>
        <div className="mt-10 font-poppins-regular">
          <h2 className="text-black/50 font-bold text-lg">Join Our Team</h2>
          <h1 className="mt-2">apply@theoglabs.com</h1>
        </div>
      </div>

      <div className="absolute overflow-y-hidden">
        <Marquee className="relative -bottom-5 text-[20vw] font-playfair-bold">
          The OG Labs &nbsp;
        </Marquee>
      </div>
    </>
  );
};

export default Footer;
