import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import ActivitiesSlider from "@/components/home/ActivitiesSlider";
import Pricing from "@/components/home/Pricing";
import Outbound from "@/components/home/Outbound";
import Zona from "@/components/home/Zona";
import Gallery from "@/components/home/Gallery";
import FAQ from "@/components/home/FAQ";
import Contact from "@/components/home/Contact";
import Footer from "@/components/layout/Footer";


export default function Home() {
  return (
    <main className="bg-black overflow-hidden">

      <Navbar />

      <Hero />

      <About />

      <ActivitiesSlider />

      <Pricing />

      <Outbound />

      <Gallery />

      <FAQ />

      <Contact />

      <Footer />

    </main>
  );
}