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

        {/* Discovery */}
        <section className="py-20 border-t border-gray-200">
          <div className="text-[10px] tracking-widest uppercase font-mono opacity-50 mb-6">Discovery</div>
          <h2 className="font-display text-4xl mb-4">Auditing the notification landscape</h2>
          <p className="text-lg opacity-80 leading-relaxed mb-8">
            Before proposing any solution, I conducted a full audit across 12 product surfaces — cataloging every notification type, its trigger, its visual treatment, and how users responded. I also analyzed 6 months of support ticket data to understand where notifications were failing.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="font-display text-3xl mb-3">14</div>
              <div className="text-sm opacity-60 leading-relaxed">Different notification implementations across 12 product surfaces</div>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="font-display text-3xl mb-3">73%</div>
              <div className="text-sm opacity-60 leading-relaxed">Of notification tickets were "I didn't see the error" — critical alerts dismissed because they looked like success toasts</div>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="font-display text-3xl mb-3">0</div>
              <div className="text-sm opacity-60 leading-relaxed">Teams had a framework for choosing notification types — every decision was aesthetic, not functional</div>
            </div>
          </div>
        </section>

        {/* The Framework: Persistence × Severity */}
        <section className="py-20 border-t border-gray-200">
          <div className="text-[10px] tracking-widest uppercase font-mono opacity-50 mb-6">The Framework</div>
          <h2 className="font-display text-4xl mb-4">Persistence × Severity</h2>
          <p className="text-lg opacity-80 leading-relaxed mb-10">
            Notification type shouldn't be a component choice — it's determined by two axes: <strong>how severe is this?</strong> and <strong>how long does the user need to see it?</strong>
          </p>

         
        </section>

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
              <div className="text-xs opacity-40 uppercase tracking-widest">Use when: action confirmed, no follow-up needed</div>
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

        {/* Bulk Operations */}
        <section className="py-20 border-t border-gray-200">
          <div className="text-[10px] tracking-widest uppercase font-mono opacity-50 mb-6">Deep Dive</div>
          <h2 className="font-display text-4xl mb-4">Bulk operations — the hardest problem</h2>
          <p className="text-lg opacity-80 leading-relaxed mb-10">
            When a user selects 200 records and clicks "Archive," what happens? The old behavior: 200 individual toasts, or one "Done" with no detail. The framework needed to handle four distinct outcomes — each with different notification types and accessibility requirements.
          </p>
{/*
          <ZoomableImage
            src="/images/notification-bulk.svg"
            alt="Bulk operation notification flow — 4 scenarios with accessibility annotations"
          />*/}

          <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
            <div className="text-sm font-mono opacity-40 uppercase tracking-widest mb-3">Key principle</div>
            <div className="text-lg opacity-80 leading-relaxed">
              Bulk operations get <strong>one notification, not many</strong>. The type escalates with severity — full success auto-dismisses, partial success persists with action, failure persists with retry, destructive actions gate with a dialog.
            </div>
          </div>
        </section>

        {/* Edge Cases & Tradeoffs */}
        <section className="py-20 border-t border-gray-200">
          <div className="text-[10px] tracking-widest uppercase font-mono opacity-50 mb-6">Tradeoffs</div>
          <h2 className="font-display text-4xl mb-8">The debates that shaped the framework</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-lg bg-gray-50">
              <div className="font-display text-sm mb-2">Why 4 seconds for toast?</div>
              <div className="text-sm opacity-60 leading-relaxed">Tested 2s, 4s, 6s, 8s. 2s too fast to read. 6s+ caused toast stacking on rapid actions. 4s was the minimum where 90% of users could read without piling up.</div>
            </div>
            <div className="p-6 rounded-lg bg-gray-50">
              <div className="font-display text-sm mb-2">Why not color alone for severity?</div>
              <div className="text-sm opacity-60 leading-relaxed">Color is reinforcement, not signal. The primary differentiator is behavior — does it disappear or stay? This makes the system work for colorblind users too.</div>
            </div>
            <div className="p-6 rounded-lg bg-gray-50">
              <div className="font-display text-sm mb-2">Banner stacking limit</div>
              <div className="text-sm opacity-60 leading-relaxed">Max 3 visible banners, most severe on top. After 3, oldest collapses into "2 more notifications" link. Prevents banner blindness.</div>
            </div>
            <div className="p-6 rounded-lg bg-gray-50">
              <div className="font-display text-sm mb-2">Async operations</div>
              <div className="text-sm opacity-60 leading-relaxed">Long-running operations show toast "Export started," then persistent banner on completion — even if the user navigated away. The notification finds them.</div>
            </div>
          </div>
        </section>

        {/* Adoption */}
        <section className="py-20 border-t border-gray-200 bg-gray-50 -mx-8 px-8">
          <div className="text-[10px] tracking-widest uppercase font-mono opacity-50 mb-6">Adoption</div>
          <h2 className="font-display text-4xl mb-4">Getting 32 teams to use one framework</h2>
          <p className="text-lg opacity-80 leading-relaxed mb-8">
            A framework nobody uses is just a document. Adoption required three things working together.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="text-sm font-mono text-accent mb-3">01</div>
              <div className="font-display text-lg mb-3">Decision tree, not a component list</div>
              <div className="text-sm opacity-70 leading-relaxed">Instead of documenting components, I gave teams a flowchart: "Is the action destructive? → Dialog. Can it auto-resolve? → Toast." Teams could make the right choice in 30 seconds without reading documentation.</div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="text-sm font-mono text-accent mb-3">02</div>
              <div className="font-display text-lg mb-3">Baked into the design system</div>
              <div className="text-sm opacity-70 leading-relaxed">The notification components in the Everest system enforced the framework. You couldn't create an auto-dismissing error banner — the component API wouldn't let you. Correct behavior was the default, not an option.</div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="text-sm font-mono text-accent mb-3">03</div>
              <div className="font-display text-lg mb-3">Migration with proof</div>
              <div className="text-sm opacity-70 leading-relaxed">I partnered with two high-traffic teams (Payroll and Benefits) to migrate first, then shared before/after support ticket data. When other teams saw a 85% reduction in notification-related tickets, adoption became pull instead of push.</div>
            </div>
          </div>
        </section>

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

        {/* Reflection */}
        <section className="py-20 border-t border-gray-200">
          <div className="text-[10px] tracking-widest uppercase font-mono opacity-50 mb-6">Reflection</div>
          <h2 className="font-display text-4xl mb-8">What I learned</h2>
          <p className="text-lg opacity-80 leading-relaxed mb-6">
            The framework mattered more than the components. We already had toasts and banners — what we lacked was a shared mental model for when to use which. Persistence × severity gave teams a decision in 30 seconds without reading docs.
          </p>
          <p className="text-lg opacity-80 leading-relaxed">
            Baking the rules into the component API was the highest-leverage decision. Documentation gets ignored. But when the component won't let you create an auto-dismissing error, correct behavior becomes the path of least resistance. If I did it again, I'd start with the bulk operation scenarios — that's where the framework was stress-tested hardest.
          </p>
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
