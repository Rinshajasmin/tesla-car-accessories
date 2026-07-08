"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

type ServiceFeatureProps = {
  title: string;
  description: string;
  image: string;
  features: string[];
  reverse?: boolean;
};

export default function ServiceFeature({
  title,
  description,
  image,
  features,
  reverse = false,
}: ServiceFeatureProps) {
  return (

    
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`grid items-center gap-16 lg:grid-cols-2 ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* Image */}

      <motion.div
        initial={{ opacity: 0, x: reverse ? 80 : -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative h-[420px] overflow-hidden rounded-3xl group hover:-translate-y-2 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2

hover:shadow-[0_0_35px_rgba(239,68,68,0.35)]"
      >
        <Image
          src={image}
          alt={title}
          fill
            sizes="(max-width: 1024px) 100vw, 50vw"

          className="object-cover"
        />
      </motion.div>

      {/* Content */}

      <motion.div
        initial={{ opacity: 0, x: reverse ? -80 : 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="mb-5 text-3xl font-bold text-white">
          {title}
        </h3>

        <p className="mb-8 leading-8 text-zinc-400">
          {description}
        </p>

        <div className="space-y-4">
          {features.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-3"
            >
              <CheckCircle2 className="h-5 w-5 text-red-500" />

              <span className="text-zinc-300">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}