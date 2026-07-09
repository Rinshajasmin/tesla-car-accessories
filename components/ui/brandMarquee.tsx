"use client";

import Image from "next/image";
import { BRANDS } from "@/constants/brands";

export default function BrandMarquee() {
  return (
    <div className="relative overflow-hidden py-8">
      {/* First Row */}
      <div className="flex w-max animate-marquee gap-20">
        {[...BRANDS, ...BRANDS].map((brand, index) => (
          <div
            key={`${brand.id}-${index}`}
            className="
    flex
    h-16
    w-40
    items-center
    justify-center
  "
          >
            <Image
              src={brand.logo}
              alt={brand.name}
              width={170}
              height={70}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
