import { blogs } from "@/lib";
import Image from "next/image";
import Link from "next/link";
import InsightSlider from "./InsightSlider";

const Insight = () => {
  return (
    <div className="relative">
      <div className="bg-white mt-20 md:mt-25 lg:mt-28">
        <h2 className="text-center md:text-xl">The OG Labs Blogs</h2>
        <p className="text-3xl md:text-5xl font-playfair-semibold text-center mt-5">
          The Insight Hub
        </p>
      </div>

      <InsightSlider />
      <div className="hidden lg:block lg:absolute lg:bottom-0 bg-[#222] h-1/2 z-[-1] w-full"></div>
    </div>
  );
};

export default Insight;
