import Link from 'next/link'
import { Mail, MapPin, Linkedin, Twitter, Zap } from 'lucide-react'

const BRAND = {
  name: 'Shortcut Finance',
  tagline: 'Finance faster, smarter — without the complexity',
  description: 'Shortcut Finance is a fintech company that simplifies financial services through smart technology and seamless digital solutions. We help individuals and businesses manage payments, access financing, and handle financial operations faster and more efficiently — removing complexity and creating a smoother path to financial success.',
  email: 'jiachwen99@gmail.com',
  address: 'B5-1-3, Forest Green Condominium, Bandar Sungai Long',
}

const links = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const legal = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative bg-[#0f172a] overflow-hidden">
      {/* Top gradient accent */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />
      
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-500/10 blur-[180px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="relative">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shadow-glow-sm group-hover:shadow-glow transition-shadow">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="font-heading font-bold text-xl text-white group-hover:text-brand-400 transition-colors">
                {BRAND.name}
              </span>
            </Link>
            <p className="mt-4 text-sm text-white/60 max-w-xs leading-relaxed">{BRAND.tagline}</p>
            
            {/* Social links */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-brand-400 hover:border-brand-500/30 hover:bg-brand-500/10 transition-all"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-brand-400 hover:border-brand-500/30 hover:bg-brand-500/10 transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Navigation</h3>
            <ul className="space-y-3">
              {links.map(l => (
                <li key={l.href}>
                  <a 
                    href={l.href} 
                    className="text-sm text-white/60 hover:text-brand-400 transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand-500/0 group-hover:bg-brand-500 transition-colors" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Contact</h3>
            <div className="space-y-3">
              <a
                href={`mailto:${BRAND.email}`}
                className="flex items-center gap-2 text-sm text-white/60 hover:text-brand-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                {BRAND.email}
              </a>
              <div className="flex items-start gap-2 text-sm text-white/60">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                {BRAND.address}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-white/40">
              © {year} {BRAND.name}. All rights reserved.
            </div>
            <ul className="flex items-center gap-6">
              {legal.map(l => (
                <li key={l.href}>
                  <Link 
                    href={l.href} 
                    className="text-sm text-white/40 hover:text-brand-400 transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}