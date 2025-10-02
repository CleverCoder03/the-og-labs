"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { useGSAP } from "@gsap/react";
import { useWindowScroll } from "react-use";
import gsap from "gsap";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { useMediaQuery } from "react-responsive";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

const TestNavbar = () => {
  const [toggle, setToggle] = useState(false);
  const [halfScroll, setHalfScroll] = useState(false);
  const navRef = useRef(null);
  const navLinksRef = useRef([]);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  // const pathname = usePathname()

  const { y: currentScolllY } = useWindowScroll();

  useEffect(() => {
    if (currentScolllY >= 300) {
      setHalfScroll(true);
    } else {
      setHalfScroll(false);
    }
  }, [currentScolllY]);

  useGSAP(() => {
    if (toggle) {
      gsap.fromTo(
        navLinksRef.current,
        {
          yPercent: 100,
          opacity: 0,
        },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.8,
          ease: "expo.out",
          delay: 0.5,
          stagger: 0.2, // 0.2s delay between each link
        }
      );
    } else {
      gsap.fromTo(
        navLinksRef.current,
        {
          yPercent: 0,
          opacity: 1,
        },
        {
          yPercent: 100,
          opacity: 0,
          duration: 0.4,
          ease: "expo.out",
        }
      );
    }
  }, [toggle]);

  const navVariants = {
    initial: {
      width: "100%",
    },
    scrolled: {
      width: "70rem",
      backgroundColor: "#1e184d",
    },
  };

  const menuVariants = {
    hidden: {
      y: "-100%", // Start completely off-screen above
      transition: {
        type: "tween",
        duration: 0.4,
        ease: "easeInOut",
      },
    },
    visible: {
      y: "0%", // Animate to the top of the screen
      transition: {
        type: "tween",
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  const animationState = !isMobile && halfScroll ? "scrolled" : "initial";
  return (
    <div className="fixed z-50 w-full h-20 inset-0 border-none transition-all duration-700">
      <motion.div
        initial={{ y: -500 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeInOut" }}
        className="absolute z-50 top-0 left-0 h-full w-full flex justify-center items-center px-2 md:px-10 lg:px-15"
      >
        <motion.div
          variants={navVariants}
          animate={animationState}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          ref={navRef}
          className={`flex justify-between items-center w-full px-3 py-3 rounded-md transition-all duration-300 ${
            isMobile && halfScroll ? "bg-[#1e184d]" : ""
          }`}
        >
          <div>
            <h1 className="uppercase font-michroma-regular text-gray-50">
              <Link href="/">THE OG LAB</Link>
            </h1>
          </div>

          <div className="hidden md:block">
            {navLinks.map((link) => (
              <Link
                className={`text-6xl uppercase gap-4 text-white md:text-base md:capitalize md:ml-4 md:underline-none`}
                key={link.label}
                href={link.href}
                // onClick={() => setToggle(!toggle)}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Link href="/contact">
              <Button
                tag={"Get Started"}
                className={
                  "bg-white font-poppins-medium !text-xs rounded-sm !py-3"
                }
              />
            </Link>
          </div>

          <div
            className="cursor-pointer font-poppins-medium md:hidden text-white"
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? "Close" : "Menu"}
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        variants={menuVariants}
        initial="hidden"
        animate={toggle ? "visible" : "hidden"}
        className="absolute h-dvh w-dvw left-0 bg-[#1e184d]"
      >
        <div className="h-full w-full">
          <div className="absolute w-full h-full px-6 pb-10">
            <div className="h-full w-full flex justify-center items-center">
              <div className="flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <Link
                  className={`text-3xl uppercase gap-4 text-white md:text-base md:capitalize md:ml-4 md:underline-none text-center`}
                  key={link.label}
                  href={link.href}
                  ref={(el) => (navLinksRef.current[index] = el)}
                  onClick={() => setToggle(!toggle)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            </div>
            <div className="-mt-10 flex items-end justify-between w-full">
              <div className="text-white/60">
                <h1>Based in</h1>
                <h1>Pune, India</h1>
              </div>
              <div className="text-right text-white/60">
                <h1>cheers@theoglabs.com</h1>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TestNavbar;
