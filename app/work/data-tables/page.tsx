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



export default function DataTables() {
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
            <span className="text-sm font-body tracking-wider text-text">Data Tables</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm font-body tracking-wider text-text">Platform Patterns · 2024</span>
          </div>
        </div>
      </motion.nav>

      <div className="max-w-5xl mx-auto px-8">

        {/* Hero */}
        <section className="pt-32 pb-12">
          <div className="text-[10px] tracking-widest uppercase font-mono text-accent mb-6">Platform Patterns</div>
          <h1 className="font-display text-6xl leading-none mb-8">Data Tables</h1>
          <p className="text-xl opacity-60 leading-relaxed max-w-xl font-display">
            Standardizing CRUD workflows across a system of records—replacing 32 fragmented implementations with one token-driven template used across 80% of product surfaces
          </p>
        </section>
        {/* Hero image */}
        <ZoomableImage
          src="/images/table1.svg"
          alt="Data Tables — Employee Persona"
        />

         <ZoomableImage
          src="/images/table2.svg"
          alt="Data Tables - Admin Persona"
        />

         <ZoomableImage
          src="/images/table0.svg"
          alt="Data Tables - Before"
        />

        {/* Problem */}
        <section className="py-20 border-t border-gray-200">
          <div className="text-[10px] tracking-widest uppercase font-mono opacity-50 mb-6">The Problem</div>
          <h2 className="font-display text-4xl mb-8">Dayforce is fundamentally a system of records</h2>
          <p className="text-lg opacity-80 leading-relaxed mb-6">
            Nearly 80% of Dayforce surfaces depended on data tables to create, view, and manage records. But each of the 32 product teams implemented its own interaction patterns, behaviors, and editing models—creating a fragmented, inconsistent experience for users navigating across the product.
          </p>
          <p className="text-lg opacity-80 leading-relaxed">
            The fragmentation ran deep. Recruiting teams expected inline editing. Payroll teams needed bulk selection and heavy mass-editing. Reporting teams relied on analytics views and inline filtering. No single pattern served everyone—so everyone built their own.
          </p>
        </section>

        {/* Fragmentation callout */}
        <section className="py-12 -mx-8 px-8 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <div className="text-[10px] tracking-widest uppercase font-mono opacity-50 mb-8">Fragmentation Across Teams</div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="text-accent font-mono text-xs uppercase tracking-widest mb-3">Recruiting Team</div>
                <div className="font-display text-lg mb-2">Inline edit, bespoke layout</div>
                <div className="text-sm opacity-60 leading-relaxed">Built their own table with custom row expansion and a bespoke editing panel</div>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="text-accent font-mono text-xs uppercase tracking-widest mb-3">Payroll Team</div>
                <div className="font-display text-lg mb-2">Bulk workflows, mass editing</div>
                <div className="text-sm opacity-60 leading-relaxed">High-value workflows requiring select-all, bulk actions, and complex state management</div>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="text-accent font-mono text-xs uppercase tracking-widest mb-3">Reporting Team</div>
                <div className="font-display text-lg mb-2">Analytics views, inline filters</div>
                <div className="text-sm opacity-60 leading-relaxed">Dense tables needing column configuration, export, and analytics-style interactions</div>
              </div>
            </div>
          </div>
        </section>


        {/* Solution */}
        <section className="py-20 border-t border-gray-200 bg-gray-50 -mx-8 px-8">
          <div className="text-[10px] tracking-widest uppercase font-mono opacity-50 mb-6">Solution</div>
          <h2 className="font-display text-4xl mb-8">A modular template system</h2>
          <p className="text-lg opacity-80 leading-relaxed mb-6">
            Instead of forcing 32 teams to adopt a single pattern, I built a flexible template system that teams could configure for their specific use cases while maintaining platform consistency.
          </p>
          <p className="text-lg opacity-80 leading-relaxed mb-12">
            Rather than prescribing a single "right way," I identified reusable building blocks that teams could combine. The goal: maximum flexibility within a consistent interaction model.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="text-sm font-medium mb-3 text-accent font-mono">01 Admin CRUD Template</div>
              <div className="font-display text-xl mb-4">Inline editing, full control</div>
              <div className="text-sm opacity-80 leading-relaxed mb-4">
                Click to edit cells, tab through fields, bulk select, row actions, keyboard navigation. For teams managing structured records with frequent edits.
              </div>
              <div className="text-xs font-mono opacity-40 uppercase tracking-widest">Edit inline · Bulk actions · Row menu · Keyboard nav</div>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="text-sm font-medium mb-3 text-accent font-mono">02 Employee CRUD Template</div>
              <div className="font-display text-lg mb-4">Form-based editing, guided flow</div>
              <div className="text-sm opacity-80 leading-relaxed mb-4">
                Row click opens a side panel for editing. Clean label-value interface with validation and autosaved state. One record at a time.
              </div>
              <div className="text-xs font-mono opacity-40 uppercase tracking-widest">Side panel · Form layout · Guided · Autosave</div>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="text-sm font-medium mb-3 text-accent font-mono">03 Density Options</div>
              <div className="font-display text-xl mb-4">Configurable row density</div>
              <div className="text-sm opacity-80 leading-relaxed mb-4">
                Compact, standard, comfortable. Teams configure defaults; users can adjust. Spacing tokens ensure all three feel intentional, not broken.
              </div>
              <div className="text-xs font-mono opacity-40 uppercase tracking-widest">3 density levels · User preference · Consistent spacing tokens</div>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="text-sm font-medium mb-3 text-accent font-mono">04 Filter Framework</div>
              <div className="font-display text-xl mb-4">Standardized filtering UI</div>
              <div className="text-sm opacity-80 leading-relaxed mb-4">
                20+ filter types (text, date range, multi-select, etc.) that teams configure without rebuilding the filter interaction model from scratch.
              </div>
              <div className="text-xs font-mono opacity-40 uppercase tracking-widest">20+ filter types · Saved filters · Clear applied state</div>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="text-sm font-medium mb-3 text-accent font-mono">05 Action Framework</div>
              <div className="font-display text-xl mb-4">Consistent table actions</div>
              <div className="text-sm opacity-80 leading-relaxed mb-4">
                Dayforce had 287 different toolbar action patterns across tables. One framework standardizes hierarchy: primary · secondary → bulk actions → row menu.
              </div>
              <div className="text-xs font-mono opacity-40 uppercase tracking-widest">Action hierarchy · 287 actions normalized · Bulk actions</div>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="text-sm font-medium mb-3 text-accent font-mono">06 Accessibility Foundation</div>
              <div className="font-display text-xl mb-4">WCAG 2.1 AA baked in</div>
              <div className="text-sm opacity-80 leading-relaxed mb-4">
                Keyboard navigation, focus management, ARIA grid patterns, screen reader announcements for row operations—all embedded in the template so teams can't accidentally ship inaccessible tables.
              </div>
              <div className="text-xs font-mono opacity-40 uppercase tracking-widest">Full keyboard nav · ARIA grid · Zero a11y defects post-launch</div>
            </div>
          </div>
        </section>

        {/* Template overview image */}

        {/* Key decisions */}
        <section className="py-20 border-t border-gray-200">
          <div className="text-[10px] tracking-widest uppercase font-mono opacity-50 mb-6">Key Decisions</div>
          <h3 className="font-display text-2xl mb-10">Why this approach worked</h3>

          <div className="space-y-8">
            <div className="border-l-2 border-accent pl-8">
              <div className="font-display text-xl mb-3">Configuration over code</div>
              <div className="text-base opacity-70 leading-relaxed">
                Team templates configure via props, not forking components. A single source of truth means that fixing a bug or improving a pattern propagates to all 32 surfaces simultaneously—not one team at a time.
              </div>
            </div>
            <div className="border-l-2 border-gray-200 pl-8">
              <div className="font-display text-xl mb-3">Two templates, not twenty</div>
              <div className="text-base opacity-70 leading-relaxed">
                I identified two core interaction models that covered 95% of use cases: inline editing for admin workflows, panel-based editing for record management. High-edge cases get through configuration, not custom builds.
              </div>
            </div>
            <div className="border-l-2 border-gray-200 pl-8">
              <div className="font-display text-xl mb-3">Frameworks, not features</div>
              <div className="text-base opacity-70 leading-relaxed">
                Instead of designing every possible filter or action, I built extension points. Teams plug in their specific data without rebuilding the interaction model. The pattern stays consistent even as content varies.
              </div>
            </div>
          </div>
        </section>

        {/* Eng collab image */}

        {/* Token detail */}
        <section className="py-20 border-t border-gray-200 bg-gray-50 -mx-8 px-8">
          <div className="text-[10px] tracking-widest uppercase font-mono opacity-50 mb-6">Token Architecture</div>
          <h3 className="font-display text-2xl mb-6">Tables as a token consumer</h3>
          <p className="text-lg opacity-80 leading-relaxed mb-8">
            Table 2.1 was designed as a first-class consumer of the Everest token system. Every spacing value, color, border, and typography style references a semantic token—not a hard-coded value. When the brand or theme changes, tables update automatically.
          </p>

        </section>

        {/* Visual comparison */}
        <section className="py-20 border-t border-gray-200">
          <div className="text-[10px] tracking-widest uppercase font-mono opacity-50 mb-6">Before / After</div>
          <h3 className="font-display text-2xl mb-8">One pattern, two personas, 3 contexts, scaled for every surface</h3>
        </section>


        {/* Impact */}
        <section className="py-20 border-t border-gray-200 bg-black text-white -mx-8 px-8">
          <div className="text-[10px] tracking-widest uppercase font-mono mb-8" style={{color: '#00a86b'}}>Impact</div>
          <h2 className="font-display text-4xl mb-16">Platform-wide standardization</h2>

          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div>
              <div className="text-5xl font-display mb-3">80%</div>
              <div className="text-sm opacity-60">Product surfaces using Table 2.1 template</div>
            </div>
            <div>
              <div className="text-5xl font-display mb-3">32</div>
              <div className="text-sm opacity-60">Fragmented implementations replaced by one pattern</div>
            </div>
            <div>
              <div className="text-5xl font-display mb-3">27.6K+</div>
              <div className="text-sm opacity-60">Weekly component insertions across the platform</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="text-sm font-mono opacity-40 uppercase tracking-widest mb-3">Consistency</div>
              <div className="text-lg opacity-80 leading-relaxed">
                Dayforce CRUD applied everywhere. Designers stopped rebuilding from scratch—teams ship new record management workflows in days, not weeks.
              </div>
            </div>
            <div>
              <div className="text-sm font-mono opacity-40 uppercase tracking-widest mb-3">Accessibility</div>
              <div className="text-lg opacity-80 leading-relaxed">
                Zero accessibility defects post-launch. WCAG-compliant behavior is baked into the template—teams get full keyboard navigation and screen reader support without extra work.
              </div>
            </div>
          </div>
        </section>

        {/* Next */}
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
