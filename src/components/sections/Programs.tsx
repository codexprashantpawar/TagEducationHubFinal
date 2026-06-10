import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { HeadingReveal } from "@/components/HeadingReveal";
import Program from "@/assets/ExcellenceProgram.jpg";
import TAGEducatorExcellenceProgram from "@/assets/TAGEducatorExcellenceProgram.jpg";
import TeacherAward from "@/assets/TeacherAward.png";
const UNSPLASH = (id: string) => `https://images.unsplash.com/photo-${id}?w=800&q=80`;

const programs = [
  {
    tag: "Upcoming School Partnership Program",
    title: "TAG Global English Excellence Program",
    sub: "In association with Trinity College London",
    text: "A high-impact English proficiency and communication development program designed to help students build confidence, fluency, and globally relevant language skills.",
    img: Program,
    borderClass: "border-t-crimson",
  },
  {
    tag: "Upcoming Preschool Educator Development Program",
    title: "TAG Educator Excellence Program",
    sub: "Upgrade Your Teachers. Elevate Your Preschool.",
    text: "A comprehensive educator development initiative for preschool teachers and institutions committed to building confident educators and future-ready learning environments.",
    img: TAGEducatorExcellenceProgram,
    borderClass: "border-t-[#0d9488]",
  },
  {
    tag: "Awards 2026",
    title: "TAG Pune Educator Innovation Awards 2026",
    sub: "Celebrating Creativity • Innovation • Transformative Teaching",
    text: "A prestigious platform recognizing educators who inspire learning through creativity, collaboration, and innovative teaching practices aligned with NEP 2020.",
    img: TeacherAward,
    borderClass: "border-t-[#d97706]",
  },
];

export function Programs() {
  return (
    <section className="section-padding bg-background">
      <div className="container-tag">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="section-tag">
              Our Offerings · TAG Signature Learning &amp; Development Series
            </p>
            <HeadingReveal className="font-serif text-4xl font-bold leading-tight text-ink md:text-5xl">
              Thoughtfully designed programs that support learning, creativity, communication, well-being and lifelong development.
            </HeadingReveal>
          </div>
          <Link to="/programs" className="btn-secondary group shrink-0 rounded-sm">
            View all offerings
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-3 md:gap-10">
          {programs.map((p) => (
            <article
              key={p.title}
              className={`card-lift group flex flex-col overflow-hidden rounded-xl border border-border/50 bg-white shadow-sm border-t-[3px] ${p.borderClass}`}
            >
              <div className="img-hover relative aspect-video overflow-hidden bg-muted">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a]/85 via-[#0d1b2a]/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                  <h3 className="font-serif text-xl font-bold leading-tight text-white md:text-2xl">
                    {p.title}
                  </h3>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6 md:p-8">
                <p className="section-tag !mb-3 !text-[0.65rem]">{p.tag}</p>
                <p className="mb-3 font-serif italic text-foreground/70">{p.sub}</p>
                <p className="mb-6 leading-relaxed text-foreground/75">{p.text}</p>
                <Link
                  to="/programs"
                  className="nav-link-underline mt-auto inline-flex w-fit items-center gap-1 text-sm font-semibold text-crimson"
                >
                  Learn More →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
