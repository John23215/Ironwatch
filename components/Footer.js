export default function Footer() {
  return (
    <footer className="bg-cyber-gray border-t border-glass-border py-8 mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-text-secondary text-sm">
        <p>IronWatch Security © 2025 — Protecting Communities Worldwide</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="/docs" className="hover:text-neon-purple transition-colors">Docs</a>
          <a href="https://github.com/ironwatch-security" target="_blank" rel="noopener noreferrer" className="hover:text-neon-purple transition-colors">GitHub</a>
          <a href="https://discord.gg/EUUUvWfkEB" target="_blank" rel="noopener noreferrer" className="hover:text-neon-purple transition-colors">Support</a>
          <a href="/terms" className="hover:text-neon-purple transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  )
}
