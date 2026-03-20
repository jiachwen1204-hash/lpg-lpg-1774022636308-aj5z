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

function AnimateIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <div 
      className={`animate-fade-up ${className}`}
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'both' }}
    >
      {children}
    </div>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative bg-[#0f172a] overflow-hidden">
      {/* Noise texture for depth */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '256px 256px',
        }}
      />
      
      {/* Top gradient accent */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-500/60 to-transparent" />
      
      {/* Ambient glow - bottom left */}
      <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] rounded-full bg-brand-500/15 blur-[150px] pointer-events-none" />
      
      {/* Secondary glow - top right */}
      <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-violet-600/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <AnimateIn delay={0}>
            <div className="relative">
              <Link href="/" className="flex items-center gap-3 group">
                <div className="relative">
                  <div className="absolute inset-0 bg-brand-400/40 blur-xl rounded-xl scale-110 opacity-60 group-hover:opacity-80 transition-opacity" />
                  <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center shadow-glow group-hover:shadow-glow transition-all duration-300">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                </div>
                <span className="font-heading font-extrabold text-xl text-white group-hover:text-brand-400 transition-colors duration-300">
                  {BRAND.name}
                </span>
              </Link>
              <p className="mt-4 text-base text-white/60 max-w-xs leading-relaxed font-light">{BRAND.tagline}</p>
              
              {/* Social links */}
              <div className="flex items-center gap-3 mt-6">
                <a
                  href="#"
                  className="group relative w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-brand-500/50 hover:bg-brand-500/20 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-brand-500/0 group-hover:bg-brand-500/20 blur-xl rounded-xl transition-all duration-300" />
                  <Twitter className="w-4 h-4 relative z-10" />
                </a>
                <a
                  href="#"
                  className="group relative w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-brand-500/50 hover:bg-brand-500/20 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-brand-500/0 group-hover:bg-brand-500/20 blur-xl rounded-xl transition-all duration-300" />
                  <Linkedin className="w-4 h-4 relative z-10" />
                </a>
              </div>
            </div>
          </AnimateIn>

          {/* Navigation */}
          <AnimateIn delay={100}>
            <div>
              <h3 className="font-heading font-bold text-lg text-white mb-5 relative inline-block">
                Navigation
                <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-brand-500 to-transparent rounded-full" />
              </h3>
              <ul className="space-y-3">
                {links.map(l => (
                  <li key={l.href}>
                    <a 
                      href={l.href} 
                      className="group flex items-center gap-2 text-base text-white/60 hover:text-brand-400 transition-all duration-300"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-500/0 group-hover:bg-brand-500 group-hover:shadow-[0_0_8px_var(--tw-shadow-color)] transition-all duration-300" />
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateIn>

          {/* Contact */}
          <AnimateIn delay={200}>
            <div>
              <h3 className="font-heading font-bold text-lg text-white mb-5 relative inline-block">
                Contact
                <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-brand-500 to-transparent rounded-full" />
              </h3>
              <div className="space-y-3">
                <a
                  href={`mailto:${BRAND.email}`}
                  className="group flex items-center gap-2 text-base text-white/60 hover:text-brand-400 transition-all duration-300"
                >
                  <Mail className="w-4 h-4 group-hover:text-brand-400 transition-colors" />
                  {BRAND.email}
                </a>
                <div className="flex items-start gap-2 text-base text-white/60">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-white/40" />
                  {BRAND.address}
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>

        {/* Bottom section */}
        <AnimateIn delay={300}>
          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-sm text-white/40 font-light">
                © {year} {BRAND.name}. All rights reserved.
              </div>
              <ul className="flex items-center gap-6">
                {legal.map(l => (
                  <li key={l.href}>
                    <Link 
                      href={l.href} 
                      className="text-sm text-white/40 hover:text-brand-400 transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-brand-500 after:transition-all after:duration-300 hover:after:w-full"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimateIn>
      </div>
    </footer>
  )
}