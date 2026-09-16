import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  MapPin,
  Mail,
} from "lucide-react";
import Image from "next/image";
import { navLinks } from "@/lib/data";
import Button from "./Button";

const socials = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-brown-dark text-cream/85">
      <div className="mx-auto max-w-content px-5 py-14 sm:px-8 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center">
              <a
                href="#"
                className="flex shrink-0 items-center "
              > 
              <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden ">
                  <Image
                    src="/images/biblio.png"
                    alt="Biblio Kaffee logo"
                    fill
                    priority
                    sizes="36px"
                    className="object-contain "
                  />
                </span>

                <span className="leading-tight mt-4">
                  <span className="block font-serif text-[1.05rem] font-semibold text-cream">
                    Biblio Kaffee
                  </span>

                  <span className="block font-sans text-[0.58rem] font-semibold tracking-[0.18em] text-cream/60">
                    COFFEE &amp; LITERATURE
                  </span>
                </span>
              </a>
            </div>

            <p className="mt-4 max-w-xs font-sans text-sm leading-relaxed text-cream/60">
              Good coffee, great books, and meaningful moments.
            </p>

            <div className="mt-5 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="btn-focus flex h-9 w-9 items-center justify-center rounded-full border border-cream/20 text-cream/80 transition-colors hover:border-terracotta hover:bg-terracotta hover:text-cream"
                >
                  <s.icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-base font-semibold text-cream">
              Quick Links
            </h3>

            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-sans text-sm text-cream/65 transition-colors hover:text-terracotta"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-base font-semibold text-cream">
              Visit Us
            </h3>

            <ul className="mt-4 space-y-3 font-sans text-sm text-cream/65">
              <li className="flex items-center gap-2.5">
                <MapPin
                  size={15}
                  className="shrink-0 text-terracotta"
                />
                Kathmandu, Nepal
              </li>

              <li className="flex items-center gap-2.5">
                <Mail
                  size={15}
                  className="shrink-0 text-terracotta"
                />
                hello@bibliokaffee.com
              </li>
            </ul>

            <div className="mt-5">
              <Button href="#contact" variant="outline-light" size="sm">
                Get in Touch
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
<div className="mt-12 flex items-center justify-center border-t border-cream/10 pt-6 font-sans text-xs text-cream/50">
  <p>
    &copy; {new Date().getFullYear()} Biblio Kaffee. All rights reserved.
  </p>
</div>

      </div>
    </footer>
  );
}
