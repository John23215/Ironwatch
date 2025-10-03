import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-gray to-cyber-dark opacity-90"></div>
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h1 className="neon-text-blue mb-6">
            IronWatch Security
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary mb-12 max-w-3xl mx-auto">
            The Ultimate Discord Security & Moderation Bot
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="https://discord.com/oauth2/authorize?client_id=1423379578784714883&permissions=8&integration_type=0&scope=bot+applications.commands" className="btn-primary">
              🚀 Invite Bot
            </a>
            <a href="https://discord.gg/EUUUvWfkEB" className="btn-secondary">
              💬 Support Server
            </a>
            <a href="/docs" className="btn-secondary">
              📖 Docs
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 animate-float"
        >
          <div className="w-64 h-64 mx-auto bg-gradient-to-br from-neon-blue to-neon-purple rounded-full opacity-20 blur-xl"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 bg-gradient-to-br from-neon-blue to-neon-purple rounded-full opacity-40 blur-lg"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
