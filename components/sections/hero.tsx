"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import Image from "next/image";
import { Button } from "../ui/button";
import { THEME } from "@/constants/theme";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Background */}
      <Image
        src="/images/hero.png"
        alt="Premium car accessories"
        fill
        priority
        sizes="100vw"

        className="-z-20 object-cover object-[70%_center] md:object-center"
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/85 via-black/60 to-black/20" />

      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#090909] via-transparent to-transparent" />
      <Container className="pl-4 md:pl-8 lg:pl-5">
        <div className="max-w-3xl pt-15">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-sm uppercase tracking-[0.35em] text-red-500"
          >
            Premium Automotive Studio
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.4,
              delay: 0.6,
              ease: "easeOut",
            }}
            className="text-4xl font-bold leading-tight text-white md:text-6xl lg:text-[4.5rem]"
          >
            Car & Bike Accessories
            <br />
            Key Programming
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              delay: 1.0,
              ease: "easeOut",
            }}
            className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400"
          >
            Transform your driving experience with premium accessories,
            precision installation, and craftsmanship trusted by thousands of
            satisfied customers.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.4,
              duration: 0.8,
              ease: "easeOut",
            }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Link href="#services">
              <Button
                size="lg"
                className={`h-14
      rounded-full
      ${THEME.colors.brandGradient}
      px-8
      text-base
      font-semibold
      text-white
      shadow-[0_0_20px_rgba(239,68,68,0.35)]
      transition-all
      duration-300
      hover:scale-105
      hover:shadow-[0_0_30px_rgba(239,68,68,0.6)]
    `}
              >
                Explore Services
              </Button>
            </Link>

            <Link href="#contact">
              <Button
                size="lg"
                variant="outline"
                className="h-14 rounded-full border-white/20 bg-white/5 px-8 text-base text-white backdrop-blur-md hover:bg-white/10"
              >
                Connect
              </Button>
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
