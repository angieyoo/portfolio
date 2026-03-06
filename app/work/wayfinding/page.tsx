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

        {/* Discovery: Nav Audit */}
        <section className="py-20 border-t border-gray-200">
          <div className="text-[10px] tracking-widest uppercase font-mono opacity-50 mb-6">Discovery</div>
          <h2 className="font-display text-4xl mb-4">Navigation audit</h2>
          <p className="text-lg opacity-80 leading-relaxed mb-10">
            Before designing anything, I audited the entire navigation surface. I mapped every top-level item, traced where features were duplicated across modules, and flagged orphaned items with no clear parent. The audit revealed three structural problems — duplicates, orphans, and org-chart mirroring — that no amount of visual polish could fix.
          </p>
          <ZoomableImage
            src="/images/wayfinding-before.svg"
            alt="Before: Navigation Audit — 50+ items with duplicates and orphans"
          />
        </section>

        {/* Decision: Why 6 districts */}
        <section className="py-20 border-t border-gray-200">
          <div className="text-[10px] tracking-widest uppercase font-mono opacity-50 mb-6">The Hard Decision</div>
          <h2 className="font-display text-4xl mb-4">Why 6 districts?</h2>
          <p className="text-lg opacity-80 leading-relaxed mb-8">
            The audit gave me a clear picture of the mess. The next question was: what's the right organizing principle? I explored three approaches and landed on districts — coherent domains that match how users think about their work.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 border border-gray-200 rounded-lg bg-gray-50/50">
              <div className="text-sm font-mono text-red-400 mb-2">✗ Option A</div>
              <div className="font-display text-lg mb-3">Mirror the org chart</div>
              <div className="text-sm opacity-60 leading-relaxed">Keep navigation aligned to engineering team ownership. Rejected — this was the source of the problem. Users don't know or care which team built a feature.</div>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg bg-gray-50/50">
              <div className="text-sm font-mono text-yellow-500 mb-2">~ Option B</div>
              <div className="font-display text-lg mb-3">Role-based navigation</div>
              <div className="text-sm opacity-60 leading-relaxed">Show different nav for admins vs. employees vs. managers. Considered — but it fragments the product into parallel experiences and makes cross-role features hard to place.</div>
            </div>
            <div className="p-6 border border-green-300 rounded-lg bg-green-50/30">
              <div className="text-sm font-mono text-green-600 mb-2">✓ Option C</div>
              <div className="font-display text-lg mb-3">Task-based districts</div>
              <div className="text-sm opacity-60 leading-relaxed">Group by user intent — "I need to check my pay," "I need to request time off." Each district is a domain users can name and navigate to intuitively.</div>
            </div>
          </div>

          <div className="p-8 bg-gray-50 rounded-lg border border-gray-200 mb-10">
            <div className="text-sm font-mono opacity-40 uppercase tracking-widest mb-4">Design Principles</div>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="font-display text-base mb-2">Group by user task</div>
                <div className="text-sm opacity-60 leading-relaxed">Not by product module or team ownership. "Time-Off" lives where employees look for it — not under WFM admin.</div>
              </div>
              <div>
                <div className="font-display text-base mb-2">Every district is nameable</div>
                <div className="text-sm opacity-60 leading-relaxed">If a user can't describe a district in one word — People, Pay, Benefits, Time, Talent, Reports — it's too abstract.</div>
              </div>
              <div>
                <div className="font-display text-base mb-2">New features have a home</div>
                <div className="text-sm opacity-60 leading-relaxed">The district model gives every future feature a defined place. No more nav entropy from teams adding items arbitrarily.</div>
              </div>
            </div>
          </div>
        </section>

        {/* After: 6 Districts IA */}
        <section className="py-20 border-t border-gray-200">
          <div className="text-[10px] tracking-widest uppercase font-mono opacity-50 mb-6">After</div>
          <h2 className="font-display text-4xl mb-4">6 districts — organized by mental models</h2>
          <p className="text-lg opacity-80 leading-relaxed mb-10">
            50+ scattered nav items consolidated into 6 coherent districts. Duplicates merged, orphans placed, and every item organized around how users think about their work — not how teams are structured internally.
          </p>
          <ZoomableImage
            src="/images/wayfinding-after.svg"
            alt="After: 6 Districts IA structure"
          />
        </section>

        {/* Solution */}
        <section className="py-20 border-t border-gray-200 bg-gray-50 -mx-8 px-8">
          <div className="text-[10px] tracking-widest uppercase font-mono opacity-50 mb-6">Solution</div>
          <h2 className="font-display text-4xl mb-8">Five components, one system</h2>
          <p className="text-lg opacity-80 leading-relaxed mb-12">
            The districts defined the structure. The next challenge was building the navigation components that bring that structure to life — each solving a different wayfinding need.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="text-sm font-medium mb-3 text-accent font-mono">01 Global Nav</div>
              <div className="font-display text-xl mb-4">Primary navigation</div>
              <div className="text-sm opacity-80 leading-relaxed">Streamlined to 6 "districts" organized by user mental models, not org structure. Each district is a coherent domain users recognize.</div>
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
              <div className="text-5xl font-display mb-3">6</div>
              <div className="text-sm opacity-60">Districts instead of 50+ top-level nav items</div>
            </div>
            <div>
              <div className="text-5xl font-display mb-3">10K+</div>
              <div className="text-sm opacity-60">Daily searches through App Header — users choosing speed over browsing</div>
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

        {/* Reflection */}
        <section className="py-20 border-t border-gray-200">
          <div className="text-[10px] tracking-widest uppercase font-mono opacity-50 mb-6">Reflection</div>
          <h2 className="font-display text-4xl mb-8">What I learned</h2>
          <p className="text-lg opacity-80 leading-relaxed mb-6">
            The hardest part wasn't the design — it was organizational alignment. 32 teams all had opinions about where their features should live in the hierarchy. The breakthrough: <strong>find the 80% that's genuinely common, make it undeniable through evidence</strong>, then give teams real control over the 20% that's legitimately different.
          </p>
          <p className="text-lg opacity-80 leading-relaxed mb-6">
            Shared research synthesis earlier — bringing researchers from different modules into the same room — would have accelerated alignment by months. Next time, I'd invest more in cross-team discovery before proposing any structure.
          </p>
          <p className="text-lg opacity-80 leading-relaxed">
            You can't mandate navigation from above. The districts succeeded because teams <em>wanted</em> to use them — the structure was intuitive enough that new features had an obvious home. That's the only kind of IA that holds at scale.
          </p>
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
