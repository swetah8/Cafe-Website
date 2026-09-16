"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { galleryImages } from "@/lib/data";
import Button from "./Button";

export default function Gallery() {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length);
  const next = () => setIndex((i) => (i + 1) % galleryImages.length);

  return (
    <section id="gallery" className="bg-cream">
      <div className="mx-auto max-w-content px-5 py-16 sm:px-8 sm:py-20">
        <div className="relative h-[340px] w-full overflow-hidden rounded-[2rem] shadow-lg sm:h-[420px]">
          {galleryImages.map((src, i) => (
            <Image
              key={src}
              src={src}
              alt="BeanBloom café gallery"
              fill
              sizes="1200px"
              priority={i === 0}
              className={`object-cover transition-opacity duration-500 ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/80 via-brown-dark/20 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 flex flex-col gap-4 p-8 sm:p-10">
            <div>
              <p className="mb-2 font-sans text-xs font-semibold tracking-[0.2em] text-cream/80">
                OUR GALLERY
              </p>
              <h2 className="font-serif text-[1.9rem] font-semibold text-cream sm:text-[2.3rem]">
                Photo Gallery
              </h2>
              <p className="mt-2 max-w-sm font-sans text-sm text-cream/85">
                Moments from our caf&eacute;, events, and happy customers.
              </p>
              <div className="mt-5">
                <Button href="#gallery" variant="outline-light">
                  View Gallery
                </Button>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 right-8 flex gap-3 sm:bottom-10 sm:right-10">
            <button
              aria-label="Previous photo"
              onClick={prev}
              className="btn-focus flex h-10 w-10 items-center justify-center rounded-full border border-cream/50 text-cream transition-colors hover:bg-cream hover:text-brown-dark"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              aria-label="Next photo"
              onClick={next}
              className="btn-focus flex h-10 w-10 items-center justify-center rounded-full border border-cream/50 text-cream transition-colors hover:bg-cream hover:text-brown-dark"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
