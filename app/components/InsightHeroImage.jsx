"use client";
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
    <div ref={containerRef} className="mt-30">
      <div
        ref={imageContainerRef}
        className="relative w-[70vw] md:w-[75vw] h-[50vh] lg:h-[80vh]"
      >
        <Image
          src={src}
          alt="insight-image"
          className="object-cover"
          fill
        />
      </div>
    </div>
  );
};

export default InsightHeroImage;
