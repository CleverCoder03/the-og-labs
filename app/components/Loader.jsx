"use client";

import { useState, useEffect } from "react";
import gsap from "gsap";

export default function Loader({ onFinish }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 20; // simulate progress
        return next >= 100 ? 100 : next;
      });
    }, 200);

    if (progress >= 100) {
      clearInterval(interval);
      gsap.to('.loader-wrapper', {
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        onComplete: onFinish, // let parent know loader is done
      });
    }

    return () => clearInterval(interval);
  }, [progress, onFinish]);

  return (
    <div className="fixed inset-0 py-14 px-8 md:py-18 md:px-14 bg-white text-black z-[9999] loader-wrapper">
      <div className="flex justify-center items-center h-full w-full">
        <span className="text-4xl md:text-5xl lg:text-6xl font-bold">{Math.floor(progress)}%</span>
      </div>
    </div>
  );
}
