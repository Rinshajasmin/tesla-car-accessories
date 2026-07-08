import Image from "next/image";
import { Container } from "@/components/ui/Container";

import ServiceFeature from "@/components/ui/serviceFeature";
const services = [
  {
    title: "Premium Car & Bike Accessories",
    image: "/images/about1.png",
    description:
      "Enhance your driving experience with professionally installed premium accessories designed for comfort, safety, and style.",

    features: [
      "Android Stereo Installation",
      "Reverse Camera",
      "Premium Audio Systems",
      "Ambient Lighting",
      "LED Headlights",
      "Seat Covers & Floor Mats",
    ],
  },

  {
    title: "Advanced Key Programming",
    image: "/images/about2.png",
    description:
      "Professional key programming and advanced automotive electronic solutions using industry-grade diagnostic equipment.",

    features: [
      "Smart Key Programming",
      "Remote Programming",
      "ECM Programming",
      "BCM Programming",
      "Sensor Programming",
      "Immobilizer Solutions",
    ],
  },

  {
    title: "Hydrogen Engine Decarbonising",
    image: "/images/about3.png",
    description:
      "Modern hydrogen-oxygen engine cleaning technology that restores engine performance and improves efficiency.",

    features: [
      "Hydrogen Carbon Cleaning",
      "Improved Fuel Economy",
      "Reduced Emissions",
      "Better Engine Performance",
      "Smooth Engine Operation",
      "Extended Engine Life",
    ],
  },
];
export default function Services() {
  return (
    <section id="about" className="bg-[#090909] py-28">
      <Container>
       <>
  {/* Heading */}
  <div className="mx-auto mb-20 max-w-3xl text-center">
    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-red-500">
      Our Services
    </p>

    <h2 className="text-4xl font-bold text-white md:text-5xl">
      Complete Automotive Solutions
    </h2>

    <p className="mt-6 text-lg leading-8 text-zinc-400">
      Tesla specializes in premium automotive accessories,
      advanced key programming, and hydrogen-oxygen engine
      decarbonising. We combine cutting-edge technology with
      skilled craftsmanship to deliver reliable solutions for
      every vehicle.
    </p>
  </div>

  <div className="space-y-32">
  {services.map((service, index) => (
    <ServiceFeature
      key={service.title}
      title={service.title}
      description={service.description}
      image={service.image}
      features={service.features}
      reverse={index % 2 !== 0}
    />
  ))}
</div>


</>
      </Container>
    </section>
  );
}