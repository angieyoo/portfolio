'use client'

import Link from 'next/link'
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect, useCallback } from 'react'

// ─── Hero Slider ──────────────────────────────────────────────────────────────

const SLIDES = [
    { src: '/images/recruiting.svg', label: 'Recruiting', tag: '01' },
    { src: '/images/wfm.svg', label: 'Workforce Management', tag: '02' },
    { src: '/images/benefits.svg', label: 'Benefits', tag: '03' },
    { src: '/images/orgchart.svg', label: 'Org Chart', tag: '04' },
]

function HeroSlider() {
    const [current, setCurrent] = useState(0)
    const [direction, setDirection] = useState(1)
    const [paused, setPaused] = useState(false)

    const goTo = useCallback((idx: number) => {
        setDirection(idx > current ? 1 : -1)
        setCurrent(idx)
    }, [current])

    const prev = () => {
        const idx = (current - 1 + SLIDES.length) % SLIDES.length
        setDirection(-1)
        setCurrent(idx)
    }

    const next = () => {
        const idx = (current + 1) % SLIDES.length
        setDirection(1)
        setCurrent(idx)
    }

    useEffect(() => {
        if (paused) return
        const t = setTimeout(() => {
            setDirection(1)
            setCurrent(i => (i + 1) % SLIDES.length)
        }, 4000)
        return () => clearTimeout(t)
    }, [current, paused])

    const slide = SLIDES[current]

    return (
        <div
            className="w-full"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            <div className="relative w-full overflow-hidden rounded-lg border border-gray-200 bg-gray-50" style={{ aspectRatio: '1760/1024' }}>
                <AnimatePresence mode="wait" initial={false} custom={direction}>
                    <motion.div
                        key={current}
                        custom={direction}
                        variants={{
                            enter: (d: number) => ({ opacity: 0, x: d * 32 }),
                            center: { opacity: 1, x: 0 },
                            exit: (d: number) => ({ opacity: 0, x: d * -32 }),
                        }}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                        className="absolute inset-0"
                    >
                        <img src={slide.src} alt={slide.label} className="w-full h-full object-cover" />
                    </motion.div>
                </AnimatePresence>

                <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 flex items-center justify-center hover:bg-white transition-all z-10 text-black" aria-label="Previous">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 2L4 7L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
                <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 flex items-center justify-center hover:bg-white transition-all z-10 text-black" aria-label="Next">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 2L10 7L5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
            </div>

            <div className="flex items-center justify-between mt-4 px-1">
                <div className="flex items-center gap-2">
                    {SLIDES.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => goTo(i)}
                            className={`rounded-full transition-all ${i === current ? 'w-4 h-1.5 bg-black' : 'w-1.5 h-1.5 bg-black/20 hover:bg-black/40'}`}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                    <div className="ml-3 w-20 h-px bg-gray-200 relative overflow-hidden rounded-full">
                        {!paused && (
                            <motion.div
                                key={current}
                                className="absolute left-0 top-0 h-full bg-black"
                                initial={{ width: '0%' }}
                                animate={{ width: '100%' }}
                                transition={{ duration: 4, ease: 'linear' }}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

// ─── Zoomable Image ───────────────────────────────────────────────────────────

function ZoomableImage({ src, alt }: { src: string; alt: string }) {
    const [open, setOpen] = useState(false)
    return (
        <>
            <div className="w-full border border-gray-200 rounded-lg overflow-hidden cursor-zoom-in bg-white" onClick={() => setOpen(true)}>
                <img src={src} alt={alt} className="w-full" />
                <div className="px-4 py-2 border-t border-gray-100">
                    <span className="text-xs font-mono opacity-30 uppercase tracking-widest">Click to enlarge</span>
                </div>
            </div>
            {open && (
                <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6 cursor-zoom-out" onClick={() => setOpen(false)}>
                    <img src={src} alt={alt} className="rounded-lg max-w-[95vw] max-h-[95vh] object-contain" />
                </div>
            )}
        </>
    )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function DayforceRedesign() {
    return (
        <main className="min-h-screen bg-white">

            {/* Nav */}
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
                        <span className="text-sm font-body tracking-wider text-text">Cross-Product Redesign</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-sm font-body tracking-wider text-text">Dayforce HCM</span>
                    </div>
                </div>
            </motion.nav>

            <div className="max-w-5xl mx-auto px-8">

                {/* ═══════════ HERO ═══════════ */}
                <section className="pt-32 pb-12">
                    <div className="text-[10px] tracking-widest uppercase font-mono text-accent mb-6">Horizontal Design Leadership · Enterprise HCM</div>
                    <h1 className="font-display text-6xl leading-none mb-8">
                        A product without<br />design architecture.
                    </h1>
                    <p className="text-xl opacity-80 leading-relaxed max-w-5xl font-display mb-12">
                        Dayforce grew module-by-module — 8 product areas, each built independently, no shared patterns. I stepped in as the platform's horizontal design leader to define the navigation architecture and interaction contracts that would unify the entire product.
                    </p>
                    <HeroSlider />
                </section>

                {/* ═══════════ META ═══════════ */}
                <section className="py-12 border-b border-gray-200">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div>
                            <div className="text-[10px] tracking-widest uppercase font-mono opacity-40 mb-2">Role</div>
                            <div className="text-sm font-body">Horizontal Design Lead</div>
                        </div>
                        <div>
                            <div className="text-[10px] tracking-widest uppercase font-mono opacity-40 mb-2">Scope</div>
                            <div className="text-sm font-body">8 product areas — benefits, docs,<br />org chart, WFM, onboarding,<br />profile, forms, cases</div>
                        </div>
                        <div>
                            <div className="text-[10px] tracking-widest uppercase font-mono opacity-40 mb-2">Focus</div>
                            <div className="text-sm font-body">IA, Navigation, Interaction<br />Design, Design Systems</div>
                        </div>
                        <div>
                            <div className="text-[10px] tracking-widest uppercase font-mono opacity-40 mb-2">Platform</div>
                            <div className="text-sm font-body">Web</div>
                        </div>
                    </div>
                </section>

                {/* ═══════════ CONTEXT ═══════════ */}
                <section className="py-20 border-t border-gray-200">
                    <div className="text-[10px] tracking-widest uppercase font-mono opacity-50 mb-6">Context</div>
                    <h2 className="font-display text-4xl mb-8">The same action, five different implementations</h2>
                    <p className="text-lg opacity-80 leading-relaxed mb-6">
                        Dayforce grew through acquisition and parallel team expansion. Each of the 8 product areas built its own navigation, record management, and page layouts. Filtering records in Benefits was a completely different interaction than filtering in Workforce Management — not because users needed it to be, but because no one had defined the shared architecture. <strong>32 teams were compounding the divergence every sprint.</strong>
                    </p>
                    <div className="border-l-2 border-accent pl-6 py-1 mt-8">
                        <div className="text-[12px] tracking-widest uppercase font-mono text-accent mb-2">My Bet</div>
                        <div className="text-lg opacity-80 leading-relaxed">
                            Work horizontally across all 8 product areas simultaneously — not embedded in one module. The risk was spreading too thin. The bet: solving shared structural problems once would be exponentially more valuable than optimizing any single surface.
                        </div>
                    </div>
                </section>

                {/* ═══════════ APPROACH 1 — WAYFINDING ═══════════ */}
                <section className="py-20 border-t border-gray-200 bg-gray-50 -mx-8 px-8">
                    <div className="text-[10px] tracking-widest uppercase font-mono opacity-50 mb-6">Design Approach 1 · Wayfinding</div>
                    <h2 className="font-display text-4xl mb-4">One navigation architecture for all product areas</h2>
                    <p className="text-lg opacity-80 leading-relaxed mb-12">
                        Three patterns became the architectural foundation — each designed for coherence to real user journeys, not org charts.
                    </p>

                    {/* Feature Navigation */}
                    <div className="bg-white p-8 rounded-lg border border-gray-200 mb-6">
                        <div className="text-sm font-medium mb-3 text-accent font-mono">FRAMEWORK: NAVIGATION</div>
                        <div className="font-display text-2xl mb-4">Feature Navigation</div>
                        <div className="text-lg opacity-80 leading-relaxed mb-2">
                            6 levels of nested menus. Flattening would overload the top-level; keeping them meant users stayed lost.
                        </div>
                        <div className="border-l-2 border-accent pl-5 py-1 my-6">
                            <div className="text-[10px] tracking-widest uppercase font-mono text-accent mb-1">Decision</div>
                            <div className="text-lg opacity-80 leading-relaxed">
                                Restructure around user tasks, not product modules. "Time-off requests" now lives under the employee workflow — not the WFM admin tree where engineering built it.
                            </div>
                        </div>
                        <img src="/images/featurenav.svg" alt="Feature Nav" className="mx-auto block" />
                    </div>

                    {/* Omnibar */}
                    <div className="bg-white p-8 rounded-lg border border-gray-200 mb-6">
                        <div className="text-sm font-medium mb-3 text-accent font-mono">PAGE-LEVEL ACTIONS & WAYFINDING</div>
                        <div className="font-display text-2xl mb-4">Omnibar</div>
                        <div className="text-lg opacity-80 leading-relaxed mb-6">
                            Page title, actions, and breadcrumbs in one component. Replaced three team-specific implementations with one.
                        </div>
                        <img src="/images/omnibar.svg" alt="Omnibar" />
                    </div>

                    {/* Dashboard Layout */}
                    <div className="bg-white p-8 rounded-lg border border-gray-200">
                        <div className="text-sm font-medium mb-3 text-accent font-mono">LANDING PAGES</div>
                        <div className="font-display text-2xl mb-4">Dashboard Page Layout Pattern</div>
                        <div className="text-lg opacity-80 leading-relaxed mb-6">
                            Three-tier container taxonomy — grounding orientation, aggregated action items, clear path to detail. Teams control <em>what</em> they surface; the <em>how</em> is a solved problem.
                        </div>
                        <img src="/images/benefits.svg" alt="Dashboard Page Layout Template" />
                    </div>
                </section>

                {/* ═══════════ APPROACH 2 — RECORD MANAGEMENT ═══════════ */}
                    <section className="mt-20 py-20 border-t border-gray-200 bg-gray-50 -mx-8 px-8">
                    <div className="text-[10px] tracking-widest uppercase font-mono opacity-50 mb-6">Design Approach 2 · Record Management</div>
                    <h2 className="font-display text-4xl mb-4">Record management system that scales</h2>
                    <p className="text-lg opacity-80 leading-relaxed mb-12">
                        80% of Dayforce is data tables. Without a shared template, 32 teams built countless different configurations — the highest-leverage problem to solve.
                    </p>

                    {/* Record List */}
                    <div className="bg-white p-8 rounded-lg border border-gray-200 mb-6">
                        <div className="text-sm font-medium mb-3 text-accent font-mono">COMMON LAYOUT</div>
                        <div className="font-display text-2xl mb-4">Record List Page Layout Template</div>
                        <div className="text-lg opacity-80 leading-relaxed mb-2">
                            Teams needed domain flexibility; users needed cross-domain consistency.
                        </div>
                        <div className="border-l-2 border-accent pl-5 py-1 my-6">
                            <div className="text-[10px] tracking-widest uppercase font-mono text-accent mb-1">Decision</div>
                            <div className="text-lg opacity-80 leading-relaxed">
                                Composable template: fixed zones (header, filter bar, table, detail panel) with flexible slots. Teams configure domain content; the interaction contract — filtering, selection, bulk actions — is inherited. Design system as <strong>interaction architecture</strong>, not just component library.
                            </div>
                        </div>
                        <img src="/images/recordlist.svg" alt="Record List" className="mx-auto block" />
                    </div>

                    {/* Persona Variations */}
                    <div className="bg-white p-8 rounded-lg border border-gray-200">
                        <div className="text-sm font-medium mb-3 text-accent font-mono">DIFFERENT PERSONAS, DIFFERENT NEEDS</div>
                        <div className="font-display text-2xl mb-4">Persona-driven Variations</div>
                        <div className="text-lg opacity-80 leading-relaxed mb-6">
                            Two interaction modes from the same template: <strong>Admin views</strong> optimize for density and inline editing. <strong>Employee views</strong> optimize for clarity via side-panel editing. Every team inherits both.
                        </div>
                        <div className="mb-2">
                           
                            <img src="/images/admin-table.svg" alt="Table CRUD - Admin Persona" />
                             <div className="text-xs font-mono opacity-50 mb-2">ADMIN / POWER USER — Inline-editable, high density</div>
                        </div>
                        <div className="mt-8">
                           
                            <img src="/images/employee-table.svg" alt="Table CRUD - Employee Persona" />
                             <div className="text-xs font-mono opacity-50 mb-2">EMPLOYEE — Side panel, focused editing</div>
                        </div>
                    </div>
                </section>

                {/* ═══════════ IMPACT ═══════════ */}
                <section className="mt-20 py-20 border-t border-gray-200 bg-black text-white -mx-8 px-8">
                    <div className="text-[10px] tracking-widest uppercase font-mono mb-8" style={{ color: '#00a86b' }}>Impact</div>
                    <h2 className="font-display text-4xl mb-16">A platform that feels like one product</h2>

                    <div className="grid md:grid-cols-3 gap-12 mb-16">
                        <div>
                            <div className="text-5xl font-display mb-3">8</div>
                            <div className="text-sm opacity-60">Product areas modernized</div>
                        </div>
                        <div>
                            <div className="text-5xl font-display mb-3">32</div>
                            <div className="text-sm opacity-60">Teams adopted the patterns — including teams I never directly worked with</div>
                        </div>
                        <div>
                            <div className="text-5xl font-display mb-3">5 mo</div>
                            <div className="text-sm opacity-60">To ship all 8 areas. Each surface faster than the last.</div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <div className="text-sm font-mono opacity-40 uppercase tracking-widest mb-3">Before</div>
                            <div className="text-base opacity-70 leading-relaxed">Each product area designed independently. Same problems solved five different ways. Pattern debt compounding every sprint.</div>
                        </div>
                        <div>
                            <div className="text-sm font-mono opacity-40 uppercase tracking-widest mb-3">After</div>
                            <div className="text-base opacity-70 leading-relaxed">Interaction contracts that transfer across surfaces. Users who learn filtering in Benefits already know filtering in WFM. New features inherit architecture instead of reinventing it.</div>
                        </div>
                    </div>
                </section>

                {/* ═══════════ REFLECTION ═══════════ */}
                <section className="py-20 border-t border-gray-200">
                    <div className="text-[10px] tracking-widest uppercase font-mono opacity-50 mb-6">Reflection</div>
                    <h2 className="font-display text-4xl mb-8">What I'd do differently</h2>
                    <p className="text-lg opacity-80 leading-relaxed mb-6">
                        The hardest part was organizational alignment, not design. The breakthrough: <strong>find the 80% that's genuinely common, make it undeniable through evidence</strong>, then give teams real control over the 20% that's legitimately different. Shared research synthesis earlier — bringing researchers from different modules into the same room — would have accelerated this by months.
                    </p>
                    <p className="text-lg opacity-80 leading-relaxed">
                        You can't mandate quality from above. The patterns succeeded because teams <em>wanted</em> to use them — they were sharper and faster than building from scratch. That's the only kind of scale that holds.
                    </p>
                </section>

                {/* ═══════════ NEXT ═══════════ */}
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
