import AnimateIn from '@/components/ui/AnimateIn'

const CONTENT = {
  badge:      'Trusted by 10,000+ businesses',
  headline:   'Finance that moves at',
  highlight:  'your speed',
  subline:    'Shortcut Finance simplifies financial services through smart technology and seamless digital solutions. We help you manage payments, access financing, and handle financial operations faster and more efficiently.',
  cta:        { label: 'Get Started', href: '#contact' },
  secondary:  { label: 'See Features', href: '#features' },
  stats: [
    { value: '10K+', label: 'Active Users'     },
    { value: '99.9%', label: 'Uptime Guaranteed' },
    { value: '<1s',  label: 'Transaction Speed' },
  ],
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-surface pt-nav"
    >
      {/* Ambient glow orbs */}
      <div
        aria-hidden
        className="absolute top-[-20%] left-[-10%] w-[700px] h-[700px] rounded-full bg-brand-500/20 blur-[180px] pointer-events-none animate-float"
      />
      <div
        aria-hidden
        className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-brand-400/15 blur-[150px] pointer-events-none animate-float"
        style={{ animationDelay: '2s' }}
      />

      {/* Dot grid texture */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, #0f172a 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <AnimateIn delay={0}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-pill border border-surface-border bg-surface-raised text-sm text-content-muted mb-8">
                <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
                {CONTENT.badge}
              </div>
            </AnimateIn>

            {/* Headline with gradient highlight */}
            <AnimateIn delay={80}>
              <h1 className="font-heading font-black text-display-xl md:text-display-2xl lg:text-display-hero text-content-primary mb-6 leading-[0.92] tracking-[-0.04em]">
                {CONTENT.headline}{' '}
                <span className="bg-gradient-to-r from-brand-500 via-brand-400 to-brand-700 bg-clip-text text-transparent animate-shimmer">
                  {CONTENT.highlight}
                </span>
              </h1>
            </AnimateIn>

            {/* Subline */}
            <AnimateIn delay={160}>
              <p className="max-w-xl mx-auto lg:mx-0 text-lg md:text-xl text-content-secondary leading-relaxed mb-10">
                {CONTENT.subline}
              </p>
            </AnimateIn>

            {/* CTAs */}
            <AnimateIn delay={240}>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-16">
                <div className="relative">
                  <div className="absolute inset-0 bg-brand-500/40 blur-xl rounded-card-lg scale-110" />
                  <a
                    href={CONTENT.cta.href}
                    className="relative inline-flex items-center gap-2 px-8 py-4 font-body font-semibold bg-brand-500 text-white rounded-card hover:bg-brand-700 hover:shadow-glow transition-all ease-expo-out active:scale-[0.97]"
                  >
                    {CONTENT.cta.label}
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
                <a
                  href={CONTENT.secondary.href}
                  className="px-8 py-4 font-body font-semibold border-2 border-surface-border text-content-primary rounded-card hover:border-brand-500 hover:text-brand-500 hover:bg-brand-500/5 transition-all ease-expo-out"
                >
                  {CONTENT.secondary.label}
                </a>
              </div>
            </AnimateIn>

            {/* Stats */}
            <AnimateIn delay={320}>
              <div className="flex flex-wrap justify-center lg:justify-start gap-8 lg:gap-12">
                {CONTENT.stats.map((stat) => (
                  <div key={stat.label} className="text-center lg:text-left">
                    <div className="font-heading font-black text-4xl md:text-5xl text-brand-500 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-content-muted font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>

          {/* Right: Floating UI Mockup */}
          <AnimateIn delay={200} direction="left" className="hidden lg:block">
            <div className="relative">
              {/* Main Dashboard Card */}
              <div className="relative rounded-card-lg border border-surface-border bg-surface-raised p-6 shadow-card-lg">
                {/* Card Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-xs text-content-muted mb-1">Total Balance</div>
                    <div className="font-heading font-black text-3xl text-content-primary">$124,592.80</div>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-pill bg-green-500/10">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs font-semibold text-green-600">Active</span>
                  </div>
                </div>

                {/* Fake Chart */}
                <div className="flex items-end gap-1.5 h-28 mb-6">
                  {[35, 55, 45, 70, 60, 85, 75, 90, 80, 95, 88, 100].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm transition-all duration-500"
                      style={{
                        height: `${h}%`,
                        background: i === 11
                          ? 'linear-gradient(to top, #0EA5E9, #38bdf8)'
                          : 'linear-gradient(to top, #0EA5E9/30, #0EA5E9/10)',
                      }}
                    />
                  ))}
                </div>

                {/* Metrics Row */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="rounded-card bg-surface border border-surface-border p-3">
                    <div className="text-xs text-content-muted mb-1">Sent</div>
                    <div className="font-heading font-bold text-content-primary">$12,450</div>
                    <div className="text-xs text-green-500 mt-1">+24%</div>
                  </div>
                  <div className="rounded-card bg-surface border border-surface-border p-3">
                    <div className="text-xs text-content-muted mb-1">Received</div>
                    <div className="font-heading font-bold text-content-primary">$28,900</div>
                    <div className="text-xs text-green-500 mt-1">+18%</div>
                  </div>
                  <div className="rounded-card bg-surface border border-surface-border p-3">
                    <div className="text-xs text-content-muted mb-1">Pending</div>
                    <div className="font-heading font-bold text-content-primary">$3,240</div>
                    <div className="text-xs text-brand-500 mt-1">Processing</div>
                  </div>
                </div>
              </div>

              {/* Floating Transaction Card */}
              <div className="absolute -top-6 -right-6 rounded-card bg-white border border-surface-border p-4 shadow-card animate-float">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-brand-500/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-content-primary">Payment Sent</div>
                    <div className="text-xs text-content-muted">Just now</div>
                  </div>
                </div>
                <div className="font-heading font-black text-xl text-content-primary">-$2,500.00</div>
              </div>

              {/* Floating Success Badge */}
              <div className="absolute -bottom-4 -left-6 rounded-card bg-white border border-surface-border p-3 shadow-card animate-float" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-content-primary">Approved!</div>
                    <div className="text-xs text-content-muted">Financing</div>
                  </div>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}