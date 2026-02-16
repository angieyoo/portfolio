'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState, useRef } from 'react'

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

  const handleMouseDown = () => {
    setIsDragging(true)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

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
    <main className="min-h-screen bg-white text-text">
      {/* Navigation */}
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
            <span className="text-sm font-body tracking-wider text-text">DATA TABLES</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-accent"></span>
            <span className="text-sm font-body tracking-wider text-text">2025-6</span>
          </div>
        </div>
      </motion.nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm font-body text-accent tracking-wider mb-6">PLATFORM PATTERNS</p>
            <h1 className="font-display text-6xl md:text-8xl mb-8 leading-tight">
              Data Tables
            </h1>
            <p className="text-xl md:text-2xl font-display text-muted max-w-3xl">
              Designing platform-wide Table component establishing consistent patterns for data-dense interfaces across 80% of product surfaces
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-12 mt-16 pt-16 border-t border-text/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div>
              <h3 className="text-sm font-body tracking-wider text-muted mb-3">ROLE</h3>
              <p className="font-display text-lg">Lead Product Designer</p>
            </div>
            <div>
              <h3 className="text-sm font-body tracking-wider text-muted mb-3">TIMELINE</h3>
              <p className="font-display text-lg">2025 — 2026</p>
            </div>
            <div>
              <h3 className="text-sm font-body tracking-wider text-muted mb-3">IMPACT</h3>
              <p className="font-display text-lg">80% product adoption</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Context */}
      <section className="py-20 px-8 border-t border-text/10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl italic mb-12">Context</h2>
            <div className="grid md:grid-cols-12 gap-12">
              <div className="md:col-span-8">
                <p className="text-lg leading-relaxed mb-6">
                  Dayforce's enterprise HCM platform serves millions of users managing complex, data-dense workflows. Tables are the primary interface for most critical tasks—from payroll processing to workforce scheduling.
                </p>
                <p className="text-lg leading-relaxed text-muted">
                  However, each product area had built their own table implementations, leading to inconsistent behaviors, accessibility gaps, and duplicated engineering effort.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-20 px-8 border-t border-text/10 bg-white/30">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl italic mb-12">Challenge</h2>
            <div className="space-y-8">
              <div className="p-6 border-l-2 border-accent">
                <h3 className="font-display text-xl mb-3">Fragmented Patterns</h3>
                <p className="text-muted leading-relaxed">
                  32 product teams had built their own table solutions with varying interaction models, keyboard navigation, and accessibility support
                </p>
              </div>
              <div className="p-6 border-l-2 border-accent">
                <h3 className="font-display text-xl mb-3">Complex Requirements</h3>
                <p className="text-muted leading-relaxed">
                  Tables needed to support sorting, filtering, inline editing, bulk actions, responsive behavior, and advanced accessibility—all while feeling lightweight
                </p>
              </div>
              <div className="p-6 border-l-2 border-accent">
                <h3 className="font-display text-xl mb-3">Enterprise Scale</h3>
                <p className="text-muted leading-relaxed">
                  Solution had to work across vastly different use cases: from 10-row employee lists to 10,000-row payroll datasets
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20 px-8 border-t border-text/10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl italic mb-12">Approach</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-display text-2xl mb-4">Token-Driven Foundation</h3>
                <p className="text-muted leading-relaxed mb-6">
                  Built Table 2.1 on top of Everest design system's token architecture, ensuring visual consistency and enabling themes to propagate automatically
                </p>
              </div>
              <div>
                <h3 className="font-display text-2xl mb-4">Accessible by Default</h3>
                <p className="text-muted leading-relaxed mb-6">
                  Implemented ARIA grid patterns, keyboard navigation, and screen reader support as core features—not add-ons
                </p>
              </div>
              <div>
                <h3 className="font-display text-2xl mb-4">Modular Composition</h3>
                <p className="text-muted leading-relaxed mb-6">
                  Designed component API to support simple use cases easily while allowing teams to compose complex behaviors when needed
                </p>
              </div>
              <div>
                <h3 className="font-display text-2xl mb-4">Engineering Partnership</h3>
                <p className="text-muted leading-relaxed mb-6">
                  Worked directly with Staff-level architects to ensure patterns were structurally sound, implementation-ready, and scalable
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Before/After */}
      <section className="py-20 px-8 border-t border-text/10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl italic mb-12">Before & After</h2>
            
            {/* Image Comparison Slider */}
            <div 
              ref={containerRef}
              className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden group cursor-ew-resize select-none"
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseUp}
              onTouchMove={handleTouchMove}
              onClick={handleClick}
            >
              {/* Before Image */}
              <div className="absolute inset-0">
                <img 
                  src="/images/table-before.png" 
                  alt="Before: Fragmented table implementations" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded text-sm font-body">
                  BEFORE
                </div>
              </div>
              
              {/* After Image - controlled by slider */}
              <div 
                className="absolute inset-0 overflow-hidden transition-none pointer-events-none"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <img 
                  src="/images/table-after.png" 
                  alt="After: Unified Table 2.1 Pattern" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded text-sm font-body">
                  AFTER
                </div>
              </div>
              
              {/* Slider Handle */}
              <div 
                className="absolute top-0 bottom-0 w-1 bg-white shadow-lg pointer-events-none"
                style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                  </svg>
                </div>
              </div>
            </div>
            
            <p className="text-sm text-center text-muted mt-6 font-body">
              Drag the slider to compare fragmented implementations vs. unified Table 2.1 pattern
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-20 px-8 border-t border-text/10 bg-white/30">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl italic mb-12">Impact</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 border border-text/10 rounded-lg">
                <div className="text-5xl font-display text-accent mb-4">80%</div>
                <p className="text-sm font-body tracking-wider">Product Surface Adoption</p>
              </div>
              <div className="text-center p-8 border border-text/10 rounded-lg">
                <div className="text-5xl font-display text-accent mb-4">32</div>
                <p className="text-sm font-body tracking-wider">Teams Using Component</p>
              </div>
              <div className="text-center p-8 border border-text/10 rounded-lg">
                <div className="text-5xl font-display text-accent mb-4">27.6K+</div>
                <p className="text-sm font-body tracking-wider">Weekly Insertions</p>
              </div>
            </div>
            <div className="mt-12 p-8 bg-white rounded-lg">
              <p className="text-lg leading-relaxed">
                Table 2.1 became the foundation for data-dense interfaces across Dayforce, eliminating thousands of hours of duplicated engineering work and establishing consistent, accessible patterns that users now expect throughout the platform.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Next Project */}
      <section className="py-20 px-8 border-t border-text/10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Link href="/work/notification-framework" className="group inline-block">
              <p className="text-sm font-body text-muted tracking-wider mb-4">NEXT PROJECT</p>
              <h3 className="font-display text-5xl group-hover:italic transition-all">
                Notification Framework →
              </h3>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 border-t border-text/10">
        <div className="max-w-5xl mx-auto flex justify-between items-center text-sm font-body text-muted">
          <Link href="/" className="hover:text-text transition-colors">← Back to Home</Link>
          <p>© 2026 Angie Yoo</p>
        </div>
      </footer>
    </main>
  )
}
