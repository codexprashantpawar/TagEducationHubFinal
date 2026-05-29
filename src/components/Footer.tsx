import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="border-t-2 border-crimson bg-ink text-white/80">
      <div className="container-tag grid gap-12 py-24 md:grid-cols-4 md:py-28">
        <div className="max-w-md md:col-span-2">
          <div className="mb-6 inline-block rounded-md bg-white p-3">
            <img src={logo} alt="TAG Education Hub" className="h-14 w-auto" />
          </div>
          <p className="mb-2 font-serif text-xl leading-snug text-white">
            TAG – The Atelier Gurukula
          </p>
          <p className="mb-4 font-serif text-base text-white/80">
            Global Learning • Guided by Values • Grounded in Wisdom
          </p>
          <p className="text-sm leading-relaxed text-white/60">
            An Integrated Hub for Learning &amp; Development.
          </p>
        </div>

        <div>
          <h4 className="mb-5 font-sans text-xs uppercase tracking-[0.2em] text-white">Explore</h4>
          <ul className="space-y-3 text-sm">
            {[
              { to: "/about", label: "About TAG" },
              { to: "/programs", label: "Programs" },
              { to: "/founder", label: "Founder" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="nav-link-underline transition-colors hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-5 font-sans text-xs uppercase tracking-[0.2em] text-white">Get in Touch</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              <span>A 631, Gera&apos;s Imperium Gateway A &amp; C, Nasik Phata, Pune - 411034</span>
            </li>
            <li className="flex gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0" />
              <span>+91 92720 97927</span>
            </li>
            <li className="flex gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0" />
              <span>tageducationhub@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-tag py-14">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h4 className="mb-2 font-serif text-3xl text-white">Stay in the loop</h4>
              <p className="text-sm text-white/60">
                Receive program updates, educator insights, and event invitations.
              </p>
            </div>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                required
                placeholder="Your email address"
                className="flex-1 border border-white/30 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-white focus:outline-none"
              />
              <button
                type="submit"
                className="btn-primary btn-interactive shrink-0 rounded-sm px-6 py-3"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-tag flex flex-col items-center gap-6 py-10 text-center">
          <div className="flex gap-5">
            {[Instagram, Linkedin, Facebook, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social"
                className="text-white/50 transition-colors hover:text-[#e8c872]"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
          <p className="w-full border-t border-white/10 pt-6 text-xs text-white/50">
            © {new Date().getFullYear()} TAG Education Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
