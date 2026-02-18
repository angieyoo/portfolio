'use client'

import Link from 'next/link'
import { motion } from "framer-motion"
import { useState } from 'react'

function ZoomableImage({ src, alt }: { src: string; alt: string }) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div className="w-full border border-gray-200 rounded-lg overflow-hidden cursor-zoom-in bg-white" onClick={() => setOpen(true)}>
        <img src={src} alt={alt} style={{ width: '100%', height: 'auto', display: 'block' }} />
        <div className="px-4 py-2 border-t border-gray-100">
          <span className="text-xs font-mono opacity-30 uppercase tracking-widest">Click to enlarge</span>
        </div>
      </div>
      {open && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6 cursor-zoom-out" onClick={() => setOpen(false)}>
          <img src={src} alt={alt} style={{ maxWidth: '95vw', maxHeight: '95vh', width: 'auto', height: 'auto' }} className="rounded-lg" />
        </div>
      )}
    </>
  )
}



export default function NotificationFramework() {
  return (
    <main className="min-h-screen bg-white">
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 px-8 py-6 bg-white/80 backdrop-blur-sm border-b border-text/5"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 hover:opacity-70 transition-opacity">
            <span className="text-sm font-body tracking-wider text-text">← BACK</span>
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-sm font-body tracking-wider text-text">Notification Framework</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm font-body tracking-wider text-text">Platform Patterns</span>
          </div>
        </div>
      </motion.nav>

      <div className="max-w-5xl mx-auto px-8">

        {/* Hero */}
        <section className="pt-32 pb-12">
          <div className="text-[10px] tracking-widest uppercase font-mono text-accent mb-6">Platform Patterns</div>
          <h1 className="font-display text-6xl leading-none mb-8">Notification Framework</h1>
          <p className="text-xl opacity-60 leading-relaxed max-w-xl font-display">
            From notification chaos to a coherent system for communicating with users across severity levels and contexts
          </p>
        </section>
        {/* Hero image */}
        <ZoomableImage
          src="/images/notification.svg"
          alt="Notification Framework — Decision Tree"
        />


        {/* Hero image */}

        {/* Problem */}
        <section className="py-20 border-t border-gray-200">
          <div className="text-[10px] tracking-widest uppercase font-mono opacity-50 mb-6">The Problem</div>
          <h2 className="font-display text-4xl mb-8">Notification overload, no coherence</h2>
          <p className="text-lg opacity-80 leading-relaxed mb-6">
            Dayforce had notifications everywhere. Success messages. Error alerts. System updates. Warnings. Confirmations. Every team implemented their own, creating a cacophony of competing attention-grabbers. We had components—toasts, banners—but <strong>no framework</strong> for when to use what.
          </p>
          <p className="text-lg opacity-80 leading-relaxed">
            The result: users were trained to ignore notifications entirely. Critical errors competed with low-priority confirmations. Support tickets flooded in about "missing" alerts that were actually dismissed because they looked the same as everything else.
          </p>
        </section>

        {/* Problem image */}

        {/* Solution */}
        <section className="py-20 border-t border-gray-200 bg-gray-50 -mx-8 px-8">
          <div className="text-[10px] tracking-widest uppercase font-mono opacity-50 mb-6">Solution</div>
          <h2 className="font-display text-4xl mb-8">A coherent notification framework</h2>
          <p className="text-lg opacity-80 leading-relaxed mb-12">
            The core insight: notification type should be determined by <strong>persistence + severity</strong>, not by which component a team happened to use. I built a decision framework first, then mapped it to components.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="text-sm font-medium mb-3 text-accent font-mono">Toast</div>
              <div className="font-display text-2xl mb-4">Temporary feedback</div>
              <div className="text-sm opacity-80 leading-relaxed mb-4">
                Auto-dismisses after 4–6 seconds. For confirmations and low-severity updates.
              </div>
              <div className="text-xs font-mono opacity-40 uppercase tracking-widest">Use when: action confirmed, no follow-up needed</div>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="text-sm font-medium mb-3 text-accent font-mono">Banner</div>
              <div className="font-display text-2xl mb-4">Persistent messaging</div>
              <div className="text-sm opacity-80 leading-relaxed mb-4">
                Stays visible until dismissed. For warnings, errors, and system-level updates.
              </div>
              <div className="text-xs font-mono opacity-40 uppercase tracking-widest">Use when: user must acknowledge before proceeding</div>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="text-sm font-medium mb-3 text-accent font-mono">Inline Validation</div>
              <div className="font-display text-2xl mb-4">Contextual feedback</div>
              <div className="text-sm opacity-80 leading-relaxed mb-4">
                Attached to the field or element that needs attention. For form errors, field-level warnings.
              </div>
              <div className="text-xs font-mono opacity-40 uppercase tracking-widest">Use when: error is scoped to a specific input</div>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="text-sm font-medium mb-3 text-accent font-mono">Confirmation Dialog</div>
              <div className="font-display text-2xl mb-4">Destructive action gate</div>
              <div className="text-sm opacity-80 leading-relaxed mb-4">
                Interrupts the flow intentionally. For irreversible or high-consequence actions only.
              </div>
              <div className="text-xs font-mono opacity-40 uppercase tracking-widest">Use when: action cannot be undone</div>
            </div>
          </div>
        </section>

        {/* Decision tree image */}

        {/* Token section */}
        <section className="py-20 border-t border-gray-200">
          <div className="text-[10px] tracking-widest uppercase font-mono opacity-50 mb-6">Token Architecture</div>
          <h3 className="font-display text-2xl mb-6">Severity encoded in tokens</h3>
          <p className="text-lg opacity-80 leading-relaxed mb-8">
            Notification colors aren't arbitrary—they're semantic tokens that encode meaning. <code className="text-sm bg-gray-100 px-2 py-0.5 rounded font-mono">feedback.error</code>, <code className="text-sm bg-gray-100 px-2 py-0.5 rounded font-mono">feedback.warning</code>, <code className="text-sm bg-gray-100 px-2 py-0.5 rounded font-mono">feedback.success</code> map consistently across all four notification types and all product surfaces.
          </p>

        </section>

        {/* Impact */}
        <section className="py-20 border-t border-gray-200 bg-black text-white -mx-8 px-8">
          <div className="text-[10px] tracking-widest uppercase font-mono mb-8" style={{color: '#00a86b'}}>Impact</div>
          <h2 className="font-display text-4xl mb-16">From chaos to coherence</h2>

          <div className="grid md:grid-cols-3 gap-12 mb-16">
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

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="text-sm font-mono opacity-40 uppercase tracking-widest mb-3">Before</div>
              <div className="text-lg opacity-80 leading-relaxed">Teams choosing notification types based on aesthetics. Users ignoring alerts. Support overwhelmed by "I didn't see the error" tickets.</div>
            </div>
            <div>
              <div className="text-sm font-mono opacity-40 uppercase tracking-widest mb-3">After</div>
              <div className="text-lg opacity-80 leading-relaxed">A shared decision framework. Notifications that feel different because they <em>are</em> different. Users that trust the system to tell them what matters.</div>
            </div>
          </div>
        </section>

        {/* Next */}
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
