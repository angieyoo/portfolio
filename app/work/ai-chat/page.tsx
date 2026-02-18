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


export default function AIChatPatterns() {
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
            <span className="text-sm font-body tracking-wider text-text">AI Chat Patterns</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm font-body tracking-wider text-text">AI · 2025</span>
          </div>
        </div>
      </motion.nav>

      <div className="max-w-5xl mx-auto px-8">

        {/* Hero */}
        <section className="py-20">
          <div className="text-[10px] tracking-widest uppercase font-mono text-accent mb-6">AI · Systems Thinking</div>
          <h1 className="font-display text-6xl leading-none mb-8">AI Chat Patterns</h1>
          <p className="text-xl opacity-60 leading-relaxed max-w-xl font-display">
            Designing the interaction framework for Dayforce's first agentic AI experience—establishing reusable patterns for how users communicate with intelligent systems
          </p>
        </section>
        {/* Hero image */}
        <ZoomableImage
          src="/images/aichat.svg"
          alt="AI Chat Patterns"
        />


        {/* Problem */}
        <section className="py-20 border-t border-gray-200">
          <div className="text-[10px] tracking-widest uppercase font-mono opacity-50 mb-6">The Problem</div>
          <h2 className="font-display text-4xl mb-8">No patterns for intelligent UI</h2>
          <p className="text-lg opacity-80 leading-relaxed mb-6">
            When Dayforce launched AI capabilities, every product team interpreted "AI experience" differently. Some shipped chatbots. Some added magic buttons. Some built inline suggestions. The result: a fragmented, inconsistent AI layer with no shared mental model for how users should interact with agentic features.
          </p>
          <p className="text-lg opacity-80 leading-relaxed">
            The deeper problem: AI interactions don't follow the same rules as traditional UI. Users needed to understand <strong>what the AI can do, what it's doing right now, and when to trust its output</strong>—none of the existing design system components handled this.
          </p>
        </section>

        {/* Solution */}
        <section className="py-20 border-t border-gray-200 bg-gray-50 -mx-8 px-8">
          <div className="text-[10px] tracking-widest uppercase font-mono opacity-50 mb-6">Solution</div>
          <h2 className="font-display text-4xl mb-8">A reusable AI interaction framework</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="text-sm font-medium mb-3 text-accent font-mono">01 Conversation Thread</div>
              <div className="font-display text-xl mb-4">Human + AI message patterns</div>
              <div className="text-sm opacity-80 leading-relaxed">
                Standardized message anatomy: user input, AI response, inline citations, confidence indicators. Consistent across every AI entry point in the product.
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="text-sm font-medium mb-3 text-accent font-mono">02 Agentic Action Cards</div>
              <div className="font-display text-xl mb-4">Surfacing what the AI can do</div>
              <div className="text-sm opacity-80 leading-relaxed">
                Structured card pattern for AI-suggested actions. Shows intent, scope, and consequence before the user commits—critical for trust in an enterprise context.
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="text-sm font-medium mb-3 text-accent font-mono">03 Processing States</div>
              <div className="font-display text-xl mb-4">Transparent AI thinking</div>
              <div className="text-sm opacity-80 leading-relaxed">
                Skeleton patterns, streaming text, and "thinking" indicators that make latency feel intentional rather than broken—adapted from the loading states system.
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="text-sm font-medium mb-3 text-accent font-mono">04 Prompt Scaffolding</div>
              <div className="font-display text-xl mb-4">Reducing blank canvas paralysis</div>
              <div className="text-sm opacity-80 leading-relaxed">
                Contextual suggested prompts scoped to the user's current workflow. Lowers the entry barrier and teaches users what's possible without documentation.
              </div>
            </div>
          </div>
        </section>

        {/* Pattern detail image */}
        {/*<section className="py-20">
          <div className="text-[10px] tracking-widest uppercase font-mono opacity-50 mb-6">Pattern Detail</div>
          <h3 className="font-display text-2xl mb-8">Agentic action card anatomy</h3>
        </section>*/}

        {/* Systems connection */}
        <section className="py-20 border-t border-gray-200 bg-gray-50 -mx-8 px-8">
          <div className="text-[10px] tracking-widest uppercase font-mono opacity-50 mb-6">Systems Thinking</div>
          <h3 className="font-display text-2xl mb-8">Built on the existing token foundation</h3>
          <p className="text-lg opacity-80 leading-relaxed mb-8">
            Rather than building a parallel AI component library, I extended the Everest Design System token architecture to accommodate AI-specific states. New semantic tokens for AI contexts (ai.surface, ai.border.active, ai.text.streaming) slotted into the existing three-tier hierarchy—keeping the system coherent rather than forked.
          </p>
        </section>

        {/* Impact */}
        <section className="py-20 border-t border-gray-200 bg-black text-white -mx-8 px-8">
          <div className="text-[10px] tracking-widest uppercase font-mono mb-8" style={{color: '#00a86b'}}>Impact</div>
          <h2 className="font-display text-4xl mb-16">A shared language for AI</h2>

          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="text-5xl font-display mb-3">1</div>
              <div className="text-sm opacity-60">Unified framework adopted across all AI features</div>
            </div>
            <div>
              <div className="text-5xl font-display mb-3">32+</div>
              <div className="text-sm opacity-60">Product teams using shared AI interaction patterns</div>
            </div>
            <div>
              <div className="text-5xl font-display mb-3">0</div>
              <div className="text-sm opacity-60">New component forks — AI patterns built on existing token system</div>
            </div>
          </div>
        </section>

        {/* Next project */}
        <section className="py-20">
          <Link href="/work/data-tables" className="group">
            <div className="text-[10px] tracking-widest uppercase font-mono opacity-40 group-hover:opacity-100 transition mb-4">Next Project</div>
            <div className="font-display text-3xl group-hover:italic transition">Data Tables →</div>
          </Link>
        </section>

      </div>
    </main>
  )
}
