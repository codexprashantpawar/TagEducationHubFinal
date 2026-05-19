import founder from "@/assets/founder-rupali.png";

export function Founder() {
  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="container-tag grid md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-5">
          <div className="relative aspect-[4/5] max-w-sm overflow-hidden bg-background">
            <img src={founder} alt="Mrs. Rupali Bobade" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
          </div>
          <p className="font-serif font-bold text-2xl text-ink mt-6">Mrs. Rupali Bobade</p>
          <p className="text-sm text-muted-foreground mt-1">Founder &amp; Director – TAG Education Hub</p>
          <p className="text-sm text-muted-foreground">TAG Learnarium – A Complete World of Learning</p>
        </div>
        <div className="md:col-span-7 md:pt-4">
          <p className="text-xs uppercase tracking-[0.25em] text-crimson font-bold mb-5">TAG Founder &amp; Directors
          </p>
         <h2 className="font-serif font-bold text-4xl md:text-5xl text-ink leading-tight mb-3">
  Mrs. Rupali Bobade
</h2>
          <p className="text-sm text-muted-foreground mb-2">
            M.Sc, B.Ed, MBA, PGDSA, DEAM, IATA, HDISM
          </p>
          <p className="text-sm text-foreground/70 mb-8">
            Founder &amp; Director: TAG – The Atelier Gurukula · TAG Education Hub
          </p>
          <div className="space-y-5 text-foreground/80 leading-relaxed">
            <p>
              Mrs. Rupali Bobade is a visionary educationist, dynamic leader, and Founder &amp; Director of TAG Education Hub, with over 25 years of diversified experience across the Corporate and Education sectors. Her professional journey spans aviation, US healthcare processes, operations, training, administration, and institutional development, bringing together strong organizational expertise with a deep passion for education and holistic learning.
            </p>
            <p>
              Driven by her commitment to nurturing future-ready learners and empowered educators, she has actively contributed to school setup, academic planning, educator mentoring, and skill development initiatives. Honoured with the prestigious <em className="text-ink not-italic font-semibold">"Shikshak Gaurav Puruskar"</em>, Mrs. Bobade strongly believes in creating engaging, value-based, and learner-centric environments that foster creativity, confidence, emotional well-being, and lifelong learning.
            </p>
            <p>
              As the Founder &amp; Director of TAG Education Hub, she leads with a vision of building an integrated ecosystem for early childhood education, academic support, educator development, and holistic enrichment programs. Her approach blends progressive learning methodologies with practical and experiential development, empowering every child and educator to grow with confidence, purpose, excellence and to realize their highest potential.
            </p>
          </div>
          <p className="font-serif italic text-xl text-crimson mt-10 border-l-2 border-crimson pl-5">
            Transforming Education | Accelerating Potential | Guiding Excellence
          </p>
        </div>
      </div>
    </section>
  );
}
