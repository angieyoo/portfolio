'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function RecordListTemplate() {
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
      {/* Navigation */}
      <nav className="border-b border-gray-200 sticky top-0 bg-white z-50">
        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
          <Link href="/" className="text-xs hover:opacity-50 transition font-mono">← Back</Link>
          <div className="text-xs opacity-30 font-mono">Platform Patterns · 2025-26</div>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-8">
        {/* Hero */}
        <section className="py-20">
          <div className="text-[10px] tracking-widest uppercase font-mono text-accent mb-6">Global Pattern · Everest Design System</div>
          <h1 className="font-display text-6xl leading-none mb-8">Record List Template</h1>
          <p className="text-xl opacity-60 leading-relaxed max-w-xl font-display">
            Standardizing CRUD workflows across 32 product teams—one template, two experiences
          </p>
        </section>

        {/* Problem */}
        <section className="py-20 border-t border-gray-200">
          <div className="text-[10px] tracking-widest uppercase font-mono opacity-50 mb-6">The Problem</div>
          <h2 className="font-display text-4xl mb-8">Every team building their own CRUD</h2>
          <div className="space-y-6 text-lg leading-relaxed opacity-80">
            <p>
              Dayforce is built around <strong>lists of records</strong>. Employee lists. Payroll entries. Time cards. Benefits enrollments. Every product area needed to Create, Read, Update, and Delete records.
            </p>
            <p>
              But each of the 32 teams had built their own patterns.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mt-12">
            <div className="border-l-2 border-red-400 pl-6 py-3">
              <div className="text-sm font-medium mb-1">Recruiting Team</div>
              <div className="text-sm opacity-60">Edit in modal dialogs</div>
            </div>
            <div className="border-l-2 border-red-400 pl-6 py-3">
              <div className="text-sm font-medium mb-1">Payroll Team</div>
              <div className="text-sm opacity-60">Inline editing in cells</div>
            </div>
            <div className="border-l-2 border-red-400 pl-6 py-3">
              <div className="text-sm font-medium mb-1">Time & Attendance</div>
              <div className="text-sm opacity-60">Separate edit pages</div>
            </div>
            <div className="border-l-2 border-red-400 pl-6 py-3">
              <div className="text-sm font-medium mb-1">Benefits Team</div>
              <div className="text-sm opacity-60">Side panel drawers</div>
            </div>
          </div>
        </section>

        {/* Solution */}
        <section className="py-20 border-t border-gray-200 bg-gray-50 -mx-8 px-8">
          <div className="text-[10px] tracking-widest uppercase font-mono opacity-50 mb-6">Solution</div>
          <h2 className="font-display text-4xl mb-8">One template, two experiences</h2>
          <p className="text-lg opacity-80 leading-relaxed mb-12">
            Instead of prescribing a single CRUD pattern, we recognized two distinct user archetypes and built the Record List Template to serve both.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="text-sm font-medium mb-3 text-accent font-mono">Employee Experience</div>
              <div className="font-display text-2xl mb-4">Side Panel Editing</div>
              <div className="text-sm opacity-60 leading-relaxed mb-6">
                For occasional users who need focus and clarity. View and edit one record at a time.
              </div>
              <div className="text-xs space-y-2 opacity-60 font-mono">
                <div>→ Click row to open side panel</div>
                <div>→ Form-based editing experience</div>
                <div>→ Clear labels, validation, guidance</div>
                <div>→ Save/Discard actions</div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="text-sm font-medium mb-3 text-accent font-mono">Admin Experience</div>
              <div className="font-display text-2xl mb-4">Inline Editing</div>
              <div className="text-sm opacity-60 leading-relaxed mb-6">
                For power users who need speed and efficiency. Edit multiple records without context switching.
              </div>
              <div className="text-xs space-y-2 opacity-60 font-mono">
                <div>→ Click cell to edit in place</div>
                <div>→ Tab through fields quickly</div>
                <div>→ Bulk actions and selection</div>
                <div>→ Row action menus</div>
              </div>
            </div>
          </div>
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
