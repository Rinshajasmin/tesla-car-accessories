"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type GalleryCardProps = {
  image: string;
  title: string;
  size: "large" | "small";
};

export default function GalleryCard({
  image,
  title,
  size,
}: GalleryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className={`
        group
        relative
        overflow-hidden
        break-inside-avoid

        rounded-3xl
        cursor-pointer
        transition-all
        duration-700
        ease-out
        hover:-translate-y-2
        hover:shadow-[0_0_35px_rgba(239,68,68,0.35)]

        ${
         size === "large"
  ? "h-[520px]"
  : "h-[320px]"
        }
      `}
    >
      {/* Image */}

      <Image
        src={image}
        alt="Tesla Gallery Image"
        fill
        sizes="(max-width:768px) 100vw,
               (max-width:1024px) 50vw,
               33vw"
        className="
          object-cover
          transition-transform
          duration-700
          group-hover:scale-105
        "
      />

      {/* Dark Overlay */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/80
          via-black/20
          to-transparent
        "
      />

      {/* Title */}

      <div className="absolute bottom-6 left-6">
        <h3 className="text-xl font-semibold text-white">
          {title}
        </h3>
      </div>
    </motion.div>
  );
}