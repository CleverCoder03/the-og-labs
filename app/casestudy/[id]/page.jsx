import Approach from "@/app/components/Approach";
import Background from "@/app/components/Background";
import CaseStudyBanner from "@/app/components/CaseStudyBanner";
import CaseStudyContact from "@/app/components/CaseStudyContact";
import Challenge from "@/app/components/Challenge";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import Results from "@/app/components/Results";
import Testimonial from "@/app/components/Testimonial";
import caseStudiesData from "@/lib";
import Link from "next/link";
import React from "react";

const caseStudyPage = async ({ params }) => {
  const { id } = await params;
  const caseStudy = caseStudiesData.find((cs) => cs.id === parseInt(id));

  if (!caseStudy) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl font-bold">Case Study Not Found</h1>
        <p className="mt-4">
          <Link href="/" className="text-blue-500 hover:underline">
            Go back to the homepage
          </Link>
        </p>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <CaseStudyBanner title={caseStudy.title} />
      <Background
        headline={caseStudy.background.headline}
        para={caseStudy.background.text}
        image={caseStudy.background.image}
      />
      <Challenge
        headline={caseStudy.challenge.headline}
        points={caseStudy.challenge.points}
      />
      <Approach
        headline={caseStudy.approach.headline}
        introText={caseStudy.approach.introText}
        steps={caseStudy.approach.steps}
      />
      {/* <Testimonial /> */}

      <div className="py-10 md:py-15 lg:py-18 px-6 md:px-10 lg:px-15 flex justify-center">
        <div className="lg:w-[70rem]">
          <h1 className="text-4xl md:text-5xl font-playfair-semibold text-start lg:text-center">{caseStudy.journey.headline}</h1>
          <div className="mt-8 md:mt-12 lg:mt-15">
            <ul className="list-disc ml-5 space-y-5">
              {caseStudy.journey.phases.map((phase) => (
                <li key={phase.id} className="lg:text-xl border-b pb-5"><strong>{phase.title}: </strong>{phase.description}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="py-10 md:py-15 lg:py-18 bg-[#222] text-white">
        <div className="px-6 md:px-10 lg:px-15 ">
          <h1 className="text-4xl md:text-5xl font-playfair-semibold text-center lg:text-start">Client's Feedback</h1>
          <div className="mt-10 md:mt-15 lg:mt-18">
            <div
            className="font-poppins-medium text-center text-lg lg:text-2xl lg:text-start"
          >
            {caseStudy.feedback}
          </div>
          </div>
        </div>
      </div>
      <Results headline={caseStudy.results.headline} metrics={caseStudy.results.metrics} />
      <div className="py-10 md:py-15 lg:py-18 bg-[#222] text-white">
        <div className="px-6 md:px-10 lg:px-15 ">
          <h1 className="text-4xl md:text-5xl font-playfair-semibold text-center lg:text-start">Final word</h1>
          <div className="mt-10 md:mt-15 lg:mt-18">
            <div
            className="font-poppins-medium text-center text-lg lg:text-2xl lg:text-start "
          >
            {caseStudy.final}
          </div>
          </div>
        </div>
      </div>
      <CaseStudyContact />
      <Footer />
    </div>
  );
};

export default caseStudyPage;
