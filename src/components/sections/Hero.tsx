import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/tagwordcloud.svg";
// import logo from "@/assets/logoremovebgpreview.png";
export function Hero() {
  return (
    <section className="relative min-h-[90vh] w-[100vw] max-w-[100vw] overflow-hidden">
     <img
  src={logo}
  alt=""
  aria-hidden="true"
  className="absolute inset-0 h-full w-full object-cover object-center opacity-40"
/>
     <img
  src={logo}
  alt=""
  aria-hidden="true"
  className="absolute inset-0 h-full w-full object-cover object-center opacity-25"
/>
<div className="absolute inset-0 bg-gradient-to-b from-[#0d1b2a]/70 via-[#0d1b2a]/40 to-[#0d1b2a]/80" />
<div className="absolute inset-0 bg-gradient-to-r from-[#0d1b2a]/30 via-transparent to-[#0d1b2a]/20" />
      <div className="relative container-tag flex min-h-[90vh] flex-col justify-end pb-28 pt-48 text-white md:pb-36 md:pt-52">
        <p className="mb-4 font-serif text-4xl font-bold tracking-[0.04em] text-white md:text-5xl lg:text-6xl">
          TAG Education Hub
        </p>
        <p className="mb-3 font-serif text-2xl font-medium italic text-[#e8c872] md:text-3xl lg:text-[2rem]">
          Learning Beyond Learning
        </p>
        <p className="mb-8 font-serif text-xl italic text-white/95 md:text-2xl">
          TAG – The Atelier Gurukula
        </p>
        <div className="mb-8 flex items-center gap-3">
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#e8c872]" />
          <p className="text-sm font-medium tracking-wide md:text-base">
            Empowering Communication · Inspiring Excellence
          </p>
        </div>
        <h1 className="max-w-4xl font-serif text-2xl font-medium leading-tight tracking-tight text-white/65 sm:text-3xl md:text-3xl lg:text-4xl">
          Global Learning · Guided by Values · Grounded in Wisdom
        </h1>
        <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <Link
            to="/programs"
            className="btn-interactive group inline-flex items-center gap-2.5 rounded-sm bg-[#1a5568] px-7 py-3.5 text-sm font-semibold tracking-wide text-white shadow-md transition-all duration-300 hover:bg-[#134a5c] hover:shadow-lg"
          >
            Explore our programs
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
