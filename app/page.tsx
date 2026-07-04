import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"


export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-20">
        <Hero/>
        <About/>
      </main>
    </>
  );
}