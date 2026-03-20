import AnimateIn from '@/components/ui/AnimateIn'
import { CreditCard, Wallet, BarChart3 } from 'lucide-react'

interface ServiceItem {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  highlight: string
}

const services: ServiceItem[] = [
  {
    icon: CreditCard,
    title: 'Smart Payments',
    description: 'Send and receive money instantly with our intelligent payment infrastructure. No more waiting days for transfers — your money moves when you do.',
    highlight: 'Instant Transfers',
  },
  {
    icon: Wallet,
    title: 'Quick Financing',
    description: 'Access business capital in hours, not weeks. Our AI-driven approval system evaluates your business health and gets funds where they need to go.',
    highlight: 'Same-Day Approval',
  },
  {
    icon: BarChart3,
    title: 'Financial Operations',
    description: 'Streamline your entire financial workflow from invoicing to reconciliation. One dashboard to manage it all — saving you hours every single week.',
    highlight: 'One Dashboard',
  },
]

const HEADING = 'Finance Without the Complexity'
const SUBTEXT = 'We remove the friction from financial services — so you can focus on growing your business, not fighting paperwork.'

export default function Services() {
  return (
    <section id="services" className="py-section bg-surface-raised relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-500/8 blur-[180px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <AnimateIn className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-pill bg-brand-500/10 border border-brand-500/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
            <span className="text-sm font-semibold text-brand-600 tracking-wide">What We Do</span>
          </div>
          <h2 className="font-heading font-extrabold text-display-lg text-content-primary mb-4">
            {HEADING}
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-content-secondary leading-relaxed">{SUBTEXT}</p>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <AnimateIn key={svc.title} delay={i * 100}>
              <div className="group relative h-full p-8 rounded-card-lg bg-surface border border-surface-border hover:border-brand-500 transition-all duration-300 ease-expo-out hover:shadow-card-lg hover:-translate-y-1">
                <div className="absolute inset-0 rounded-card-lg bg-gradient-to-br from-brand-500/0 to-brand-500/0 group-hover:from-brand-500/5 group-hover:to-brand-500/10 transition-all duration-300" />
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-500/0 to-transparent group-hover:via-brand-500/40 transition-all duration-300" />
                
                <div className="relative">
                  <div className="w-14 h-14 rounded-card bg-brand-500/10 flex items-center justify-center mb-6 group-hover:bg-brand-500 group-hover:scale-110 transition-all duration-300">
                    <svc.icon className="w-7 h-7 text-brand-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  
                  <h3 className="font-heading font-bold text-xl text-content-primary mb-3">
                    {svc.title}
                  </h3>
                  
                  <p className="text-content-secondary leading-relaxed mb-6">
                    {svc.description}
                  </p>
                  
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-pill bg-brand-500/10 border border-brand-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                    <span className="text-sm font-semibold text-brand-600">{svc.highlight}</span>
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