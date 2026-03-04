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

export default function LoblawDesignSystem() {
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
                    <div className="text-[10px] tracking-widest uppercase font-mono text-accent mb-6">Design Systems · Multi-brand · Enterprise</div>
                    <h1 className="font-display text-6xl leading-none mb-8">One system.<br />22 brands.</h1>
                    <p className="text-xl opacity-80 leading-relaxed max-w-4xl font-display mb-12">
                        Building Loblaw's first enterprise design system from scratch — architecting a multi-brand, multi-product foundation that served Canada's largest retailer across grocery, pharmacy, apparel, and financial products.
                    </p>
                    <img src="/images/loblaw-hero.gif" alt="Loblaw Design System Overview" />
                </section>

                {/* ── Meta strip ── */}
                <section className="py-12 border-b border-gray-200">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div>
                            <div className="text-[10px] tracking-widest uppercase font-mono opacity-40 mb-2">Role</div>
                            <div className="text-sm font-body">Design Systems & DesignOps Lead</div>
                        </div>
                        <div>
                            <div className="text-[10px] tracking-widest uppercase font-mono opacity-40 mb-2">Scope</div>
                            <div className="text-sm font-body">22 brands · 13 eComm sites</div>
                        </div>
                        <div>
                            <div className="text-[10px] tracking-widest uppercase font-mono opacity-40 mb-2">Focus</div>
                            <div className="text-sm font-body">Multi-brand Architecture · Governance</div>
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
                    <h2 className="font-display text-4xl mb-8">No system. No consistency. No shared language.</h2>
                    <p className="text-lg opacity-80 leading-relaxed mb-6">
                        Loblaw Companies Limited is Canada's largest food retailer — 22 brands including Shoppers Drug Mart, Joe Fresh, PC Financial, No Frills, and Real Canadian Superstore. Each brand had its own product team, its own codebase, its own design approach. There was no shared design system, no common component library, and no cross-team design language.
                    </p>
                    <p className="text-lg opacity-80 leading-relaxed">
                        I was brought in as the sole designer on the Shared Components team to discover the problem space and architect a solution — working with 3 engineers to build something that had never existed at Loblaw before.
                    </p>
                </section>

                {/* ── Discovery ── */}
                <section className="py-10 border-t border-gray-200 bg-gray-50 -mx-8 px-8">
                    <div className="text-[10px] tracking-widest uppercase font-mono opacity-50 mb-6">Discovery</div>
                    <h2 className="font-display text-4xl mb-8">The organization didn't agree on what a design system even was</h2>
                    <p className="text-lg opacity-80 leading-relaxed mb-12">
                        Before designing anything, I interviewed product designers, developers, and PMs across teams to understand their pain points, workflows, and mental models. What I found wasn't just a tooling problem — it was an organizational alignment problem.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-12">
                        <div className="bg-white p-6 rounded-lg border border-gray-200">
                            <div className="text-xs font-mono opacity-40 uppercase tracking-widest mb-3">Designer</div>
                            <p className="text-sm opacity-80 leading-relaxed italic">"We already have some symbols in a Sketch file. Isn't that a design system?"</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg border border-gray-200">
                            <div className="text-xs font-mono opacity-40 uppercase tracking-widest mb-3">Developer</div>
                            <p className="text-sm opacity-80 leading-relaxed italic">"We don't really need design. All we need is some reusable code snippets to share across the company, regardless of brand."</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg border border-gray-200">
                            <div className="text-xs font-mono opacity-40 uppercase tracking-widest mb-3">Developer</div>
                            <p className="text-sm opacity-80 leading-relaxed italic">"I've never really collaborated with a designer before. The PM assigns me a Jira ticket and I design with code — which, I guess, is terrible, but fast."</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg border border-gray-200">
                            <div className="text-xs font-mono opacity-40 uppercase tracking-widest mb-3">Product Manager</div>
                            <p className="text-sm opacity-80 leading-relaxed italic">"LDS should only have white-label components — consolidate all brand sites into one set of white-label components."</p>
                        </div>
                    </div>

                   
                </section>

                {/* ── The tension ── */}
                <section className="py-20 border-t border-gray-200">
                    <div className="text-[10px] tracking-widest uppercase font-mono opacity-50 mb-6">The Core Tension</div>
                    <h2 className="font-display text-4xl mb-8">One system for everything — or systems that actually work?</h2>
                    <p className="text-lg opacity-80 leading-relaxed mb-6">
                        Upper management wanted a single white-label system serving all 22 brands. My discovery showed this was architecturally problematic — a grocery delivery experience, a loyalty program, a cosmetics store, and an apparel site have fundamentally different UX problems, business rules, and tech stacks.
                    </p>
                    <p className="text-lg opacity-80 leading-relaxed mb-12">
                        My pitch: a two-layer architecture. A white-label foundation with shared scaffolding components, paired with product-level pattern libraries per brand — giving teams a shared base without forcing convergence where divergence was legitimate.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
                            <div className="text-sm font-mono text-accent mb-3">What management wanted</div>
                            <div className="font-display text-2xl mb-4">One white-label system</div>
                            <div className="text-sm opacity-80 leading-relaxed">Single component set for all brands, all products — regardless of how different their UX needs, business rules, or tech stacks were.</div>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
                            <div className="text-sm font-mono text-accent mb-3">What I proposed</div>
                            <div className="font-display text-2xl mb-4">Two-layer architecture</div>
                            <div className="text-sm opacity-80 leading-relaxed">White-label scaffolding for what was genuinely shared, plus product-level pattern libraries for the 14+ brands that had legitimately unique needs.</div>
                        </div>
                    </div>
                </section>

                {/* ── Workshop ── */}
                <section className="py-20 border-t border-gray-200 bg-gray-50 -mx-8 px-8">
                    <div className="text-[10px] tracking-widest uppercase font-mono opacity-50 mb-6">Process</div>
                    <h2 className="font-display text-4xl mb-8">Component Cut-Up Workshop</h2>
                    <p className="text-lg opacity-80 leading-relaxed mb-12">
                        To test the feasibility of a shared white-label approach, I ran a component cut-up workshop with 20+ participants — product teams and directors from both Shoppers Drug Mart Beauty and Joe Fresh. The goal: identify genuine overlaps, surface where convergence was impossible, and build organizational alignment through evidence rather than argument.
                    </p>
                    <img src="/images/loblaw-workshop.png" alt="Component Cut-Up Workshop" />
                    <div className="mt-12 grid md:grid-cols-3 gap-8">
                        <div>
                            <div className="text-[10px] tracking-widest uppercase font-mono opacity-40 mb-3">Finding</div>
                            <p className="text-sm opacity-80 leading-relaxed">Even two seemingly similar eComm sites — beauty products vs. apparel — had conflicting business rules, different payment gateways, and different tech stacks.</p>
                        </div>
                        <div>
                            <div className="text-[10px] tracking-widest uppercase font-mono opacity-40 mb-3">Decision</div>
                            <p className="text-sm opacity-80 leading-relaxed">Proceeded with two component types: white-label scaffolding for genuine shared structure, and product-specific components for brand-unique UX needs.</p>
                        </div>
                        <div>
                            <div className="text-[10px] tracking-widest uppercase font-mono opacity-40 mb-3">Outcome</div>
                            <p className="text-sm opacity-80 leading-relaxed">Workshop shifted the conversation from "should we do this?" to "here's what's actually shared and what isn't" — making the architecture decision undeniable through evidence.</p>
                        </div>
                    </div>
                </section>

               

                {/* ── Impact ── */}
                <section className="py-20 border-t border-gray-200 bg-black text-white -mx-8 px-8">
                    <div className="text-[10px] tracking-widest uppercase font-mono mb-8" style={{ color: '#00a86b' }}>Impact</div>
                    <h2 className="font-display text-4xl mb-16">From 0 to a system — and an org that understood why</h2>

                    <div className="grid md:grid-cols-3 gap-12 mb-16">
                        <div>
                            <div className="text-5xl font-display mb-3">13</div>
                            <div className="text-sm opacity-60">eCommerce sites launched on shared component architecture</div>
                        </div>
                        <div>
                            <div className="text-5xl font-display mb-3">6w</div>
                            <div className="text-sm opacity-60">Brand launch time reduced from 6 months to 6 weeks</div>
                        </div>
                        <div>
                            <div className="text-5xl font-display mb-3">22+</div>
                            <div className="text-sm opacity-60">Brands served by the system architecture</div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <div className="text-sm font-mono opacity-40 uppercase tracking-widest mb-3">Before</div>
                            <div className="text-lg opacity-80 leading-relaxed">No shared system. Designers working in silos. Developers designing in code. No cross-team design language. Brand launches taking 6 months.</div>
                        </div>
                        <div>
                            <div className="text-sm font-mono opacity-40 uppercase tracking-widest mb-3">After</div>
                            <div className="text-lg opacity-80 leading-relaxed">Shared component architecture across 13 eComm sites. Developers acting as design advocates. Brand launch time cut from 6 months to 6 weeks.</div>
                        </div>
                    </div>
                </section>

                {/* ── Reflection ── */}
                <section className="py-20 border-t border-gray-200">
                    <div className="text-[10px] tracking-widest uppercase font-mono opacity-50 mb-6">Reflection</div>
                    <h2 className="font-display text-4xl mb-8">What I learned</h2>
                    <p className="text-lg opacity-80 leading-relaxed mb-6">
                        A design system isn't just components — it's the service design work underneath: the governance model, the contribution process, the mechanisms that let a community evolve the system together. Most people don't talk about this part, but it's what determines whether a system survives contact with an organization.
                    </p>
                    <p className="text-lg opacity-80 leading-relaxed">
                        The hardest part wasn't the architecture. It was shifting an org that had never collaborated across design and engineering into one that understood why shared systems created leverage. That required running workshops, building trust incrementally, and making the value of the system undeniable through early wins — not through mandates.
                    </p>
                </section>

                {/* ── Next ── */}
                <section className="py-20">
                    <Link href="/work/dayforce" className="group">
                        <div className="text-[10px] tracking-widest uppercase font-mono opacity-40 group-hover:opacity-100 transition mb-4">Next Project</div>
                        <div className="font-display text-3xl group-hover:italic transition">Dayforce Platform Redesign &#8594;</div>
                    </Link>
                </section>

            </div>
        </main>
    )
}
