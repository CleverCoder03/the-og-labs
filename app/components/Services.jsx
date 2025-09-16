"use client";
import React, { useRef } from "react";
import { ServiceCard } from "./ServiceCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { services } from "@/lib/services";

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
        anticipatePin: 1,
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0E0652] mt-20 text-white py-10"
    >
      <h2 className="text-center">Our Services</h2>
      <h1 className="text-center text-4xl my-5">Our Core Services</h1>
      <div ref={containerRef} className="flex justify-around w-[400vw] md:w-[300vw] lg:w-[200vw] xl:w-[100vw]">
        {services.map(({id, title, desc, bgCoverImg, serviceImg})=>(
          <ServiceCard key={id} title={title} desc={desc} bgCoverImg={bgCoverImg} serviceImg={serviceImg} />
        ))}
      </div>
    </section>
  );
};

export default Services;
