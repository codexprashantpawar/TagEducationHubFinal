export function Philosophy() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container-tag grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <p className="text-xs uppercase tracking-[0.25em] text-crimson font-bold mb-6">Introduction · TAG Philosophy
          </p>
          <h2 className="font-serif font-bold text-4xl md:text-5xl leading-tight text-ink text-left max-w-4xl">
  Nurturing curious minds, joyful learners and confident individuals.
</h2>
        </div>
        <div className="md:col-span-6 md:col-start-7 space-y-6 text-lg leading-relaxed text-foreground/80">
          <p>
            At TAG, we nurture curious minds, joyful learners and confident individuals through creative learning experiences guided by strong values and global perspectives.
          </p>

          <div className="pt-8 border-t">
            <p className="text-xs uppercase tracking-[0.25em] text-crimson font-bold mb-4">About TAG</p>
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
