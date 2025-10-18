"use client";
import {motion} from "motion/react"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const InsightHeroImage = ({src}) => {
  const containerRef = useRef(null);
  const imageContainerRef = useRef(null);
  useGSAP(() =>
    gsap
      .timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      })
      .to(imageContainerRef.current, {
        width: "100vw",
      })
  );
  return (
    <motion.div initial={{ opacity: 0 }}
              // The state to animate to WHEN the element is in the viewport
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.83, 0, 0.17, 1], delay: 0.4 }} ref={containerRef} className="mt-30">
      <div
        ref={imageContainerRef}
        className="relative w-[70vw] md:w-[75vw] h-[50vh] lg:h-[80vh]"
      >
        <Image
          src={src}
          alt="insight-image"
          className="object-contain"
          fill
        />
      </div>
    </motion.div>
  );
};

export default InsightHeroImage;
