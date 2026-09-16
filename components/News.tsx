import Image from "next/image";
import { CalendarDays } from "lucide-react";
import { newsItems } from "@/lib/data";
import Button from "./Button";

export default function News() {
  return (
    <section id="blog" className="bg-beige">
      <div className="mx-auto grid max-w-content items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <div>
          <p className="mb-3 font-sans text-xs font-semibold tracking-[0.2em] text-terracotta">
            FROM THE READING ROOM
          </p>

          <h2 className="font-serif text-[2.1rem] font-semibold leading-tight text-brown-dark sm:text-[2.4rem]">
            Notes &amp; Happenings
          </h2>

          <p className="mt-4 max-w-sm font-sans leading-relaxed text-muted">
            Discover new books, quiet gatherings, seasonal brews, and little
            things happening around our space.
          </p>

          <div className="mt-7">
            <Button href="#blog">Explore the Journal</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {newsItems.map((item) => (
            <article
              key={item.id}
              className="overflow-hidden rounded-[1.5rem] bg-white shadow-[0_6px_20px_-8px_rgba(57,47,42,0.12)] transition-shadow hover:shadow-[0_12px_28px_-8px_rgba(57,47,42,0.22)]"
            >
              <div className="relative h-36 w-full sm:h-40">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="320px"
                  className="object-cover"
                />
              </div>

              <div className="px-5 py-5">
                <h3 className="font-serif text-lg font-semibold leading-snug text-brown-dark">
                  {item.title}
                </h3>

                <p className="mt-2 flex items-center gap-1.5 font-sans text-xs text-muted">
                  <CalendarDays size={13} />
                  {item.date}
                </p>

                <a
                  href="#blog"
                  className="mt-3 inline-flex items-center gap-1 font-sans text-sm font-semibold text-terracotta hover:text-terracotta-dark"
                >
                  Read Entry <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}