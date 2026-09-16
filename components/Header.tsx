"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";
import Button from "./Button";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      id="home"
      className={`sticky top-0 z-50 bg-cream/95 backdrop-blur-sm transition-shadow ${
        scrolled
          ? "shadow-[0_1px_0_0_rgba(57,47,42,0.08)]"
          : ""
      }`}
    >
      <div className="mx-auto flex h-[60px] max-w-content items-center justify-between px-5 sm:px-8">

        {/* Logo */}
        <a
          href="#home"
          className="flex shrink-0 items-center gap-"
        >
          <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden ">
            <Image
              src="/images/biblio.png"
              alt="Literary café logo"
              fill
              priority
              sizes="500px"
              className="object-cover"

            />
          </span>

          <span className="leading-tight mt-4">
            <span className="block font-serif text-[1.05rem] font-semibold text-brown-dark">
              Biblio Kaffee
            </span>

            <span className="block font-sans text-[0.58rem] font-semibold tracking-[0.18em] text-muted">
              COFFEE &amp; LITERATURE
            </span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-sans text-[0.9rem] font-medium transition-colors hover:text-terracotta ${
                i === 0
                  ? "text-terracotta"
                  : "text-ink/80"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button href="#about" size="sm">
            Find Your Corner
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="btn-focus flex h-10 w-10 items-center justify-center rounded-full text-brown-dark lg:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Panel */}
      <div
        className={`fixed inset-x-0 top-[60px] z-40 origin-top border-b border-brown-light/30 bg-cream shadow-lg transition-all duration-200 lg:hidden ${
          open
            ? "pointer-events-auto scale-y-100 opacity-100"
            : "pointer-events-none scale-y-95 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 py-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 font-sans text-base font-medium text-ink/85 transition-colors hover:bg-beige hover:text-terracotta"
            >
              {link.label}
            </a>
          ))}

          <div className="mt-3 px-3">
            <Button
              href="#about"
              className="w-full justify-center"
              onClick={() => setOpen(false)}
            >
              Find Your Corner
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}