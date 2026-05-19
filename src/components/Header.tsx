// import { Link } from "@tanstack/react-router";
// import { useState } from "react";
// import { Menu, X } from "lucide-react";
// import logo from "@/assets/logo.png";

// const links = [
//   { to: "/", label: "Home" },
//   { to: "/about", label: "About" },
//   { to: "/programs", label: "Programs" },
//   { to: "/founder", label: "Founder" },
//   { to: "/contact", label: "Contact" },
// ] as const;

// export function Header({ transparent = false }: { transparent?: boolean }) {
//   const [open, setOpen] = useState(false);
//   return (
//     <header className={`absolute top-0 left-0 right-0 z-40 ${transparent ? "" : "bg-background border-b"}`}>
//       {/* Top deto bar */}
//       <div className={`w-full ${transparent ? "bg-ink/70 backdrop-blur-sm text-white" : "bg-ink text-white"}`}>
//         <div className="container-tag flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 py-2 text-xs sm:text-sm">
//           <p className="font-serif tracking-tight">
//             TAG – The Atelier Gurukula
//           </p>
//           <p className="tracking-wide text-white/80">
//             Global Learning • Guided by Values • Grounded in Wisdom
//           </p>
//         </div>
//       </div>

//       <div className="container-tag flex items-center justify-between py-3">
//         <Link to="/" className="flex items-center gap-3">
//           <img
//             src={logo}
//             alt="TAG Education Hub"
//             className={`h-20 md:h-24 w-auto object-contain ${transparent ? "bg-white/95 rounded-md p-2 border border-white/40 shadow-sm" : ""}`}
//           />
//         </Link>

//         <button
//           aria-label="Open menu"
//           onClick={() => setOpen(true)}
//           className={`inline-flex items-center gap-2 px-4 py-2 text-sm tracking-wide ${transparent ? "text-white/95 hover:text-white" : "text-foreground/80 hover:text-primary"}`}
//         >
//           <Menu className="h-5 w-5" />
//           <span>Menu</span>
//         </button>
//       </div>

//       {open && (
//         <div className="fixed inset-0 z-50 bg-ink text-white flex flex-col">
//           <div className="container-tag flex items-center justify-between py-5 shrink-0">
//             <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-3">
//               <img src={logo} alt="TAG" className="h-14 w-auto object-contain bg-white rounded-md p-1.5" />
//             </Link>
//             <button onClick={() => setOpen(false)} aria-label="Close" className="inline-flex items-center gap-2 px-4 py-2 text-sm">
//               <span>Close</span>
//               <X className="h-5 w-5" />
//             </button>
//           </div>
//           <div className="flex-1 overflow-y-auto">
//             <nav className="container-tag pt-8 pb-16 flex flex-col gap-2 md:gap-3">
//               {links.map((l) => (
//                 // <Link
//                 //   key={l.to}
//                 //   to={l.to}
//                 //   onClick={() => setOpen(false)}
//                 //   className="font-serif text-6xl md:text-8xl leading-[1.05] text-white/95 hover:text-crimson transition-colors"
//                 // >
//                 //   {l.label}
//                 // </Link>

//                 <Link
//   key={l.to}
//   to={l.to}
//   onClick={() => setOpen(false)}
//   className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight text-white/95 hover:text-crimson transition-colors"
// >
//   {l.label}
// </Link>
//               ))}
//             </nav>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }


//new code
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/founder", label: "Founder" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header({ transparent = false }: { transparent?: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <header
      className={`absolute top-0 left-0 right-0 z-40 ${
        transparent ? "" : "bg-background border-b"
      }`}
    >
      {/* Top detail bar */}
      <div
        className={`w-full ${
          transparent
            ? "bg-ink/70 backdrop-blur-sm text-white"
            : "bg-ink text-white"
        }`}
      >
        <div className="container-tag flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 py-2 text-xs sm:text-sm">
          <p className="font-serif tracking-tight">TAG – The Atelier Gurukula</p>
          <p className="tracking-wide text-white/80">
            Global Learning • Guided by Values • Grounded in Wisdom
          </p>
        </div>
      </div>

      <div className="container-tag flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="TAG Education Hub"
            className={`h-20 md:h-24 w-auto object-contain ${
              transparent
                ? "bg-white/95 rounded-md p-2 border border-white/40 shadow-sm"
                : ""
            }`}
          />
        </Link>

        <button
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className={`inline-flex items-center gap-2 px-4 py-2 text-sm tracking-wide ${
            transparent
              ? "text-white/95 hover:text-white"
              : "text-foreground/80 hover:text-primary"
          }`}
        >
          <Menu className="h-5 w-5" />
          <span>Menu</span>
        </button>
      </div>

      {/* Full-screen menu overlay */}
      {open && (
        <div className="fixed inset-0 z-50 bg-ink text-white flex flex-col overflow-hidden">
          {/* ── Watermark layer ── */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center select-none"
          >
            {/* Large ghosted brand name */}
            <span
              className="font-serif text-center leading-none"
              style={{
                fontSize: "clamp(5rem, 18vw, 14rem)",
                opacity: 0.13,
                letterSpacing: "-0.02em",
                userSelect: "none",
                color: "#ffffff",
                WebkitTextStroke: "1px rgba(255,255,255,0.4)",
              }}
            >
              TAG
            </span>
            <span
              className="font-serif text-center leading-none mt-3"
              style={{
                fontSize: "clamp(1.4rem, 5.5vw, 4.2rem)",
                opacity: 0.13,
                letterSpacing: "0.12em",
                userSelect: "none",
                color: "#ffffff",
              }}
            >
              EDUCATION HUB
            </span>


          </div>

          {/* ── Top bar: logo + close ── */}
          <div className="container-tag flex items-center justify-between py-5 shrink-0 relative z-10">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3"
            >
              <img
                src={logo}
                alt="TAG"
                className="h-14 w-auto object-contain bg-white rounded-md p-1.5"
              />
            </Link>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm tracking-wide text-white/80 hover:text-white transition-colors"
            >
              <span>Close</span>
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* ── Nav links ── */}
          <div className="flex-1 overflow-y-auto relative z-10">
            <nav className="container-tag pt-8 pb-16 flex flex-col gap-2 md:gap-3">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight text-white/95 hover:text-crimson transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* ── Bottom tagline ── */}
          <div className="container-tag pb-6 pt-2 shrink-0 relative z-10">
            <p className="text-xs tracking-[0.18em] uppercase text-white/30 font-sans">
              Global Learning · Guided by Values · Grounded in Wisdom
            </p>
          </div>
        </div>
      )}
    </header>
  );
}