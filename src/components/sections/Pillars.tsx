import { Globe, Heart, BookOpen } from "lucide-react";
import { HeadingReveal } from "@/components/HeadingReveal";

const pillars = [
  { icon: Globe, title: "Global Learning", text: "Exposure to modern and international learning practices." },
  { icon: Heart, title: "Guided by Values", text: "Education that builds character, empathy and responsibility." },
  { icon: BookOpen, title: "Grounded in Wisdom", text: "Learning inspired by timeless Indian knowledge and cultural values." },
];

export function Pillars() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-tag">
        <div className="mb-16 max-w-3xl">
          <p className="section-tag">TAG Educational Philosophy</p>
          <HeadingReveal className="max-w-4xl text-left font-serif text-4xl font-bold leading-tight text-ink md:text-5xl">
            Three pillars that shape every learner.
          </HeadingReveal>
        </div>
        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className="card-lift group rounded-xl border border-border/50 border-t-[3px] border-t-crimson bg-white p-10 shadow-sm md:p-12"
            >
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-crimson/8 transition-colors group-hover:bg-crimson/12">
                <p.icon className="h-10 w-10 text-crimson" strokeWidth={1.25} />
              </div>
              <HeadingReveal as="h3" delay={i * 120} className="mb-4 font-serif text-3xl font-bold text-ink md:text-[2.25rem]">
                {p.title}
              </HeadingReveal>
              <p className="text-lg leading-relaxed text-foreground/75">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
