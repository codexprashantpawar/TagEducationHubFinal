import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { Hero } from "@/components/sections/Hero";
import { Philosophy } from "@/components/sections/Philosophy";
import { Pillars } from "@/components/sections/Pillars";
import { Programs } from "@/components/sections/Programs";
import { Mission } from "@/components/sections/Mission";
import { Founder } from "@/components/sections/Founder";
import { Partners } from "@/components/sections/Partners";
import { CTA } from "@/components/sections/CTA";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "TAG Education Hub — TAG – The Atelier Gurukula" },
      { name: "description", content: "Global Learning · Guided by Values · Grounded in Wisdom. An Integrated Hub for Learning & Development." },
    ],
  }),
});

function Index() {
  return (
    <Layout transparentHeader>
      <Hero />
      <Reveal><Philosophy /></Reveal>
      <Reveal><Pillars /></Reveal>
      <Reveal><Mission /></Reveal>
      <Reveal><Programs /></Reveal>
      <Reveal><Founder /></Reveal>
      <Reveal><Partners /></Reveal>
      <Reveal><CTA /></Reveal>
    </Layout>
  );
}
