import Image from "next/image";
import Button from "./Button";
import Botanical from "./Botanical";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="mx-auto grid max-w-content items-center gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-8 lg:py-24">
        {/* Left */}
        <div className="relative z-10 order-2 lg:order-1">
          <p className="mb-4 font-sans text-xs font-semibold tracking-[0.2em] text-terracotta">
            COFFEE &bull; BOOKS &bull; QUIET MOMENTS
          </p>

          <h1 className="max-w-xl font-serif text-[2.6rem] font-semibold leading-[1.1] text-brown-dark sm:text-[3.2rem]">
            Where Stories
            <br />
            Steep Slowly
          </h1>

          <p className="mt-5 max-w-md font-sans text-[1.02rem] leading-relaxed text-muted">
            Thoughtfully brewed coffee, well-loved books, and a quiet corner
            for people who prefer to take their time.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href="#menu">Explore Menu</Button>
            <Button href="#about" variant="outline" showArrow={false}>
              Our Space
            </Button>
          </div>
        </div>

        {/* Right */}
        <div className="relative order-1 flex justify-center lg:order-2 lg:justify-end">
          <div
            aria-hidden="true"
            className="absolute -right-6 top-4 h-64 w-64 rounded-full bg-brown-light/30 sm:h-80 sm:w-80"
          />
          <div
            aria-hidden="true"
            className="absolute -left-4 bottom-0 h-40 w-40 rounded-full bg-terracotta/10 sm:h-52 sm:w-52"
          />
          <Botanical className="pointer-events-none absolute -left-8 top-0 hidden h-56 w-32 sm:block" />
          <Botanical
            flip
            className="pointer-events-none absolute -right-8 bottom-0 hidden h-56 w-32 sm:block"
          />

          <div className="relative right-24 h-[340px] w-[280px] overflow-hidden rounded-t-[140px] rounded-b-3xl shadow-xl sm:h-[420px] sm:w-[340px]">
            <Image
              src="/images/hero.jpg"
              alt="Latte art in a warm café setting"
              fill
              priority
              sizes="(max-width: 640px) 280px, 340px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
