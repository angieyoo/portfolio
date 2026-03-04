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

export default function FrontierPage() {
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
                    <div className="text-[10px] tracking-widest uppercase font-mono text-accent mb-6">Product Design · Telecom · eCommerce</div>
                    <h1 className="font-display text-6xl leading-none mb-8">Digitizing subscriptions<br />for 29 states.</h1>
                    <p className="text-xl opacity-80 leading-relaxed max-w-4xl font-display mb-12">
                        Building Frontier Communications' first digital subscription platform from scratch — letting customers across 29 US states subscribe to cable, internet, and phone plans without calling an agent.
                    </p>
                    <img src="/images/frontier-hero.png" alt="Frontier Communications — Subscription Platform" />
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
                            <div className="text-sm font-body">8 engineers · 1 BA · 1 PM</div>
                        </div>
                        <div>
                            <div className="text-[10px] tracking-widest uppercase font-mono opacity-40 mb-2">Focus</div>
                            <div className="text-sm font-body">0&#8594;1 · eComm · Complex Business Rules</div>
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
                    <h2 className="font-display text-4xl mb-8">A $5B company with no digital platform</h2>
                    <p className="text-lg opacity-80 leading-relaxed mb-6">
                        Frontier Communications — the fourth largest telecom provider in the US — had no digital subscription experience. Every customer who wanted to sign up for cable TV, internet, or phone had to call an agent. With Frontier in aggressive acquisition mode absorbing Verizon customers across 29 states, that needed to change fast.
                    </p>
                    <p className="text-lg opacity-80 leading-relaxed">
                        As the only designer in the pod, I was responsible for distilling enormously complex business rules — different product tiers, pricing, and availability per state, across three service types — into a coherent, self-serve purchase experience.
                    </p>
                </section>

                {/* ── Complexity ── */}
                <section className="py-20 border-t border-gray-200 bg-gray-50 -mx-8 px-8">
                    <div className="text-[10px] tracking-widest uppercase font-mono opacity-50 mb-6">The Challenge</div>
                    <h2 className="font-display text-4xl mb-8">Every state, every service, every combination</h2>
                    <p className="text-lg opacity-80 leading-relaxed mb-12">
                        The complexity wasn't just visual — it was structural. Products available varied by state. A customer could have up to 3 services (Cable TV, Phone, Internet) bundled together. Business rules from legal, sales, API, content, and marketing all had to be reconciled into a single user flow. I collaborated across all of these teams to define the scenarios and get alignment on the ideal flow for each.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        <div className="bg-white p-6 rounded-lg border border-gray-200">
                            <div className="text-2xl font-display mb-2">29</div>
                            <div className="text-xs font-mono opacity-50 uppercase tracking-widest mb-2">States</div>
                            <div className="text-sm opacity-70">Different product availability and pricing per state</div>
                        </div>
                        <div className="bg-white p-6 rounded-lg border border-gray-200">
                            <div className="text-2xl font-display mb-2">3</div>
                            <div className="text-xs font-mono opacity-50 uppercase tracking-widest mb-2">Service Types</div>
                            <div className="text-sm opacity-70">Cable TV, Internet, and Phone — each with their own tiers and rules</div>
                        </div>
                        <div className="bg-white p-6 rounded-lg border border-gray-200">
                            <div className="text-2xl font-display mb-2">10+</div>
                            <div className="text-xs font-mono opacity-50 uppercase tracking-widest mb-2">Stakeholder Teams</div>
                            <div className="text-sm opacity-70">Legal, API, sales, content, marketing — all with input on the flow</div>
                        </div>
                    </div>

                    <ZoomableImage src="/images/frontier-flows1.png" alt="Frontier — User Flow Mapping" />
                    <br />
                      <ZoomableImage src="/images/frontier-flows2.png" alt="Frontier — User Flow Mapping" />
                </section>

                {/* ── Iterations ── */}
                <section className="py-20 border-t border-gray-200">
                    <div className="text-[10px] tracking-widest uppercase font-mono opacity-50 mb-6">Process</div>
                    <h2 className="font-display text-4xl mb-8">10 iterations in 8 weeks</h2>
                    <p className="text-lg opacity-80 leading-relaxed mb-6">
                        Requirements changed constantly as discovery continued. I produced 10 major iterations across all user flows in 8 weeks — sometimes hand-sketching UI elements to communicate desired interactions quickly, then moving to high-fidelity once alignment was reached.
                    </p>
                    <p className="text-lg opacity-80 leading-relaxed mb-12">
                        Managing feedback across distributed teams with conflicting viewpoints was the hardest part. Every business line within Frontier had a stake in the outcome — and getting to a shippable design meant facilitating those debates rather than just designing in isolation.
                    </p>
                    <ZoomableImage src="/images/frontier-iterations1.png" alt="Frontier — Screen Explorations" />
                    <br />
                    <ZoomableImage src="/images/frontier-iterations2.png" alt="Frontier — Screen Explorations" />
                    <br />
                    <ZoomableImage src="/images/frontier-iterations3.png" alt="Frontier — Screen Explorations" />
                </section>

                {/* ── A/B testing ── */}
                <section className="py-20 border-t border-gray-200 bg-gray-50 -mx-8 px-8">
                    <div className="text-[10px] tracking-widest uppercase font-mono opacity-50 mb-6">A/B Testing</div>
                    <h2 className="font-display text-4xl mb-8">Testing two approaches to a complex selection problem</h2>
                    <p className="text-lg opacity-80 leading-relaxed mb-12">
                        Cable packages had many tiers and business rules. I built two interactive prototypes with different interaction models for the package selection flow — then ran A/B testing with users to determine which approach was both more usable and acceptable to stakeholders.
                    </p>
                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div>
                            <div className="text-xs font-mono opacity-40 uppercase tracking-widest mb-4">Prototype A</div>
                            <img src="/images/frontier-prototype-a.gif" alt="Frontier — Interaction Prototype Version A" />
                        </div>
                        <div>
                            <div className="text-xs font-mono opacity-40 uppercase tracking-widest mb-4">Prototype B</div>
                            <img src="/images/frontier-prototype-b.gif" alt="Frontier — Interaction Prototype Version B" />
                        </div>
                        <div>
                            <div className="text-xs font-mono opacity-40 uppercase tracking-widest mb-4">Prototype C — Shipped</div>
                            <img src="/images/frontier-prototype-c.gif" alt="Frontier — Interaction Prototype Version B" />
                        </div>
                    </div>
                </section>

                {/* ── Impact ── */}
                <section className="py-20 border-t border-gray-200 bg-black text-white -mx-8 px-8">
                    <div className="text-[10px] tracking-widest uppercase font-mono mb-8" style={{ color: '#00a86b' }}>Impact</div>
                    <h2 className="font-display text-4xl mb-16">Self-serve subscriptions across 29 states</h2>

                    <div className="grid md:grid-cols-3 gap-12 mb-16">
                        <div>
                            <div className="text-5xl font-display mb-3">29</div>
                            <div className="text-sm opacity-60">States launched simultaneously</div>
                        </div>
                        <div>
                            <div className="text-5xl font-display mb-3">3</div>
                            <div className="text-sm opacity-60">Service types — cable, internet, phone — in one purchase flow</div>
                        </div>
                        <div>
                            <div className="text-5xl font-display mb-3">0&#8594;1</div>
                            <div className="text-sm opacity-60">First digital platform in Frontier's history</div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <div className="text-sm font-mono opacity-40 uppercase tracking-widest mb-3">Before</div>
                            <div className="text-lg opacity-80 leading-relaxed">Every subscription required a phone call. No self-serve option. Agents handling all signups across 29 states for every product combination.</div>
                        </div>
                        <div>
                            <div className="text-sm font-mono opacity-40 uppercase tracking-widest mb-3">After</div>
                            <div className="text-lg opacity-80 leading-relaxed">Customers across 29 states can subscribe, bundle, and upgrade cable, internet, and phone plans entirely online — no agent required.</div>
                        </div>
                    </div>
                </section>

                {/* ── Reflection ── */}
                <section className="py-20 border-t border-gray-200">
                    <div className="text-[10px] tracking-widest uppercase font-mono opacity-50 mb-6">Reflection</div>
                    <h2 className="font-display text-4xl mb-8">Designing under constraint</h2>
                    <p className="text-lg opacity-80 leading-relaxed mb-6">
                        This project taught me that the design work is often the easier part. The harder skill is coordinating alignment across many distributed teams with conflicting priorities — moving the work forward without losing anyone along the way.
                    </p>
                    <p className="text-lg opacity-80 leading-relaxed">
                        Shipping incredibly complex features in a tight timeframe, across 29 states, from a remote team in Vancouver — that required precise communication and a willingness to make confident decisions with incomplete information.
                    </p>
                </section>

                {/* ── Next ── */}
                <section className="py-20">
                    <Link href="/work/shopify" className="group">
                        <div className="text-[10px] tracking-widest uppercase font-mono opacity-40 group-hover:opacity-100 transition mb-4">Next Project</div>
                        <div className="font-display text-3xl group-hover:italic transition">Shopify Product Cost &#8594;</div>
                    </Link>
                </section>

            </div>
        </main>
    )
}
