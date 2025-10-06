import React from "react";
import Navbar from "../components/Navbar";
import CaseStudies from "../components/CaseStudies";
import Insight from "../components/Insight";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import LandingBanner from "../components/LandingBanner";
import IntroPara from "../components/IntroPara";
import Button from "../components/Button";
import { sectionsData } from "@/lib";

const ServicePage = () => {
  const introTitle = "What we Provide";
  const introPara =
    "At OG Labs, we provide a comprehensive suite of services designed to amplify your brand’s reach, performance, and impact. Whether you need cutting-edge programmatic solutions or compelling creative, we build data-powered strategies tailored for results.";
  return (
    <div>
      <Navbar />
      <LandingBanner title={"Services"} />
      <IntroPara
        title={introTitle}
        para={introPara}
        // className={"lg:w-[65%] xl:w-[45%]"}
        button={<Button tag={"Contact Us"} className={"bg-black text-white"} />}
      />
      <div className="px-6 py-6 md:py-10 md:px-10 lg:px-15 xl:flex xl:justify-center">
        <div className="xl:w-[70rem]">
          {sectionsData.map((service) => (
            <div key={service.id} className="border-b border-gray-400 py-10 lg:py-15">
              <div>
                <div className="">
                  <div>
                    <h1 className="text-2xl font-poppins-semibold uppercase lg:text-3xl">
                      {service.id}. {service.title}
                    </h1>
                  </div>

                  <p className="text-sm font-poppins-light mt-2 lg:text-base lg:mt-4">
                    {service.description}
                  </p>
                </div>
              </div>

              <div className="lg:flex lg:items-center lg:mt-10">
                <div className="hidden lg:block lg:w-1/2 pr-10">
                  <div
                    className={`relative bg-[#222] w-full lg:h-[18rem] mt-8 md:mt-0 py-5 lg:py-10 xl:py-13`}
                  >
                    <img
                      src={service.imageSrc}
                      alt={service.title}
                      className="rounded-lg shadow-lg w-full h-full object-contain mix-blend-plus-lighter"
                    />
                  </div>
                </div>

                <div className="lg:w-1/2">
                  <div className="mt-5 lg:mt-0">
                    <h1 className="text-lg font-poppins-semibold lg:text-xl">
                      What do we offer:
                    </h1>
                    <div className="text-sm font-poppins-light lg:text-base mt-2">
                      <ul className="list-disc pl-4">
                        {service.offer.map((offer) => (
                          <li key={offer.id}>{offer.data}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-5">
                    <h1 className="text-lg font-poppins-semibold lg:text-xl">Outcomes:</h1>
                    <p className="text-sm font-poppins-light mt-2 lg:text-base">
                      {service.outcome}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <CaseStudies />
      <Insight />
      <Contact />
      <Footer />
    </div>
  );
};

export default ServicePage;
