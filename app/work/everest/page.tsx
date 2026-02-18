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

export default function EverestDesignSystem() {
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
            <span className="text-sm font-body tracking-wider text-text">Everest Design System</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm font-body tracking-wider text-text">Design System</span>
          </div>
        </div>
      </motion.nav>

      <div className="max-w-5xl mx-auto px-8">

        {/* Hero */}
        <section className="py-20">
          <div className="text-[10px] tracking-widest uppercase font-mono text-accent mb-6">Design System · Everest</div>
          <h1 className="font-display text-6xl leading-none mb-8">Everest Design System</h1>
          <p className="text-xl opacity-60 leading-relaxed max-w-xl font-display">
            Replacing a 15-year-old legacy UI with a modern token-based design system—enabling 60+ designers and 200+ engineers to ship with clarity, consistency, and speed
          </p>
        </section>
        
        {/* Hero image */}
        <ZoomableImage
          src="/images/everest.svg"
          alt="Everest Design System"
        />


        {/* Problem */}
        <section className="py-20 border-t border-gray-200">
          <div className="text-[10px] tracking-widest uppercase font-mono opacity-50 mb-6">The Problem</div>
          <h2 className="font-display text-4xl mb-8">15 years of technical debt, one broken system</h2>
          <p className="text-lg opacity-80 leading-relaxed mb-6">
            Dayforce was built on a UI framework from 2008. Hard-coded hex values everywhere. No tokens. No shared Figma library. Every team had their own component forks—200+ engineers shipping inconsistent UI across 80+ product surfaces.
          </p>
          <p className="text-lg opacity-80 leading-relaxed">
            Designers spent 40% of their time recreating components that already existed somewhere else. Engineers implemented the same button 32 different ways. And none of it was accessible.
          </p>
        </section>

        {/* Solution */}
        <section className="py-20 border-t border-gray-200 bg-gray-50 -mx-8 px-8">
          <div className="text-[10px] tracking-widest uppercase font-mono opacity-50 mb-6">Solution</div>
          <h2 className="font-display text-4xl mb-8">A token-first system built for scale</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="text-sm font-medium mb-3 text-accent font-mono">01 Token Architecture</div>
              <div className="font-display text-xl mb-4">Semantic token taxonomy</div>
              <div className="text-sm opacity-80 leading-relaxed">
                Three-tier hierarchy: primitive → semantic → component tokens. Brand decisions separated from system structure—enabling multi-theme propagation and reducing maintenance overhead by 60%.
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="text-sm font-medium mb-3 text-accent font-mono">02 Component API Design</div>
              <div className="font-display text-xl mb-4">Design ↔ Engineering alignment</div>
              <div className="text-sm opacity-80 leading-relaxed">
                Defined component APIs in partnership with Staff Engineers—aligning Figma component properties with React prop structures via CodeConnect. One source of truth across design and code.
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="text-sm font-medium mb-3 text-accent font-mono">03 Governance Model</div>
              <div className="font-display text-xl mb-4">Contribution without fragmentation</div>
              <div className="text-sm opacity-80 leading-relaxed">
                Established proposal → review → deprecation workflows that let 60+ designers contribute while preventing system drift. Clear ownership, clear criteria for what belongs in the system.
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="text-sm font-medium mb-3 text-accent font-mono">04 Accessibility Foundation</div>
              <div className="font-display text-xl mb-4">WCAG compliance baked in</div>
              <div className="text-sm opacity-80 leading-relaxed">
                Embedded WCAG 2.1 AA behaviors directly into component architecture—keyboard navigation, focus management, color contrast ratios, ARIA patterns—so teams couldn't accidentally ship inaccessible UI.
              </div>
            </div>
          </div>
        </section>

        {/* Governance section */}
        <section className="py-20 border-t border-gray-200">
          <div className="text-[10px] tracking-widest uppercase font-mono opacity-50 mb-6">Governance</div>
          <h3 className="font-display text-2xl mb-8">How contributions work</h3>

          <div className="space-y-4 mb-12">
            <div className="bg-white p-6 rounded-lg border border-gray-200 flex gap-6 items-start">
              <div className="text-accent font-mono text-sm w-24 shrink-0 pt-1">Propose</div>
              <div>
                <div className="font-display text-lg mb-2">Pattern request + rationale</div>
                <div className="text-sm opacity-60">Any team can submit a proposal. Must include: use case, scope, evidence of need across 2+ product areas.</div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 flex gap-6 items-start">
              <div className="text-accent font-mono text-sm w-24 shrink-0 pt-1">Review</div>
              <div>
                <div className="font-display text-lg mb-2">Systems team evaluation</div>
                <div className="text-sm opacity-60">Weekly review cycle. Assessed on: system fit, accessibility, token compliance, eng feasibility.</div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 flex gap-6 items-start">
              <div className="text-accent font-mono text-sm w-24 shrink-0 pt-1">Build</div>
              <div>
                <div className="font-display text-lg mb-2">Co-built with contributing team</div>
                <div className="text-sm opacity-60">Sponsoring team provides design intent + context. Systems team ensures quality, consistency, documentation.</div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 flex gap-6 items-start">
              <div className="text-accent font-mono text-sm w-24 shrink-0 pt-1">Deprecate</div>
              <div>
                <div className="font-display text-lg mb-2">Graceful retirement process</div>
                <div className="text-sm opacity-60">Migration guides, automated lint warnings, sunset timelines. Nothing disappears without a replacement path.</div>
              </div>
            </div>
          </div>
        </section>

        {/* Eng collaboration */}
        <section className="py-20 border-t border-gray-200 bg-gray-50 -mx-8 px-8">
          <div className="text-[10px] tracking-widest uppercase font-mono opacity-50 mb-6">Design ↔ Engineering</div>
          <h3 className="font-display text-2xl mb-8">Bridging Figma and production</h3>
          <p className="text-lg opacity-80 leading-relaxed mb-8">
            I worked directly with Staff Engineers to define component APIs before any design was built. We aligned on prop naming, variant structures, and token references so that the Figma component properties mapped 1:1 to React props—reducing handoff friction and eliminating "lost in translation" moments.
          </p>
        </section>

        {/* Impact */}
        <section className="py-20 border-t border-gray-200 bg-black text-white -mx-8 px-8">
          <div className="text-[10px] tracking-widest uppercase font-mono mb-8" style={{color: '#00a86b'}}>Impact</div>
          <h2 className="font-display text-4xl mb-16">A system the whole org uses</h2>

          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div>
              <div className="text-5xl font-display mb-3">60%</div>
              <div className="text-sm opacity-60">Reduction in maintenance overhead via token architecture</div>
            </div>
            <div>
              <div className="text-5xl font-display mb-3">60+</div>
              <div className="text-sm opacity-60">Designers onboarded via Office Hours & workshops</div>
            </div>
            <div>
              <div className="text-5xl font-display mb-3">Zero</div>
              <div className="text-sm opacity-60">Accessibility defects in system components post-launch</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="text-sm font-mono opacity-40 uppercase tracking-widest mb-3">Consistency</div>
              <div className="text-lg opacity-80 leading-relaxed">One token taxonomy applied across all Figma libraries and production codebases—design decisions propagate automatically</div>
            </div>
            <div>
              <div className="text-sm font-mono opacity-40 uppercase tracking-widest mb-3">Efficiency</div>
              <div className="text-lg opacity-80 leading-relaxed">Teams ship new features in days, not weeks—no rebuilding foundations from scratch</div>
            </div>
          </div>
        </section>

        {/* Next project */}
        <section className="py-20">
          <Link href="/work/notification-framework" className="group">
            <div className="text-[10px] tracking-widest uppercase font-mono opacity-40 group-hover:opacity-100 transition mb-4">Next Project</div>
            <div className="font-display text-3xl group-hover:italic transition">Notification Framework →</div>
          </Link>
        </section>

      </div>
    </main>
  )
}
