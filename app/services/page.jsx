import React from "react";
import Navbar from "../components/Navbar";
import CaseStudies from "../components/CaseStudies";
import Insight from "../components/Insight";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import LandingBanner from "../components/LandingBanner";
import IntroPara from "../components/IntroPara";
import Button from "../components/Button";

const sectionsData = [
  {
    id: 1,
    title: "Programmatic Advertising & SEM",
    description:
      "End-to-end campaign management across video, display, and native with real-time bidding, advanced targeting, and dynamic optimization to maximize ROI.",
    imageSrc: "/service-1.png",
    backgroundColor: "bg-[#17105F]", // Dark blue
  },
  {
    id: 2,
    title: "Retail Media",
    description:
      "Boost visibility and sales on Amazon, Walmart, eBay, Target, and more with product campaigns, sponsored listings, seasonal promotions, and listing optimization.",
    imageSrc: "/service-2.png",
    backgroundColor: "bg-[#314352]", // Dark grayish-blue
  },
  {
    id: 3,
    title: "Programmatic Advertising & SEM",
    description:
      "End-to-end campaign management across video, display, and native with real-time bidding, advanced targeting, and dynamic optimization to maximize ROI.",
    imageSrc: "/service-3.png",
    backgroundColor: "bg-[#6A53B7]", // Purple
  },
];

const ServicePage = () => {
  const introTitle = "What we Provide";
  const introPara =
    "We provide end-to-end, AI-powered digital marketing solutions that cover every stage of the customer journey.";
  return (
    <div>
      <Navbar />
      <LandingBanner title={"Services"} />
      <IntroPara
        title={introTitle}
        para={introPara}
        className={"lg:w-[65%] xl:w-[45%]"}
        button={<Button tag={"Contact Us"} className={"bg-black text-white"} />}
      />
      <section className="font-sans mt-10 lg:mt-12 xl:mt-15">
        {sectionsData.map((section, index) => (
          <div
            key={section.id}
            className={`px-6 py-6 md:py-10 md:px-10 lg:px-15`}
          >
            <div className={`flex flex-col md:flex-row justify-center items-center ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } border border-black`}>
              {/* Text Content */}
              <div className="flex flex-col items-start p-6 md:p-12 lg:w-1/2">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
                  {section.title}
                </h2>
                <p className="text-sm md:text-base lg:text-lg text-black/80 max-w-lg">
                  {section.description}
                </p>
              </div>

              {/* Image Container */}
              <div
                className={`relative ${section.backgroundColor} w-full h-[18rem] md:h-[22rem] lg:h-[25rem] xl:h-[28rem] lg:w-1/2 mt-8 md:mt-0 py-5 lg:py-10 xl:py-13`}
              >
                <img
                  src={section.imageSrc}
                  alt={section.title}
                  className="rounded-lg shadow-lg w-full h-full object-contain mix-blend-plus-lighter"
                />
              </div>
            </div>
          </div>
        ))}
      </section>
      <CaseStudies />
      <Insight />
      <Contact />
      <Footer />
    </div>
  );
};

export default ServicePage;
