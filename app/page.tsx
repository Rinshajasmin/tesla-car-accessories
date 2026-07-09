import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import Stats from "@/components/sections/stats";
import About from "@/components/sections/about";
import Gallery from "@/components/sections/gallery";
import Brands from "@/components/sections/brands";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";
import SectionDivider from "@/components/ui/sectionDivider";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-20">
        <Hero />
         <Stats />
        <SectionDivider />
         <About />
        <SectionDivider />
        <Services />
        <SectionDivider />
        <Gallery />
        <SectionDivider />
        <Brands />
        <SectionDivider />
        <Contact />
        <Footer />  
      </main>
    </>
  );
}
