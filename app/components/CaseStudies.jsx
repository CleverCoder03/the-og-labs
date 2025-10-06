"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import caseStudiesData from "@/lib";
import Link from "next/link";


const CaseStudies = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (id) => {
    setHoveredId(id);
  };

  const handleMouseLeave = () => {
    setHoveredId(null);
  };

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className="">
      <div className="bg-white mt-10 md:mt-15 lg:mt-18">
        <h2 className="text-center md:text-xl">Our Portfolio</h2>
        <p className="text-3xl md:text-5xl font-poppins-medium text-center mt-5">
          Case Studies
        </p>
      </div>
      <div className="bg-white mt-5 px-6 md:px-10 lg:px-15 relative lg:flex lg:justify-center">
        <div className="lg:w-[70rem]">
          {caseStudiesData.map((caseStudy) => (
          <Link key={caseStudy.id} href={`/casestudy/${caseStudy.id}`}>
            <div
              className={`border-b relative transition-all duration-500 cursor-pointer ${
                hoveredId === caseStudy.id && "bg-[#0E0652]"
              }`} // Ensure relative positioning for internal elements if needed
              onMouseEnter={() => handleMouseEnter(caseStudy.id)}
              onMouseLeave={handleMouseLeave}
              onMouseMove={handleMouseMove}
            >
              <div className="flex justify-between">
                <div className="py-10 pl-3 lg:pl-5">
                  <h1
                    className={`font-poppins-medium text-lg transition-all duration-300 ${
                      hoveredId === caseStudy.id && "text-white"
                    }`}
                  >
                    {caseStudy.title}
                  </h1>
                  <p
                    className={`font-poppins-regular text-black/60 text-sm leading-[1.2] mt-4 transition-all duration-300 ${
                      hoveredId === caseStudy.id && "text-white/60"
                    }`}
                  >
                    {caseStudy.briefDesc}
                  </p>
                </div>
              </div>

              {/* Floating Image */}
              {/* {hoveredId === caseStudy.id && (
                <Image
                  src={caseStudy.src} // Use the actual image source
                  alt={`case-study-${caseStudy.title}`}
                  width={170} // Adjust width and height as needed
                  height={120}
                  style={{
                    position: "fixed", // Use 'fixed' to position relative to the viewport
                    left: mousePosition.x + 100, // Offset from cursor for better visibility
                    top: mousePosition.y + 80,
                    objectFit: "contain",
                    pointerEvents: "none", // Prevent image from blocking mouse events
                    zIndex: 9999, // Ensure it's on top of other content
                    transform: "translate(-50%, -50%)", // Center the image on the cursor
                  }}
                />
              )} */}
            </div>
          </Link>
        ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
