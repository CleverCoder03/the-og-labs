import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";
import InsightHeroImage from "@/app/components/InsightHeroImage";
import InsightPara from "@/app/components/InsightPara";
import Navbar from "@/app/components/Navbar";
import { blogs } from "@/lib";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const page = async ({ params }) => {
  const { id } = await params;
  const insight = blogs.find((cs) => cs.id === parseInt(id));

  if (!insight) {
    return <div>Blog post not found!</div>;
  }

  const paragraphs = insight.content.split("\n\n");

  return (
    <div>
      <Navbar />
      <div className="w-dvw">
        <div className="h-full w-full">
          <div className="pt-30 lg:pt-35 text-8xl lg:text-9xl leading-[1.8] align-middle tracking-wider font-poppins-bold-italic">
            <Marquee>
              Insight{" "}
              <div className="relative size-30 lg:size-40">
                <Image
                  src="/bubble-1.png"
                  alt="insight-object"
                  className="object-contain"
                  fill
                />
              </div>
              Insight{" "}
              <div className="relative lg:size-40">
                <Image
                  src="/bubble-2.png"
                  alt="insight-object"
                  className="object-contain"
                  fill
                />
              </div>
              Insight{" "}
              <div className="relative lg:size-40">
                <Image
                  src="/bubble-3.png"
                  alt="insight-object"
                  className="object-contain"
                  fill
                />
              </div>
            </Marquee>
          </div>

          <div className="mt-30 flex flex-col justify-center items-center">
            <InsightPara />

            <InsightHeroImage src={insight.src} />
          </div>

          <div className="flex flex-col items-center">
            <div className="px-6 md:px-10 lg:w-[70vw] w-full">
              <div className="my-10 lg:my-20">
                <div>
                  <p className="text-gray-500 text-sm">{insight.date}</p>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl mt-4 font-playfair-bold">
                    {insight.title}
                  </h1>
                </div>
                <p className="text-right md:text-left mt-8 lg:mt-12 font-poppins-medium-italic">
                  - {insight.author}
                </p>
                <div className="mt-10 lg:mt-15 text-sm md:text-base text-justify font-poppins-light">
                  {paragraphs.map((paragraph, index) => (
                    <p key={index} className="mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default page;
