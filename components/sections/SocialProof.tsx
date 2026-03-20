import AnimateIn from '@/components/ui/AnimateIn'

// Trust signals - fintech companies and businesses
const trustSignals = [
  'TechVentures Malaysia',
  'FinGrowth Partners',
  'DigiBiz Solutions',
  'SmartPay Asia',
  'Velocity Capital',
  'NexGen Finance',
]

// Testimonials - fintech/financial services context
const testimonials = [
  {
    quote: 'Shortcut Finance transformed how we handle payments. What used to take days now happens in minutes. Our cash flow has never been healthier.',
    author: 'Michelle Tan',
    role: 'CFO, TechVentures Malaysia',
  },
  {
    quote: 'The financing approval process was incredibly smooth. We secured funding within 48 hours — something traditional banks could never match.',
    author: 'David Wong',
    role: 'Founder, SmartPay Asia',
  },
  {
    quote: 'Real-time analytics helped us identify cost-saving opportunities we never knew existed. The ROI was evident within the first quarter.',
    author: 'Sarah Chen',
    role: 'VP Operations, DigiBiz Solutions',
  },
  {
    quote: 'Finally, a financial platform that speaks our language. The onboarding was seamless and our team was up and running in hours.',
    author: 'James Rodriguez',
    role: 'CTO, Velocity Capital',
  },
]

// Stats for social proof
const stats = [
  { value: '12,000+', label: 'Growing teams' },
  { value: '48hrs', label: 'Avg. approval time' },
  { value: '99.9%', label: 'Platform uptime' },
  { value: '4.9★', label: 'Customer rating' },
]

export default function SocialProof() {
  return (
    <section className="py-section relative overflow-hidden">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-violet-50/30" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-brand-400/10 blur-[120px] animate-float pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-violet-400/10 blur-[100px] animate-float [animation-delay:2s] pointer-events-none" />
      
      {/* Subtle dot grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header with gradient text */}
        <AnimateIn className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-pill bg-brand-500/10 text-brand-600 text-xs font-bold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
            Trusted by Industry Leaders
          </span>
          <h2 className="font-heading font-extrabold text-display-xl text-content-primary">
            Join <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-500 via-violet-500 to-brand-500 bg-[length:200%_auto] animate-shimmer">12,000+ teams</span>
          </h2>
          <p className="text-content-secondary text-lg mt-4 max-w-xl mx-auto">
            Fast-growing businesses across Asia trust us to power their financial operations
          </p>
        </AnimateIn>

        {/* Marquee with gradient edges */}
        <div className="relative mb-20 overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-brand-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-brand-50 to-transparent z-10 pointer-events-none" />
          <div className="flex gap-4 animate-marquee w-max">
            {[...trustSignals, ...trustSignals].map((name, i) => (
              <div
                key={i}
                className="whitespace-nowrap px-6 py-3 rounded-pill bg-white border border-surface-border shadow-sm hover:shadow-md hover:border-brand-500/50 hover:bg-brand-500/5 text-content-secondary hover:text-brand-600 font-semibold text-sm transition-all duration-300 cursor-default"
              >
                {name}
              </div>
            ))}
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, i) => (
            <AnimateIn key={i} delay={i * 100}>
              <div className="relative text-center p-6 rounded-card-lg bg-white/80 backdrop-blur-sm border border-surface-border hover:border-brand-500/30 hover:shadow-lg hover:shadow-brand-500/10 transition-all duration-300 group">
                {/* Top accent line */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-transparent via-brand-500 to-transparent group-hover:w-24 transition-all duration-500" />
                
                <div className="font-heading font-extrabold text-display-md bg-clip-text text-transparent bg-gradient-to-br from-brand-600 to-violet-600">
                  {stat.value}
                </div>
                <div className="text-sm text-content-muted mt-1 font-medium">
                  {stat.label}
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Testimonials Grid with improved styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <AnimateIn key={i} delay={i * 150} direction="up">
              <div className="relative h-full p-8 rounded-card-lg bg-white border border-surface-border hover:border-brand-500/40 hover:shadow-xl hover:shadow-brand-500/5 transition-all duration-300 overflow-hidden group">
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-brand-500/0 group-hover:bg-brand-500/[0.02] transition-colors duration-500" />

                {/* Animated top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-500 via-violet-500 to-brand-500 bg-[length:200%_auto] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Floating badge */}
                <div className="absolute top-6 right-6 flex items-center gap-1.5">
                  {[...Array(5)].map((_, starIndex) => (
                    <svg
                      key={starIndex}
                      className="w-4 h-4 text-brand-500 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="relative text-content-secondary text-lg leading-relaxed mb-8 pr-8">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="relative flex items-center gap-4">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-500 to-violet-500 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-brand-500/30 group-hover:scale-110 transition-transform duration-300">
                      {t.author.split(' ').map((n: string) => n[0]).join('')}
                    </div>
                    {/* Online indicator */}
                    <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-green-500 border-2 border-white" />
                  </div>
                  <div>
                    <div className="font-bold text-content-primary">{t.author}</div>
                    <div className="text-sm text-content-muted">{t.role}</div>
                  </div>
                </div>

                {/* Floating quote icon */}
                <div className="absolute bottom-6 right-6 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                  <svg className="w-12 h-12 text-brand-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Bottom CTA */}
        <AnimateIn className="text-center mt-16">
          <div className="relative inline-flex items-center gap-4 px-8 py-4 rounded-pill bg-surface-raised border border-surface-border">
            <span className="text-sm font-semibold text-content-secondary">
              Ready to join the future of finance?
            </span>
            <a 
              href="#get-started" 
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-pill bg-brand-500 text-white font-bold text-sm shadow-lg shadow-brand-500/30 hover:shadow-xl hover:shadow-brand-500/40 hover:bg-brand-600 transition-all duration-300"
            >
              Get Started Free
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}