'use client'

import Link from 'next/link'
import { motion } from "framer-motion"
import { useState } from 'react'

// ─── Zoomable Image ───────────────────────────────────────────────────────────

function ZoomableImage({ src, alt }: { src: string; alt: string }) {
    const [open, setOpen] = useState(false)
    return (
        <>
            <div
                className="w-full border border-gray-200 rounded-lg overflow-hidden cursor-zoom-in bg-white"
                onClick={() => setOpen(true)}
            >
                <img src={src} alt={alt} className="w-full h-auto block" />
                <div className="px-4 py-2 border-t border-gray-100">
                    <span className="text-xs font-mono opacity-30 uppercase tracking-widest">Click to enlarge</span>
                </div>
            </div>
            {open && (
                <div
                    className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6 cursor-zoom-out"
                    onClick={() => setOpen(false)}
                >
                    <img
                        src={src}
                        alt={alt}
                        style={{ maxWidth: '95vw', maxHeight: '95vh', objectFit: 'contain' }}
                        className="rounded-lg"
                    />
                </div>
            )}
        </>
    )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function FinningPage() {
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
                    <div className="text-[10px] tracking-widest uppercase font-mono text-accent mb-6">Product Design · IoT · Research</div>
                    <h1 className="font-display text-6xl leading-none mb-8">Motivating operators<br />through data.</h1>
                    <p className="text-xl opacity-60 leading-relaxed max-w-2xl font-display mb-12">
                        Designing a performance optimization product for heavy-machine operators at Finning — the world's largest Caterpillar dealer — using IoT data to drive productivity and safety at mining and construction sites.
                    </p>
                    <img src="/images/finning-hero.png" alt="Finning — Performance Optimization Product" />
                </section>

                {/* ── Meta strip ── */}
                <section className="py-12 border-b border-gray-200">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div>
                            <div className="text-[10px] tracking-widest uppercase font-mono opacity-40 mb-2">Role</div>
                            <div className="text-sm font-body">Solo Product Design Lead</div>
                        </div>
                        <div>
                            <div className="text-[10px] tracking-widest uppercase font-mono opacity-40 mb-2">Team</div>
                            <div className="text-sm font-body">10 engineers · 2 BAs · 1 PM</div>
                        </div>
                        <div>
                            <div className="text-[10px] tracking-widest uppercase font-mono opacity-40 mb-2">Focus</div>
                            <div className="text-sm font-body">Research · Product Vision · IoT UX</div>
                        </div>
                        <div>
                            <div className="text-[10px] tracking-widest uppercase font-mono opacity-40 mb-2">Platform</div>
                            <div className="text-sm font-body">Mobile · Web</div>
                        </div>
                    </div>
                </section>

                {/* ── Context ── */}
                <section className="py-20 border-t border-gray-200">
                    <div className="text-[10px] tracking-widest uppercase font-mono opacity-50 mb-6">Context</div>
                    <h2 className="font-display text-4xl mb-8">A flood of IoT data, and operators who weren't using it</h2>
                    <p className="text-lg opacity-80 leading-relaxed mb-6">
                        Finning's heavy-machine equipment generates a constant stream of performance data through connected IoT devices. Operations managers had access to this data — but no good way to act on it. And the operators themselves had no visibility into their own performance at all.
                    </p>
                    <p className="text-lg opacity-80 leading-relaxed">
                        The brief: design a product that would motivate operators to improve productivity and safety adherence, while making it easier for managers to turn IoT data into meaningful decisions. As the only designer in a pod of 10 engineers, 2 business analysts, and a PM, I owned the problem discovery and product vision end-to-end.
                    </p>
                </section>

                {/* ── Discovery ── */}
                <section className="py-20 border-t border-gray-200 bg-gray-50 -mx-8 px-8">
                    <div className="text-[10px] tracking-widest uppercase font-mono opacity-50 mb-6">Discovery</div>
                    <h2 className="font-display text-4xl mb-8">Understanding a world I'd never worked in</h2>
                    <p className="text-lg opacity-80 leading-relaxed mb-12">
                        Mining and construction were entirely new domains. I spent significant time in workshops and deep-dives with SMEs to understand how Caterpillar equipment works, where performance data comes from, and what operators actually experience on a 12-hour shift. That context was essential before I could talk to users meaningfully.
                    </p>
                    <ZoomableImage src="/images/finning-discovery.png" alt="Finning — Discovery Workshops" />
                </section>

                {/* ── Personas ── */}
                <section className="py-20 border-t border-gray-200">
                    <div className="text-[10px] tracking-widest uppercase font-mono opacity-50 mb-6">Research</div>
                    <h2 className="font-display text-4xl mb-8">Three distinct user groups — with very different needs</h2>
                    <p className="text-lg opacity-80 leading-relaxed mb-12">
                        Through interviews with SMEs and target users, I identified three distinct personas: the heavy-machine operator, the supervisor, and the operations manager. Each had different relationships to performance data, different motivations, and different constraints — a 12-hour shift with minimal phone access versus a manager reviewing dashboards in an office.
                    </p>
                    <img src="/images/finning-persona1.png" alt="Finning — User Personas" />
                    <br />
                     <img src="/images/finning-persona2.png" alt="Finning — User Personas" />
                     <br />
                         <img src="/images/finning-persona3.png" alt="Finning — User Personas" />
                </section>

                {/* ── Motivation ── */}
                <section className="py-20 border-t border-gray-200 bg-gray-50 -mx-8 px-8">
                    <div className="text-[10px] tracking-widest uppercase font-mono opacity-50 mb-6">Insight</div>
                    <h2 className="font-display text-4xl mb-8">Motivation isn't one-size-fits-all</h2>
                    <p className="text-lg opacity-80 leading-relaxed mb-12">
                        Interviews made it clear that operators are motivated by different combinations of factors. Using a behaviour design framework, I broke motivation down into specific categories — then mapped which operator types would respond to which motivators. This became the foundation for the product's engagement model.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-white p-8 rounded-lg border border-gray-200">
                            <div className="text-sm font-mono text-accent mb-3">Hypothesis 01</div>
                            <div className="font-display text-xl mb-3">Operators love sports and friendly competition</div>
                            <div className="text-sm opacity-80 leading-relaxed">That dynamic already exists between teams on site. A product that channeled it could trigger motivation without feeling like surveillance.</div>
                        </div>
                        <div className="bg-white p-8 rounded-lg border border-gray-200">
                            <div className="text-sm font-mono text-accent mb-3">Hypothesis 02</div>
                            <div className="font-display text-xl mb-3">2–5 minutes of engagement per day, max</div>
                            <div className="text-sm opacity-80 leading-relaxed">Operators work 12-hour shifts with minimal phone access. Any product that demanded more would be abandoned immediately.</div>
                        </div>
                        <div className="bg-white p-8 rounded-lg border border-gray-200">
                            <div className="text-sm font-mono text-accent mb-3">Hypothesis 03</div>
                            <div className="font-display text-xl mb-3">The experience had to be entertaining</div>
                            <div className="text-sm opacity-80 leading-relaxed">Data alone doesn't motivate. The interface needed to feel rewarding to use — not like another productivity tool imposed from above.</div>
                        </div>
                        <div className="bg-white p-8 rounded-lg border border-gray-200">
                            <div className="text-sm font-mono text-accent mb-3">Hypothesis 04</div>
                            <div className="font-display text-xl mb-3">Union and safety sensitivity required careful framing</div>
                            <div className="text-sm opacity-80 leading-relaxed">Any product that felt like surveillance would fail — organizationally and with users. The framing had to be empowerment, not monitoring.</div>
                        </div>
                    </div>

                    <img src="/images/finning-motivation.png" alt="Finning — Motivation Framework" />
                </section>

                {/* ── Journey map ── */}
                <section className="py-20 border-t border-gray-200">
                    <div className="text-[10px] tracking-widest uppercase font-mono opacity-50 mb-6">Process</div>
                    <h2 className="font-display text-4xl mb-8">Mapping the day in the life</h2>
                    <p className="text-lg opacity-80 leading-relaxed mb-12">
                        Understanding the operator's daily rhythm was critical — when they'd have phone access, when they'd be in the cab, when they'd be most receptive to engagement. The journey map shaped both the product's interaction model and its timing logic.
                    </p>
                    <img src="/images/finning-journey.png" alt="Finning — User Journey Map" />
                </section>

                {/* ── UI ── */}
                <section className="py-20 border-t border-gray-200 bg-gray-50 -mx-8 px-8">
                    <div className="text-[10px] tracking-widest uppercase font-mono opacity-50 mb-6">Design</div>
                    <h2 className="font-display text-4xl mb-8">From hypotheses to high-fidelity</h2>
                    <p className="text-lg opacity-80 leading-relaxed mb-12">
                        With the research validated by stakeholders, I moved from sketches to high-fidelity UI explorations — designing both the operator mobile experience and the manager dashboard. The mobile product was built around quick, rewarding daily check-ins; the dashboard gave managers a clean view into team performance trends.
                    </p>
                    <img src="/images/finning-mobile.png" alt="Finning — Mobile UI Explorations" />
                    <div className="mt-8">
                         <img src="/images/finning-hero.png" alt="Finning — Mobile App" />
                        <img src="/images/finning-dashboard.png" alt="Finning — Manager Dashboard" />
                    </div>
                </section>

                {/* ── Reflection ── */}
                <section className="py-20 border-t border-gray-200">
                    <div className="text-[10px] tracking-widest uppercase font-mono opacity-50 mb-6">Reflection</div>
                    <h2 className="font-display text-4xl mb-8">What this project taught me</h2>
                    <p className="text-lg opacity-80 leading-relaxed mb-6">
                        This was a concept that didn't ship — but the research process was one of the most rigorous I've done. Designing for a domain I knew nothing about forced me to become genuinely curious about how equipment works, how IoT data flows, and what motivates people in physically demanding jobs. That depth of domain understanding is what made the product hypotheses defensible.
                    </p>
                    <p className="text-lg opacity-80 leading-relaxed">
                        The biggest lesson: organizational sensitivity (unions, safety culture) isn't a constraint to work around — it's a design input. The framing of the product as operator empowerment rather than management surveillance wasn't just ethical, it was what made the concept viable at all.
                    </p>
                </section>

                {/* ── Next ── */}
                <section className="py-20">
                    <Link href="/work/loblaw" className="group">
                        <div className="text-[10px] tracking-widest uppercase font-mono opacity-40 group-hover:opacity-100 transition mb-4">Next Project</div>
                        <div className="font-display text-3xl group-hover:italic transition">Loblaw Design System &#8594;</div>
                    </Link>
                </section>

            </div>
        </main>
    )
}
