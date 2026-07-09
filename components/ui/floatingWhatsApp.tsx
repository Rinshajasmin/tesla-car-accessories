"use client";

import { FaWhatsapp } from "react-icons/fa";
import { CONTACT } from "@/constants/contact";

export default function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${CONTACT.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="
        fixed
        bottom-6
        right-6
        z-50
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-full
        bg-[#25D366]
        text-white
        shadow-lg
        transition-all
        duration-300
        hover:scale-110
        hover:shadow-[0_0_30px_rgba(37,211,102,0.6)]
      "
    >
      <FaWhatsapp size={34} />{" "}
    </a>
  );
}
