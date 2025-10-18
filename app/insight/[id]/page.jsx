import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";
import InsightHeroImage from "@/app/components/InsightHeroImage";
import InsightPara from "@/app/components/InsightPara";
import Navbar from "@/app/components/Navbar";
import { blogs } from "@/lib/blogs";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const page = async ({ params }) => {
  const { id } = await params;
  const insight = blogs.find((cs) => cs.id === parseInt(id));

  if (!insight) {
    return <div>Blog post not found!</div>;
  }

  // This line is no longer needed because content is already an array.
  // const paragraphs = insight.content.split("\n\n");

  return (
    <div className="">
      <Navbar />
      <div className="w-dvw bg-[#222]">
        <div className="h-full w-full">
          {/* <div className="pt-30 lg:pt-35 text-8xl lg:text-9xl leading-[1.8] align-middle tracking-wider font-poppins-bold-italic text-white">
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
              <div className="relative size-30 lg:size-40">
                <Image
                  src="/bubble-2.png"
                  alt="insight-object"
                  className="object-contain"
                  fill
                />
              </div>
              Insight{" "}
              <div className="relative size-30 lg:size-40">
                <Image
                  src="/bubble-3.png"
                  alt="insight-object"
                  className="object-contain"
                  fill
                />
              </div>
            </Marquee>
          </div> */}

          <div className="pt-10 md:pt-20 lg:pt-30 flex flex-col justify-center items-center">
            {/* <InsightPara /> */}
            <InsightHeroImage src={insight.src} />
          </div>

          <div className="flex flex-col items-center">
            <div className="px-6 md:px-10 lg:w-[70vw] w-full text-white">
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

                {/* MODIFICATION START: Render content based on its type */}
                <div className="mt-10 lg:mt-15 text-sm md:text-base text-justify font-poppins-light space-y-4">
                  {insight.content.map((item, index) => {
                    switch (item.type) {
                      case "heading":
                        return (
                          <h2
                            key={index}
                            className="text-2xl font-playfair-bold mt-8 mb-4"
                          >
                            {item.text}
                          </h2>
                        );
                      case "list":
                        return (
                          <ul
                            key={index}
                            className="list-disc list-inside space-y-2 pl-4"
                          >
                            {item.items.map((listItem, liIndex) => (
                              <li key={liIndex}>{listItem}</li>
                            ))}
                          </ul>
                        );
                      case "cta":
                        return (
                          <p
                            key={index}
                            className="my-6 p-4 bg-gray-800 rounded-lg border-l-4 border-purple-800 font-poppins-medium-italic"
                          >
                            {item.text}
                          </p>
                        );
                       case "keywords":
                         return (
                          <p key={index} className="text-sm text-gray-400 mt-8 font-poppins-light-italic">
                            <strong>Keywords:</strong> {item.text}
                          </p>
                        );
                      case "paragraph":
                      default:
                        return <p key={index}>{item.text}</p>;
                    }
                  })}
                </div>
                {/* MODIFICATION END */}
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
