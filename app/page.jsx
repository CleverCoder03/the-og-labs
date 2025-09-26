"use client";
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

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  return (
    <>
      {!loaded && <Loader onFinish={() => setLoaded(true)} />}
      {loaded && (
        <main>
          <Navbar />
          {/* <TestNavbar /> */}
          <Hero />
          <HeroPara />
          <Services />
          <Testimonial />
          <About />
          <Process />
          <Clients />
          <Impact />
          <CaseStudies />
          <Insight />
          <Contact />
          <Footer />
        </main>
      )}
    </>
  );
}
