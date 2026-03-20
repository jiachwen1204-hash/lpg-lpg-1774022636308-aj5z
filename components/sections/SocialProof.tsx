import AnimateIn from '@/components/ui/AnimateIn'
import { cn } from '@/lib/utils'

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
]

export default function SocialProof() {
  return (
    <section className="py-section bg-white overflow-hidden relative">
      {/* Subtle gradient accent at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <AnimateIn className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-500/10 text-brand-600 text-xs font-semibold uppercase tracking-wider mb-4">
            Trusted by Businesses
          </span>
          <h2 className="font-heading font-extrabold text-display-xl text-content-primary">
            Loved by <span className="text-brand-500">growing teams</span>
          </h2>
        </AnimateIn>

        {/* Marquee */}
        <div className="relative mb-20 overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          <div className="flex gap-6 animate-marquee w-max">
            {[...trustSignals, ...trustSignals].map((name, i) => (
              <div
                key={i}
                className="whitespace-nowrap px-5 py-2.5 rounded-card border border-surface-border bg-surface text-content-muted font-medium text-sm hover:border-brand-500/50 hover:text-brand-500 transition-colors duration-300"
              >
                {name}
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <AnimateIn key={i} delay={i * 120}>
              <div className="relative h-full p-8 rounded-card-lg border border-surface-border bg-surface-raised group hover:border-brand-500/40 transition-all duration-300 overflow-hidden">
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-brand-500/0 group-hover:bg-brand-500/5 transition-colors duration-500" />

                {/* Top accent line */}
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-brand-500/0 to-transparent group-hover:via-brand-500/60 transition-all duration-500" />

                {/* Star rating */}
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, starIndex) => (
                    <svg
                      key={starIndex}
                      className="w-5 h-5 text-amber-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="relative text-content-secondary text-lg leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="relative flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center text-white font-bold text-sm shadow-md">
                    {t.author.split(' ').map((n: string) => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-content-primary">{t.author}</div>
                    <div className="text-sm text-content-muted">{t.role}</div>
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}