"use client";
import { ReactLenis, useLenis } from 'lenis/react'
import { useState } from "react";
import About from "./components/About";
import CaseStudies from "./components/CaseStudies";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HeroPara from "./components/HeroPara";
import Impact from "./components/Impact";
import Insight from "./components/Insight";
import Navbar from "./components/Navbar";
import Process from "./components/Process";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import Loader from "./components/Loader";
import TestNavbar from "./components/TestNavbar";
import Slider from './components/Swiper';
import Impact2 from './components/Impact2';

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  return (
    <>
    {/* <ReactLenis root /> */}
      {!loaded && <Loader onFinish={() => setLoaded(true)} />}
      {loaded && (
        <main>
          <Navbar />
          {/* <TestNavbar /> */}
          <Hero />
          <HeroPara />
          {/* <Services /> */}
          <Slider />
          <Testimonial />
          <About />
          {/* <Process /> */}
          <Clients />
          {/* <Impact /> */}
          <Impact2 />
          <CaseStudies />
          <Insight />
          <Contact />
          <Footer />
        </main>
      )}
    </>
  );
}
