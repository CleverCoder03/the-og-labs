"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const Hero = () => {
  const imageRef = useRef();

  useGSAP(() => {
    gsap.registerPlugin(SplitText);
    const splitTitle = new SplitText("#title", { type: "chars, words" });

    const addColor = () =>
      splitTitle.words.forEach((word) => word.classList.add("white"));

    gsap.from(imageRef.current, {
      opacity: 0,
      delay: 1.5,
    });

    gsap.from("#hero-button", {
      opacity: 0,
      yPercent: 200,
      delay: 1.6
    })

    gsap.from(splitTitle.words, {
      opacity: 0,
      yPercent: 50,
      stagger: 0.15,
      onComplete: addColor,
    });
  }, []);
  return (
    <div className="h-full w-screen">
      <div
        ref={imageRef}
        className="absolute top-0 left-0 h-screen w-full z-[-1]"
      >
        <Image
          className="md:object-cover "
          src="/hero-bg.png"
          alt="hero-bg"
          fill
        />
      </div>

      <div className="h-screen w-full flex flex-col justify-center items-center">
        <div className="mt-10 lg:mt-20">
          <h1
            id="title"
            className="text-black transition-all duration-200 font-playfair-regular text-[3.7rem] md:text-7xl lg:text-[6vw] lg:w-[80vw]  text-start md:text-center leading-[1.3] px-6"
          >
            The OG Labs, Redefining Digital Marketing with AI
          </h1>
          <p className="hidden md:block text-white text-xl text-center font-poppins-regular mt-10">
            Where Intelligence Meets Imagination
          </p>
        </div>
        <div id="hero-button" className="mt-20">
          <Link href="/contact">
            <div className="bg-white/90 backdrop-blur-md text-black p-4 font-poppins-medium flex items-start gap-2">
              Start Your AI-Powered Journey <MoveRight />
            </div>
          </Link>
        </div>
        <div className="mt-20">
          <h2 className="text-white/60 hidden md:block">Scroll to Explore</h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
