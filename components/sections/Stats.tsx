'use client'
import { useEffect, useRef, useState } from 'react'
import AnimateIn from '@/components/ui/AnimateIn'

const stats = [
  { value: 10000000, suffix: '+', label: 'Transactions Processed' },
  { value: 50000, suffix: '+', label: 'Active Users' },
  { value: 99.9, suffix: '%', label: 'Platform Uptime' },
  { value: 3, suffix: 's', label: 'Avg. Processing Time' },
]

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      observer.unobserve(el)
      const duration = target < 1000 ? 1500 : target < 100000 ? 2000 : 2500
      const start = performance.now()
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        const current = eased * target
        const displayValue = target >= 1000000 
          ? Math.floor(current / 1000000) + 'M'
          : target >= 1000 
          ? Math.floor(current / 1000) + 'K'
          : target >= 100 
          ? Math.floor(current).toString()
          : Math.floor(current * 10) / 10
        setCount(current)
        if (progress < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }, { threshold: 0.3 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  const formatDisplay = (num: number) => {
    if (target >= 10000000) return Math.floor(num / 1000000) + 'M'
    if (target >= 100000) return Math.floor(num / 1000) + 'K'
    if (target >= 100) return Math.floor(num).toString()
    if (target >= 10) return Math.floor(num).toString()
    return Math.floor(num * 10) / 10
  }

  return <span ref={ref}>{formatDisplay(count)}{suffix}</span>
}

export default function Stats() {
  return (
    <section className="relative py-section overflow-hidden bg-[#f8fafc]">
      {/* Ambient glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-brand-500/10 blur-[180px] pointer-events-none" />
      
      {/* Dot grid texture */}
      <div className="absolute inset-0 opacity-[0.4]" 
           style={{
             backgroundImage: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 1px, transparent 1px)',
             backgroundSize: '32px 32px',
           }} />
      
      {/* Border accent top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <AnimateIn className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/10 text-brand-600 text-sm font-semibold mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
            Powering Growth
          </span>
          <h2 className="font-heading font-black text-display-xl text-content-primary mb-4 tracking-tight">
            Trusted by{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-500 to-violet-500">
              Thousands
            </span>
          </h2>
          <p className="text-content-secondary text-xl max-w-xl mx-auto font-light">
            Shortcut Finance powers financial operations for individuals and businesses across the region
          </p>
        </AnimateIn>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <AnimateIn key={stat.label} delay={i * 100} className="text-center group">
              <div className="relative p-6 rounded-2xl border border-surface-overlay bg-surface-raised hover:border-brand-500/30 hover:shadow-lg hover:shadow-brand-500/10 transition-all duration-300">
                {/* Top accent line */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-transparent via-brand-500 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Number glow on hover */}
                <div className="absolute inset-0 bg-brand-500/0 group-hover:bg-brand-500/5 rounded-2xl transition-colors duration-300" />
                
                <div className="relative">
                  <div className="font-heading font-black text-[clamp(2.5rem,5vw,3.5rem)] leading-[1] mb-3 tracking-tight">
                    <span className="bg-clip-text text-transparent bg-gradient-to-br from-brand-500 to-brand-600">
                      <CountUp target={stat.value} suffix={stat.suffix} />
                    </span>
                  </div>
                  <div className="text-sm text-content-secondary font-medium">{stat.label}</div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
        
        {/* Bottom decorative element */}
        <div className="mt-16 flex justify-center">
          <div className="flex items-center gap-2 text-content-muted text-sm">
            <span className="w-8 h-px bg-gradient-to-r from-transparent to-brand-500/50" />
            <span>Growing every day</span>
            <span className="w-8 h-px bg-gradient-to-l from-transparent to-brand-500/50" />
          </div>
        </div>
      </div>
    </section>
  )
}