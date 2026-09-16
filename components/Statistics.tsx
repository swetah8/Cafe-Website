import { Coffee, Users, Star, Leaf } from "lucide-react";
import { stats } from "@/lib/data";

const icons = {
  coffeeCup: Coffee,
  users: Users,
  star: Star,
  leaf: Leaf,
};

export default function Statistics() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-content px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-serif text-[2.1rem] font-semibold leading-tight text-brown-dark sm:text-[2.4rem]">
            Our Story
          </h2>
          <p className="mt-3 font-sans text-muted">
            More than a caf&eacute; &mdash; a community
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-y-10 sm:grid-cols-4 sm:gap-y-0">
          {stats.map((stat, i) => {
            const Icon = icons[stat.icon];
            return (
              <div
                key={stat.id}
                className={`relative flex flex-col items-center px-4 text-center ${
                  i > 0 ? "sm:border-l sm:border-brown-light/40" : ""
                }`}
              >
                <Icon size={26} strokeWidth={1.5} className="text-terracotta" />
                <p className="mt-3 font-serif text-2xl font-semibold text-brown-dark sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 font-sans text-sm text-muted">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
