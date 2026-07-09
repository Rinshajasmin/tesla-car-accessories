"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock3, MessageCircle } from "lucide-react";
import { FaInstagram, FaFacebookF, FaGoogle } from "react-icons/fa";

import { CONTACT } from "@/constants/contact";

export default function ContactCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="
        rounded-3xl
        border
        border-white/10
        bg-zinc-900
        p-8
        transition-all
        duration-500
        hover:-translate-y-2
        hover:shadow-[0_0_35px_rgba(239,68,68,0.25)]
      "
    >
      <div className="space-y-8">
        {/* Address */}

        <div className="flex items-start gap-4">
          <MapPin className="mt-1 h-6 w-6 text-red-500" />

          <div>
            <h3 className="font-semibold text-white">Address</h3>

            <div className="mt-2 space-y-1 text-zinc-400">
              {CONTACT.address.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Phone */}

        <div className="flex items-start gap-4">
          <Phone className="mt-1 h-6 w-6 text-red-500" />

          <div>
            <h3 className="font-semibold text-white">Phone</h3>

            <p className="mt-2 text-zinc-400">{CONTACT.phone}</p>
          </div>
        </div>

        {/* Email */}

        <div className="flex items-start gap-4">
          <Mail className="mt-1 h-6 w-6 text-red-500" />

          <div>
            <h3 className="font-semibold text-white">Email</h3>

            <p className="mt-2 text-zinc-400">{CONTACT.email}</p>
          </div>
        </div>

        {/* Working Hours */}

        <div className="flex items-start gap-4">
          <Clock3 className="mt-1 h-6 w-6 text-red-500" />

          <div>
            <h3 className="font-semibold text-white">Working Hours</h3>

            <div className="mt-2 space-y-1 text-zinc-400">
              {CONTACT.hours.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Buttons */}

      <div className="mt-10 border-t border-white/10 pt-8">
        <p className="mb-6 text-center text-sm font-semibold uppercase tracking-[0.3em] text-zinc-400">
          Follow Us
        </p>

        <div className="flex justify-center gap-5">
          {/* Instagram */}

          <a
            href={CONTACT.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-full
        bg-zinc-800
        text-white
        transition-all
        duration-300
        hover:-translate-y-1
        hover:bg-pink-600
      "
          >
            <FaInstagram size={24} />
          </a>

          {/* Facebook */}

          <a
            href={CONTACT.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-full
        bg-zinc-800
        text-white
        transition-all
        duration-300
        hover:-translate-y-1
        hover:bg-blue-600
      "
          >
            <FaFacebookF size={22} />
          </a>

          {/* Google */}

          <a
            href={CONTACT.social.google}
            target="_blank"
            rel="noopener noreferrer"
            className="
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-full
        bg-zinc-800
        text-white
        transition-all
        duration-300
        hover:-translate-y-1
        hover:bg-red-500
      "
          >
            <FaGoogle size={22} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
