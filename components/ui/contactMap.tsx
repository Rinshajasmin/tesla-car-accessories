"use client";

import { motion } from "framer-motion";

export default function ContactMap() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-zinc-900
        transition-all
        duration-500
        hover:-translate-y-2
        hover:shadow-[0_0_35px_rgba(239,68,68,0.25)]
      "
    >
      <iframe
        title="Tesla Car Accessories Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.315610325479!2d76.22104660913851!3d11.089838889033027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba633b540ae81a7%3A0xf664c68c3b5c15b!2sTESLA%20CAR%20ACCESSORIES!5e0!3m2!1sen!2sin!4v1783587757296!5m2!1sen!2sin"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        className="h-[650px] w-full"
      />
    </motion.div>
  );
}
