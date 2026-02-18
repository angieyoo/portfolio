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



export default function LoadingStates() {
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
            <span className="text-sm font-body tracking-wider text-text">Loading States</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm font-body tracking-wider text-text">Platform Patterns · 2025</span>
          </div>
        </div>
      </motion.nav>

      <div className="max-w-5xl mx-auto px-8">

        {/* Hero */}
        <section className="pt-32 pb-12">
          <div className="text-[10px] tracking-widest uppercase font-mono text-accent mb-6">Platform Patterns</div>
          <h1 className="font-display text-6xl leading-none mb-8">Loading States</h1>
          <p className="text-xl opacity-60 leading-relaxed max-w-xl font-display">
            Defining rules for a slow application—making wait times feel faster through better loading patterns
          </p>
        </section>
        {/* Hero image */}
        <ZoomableImage
          src="/images/loading.svg"
          alt="Loading States — Pattern Selection Matrix"
        />



        {/* Problem */}
        <section className="py-20 border-t border-gray-200">
          <div className="text-[10px] tracking-widest uppercase font-mono opacity-50 mb-6">The Problem</div>
          <h2 className="font-display text-4xl mb-8">Legacy app, lots of waiting</h2>
          <p className="text-lg opacity-80 leading-relaxed mb-6">
            Dayforce is a legacy enterprise system. It's <strong>slow</strong>. Users encounter loading states constantly. We can't magically make the backend faster, but we can make waiting feel better.
          </p>
          <p className="text-lg opacity-80 leading-relaxed">
            The problem: every team handled loading differently. Some showed full-screen spinners that blocked the entire UI. Some showed nothing at all—leaving users wondering if their action registered. No consistency, no standards, no shared language for what "loading" even meant.
          </p>
        </section>


        {/* Insight callout */}
        <section className="py-12 -mx-8 px-8 bg-gray-950 text-white">
          <div className="max-w-2xl">
            <div className="text-[10px] tracking-widest uppercase font-mono opacity-40 mb-6">Core Insight</div>
            <p className="font-display text-2xl leading-relaxed opacity-90">
              "The right loading pattern is determined by scope—not preference. A full-screen spinner is only appropriate when the entire viewport is changing. Everything else should load in place."
            </p>
          </div>
        </section>

        {/* Solution */}
        <section className="py-20 border-t border-gray-200 bg-gray-50 -mx-8 px-8">
          <div className="text-[10px] tracking-widest uppercase font-mono opacity-50 mb-6">Solution</div>
          <h2 className="font-display text-4xl mb-8">Context-appropriate loading patterns</h2>
          <p className="text-lg opacity-80 leading-relaxed mb-12">
            I mapped every loading scenario to a decision tree based on two axes: <strong>scope</strong> (how much of the UI is affected) and <strong>determinacy</strong> (do we know how long it will take). Each quadrant maps to a specific pattern.
          </p>

          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg border border-gray-200 flex gap-8 items-start">
              <div className="w-40 shrink-0">
                <div className="text-accent font-mono text-xs uppercase tracking-widest mb-1">Skeleton Screens</div>
                <div className="text-xs opacity-40 font-mono">Page scope · Indeterminate</div>
              </div>
              <div>
                <div className="font-display text-lg mb-2">Initial page and table loads</div>
                <div className="text-sm opacity-60 leading-relaxed">Mirrors the layout of the content that will appear. Reduces perceived wait time by showing structure before data arrives. Never use for partial updates.</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 flex gap-8 items-start">
              <div className="w-40 shrink-0">
                <div className="text-accent font-mono text-xs uppercase tracking-widest mb-1">Inline Spinners</div>
                <div className="text-xs opacity-40 font-mono">Component scope · Indeterminate</div>
              </div>
              <div>
                <div className="font-display text-lg mb-2">Localized loading, component refreshes</div>
                <div className="text-sm opacity-60 leading-relaxed">Scoped to the element being updated. The rest of the UI remains interactive. Use for filtering, sorting, or any partial refresh.</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 flex gap-8 items-start">
              <div className="w-40 shrink-0">
                <div className="text-accent font-mono text-xs uppercase tracking-widest mb-1">Progress Bars</div>
                <div className="text-xs opacity-40 font-mono">Page scope · Determinate</div>
              </div>
              <div>
                <div className="font-display text-lg mb-2">Processes with known duration</div>
                <div className="text-sm opacity-60 leading-relaxed">Only use when we actually know progress percentage. A fake progress bar is worse than a spinner—it erodes trust when it stalls at 90%.</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 flex gap-8 items-start">
              <div className="w-40 shrink-0">
                <div className="text-accent font-mono text-xs uppercase tracking-widest mb-1">Button States</div>
                <div className="text-xs opacity-40 font-mono">Element scope · Indeterminate</div>
              </div>
              <div>
                <div className="font-display text-lg mb-2">Action feedback, preventing double-submit</div>
                <div className="text-sm opacity-60 leading-relaxed">Button becomes disabled with a spinner immediately on click. Gives instant feedback and prevents duplicate submissions on slow networks.</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 flex gap-8 items-start">
              <div className="w-40 shrink-0">
                <div className="text-accent font-mono text-xs uppercase tracking-widest mb-1">Table Loading</div>
                <div className="text-xs opacity-40 font-mono">Component scope · Indeterminate</div>
              </div>
              <div>
                <div className="font-display text-lg mb-2">Sort, filter, paginate operations</div>
                <div className="text-sm opacity-60 leading-relaxed">Overlay on the table rows, not the whole page. Headers and filters remain interactive during refresh so users can change their mind mid-load.</div>
              </div>
            </div>
          </div>
        </section>

        {/* Decision matrix image */}

        {/* Pattern detail image */}
        <section className="py-20 border-t border-gray-200">
          <div className="text-[10px] tracking-widest uppercase font-mono opacity-50 mb-6">Pattern Detail</div>
          <h3 className="font-display text-2xl mb-6">Skeleton screen anatomy</h3>
          <p className="text-lg opacity-80 leading-relaxed mb-4">
            Skeleton screens only work if they mirror the actual layout. I built a token-driven skeleton system where the shimmer animation, border radius, and sizing are all derived from the component it represents.
          </p>
        </section>


        {/* Impact */}
        <section className="py-20 border-t border-gray-200 bg-black text-white -mx-8 px-8">
          <div className="text-[10px] tracking-widest uppercase font-mono mb-8" style={{color: '#00a86b'}}>Impact</div>
          <h2 className="font-display text-4xl mb-16">Slower app, better experience</h2>

          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div>
              <div className="text-5xl font-display mb-3">45%</div>
              <div className="text-sm opacity-60">Reduction in "app is slow" complaints — same performance, better perception</div>
            </div>
            <div>
              <div className="text-5xl font-display mb-3">Zero</div>
              <div className="text-sm opacity-60">Full-screen loading blockers remaining after rollout</div>
            </div>
            <div>
              <div className="text-5xl font-display mb-3">5</div>
              <div className="text-sm opacity-60">Clear patterns covering every loading scenario in the product</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="text-sm font-mono opacity-40 uppercase tracking-widest mb-3">Perception</div>
              <div className="text-lg opacity-80 leading-relaxed">Users reporting the app "feels faster" despite no backend improvements—demonstrating that perceived performance is a design problem, not just an engineering one.</div>
            </div>
            <div>
              <div className="text-sm font-mono opacity-40 uppercase tracking-widest mb-3">Adoption</div>
              <div className="text-lg opacity-80 leading-relaxed">Pattern documentation and migration guides meant teams could adopt without a redesign. New patterns slotted in alongside existing work with minimal disruption.</div>
            </div>
          </div>
        </section>

        {/* Next */}
        <section className="py-20">
          <Link href="/" className="group">
            <div className="text-[10px] tracking-widest uppercase font-mono opacity-40 group-hover:opacity-100 transition mb-4">All Projects</div>
            <div className="font-display text-3xl group-hover:italic transition">← Back to Work</div>
          </Link>
        </section>

      </div>
    </main>
  )
}
