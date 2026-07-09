"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { GalleryItem } from "@/constants/gallery";

type GalleryLightboxProps = {
  images: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
};

export default function GalleryLightbox({
  images,
  currentIndex,
  onClose,
  onPrevious,
  onNext,
}: GalleryLightboxProps) {
  if (currentIndex === null) return null;

  const currentImage = images[currentIndex];

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        {/* Close Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="
            absolute
            right-8
            top-8
            z-20
            rounded-full
            bg-white/10
            p-3
            text-white
            backdrop-blur
            transition
            hover:bg-red-600
          "
        >
          <X size={28} />
        </button>

        {/* Previous */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrevious();
          }}
          className="
            absolute
            left-6
            top-1/2
            z-20
            -translate-y-1/2
            rounded-full
            bg-white/10
            p-3
            text-white
            backdrop-blur
            transition
            hover:bg-red-600
          "
        >
          <ChevronLeft size={32} />
        </button>

        {/* Next */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="
            absolute
            right-6
            top-1/2
            z-20
            -translate-y-1/2
            rounded-full
            bg-white/10
            p-3
            text-white
            backdrop-blur
            transition
            hover:bg-red-600
          "
        >
          <ChevronRight size={32} />
        </button>

        {/* Image */}
        <motion.div
          key={currentImage.id}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          className="relative h-[85vh] w-[90vw] max-w-7xl"
        >
          <Image
            src={currentImage.image}
            alt="Tesla Gallery Image"
            fill
            sizes="90vw"
            className="object-contain"
            priority
          />
        </motion.div>

        {/* Counter */}
        <div
          className="
            absolute
            bottom-8
            left-1/2
            -translate-x-1/2
            rounded-full
            bg-white/10
            px-5
            py-2
            text-sm
            text-white
            backdrop-blur
          "
        >
          {currentIndex + 1} / {images.length}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
