"use client";
import { useGSAP } from "@gsap/react";
import Button from "./Button";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/all";
import Link from "next/link";

// Register both plugins at the top level
gsap.registerPlugin(ScrollTrigger, SplitText);

const HeroPara = () => {
  const sectionRef = useRef(null);
  const paraRef = useRef(null);
  const buttonRef = useRef(null);

  useGSAP(() => {
    // Ensure both refs exist before trying to use them
    if (!paraRef.current || !sectionRef.current) return;

    const splitPara = new SplitText(paraRef.current, { type: "chars, words" });

    // Set the initial state of the characters
    gsap.set(splitPara.chars, { opacity: 0.2 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        end: "bottom center",
        scrub: true,
        // pin: true,
      },
    });

    // Add the animation to the timeline
    tl.to(splitPara.chars, {
      opacity: 1,
      stagger: 0.05,
      ease: "none",
    });

    tl.from(buttonRef.current, {
      opacity: 0,
      yPercent: 100,
      delay: 0.2,
      duration: 0.8,
      ease: "power3.in",
    });
  }, []);

  return (
    <div>
      <div ref={sectionRef} className="bg-white mt-20 px-6 md:px-10 lg:px-[10vw]">
        <div className="font-poppins-medium text-3xl flex items-center justify-center">
          <div className="leading-[1.3] lg:leading-[1.7] xl:leading-[2.3] flex flex-col gap-5 items-center">
            <span className="pr-10 text-base uppercase font-poppins-regular align-middle lg:text-xl">
              The og lab
            </span>
            <p
              ref={paraRef}
              className="mr-4 align-middle text-center text-2xl lg:text-3xl xl:text-4xl w-full lg:w-[70rem]"
            >
              AI-powered, programmatic-first marketing built for brands that
              want to scale smarter. We merge automation, creativity, and
              strategy to maximize ROI and unlock measurable growth.
            </p>
            <span ref={buttonRef}>
                <Link href="/about">
                <Button
                  tag={`Learn More`}
                  className={`bg-black text-white align-middle rounded-md shadow-2xl`}
                />
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPara;
