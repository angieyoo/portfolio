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

export default function FoodNetworkPage() {
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
                    <div className="text-[10px] tracking-widest uppercase font-mono text-accent mb-6">UX Design · Promotional Game · Canada 150</div>
                    <h1 className="font-display text-6xl leading-none mb-8">A game played by<br />200,000 Canadians.</h1>
                    <p className="text-xl opacity-60 leading-relaxed max-w-2xl font-display mb-12">
                        Designing the flow, interactions, and game mechanics for Food Network Canada's sweepstakes promotion — a daily entry game celebrating Canada's 150th birthday and the launch of the Great Canadian Cookbook.
                    </p>
                    <img src="/images/foodnetwork-hero.png" alt="Food Network — Great Canadian Cookbook Sweepstakes" />
                </section>

                {/* ── Meta strip ── */}
                <section className="py-12 border-b border-gray-200">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div>
                            <div className="text-[10px] tracking-widest uppercase font-mono opacity-40 mb-2">Role</div>
                            <div className="text-sm font-body">UX Lead</div>
                        </div>
                        <div>
                            <div className="text-[10px] tracking-widest uppercase font-mono opacity-40 mb-2">Collaborators</div>
                            <div className="text-sm font-body">Engineering · Creative · Content</div>
                        </div>
                        <div>
                            <div className="text-[10px] tracking-widest uppercase font-mono opacity-40 mb-2">Focus</div>
                            <div className="text-sm font-body">Game Mechanics · Flow · Prototyping</div>
                        </div>
                        <div>
                            <div className="text-[10px] tracking-widest uppercase font-mono opacity-40 mb-2">Platform</div>
                            <div className="text-sm font-body">Web · Mobile</div>
                        </div>
                    </div>
                </section>

                {/* ── Context ── */}
                <section className="py-20 border-t border-gray-200">
                    <div className="text-[10px] tracking-widest uppercase font-mono opacity-50 mb-6">Context</div>
                    <h2 className="font-display text-4xl mb-8">Fun UX with serious business rules underneath</h2>
                    <p className="text-lg opacity-80 leading-relaxed mb-6">
                        To celebrate Canada's 150th birthday, Food Network Canada launched the Great Canadian Cookbook. The promotional campaign included a sweepstakes game — users earn entries to win prizes every time they play, driving daily return visits over a 6-month promotion.
                    </p>
                    <p className="text-lg opacity-80 leading-relaxed">
                        What looked like a simple game had complex logic underneath: entry limits, prize tiers, eligibility rules, daily resets, and social sharing mechanics — all dictated by legal and advertising requirements. My job was to make all of that invisible to users while keeping the experience genuinely fun.
                    </p>
                </section>

                {/* ── Flow ── */}
                <section className="py-20 border-t border-gray-200 bg-gray-50 -mx-8 px-8">
                    <div className="text-[10px] tracking-widest uppercase font-mono opacity-50 mb-6">Architecture</div>
                    <h2 className="font-display text-4xl mb-8">Architecting the rules of the game</h2>
                    <p className="text-lg opacity-80 leading-relaxed mb-12">
                        Before wireframing a single screen, I worked with engineering, business analysts, legal, and the advertising agency to map out every possible user state — first visit, returning user, daily limit reached, prize won, referral entry. The flow diagram became the source of truth for the entire team.
                    </p>
                    <img src="/images/foodnetwork-flow.png" alt="Food Network — Game Flow Diagram" />
                </section>

                {/* ── Screens ── */}
                <section className="py-20 border-t border-gray-200">
                    <div className="text-[10px] tracking-widest uppercase font-mono opacity-50 mb-6">Design</div>
                    <h2 className="font-display text-4xl mb-8">From flow to screens</h2>
                    <p className="text-lg opacity-80 leading-relaxed mb-12">
                        With the game logic locked, I moved into wireframes and interactive prototypes — collaborating closely with the visual designer and creative director to make sure the UX and visual identity worked together. The game needed to feel celebratory and light while handling edge cases gracefully.
                    </p>
                    <img src="/images/foodnetwork-screens.png" alt="Food Network — Game Screens" />
                    <div className="mt-8">
                        <img src="/images/foodnetwork-mobile.png" alt="Food Network — Mobile Experience" />
                    </div>
                </section>

                {/* ── Impact ── */}
                <section className="py-20 border-t border-gray-200 bg-black text-white -mx-8 px-8">
                    <div className="text-[10px] tracking-widest uppercase font-mono mb-8" style={{ color: '#00a86b' }}>Impact</div>
                    <h2 className="font-display text-4xl mb-16">200,000 Canadians played the game.</h2>

                    <div className="grid md:grid-cols-3 gap-12 mb-16">
                        <div>
                            <div className="text-5xl font-display mb-3">200k</div>
                            <div className="text-sm opacity-60">Canadians played over the 6-month promotion</div>
                        </div>
                        <div>
                            <div className="text-5xl font-display mb-3">6 mo</div>
                            <div className="text-sm opacity-60">Promotion run — daily return visits sustained throughout</div>
                        </div>
                        <div>
                            <div className="text-5xl font-display mb-3">150</div>
                            <div className="text-sm opacity-60">Canada's birthday — the occasion that launched it all</div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <div className="text-sm font-mono opacity-40 uppercase tracking-widest mb-3">The Challenge</div>
                            <div className="text-lg opacity-80 leading-relaxed">Complex sweepstakes rules, legal requirements, and multi-state game logic — all needing to feel effortless to a casual user picking up their phone.</div>
                        </div>
                        <div>
                            <div className="text-sm font-mono opacity-40 uppercase tracking-widest mb-3">The Result</div>
                            <div className="text-lg opacity-80 leading-relaxed">A game that hid its complexity completely — 200,000 plays over 6 months, driving sustained daily engagement throughout the entire cookbook promotion.</div>
                        </div>
                    </div>
                </section>

                {/* ── Reflection ── */}
                <section className="py-20 border-t border-gray-200">
                    <div className="text-[10px] tracking-widest uppercase font-mono opacity-50 mb-6">Reflection</div>
                    <h2 className="font-display text-4xl mb-8">When the design work is making complexity disappear</h2>
                    <p className="text-lg opacity-80 leading-relaxed mb-6">
                        This project was a good reminder that UX isn't always about solving a usability problem — sometimes it's about absorbing business and legal complexity so users never have to see it. The better the architecture, the simpler the experience feels.
                    </p>
                    <p className="text-lg opacity-80 leading-relaxed">
                        Collaborating across engineering, creative, legal, and an external advertising agency — all with different priorities — was the real design challenge. Getting everyone to a shared understanding of the game logic before a single screen was drawn made everything downstream faster.
                    </p>
                </section>

                {/* ── Next ── */}
                <section className="py-20">
                    <Link href="/work/frontier" className="group">
                        <div className="text-[10px] tracking-widest uppercase font-mono opacity-40 group-hover:opacity-100 transition mb-4">Next Project</div>
                        <div className="font-display text-3xl group-hover:italic transition">Frontier Communications &#8594;</div>
                    </Link>
                </section>

            </div>
        </main>
    )
}
