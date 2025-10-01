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
    title: "Programmatic Media Buying & Services",
    description:
      "Maximize efficiency and impact with our end-to-end programmatic media solutions. We leverage real-time bidding, advanced targeting, and AI-driven platforms to deliver the right message to the right audience at the right time — across display, video, native, OTT, and more.",
    imageSrc: "/service-1.png",
    backgroundColor: "bg-[#17105F]", // Dark blue
  },
  {
    id: 2,
    title: "Content & Creative Designing",
    description:
      "Stand out in the scroll. Our creative team merges data insights with bold visual storytelling to develop content that grabs attention and drives action — across formats, platforms, and audiences.",
    imageSrc: "/service-2.png",
    backgroundColor: "bg-[#314352]", // Dark grayish-blue
  },
  {
    id: 3,
    title: "Brand Strategy & Positioning",
    description:
      "Your brand is more than a logo — it’s your voice, your value, and your edge. We help brands define their narrative, align with their audience, and differentiate in crowded markets through insight-driven brand strategy.",
    imageSrc: "/service-3.png",
    backgroundColor: "bg-[#6A53B7]", // Purple
  },
  {
    id: 4,
    title: "Social Media & Performance Marketing",
    description:
      "Drive conversions and build communities through social-first performance campaigns. From paid social to influencer collaborations, we align strategy with performance metrics to deliver full-funnel success.",
    imageSrc: "/service-4.png",
    backgroundColor: "bg-[#d9a641]", // Purple
  },
];

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
