import Button from "./Button";
import Botanical from "./Botanical";

export default function Mission() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-content px-5 pb-4 sm:px-8">
        <div className="grid overflow-hidden rounded-[2rem] bg-white shadow-[0_10px_30px_-12px_rgba(57,47,42,0.18)] lg:grid-cols-2">
          <div className="relative flex flex-col justify-center bg-beige/60 px-8 py-14 sm:px-12">
            <blockquote className="font-serif text-[1.9rem] italic leading-tight text-brown-dark sm:text-[2.3rem]">
              &ldquo;Some thoughts
              <br />
              need a little
              <br />
              quiet.&rdquo;
            </blockquote>

            <Botanical className="pointer-events-none absolute bottom-6 right-6 h-28 w-20 opacity-70" />
          </div>

          <div className="relative flex flex-col justify-center px-8 py-14 sm:px-12">
            <p className="mb-3 font-sans text-xs font-semibold tracking-[0.2em] text-terracotta">
              OUR PHILOSOPHY
            </p>

            <h2 className="font-serif text-[1.9rem] font-semibold leading-tight text-brown-dark sm:text-[2.2rem]">
              Make Room for Thought
            </h2>

            <p className="mt-4 max-w-sm font-sans leading-relaxed text-muted">
              We believe the best moments are rarely rushed. Our space brings
              together carefully brewed coffee, good books, and the simple
              freedom to sit, read, think, and stay awhile.
            </p>

            <div className="mt-7">
              <Button href="#about" variant="outline">
                Our Story
              </Button>
            </div>

            <Botanical
              flip
              className="pointer-events-none absolute bottom-4 right-4 h-24 w-16 opacity-60"
            />
          </div>
        </div>
      </div>
    </section>
  );
}