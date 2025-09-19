import React from "react";
import Navbar from "../components/Navbar";
import LandingBanner from "../components/LandingBanner";
import ContactCard from "../components/ContactCard";
import Footer from "../components/Footer";
import Image from "next/image";
import Button from "../components/Button";
import PhoneNumberInput from "../components/PhoneNumberInput";

const icons = [
  {
    id: 1,
    imgSrc: "/facebook.png",
    href: "",
  },
  {
    id: 2,
    imgSrc: "/instagram.png",
    href: "",
  },
  {
    id: 3,
    imgSrc: "/twitter.png",
    href: "",
  },
];

const ContactPage = () => {
  return (
    <div>
      <Navbar />
      <LandingBanner title={"Contact Us"} />
      <div className="py-10 lg:py-15 xl:py-18 px-6 md:px-10 lg:px-15 lg:flex lg:items-center lg:justify-between">
        <div>
          <h2 className="font-poppins-regular">Get Started</h2>
          <div className="font-poppins-medium text-3xl mt-2 sm:text-4xl md:text-5xl lg:font-poppins-regular lg:text-[6vw] lg:leading-[1.1]">
            <h1>Get in touch with us.</h1>
            <h1>We're here to assist you.</h1>
          </div>
        </div>
        <div className="hidden lg:flex lg:flex-col lg:gap-3">
          {icons.map((icon) => (
            <div
              key={icon.id}
              className="border rounded-[50%] flex justify-center items-center p-2"
            >
              <div className="relative size-2.5 xl:size-3">
                <Image src={icon.imgSrc} alt={icon.imgSrc} fill />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="py-10 lg:py-15 xl:py-18 px-6 md:px-10 lg:px-15">
        <form action="">
          <div className="flex flex-col gap-10 lg:flex-row lg:w-full lg:justify-between">
            <div className="lg:w-1/3">
              <div className="border-b pb-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="outline-none border-none w-full"
                  required
                />
              </div>
            </div>
            <PhoneNumberInput />
            <div className="lg:w-1/3">
              <div className="border-b pb-5">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="outline-none border-none w-full"
                  required
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <div className="border-b pb-5">
              <textarea
                name=""
                placeholder="Message"
                className="outline-none border-none w-full resize-none h-20"
                id=""
              ></textarea>
            </div>
          </div>
          <div className="mt-10">
            <Button type={"submit"} tag={"Leave us a message"} className={"bg-black text-white"} />
          </div>
        </form>
      </div>
      <ContactCard />
      <Footer />
    </div>
  );
};

export default ContactPage;
