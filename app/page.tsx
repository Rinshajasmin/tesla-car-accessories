import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/hero"
import Services from "@/components/sections/services";
import Stats from "@/components/sections/stats";
import About from "@/components/sections/about";
import Gallery from "@/components/sections/gallery"


export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-20">
        <Hero/>
        <Stats/>
        <About/>
        <Services/>
        <Gallery/>
      </main>
    </>
  );
}