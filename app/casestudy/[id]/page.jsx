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
      <Results headline={caseStudy.results.headline} metrics={caseStudy.results.metrics} />
      <Testimonial />
      <CaseStudyContact />
      <Footer />
    </div>
  );
};

export default caseStudyPage;
