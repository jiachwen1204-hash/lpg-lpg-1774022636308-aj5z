import AnimateIn from '@/components/ui/AnimateIn'
import { cn } from '@/lib/utils'

const CONTENT = {
  eyebrow:   'Startup Finance for Growing Teams',
  heading:   'Finance faster, smarter',
  headingAccent: 'without the complexity',
  subtext:   'Shortcut removes the friction from financial services. From seamless payments to smart financing — we help you move money and manage your business with confidence.',
  cta:       { label: 'Start Free Trial', href: '#contact' },
  trust:     'Join thousands of businesses managing finances smarter',
}

export default function CTA() {
  return (
    <section className="py-section-lg relative overflow-hidden bg-gradient-to-br from-surface via-surface-raised to-surface">
      {/* Ambient glow orbs for depth */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none overflow-hidden"
      >
        <div className="absolute top-[-30%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-brand-400/20 blur-[180px] animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-brand-500/15 blur-[160px] animate-pulse [animation-delay:2s]" />
      </div>

      {/* Noise texture for depth */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '256px 256px',
        }}
      />

      {/* Top accent line */}
      <div
        aria-hidden
        className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-brand-500 to-transparent rounded-full"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <AnimateIn delay={0}>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-pill bg-brand-500/10 border border-brand-500/20 text-brand-600 text-sm font-semibold mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
            {CONTENT.trust}
          </span>
        </AnimateIn>

        <AnimateIn delay={100}>
          <h2 className="font-heading font-black text-[clamp(2.75rem,7vw,5rem)] leading-[1.02] tracking-[-0.03em] text-content-primary mb-4">
            {CONTENT.heading}
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-brand-500 via-brand-400 to-brand-600 animate-shimmer bg-[length:200%_auto]">
              {CONTENT.headingAccent}
            </span>
          </h2>
        </AnimateIn>

        <AnimateIn delay={200}>
          <p className="text-lg md:text-xl text-content-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
            {CONTENT.subtext}
          </p>
        </AnimateIn>

        <AnimateIn delay={300}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Primary CTA with glow effect */}
            <div className="relative">
              <div className="absolute inset-0 bg-brand-500/40 blur-2xl rounded-pill scale-110 animate-pulse" />
              <a
                href={CONTENT.cta.href}
                className="relative z-10 inline-flex items-center gap-2 px-8 py-4 font-semibold bg-brand-500 text-white rounded-pill hover:bg-brand-600 hover:shadow-glow-lg transition-all duration-300 active:scale-[0.97] group"
              >
                {CONTENT.cta.label}
                <svg
                  className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>

            <a
              href="mailto:jiachwen99@gmail.com"
              className="group inline-flex items-center gap-2 px-8 py-4 font-medium border-2 border-surface-border text-content-primary rounded-pill hover:border-brand-500 hover:text-brand-500 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Us
            </a>
          </div>
        </AnimateIn>

        {/* Floating badges for social proof */}
        <AnimateIn delay={450}>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-6">
            {[
              { icon: 'bolt', text: 'Fast Setup', color: 'text-amber-500' },
              { icon: 'shield', text: 'Secure Platform', color: 'text-emerald-500' },
              { icon: 'card', text: 'Smart Payments', color: 'text-brand-500' },
            ].map((badge) => (
              <div
                key={badge.text}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-surface-border hover:border-brand-500/30 hover:shadow-card transition-all duration-300"
              >
                {badge.icon === 'bolt' && (
                  <svg className={cn('w-5 h-5', badge.color)} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )}
                {badge.icon === 'shield' && (
                  <svg className={cn('w-5 h-5', badge.color)} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )}
                {badge.icon === 'card' && (
                  <svg className={cn('w-5 h-5', badge.color)} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                )}
                <span className="text-sm font-medium text-content-secondary">{badge.text}</span>
              </div>
            ))}
          </div>
        </AnimateIn>
      </div>

      {/* Bottom gradient fade */}
      <div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-surface to-transparent pointer-events-none"
      />
    </section>
  )
}