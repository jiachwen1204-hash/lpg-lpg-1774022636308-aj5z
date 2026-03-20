import AnimateIn from '@/components/ui/AnimateIn'
import { CheckCircle, Lightbulb } from 'lucide-react'

const CONTENT = {
  label: 'About Shortcut Finance',
  heading: 'Finance faster, smarter — without the complexity',
  paragraphs: [
    'Shortcut Finance is a fintech company that simplifies financial services through smart technology and seamless digital solutions. We help individuals and businesses manage payments, access financing, and handle financial operations faster and more efficiently.',
    'Our mission is to remove complexity from finance — creating a smoother path to financial success for everyone we serve.',
  ],
  values: [
    'Smart technology that simplifies, not complicates',
    'Seamless digital experiences from start to finish',
    'Speed that delivers results when you need them most',
    'Transparency at every step of the journey',
  ],
  stats: [
    { value: '24/7', label: 'Digital Access' },
    { value: '100%', label: 'Online Processing' },
    { value: '< 5min', label: 'Average Response' },
  ],
  cta: { label: 'Get Started', href: '#contact' },
}

export default function About() {
  return (
    <section id="about" className="relative py-section overflow-hidden">
      {/* Background with subtle depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface via-white to-surface" />
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CCfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
        backgroundSize: '256px 256px',
      }} />

      {/* Ambient glow orbs */}
      <div className="absolute top-20 right-[-200px] w-[500px] h-[500px] rounded-full bg-brand-500/8 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-20 left-[-150px] w-[400px] h-[400px] rounded-full bg-violet-500/6 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual Side */}
          <AnimateIn direction="left">
            <div className="relative">
              {/* Main card */}
              <div className="relative aspect-square max-w-lg mx-auto lg:mx-0">
                <div className="absolute inset-0 rounded-card-lg bg-gradient-to-br from-brand-500/20 via-brand-400/10 to-violet-500/20 blur-xl" />
                <div className="absolute inset-0 rounded-card-lg border border-brand-500/20 bg-white/80 backdrop-blur-sm shadow-card-lg" />

                {/* Inner content */}
                <div className="absolute inset-4 rounded-card-lg bg-white border border-surface-border flex flex-col items-center justify-center p-8">
                  {/* Logo representation */}
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center mb-6 shadow-glow">
                    <span className="font-heading font-black text-3xl text-white">SF</span>
                  </div>

                  {/* Stats grid */}
                  <div className="grid grid-cols-3 gap-4 w-full mt-4">
                    {CONTENT.stats.map((stat, i) => (
                      <div 
                        key={stat.label} 
                        className="group relative text-center p-3 rounded-xl bg-surface hover:bg-surface-overlay border border-transparent hover:border-brand-500/20 transition-all duration-300"
                      >
                        <div className="absolute inset-0 bg-brand-500/0 group-hover:bg-brand-500/5 rounded-xl blur-md transition-all duration-300 opacity-0 group-hover:opacity-100" />
                        <div className="relative font-heading font-black text-xl md:text-2xl text-brand-500">
                          {stat.value}
                        </div>
                        <div className="relative text-xs text-content-muted mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tagline */}
                  <p className="mt-6 text-sm text-content-secondary text-center font-medium">
                    Finance faster, smarter
                  </p>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 lg:right-auto lg:-left-4 animate-float">
                <div className="relative">
                  <div className="absolute inset-0 bg-brand-500/30 blur-xl rounded-2xl" />
                  <div className="relative bg-white rounded-2xl shadow-card-lg border border-surface-border p-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-500/10 flex items-center justify-center">
                      <Lightbulb className="w-5 h-5 text-brand-500" />
                    </div>
                    <div>
                      <div className="font-heading font-bold text-sm text-content-primary">Smart Solutions</div>
                      <div className="text-xs text-content-muted">Powered by technology</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimateIn>

          {/* Content Side */}
          <AnimateIn direction="right" delay={100}>
            <p className="text-sm font-semibold tracking-widest uppercase text-brand-500 mb-3">
              {CONTENT.label}
            </p>
            <h2 className="font-heading font-black text-display-lg text-content-primary mb-6 leading-tight">
              Finance faster, smarter{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-500 via-violet-500 to-brand-500 bg-[length:200%_auto] animate-shimmer">
                — without the complexity
              </span>
            </h2>

            {CONTENT.paragraphs.map((p, i) => (
              <p key={i} className="text-lg text-content-secondary leading-relaxed mb-4">
                {p}
              </p>
            ))}

            <ul className="mt-8 space-y-4 mb-10">
              {CONTENT.values.map((v, i) => (
                <li key={v} className="flex items-start gap-4 text-content-primary group">
                  <div className="relative">
                    <div className="absolute inset-0 bg-brand-500/20 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    <CheckCircle className="w-6 h-6 text-brand-500 shrink-0 mt-0.5 relative transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <span className="text-base font-medium">{v}</span>
                </li>
              ))}
            </ul>

            {/* CTA with glow effect */}
            <div className="relative inline-flex">
              <div className="absolute inset-0 bg-brand-500/40 blur-2xl rounded-full scale-110 opacity-60" />
              <a
                href={CONTENT.cta.href}
                className="relative inline-flex px-8 py-4 font-body font-bold text-lg bg-brand-500 text-white rounded-full hover:bg-brand-600 hover:shadow-glow transition-all ease-expo-out"
              >
                {CONTENT.cta.label}
                <span className="ml-2">→</span>
              </a>
            </div>
          </AnimateIn>
        </div>

        {/* Bottom info strip */}
        <AnimateIn direction="up" delay={200}>
          <div className="mt-20 pt-10 border-t border-surface-border">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-brand-500 mb-2">Location</div>
                <div className="text-content-primary font-medium">B5-1-3, Forest Green Condominium<br />Bandar Sungai Long</div>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-brand-500 mb-2">Email</div>
                <div className="text-content-primary font-medium">jiachwen99@gmail.com</div>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-brand-500 mb-2">Focus</div>
                <div className="text-content-primary font-medium">Payments • Financing<br />Financial Operations</div>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}