import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/TAGLogo.jpeg";

// import logo from "@/assets/logo-removebg-preview (1).png";

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
      <div
        className={`w-full ${
          transparent ? "bg-ink/70 backdrop-blur-sm text-white" : "bg-ink text-white"
        }`}
      >
        <div className="container-tag flex flex-col gap-1 py-2 text-xs sm:flex-row sm:items-center sm:justify-between sm:text-sm">
          <p className="font-serif tracking-tight">TAG – The Atelier Gurukula</p>
          <p className="tracking-wide text-white/80">
            Global Learning • Guided by Values • Grounded in Wisdom
          </p>
        </div>
      </div>

      <div className="container-tag flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-3 bg-transparent">
          {/* <img
            src={logo}
            alt="TAG Education Hub"
            className={`h-20 w-auto object-contain md:h-24 ${
              transparent ? "brightness-0 invert" : ""
            }`}
          /> */}

          <img
            src={logo}
            alt="TAG Education Hub"
        className="h-24 w-auto object-contain rounded-lg"
          />
        </Link>

        <button
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className={`btn-interactive inline-flex items-center gap-2 px-4 py-2 text-sm tracking-wide ${
            transparent ? "text-white/95 hover:text-white" : "text-foreground/80 hover:text-primary"
          }`}
        >
          <Menu className="h-5 w-5" />
          <span>Menu</span>
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col overflow-hidden bg-ink text-white">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 flex select-none flex-col items-center justify-center"
          >
            <span
              className="text-center font-serif leading-none"
              style={{
                fontSize: "clamp(5rem, 18vw, 14rem)",
                opacity: 0.13,
                letterSpacing: "-0.02em",
                color: "#ffffff",
                WebkitTextStroke: "1px rgba(255,255,255,0.4)",
              }}
            >
              TAG
            </span>
            <span
              className="mt-3 text-center font-serif leading-none"
              style={{
                fontSize: "clamp(1.4rem, 5.5vw, 4.2rem)",
                opacity: 0.13,
                letterSpacing: "0.12em",
                color: "#ffffff",
              }}
            >
              EDUCATION HUB
            </span>
          </div>

          <div className="container-tag relative z-10 flex shrink-0 items-center justify-between py-5">
           <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-3">
              <span className="font-serif text-xl tracking-widest text-white">
                TAG <span className="text-white/60">EDUCATION</span>
              </span>
            </Link>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="btn-interactive inline-flex items-center gap-2 px-4 py-2 text-sm tracking-wide text-white/80 transition-colors hover:text-white"
            >
              <span>Close</span>
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="relative z-10 flex-1 overflow-y-auto">
            <nav className="container-tag flex flex-col gap-2 pb-16 pt-8 md:gap-3">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="nav-link-underline font-serif text-3xl leading-tight text-white/95 transition-colors hover:text-crimson sm:text-4xl md:text-5xl"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="container-tag relative z-10 shrink-0 pb-6 pt-2">
            <p className="font-sans text-xs uppercase tracking-[0.18em] text-white/30">
              Global Learning · Guided by Values · Grounded in Wisdom
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
