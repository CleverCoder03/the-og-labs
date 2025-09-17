import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="h-full w-screen">
      <div className="absolute top-0 left-0 h-screen w-full z-[-1]">
        <Image className="md:object-cover " src="/hero-bg.png" alt="hero-bg" fill />
      </div>

      <div className="h-screen w-full flex flex-col justify-center items-center">
        <div className="mt-10 lg:mt-20">
          <h1 className="text-white font-playfair-regular text-[3.7rem] md:text-7xl lg:text-[6vw] lg:w-[80vw]  text-start md:text-center leading-[1.3] px-6">
            The OG Labs, Redefining Digital Marketing with AI
          </h1>
          <p className="hidden md:block text-white text-xl text-center font-poppins-regular mt-10">
            Where Intelligence Meets Imagination
          </p>
        </div>
        <div className="mt-20">
          <Link href="/contact">
            <div className="bg-white/90 backdrop-blur-md text-black p-4 font-poppins-medium flex items-center gap-2">
              Start Your AI-Powered Journey <MoveRight />
            </div>
          </Link>
        </div>
        <div className="mt-20">
          <h2 className="text-white/60">Scroll to Explore</h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
