import AnimateIn from '@/components/ui/AnimateIn'
import { cn } from '@/lib/utils'

const CONTENT = {
  eyebrow:   'Ready to simplify your finances?',
  heading:   'Finance faster, smarter',
  headingAccent: 'without the complexity',
  subtext:   'Shortcut Finance removes the friction from financial services. From seamless payments to smart financing — we help you move money and manage your business with confidence.',
  cta:       { label: 'Get Started', href: '#contact' },
  trust:     'Join thousands of businesses managing finances smarter',
}

export default function CTA() {
  return (
    <section className="py-section-lg relative overflow-hidden bg-gradient-to-b from-surface via-surface-raised to-surface">
      {/* Ambient glow orbs for depth */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none overflow-hidden"
      >
        <div className="absolute top-[-30%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-brand-400/15 blur-[160px] animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-brand-500/10 blur-[140px] animate-pulse [animation-delay:2s]" />
      </div>

      {/* Dot grid texture */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(14, 165, 233, 0.15) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, black, transparent)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <AnimateIn delay={0}>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-pill bg-brand-500/10 border border-brand-500/20 text-brand-600 text-sm font-medium mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
            {CONTENT.trust}
          </span>
        </AnimateIn>

        <AnimateIn delay={100}>
          <h2 className="font-heading font-black text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] tracking-[-0.03em] text-content-primary mb-4">
            {CONTENT.heading}
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-brand-500 via-brand-400 to-brand-600 animate-shimmer bg-[length:200%_auto]">
              {CONTENT.headingAccent}
            </span>
          </h2>
        </AnimateIn>

        <AnimateIn delay={200}>
          <p className="text-lg md:text-xl text-content-secondary max-w-2xl mx-auto mb-10 leading-relaxed font-body">
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
                className="relative z-10 inline-flex items-center gap-2 px-8 py-4 font-body font-semibold bg-brand-500 text-white rounded-pill hover:bg-brand-600 hover:shadow-glow-lg transition-all duration-300 ease-expo-out active:scale-[0.97] group"
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
              className="group inline-flex items-center gap-2 px-8 py-4 font-body font-medium border-2 border-surface-border text-content-primary rounded-pill hover:border-brand-500 hover:text-brand-500 transition-all duration-300 ease-expo-out"
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
              { icon: '⚡', text: 'Fast Setup' },
              { icon: '🔒', text: 'Secure Platform' },
              { icon: '💳', text: 'Smart Payments' },
            ].map((badge) => (
              <div
                key={badge.text}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-surface-border hover:border-brand-500/30 hover:shadow-card transition-all duration-300"
              >
                <span className="text-lg">{badge.icon}</span>
                <span className="text-sm font-medium text-content-secondary">{badge.text}</span>
              </div>
            ))}
          </div>
        </AnimateIn>
      </div>

      {/* Bottom gradient fade */}
      <div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none"
      />
    </section>
  )
}