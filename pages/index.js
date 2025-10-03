import Hero from '../components/Hero'
import FeatureCard from '../components/FeatureCard'
import Footer from '../components/Footer'

export default function Home() {
  const features = [
    { icon: '🎟', title: 'Tickets', description: 'Smart customizable support tickets' },
    { icon: '🛡', title: 'Movement Logs', description: 'Track roles, bans, kicks, approvals with timestamps' },
    { icon: '🎉', title: 'Giveaways', description: 'Advanced giveaway system with role rewards and timers' },
    { icon: '🌍', title: 'Global Commands', description: 'Owner-only global bans, silences, and advanced moderation' },
  ]

  const commands = [
    { icon: '🔨', name: '/ban', desc: 'Ban a user from the server' },
    { icon: '👢', name: '/kick', desc: 'Kick a user from the server' },
    { icon: '🤐', name: '/silence', desc: 'Mute a user temporarily' },
    { icon: '🎫', name: '/ticket', desc: 'Create or manage support tickets' },
    { icon: '🎁', name: '/giveaway', desc: 'Start or manage giveaways' },
    { icon: '🔑', name: '/role', desc: 'Assign or remove roles' },
  ]

  return (
    <div className="min-h-screen">
      <Hero />

      <main className="max-w-6xl mx-auto px-4 py-16">
        <section className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-8 text-neon-purple" style={{ textShadow: '0 0 10px #8a3ffc' }}>Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </section>

        <section className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-8 text-neon-purple" style={{ textShadow: '0 0 10px #8a3ffc' }}>Commands</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {commands.map((cmd, index) => (
              <div key={index} className="glass-card p-4 flex items-center gap-4">
                <div className="text-3xl" style={{ textShadow: '0 0 10px #58a6ff' }}>{cmd.icon}</div>
                <div className="text-left">
                  <h4 className="text-lg font-bold text-neon-blue">{cmd.name}</h4>
                  <p className="text-sm text-gray-300">{cmd.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
