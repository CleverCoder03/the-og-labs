"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";

gsap.registerPlugin(SplitText);

const InsightPara = () => {
  const insightPara = useRef(null);

  useGSAP(() => {
    const splitInsightPara = new SplitText(insightPara.current, {
          type: "chars, words",
        });
    const tl = gsap.timeline();

    tl.fromTo(
      splitInsightPara.words,
      { opacity: 0 },
      { opacity: 1, duration: 0.6, stagger: 0.1, ease: "power.inOut" }
    );
  });
  return (
    <div
      ref={insightPara}
      className="text-center w-90 font-playfair-regular md:text-lg text-white"
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque consequatur
      iste, maxime eius modi corporis aperiam unde illo. Enim, temporibus!
    </div>
  );
};

export default InsightPara;
