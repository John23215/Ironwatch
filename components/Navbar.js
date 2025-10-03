import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-cyber-gray/80 backdrop-blur-md shadow-neon-purple' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="/" className="text-neon-blue font-orbitron text-2xl font-bold tracking-wide">
          IronWatch
        </a>
        <div className="flex items-center space-x-6">
          <a href="#features" className="text-text-primary hover:text-neon-purple transition-colors">Features</a>
          <a href="#commands" className="text-text-primary hover:text-neon-purple transition-colors">Commands</a>
          <a href="/docs" className="text-text-primary hover:text-neon-purple transition-colors">Docs</a>
          <button
            aria-label="Toggle Dark Mode"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-full bg-glass-bg border border-glass-border shadow-glass hover:shadow-neon-blue transition-shadow"
          >
            {theme === 'dark' ? <Sun className="text-neon-blue" /> : <Moon className="text-neon-purple" />}
          </button>
        </div>
      </div>
    </nav>
  )
}
