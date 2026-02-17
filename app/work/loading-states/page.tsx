'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from "framer-motion"


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
            {/*<span className="w-2 h-2 rounded-full bg-accent"></span>*/}
            <span className="text-sm font-body tracking-wider text-text">Platform Patterns</span>
          </div>
        </div>
      </motion.nav>

      <div className="max-w-5xl mx-auto px-8">
        <section className="py-20">
          <div className="text-[10px] tracking-widest uppercase font-mono text-accent mb-6">Platform Patterns</div>
          <h1 className="font-display text-6xl leading-none mb-8">Loading States</h1>
          <p className="text-xl opacity-60 leading-relaxed max-w-xl font-display">
            Defining rules for a slow application—making wait times feel faster through better loading patterns
          </p>
        </section>

        <section className="py-20 border-t border-gray-200">
          <div className="text-[10px] tracking-widest uppercase font-mono opacity-50 mb-6">The Problem</div>
          <h2 className="font-display text-4xl mb-8">Legacy app, lots of waiting</h2>
          <p className="text-lg opacity-80 leading-relaxed">
            Dayforce is a legacy enterprise system. It's <strong>slow</strong>. Users encounter loading states constantly. We can't magically make the backend faster, but we can make waiting feel better. The problem: Every team handled loading differently. Some showed full-screen spinners. Some showed nothing. No consistency, no standards.
          </p>
        </section>

        <section className="py-20 border-t border-gray-200 bg-gray-50 -mx-8 px-8">
          <div className="text-[10px] tracking-widest uppercase font-mono opacity-50 mb-6">Solution</div>
          <h2 className="font-display text-4xl mb-8">Context-appropriate loading patterns</h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="font-display text-xl mb-3">Skeleton Screens</div>
              <div className="text-sm opacity-60">For: Initial page loads, table data loading</div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="font-display text-xl mb-3">Inline Spinners</div>
              <div className="text-sm opacity-60">For: Localized loading, component refreshes</div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="font-display text-xl mb-3">Progress Bars</div>
              <div className="text-sm opacity-60">For: Determinate processes with known duration</div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="font-display text-xl mb-3">Button States</div>
              <div className="text-sm opacity-60">For: Action feedback, preventing double-submit</div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="font-display text-xl mb-3">Table Loading</div>
              <div className="text-sm opacity-60">For: Table data refreshes (sort, filter, paginate)</div>
            </div>
          </div>
        </section>

        <section className="py-20 border-t border-gray-200 bg-black text-white -mx-8 px-8">
          <div className="text-[10px] tracking-widest uppercase font-mono mb-8" style={{color: '#00a86b'}}>Impact</div>
          <h2 className="font-display text-4xl mb-16">Slower app, better experience</h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="text-5xl font-display mb-3">45%</div>
              <div className="text-sm opacity-60">Reduction in "app is slow" complaints</div>
            </div>
            <div>
              <div className="text-5xl font-display mb-3">Zero</div>
              <div className="text-sm opacity-60">Full-screen loading blockers</div>
            </div>
            <div>
              <div className="text-5xl font-display mb-3">5</div>
              <div className="text-sm opacity-60">Clear patterns for every context</div>
            </div>
          </div>
        </section>

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
