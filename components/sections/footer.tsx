"use client";

import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { SITE } from "@/constants/site";
import { THEME } from "@/constants/theme";

const links = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#090909]">
      <Container>
        <div className="py-16">
          {/* Logo */}

          <div className="text-center">
            <h2
              className={`
    text-3xl
    font-extrabold
    tracking-wide
    ${THEME.colors.brandGradient}
    bg-clip-text
    text-transparent
    drop-shadow-[0_0_12px_rgba(239,68,68,0.5)]
  `}
            >
              {SITE.name}
            </h2>

            <p
              className="
    mt-3
    text-sm
    font-medium
    tracking-[0.08em]
    text-zinc-300
  "
            >
              ACCESSORIES • KEY PROGRAMMING • DECARBONISATION
            </p>
            <p className="mx-auto mt-5 max-w-xl text-zinc-400">
              Premium Automotive Solutions Since 2000
            </p>
          </div>

          {/* Divider */}

          <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-red-500/40 to-transparent" />

          {/* Navigation */}

          <div className="flex flex-wrap justify-center gap-8">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="
                  text-sm
                  uppercase
                  tracking-widest
                  text-zinc-400
                  transition
                  duration-300
                  hover:text-red-500
                "
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Bottom */}

          <div className="mt-12 text-center">
            <p className="text-sm text-zinc-500">
              © {new Date().getFullYear()} Tesla Car Accessories. All Rights
              Reserved.
            </p>

            <p className="mt-3 text-sm text-zinc-600">
              Designed & Developed by Rinsha Jasmin
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
