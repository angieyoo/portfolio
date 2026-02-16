'use client'

import Link from 'next/link'

export default function NotificationFramework() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="border-b border-gray-200 sticky top-0 bg-white z-50">
        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
          <Link href="/" className="text-xs hover:opacity-50 transition font-mono">← Back</Link>
          <div className="text-xs opacity-30 font-mono">Platform Patterns · 2026</div>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-8">
        <section className="py-20">
          <div className="text-[10px] tracking-widest uppercase font-mono text-accent mb-6">Global Pattern · Everest Design System</div>
          <h1 className="font-display text-6xl leading-none mb-8">Notification Framework</h1>
          <p className="text-xl opacity-60 leading-relaxed max-w-xl font-display">
            From notification chaos to a coherent system for communicating with users across severity levels and contexts
          </p>
        </section>

        <section className="py-20 border-t border-gray-200">
          <div className="text-[10px] tracking-widest uppercase font-mono opacity-50 mb-6">The Problem</div>
          <h2 className="font-display text-4xl mb-8">Notification overload, no coherence</h2>
          <p className="text-lg opacity-80 leading-relaxed">
            Dayforce had notifications everywhere. Success messages. Error alerts. System updates. Warnings. Confirmations. Every team implemented their own, creating a cacophony of competing attention-grabbers. We had components—toasts, banners—but <strong>no framework</strong> for when to use what.
          </p>
        </section>

        <section className="py-20 border-t border-gray-200 bg-gray-50 -mx-8 px-8">
          <div className="text-[10px] tracking-widest uppercase font-mono opacity-50 mb-6">Solution</div>
          <h2 className="font-display text-4xl mb-8">A coherent notification framework</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="text-sm font-medium mb-3 text-accent font-mono">Toast</div>
              <div className="font-display text-2xl mb-4">Temporary feedback</div>
              <div className="text-sm opacity-80 leading-relaxed">
                Auto-dismisses after 4-6 seconds. For confirmations and low-severity updates.
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="text-sm font-medium mb-3 text-accent font-mono">Banner</div>
              <div className="font-display text-2xl mb-4">Persistent messaging</div>
              <div className="text-sm opacity-80 leading-relaxed">
                Stays visible until dismissed. For warnings, errors, and system-level updates.
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 border-t border-gray-200 bg-black text-white -mx-8 px-8">
          <div className="text-[10px] tracking-widest uppercase font-mono mb-8" style={{color: '#00a86b'}}>Impact</div>
          <h2 className="font-display text-4xl mb-16">From chaos to coherence</h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="text-5xl font-display mb-3">85%</div>
              <div className="text-sm opacity-60">Reduction in notification-related support tickets</div>
            </div>
            <div>
              <div className="text-5xl font-display mb-3">32</div>
              <div className="text-sm opacity-60">Teams using framework</div>
            </div>
            <div>
              <div className="text-5xl font-display mb-3">4</div>
              <div className="text-sm opacity-60">Clear patterns instead of ad-hoc solutions</div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <Link href="/work/wayfinding" className="group">
            <div className="text-[10px] tracking-widest uppercase font-mono opacity-40 group-hover:opacity-100 transition mb-4">Next Project</div>
            <div className="font-display text-3xl group-hover:italic transition">Wayfinding →</div>
          </Link>
        </section>
      </div>
    </main>
  )
}
