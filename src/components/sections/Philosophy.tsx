import { HeadingReveal } from "@/components/HeadingReveal";

export function Philosophy() {
  return (
    <section className="section-padding bg-background">
      <div className="container-tag grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="section-tag section-tag-accent">
            Introduction · TAG Philosophy
          </p>
          <HeadingReveal className="max-w-4xl text-left font-serif text-[2.25rem] font-bold leading-[1.12] text-ink md:text-[3.5rem] lg:text-[4rem]">
            Nurturing curious minds, joyful learners and confident individuals.
          </HeadingReveal>
        </div>
        <div className="space-y-6 text-lg leading-[1.8] text-foreground/80 md:col-span-6 md:col-start-7">
          <p>
            At TAG, we nurture curious minds, joyful learners and confident individuals through creative learning experiences guided by strong values and global perspectives.
          </p>

          <div className="card-lift rounded-xl border border-border/60 bg-cream p-8 shadow-[0_8px_30px_-12px_rgba(13,27,42,0.12)] md:p-10">
            <p className="section-tag !mb-4">About TAG</p>
            <p className="mb-4">
              The Atelier Gurukula is a holistic learning ecosystem designed to nurture children and learners through a blend of:
            </p>
            <ul className="space-y-2 text-foreground/80">
              <li className="flex gap-3"><span className="text-crimson">•</span> Global learning practices</li>
              <li className="flex gap-3"><span className="text-crimson">•</span> Indian cultural values</li>
              <li className="flex gap-3"><span className="text-crimson">•</span> Experiential and joyful learning</li>
            </ul>
            <p className="mt-4">Our focus is to develop curious, confident and compassionate learners.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
