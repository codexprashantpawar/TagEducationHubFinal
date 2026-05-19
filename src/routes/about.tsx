import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { PageHero, Ornament } from "@/components/PageHero";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About TAG — TAG Education Hub" },
      { name: "description", content: "TAG – The Atelier Gurukula is a holistic learning ecosystem blending global learning practices, Indian cultural values and experiential, joyful learning." },
      { property: "og:title", content: "About TAG — TAG Education Hub" },
      { property: "og:description", content: "A holistic learning ecosystem nurturing curious, confident and compassionate learners." },
      { property: "og:url", content: "https://tageducationhub.lovable.app/about" },
    ],
    links: [{ rel: "canonical", href: "https://tageducationhub.lovable.app/about" }],
  }),
});

function About() {
  return (
    <Layout>
      <PageHero eyebrow="About TAG" title="The Atelier Gurukula." />

      <Reveal><section className="py-16 bg-background border-b">
        <div className="container-tag max-w-4xl text-center">
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
            The Atelier Gurukula is a holistic learning ecosystem designed to nurture children and learners through a blend of:
          </p>
          <ul className="mt-8 grid sm:grid-cols-3 gap-4 text-base">
            {["Global learning practices", "Indian cultural values", "Experiential and joyful learning"].map((m) => (
              <li key={m} className="rounded-lg border border-border bg-cream px-5 py-6 text-ink font-serif text-xl">
                {m}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-foreground/80">
            Our focus is to develop curious, confident and compassionate learners.
          </p>
        </div>
      </section></Reveal>

      {/* Vision */}
      <Reveal><section className="py-20 bg-cream border-b">
        <div className="container-tag max-w-4xl text-center">
          <p className="text-[11px] uppercase tracking-[0.32em] text-crimson font-bold mb-4">Vision</p>
          <h2 className="font-serif font-semibold text-2xl md:text-3xl text-ink leading-snug">
            To nurture balanced, confident, and joyful individuals through a holistic education model that integrates timeless wisdom with global pedagogy.
          </h2>
          <Ornament />
        </div>
      </section></Reveal>

      {/* Mission */}
      <Reveal><section className="py-20 bg-cream border-b">
        <div className="container-tag max-w-5xl">
          <p className="text-xs uppercase tracking-[0.25em] text-crimson font-bold mb-6">Mission</p>
          <ul className="space-y-3 text-lg text-foreground/85">
            {[
              "To strengthen the body through movement and healthy habits.",
              "To balance energy through mindful practices and structured rhythm.",
              "To nurture the mind with emotional intelligence and social awareness.",
              "To stimulate the intellect through inquiry-based and experiential learning.",
              "To cultivate joy and values that shape compassionate global citizens.",
            ].map((m) => (
              <li key={m} className="flex gap-3"><span className="text-crimson">•</span> {m}</li>
            ))}
          </ul>

          <p className="mt-10 text-foreground/80">Our objective is to:</p>
          <ul className="mt-3 space-y-2 text-foreground/85">
            {[
              "Create joyful and engaging learning environments",
              "Encourage curiosity, creativity and exploration",
              "Integrate global learning practices",
              "Build strong values and character",
              "Partner with parents for holistic child development",
            ].map((m) => (
              <li key={m} className="flex gap-3"><span className="text-crimson">•</span> {m}</li>
            ))}
          </ul>
        </div>
      </section></Reveal>

      {/* Educational Philosophy */}
      <Reveal><section className="py-20 bg-background border-b">
        <div className="container-tag max-w-5xl">
          <p className="text-xs uppercase tracking-[0.25em] text-crimson font-bold mb-6">TAG Educational Philosophy</p>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { t: "Global Learning", d: "Exposure to modern and international learning practices." },
              { t: "Guided by Values", d: "Education that builds character, empathy and responsibility." },
              { t: "Grounded in Wisdom", d: "Learning inspired by timeless Indian knowledge and cultural values." },
            ].map((p) => (
              <div key={p.t}>
                <h3 className="font-serif font-bold text-2xl text-ink mb-2">{p.t}</h3>
                <p className="text-foreground/75 leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section></Reveal>

      {/* Educator Development */}
      <Reveal><section className="py-20 bg-cream border-b">
        <div className="container-tag max-w-5xl">
          <p className="text-xs uppercase tracking-[0.25em] text-crimson font-bold mb-4">TAG Educator Development Program (Teacher Training Centre)
          </p>
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-ink leading-tight mb-6">
            A professional teacher training program that prepares educators to:
          </h2>
          <ul className="space-y-2 text-foreground/85">
            {[
              "Understand child development",
              "Early childhood pedagogy",
              "Use creative teaching methods",
              "Activity-based teaching",
              "Practical classroom training",
              "Manage classrooms effectively",
              "Inspire curiosity and joyful learning",
              "Communication and leadership skills",
            ].map((m) => (
              <li key={m} className="flex gap-3"><span className="text-crimson">•</span> {m}</li>
            ))}
          </ul>
          <p className="font-serif italic text-xl text-crimson mt-8">
            Empowering educators to inspire young minds. Preparing teachers for modern global classrooms.
          </p>
        </div>
      </section></Reveal>

      {/* Learning Ecosystem */}
      <Reveal><section className="py-20 bg-background">
        <div className="container-tag max-w-5xl">
          <p className="text-xs uppercase tracking-[0.25em] text-crimson font-bold mb-4">TAG Learning Ecosystem
          </p>
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-ink leading-tight mb-8">
            Nurturing holistic growth through thoughtfully designed programs that support learning, creativity, communication, well-being, and lifelong development.
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              "Specialized Accelerated Learning Program",
              "Learning Studio",
              "Academic Enrichment",
              "Skill-Based Activities",
              "Global Language Enrichment",
              "Educator Training & Professional Development",
            ].map((c) => (
              <span key={c} className="border border-ink/20 text-ink px-5 py-2 text-sm rounded-full bg-cream">
                {c}
              </span>
            ))}
          </div>
        </div>
      </section></Reveal>
    </Layout>
  );
}
