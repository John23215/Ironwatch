export default function FeatureCard({ icon, title, description }) {
  return (
    <article className="glass-card p-6 text-center">
      <div className="text-5xl mb-4" style={{ textShadow: '0 0 10px #58a6ff' }}>{icon}</div>
      <h3 className="text-xl font-bold text-neon-blue mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </article>
  )
}
