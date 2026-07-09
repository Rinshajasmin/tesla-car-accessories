"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import ContactCard from "@/components/ui/contactCard";
import ContactMap from "@/components/ui/contactMap";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#090909] py-24 md:py-32">
      <Container>
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-red-500">
            Get In Touch
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Let's Build Your Dream Car
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Whether you're looking for premium accessories, key programming, or
            professional installation, we're here to help.
          </p>
        </motion.div>

        {/* Contact Layout */}
        <div className="overflow-hidden">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_1.4fr]">
            <ContactCard />

            <ContactMap />
          </div>
        </div>
      </Container>
    </section>
  );
}
