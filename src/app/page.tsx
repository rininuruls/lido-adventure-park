import Navbar from "@/components/layout/Navbar";

import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Zona from "@/components/home/Zona";
import Activities from "@/components/home/Activities";
import Outbound from "@/components/home/Outbound";
import Gallery from "@/components/home/Gallery";

import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import Contact from "@/components/home/Contact";




export default function Home() {
  return (
    <main
  className="
    overflow-x-hidden
    bg-gradient-to-br
    from-[#F4F8F4]
    via-[#EDF5ED]
    to-[#DCECC8]
  "
>
      <Navbar />

      <Hero />
      <About />
      <Zona />

      <Activities />

      <Outbound />

      <Gallery />

    

      <Testimonials />

      <FAQ />

      <Contact />
    </main>
  );
}