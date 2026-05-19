import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { Mail, Phone, MapPin } from "lucide-react";

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

      <Reveal><section className="py-20 bg-background">
        <div className="container-tag max-w-4xl grid md:grid-cols-3 gap-6">
          {[
            { Icon: MapPin, label: "Address", value: "A 631, Gera's Imperium Gateway A & C, Nasik Phata, Pune - 411034" },
            { Icon: Phone, label: "Phone", value: "+91 92720 97927" },
            { Icon: Mail, label: "Email", value: "tageducationhub@gmail.com" },
          ].map(({ Icon, label, value }) => (
            <div key={label} className="rounded-xl border border-border bg-cream p-7 text-center hover:shadow-md transition-shadow">
              <div className="mx-auto h-12 w-12 rounded-full bg-crimson/10 grid place-items-center mb-4">
                <Icon className="h-5 w-5 text-crimson" strokeWidth={1.5} />
              </div>
              <p className="text-[11px] uppercase tracking-[0.32em] text-muted-foreground mb-2">{label}</p>
              <p className="font-serif font-semibold text-lg md:text-xl text-ink leading-snug">{value}</p>
            </div>
          ))}
        </div>
      </section></Reveal>
    </Layout>
  );
}
