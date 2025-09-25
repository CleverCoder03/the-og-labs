"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion } from "motion/react";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const imageRef = useRef();
  const isMobile = useMediaQuery({maxWidth: 767})

  useGSAP(() => {
    gsap.registerPlugin(SplitText);
    const splitTitle = new SplitText("#title", { type: "chars, words" });

    // const addColor = () =>
    //   splitTitle.words.forEach((word) => word.classList.add("white"));

    // gsap.fromTo(imageRef.current, {
    //   opacity: 0,
    //   duration: 0.8,
    //   scale: 0,
    //   ease: "power1.in",
    //   delay: 1.5,
    // }, {
    //   opacity: 1,
    //   duration: 0.8,
    //   scale: 1.2,
    //   ease: "power1.in",
    //   delay: 1.5,
    // });

    // gsap.from("#hero-button", {
    //   opacity: 0,
    //   yPercent: 200,
    //   delay: 1.7,
    // });

    // gsap.from(splitTitle.words, {
    //   opacity: 0,
    //   yPercent: 50,
    //   stagger: 0.15,
    //   onComplete: addColor,
    // });

    const tl = gsap.timeline();

    tl.fromTo(
      imageRef.current,
      {
        opacity: 0,
        scale: 0,
      },
      {
        opacity: 1,
        duration: 1,
        scale: 1.2,
        ease: "power1.in",
      }
    );

    tl.from(splitTitle.words, {
      opacity: 0,
      yPercent: 50,
      stagger: 0.15,
      // onComplete: addColor,
    });

    tl.from("#hero-button", {
      opacity: 0,
      yPercent: 200,
      // delay: 1.7,
    });

    tl.from("#knot", {
      opacity: 0,
      duration: 0.2,
      ease: "power1.in"
    })
    tl.from("#spring", {
      opacity: 0,
      duration: 0.2,
      ease: "power1.in"
    })

    tl.from("#scroll", {
      opacity: 0,
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
          // markers: true
        },
      })
      .to("#spring", { y: 300 }, 0)
      .to("#knot", { y: 300 }, 0);

      gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
          // markers: true
        },
      })
      .to(imageRef.current, { scale: 2.5, duration: 0.8, ease: "power1.in" })
      
      gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "top -20%",
          scrub: true,
        },
      }).fromTo("#scroll", {
        opacity: 1,
        ease: "power2.out"
      }, {
        opacity: 0
      })

  }, []);
  return (
    <div id="hero" className="h-full w-screen">
      <div className="absolute top-0 left-0 h-screen w-full z-[-5] overflow-hidden">
        <Image
          ref={imageRef}
          className="md:object-cover origin-center"
          src="/hero-bg.png"
          alt="hero-bg"
          fill
        />
      </div>
      <div className="absolute top-0 left-0 h-screen w-screen flex justify-between items-center md:px-[10vw] overflow-hidden">
        <motion.div
        id="knot"
          className="relative top-[180px] md:inline mix-blend-plus-lighter"
          drag
          dragSnapToOrigin
        >
          <Image
            src="/knot3.png"
            alt="object_1"
            height={isMobile ? "150" : "200"}
            width={isMobile ? "150" : "200"}
            className="max-w-none animatedImg"
            draggable="false"
          />
        </motion.div>
        <motion.div
        id="spring"
          className="relative -top-[260px] md:inline mix-blend-plus-lighter"
          drag
          dragSnapToOrigin
        >
          <Image
            src="/spring.png"
            alt="object_2"
            height={isMobile ? "150" : "200"}
            width={isMobile ? "150" : "200"}
            className="max-w-none animatedImg"
            draggable="false"
          />
        </motion.div>
      </div>

      <div className="h-screen w-full flex flex-col justify-center items-center">
        <div className="mt-10 lg:mt-20">
          <h1
            id="title"
            className="text-white transition-all duration-200 font-playfair-regular text-[2.5rem] md:text-7xl lg:text-[6vw] lg:w-[80vw] text-center leading-[1.3] px-6"
          >
            The OG Labs, Redefining Digital Marketing with AI
          </h1>
          <p className="hidden md:block text-white text-xl text-center font-poppins-regular mt-10">
            Where Intelligence Meets Imagination
          </p>
        </div>
        <div id="hero-button" className="mt-20">
          <Link href="/contact">
            <div className="bg-white/90 backdrop-blur-md text-black py-3 px-4 font-poppins-medium flex items-start gap-2 text-sm">
              Start Your AI-Powered Journey <MoveRight />
            </div>
          </Link>
        </div>
        <div id="scroll" className="mt-20">
          <h2 className="text-white/60 hidden md:block">Scroll to Explore</h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
