import { HeadingReveal } from "@/components/HeadingReveal";

const MISSION_IMG = "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80";

const mission = [
  "To strengthen the body through movement and healthy habits.",
  "To balance energy through mindful practices and structured rhythm.",
  "To nurture the mind with emotional intelligence and social awareness.",
  "To stimulate the intellect through inquiry-based and experiential learning.",
  "To cultivate joy and values that shape compassionate global citizens.",
];

const objectives = [
  "Create joyful and engaging learning environments",
  "Encourage curiosity, creativity and exploration",
  "Integrate global learning practices",
  "Build strong values and character",
  "Partner with parents for holistic child development",
];

export function Mission() {
  return (
    <section className="section-padding overflow-hidden bg-crimson text-white">
      <div className="container-tag grid gap-12 md:grid-cols-12">
        <div className="md:col-span-7">
          <p className="section-tag !text-white/85">Vision</p>
          <HeadingReveal className="mb-10 font-serif text-4xl font-bold leading-[1.05] text-white md:text-5xl">
            To nurture balanced, confident, and joyful individuals through a holistic education model that integrates timeless wisdom with global pedagogy.
          </HeadingReveal>

          <p className="section-tag !mt-16 !text-white/85">Mission</p>
          <ul className="mb-12 space-y-6">
            {mission.map((it, i) => (
              <li
                key={i}
                className="flex gap-5 border-l-2 border-white/35 py-1 pl-6"
              >
                <span className="w-8 shrink-0 font-serif text-xl text-white/70">0{i + 1}</span>
                <span className="text-lg leading-relaxed text-white/95">{it}</span>
              </li>
            ))}
          </ul>

          <p className="section-tag !text-white/85">Our Objective</p>
          <ul className="space-y-3">
            {objectives.map((o) => (
              <li key={o} className="flex gap-3 text-white/95">
                <span>•</span> {o}
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-5">
          <div className="img-hover relative sticky top-24 aspect-[4/5] overflow-hidden rounded-xl shadow-[0_20px_50px_-15px_rgba(0,0,0,0.4)]">
            <img
              src={MISSION_IMG}
              alt="TAG learners"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
