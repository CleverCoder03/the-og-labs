import Hero from "./components/Hero";
import HeroPara from "./components/HeroPara";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";

export default function Home() {
  return (
    <main>
      <Hero />
      <HeroPara />
      <Services />
      <Testimonial />
    </main>
  );
}
