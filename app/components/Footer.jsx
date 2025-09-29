import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";

const pageLinks = [
  {id: 1, label: "About Us", link: "/about"},
  {id: 2, label: "Services", link: "/services"},
  {id: 3, label: "Contact us", link: "/contact"}
]

const socailLinks = [
  {id: 1, label: "Linkedin", link: "https://"},
  {id: 2, label: "Instagram", link: "https://"},
  {id: 3, label: "Twitter", link: "https://"}
]

const Footer = () => {
  return (
    <>
      <div className="my-10 lg:my-15 px-6 md:px-10 lg:px-15 lg:flex lg:justify-between">
        <h1 className="font-playfair-semibold uppercase text-3xl lg:w-20 lg:text-4xl lg:leading-[1.1] xl:text-5xl">
          The OG Labs
        </h1>
        <div className="lg:flex lg:gap-20">
          <div className="hidden mt-10 font-poppins-regular lg:block lg:mt-0">
          <h2 className="text-black/50 font-bold text-lg">Menu</h2>
          <ul className="mt-2 lg:mt-4 lg:flex lg:flex-col lg:gap-2">
            {
              pageLinks.map((page) => (
                <Link key={page.id} href={page.link}>
                  <li>{page.label}</li>
                </Link>
              ))
            }
          </ul>
        </div>
        <div className="mt-10 font-poppins-regular lg:mt-0">
          <h2 className="text-black/50 font-bold text-lg">Social</h2>
          <ul className="mt-2 lg:mt-4 flex flex-col gap-2">
            {
              socailLinks.map((social) => (
                <a key={social.id} href={social.link} target="_blank" rel="noopener noreferrer">
                  {social.label}
                </a>
              ))
            }
          </ul>
        </div>
        </div>
        <div>
          <div className="mt-10 font-poppins-regular lg:mt-0">
          <h2 className="text-black/50 font-bold text-lg">Business Enquires</h2>
          <h1 className="mt-2">cheers@theoglabs.com</h1>
        </div>
        {/* <div className="mt-10 font-poppins-regular">
          <h2 className="text-black/50 font-bold text-lg">Join Our Team</h2>
          <h1 className="mt-2">apply@theoglabs.com</h1>
        </div> */}
        </div>
      </div>

      <div className="absolute z-[-1] overflow-y-hidden md:-mt-[5vw] lg:-mt-[10vw]">
        <Marquee className="relative -bottom-[5vw] lg:-bottom-[6.4vw] text-[20vw] font-playfair-bold">
          The OG Labs &nbsp;
        </Marquee>
      </div>
    </>
  );
};

export default Footer;
