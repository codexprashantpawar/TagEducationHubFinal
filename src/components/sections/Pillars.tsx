import { Globe, Heart, BookOpen } from "lucide-react";

const pillars = [
  { icon: Globe, title: "Global Learning", text: "Exposure to modern and international learning practices." },
  { icon: Heart, title: "Guided by Values", text: "Education that builds character, empathy and responsibility." },
  { icon: BookOpen, title: "Grounded in Wisdom", text: "Learning inspired by timeless Indian knowledge and cultural values." },
];

export function Pillars() {
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="container-tag">
        <div className="max-w-3xl mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-crimson font-bold mb-4">TAG Educational Philosophy
          </p>
        <h2 className="font-serif font-bold text-4xl md:text-5xl leading-tight text-ink text-left max-w-4xl">
  Three pillars that shape every learner.
</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-border border">
          {pillars.map((p) => (
            <div key={p.title} className="bg-cream p-10 md:p-12 group hover:bg-background transition-colors">
              <p.icon className="h-8 w-8 text-crimson mb-8" strokeWidth={1.25} />
              <h3 className="font-serif font-bold text-3xl md:text-4xl text-ink mb-4">{p.title}</h3>
              <p className="text-foreground/75 leading-relaxed text-lg">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
