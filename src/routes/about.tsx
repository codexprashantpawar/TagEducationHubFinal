// import { createFileRoute } from "@tanstack/react-router";
// import { Layout } from "@/components/Layout";
// import { Reveal } from "@/components/Reveal";
// import { PageHero, Ornament } from "@/components/PageHero";

// import vision from "@/assets/visionmission.png";
// import Teacher from "@/assets/TeacherTrainingCentre.png";

// export const Route = createFileRoute("/about")({
//   component: About,
//   head: () => ({
//     meta: [
//       { title: "About TAG — TAG Education Hub" },
//       { name: "description", content: "TAG – The Atelier Gurukula is a holistic learning ecosystem blending global learning practices, Indian cultural values and experiential, joyful learning." },
//       { property: "og:title", content: "About TAG — TAG Education Hub" },
//       { property: "og:description", content: "A holistic learning ecosystem nurturing curious, confident and compassionate learners." },
//       { property: "og:url", content: "https://tageducationhub.lovable.app/about" },
//     ],
//     links: [{ rel: "canonical", href: "https://tageducationhub.lovable.app/about" }],
//   }),
// });

// function About() {
//   return (
//     <Layout>
//       <PageHero eyebrow="About TAG" title="The Atelier Gurukula." />

//       <Reveal><section className="py-16 bg-background border-b">
//         <div className="container-tag max-w-4xl text-center">
//           <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
//             The Atelier Gurukula is a holistic learning ecosystem designed to nurture children and learners through a blend of:
//           </p>
//           <ul className="mt-8 grid sm:grid-cols-3 gap-4 text-base">
//             {["Global learning practices", "Indian cultural values", "Experiential and joyful learning"].map((m) => (
//               <li key={m} className="rounded-lg border border-border bg-cream px-5 py-6 text-ink font-serif text-xl">
//                 {m}
//               </li>
//             ))}
//           </ul>
//           <p className="mt-8 text-foreground/80">
//             Our focus is to develop curious, confident and compassionate learners.
//           </p>
//         </div>
//       </section></Reveal>

//       {/* Vision */}
//       <Reveal><section className="py-20 bg-cream border-b">
//         <div className="container-tag max-w-4xl text-center">
//           <p className="text-[11px] uppercase tracking-[0.32em] text-crimson font-bold mb-4">Vision</p>
//           <h2 className="font-serif font-semibold text-2xl md:text-3xl text-ink leading-snug">
//             To nurture balanced, confident, and joyful individuals through a holistic education model that integrates timeless wisdom with global pedagogy.
//           </h2>
//           <Ornament />
//         </div>
//       </section></Reveal>

//       {/* {/* Mission  Add imgae here right side  */}
//       <Reveal><section className="py-20 bg-cream border-b">
//         <div className="container-tag max-w-5xl">
//           <p className="text-xs uppercase tracking-[0.25em] text-crimson font-bold mb-6">Mission</p>
//           <ul className="space-y-3 text-lg text-foreground/85">
//             {[
//               "To strengthen the body through movement and healthy habits.",
//               "To balance energy through mindful practices and structured rhythm.",
//               "To nurture the mind with emotional intelligence and social awareness.",
//               "To stimulate the intellect through inquiry-based and experiential learning.",
//               "To cultivate joy and values that shape compassionate global citizens.",
//             ].map((m) => (
//               <li key={m} className="flex gap-3"><span className="text-crimson">•</span> {m}</li>
//             ))}
//           </ul>

//           <p className="mt-10 text-foreground/80">Our objective is to:</p>
//           <ul className="mt-3 space-y-2 text-foreground/85">
//             {[
//               "Create joyful and engaging learning environments",
//               "Encourage curiosity, creativity and exploration",
//               "Integrate global learning practices",
//               "Build strong values and character",
//               "Partner with parents for holistic child development",
//             ].map((m) => (
//               <li key={m} className="flex gap-3"><span className="text-crimson">•</span> {m}</li>
//             ))}
//           </ul>
//         </div>
//       </section></Reveal>

//       {/* Educational Philosophy */}
//       <Reveal><section className="py-20 bg-background border-b">
//         <div className="container-tag max-w-5xl">
//           <p className="text-xs uppercase tracking-[0.25em] text-crimson font-bold mb-6">TAG Educational Philosophy</p>
//           <div className="grid md:grid-cols-3 gap-10">
//             {[
//               { t: "Global Learning", d: "Exposure to modern and international learning practices." },
//               { t: "Guided by Values", d: "Education that builds character, empathy and responsibility." },
//               { t: "Grounded in Wisdom", d: "Learning inspired by timeless Indian knowledge and cultural values." },
//             ].map((p) => (
//               <div key={p.t}>
//                 <h3 className="font-serif font-bold text-2xl text-ink mb-2">{p.t}</h3>
//                 <p className="text-foreground/75 leading-relaxed">{p.d}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section></Reveal>

//       {/* Educator Development  Add Image right side */} 
//       <Reveal><section className="py-20 bg-cream border-b">
//         <div className="container-tag max-w-5xl">
//           <p className="text-xs uppercase tracking-[0.25em] text-crimson font-bold mb-4">TAG Educator Development Program (Teacher Training Centre)
//           </p>
//           <h2 className="font-serif font-bold text-3xl md:text-4xl text-ink leading-tight mb-6">
//             A professional teacher training program that prepares educators to:
//           </h2>
//           <ul className="space-y-2 text-foreground/85">
//             {[
//               "Understand child development",
//               "Early childhood pedagogy",
//               "Use creative teaching methods",
//               "Activity-based teaching",
//               "Practical classroom training",
//               "Manage classrooms effectively",
//               "Inspire curiosity and joyful learning",
//               "Communication and leadership skills",
//             ].map((m) => (
//               <li key={m} className="flex gap-3"><span className="text-crimson">•</span> {m}</li>
//             ))}
//           </ul>
//           <p className="font-serif italic text-xl text-crimson mt-8">
//             Empowering educators to inspire young minds. Preparing teachers for modern global classrooms.
//           </p>
//         </div>
//       </section></Reveal>

//       {/* Learning Ecosystem */}
//       <Reveal><section className="py-20 bg-background">
//         <div className="container-tag max-w-5xl">
//           <p className="text-xs uppercase tracking-[0.25em] text-crimson font-bold mb-4">TAG Learning Ecosystem
//           </p>
//           <h2 className="font-serif font-bold text-3xl md:text-4xl text-ink leading-tight mb-8">
//             Nurturing holistic growth through thoughtfully designed programs that support learning, creativity, communication, well-being, and lifelong development.
//           </h2>
//           <div className="flex flex-wrap gap-3">
//             {[
//               "Specialized Accelerated Learning Program",
//               "Learning Studio",
//               "Academic Enrichment",
//               "Skill-Based Activities",
//               "Global Language Enrichment",
//               "Educator Training & Professional Development",
//             ].map((c) => (
//               <span key={c} className="border border-ink/20 text-ink px-5 py-2 text-sm rounded-full bg-cream">
//                 {c}
//               </span>
//             ))}
//           </div>
//         </div>
//       </section></Reveal>
//     </Layout>
//   );
// }



import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { PageHero, Ornament } from "@/components/PageHero";
import { HeadingReveal } from "@/components/HeadingReveal";

import vision from "@/assets/visionmission.png";
import Teacher from "@/assets/TeacherTrainingCentre.png";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About TAG — TAG Education Hub" },
      { name: "description", content: "TAG – The Atelier Gurukula is a holistic learning ecosystem blending global learning practices, Indian cultural values and experiential, joyful learning." },
      { property: "og:title", content: "About TAG — TAG Education Hub" },
      { property: "og:description", content: "A holistic learning ecosystem nurturing curious, confident and compassionate learners." },
      { property: "og:url", content: "https://tageducationhub.lovable.app/about" },
    ],
    links: [{ rel: "canonical", href: "https://tageducationhub.lovable.app/about" }],
  }),
});

function About() {
  return (
    <Layout>
      <PageHero eyebrow="About TAG" title="The Atelier Gurukula." />

      <Reveal><section className="section-padding border-b bg-background">
        <div className="container-tag max-w-4xl text-center">
          <p className="text-lg leading-relaxed text-foreground/80 md:text-xl">
            The Atelier Gurukula is a holistic learning ecosystem designed to nurture children and learners through a blend of:
          </p>
          <ul className="mt-8 grid sm:grid-cols-3 gap-4 text-base">
            {["Global learning practices", "Indian cultural values", "Experiential and joyful learning"].map((m) => (
              <li key={m} className="card-lift rounded-xl border border-border bg-cream px-5 py-6 font-serif text-xl text-ink shadow-sm">
                {m}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-foreground/80">
            Our focus is to develop curious, confident and compassionate learners.
          </p>
        </div>
      </section></Reveal>

      {/* Vision */}
      <Reveal><section className="section-padding border-b bg-cream">
        <div className="container-tag max-w-4xl text-center">
          <p className="section-tag !mb-4">Vision</p>
          <HeadingReveal className="font-serif text-2xl font-semibold leading-snug text-ink md:text-3xl">
            To nurture balanced, confident, and joyful individuals through a holistic education model that integrates timeless wisdom with global pedagogy.
          </HeadingReveal>
          <Ornament />
        </div>
      </section></Reveal>

      {/* Mission — image right side */}
      <Reveal><section className="section-padding border-b bg-cream">
        <div className="container-tag max-w-5xl">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <p className="section-tag">Mission</p>
              <ul className="space-y-5 text-lg text-foreground/85">
                {[
                  "To strengthen the body through movement and healthy habits.",
                  "To balance energy through mindful practices and structured rhythm.",
                  "To nurture the mind with emotional intelligence and social awareness.",
                  "To stimulate the intellect through inquiry-based and experiential learning.",
                  "To cultivate joy and values that shape compassionate global citizens.",
                ].map((m) => (
                  <li key={m} className="border-l-2 border-crimson/30 py-1 pl-5">
                    {m}
                  </li>
                ))}
              </ul>

              <p className="mt-10 text-foreground/80">Our objective is to:</p>
              <ul className="mt-3 space-y-2 text-foreground/85">
                {[
                  "Create joyful and engaging learning environments",
                  "Encourage curiosity, creativity and exploration",
                  "Integrate global learning practices",
                  "Build strong values and character",
                  "Partner with parents for holistic child development",
                ].map((m) => (
                  <li key={m} className="flex gap-3"><span className="text-crimson">•</span> {m}</li>
                ))}
              </ul>
            </div>

            {/* Right: image */}
            <div className="relative flex justify-center md:justify-end">
              <div className="absolute -bottom-4 -right-4 hidden h-full w-full rounded-2xl bg-crimson/8 md:block" />
              <div className="img-hover relative overflow-hidden rounded-xl shadow-[0_20px_50px_-15px_rgba(13,27,42,0.2)]">
                <img
                  src={vision}
                  alt="Vision & Mission"
                  className="relative w-full max-w-sm object-cover md:max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section></Reveal>

      <Reveal><section className="section-padding border-b bg-background">
        <div className="container-tag max-w-5xl">
          <p className="section-tag">TAG Educational Philosophy</p>
          <div className="grid gap-8 md:grid-cols-3 md:gap-10">
            {[
              { t: "Global Learning", d: "Exposure to modern and international learning practices." },
              { t: "Guided by Values", d: "Education that builds character, empathy and responsibility." },
              { t: "Grounded in Wisdom", d: "Learning inspired by timeless Indian knowledge and cultural values." },
            ].map((p) => (
              <div
                key={p.t}
                className="card-lift rounded-xl border border-t-[3px] border-t-crimson border-border/50 bg-white p-8 shadow-sm"
              >
                <h3 className="mb-3 font-serif text-2xl font-bold text-ink md:text-[1.75rem]">{p.t}</h3>
                <p className="leading-relaxed text-foreground/75">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section></Reveal>

      {/* Educator Development — image right side */}
      <Reveal><section className="section-padding border-b bg-cream">
        <div className="container-tag max-w-5xl">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <p className="section-tag">
                TAG Educator Development Program (Teacher Training Centre)
              </p>
              <HeadingReveal className="mb-6 font-serif text-3xl font-bold leading-tight text-ink md:text-4xl">
                A professional teacher training program that prepares educators to:
              </HeadingReveal>
              <ul className="space-y-2 text-foreground/85">
                {[
                  "Understand child development",
                  "Early childhood pedagogy",
                  "Use creative teaching methods",
                  "Activity-based teaching",
                  "Practical classroom training",
                  "Manage classrooms effectively",
                  "Inspire curiosity and joyful learning",
                  "Communication and leadership skills",
                ].map((m) => (
                  <li key={m} className="flex gap-3"><span className="text-crimson">•</span> {m}</li>
                ))}
              </ul>
              <p className="font-serif italic text-xl text-crimson mt-8">
                Empowering educators to inspire young minds. Preparing teachers for modern global classrooms.
              </p>
            </div>

            {/* Right: image */}
            <div className="relative flex justify-center md:justify-end">
              <div className="absolute -bottom-4 -right-4 hidden h-full w-full rounded-2xl bg-crimson/8 md:block" />
              <div className="img-hover relative overflow-hidden rounded-xl shadow-[0_20px_50px_-15px_rgba(13,27,42,0.2)]">
                <img
                  src={Teacher}
                  alt="Teacher Training Centre"
                  className="relative w-full max-w-sm object-cover md:max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section></Reveal>

      <Reveal><section className="section-padding bg-background">
        <div className="container-tag max-w-5xl">
          <p className="section-tag">TAG Learning Ecosystem</p>
          <HeadingReveal className="mb-8 font-serif text-3xl font-bold leading-tight text-ink md:text-4xl">
            Nurturing holistic growth through thoughtfully designed programs that support learning, creativity, communication, well-being, and lifelong development.
          </HeadingReveal>
          <div className="flex flex-wrap gap-3">
            {[
              "Specialized Accelerated Learning Program",
              "Learning Studio",
              "Academic Enrichment",
              "Skill-Based Activities",
              "Global Language Enrichment",
              "Educator Training & Professional Development",
            ].map((c) => (
              <span
                key={c}
                className="rounded-full border border-ink/20 bg-cream px-5 py-2.5 text-sm text-ink shadow-sm transition-shadow hover:shadow-md"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section></Reveal>
    </Layout>
  );
}
