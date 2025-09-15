"use client";
import Link from "next/link";
import Button from "./Button";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import gsap from "gsap";
import { usePathname } from "next/navigation";

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

  const pathname = usePathname()

  useGSAP(() => {
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
  }, [toggle]);
  return (
    <main className="fixed inset-x-0 z-50 border-none transition-all duration-700 ">
      <header ref={headerRef} className="absolute h-full w-full">
        <nav
          ref={navRef}
          className="w-full bg-black/40 backdrop-blur-md flex justify-between p-4"
        >
          <h1 className="uppercase font-michroma-regular text-white">
            <Link href={"/"} onClick={()=>setToggle(false)}>
              The og lab
            </Link>
          </h1>

          <div
            ref={navContainerRef}
            className="absolute hidden bottom-4 flex-col gap-4"
          >
            {navLinks.map((link) => (
              <Link
              className={`text-6xl uppercase gap-4 text-white ${pathname === link.href ? "underline underline-offset-6 decoration-4": ""}`}
                key={link.label}
                href={link.href}
                onClick={() => setToggle(!toggle)}
              >
                {link.label}
              </Link>
            ))}
            <div className=" mt-20 text-xl uppercase gap-4 text-white">
              <h1>help@theoglabs.com</h1>
              <h1>+91 12345 12345 | +91 12345 12345</h1>
            </div>
          </div>

          <div
            className="cursor-pointer text-white"
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? "Close" : "Menu"}
          </div>

          <div className="hidden">
            <Button />
          </div>
        </nav>
      </header>
    </main>
  );
};

export default Navbar;
