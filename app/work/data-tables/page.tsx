'use client'

import { motion, useReducedMotion } from "framer-motion"
import { useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function DataTables() {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const updatePosition = (clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100))
    setSliderPosition(percent)
  }

  const handleMouseDown = () => setIsDragging(true)
  const handleMouseUp = () => setIsDragging(false)
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return
    updatePosition(e.clientX)
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    updatePosition(e.touches[0].clientX)
  }

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    updatePosition(e.clientX)
  }

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
            {/*<span className="w-2 h-2 rounded-full bg-accent"></span>*/}
            <span className="text-sm font-body tracking-wider text-text">Platform Patterns</span>
          </div>
        </div>
      </motion.nav>




      <div className="max-w-5xl mx-auto px-8">
        {/* Hero */}
        <section className="py-20">
          <div className="text-[10px] tracking-widest uppercase font-mono text-accent mb-6">Platform Patterns</div>
          <h1 className="font-display text-6xl leading-none mb-8">Data Tables</h1>
          <p className="text-xl opacity-70 leading-relaxed max-w-xl font-display">
            Standardizing CRUD (Create, Read, Update, Delete) workflows & Table Actions across 32 product teams
          </p>
        </section>

        {/* Problem */}
        <section className="py-20 border-t border-gray-200">
          <div className="text-[10px] tracking-widest uppercase font-mono opacity-50 mb-6">The Problem</div>
          <h2 className="font-display text-4xl mb-8">Dayforce is fundamentally a system of records.</h2>
          <div className="space-y-6 text-lg leading-relaxed opacity-80">
            <p>
              Nearly 80% of Dayforce surfaces depended on data tables to create, view, and manage records.
            </p>
            <p>
              However, each of the 32 product teams implemented its own interaction patterns, behaviors, and editing models.
            </p>
            <p>
              To users, tables felt unpredictable — each one introducing a new way of working.            
            </p>
          </div>

      
          <div className="mt-10 text-xs uppercase tracking-wide opacity-50">
            Fragmentation surfaced differently across teams
          </div>

          <motion.div 
            className="grid md:grid-cols-2 gap-6 mt-5"
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.2,
                }
              }
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {[
              { title: "Recruiting Team", desc: "22 table actions & bespoke layouts" },
              { title: "Payroll Team", desc: "High-risk workflows & heavy error handling" },
              { title: "Reporting", desc: "Nested hierarchies, pivots & inline editing" },
              { title: "Workforce Management", desc: "Mobile-first scheduling & editing workflows" }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="border-l-2 border-red-400 pl-6 py-4"
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  show: { opacity: 1, x: 0 }
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
              >
                <div className="text-sm font-medium mb-1">{item.title}</div>
                <div className="text-sm opacity-60">{item.desc}</div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Solution */}
        <section className="py-20 border-t border-gray-200">
          <div className="text-[10px] tracking-widest uppercase font-mono opacity-50 mb-6">Solution</div>
          <h2 className="font-display text-4xl mb-8">A modular template system</h2>
          <p className="text-lg opacity-80 leading-relaxed mb-16">
            Instead of forcing 32 teams to adopt a single pattern, I built a flexible template system that teams could configure for their specific use cases while maintaining platform consistency.
          </p>

          {/* Approach */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-sm font-mono tracking-wider uppercase opacity-50 mb-4">Approach</h3>
            <div className="space-y-4 text-base opacity-80 leading-relaxed">
              <p>
                I audited existing implementations across all 32 teams to identify common patterns and divergence points. The fragmentation wasn't random—teams had legitimate reasons for their custom solutions.
              </p>
              <p>
                Rather than prescribing a single "right way," I extracted reusable building blocks that teams could combine and configure. The goal: reduce variance without eliminating necessary flexibility.
              </p>
            </div>
          </motion.div>

          {/* What I Designed */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-sm font-mono tracking-wider uppercase opacity-50 mb-6">What I Designed</h3>
            
            <div className="space-y-4">
              <motion.div 
                className="bg-gray-50 p-6 rounded-lg border border-gray-200"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="font-display text-xl mb-3">Admin CRUD Template</div>
                <div className="text-sm opacity-60 leading-relaxed mb-4">
                  Inline editing for power users. Click cells to edit in place, tab through fields, bulk select and act on multiple records without leaving the table.
                </div>
                <div className="text-xs opacity-40 font-mono">Cell editing • Bulk actions • Row menus • Keyboard navigation</div>
              </motion.div>

              <motion.div 
                className="bg-gray-50 p-6 rounded-lg border border-gray-200"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="font-display text-xl mb-3">Employee CRUD Template</div>
                <div className="text-sm opacity-60 leading-relaxed mb-4">
                  Side panel editing for occasional users. Form-based interface with clear labels, validation, and save/discard actions. One record at a time.
                </div>
                <div className="text-xs opacity-40 font-mono">Side panel • Form layout • Clear CTAs • Guided workflow</div>
              </motion.div>

              <motion.div 
                className="bg-gray-50 p-6 rounded-lg border border-gray-200"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="font-display text-xl mb-3">Density Options</div>
                <div className="text-sm opacity-60 leading-relaxed mb-4">
                  Configurable row heights (compact, standard, comfortable) allowing teams to optimize for information density vs readability based on their use case.
                </div>
                <div className="text-xs opacity-40 font-mono">3 density levels • User preference • Consistent spacing tokens</div>
              </motion.div>

              <motion.div 
                className="bg-gray-50 p-6 rounded-lg border border-gray-200"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="font-display text-xl mb-3">Filter Framework</div>
                <div className="text-sm opacity-60 leading-relaxed mb-4">
                  Standardized filtering UI with 15+ filter types (text, date range, multi-select, etc). Teams configure which filters to expose without rebuilding the interaction model.
                </div>
                <div className="text-xs opacity-40 font-mono">15+ filter types • Saved filters • Clear applied state</div>
              </motion.div>

              <motion.div 
                className="bg-gray-50 p-6 rounded-lg border border-gray-200"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="font-display text-xl mb-3">Actions Framework</div>
                <div className="text-sm opacity-60 leading-relaxed mb-4">
                  Dayforce had 107 different toolbar actions scattered across tables. I created a spatial framework that defines what goes where—so users experience consistent interaction patterns regardless of which table they're using.
                </div>
                <div className="text-xs opacity-40 font-mono">Spatial hierarchy • 107 actions organized • Row + bulk operations</div>
              </motion.div>
            </div>

            {/* Actions Framework Visual */}
            <motion.div 
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-xs uppercase tracking-wide opacity-40 mb-4 font-mono">
                Table Actions Anatomy
              </div>
              <div className="bg-gray-100 p-4 rounded-lg border border-gray-200">
                <Image 
                  src="/images/actions-framework.png"
                  alt="Table actions framework showing spatial organization of 107 actions"
                  width={1400}
                  height={280}
                  className="w-full h-auto rounded"
                />
              </div>
              <p className="text-xs opacity-40 mt-3 italic">
                Spatial framework organizing 107 toolbar actions into consistent zones across all Dayforce tables
              </p>
            </motion.div>
          </motion.div>

          {/* Key Decisions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-sm font-mono tracking-wider uppercase opacity-50 mb-6">Key Decisions</h3>
            
            <div className="space-y-6">
              <motion.div 
                className="border-l-4 border-accent pl-6 py-2"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-base font-medium mb-2">Configuration over code</div>
                <div className="text-sm opacity-60 leading-relaxed">
                  Teams configure templates via props rather than forking components. A single source of truth means fixes and improvements propagate automatically across all instances.
                </div>
              </motion.div>

              <motion.div 
                className="border-l-4 border-accent pl-6 py-2"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-base font-medium mb-2">Two templates, not twenty</div>
                <div className="text-sm opacity-60 leading-relaxed">
                  Rather than creating templates for every product area, I identified two core interaction models (admin vs employee) that covered 95% of use cases. Edge cases get handled through configuration, not new templates.
                </div>
              </motion.div>

              <motion.div 
                className="border-l-4 border-accent pl-6 py-2"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-base font-medium mb-2">Frameworks, not features</div>
                <div className="text-sm opacity-60 leading-relaxed">
                  Instead of designing every possible filter or action, I built systems that let teams plug in their own. The pattern stays consistent even as implementations vary.
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Visual Comparison */}
        <section className="py-20">
          <div className="text-[10px] tracking-widest uppercase font-mono opacity-50 mb-8 text-center">Visual Comparison</div>
          <div 
            ref={containerRef}
            className="relative aspect-video bg-white rounded overflow-hidden shadow-lg cursor-ew-resize select-none"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseUp}
            onTouchMove={handleTouchMove}
            onClick={handleClick}
          >
            {/* Employee (Side Panel) */}
            <div className="absolute inset-0 bg-white">
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="text-center max-w-md">
                  <div className="text-xs uppercase tracking-wider mb-3 opacity-40 font-mono">Employee Version</div>
                  <div className="text-lg opacity-60 leading-relaxed">
                    Side panel slides in. Form-based editing. Clear save/discard actions. Focused experience for occasional users.
                  </div>
                </div>
              </div>
            </div>
            
            {/* Admin (Inline) */}
            <div 
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <div className="absolute inset-0 bg-white flex items-center justify-center p-8">
                <div className="text-center max-w-md">
                  <div className="text-xs uppercase tracking-wider mb-3 text-accent font-mono">Admin Version</div>
                  <div className="text-lg opacity-60 leading-relaxed">
                    Click to edit cells. Tab through fields. Row actions. Bulk operations. Speed-optimized for power users.
                  </div>
                </div>
              </div>
            </div>
            
            {/* Slider Handle */}
            <div 
              className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg pointer-events-none"
              style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 bg-white rounded-full shadow-lg flex items-center justify-center text-xl">
                ⟷
              </div>
            </div>
          </div>
          <p className="text-center text-xs opacity-30 mt-4 font-mono">← Employee (Side Panel) | Admin (Inline) →</p>
        </section>

        {/* Impact */}
        <section className="py-20 border-t border-gray-200 bg-black text-white -mx-8 px-8">
          <div className="text-[10px] tracking-widest uppercase font-mono mb-8" style={{color: '#00a86b'}}>Impact</div>
          <h2 className="font-display text-4xl mb-16">Platform-wide standardization</h2>
          
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div>
              <div className="text-5xl font-display mb-3">80%</div>
              <div className="text-sm opacity-60">Product surfaces using template</div>
            </div>
            <div>
              <div className="text-5xl font-display mb-3">32</div>
              <div className="text-sm opacity-60">Teams standardized on pattern</div>
            </div>
            <div>
              <div className="text-5xl font-display mb-3">27.6K+</div>
              <div className="text-sm opacity-60">Weekly component insertions</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-l-2 pl-6" style={{borderColor: '#00a86b'}}>
              <div className="text-sm mb-2 opacity-60">Consistency</div>
              <div className="opacity-90">Users learned CRUD once, applied everywhere. No more relearning patterns per product.</div>
            </div>
            <div className="border-l-2 pl-6" style={{borderColor: '#00a86b'}}>
              <div className="text-sm mb-2 opacity-60">Efficiency</div>
              <div className="opacity-90">Teams ship CRUD in days, not weeks. No rebuilding flows from scratch.</div>
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
