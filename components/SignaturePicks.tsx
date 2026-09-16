import Image from "next/image";
import { Coffee, Croissant, Egg, Salad, CakeSlice } from "lucide-react";
import { menuItems } from "@/lib/data";

const icons = {
  coffee: Coffee,
  croissant: Croissant,
  egg: Egg,
  salad: Salad,
  cake: CakeSlice,
};

export default function SignaturePicks() {
  return (
    <section id="menu" className="bg-cream">
      <div className="mx-auto max-w-content px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-lg text-center">
          <p className="mb-3 font-sans text-xs font-semibold tracking-[0.2em] text-terracotta">
            WHAT WE SERVE
          </p>
          <h2 className="font-serif text-[2.1rem] font-semibold leading-tight text-brown-dark sm:text-[2.4rem]">
            Our Signature Picks
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {menuItems.map((item) => {
            const Icon = icons[item.icon];
            return (
              <div
                key={item.id}
                className="group flex flex-col overflow-hidden rounded-[1.5rem] bg-white shadow-[0_6px_20px_-8px_rgba(57,47,42,0.15)] transition-shadow duration-300 hover:shadow-[0_12px_28px_-8px_rgba(57,47,42,0.25)]"
              >
                <div className="relative h-32 w-full overflow-hidden sm:h-36">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="220px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col px-4 pb-5 pt-10">
                  <span className="-mt-8 mb-3 flex h-9 w-9 items-center justify-center rounded-full border-4 border-white bg-terracotta text-cream shadow-sm">
                    <Icon size={15} strokeWidth={2} />
                  </span>
                  <h3 className="font-serif text-lg font-semibold text-brown-dark">
                    {item.title}
                  </h3>
                  <p className="mt-1 flex-1 font-sans text-sm leading-snug text-muted">
                    {item.description}
                  </p>
                  <a
                    href="#menu"
                    className="mt-3 inline-flex items-center gap-1 font-sans text-sm font-semibold text-terracotta hover:text-terracotta-dark"
                  >
                    View Menu <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
