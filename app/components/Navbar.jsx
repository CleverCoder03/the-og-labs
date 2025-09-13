"use client"
import Link from "next/link"
import Button from "./Button"
import { useGSAP } from "@gsap/react"
import { useRef, useState } from "react"
import gsap from "gsap"

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const navRef = useRef(null)
  useGSAP(()=>{
    if (toggle) {
      gsap.to(navRef.current, {
        height: "100%"
      })
    } else {
      gsap.to(navRef.current, {
        height: "auto",
        duration: 0.8,
        ease: "power2.inOut"
      })
    }
  }, [toggle])
  return (
    <main className="fixed h-[100dvh] w-screen py-2 px-2">
        <nav ref={navRef} className="w-full bg-white/40 backdrop-blur-md flex justify-between py-5 px-4">
            <h1 className="uppercase font-michroma-regular text-white">The og lab</h1>

            <div className="hidden">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/services">Services</Link>
              <Link href="/contact">Contact Us</Link>
            </div>

            <div className="cursor-pointer " onClick={()=> setToggle(!toggle)}>
              {toggle ? "Close" : "Menu"}
            </div>

            <div className="hidden">
              <Button />
            </div>
        </nav>
    </main>
  )
}

export default Navbar