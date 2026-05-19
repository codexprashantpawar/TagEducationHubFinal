import hero from "@/assets/hero-campus.jpg";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden">
      <img
        src={hero}
        alt="TAG learners on campus"
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1280}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/80" />

      <div className="relative container-tag flex flex-col justify-end min-h-[100svh] pb-24 pt-44 text-white">
        <p className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-white mb-3">
          TAG Education Hub
        </p>
        <p className="font-serif italic text-xl md:text-2xl text-white/95 mb-6">
          TAG – The Atelier Gurukula
        </p>
        <div className="flex items-center gap-3 mb-6">
          <span className="h-2 w-2 rounded-full bg-crimson animate-pulse" />
          <p className="text-sm md:text-base tracking-wide font-medium">
            An Integrated Hub for Learning &amp; Development
          </p>
        </div>
      <h1 className="font-serif font-medium text-2xl sm:text-3xl md:text-3xl lg:text-4xl leading-tight tracking-tight max-w-4xl">
  Global Learning · Guided by Values · Grounded in Wisdom
</h1>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <Link to="/programs" className="group inline-flex items-center gap-4 text-white">
            <span className="grid place-items-center h-14 w-14 rounded-full border border-white group-hover:bg-white group-hover:text-ink transition-colors">
              <ArrowRight className="h-5 w-5" />
            </span>
            <span className="text-lg">Explore our programs</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
