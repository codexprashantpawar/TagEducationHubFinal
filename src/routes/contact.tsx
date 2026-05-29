import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { FloatingLabelInput } from "@/components/FloatingLabelField";
import { Mail, Phone, MapPin } from "lucide-react";

const MAP_EMBED =
  "https://maps.google.com/maps?q=A+631,+Gera%27s+Imperium+Gateway,+Nasik+Phata,+Pune+411034&hl=en&z=15&output=embed";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact — TAG Education Hub" },
      { name: "description", content: "Contact TAG Education Hub. A 631, Gera's Imperium Gateway A & C, Nasik Phata, Pune - 411034. +91 92720 97927. tageducationhub@gmail.com" },
      { property: "og:title", content: "Contact — TAG Education Hub" },
      { property: "og:description", content: "Get in touch with TAG Education Hub." },
      { property: "og:url", content: "https://tageducationhub.lovable.app/contact" },
    ],
    links: [{ rel: "canonical", href: "https://tageducationhub.lovable.app/contact" }],
  }),
});

function Contact() {
  return (
    <Layout>
      <PageHero eyebrow="Contact Details" title="TAG Education Hub." />

      <Reveal>
        <section className="section-padding bg-background">
          <div className="container-tag max-w-4xl">
            <div className="mb-16 grid gap-6 md:grid-cols-3">
              {[
                { Icon: MapPin, label: "Address", value: "A 631, Gera's Imperium Gateway A & C, Nasik Phata, Pune - 411034" },
                { Icon: Phone, label: "Phone", value: "+91 92720 97927" },
                { Icon: Mail, label: "Email", value: "tageducationhub@gmail.com" },
              ].map(({ Icon, label, value }) => (
                <div
                  key={label}
                  className="card-lift rounded-xl border border-border/60 border-t-[3px] border-t-crimson bg-cream p-8 text-center shadow-sm"
                >
                  <div className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-full bg-crimson/10">
                    <Icon className="h-5 w-5 text-crimson" strokeWidth={1.5} />
                  </div>
                  <p className="section-tag !mb-3 !text-[0.65rem] !text-muted-foreground">{label}</p>
                  <p className="font-serif text-lg font-semibold leading-snug text-ink md:text-xl">{value}</p>
                </div>
              ))}
            </div>

            <div className="img-hover mb-16 overflow-hidden rounded-xl border border-border/60 shadow-sm">
              <iframe
                title="TAG Education Hub location"
                src={MAP_EMBED}
                className="aspect-video w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            <form
              className="mx-auto flex max-w-[640px] flex-col gap-6"
              onSubmit={(e) => e.preventDefault()}
            >
              <FloatingLabelInput label="Email" type="email" name="email" required autoComplete="email" />
              <FloatingLabelInput label="Phone" type="tel" name="phone" autoComplete="tel" />
              <button
                type="submit"
                className="btn-primary btn-interactive w-full rounded-sm py-3"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </Reveal>
    </Layout>
  );
}
