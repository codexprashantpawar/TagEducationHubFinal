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
    <section className="pt-44 pb-16 bg-cream border-b">
      <div className="container-tag max-w-5xl text-center">
        <p className="text-[11px] uppercase tracking-[0.32em] text-crimson font-bold mb-5">
          {eyebrow}
        </p>
        <h1 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl leading-[1.1] text-ink">
          {title}
        </h1>
        <Ornament />
        {subtitle && (
          <p className="mt-2 text-base md:text-lg text-foreground/70 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

export function Ornament() {
  return (
    <div className="flex items-center justify-center gap-3 mt-6">
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
