import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-ink text-white/80">
      <div className="container-tag py-20 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2 max-w-md">
          <div className="bg-white inline-block p-3 rounded-md mb-6">
            <img src={logo} alt="TAG Education Hub" className="h-14 w-auto" />
          </div>
          <p className="font-serif text-xl text-white leading-snug mb-2">
            TAG – The Atelier Gurukula
          </p>
          <p className="font-serif text-base text-white/80 mb-4">
            Global Learning • Guided by Values • Grounded in Wisdom
          </p>
          <p className="text-sm text-white/60 leading-relaxed">
            An Integrated Hub for Learning &amp; Development.
          </p>
        </div>

        <div>
          <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-white mb-5">Explore</h4>
          <ul className="space-y-3 text-sm">
            {[
              { to: "/about", label: "About TAG" },
              { to: "/programs", label: "Programs" },
              { to: "/founder", label: "Founder" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-white transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-white mb-5">Get in Touch</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0" /><span>A 631, Gera's Imperium Gateway A &amp; C, Nasik Phata, Pune - 411034</span></li>
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 shrink-0" /><span>+91 92720 97927</span></li>
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 shrink-0" /><span>tageducationhub@gmail.com</span></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-tag py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="font-serif text-3xl text-white mb-2">Stay in the loop</h4>
              <p className="text-sm text-white/60">Receive program updates, educator insights, and event invitations.</p>
            </div>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                required
                placeholder="Your email address"
                className="flex-1 bg-transparent border border-white/30 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-white"
              />
              <button className="bg-crimson hover:bg-crimson-deep text-white px-6 py-3 text-sm font-medium tracking-wide transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-tag py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} TAG Education Hub. All rights reserved.</p>
          <div className="flex gap-5">
            {[Instagram, Linkedin, Facebook, Youtube].map((Icon, i) => (
              <a key={i} href="#" aria-label="social" className="hover:text-white transition-colors">
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
