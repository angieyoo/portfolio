'use client'

import Link from 'next/link'
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect, useCallback } from 'react'

// ─── Hero Slider ──────────────────────────────────────────────────────────────

const SLIDES = [
    {
        src: '/images/recruiting.svg',
        label: 'Recruiting',
        tag: '01',
        caption: 'Requisition-first pipeline with action-required state surfacing',
    },
    {
        src: '/images/wfm.svg',
        label: 'Workforce Management',
        tag: '02',
        caption: 'Progressive disclosure schedule view with exception tray',
    },
    {
        src: '/images/benefits.svg',
        label: 'Benefits',
        tag: '03',
        caption: 'Employee-decision-centered enrollment with plan comparison',
    },
    {
        src: '/images/orgchart.svg',
        label: 'Org Chart',
        tag: '04',
        caption: 'Hierarchical navigation pattern applied across HR surfaces',
    },
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

    // Auto-advance every 4s unless paused
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
            {/* Image viewport */}
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
                        <img
                            src={slide.src}
                            alt={slide.label}
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </AnimatePresence>

                {/* Prev / Next */}
                <button
                    onClick={prev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 flex items-center justify-center hover:bg-white transition-all z-10 text-black"
                    aria-label="Previous"
                >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M9 2L4 7L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
                <button
                    onClick={next}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 flex items-center justify-center hover:bg-white transition-all z-10 text-black"
                    aria-label="Next"
                >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M5 2L10 7L5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>

            {/* Caption + progress dots */}
            <div className="flex items-center justify-between mt-4 px-1">
                <p className="text-xs font-mono opacity-40 uppercase tracking-widest">{slide.caption}</p>
                <div className="flex items-center gap-2">
                    {SLIDES.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => goTo(i)}
                            className={`rounded-full transition-all ${i === current ? 'w-4 h-1.5 bg-black' : 'w-1.5 h-1.5 bg-black/20 hover:bg-black/40'}`}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                    {/* Progress bar */}
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
            <div
                className="w-full border border-gray-200 rounded-lg overflow-hidden cursor-zoom-in bg-white"
                onClick={() => setOpen(true)}
            >
                <div className="w-full bg-gray-100 flex items-center justify-center" style={{ minHeight: 320 }}>
                    <span className="text-xs font-mono opacity-30 uppercase tracking-widest">{alt}</span>
                </div>
                <div className="px-4 py-2 border-t border-gray-100">
                    <span className="text-xs font-mono opacity-30 uppercase tracking-widest">Click to enlarge</span>
                </div>
            </div>
            {open && (
                <div
                    className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6 cursor-zoom-out"
                    onClick={() => setOpen(false)}
                >
                    <div
                        className="rounded-lg bg-gray-800 flex items-center justify-center"
                        style={{ maxWidth: '95vw', maxHeight: '95vh', width: 900, height: 600 }}
                    >
                        <span className="text-white/30 font-mono text-sm uppercase tracking-widest">{alt}</span>
                    </div>
                </div>
            )}
        </>
    )
}

// ─── Placeholder ─────────────────────────────────────────────────────────────

function PlaceholderImage({ label, height = 320 }: { label: string; height?: number }) {
    return (
        <div
            className="w-full border border-gray-200 rounded-lg overflow-hidden bg-gray-50 flex items-center justify-center"
            style={{ minHeight: height }}
        >
            <span className="text-xs font-mono opacity-30 uppercase tracking-widest">{label}</span>
        </div>
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
                    <div className="flex items-center gap-3">
                        <Link href="/" className="text-sm font-body tracking-wider text-text hover:opacity-70 transition-opacity">ANGIE YOO</Link>
                        <span className="w-2 h-2 rounded-full bg-accent"></span>
                    </div>
                    <div className="flex gap-12 text-sm font-body tracking-wider text-text">
                        <Link href="/about" className="hover:opacity-70 transition-opacity">
                            <span className="text-accent">01</span> ABOUT
                        </Link>
                        <a href="/#works" className="hover:opacity-70 transition-opacity">
                            <span className="text-accent">02</span> WORKS
                        </a>
                        <a href="/#contact" className="hover:opacity-70 transition-opacity">
                            <span className="text-accent">03</span> CONTACT
                        </a>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-accent"></span>
                        <span className="text-sm font-body tracking-wider text-text">AVAILABLE FOR WORK</span>
                    </div>
                </div>
            </motion.nav>

            <div className="max-w-5xl mx-auto px-8">

                {/* ── Hero ── */}
                <section className="pt-32 pb-12">
                    <div className="text-[10px] tracking-widest uppercase font-mono text-accent mb-6">Product Design · HCM</div>
                    <h1 className="font-display text-6xl leading-none mb-8">Designing for Cross-Product Complexity</h1>
                    <p className="text-xl opacity-60 leading-relaxed max-w-xl font-display mb-12">
                        Reimagining an enterprise HCM platform — from fragmented workflows to a coherent, pattern-driven experience across Recruiting, Workforce Management, and Benefits
                    </p>

                    {/* Slider lives here in the hero */}
                    <HeroSlider />
                </section>

                {/* ── Meta strip ── */}
                <section className="py-12 border-b border-gray-200">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div>
                            <div className="text-[10px] tracking-widest uppercase font-mono opacity-40 mb-2">Role</div>
                            <div className="text-sm font-body">Principal Product Designer</div>
                        </div>
                        <div>
                            <div className="text-[10px] tracking-widest uppercase font-mono opacity-40 mb-2">Scope</div>
                            <div className="text-sm font-body">Recruiting · WFM · Benefits</div>
                        </div>
                        <div>
                            <div className="text-[10px] tracking-widest uppercase font-mono opacity-40 mb-2">Focus</div>
                            <div className="text-sm font-body">Patterns &amp; Platform Cohesion</div>
                        </div>
                        <div>
                            <div className="text-[10px] tracking-widest uppercase font-mono opacity-40 mb-2">Platform</div>
                            <div className="text-sm font-body">Web</div>
                        </div>
                    </div>
                </section>

                {/* ── Context ── */}
                <section className="py-20 border-t border-gray-200">
                    <div className="text-[10px] tracking-widest uppercase font-mono opacity-50 mb-6">Context</div>
                    <h2 className="font-display text-4xl mb-8">An enterprise product that grew sideways</h2>
                    <p className="text-lg opacity-80 leading-relaxed mb-6">
                        Dayforce started as a payroll engine and expanded aggressively — Recruiting, Workforce Management, Benefits, Learning, and more each added by separate teams over years. The result was a product that felt like a dozen applications wearing the same hat. Shared actions like filtering, managing records, or confirming changes looked and behaved differently depending on which module you were in, causing user friction.
                    </p>
                    <p className="text-lg opacity-80 leading-relaxed">
                        The redesign had two mandates: <strong>modernize the visual experience</strong> and <strong>impose cross-module design patterns</strong> so the platform could scale without compounding fragmentation.
                    </p>
                </section>

                {/* Context image */}
                <ZoomableImage
                    src="/images/dayforce-before-after.png"
                    alt="Before / After — Module Fragmentation"
                />

                {/* ── Pattern-first approach ── */}
                <section className="py-20 border-t border-gray-200 bg-gray-50 -mx-8 px-8">
                    <div className="text-[10px] tracking-widest uppercase font-mono opacity-50 mb-6">Design Approach</div>
                    <h2 className="font-display text-4xl mb-8">Patterns before pixels</h2>
                    <p className="text-lg opacity-80 leading-relaxed mb-12">
                        Rather than redesigning each module in isolation, I identified the common design challenges that appeared everywhere and solved them once. Four pattern families emerged as the backbone of the redesign.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-white p-8 rounded-lg border border-gray-200">
                            <div className="text-sm font-medium mb-3 text-accent font-mono">Filters</div>
                            <div className="font-display text-2xl mb-4">Universal record discovery</div>
                            <div className="text-sm opacity-80 leading-relaxed mb-4">
                                Every module has lists of records. We standardized filter chips, faceted search, and saved views so users could transfer skills across Recruiting candidates, WFM schedules, and Benefits enrollment in the same mental model.
                            </div>
                            <div className="text-xs font-mono opacity-40 uppercase tracking-widest">Recruiting · WFM · Benefits · Learning</div>
                        </div>

                        <div className="bg-white p-8 rounded-lg border border-gray-200">
                            <div className="text-sm font-medium mb-3 text-accent font-mono">Bulk Actions</div>
                            <div className="font-display text-2xl mb-4">Multi-record operations</div>
                            <div className="text-sm opacity-80 leading-relaxed mb-4">
                                Approving timesheets, advancing candidates, or enrolling employees in benefits all require selecting many records and acting on them. One consistent selection + action bar pattern replaced five different implementations.
                            </div>
                            <div className="text-xs font-mono opacity-40 uppercase tracking-widest">WFM · Recruiting · Benefits</div>
                        </div>

                        <div className="bg-white p-8 rounded-lg border border-gray-200">
                            <div className="text-sm font-medium mb-3 text-accent font-mono">Status &amp; State</div>
                            <div className="font-display text-2xl mb-4">Progress legibility</div>
                            <div className="text-sm opacity-80 leading-relaxed mb-4">
                                Candidates move through stages. Shifts get approved, swapped, or disputed. Benefits elections open, close, and pend. A unified status vocabulary — colors, labels, and icons encoded in semantic tokens — made state readable at a glance.
                            </div>
                            <div className="text-xs font-mono opacity-40 uppercase tracking-widest">Cross-module · Design System</div>
                        </div>

                        <div className="bg-white p-8 rounded-lg border border-gray-200">
                            <div className="text-sm font-medium mb-3 text-accent font-mono">Contextual Detail Panel</div>
                            <div className="font-display text-2xl mb-4">Inspect without leaving the list</div>
                            <div className="text-sm opacity-80 leading-relaxed mb-4">
                                HR professionals live in lists. A consistent slide-in detail panel — anchored to the right — let users review a candidate, timesheet, or benefit plan without losing their place in the larger dataset.
                            </div>
                            <div className="text-xs font-mono opacity-40 uppercase tracking-widest">Recruiting · WFM · Benefits</div>
                        </div>
                    </div>

                    <PlaceholderImage label="Cross-Module Pattern Reference Sheet" height={400} />
                </section>

                {/* ── Recruiting ── */}
                <section className="py-20 border-t border-gray-200">
                    <div className="text-[10px] tracking-widest uppercase font-mono opacity-50 mb-6">Module 01 — Recruiting</div>
                    <h2 className="font-display text-4xl mb-8">From pipeline chaos to candidate clarity</h2>
                    <p className="text-lg opacity-80 leading-relaxed mb-6">
                        Recruiters were managing dozens of open requisitions simultaneously, with candidates scattered across custom stages that varied by team. The old interface surfaced everything at once — notifications, tasks, pipelines — with no clear hierarchy of what needed attention.
                    </p>
                    <p className="text-lg opacity-80 leading-relaxed mb-12">
                        The redesign introduced a <strong>requisition-first navigation model</strong>: every action, every candidate, every task anchored to the job it belonged to. We added a task triage layer at the top of the pipeline that surfaced only items requiring action today, collapsing the rest.
                    </p>

                    <ZoomableImage
                        src="/images/recruiting.svg"
                        alt="Recruiting — Candidate Pipeline Redesign"
                    />

                    <div className="mt-12 grid md:grid-cols-3 gap-8">
                        <div>
                            <div className="text-[10px] tracking-widest uppercase font-mono opacity-40 mb-3">Challenge</div>
                            <p className="text-sm opacity-80 leading-relaxed">Recruiters couldn't tell which candidates needed action vs. which were just sitting in a stage awaiting external response.</p>
                        </div>
                        <div>
                            <div className="text-[10px] tracking-widest uppercase font-mono opacity-40 mb-3">Decision</div>
                            <p className="text-sm opacity-80 leading-relaxed">Introduced an "action required" state — visually distinct from passive in-stage candidates — with a persistent task count per requisition in the nav.</p>
                        </div>
                        <div>
                            <div className="text-[10px] tracking-widest uppercase font-mono opacity-40 mb-3">Outcome</div>
                            <p className="text-sm opacity-80 leading-relaxed">Recruiters reported dramatically less context switching. Average time-to-next-step on active candidates dropped measurably in pilot testing.</p>
                        </div>
                    </div>

                    <div className="mt-12">
                        <PlaceholderImage label="Recruiting — Interview Scheduling &amp; Offer Flow" height={280} />
                    </div>
                </section>

                {/* ── WFM ── */}
                <section className="py-20 border-t border-gray-200 bg-gray-50 -mx-8 px-8">
                    <div className="text-[10px] tracking-widest uppercase font-mono opacity-50 mb-6">Module 02 — Workforce Management</div>
                    <h2 className="font-display text-4xl mb-8">Making the schedule readable again</h2>
                    <p className="text-lg opacity-80 leading-relaxed mb-6">
                        WFM is the most complex module in Dayforce — schedule views, time &amp; attendance, leave management, and labor compliance all live here. The existing UI had evolved into a dense grid of cells and status flags that managers decoded through institutional memory rather than intuitive design.
                    </p>
                    <p className="text-lg opacity-80 leading-relaxed mb-12">
                        The core redesign question: <em>how do you make dense operational data legible without hiding it?</em> The answer was progressive disclosure — default to a clean, scannable schedule view with a clear visual hierarchy, and let managers drill into exceptions rather than surface them all at once.
                    </p>

                    <ZoomableImage
                        src="/images/wfm.svg"
                        alt="WFM — Schedule View Redesign"
                    />

                    <div className="mt-12 grid md:grid-cols-2 gap-12">
                        <div>
                            <div className="text-sm font-mono opacity-40 uppercase tracking-widest mb-4">Schedule Grid</div>
                            <p className="text-base opacity-80 leading-relaxed mb-4">
                                Shift blocks now encode role, duration, and status in a single compact chip. Color is semantic — tied to the same <code className="text-xs bg-gray-200 px-1 py-0.5 rounded font-mono">feedback.*</code> token family used across the platform — so a flagged shift in WFM reads the same as a flagged record anywhere else in Dayforce.
                            </p>
                            <PlaceholderImage label="Shift Chip Anatomy" height={180} />
                        </div>
                        <div>
                            <div className="text-sm font-mono opacity-40 uppercase tracking-widest mb-4">Exception Surface</div>
                            <p className="text-base opacity-80 leading-relaxed mb-4">
                                Instead of surfacing every overtime flag and missing punch inline, we consolidated exceptions into a dedicated exception tray — accessible from the schedule view but not competing with it for attention. Managers can triage exceptions in one sweep.
                            </p>
                            <PlaceholderImage label="Exception Tray — WFM" height={180} />
                        </div>
                    </div>

                    <div className="mt-12">
                        <PlaceholderImage label="WFM — Time &amp; Attendance Approval Flow" height={280} />
                    </div>
                </section>

                {/* ── Benefits ── */}
                <section className="py-20 border-t border-gray-200">
                    <div className="text-[10px] tracking-widest uppercase font-mono opacity-50 mb-6">Module 03 — Benefits</div>
                    <h2 className="font-display text-4xl mb-8">Benefits enrollment shouldn't feel like a tax form</h2>
                    <p className="text-lg opacity-80 leading-relaxed mb-6">
                        Open enrollment is one of the highest-stakes, highest-stress interactions an employee has with an HR system. The legacy Benefits UI presented walls of plan details, cryptic abbreviations, and multi-step wizards that employees abandoned partway through — creating compliance headaches for HR teams and incomplete coverage for employees.
                    </p>
                    <p className="text-lg opacity-80 leading-relaxed mb-12">
                        The redesign centered the <strong>employee decision</strong> rather than the plan structure. We organized choices around what employees actually need to know: what am I covered for, what does it cost me, and how does it compare to what I have now.
                    </p>

                    <ZoomableImage
                        src="/images/benefits.svg"
                        alt="Benefits — Open Enrollment Redesign"
                    />

                    <div className="mt-12 grid md:grid-cols-3 gap-8">
                        <div>
                            <div className="text-[10px] tracking-widest uppercase font-mono opacity-40 mb-3">Plan Comparison</div>
                            <p className="text-sm opacity-80 leading-relaxed">Side-by-side plan cards with plain-language summaries and a per-paycheck cost estimate foregrounded above plan-document links. The most relevant comparison criteria surfaced; the rest collapsed.</p>
                        </div>
                        <div>
                            <div className="text-[10px] tracking-widest uppercase font-mono opacity-40 mb-3">Enrollment Progress</div>
                            <p className="text-sm opacity-80 leading-relaxed">A persistent stepper showing all required elections and which are complete or pending — so employees know where they are in the process and HR can see completion rates in real time.</p>
                        </div>
                        <div>
                            <div className="text-[10px] tracking-widest uppercase font-mono opacity-40 mb-3">Dependent Management</div>
                            <p className="text-sm opacity-80 leading-relaxed">Streamlined dependent add/edit flow using the contextual detail panel pattern — no full-page navigation required, keeping the employee in the enrollment flow.</p>
                        </div>
                    </div>

                    <div className="mt-12">
                        <PlaceholderImage label="Benefits — Admin View: Enrollment Status Dashboard" height={280} />
                    </div>
                </section>

                {/* ── Pattern system ── */}
                <section className="py-20 border-t border-gray-200 bg-gray-50 -mx-8 px-8">
                    <div className="text-[10px] tracking-widest uppercase font-mono opacity-50 mb-6">Design System Contribution</div>
                    <h2 className="font-display text-4xl mb-8">Redesign as pattern library</h2>
                    <p className="text-lg opacity-80 leading-relaxed mb-12">
                        Every solution designed for one module was immediately evaluated for reusability. The redesign generated a library of documented, codified patterns — not just components but <em>interaction contracts</em> — so that future modules wouldn't need to reinvent the same UX problems.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-white p-8 rounded-lg border border-gray-200">
                            <div className="text-3xl font-display mb-3">12</div>
                            <div className="text-sm font-mono opacity-40 uppercase tracking-widest mb-2">New Patterns Documented</div>
                            <div className="text-sm opacity-70">Filter system, bulk action bar, status vocabulary, detail panel, enrollment stepper, exception tray, and more — each with usage guidelines, anatomy, and do/don't examples.</div>
                        </div>
                        <div className="bg-white p-8 rounded-lg border border-gray-200">
                            <div className="text-3xl font-display mb-3">3 → 1</div>
                            <div className="text-sm font-mono opacity-40 uppercase tracking-widest mb-2">Bulk Action Implementations</div>
                            <div className="text-sm opacity-70">WFM, Recruiting, and Benefits each had separate implementations for multi-select + bulk operations. Unified into a single, extensible component with module-specific actions injected as configuration.</div>
                        </div>
                        <div className="bg-white p-8 rounded-lg border border-gray-200">
                            <div className="text-3xl font-display mb-3">Semantic</div>
                            <div className="text-sm font-mono opacity-40 uppercase tracking-widest mb-2">Status Token System</div>
                            <div className="text-sm opacity-70">Status colors standardized to <code className="text-xs bg-gray-100 px-1 py-0.5 rounded font-mono">feedback.error</code>, <code className="text-xs bg-gray-100 px-1 py-0.5 rounded font-mono">feedback.warning</code>, <code className="text-xs bg-gray-100 px-1 py-0.5 rounded font-mono">feedback.success</code>, <code className="text-xs bg-gray-100 px-1 py-0.5 rounded font-mono">feedback.info</code> — the same tokens powering the Notification Framework.</div>
                        </div>
                        <div className="bg-white p-8 rounded-lg border border-gray-200">
                            <div className="text-3xl font-display mb-3">5 Teams</div>
                            <div className="text-sm font-mono opacity-40 uppercase tracking-widest mb-2">Adopted Patterns in Parallel</div>
                            <div className="text-sm opacity-70">Because patterns were documented as system contributions — not module-specific decisions — adjacent teams (Learning, Payroll, Analytics) adopted them without requiring redesign-team involvement.</div>
                        </div>
                    </div>

                    <ZoomableImage
                        src="/images/orgchart.svg"
                        alt="Org Chart — Hierarchical Navigation Pattern"
                    />
                </section>

                {/* ── Impact ── */}
                <section className="py-20 border-t border-gray-200 bg-black text-white -mx-8 px-8">
                    <div className="text-[10px] tracking-widest uppercase font-mono mb-8" style={{ color: '#00a86b' }}>Impact</div>
                    <h2 className="font-display text-4xl mb-16">A platform that feels like one product</h2>

                    <div className="grid md:grid-cols-3 gap-12 mb-16">
                        <div>
                            <div className="text-5xl font-display mb-3">12</div>
                            <div className="text-sm opacity-60">Reusable cross-module patterns created</div>
                        </div>
                        <div>
                            <div className="text-5xl font-display mb-3">3→1</div>
                            <div className="text-sm opacity-60">Bulk action implementations consolidated</div>
                        </div>
                        <div>
                            <div className="text-5xl font-display mb-3">↑NPS</div>
                            <div className="text-sm opacity-60">HR admin satisfaction improved in pilot cohort</div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <div className="text-sm font-mono opacity-40 uppercase tracking-widest mb-3">Before</div>
                            <div className="text-lg opacity-80 leading-relaxed">Each module designed independently. Common problems solved five different ways. Users switching modules felt like switching products. Pattern debt compounding with every new feature.</div>
                        </div>
                        <div>
                            <div className="text-sm font-mono opacity-40 uppercase tracking-widest mb-3">After</div>
                            <div className="text-lg opacity-80 leading-relaxed">A system of patterns that transfers across surfaces. Users who learn filtering in Recruiting already know filtering in WFM. Design teams building new features inherit solutions instead of reinventing them.</div>
                        </div>
                    </div>
                </section>

                {/* ── Reflection ── */}
                <section className="py-20 border-t border-gray-200">
                    <div className="text-[10px] tracking-widest uppercase font-mono opacity-50 mb-6">Reflection</div>
                    <h2 className="font-display text-4xl mb-8">What I'd do differently</h2>
                    <p className="text-lg opacity-80 leading-relaxed mb-6">
                        The hardest part of redesigning an enterprise product isn't the design — it's the organizational alignment. Module teams had strong opinions about their user's uniqueness. The most important skill was finding the 80% that was genuinely common and making that undeniable through evidence, then giving teams real control over the 20% that was legitimately different.
                    </p>
                    <p className="text-lg opacity-80 leading-relaxed">
                        If I were starting again, I'd invest earlier in shared research — bringing recruiting researchers and WFM researchers into the same room to find shared pain points. The pattern library came from design synthesis; it would have been even stronger if it had come from shared research synthesis first.
                    </p>
                </section>

                {/* ── Next ── */}
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
