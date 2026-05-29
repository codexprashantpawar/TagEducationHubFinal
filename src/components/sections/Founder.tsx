import founder from "@/assets/founder-rupali.png";
import { HeadingReveal } from "@/components/HeadingReveal";

const qualifications = ["M.Sc", "B.Ed", "MBA", "PGDSA", "DEAM", "IATA", "HDISM"];

export function Founder() {
  return (
    <section className="section-padding founder-pattern">
      <div className="container-tag grid items-start gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="relative mx-auto max-w-sm md:mx-0">
            <div className="absolute -inset-1 rounded-2xl bg-crimson/20" aria-hidden />
            <div className="img-hover relative aspect-[4/5] overflow-hidden rounded-2xl border-4 border-crimson/30 bg-background shadow-lg">
              <img
                src={founder}
                alt="Mrs. Rupali Bobade"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
          <p className="mt-6 font-serif text-2xl font-bold text-ink">Mrs. Rupali Bobade</p>
          <p className="mt-1 text-sm text-muted-foreground">Founder &amp; Director – TAG Education Hub</p>
          <p className="text-sm text-muted-foreground">TAG Learnarium – A Complete World of Learning</p>
        </div>
        <div className="md:col-span-7 md:pt-4">
          <p className="section-tag">TAG Founder &amp; Directors</p>
          <HeadingReveal className="mb-3 font-serif text-4xl font-bold leading-tight text-ink md:text-5xl">
            Mrs. Rupali Bobade
          </HeadingReveal>
          <div className="mb-3 flex flex-wrap gap-2">
            {qualifications.map((q) => (
              <span
                key={q}
                className="rounded-full border border-crimson/20 bg-white/80 px-3 py-1 text-xs font-medium tracking-wide text-ink shadow-sm"
              >
                {q}
              </span>
            ))}
          </div>
          <p className="mb-8 text-sm text-foreground/70">
            Founder &amp; Director: TAG – The Atelier Gurukula · TAG Education Hub
          </p>
          <div className="space-y-5 leading-relaxed text-foreground/80">
            <p>
              Mrs. Rupali Bobade is a visionary educationist, dynamic leader, and Founder &amp; Director of TAG Education Hub, with over 25 years of diversified experience across the Corporate and Education sectors. Her professional journey spans aviation, US healthcare processes, operations, training, administration, and institutional development, bringing together strong organizational expertise with a deep passion for education and holistic learning.
            </p>
            <p>
              Driven by her commitment to nurturing future-ready learners and empowered educators, she has actively contributed to school setup, academic planning, educator mentoring, and skill development initiatives. Honoured with the prestigious <em className="font-semibold text-ink not-italic">"Shikshak Gaurav Puruskar"</em>, Mrs. Bobade strongly believes in creating engaging, value-based, and learner-centric environments that foster creativity, confidence, emotional well-being, and lifelong learning.
            </p>
            <p>
              As the Founder &amp; Director of TAG Education Hub, she leads with a vision of building an integrated ecosystem for early childhood education, academic support, educator development, and holistic enrichment programs. Her approach blends progressive learning methodologies with practical and experiential development, empowering every child and educator to grow with confidence, purpose, excellence and to realize their highest potential.
            </p>
          </div>
          <blockquote className="relative mt-12 border-l-4 border-crimson py-2 pl-8">
            <span
              className="pointer-events-none absolute -left-1 -top-4 font-serif text-6xl leading-none text-crimson/25"
              aria-hidden
            >
              &ldquo;
            </span>
            <p className="font-serif text-xl italic leading-snug text-crimson md:text-2xl">
              Transforming Education | Accelerating Potential | Guiding Excellence
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
