import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const showcases = [
  {
    title: 'Ticket System Demo',
    description: 'Professional support ticket system with automated responses',
    mockup: (
      <div className="bg-cyber-gray rounded-lg p-4 max-w-md mx-auto">
        <div className="bg-neon-blue/20 border border-neon-blue/30 rounded-lg p-3 mb-3">
          <div className="flex items-center mb-2">
            <div className="w-8 h-8 bg-neon-blue rounded-full mr-3"></div>
            <span className="text-neon-blue font-semibold">IronWatch</span>
          </div>
          <p className="text-text-primary">🎫 Support ticket created! Check your DMs for details.</p>
        </div>
        <div className="bg-cyber-dark/50 rounded-lg p-3">
          <div className="flex items-center mb-2">
            <div className="w-8 h-8 bg-purple-500 rounded-full mr-3"></div>
            <span className="text-text-primary font-semibold">User</span>
          </div>
          <p className="text-text-secondary">Thanks! The ticket system is amazing.</p>
        </div>
      </div>
    )
  },
  {
    title: 'Invoice Management',
    description: 'Professional invoicing with payment tracking and notifications',
    mockup: (
      <div className="bg-cyber-gray rounded-lg p-4 max-w-md mx-auto">
        <div className="bg-neon-purple/20 border border-neon-purple/30 rounded-lg p-3 mb-3">
          <div className="flex items-center mb-2">
            <div className="w-8 h-8 bg-neon-purple rounded-full mr-3"></div>
            <span className="text-neon-purple font-semibold">IronWatch</span>
          </div>
          <p className="text-text-primary">💰 Invoice #1234 created for $49.99</p>
          <div className="mt-2 bg-cyber-dark/50 rounded p-2">
            <p className="text-text-secondary text-sm">Status: Pending Payment</p>
            <p className="text-text-secondary text-sm">Due: 2025-01-15</p>
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'Giveaway System',
    description: 'Advanced giveaways with role requirements and winner selection',
    mockup: (
      <div className="bg-cyber-gray rounded-lg p-4 max-w-md mx-auto">
        <div className="bg-gradient-to-r from-neon-blue to-neon-purple p-0.5 rounded-lg mb-3">
          <div className="bg-cyber-gray rounded-lg p-3">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full mr-3"></div>
              <span className="text-neon-blue font-semibold">IronWatch</span>
            </div>
            <p className="text-text-primary">🎉 GIVEAWAY TIME!</p>
            <p className="text-text-secondary">Prize: Discord Nitro</p>
            <p className="text-text-secondary">Ends in: 2h 30m</p>
            <p className="text-text-secondary">React with 🎉 to enter!</p>
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'Movement Logs',
    description: 'Real-time security monitoring and activity tracking',
    mockup: (
      <div className="bg-cyber-gray rounded-lg p-4 max-w-md mx-auto">
        <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-3 mb-3">
          <div className="flex items-center mb-2">
            <div className="w-8 h-8 bg-red-500 rounded-full mr-3"></div>
            <span className="text-red-400 font-semibold">Security Alert</span>
          </div>
          <p className="text-text-primary">🚨 Suspicious activity detected</p>
          <div className="mt-2 bg-cyber-dark/50 rounded p-2">
            <p className="text-text-secondary text-sm">User: @hacker123</p>
            <p className="text-text-secondary text-sm">Action: Attempted raid</p>
            <p className="text-text-secondary text-sm">Time: 14:23 UTC</p>
          </div>
        </div>
      </div>
    )
  }
]

export default function Showcase() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section ref={ref} className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="neon-text-purple mb-6">Live Demos</h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            See IronWatch in action with real Discord-style mockups and examples.
          </p>
        </motion.div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="max-w-4xl mx-auto"
        >
          {showcases.map((showcase, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="glass-card p-8 text-center"
              >
                <h3 className="text-2xl font-bold text-text-primary mb-4">{showcase.title}</h3>
                <p className="text-text-secondary mb-8 max-w-2xl mx-auto">{showcase.description}</p>
                <div className="flex justify-center">
                  {showcase.mockup}
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
