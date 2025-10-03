import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Shield, Ticket, Receipt, Gift, Globe, BarChart3, Wrench, Zap } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Moderation',
    description: 'Advanced moderation tools with auto-moderation, custom rules, and instant responses.'
  },
  {
    icon: Ticket,
    title: 'Tickets',
    description: 'Smart support ticket system with customizable categories and automated responses.'
  },
  {
    icon: Receipt,
    title: 'Invoices',
    description: 'Professional invoicing system for payments, subscriptions, and billing management.'
  },
  {
    icon: Gift,
    title: 'Giveaways',
    description: 'Advanced giveaway system with role requirements, timers, and winner selection.'
  },
  {
    icon: Globe,
    title: 'Global Security',
    description: 'Cross-server security with global bans, threat detection, and community protection.'
  },
  {
    icon: BarChart3,
    title: 'Analytics',
    description: 'Comprehensive analytics and insights for server activity, user engagement, and moderation stats.'
  },
  {
    icon: Wrench,
    title: 'Utilities',
    description: 'Essential utility commands for server management, user info, and administrative tasks.'
  },
  {
    icon: Zap,
    title: 'Automation',
    description: 'Powerful automation features with custom triggers, responses, and scheduled tasks.'
  }
]

export default function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="features" ref={ref} className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="neon-text-purple mb-6">Powerful Features</h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Everything you need to manage and secure your Discord community with professional-grade tools.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="glass-card p-6 text-center"
            >
              <feature.icon className="w-12 h-12 text-neon-blue mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-text-primary">{feature.title}</h3>
              <p className="text-text-secondary">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
