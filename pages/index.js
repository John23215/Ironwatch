import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import CommandExplorer from '../components/CommandExplorer'
import Showcase from '../components/Showcase'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>IronWatch Security - The Ultimate Discord Security & Moderation Bot</title>
        <meta name="description" content="IronWatch Security is a premium Discord bot offering advanced moderation, tickets, invoices, giveaways, global security, analytics, utilities, and automation features." />
        <meta name="keywords" content="Discord bot, security, moderation, tickets, invoices, giveaways, analytics" />
        <meta property="og:title" content="IronWatch Security - Discord Security Bot" />
        <meta property="og:description" content="The ultimate Discord security and moderation bot with premium features." />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://ironwatch-security.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IronWatch Security - Discord Security Bot" />
        <meta name="twitter:description" content="The ultimate Discord security and moderation bot with premium features." />
        <meta name="twitter:image" content="/og-image.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CommandExplorer />
        <Showcase />
      </main>
      <Footer />
    </>
  )
}
