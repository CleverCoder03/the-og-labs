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
      yPercent: 300,
      duration: 0.4,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <div>
      <div ref={sectionRef} className="mt-20 px-6 md:px-10 lg:px-15">
        <div className="font-poppins-medium text-3xl flex items-center">
          <div className="leading-[1.3] lg:leading-[1.7] xl:leading-[2.3]">
            <span className="pr-10 text-base uppercase font-poppins-regular align-middle hidden md:inline lg:text-xl">
              The og lab
            </span>
            <span
              ref={paraRef}
              className="mr-4 align-middle lg:text-4xl xl:text-5xl w-full"
            >
              AI-powered, programmatic-first marketing built for brands that
              want to scale smarter. We merge automation, creativity, and
              strategy to maximize ROI and unlock measurable growth.
            </span>
            <span ref={buttonRef}>
              <Link href="/about">
                <Button
                  tag={`Learn More`}
                  className={`bg-black text-white align-middle`}
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
