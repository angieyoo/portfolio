'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from "framer-motion"


export default function Wayfinding() {
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
            <span className="text-sm font-body tracking-wider text-text">Wayfinding</span>
          </div>
          <div className="flex items-center gap-3">
            {/*<span className="w-2 h-2 rounded-full bg-accent"></span>*/}
            <span className="text-sm font-body tracking-wider text-text">Platform Patterns</span>
          </div>
        </div>
      </motion.nav>

      <div className="max-w-5xl mx-auto px-8">
        <section className="py-20">
          <div className="text-[10px] tracking-widest uppercase font-mono text-accent mb-6">Information Architecture</div>
          <h1 className="font-display text-6xl leading-none mb-8">Wayfinding</h1>
          <p className="text-xl opacity-60 leading-relaxed max-w-xl font-display">
            Redesigning navigation and IA for an enterprise platform that grew organically—from chaos to user-centered structure
          </p>
        </section>

        <section className="py-20 border-t border-gray-200">
          <div className="text-[10px] tracking-widest uppercase font-mono opacity-50 mb-6">The Problem</div>
          <h2 className="font-display text-4xl mb-8">No IA, no wayfinding</h2>
          <p className="text-lg opacity-80 leading-relaxed">
            Dayforce had <strong>no information architecture</strong>. For years, product teams could add new pages whenever they wanted. The global nav became a dumping ground—too long, too nested, organized by org structure instead of user needs.
          </p>
        </section>

        <section className="py-20 border-t border-gray-200 bg-gray-50 -mx-8 px-8">
          <div className="text-[10px] tracking-widest uppercase font-mono opacity-50 mb-6">Solution</div>
          <h2 className="font-display text-4xl mb-8">A complete wayfinding system</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="text-sm font-medium mb-3 text-accent font-mono">01 Global Nav</div>
              <div className="font-display text-xl mb-4">Primary navigation</div>
              <div className="text-sm opacity-80">Streamlined to 8-10 "districts" organized by user mental models</div>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="text-sm font-medium mb-3 text-accent font-mono">02 Feature Nav</div>
              <div className="font-display text-xl mb-4">Secondary navigation</div>
              <div className="text-sm opacity-80">Contextual nav within each district</div>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="text-sm font-medium mb-3 text-accent font-mono">03 Omnibar</div>
              <div className="font-display text-xl mb-4">Global search</div>
              <div className="text-sm opacity-80">Cmd+K to search anything. Pages, employees, reports, settings.</div>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="text-sm font-medium mb-3 text-accent font-mono">04 Dashboard Template</div>
              <div className="font-display text-xl mb-4">Landing pages</div>
              <div className="text-sm opacity-80">Every Level 1 page gets a dashboard</div>
            </div>
          </div>
        </section>

        <section className="py-20 border-t border-gray-200 bg-black text-white -mx-8 px-8">
          <div className="text-[10px] tracking-widest uppercase font-mono mb-8" style={{color: '#00a86b'}}>Impact</div>
          <h2 className="font-display text-4xl mb-16">From lost to oriented</h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="text-5xl font-display mb-3">65%</div>
              <div className="text-sm opacity-60">Reduction in "where is..." support tickets</div>
            </div>
            <div>
              <div className="text-5xl font-display mb-3">8</div>
              <div className="text-sm opacity-60">Districts instead of 50+ top-level items</div>
            </div>
            <div>
              <div className="text-5xl font-display mb-3">10K+</div>
              <div className="text-sm opacity-60">Daily omnibar searches</div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <Link href="/work/loading-states" className="group">
            <div className="text-[10px] tracking-widest uppercase font-mono opacity-40 group-hover:opacity-100 transition mb-4">Next Project</div>
            <div className="font-display text-3xl group-hover:italic transition">Loading States →</div>
          </Link>
        </section>
      </div>
    </main>
  )
}
