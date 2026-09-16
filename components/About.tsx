import Image from "next/image";
import Button from "./Button";
import Botanical from "./Botanical";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-cream">
      <div className="mx-auto grid max-w-content items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16">
        <div className="relative order-1">
          <div className="relative h-[280px] w-full overflow-hidden rounded-[2rem] shadow-md sm:h-[380px]">
            <Image
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200&auto=format&fit=crop"
              alt="Quiet café interior with books and warm natural light"
              fill
              sizes="(max-width: 1024px) 100vw, 560px"
              className="object-cover"
            />
          </div>
        </div>

        <div className="relative order-2">
          <p className="mb-3 font-sans text-xs font-semibold tracking-[0.2em] text-terracotta">
            ABOUT OUR SPACE
          </p>

          <h2 className="max-w-md font-serif text-[2.1rem] font-semibold leading-tight text-brown-dark sm:text-[2.4rem]">
            A Quiet Place for Curious Minds
          </h2>

          <p className="mt-5 max-w-md font-sans leading-relaxed text-muted">
            A place shaped by good coffee, thoughtful words, and the pleasure
            of having nowhere else to be. Settle into a quiet corner, open a
            book, meet someone over coffee, or simply let the afternoon unfold
            at its own pace.
          </p>

          <div className="mt-7">
            <Button href="#menu" variant="outline">
              Explore the Space
            </Button>
          </div>

          <Botanical className="pointer-events-none absolute -bottom-10 right-0 hidden h-40 w-24 opacity-80 sm:block" />
        </div>
      </div>
    </section>
  );
}