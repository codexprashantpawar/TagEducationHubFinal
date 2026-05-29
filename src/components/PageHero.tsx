import { HeadingReveal } from "@/components/HeadingReveal";

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="border-b bg-cream pb-20 pt-44 md:pb-24 md:pt-48">
      <div className="container-tag max-w-5xl text-center">
        <p className="section-tag !mb-6">{eyebrow}</p>
        <HeadingReveal
          as="h1"
          className="font-serif text-3xl font-bold leading-[1.1] text-ink sm:text-4xl md:text-5xl lg:text-[3.25rem]"
        >
          {title}
        </HeadingReveal>
        <Ornament />
        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-foreground/70 md:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

export function Ornament() {
  return (
    <div className="mt-8 flex items-center justify-center gap-3">
      <span className="h-px w-16 bg-crimson/40" />
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-crimson">
        <path
          d="M12 3l2.4 6.6L21 12l-6.6 2.4L12 21l-2.4-6.6L3 12l6.6-2.4L12 3z"
          fill="currentColor"
          opacity="0.85"
        />
      </svg>
      <span className="h-px w-16 bg-crimson/40" />
    </div>
  );
}
