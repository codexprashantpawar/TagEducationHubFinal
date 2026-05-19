import trinity from "@/assets/partner-trinity.png";
import koyaa from "@/assets/partner-koyaa.png";

export function Partners() {
  return (
    <section className="py-20 border-y bg-background">
      <div className="container-tag">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground text-center mb-12">
          In Collaboration With
        </p>
        <div className="grid grid-cols-2 gap-8 md:gap-16 items-center max-w-3xl mx-auto">
          <div className="flex flex-col items-center gap-4">
            <img
              src={trinity}
              alt="Trinity College London"
              className="h-16 md:h-20 w-auto object-contain"
            />
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              Trinity College London
            </p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <img
              src={koyaa}
              alt="Koyaa Fitness Federation"
              className="h-20 md:h-24 w-auto object-contain"
            />
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              Koyaa Fitness Federation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}