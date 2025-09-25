"use client";
import React, { useRef } from "react";
import { ServiceCard } from "./ServiceCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { services } from "@/lib/index";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(() => {
    const section = sectionRef.current;
    const container = containerRef.current;

    let totalScrollWidth = container.scrollWidth; // total horizontal width
    let windowWidth = window.innerWidth; // visible screen width
    let scrollDistance = totalScrollWidth - windowWidth;

    // GSAP horizontal scroll
    gsap.to(container, {
      x: -scrollDistance,
      ease: "none",
      scrollTrigger: {
        trigger: section, // ✅ now it's defined correctly
        start: "top 10%",
        end: `+=${scrollDistance}`,
        scrub: true,
        pin: true,
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0E0652] mt-20 lg:mt-30 text-white py-10 md:py-15 lg:py-18"
    >
      <h2 className="text-center md:text-xl">Our Services</h2>
      <h1 className="text-center text-3xl md:text-5xl mt-5 font-poppins-medium">Our Core Services</h1>
      <div ref={containerRef} className="flex justify-around w-[400vw] md:w-[300vw] lg:w-[200vw] xl:w-[100vw]">
        {services.map(({id, title, desc, bgCoverImg, serviceImg})=>(
          <ServiceCard key={id} title={title} desc={desc} bgCoverImg={bgCoverImg} serviceImg={serviceImg} />
        ))}
      </div>
    </section>
  );
};

export default Services;
