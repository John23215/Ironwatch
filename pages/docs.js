import Footer from '../components/Footer'

export default function Docs() {
  return (
    <div className="min-h-screen">
      <header className="glass-card p-8 m-4 rounded-2xl">
        <h1 className="text-4xl font-bold text-neon-blue mb-4">Documentation</h1>
        <p className="text-lg text-gray-300">Coming soon...</p>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <section className="glass-card p-6 mb-8">
          <h2 className="text-2xl font-bold text-neon-purple mb-4">Getting Started</h2>
          <p className="text-gray-300">Documentation for IronWatch Security will be available here.</p>
        </section>
      </main>

      <Footer />
    </div>
  )
}
