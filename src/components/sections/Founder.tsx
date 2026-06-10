// import founder from "@/assets/founder-rupali.png";
// import { HeadingReveal } from "@/components/HeadingReveal";

// const qualifications = ["M.Sc", "B.Ed", "MBA", "PGDSA", "DEAM", "IATA", "HDISM"];

// export function Founder() {
//   return (
//     <section className="section-padding founder-pattern">
//       <div className="container-tag grid items-start gap-12 md:grid-cols-12">
//         <div className="md:col-span-5">
//           <div className="relative mx-auto max-w-sm md:mx-0">
//             <div className="absolute -inset-1 rounded-2xl bg-crimson/20" aria-hidden />
//             <div className="img-hover relative aspect-[4/5] overflow-hidden rounded-2xl border-4 border-crimson/30 bg-background shadow-lg">
//               <img
//                 src={founder}
//                 alt="Mrs. Rupali Bobade"
//                 loading="lazy"
//                 className="absolute inset-0 h-full w-full object-cover"
//               />
//             </div>
//           </div>
//           <p className="mt-6 font-serif text-2xl font-bold text-ink">Mrs. Rupali Bobade</p>
//           <p className="mt-1 text-sm text-muted-foreground">Founder &amp; Director – TAG Education Hub</p>
//           <p className="text-sm text-muted-foreground">TAG Learnarium – A Complete World of Learning</p>
//         </div>
//         <div className="md:col-span-7 md:pt-4">
//           <p className="section-tag">TAG Founder &amp; Directors</p>
//           <HeadingReveal className="mb-3 font-serif text-4xl font-bold leading-tight text-ink md:text-5xl">
//             Mrs. Rupali Bobade
//           </HeadingReveal>
//           <div className="mb-3 flex flex-wrap gap-2">
//             {qualifications.map((q) => (
//               <span
//                 key={q}
//                 className="rounded-full border border-crimson/20 bg-white/80 px-3 py-1 text-xs font-medium tracking-wide text-ink shadow-sm"
//               >
//                 {q}
//               </span>
//             ))}
//           </div>
//           <p className="mb-8 text-sm text-foreground/70">
//             Founder &amp; Director: TAG – The Atelier Gurukula · TAG Education Hub
//           </p>
//           <div className="space-y-5 leading-relaxed text-foreground/80">
//             <p>
//               Mrs. Rupali Bobade is a visionary educationist, dynamic leader, and Founder &amp; Director of TAG Education Hub, with over 25 years of diversified experience across the Corporate and Education sectors. Her professional journey spans aviation, US healthcare processes, operations, training, administration, and institutional development, bringing together strong organizational expertise with a deep passion for education and holistic learning.
//             </p>
//             <p>
//               Driven by her commitment to nurturing future-ready learners and empowered educators, she has actively contributed to school setup, academic planning, educator mentoring, and skill development initiatives. Honoured with the prestigious <em className="font-semibold text-ink not-italic">"Shikshak Gaurav Puruskar"</em>, Mrs. Bobade strongly believes in creating engaging, value-based, and learner-centric environments that foster creativity, confidence, emotional well-being, and lifelong learning.
//             </p>
//             <p>
//               As the Founder &amp; Director of TAG Education Hub, she leads with a vision of building an integrated ecosystem for early childhood education, academic support, educator development, and holistic enrichment programs. Her approach blends progressive learning methodologies with practical and experiential development, empowering every child and educator to grow with confidence, purpose, excellence and to realize their highest potential.
//             </p>
//           </div>
//           <blockquote className="relative mt-12 border-l-4 border-crimson py-2 pl-8">
//             <span
//               className="pointer-events-none absolute -left-1 -top-4 font-serif text-6xl leading-none text-crimson/25"
//               aria-hidden
//             >
//               &ldquo;
//             </span>
//             <p className="font-serif text-xl italic leading-snug text-crimson md:text-2xl">
//               Transforming Education | Accelerating Potential | Guiding Excellence
//             </p>
//           </blockquote>
//         </div>
//       </div>
//     </section>
//   );
// }



import rupali from "@/assets/founder-rupali.png";
import shilpa from "@/assets/shilpamam.jpeg";
import { HeadingReveal } from "@/components/HeadingReveal";

const rupaliQualifications = ["M.Sc", "B.Ed", "MBA", "PGDSA", "DEAM", "IATA", "HDISM"];

const founders = [
  {
    img: rupali,
    alt: "Mrs. Rupali Bobade",
    name: "Mrs. Rupali Bobade",
    designation: "Founder & Director – TAG Education Hub",
    subDesignation: "TAG Learnarium – A Complete World of Learning",
    qualifications: rupaliQualifications,
    role: "Founder & Director: TAG – The Atelier Gurukula · TAG Education Hub",
    bio: [
      "Mrs. Rupali Bobade is a visionary educationist, dynamic leader, and Founder & Director of TAG Education Hub, with over 25 years of diversified experience across the Corporate and Education sectors. Her professional journey spans aviation, US healthcare processes, operations, training, administration, and institutional development, bringing together strong organizational expertise with a deep passion for education and holistic learning.",
      <>Driven by her commitment to nurturing future-ready learners and empowered educators, she has actively contributed to school setup, academic planning, educator mentoring, and skill development initiatives. Honoured with the prestigious <em className="font-semibold text-ink not-italic">"Shikshak Gaurav Puruskar"</em>, Mrs. Bobade strongly believes in creating engaging, value-based, and learner-centric environments that foster creativity, confidence, emotional well-being, and lifelong learning.</>,
      "As the Founder & Director of TAG Education Hub, she leads with a vision of building an integrated ecosystem for early childhood education, academic support, educator development, and holistic enrichment programs. Her approach blends progressive learning methodologies with practical and experiential development, empowering every child and educator to grow with confidence, purpose, excellence and to realize their highest potential.",
    ],
  },
  {
    img: shilpa,
    alt: "Dr. Shilpa Kulkarni",
    name: "Dr. Shilpa Kulkarni",
    designation: "Strategic Adviser – TAG Education Hub",
    subDesignation: null,
    qualifications: [],
    role: "Strategic Adviser – TAG Education Hub",
    bio: [
      "With a strong academic foundation in dentistry and a deep passion for education, Dr. Shilpa has built a remarkable journey across the fields of school education, educational consultancy and child-centric initiatives.",
      "In 2010, she entered the education sector as a franchisee of the renowned preschool brand Bachpan, gaining extensive experience in early childhood education and school operations. Further expanding her contribution to the education ecosystem, she co-founded Phlox Educon Private Ltd. in 2012, providing consultancy and strategic support to educational institutions.",
      "Over the years, Dr. Shilpa has worked closely with schools, educators and parents, developing a strong understanding of modern learning needs, teacher development, and educational innovation.",
      "As the Strategic Adviser at TAG Education Hub, she brings valuable expertise in educational planning, teacher empowerment, and learner-focused initiatives. Her vision is centered on creating impactful learning environments, strengthening educator capabilities and promoting holistic educational growth.",
      <>Beyond education, Dr. Shilpa is also the founder of <em className="font-semibold text-ink not-italic">Dibba Express</em>, a healthy meal initiative inspired by her personal journey as a mother and her commitment to child wellness and nutrition.</>,
    ],
  },
];

export function Founder() {
  return (
    <section className="section-padding founder-pattern">
      <div className="container-tag">
        <p className="section-tag mb-2">TAG Founder &amp; Directors</p>
        <HeadingReveal className="mb-16 font-serif text-4xl font-bold leading-tight text-ink md:text-5xl">
          Meet Our Leadership
        </HeadingReveal>

        <div className="space-y-24">
          {founders.map((f, i) => (
            <div
              key={f.name}
              className={`grid items-start gap-12 md:grid-cols-12 ${i % 2 !== 0 ? "md:[direction:rtl]" : ""}`}
            >
              {/* Image col */}
              <div className={`md:col-span-5 ${i % 2 !== 0 ? "md:[direction:ltr]" : ""}`}>
                <div className="relative mx-auto max-w-sm md:mx-0">
                  <div className="absolute -inset-1 rounded-2xl bg-crimson/20" aria-hidden />
                  <div className="img-hover relative aspect-[4/5] overflow-hidden rounded-2xl border-4 border-crimson/30 bg-background shadow-lg">
                    <img
                      src={f.img}
                      alt={f.alt}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                </div>
                <p className="mt-6 font-serif text-2xl font-bold text-ink">{f.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">{f.designation}</p>
                {f.subDesignation && (
                  <p className="text-sm text-muted-foreground">{f.subDesignation}</p>
                )}
              </div>

              {/* Content col */}
              <div className={`md:col-span-7 md:pt-4 ${i % 2 !== 0 ? "md:[direction:ltr]" : ""}`}>
                {f.qualifications.length > 0 && (
                  <div className="mb-3 flex flex-wrap gap-2">
                    {f.qualifications.map((q) => (
                      <span
                        key={q}
                        className="rounded-full border border-crimson/20 bg-white/80 px-3 py-1 text-xs font-medium tracking-wide text-ink shadow-sm"
                      >
                        {q}
                      </span>
                    ))}
                  </div>
                )}
                <p className="mb-8 text-sm text-foreground/70">{f.role}</p>
                <div className="space-y-5 leading-relaxed text-foreground/80">
                  {f.bio.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
                <blockquote className="relative mt-12 border-l-4 border-crimson py-2 pl-8">
                  <span
                    className="pointer-events-none absolute -left-1 -top-4 font-serif text-6xl leading-none text-crimson/25"
                    aria-hidden
                  >
                    &ldquo;
                  </span>
                  <p className="font-serif text-xl italic leading-snug text-crimson md:text-2xl">
                    Transforming Education | Accelerating Potential | Guiding Excellence
                  </p>
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
