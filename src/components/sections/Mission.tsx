import campus from "@/assets/campus-life.jpg";

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
    <section className="bg-crimson text-white py-24 md:py-32 overflow-hidden">
      <div className="container-tag grid md:grid-cols-12 gap-12">
        <div className="md:col-span-7">
          <p className="text-xs uppercase tracking-[0.25em] text-white/80 font-bold mb-4">Vision
          </p>
          <h2 className="font-serif font-bold text-4xl md:text-5xl leading-[1.05] mb-10">
            To nurture balanced, confident, and joyful individuals through a holistic education model that integrates timeless wisdom with global pedagogy.
          </h2>

          <p className="text-xs uppercase tracking-[0.25em] text-white/80 font-bold mb-6 mt-16">Mission
          </p>
          <ul className="space-y-4 mb-12">
            {mission.map((it, i) => (
              <li key={i} className="flex gap-5 border-t border-white/20 pt-4">
                <span className="font-serif text-xl text-white/70 w-8">0{i + 1}</span>
                <span className="text-white/95 text-lg leading-snug">{it}</span>
              </li>
            ))}
          </ul>

          <p className="text-xs uppercase tracking-[0.25em] text-white/80 font-bold mb-4">
            Our Objective
          </p>
          <ul className="space-y-2">
            {objectives.map((o) => (
              <li key={o} className="flex gap-3 text-white/95">
                <span>•</span> {o}
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden sticky top-24">
            <img src={campus} alt="TAG learners" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
