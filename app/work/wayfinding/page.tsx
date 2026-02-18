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
            <span className="text-sm font-body tracking-wider text-text">Platform Patterns</span>
          </div>
        </div>
      </motion.nav>

      <div className="max-w-5xl mx-auto px-8">

        {/* Hero */}
        <section className="pt-32 pb-12">
          <div className="text-[10px] tracking-widest uppercase font-mono text-accent mb-6">Information Architecture · Platform Patterns</div>
          <h1 className="font-display text-6xl leading-none mb-8">Wayfinding</h1>
          <p className="text-xl opacity-60 leading-relaxed max-w-xl font-display">
            Redesigning navigation and IA for an enterprise platform that grew organically—from chaos to user-centered structure
          </p>
        </section>
        {/* Hero image */}
        <ZoomableImage
          src="/images/wayfinding.svg"
          alt="Wayfinding — Information Architecture"
        />



        {/* Problem */}
        <section className="py-20 border-t border-gray-200">
          <div className="text-[10px] tracking-widest uppercase font-mono opacity-50 mb-6">The Problem</div>
          <h2 className="font-display text-4xl mb-8">No IA, no wayfinding</h2>
          <p className="text-lg opacity-80 leading-relaxed mb-6">
            Dayforce had <strong>no information architecture</strong>. For years, product teams could add new pages whenever they wanted. The global nav became a dumping ground—too long, too nested, organized by org structure instead of user needs.
          </p>
          <p className="text-lg opacity-80 leading-relaxed">
            Users couldn't find basic features. "Where is..." was the most common support ticket category. Onboarding took weeks because there was no mental model to teach. New teams adding to the nav made it worse every quarter.
          </p>
        </section>


        {/* Research callout */}
        <section className="py-12 border-t border-gray-200">
          <div className="text-[10px] tracking-widest uppercase font-mono opacity-50 mb-6">Research</div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="font-display text-3xl mb-3">50+</div>
              <div className="text-sm opacity-60 leading-relaxed">Top-level nav items before redesign — more than users could scan in a single session</div>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="font-display text-3xl mb-3">#1</div>
              <div className="text-sm opacity-60 leading-relaxed">"Where is..." was the top support ticket category, indicating fundamental navigation failure</div>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="font-display text-3xl mb-3">3–4</div>
              <div className="text-sm opacity-60 leading-relaxed">Clicks to reach common features, often buried under organizational hierarchy</div>
            </div>
          </div>
        </section>

        {/* Solution */}
        <section className="py-20 border-t border-gray-200 bg-gray-50 -mx-8 px-8">
          <div className="text-[10px] tracking-widest uppercase font-mono opacity-50 mb-6">Solution</div>
          <h2 className="font-display text-4xl mb-8">A complete wayfinding system</h2>
          <p className="text-lg opacity-80 leading-relaxed mb-12">
            Rather than just reorganizing the nav, I approached this as a full IA problem—starting with how users think about the product, not how the org was structured.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="text-sm font-medium mb-3 text-accent font-mono">01 Global Nav</div>
              <div className="font-display text-xl mb-4">Primary navigation</div>
              <div className="text-sm opacity-80 leading-relaxed">Streamlined to 8 "districts" organized by user mental models, not org structure. Each district is a coherent domain users recognize.</div>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="text-sm font-medium mb-3 text-accent font-mono">02 Feature Nav</div>
              <div className="font-display text-xl mb-4">Secondary navigation</div>
              <div className="text-sm opacity-80 leading-relaxed">Contextual nav within each district. Surfaced when relevant, hidden when not—reducing cognitive load without hiding functionality.</div>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="text-sm font-medium mb-3 text-accent font-mono">03 App Header</div>
              <div className="font-display text-xl mb-4">Global search</div>
              <div className="text-sm opacity-80 leading-relaxed">Cmd+K to search anything—pages, employees, reports, settings. A power user escape hatch that reduces nav dependency entirely.</div>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="text-sm font-medium mb-3 text-accent font-mono">04 Dashboard Template</div>
              <div className="font-display text-xl mb-4">Landing pages</div>
              <div className="text-sm opacity-80 leading-relaxed">Every Level 1 page gets a consistent dashboard. Users always land somewhere oriented, with quick actions and recent activity visible.</div>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="text-sm font-medium mb-3 text-accent font-mono">05 Omnibar</div>
              <div className="font-display text-xl mb-4">Page Level Wayfinding</div>
              <div className="text-sm opacity-80 leading-relaxed">Every page would have an Omnibar to ground the user on which page they're on, as well as displaying primary page-level actions they could take.</div>
            </div>
          </div>
        </section>

        {/* IA diagram */}

        {/* Omnibar detail */}
        {/*<section className="py-20 border-t border-gray-200">
          <div className="text-[10px] tracking-widest uppercase font-mono opacity-50 mb-6">Detail: Omnibar</div>
          <h3 className="font-display text-2xl mb-6">Search as navigation</h3>
          <p className="text-lg opacity-80 leading-relaxed mb-8">
            For power users, the best navigation is no navigation. The omnibar lets users bypass the IA entirely—searching across pages, people, documents, and settings from anywhere in the product with a single shortcut.
          </p>
        </section>*/}


        {/* Impact */}
        <section className="py-20 border-t border-gray-200 bg-black text-white -mx-8 px-8">
          <div className="text-[10px] tracking-widest uppercase font-mono mb-8" style={{color: '#00a86b'}}>Impact</div>
          <h2 className="font-display text-4xl mb-16">From lost to oriented</h2>

          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div>
              <div className="text-5xl font-display mb-3">65%</div>
              <div className="text-sm opacity-60">Reduction in "where is..." support tickets</div>
            </div>
            <div>
              <div className="text-5xl font-display mb-3">8</div>
              <div className="text-sm opacity-60">Districts instead of 50+ top-level nav items</div>
            </div>
            <div>
              <div className="text-5xl font-display mb-3">10K+</div>
              <div className="text-sm opacity-60">Daily omnibar searches — users choosing speed over browsing</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="text-sm font-mono opacity-40 uppercase tracking-widest mb-3">Consistency</div>
              <div className="text-lg opacity-80 leading-relaxed">A navigation template that scales—new teams adding features now have a defined place for everything rather than a blank nav to fill arbitrarily.</div>
            </div>
            <div>
              <div className="text-sm font-mono opacity-40 uppercase tracking-widest mb-3">Scalability</div>
              <div className="text-lg opacity-80 leading-relaxed">The district model gives the product room to grow without nav entropy. Adding a new feature means choosing a district, not extending a flat list.</div>
            </div>
          </div>
        </section>

        {/* Next */}
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
