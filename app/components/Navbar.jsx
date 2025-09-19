"use client";
import Link from "next/link";
import Button from "./Button";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import gsap from "gsap";
import { usePathname } from "next/navigation";
import { useMediaQuery } from "react-responsive";
import { motion } from "motion/react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const navRef = useRef(null);
  const headerRef = useRef(null);
  const navContainerRef = useRef(null);

  const pathname = usePathname();
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    // gsap.from(headerRef.current, {
    //   yPercent: -500,
    //   delay: 1
    // })

    if (isMobile) {
      if (toggle) {
        gsap.to(navRef.current, {
          height: "100dvh",
        });
        gsap.to(headerRef.current, {
          padding: 0,
          duration: 0.4,
          ease: "power2.inOut",
        });
        gsap.to(navContainerRef.current, {
          opacity: 1,
          display: "flex",
          delay: 0.4,
        });
      } else {
        gsap.to(navRef.current, {
          height: "auto",
          duration: 0.8,
          ease: "power2.inOut",
          delay: 0.4,
        });
        gsap.to(headerRef.current, {
          padding: 10,
          duration: 0.4,
          ease: "power2.inOut",
          delay: 0.2,
        });
        gsap.to(navContainerRef.current, {
          opacity: 0,
          display: "none",
        });
      }
    }
  }, [toggle]);
  return (
    <main className="fixed inset-x-0 z-50 border-none transition-all duration-700 ">
      <motion.div
        initial={{ y: -500 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeInOut" }}
        ref={headerRef}
        className="absolute h-full w-full md:py-5 md:px-10 lg:px-15"
      >
        <motion.nav
          initial={{ backgroundColor: "#a1a1a1c9" }}
          animate={
            isMobile ? toggle
              ? { backgroundColor: "#575757" }
              : { backgroundColor: "#a1a1a1c9" } : ""
          }
          transition={{ duration: 0.4, delay: 0.1, ease: "easeInOut" }}
          ref={navRef}
          className="w-full backdrop-blur-2xl flex md:items-center justify-between p-4 lg:p-2"
        >
          <h1 className="uppercase font-michroma-regular text-white md:pl-2">
            <Link href={"/"} onClick={() => setToggle(false)}>
              The og lab
            </Link>
          </h1>

          <div
            ref={navContainerRef}
            className="absolute hidden bottom-4 flex-col gap-4 md:block md:relative md:bottom-0"
          >
            {navLinks.map((link) => (
              <Link
                className={`text-6xl uppercase gap-4 text-white md:text-base md:capitalize md:ml-4 md:underline-none ${
                  pathname === link.href
                    ? "underline underline-offset-6 decoration-4 md:decoration-2 md:text-black"
                    : ""
                }`}
                key={link.label}
                href={link.href}
                onClick={() => setToggle(!toggle)}
              >
                {link.label}
              </Link>
            ))}
            <div className=" mt-20 mb-20 text-xl uppercase gap-4 md:hidden text-white">
              <h1>help@theoglabs.com</h1>
              <h1>Pune, India</h1>
            </div>
          </div>

          <div
            className="cursor-pointer font-poppins-medium md:hidden text-white"
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? "Close" : "Menu"}
          </div>

          <div className="hidden lg:block">
            <Button
              tag={"Get Started"}
              className={"bg-white font-poppins-medium"}
            />
          </div>
        </motion.nav>
      </motion.div>
    </main>
  );
};

export default Navbar;
