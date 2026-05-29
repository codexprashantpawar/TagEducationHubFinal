import trinity from "@/assets/partner-trinity.png";
import koyaa from "@/assets/partner-koyaa.png";

export function Partners() {
  return (
    <section className="section-padding border-y bg-background">
      <div className="container-tag">
        <p className="section-tag !mb-12 text-center !text-muted-foreground">
          In Collaboration With
        </p>
        <div className="mx-auto grid max-w-3xl grid-cols-2 items-center gap-8 md:gap-16">
          <div className="flex flex-col items-center gap-4">
            <img
              src={trinity}
              alt="Trinity College London"
              className="h-16 w-auto object-contain md:h-20"
            />
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              Trinity College London
            </p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <img
              src={koyaa}
              alt="Koyaa Fitness Federation"
              className="h-20 w-auto object-contain md:h-24"
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
