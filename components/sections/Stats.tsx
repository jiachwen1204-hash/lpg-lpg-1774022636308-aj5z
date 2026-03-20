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
    <section className="py-section bg-surface-raised">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateIn className="text-center mb-12">
          <h2 className="font-heading font-black text-display-lg text-content-primary mb-3">
            Trusted by Thousands
          </h2>
          <p className="text-content-secondary text-lg max-w-xl mx-auto">
            Shortcut Finance powers financial operations for individuals and businesses across the region
          </p>
        </AnimateIn>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <AnimateIn key={stat.label} delay={i * 100} className="text-center group">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-brand-500/20 blur-2xl rounded-full scale-75 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative font-heading font-black text-display-md text-brand-500 mb-2">
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </div>
              </div>
              <div className="text-sm text-content-secondary font-medium">{stat.label}</div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}