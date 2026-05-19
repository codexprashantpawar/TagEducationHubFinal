const quotes = [
  { q: "TAG has transformed how my child sees learning — every day brings curiosity and confidence.", a: "Anjali M.", r: "Parent" },
  { q: "The educator program reshaped my classroom practice. Practical, soulful and globally informed.", a: "Priya S.", r: "Preschool Teacher" },
  { q: "A rare blend of timeless wisdom and modern pedagogy. Truly an atelier for the next generation.", a: "Dr. Rajan V.", r: "Education Consultant" },
];

export function Testimonials() {
  return (
    <section className="py-28 md:py-32 bg-background">
      <div className="container-tag">
        <p className="text-xs uppercase tracking-[0.25em] text-crimson font-medium mb-4 text-center">Voices</p>
        <h2 className="font-serif text-5xl md:text-6xl text-ink text-center max-w-3xl mx-auto leading-tight mb-16">
          From the parents and educators who walk this journey with us.
        </h2>
        <div className="grid md:grid-cols-3 gap-px bg-border border">
          {quotes.map((q) => (
            <figure key={q.a} className="bg-background p-10 md:p-12">
              <span className="font-serif text-6xl text-crimson leading-none">"</span>
              <blockquote className="font-serif text-2xl text-ink leading-snug mt-2 mb-8">{q.q}</blockquote>
              <figcaption>
                <p className="text-sm font-medium text-ink">{q.a}</p>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{q.r}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
