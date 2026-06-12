import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { HeadingReveal } from "@/components/HeadingReveal";
import { Partners } from "@/components/sections/Partners";

import Program from "@/assets/ExcellenceProgram.jpg";


import TAGEducatorExcellenceProgram from "@/assets/TAGEducatorExcellenceProgram.jpg";
import TeacherAward from "@/assets/TeacherAward.png";


export const Route = createFileRoute("/programs")({
  component: Programs,
  head: () => ({
    meta: [
      { title: "Our Offerings — TAG Education Hub" },
      { name: "description", content: "TAG Signature Learning & Development Series — Global English Excellence with Trinity College London, Educator Excellence Program, and Pune Educator Innovation Awards 2026." },
      { property: "og:title", content: "Our Offerings — TAG Education Hub" },
      { property: "og:description", content: "TAG Signature Learning & Development Series." },
      { property: "og:url", content: "https://www.tageducationhub.com/programs" },
    ],
    links: [{ rel: "canonical", href: "https://www.tageducationhub.com/programs" }],
  }),
});

function Programs() {
  return (
    <Layout>
      <PageHero
        eyebrow="Our Offerings"
        title="TAG Signature Learning & Development Series."
      />

      {/* Program 1 */}
      <Reveal><section className="section-padding border-b bg-background">
        <div className="container-tag max-w-5xl">
          <p className="section-tag">Upcoming School Partnership Program</p>
          <HeadingReveal className="mb-2 font-serif text-2xl font-bold leading-snug text-ink md:text-3xl">
            TAG Global English Excellence Program
          </HeadingReveal>
          <p className="font-serif italic text-foreground/70 mb-2">
            in association with Trinity College London
          </p>
          <p className="font-serif italic text-xl text-crimson mb-8">
            Give Students a Global Edge in English Communication
          </p>

          {/* Intro + Image */}
          <div className="grid md:grid-cols-2 gap-10 items-center mb-10">
            <div>
              <p className="text-foreground/80 leading-relaxed mb-4">
                TAG Education Hub is launching a high-impact English proficiency and communication development program designed to help students build confidence, fluency, and globally relevant language skills.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                In association with Trinity College London, the program offers structured training and international certification pathways focused on spoken English, integrated communication skills, and real-world language application.
              </p>
            </div>
            <div className="img-hover flex justify-end overflow-hidden rounded-xl">
              <img
                src={Program}
                alt="Students in English classroom"
                className="aspect-[4/3] w-full max-w-sm rounded-xl object-cover shadow-[0_20px_50px_-15px_rgba(13,27,42,0.18)] md:max-w-full"
              />
            </div>
          </div>

          <h3 className="font-serif font-bold text-2xl text-ink mb-4">Program Highlights</h3>
          <ul className="space-y-2 text-foreground/85 mb-8">
            <li className="flex gap-3"><span className="text-crimson">•</span> Spoken English &amp; Communication Development</li>
            <li className="flex gap-3"><span className="text-crimson">•</span> International Certification Pathway in Association with Trinity College London: Preparation for
              <ul className="ml-6 mt-2 space-y-1 text-foreground/75">
                <li>○ GESE (Spoken English)</li>
                <li>○ ISE (Integrated Skills in English – an exam considered as equivalent to TOFEL and IELTS)</li>
                <li>○ TESOL (Foundation exposure for senior students)</li>
              </ul>
            </li>
            <li className="flex gap-3"><span className="text-crimson">•</span> Activity-Based &amp; Interactive Learning</li>
            <li className="flex gap-3"><span className="text-crimson">•</span> Listening, Speaking, Reading &amp; Writing Enhancement</li>
            <li className="flex gap-3"><span className="text-crimson">•</span> Confidence Building &amp; Presentation Skills</li>
            <li className="flex gap-3"><span className="text-crimson">•</span> Practical Classroom &amp; Everyday Communication</li>
          </ul>

          <h3 className="font-serif font-bold text-2xl text-ink mb-4">Benefits for Students</h3>
          <ul className="space-y-2 text-foreground/85 mb-8">
            {[
              "Improved fluency and communication confidence",
              "Enhanced academic and presentation skills",
              "Exposure to international assessment standards",
              "Development of leadership and interpersonal skills",
              "Strong foundation for future academic and career opportunities",
            ].map((m) => <li key={m} className="flex gap-3"><span className="text-crimson">•</span> {m}</li>)}
          </ul>

          <h3 className="font-serif font-bold text-2xl text-ink mb-3">Pilot Program for Schools</h3>
          <p className="text-foreground/80 mb-8">
            TAG Education Hub is also offering pilot sessions for selected schools to experience the impact of the program through interactive and measurable learning outcomes.
          </p>

          <h3 className="font-serif font-bold text-2xl text-ink mb-3">Who Can Participate?</h3>
          <p className="text-foreground/80 mb-8">
            Students from primary to secondary grades through school partnership programs.
          </p>

          <h3 className="font-serif font-bold text-2xl text-ink mb-3">Connect With Us</h3>
          <p className="text-foreground/80">
            Schools interested in collaboration or pilot implementation may contact us for further details.
          </p>
        </div>
      </section></Reveal>

      {/* Program 2 */}
      <Reveal><section className="section-padding border-b bg-cream">
        <div className="container-tag max-w-5xl">
          <p className="section-tag">Upcoming Preschool Educator Development Program</p>
          <HeadingReveal className="mb-2 font-serif text-2xl font-bold leading-snug text-ink md:text-3xl">
            TAG Educator Excellence Program
          </HeadingReveal>
          <p className="font-serif italic text-xl text-crimson mb-8">
            Upgrade Your Teachers. Elevate Your Preschool.
          </p>

          {/* Intro + Image */}
          <div className="grid md:grid-cols-2 gap-10 items-center mb-10">
            <div>
              <p className="text-foreground/80 leading-relaxed mb-4">
                TAG Education Hub introduces a comprehensive educator development initiative designed specifically for preschool teachers and institutions committed to building confident educators, stronger parent trust, and future-ready learning environments.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                This specialized program focuses on enhancing communication skills, personality development, leadership abilities, and professional confidence among preschool educators through practical, engaging, and experiential learning approaches.
              </p>
            </div>
            <div className="img-hover flex justify-end overflow-hidden rounded-xl">
              <img
                src={TAGEducatorExcellenceProgram}
                alt="Teacher training workshop"
                className="aspect-[4/3] w-full max-w-sm rounded-xl object-cover shadow-[0_20px_50px_-15px_rgba(13,27,42,0.18)] md:max-w-full"
              />
            </div>
          </div>

          <h3 className="font-serif font-bold text-2xl text-ink mb-2">
            Program 1: English Excellence Program for Preschool Teachers
          </h3>
          <p className="text-foreground/80 mb-6">
            A focused training program designed to improve spoken English, pronunciation, classroom communication, phonics, storytelling, and overall teacher confidence.
          </p>

          <h4 className="font-serif font-bold text-xl text-ink mb-3">Program Highlights</h4>
          <ul className="space-y-2 text-foreground/85 mb-8">
            <li className="flex gap-3"><span className="text-crimson">•</span> Spoken English &amp; Pronunciation Development</li>
            <li className="flex gap-3"><span className="text-crimson">•</span> Classroom Communication &amp; Daily Interaction Skills</li>
            <li className="flex gap-3"><span className="text-crimson">•</span> Phonics &amp; Storytelling Techniques</li>
            <li className="flex gap-3"><span className="text-crimson">•</span> Confidence Building &amp; Professional Presence</li>
            <li className="flex gap-3"><span className="text-crimson">•</span> Interactive &amp; Activity-Based Learning</li>
            <li className="flex gap-3"><span className="text-crimson">•</span> International Certification Pathways in association with Trinity College London
              <ul className="ml-6 mt-2 space-y-1 text-foreground/75">
                <li>○ GESE (Spoken English)</li>
                <li>○ ISE (Integrated Skills in English)</li>
                <li>○ TESOL Exposure for Advanced Teacher Development</li>
              </ul>
            </li>
          </ul>

          <h4 className="font-serif font-bold text-xl text-ink mb-3">Expected Outcomes</h4>
          <ul className="space-y-2 text-foreground/85 mb-10">
            {[
              "Improved teacher fluency and communication confidence",
              "Stronger classroom engagement and parent interaction",
              "Enhanced professional presentation and leadership skills",
              "Development of a positive English-speaking environment",
            ].map((m) => <li key={m} className="flex gap-3"><span className="text-crimson">•</span> {m}</li>)}
          </ul>

          <h3 className="font-serif font-bold text-2xl text-ink mb-2">
            Program 2: Professional Development Program for Preschool Teachers
          </h3>
          <p className="text-foreground/80 mb-6">
            A dynamic professional development series designed to strengthen personality development, emotional intelligence, leadership skills, teamwork, and professional growth among educators.
          </p>

          <h4 className="font-serif font-bold text-xl text-ink mb-3">Key Focus Areas</h4>
          <ul className="space-y-2 text-foreground/85 mb-8">
            {[
              "Personality Development & Professional Presence",
              "Leadership & Interpersonal Skills",
              "Emotional Intelligence & Self-Confidence",
              "Positive Mindset & Growth Orientation",
              "Time Management & Professional Etiquette",
            ].map((m) => <li key={m} className="flex gap-3"><span className="text-crimson">•</span> {m}</li>)}
          </ul>

          <h4 className="font-serif font-bold text-xl text-ink mb-3">Program Structure</h4>
          <ul className="space-y-2 text-foreground/85 mb-10">
            <li className="flex gap-3"><span className="text-crimson">•</span> 4 In-House Interactive Training Sessions</li>
            <li className="flex gap-3"><span className="text-crimson">•</span> 1 Experiential Offsite Learning Session</li>
          </ul>

          <h3 className="font-serif font-bold text-2xl text-ink mb-3">Special Parent Engagement Session</h3>
          <p className="text-foreground/80 mb-10">
            An interactive session for preschool parents focusing on Child Psychology and Child Consciousness, helping parents better understand emotional development, behavior patterns, mindful parenting, and early childhood learning during the foundational preschool years.
          </p>

          <h3 className="font-serif font-bold text-2xl text-ink mb-3">Why Partner With TAG Education Hub?</h3>
          <ul className="space-y-2 text-foreground/85">
            {[
              "Empowered and confident educators",
              "Stronger preschool brand positioning",
              "Enhanced parent trust and engagement",
              "Holistic educator and child development approach",
              "Practical, experience-driven learning methodologies",
            ].map((m) => <li key={m} className="flex gap-3"><span className="text-crimson">•</span> {m}</li>)}
          </ul>
        </div>
      </section></Reveal>

      {/* Program 3 */}
      <Reveal><section className="section-padding border-b bg-background">
        <div className="container-tag max-w-5xl">
          <p className="section-tag">TAG Pune Educator Innovation Awards 2026</p>
          <HeadingReveal className="mb-3 font-serif text-2xl font-bold leading-snug text-ink md:text-3xl">
            Innovative Teacher of the Year Award 2026
          </HeadingReveal>
          <p className="font-serif italic text-xl text-crimson mb-8">
            Celebrating Creativity • Innovation • Transformative Teaching
          </p>

          {/* Intro + Image */}
          <div className="grid md:grid-cols-2 gap-10 items-center mb-10">
            <div>
              <p className="text-foreground/80 leading-relaxed mb-4">
                TAG Education Hub proudly presents the "Innovative Teacher of the Year Award 2026" — a prestigious platform dedicated to recognizing educators who inspire learning through creativity, collaboration, and innovative teaching practices.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                This grand event aims to showcase impactful classroom solutions aligned with experiential learning, outcome-based education, and the vision of NEP 2020.
              </p>
            </div>
            <div className="img-hover flex justify-end overflow-hidden rounded-xl">
              <img
                src={TeacherAward}
                alt="Educator awards ceremony"
                className="aspect-[4/3] w-full max-w-sm rounded-xl object-cover shadow-[0_20px_50px_-15px_rgba(13,27,42,0.18)] md:max-w-full"
              />
            </div>
          </div>

          <h3 className="font-serif font-bold text-2xl text-ink mb-3">Who Can Participate?</h3>
          <p className="font-bold text-ink mb-2">Categories</p>
          <ul className="space-y-2 text-foreground/85 mb-6">
            <li className="flex gap-3"><span className="text-crimson">•</span> Pre-Primary &amp; Primary Teachers</li>
            <li className="flex gap-3"><span className="text-crimson">•</span> Middle &amp; Secondary School Teachers</li>
            <li className="flex gap-3"><span className="text-crimson">•</span> Teacher Education Students (MTC, TTC, B.Ed., D.Ed., D.El.Ed.)</li>
          </ul>

          <p className="font-bold text-ink mb-2">Sub-Categories</p>
          <ul className="space-y-2 text-foreground/85 mb-10">
            <li className="flex gap-3"><span className="text-crimson">•</span> Languages</li>
            <li className="flex gap-3"><span className="text-crimson">•</span> Social Studies</li>
            <li className="flex gap-3"><span className="text-crimson">•</span> Mathematics, Science &amp; IT</li>
          </ul>

          <h3 className="font-serif font-bold text-2xl text-ink mb-3">Participation Format</h3>
          <p className="text-foreground/80 mb-3">
            Teachers will participate in teams of 2–5 members and present innovative teaching-learning solutions using:
          </p>
          <ul className="space-y-2 text-foreground/85 mb-10">
            {[
              "3D Models & Teaching Aids",
              "Charts & Visual Learning Tools",
              "Digital Media & Presentations",
              "Interactive & Creative Instructional Materials",
            ].map((m) => <li key={m} className="flex gap-3"><span className="text-crimson">•</span> {m}</li>)}
          </ul>

          <h3 className="font-serif font-bold text-2xl text-ink mb-3">Key Presentation Components</h3>
          <p className="text-foreground/80 mb-3">Participants will demonstrate:</p>
          <ul className="space-y-2 text-foreground/85 mb-10">
            {[
              "Concept Explanation & Grade Relevance",
              "Clearly Defined Learning Outcomes",
              "Practical Classroom Implementation",
              "Formative Assessment Strategies",
              "Student Engagement & Learning Impact",
            ].map((m) => <li key={m} className="flex gap-3"><span className="text-crimson">•</span> {m}</li>)}
          </ul>

          <h3 className="font-serif font-bold text-2xl text-ink mb-3">Evaluation Criteria</h3>
          <ul className="space-y-2 text-foreground/85 mb-10">
            {[
              "Innovation & Creativity",
              "Concept Clarity",
              "Practical Applicability",
              "Learning Outcome Alignment",
              "Assessment Effectiveness",
              "Student Engagement Potential",
              "Team Collaboration",
            ].map((m) => <li key={m} className="flex gap-3"><span className="text-crimson">•</span> {m}</li>)}
          </ul>

          <h3 className="font-serif font-bold text-2xl text-ink mb-3">Recognition &amp; Awards</h3>
          <ul className="space-y-2 text-foreground/85 mb-10">
            <li className="flex gap-3"><span className="text-crimson">•</span> Winner &amp; Runner-Up Awards in Each Category</li>
            <li className="flex gap-3"><span className="text-crimson">•</span> Overall Best Innovative Teacher Team Awards</li>
            <li className="flex gap-3"><span className="text-crimson">•</span> Certificates &amp; Recognition for Participating Teams</li>
          </ul>

          <h3 className="font-serif font-bold text-2xl text-ink mb-3">Why Participate?</h3>
          <ul className="space-y-2 text-foreground/85 mb-10">
            {[
              "Showcase innovative teaching practices on a reputed platform",
              "Encourage collaborative and experiential learning approaches",
              "Gain recognition as progressive educators and institutions",
              "Strengthen professional development and creative thinking",
              "Align with NEP 2020 and future-ready education practices",
            ].map((m) => <li key={m} className="flex gap-3"><span className="text-crimson">•</span> {m}</li>)}
          </ul>

          <h3 className="font-serif font-bold text-2xl text-ink mb-4">Event Timeline</h3>
          <div className="grid md:grid-cols-3 gap-px bg-border border mb-10">
            {[
              { d: "25th July 2026", l: "Registration Deadline" },
              { d: "5th August 2026", l: "Submission of Entries" },
              { d: "Exact Date To Be Announced", l: "Presentation & Evaluation Rounds (Exact dates to be shared)" },
            ].map((e) => (
              <div key={e.l} className="card-lift rounded-xl bg-background p-6 shadow-sm">
                <p className="font-serif font-bold text-xl text-ink">{e.d}</p>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mt-2">{e.l}</p>
              </div>
            ))}
          </div>

          <p className="text-foreground/80">
            <span className="font-bold text-ink">Organised By:</span> TAG Education Hub
          </p>
          <p className="font-serif italic text-crimson mt-2">
            Transforming Education | Accelerating Potential | Guiding Excellence
          </p>
        </div>
      </section></Reveal>

      <Partners />
    </Layout>
  );
}
