import p1 from "@/assets/programs-1.jpg";
import p2 from "@/assets/programs-2.jpg";
import p3 from "@/assets/programs-3.jpg";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

const programs = [
  {
    tag: "Upcoming School Partnership Program",
    title: "TAG Global English Excellence Program",
    sub: "In association with Trinity College London",
    text: "A high-impact English proficiency and communication development program designed to help students build confidence, fluency, and globally relevant language skills.",
    img: p1,
  },
  {
    tag: "Upcoming Preschool Educator Development Program",
    title: "TAG Educator Excellence Program",
    sub: "Upgrade Your Teachers. Elevate Your Preschool.",
    text: "A comprehensive educator development initiative for preschool teachers and institutions committed to building confident educators and future-ready learning environments.",
    img: p2,
  },
  {
    tag: "Awards 2026",
    title: "TAG Pune Educator Innovation Awards 2026",
    sub: "Celebrating Creativity • Innovation • Transformative Teaching",
    text: "A prestigious platform recognizing educators who inspire learning through creativity, collaboration, and innovative teaching practices aligned with NEP 2020.",
    img: p3,
  },
];

export function Programs() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container-tag">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.25em] text-crimson font-bold mb-4">Our Offerings · TAG Signature Learning &amp; Development Series
            </p>
           <h2 className="font-serif font-bold text-4xl md:text-5xl text-ink leading-tight">
  Thoughtfully designed programs that support learning, creativity, communication, well-being and lifelong development.
</h2>
          </div>
          <Link to="/programs" className="inline-flex items-center gap-2 text-sm font-medium border-b border-ink pb-1 hover:text-crimson hover:border-crimson transition-colors w-fit">
            View all offerings <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((p) => (
            <article key={p.title} className="group">
              <div className="relative overflow-hidden aspect-[4/5] mb-6 bg-muted">
                <img src={p.img} alt={p.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <p className="text-xs uppercase tracking-[0.2em] text-crimson font-bold mb-3">{p.tag}</p>
              <h3 className="font-serif font-bold text-2xl md:text-3xl text-ink mb-2 group-hover:text-crimson transition-colors leading-tight">{p.title}</h3>
              <p className="font-serif italic text-foreground/70 mb-3">{p.sub}</p>
              <p className="text-foreground/75 leading-relaxed">{p.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
