export default function Hero() {
  return (
    <header className="flex items-center justify-center h-screen text-center relative">
      <div className="glass-card p-8 max-w-2xl">
        <h1 className="text-6xl font-black text-neon-blue mb-4" style={{ textShadow: '0 0 10px #58a6ff' }}>
          IronWatch Security
        </h1>
        <p className="text-xl mb-8">Advanced Discord Moderation & Security</p>
        <div className="flex justify-center gap-6 flex-wrap">
          <a href="https://discord.com/oauth2/authorize?client_id=1423379578784714883&permissions=8&integration_type=0&scope=bot+applications.commands" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            🚀 Invite Bot
          </a>
          <a href="https://discord.gg/EUUUvWfkEB" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
            💬 Join Support
          </a>
        </div>
      </div>
    </header>
  )
}
