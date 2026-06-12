import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { Founder } from "@/components/sections/Founder";

export const Route = createFileRoute("/founder")({
  component: FounderPage,
  head: () => ({
    meta: [
      { title: "Founder & Director — TAG Education Hub" },
      { name: "description", content: "Mrs. Rupali Bobade — Founder & Director of TAG Education Hub. M.Sc, B.Ed, MBA, PGDSA, DEAM, IATA, HDISM. 25+ years across Corporate and Education sectors." },
      { property: "og:title", content: "Founder & Director — TAG Education Hub" },
      { property: "og:description", content: "Mrs. Rupali Bobade — Founder & Director of TAG Education Hub." },
      { property: "og:url", content: "https://www.tageducationhub.com/founder" },
    ],
    links: [{ rel: "canonical", href: "https://www.tageducationhub.com/founder" }],
  }),
});

function FounderPage() {
  return (
    <Layout>
      <PageHero eyebrow="TAG Founder & Directors" title="Founder & Director." />
      <Reveal><Founder /></Reveal>
    </Layout>
  );
}
