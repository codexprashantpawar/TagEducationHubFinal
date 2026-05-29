import { HeadingReveal } from "@/components/HeadingReveal";

export function CTA() {
  return (
    <section className="section-padding bg-ink text-white">
      <div className="container-tag max-w-4xl text-center">
        <p className="section-tag !text-crimson">Gratitude</p>
        <HeadingReveal className="mb-8 font-serif text-3xl font-bold leading-tight text-white md:text-4xl md:whitespace-nowrap">
          Thank you for choosing to walk this journey with us.
        </HeadingReveal>
        <p className="mx-auto max-w-3xl font-serif text-xl italic leading-relaxed text-white/80 md:text-2xl">
          Together, we will nurture not only capable learners — but kind, balanced, and joyful human beings.
        </p>
      </div>
    </section>
  );
}
