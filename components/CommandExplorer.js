import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Shield, Ticket, Receipt, Gift, Globe, BarChart3, Wrench, Zap } from 'lucide-react'

const commands = [
  {
    category: 'Moderation',
    icon: Shield,
    commands: [
      { name: '/ban', description: 'Ban a user from the server' },
      { name: '/kick', description: 'Kick a user from the server' },
      { name: '/warn', description: 'Warn a user for rule violations' },
      { name: '/mute', description: 'Mute a user temporarily' },
      { name: '/purge', description: 'Delete multiple messages' },
      { name: '/lockdown', description: 'Lock down a channel' }
    ]
  },
  {
    category: 'Tickets',
    icon: Ticket,
    commands: [
      { name: '/create', description: 'Create a support ticket' },
      { name: '/mytickets', description: 'View your active tickets' },
      { name: '/close', description: 'Close a ticket' },
      { name: '/add', description: 'Add user to ticket' },
      { name: '/remove', description: 'Remove user from ticket' }
    ]
  },
  {
    category: 'Invoices',
    icon: Receipt,
    commands: [
      { name: '/invoice', description: 'Create a new invoice' },
      { name: '/pay', description: 'Mark invoice as paid' },
      { name: '/view', description: 'View invoice details' },
      { name: '/list', description: 'List all invoices' }
    ]
  },
  {
    category: 'Giveaways',
    icon: Gift,
    commands: [
      { name: '/create', description: 'Start a new giveaway' },
      { name: '/end', description: 'End a giveaway early' },
      { name: '/reroll', description: 'Reroll giveaway winner' },
      { name: '/list', description: 'List active giveaways' }
    ]
  },
  {
    category: 'Global Security',
    icon: Globe,
    commands: [
      { name: '/globalban', description: 'Ban user globally' },
      { name: '/unglobalban', description: 'Unban user globally' },
      { name: '/check', description: 'Check user security status' },
      { name: '/report', description: 'Report suspicious activity' }
    ]
  },
  {
    category: 'Analytics',
    icon: BarChart3,
    commands: [
      { name: '/stats', description: 'View server statistics' },
      { name: '/warnings', description: 'View warning history' },
      { name: '/activity', description: 'View user activity' },
      { name: '/reports', description: 'Generate reports' }
    ]
  },
  {
    category: 'Utilities',
    icon: Wrench,
    commands: [
      { name: '/userinfo', description: 'Get user information' },
      { name: '/serverinfo', description: 'Get server information' },
      { name: '/embed', description: 'Create custom embed' },
      { name: '/timestamp', description: 'Generate timestamp' },
      { name: '/viewrole', description: 'View role information' },
      { name: '/viewusers', description: 'List server users' }
    ]
  },
  {
    category: 'Automation',
    icon: Zap,
    commands: [
      { name: '/auto', description: 'Set up auto-responses' },
      { name: '/schedule', description: 'Schedule messages' },
      { name: '/trigger', description: 'Create custom triggers' },
      { name: '/welcome', description: 'Set welcome messages' }
    ]
  }
]

export default function CommandExplorer() {
  const [selectedCategory, setSelectedCategory] = useState(commands[0])
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="commands" ref={ref} className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="neon-text-purple mb-6">Command Explorer</h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Discover all the powerful commands available in IronWatch Security.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-12">
          {commands.map((category) => (
            <motion.button
              key={category.category}
              onClick={() => setSelectedCategory(category)}
              className={`glass-card p-4 text-center transition-all ${
                selectedCategory.category === category.category
                  ? 'shadow-neon-purple border-neon-purple'
                  : 'hover:shadow-neon-blue'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <category.icon className="w-8 h-8 text-neon-blue mx-auto mb-2" />
              <span className="text-sm font-medium text-text-primary">{category.category}</span>
            </motion.button>
          ))}
        </div>

        <motion.div
          key={selectedCategory.category}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="glass-card p-8"
        >
          <div className="flex items-center mb-6">
            <selectedCategory.icon className="w-12 h-12 text-neon-purple mr-4" />
            <h3 className="text-2xl font-bold text-text-primary">{selectedCategory.category} Commands</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {selectedCategory.commands.map((cmd, index) => (
              <motion.div
                key={cmd.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-cyber-gray/50 rounded-lg p-4 border border-glass-border"
              >
                <code className="text-neon-blue font-mono text-lg">{cmd.name}</code>
                <p className="text-text-secondary mt-2">{cmd.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
