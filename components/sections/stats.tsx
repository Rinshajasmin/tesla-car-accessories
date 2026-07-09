"use client";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { Wrench, KeyRound, Car, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";

const stats = [
  {
    icon: Wrench,
    value: 10,
    suffix: "+",
    title: "Years",
    subtitle: "Experience",
  },
  {
    icon: Car,
    value: 5000,
    suffix: "+",
    title: "Vehicles",
    subtitle: "Served",
  },
  {
    icon: KeyRound,
    value: 3000,
    suffix: "+",
    title: "Keys",
    subtitle: "Programmed",
  },
  {
    icon: ShieldCheck,
    value: 100,
    suffix: "%",

    title: "Trusted",
    subtitle: "Quality",
  },
];

export default function Stats() {
  return (
    <section className="bg-[#090909] py-10">
      <Container>
        <div className="grid overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] md:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                className={`flex flex-col items-center px-8 py-8 text-center ${
                  index !== stats.length - 1
                    ? "lg:border-r lg:border-white/10"
                    : ""
                }`}
              >
                <Icon className="mb-4 h-8 w-8 text-red-500" />

                <h3 className="text-3xl font-bold text-white">
                  <CountUp
                    end={item.value}
                    duration={2}
                    suffix={item.suffix}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                </h3>

                <p className="mt-2 text-sm text-zinc-300">{item.title}</p>

                <p className="text-sm text-zinc-500">{item.subtitle}</p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
