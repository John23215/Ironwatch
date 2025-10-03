import Head from 'next/head'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ReactMarkdown from 'react-markdown'

const docsContent = `
# IronWatch Security Documentation

## Getting Started

Welcome to IronWatch Security! This comprehensive guide will help you get started with our powerful Discord moderation and security bot.

### Installation

1. **Invite the Bot**
   - Click the "Invite Bot" button on our homepage
   - Grant the necessary permissions
   - The bot will automatically join your server

2. **Initial Setup**
   - Use \`/setup\` to configure basic settings
   - Set up moderation channels and roles
   - Configure auto-moderation rules

### Quick Start Guide

#### Basic Moderation
- \`/ban @user reason\` - Ban a user
- \`/kick @user reason\` - Kick a user
- \`/warn @user reason\` - Warn a user
- \`/mute @user duration\` - Mute a user temporarily

#### Ticket System
- \`/create\` - Create a support ticket
- \`/close\` - Close the current ticket
- \`/add @user\` - Add user to ticket

#### Analytics
- \`/stats\` - View server statistics
- \`/warnings\` - View warning history
- \`/activity\` - Check user activity

## Advanced Features

### Auto-Moderation
Configure automatic responses to common issues:
- Spam detection
- Link filtering
- Word filtering
- Raid protection

### Global Security
- Cross-server ban synchronization
- Threat detection and alerts
- Community protection network

### Custom Automation
Create custom triggers and responses for your server needs.

## Support

Need help? Join our [support server](https://discord.gg/EUUUvWfkEB) or check out our FAQ below.

## FAQ

### General Questions

**Q: Is IronWatch free?**
A: IronWatch offers both free and premium tiers with advanced features.

**Q: How do I report a bug?**
A: Use the \`/report\` command or join our support server.

**Q: Can I customize the bot's responses?**
A: Yes, premium users can customize embeds and messages.

### Technical Questions

**Q: What permissions does the bot need?**
A: The bot requires standard moderation permissions plus embed links and manage messages.

**Q: How do I set up logging?**
A: Use \`/setlog #channel\` to set up moderation logs.

**Q: Can I use the bot on multiple servers?**
A: Yes, one bot instance can be used across multiple servers.
`

const sidebarItems = [
  { title: 'Getting Started', href: '#getting-started' },
  { title: 'Installation', href: '#installation' },
  { title: 'Quick Start Guide', href: '#quick-start-guide' },
  { title: 'Advanced Features', href: '#advanced-features' },
  { title: 'Support', href: '#support' },
  { title: 'FAQ', href: '#faq' }
]

export default function Docs() {
  const [activeSection, setActiveSection] = useState('getting-started')

  return (
    <>
      <Head>
        <title>Docs - IronWatch Security</title>
        <meta name="description" content="Complete documentation for IronWatch Security Discord bot including setup, commands, and advanced features." />
      </Head>
      <Navbar />
      <div className="min-h-screen bg-cyber-dark pt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="glass-card p-6 sticky top-24">
                <h2 className="text-xl font-bold text-text-primary mb-4">Documentation</h2>
                <nav className="space-y-2">
                  {sidebarItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className={`block py-2 px-3 rounded-lg transition-colors ${
                        activeSection === item.href.slice(1)
                          ? 'bg-neon-purple/20 text-neon-purple'
                          : 'text-text-secondary hover:text-neon-blue hover:bg-cyber-gray/50'
                      }`}
                      onClick={() => setActiveSection(item.href.slice(1))}
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-3">
              <div className="glass-card p-8">
                <div className="prose prose-invert max-w-none">
                  <ReactMarkdown
                    components={{
                      h1: ({ children }) => <h1 className="text-3xl font-bold text-text-primary mb-6 neon-text-blue">{children}</h1>,
                      h2: ({ children }) => <h2 className="text-2xl font-bold text-text-primary mb-4 mt-8 neon-text-purple">{children}</h2>,
                      h3: ({ children }) => <h3 className="text-xl font-semibold text-text-primary mb-3 mt-6">{children}</h3>,
                      p: ({ children }) => <p className="text-text-secondary mb-4 leading-relaxed">{children}</p>,
                      ul: ({ children }) => <ul className="text-text-secondary mb-4 ml-6 list-disc">{children}</ul>,
                      ol: ({ children }) => <ol className="text-text-secondary mb-4 ml-6 list-decimal">{children}</ol>,
                      li: ({ children }) => <li className="mb-2">{children}</li>,
                      code: ({ children }) => <code className="bg-cyber-gray px-2 py-1 rounded text-neon-blue font-mono">{children}</code>,
                      pre: ({ children }) => <pre className="bg-cyber-gray p-4 rounded-lg overflow-x-auto mb-4">{children}</pre>,
                      a: ({ children, href }) => <a href={href} className="text-neon-blue hover:text-neon-purple transition-colors" target="_blank" rel="noopener noreferrer">{children}</a>
                    }}
                  >
                    {docsContent}
                  </ReactMarkdown>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
