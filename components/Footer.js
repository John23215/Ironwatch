export default function Footer() {
  return (
    <footer className="bg-gray-900 py-4 text-center text-gray-400 text-sm">
      <div className="max-w-4xl mx-auto px-4 flex justify-between items-center flex-wrap gap-4">
        <p>IronWatch Security © 2025 — Built for Discord communities</p>
        <nav className="flex gap-4">
          <a href="#" className="hover:text-neon-purple transition-colors">Docs</a>
          <a href="#" className="hover:text-neon-purple transition-colors">GitHub</a>
        </nav>
      </div>
    </footer>
  )
}
