'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'

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

export default function DSChecker() {
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
                        <span className="text-sm font-body tracking-wider text-text">AI Workflow · Design Systems</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-sm font-body tracking-wider text-text">DS Checker</span>
                    </div>
                </div>
            </motion.nav>

            <div className="max-w-3xl mx-auto px-8 pt-32 pb-24">

            {/* ═══════════ HEADER ═══════════ */}
            <div className="mb-20">
                <div className="text-[10px] tracking-widest uppercase font-mono opacity-40 mb-6">
                    AI Workflow · Design Systems · Figma Plugin
                </div>
                <h1 className="font-display text-5xl mb-6 leading-tight">
                    DS Checker
                </h1>
                <p className="text-xl opacity-70 leading-relaxed mb-10">
                    A Figma plugin that brings design system compliance into the workflow — not a doc page nobody reads.
                </p>

                <div className="grid grid-cols-3 gap-8 py-8 border-t border-b border-gray-200">
                    <div>
                        <div className="text-[10px] tracking-widest uppercase font-mono opacity-40 mb-2">Role</div>
                        <div className="text-sm">Lead Designer + Prototype</div>
                    </div>
                    <div>
                        <div className="text-[10px] tracking-widest uppercase font-mono opacity-40 mb-2">Stack</div>
                        <div className="text-sm">Figma Plugin API · Claude API · TypeScript</div>
                    </div>
                    <div>
                        <div className="text-[10px] tracking-widest uppercase font-mono opacity-40 mb-2">Status</div>
                        <div className="text-sm">Working prototype</div>
                    </div>
                </div>
            </div>

            {/* ═══════════ PROBLEM ═══════════ */}
            <section className="mb-20">
                <div className="text-[10px] tracking-widest uppercase font-mono opacity-50 mb-6">The Problem</div>
                <h2 className="font-display text-4xl mb-6">Documentation doesn't change behaviour</h2>
                <p className="text-lg opacity-80 leading-relaxed mb-6">
                    At Dayforce, the Everest Design System had thorough documentation — token guidelines, spacing rules, component usage specs. But violation rates didn't drop. Designers weren't ignoring the rules; they just weren't checking them until review.
                </p>
                <p className="text-lg opacity-80 leading-relaxed mb-6">
                    The gap wasn't knowledge. It was proximity. The guidance lived in Notion. The work happened in Figma.
                </p>

                <div className="border-l-2 border-accent pl-5 py-1 my-8">
                    <div className="text-[10px] tracking-widest uppercase font-mono text-accent mb-1">Insight</div>
                    <div className="text-lg opacity-80 leading-relaxed">
                        Guidance needs to be delivered where design decisions are made — inside the tool, at the moment of authoring — not on a page that requires a context switch.
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-6 mt-10">
                    <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                        <div className="text-[10px] tracking-widest uppercase font-mono opacity-40 mb-3">Before</div>
                        <div className="text-sm opacity-70 leading-relaxed">Designer finishes a frame. Ships to review. Reviewer catches hardcoded colors, wrong spacing, detached components. Designer goes back. Cycle repeats.</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                        <div className="text-[10px] tracking-widest uppercase font-mono opacity-40 mb-3">After</div>
                        <div className="text-sm opacity-70 leading-relaxed">Designer selects a frame. Clicks Check. Gets specific, actionable feedback — with the right token category, the right spacing value — before the work leaves Figma.</div>
                    </div>
                </div>
            </section>

            {/* ═══════════ HOW IT WORKS ═══════════ */}
            <section className="mb-20 py-20 border-t border-gray-200">
                <div className="text-[10px] tracking-widest uppercase font-mono opacity-50 mb-6">How It Works</div>
                <h2 className="font-display text-4xl mb-10">Three checks. One click.</h2>

                <div className="bg-white p-8 rounded-lg border border-gray-200 mb-6">
                    <div className="text-sm font-medium mb-3 text-accent font-mono">CHECK 1 · COLOR TOKENS</div>
                    <div className="font-display text-2xl mb-4">Hardcoded colors surface immediately</div>
                    <div className="text-lg opacity-80 leading-relaxed mb-6">
                        The plugin reads every fill value on the selected layer. If a color isn't bound to a variable, it's flagged — with the hex value and the semantic token category it should map to: Interactive, Content, Borders, Surfaces, or Inactive.
                    </div>
                </div>

                <div className="bg-white p-8 rounded-lg border border-gray-200 mb-6">
                    <div className="text-sm font-medium mb-3 text-accent font-mono">CHECK 2 · SPACING SCALE</div>
                    <div className="font-display text-2xl mb-4">Off-scale values are called out by name</div>
                    <div className="text-lg opacity-80 leading-relaxed mb-6">
                        Everest uses an 8px base scale. The plugin checks every padding and gap value. 10px, 12px, 5.5px — all flagged as errors. 4px is allowed for micro-spacing, flagged as a warning with a suggestion to consider 8px for consistency.
                    </div>
                </div>

                <div className="bg-white p-8 rounded-lg border border-gray-200 mb-6">
                    <div className="text-sm font-medium mb-3 text-accent font-mono">CHECK 3 · COMPONENT INTEGRITY</div>
                    <div className="font-display text-2xl mb-4">Detached components don't slip through</div>
                    <div className="text-lg opacity-80 leading-relaxed">
                        Detached instances lose token bindings silently. The plugin detects them and flags as errors before they propagate through a design handoff.
                    </div>
                </div>
            </section>

            {/* ═══════════ DEMO ═══════════ */}
            <section className="mb-20 py-20 border-t border-gray-200">
                <div className="text-[10px] tracking-widest uppercase font-mono opacity-50 mb-6">In Action</div>
                <h2 className="font-display text-4xl mb-6">Real feedback on a real Dayforce frame</h2>
                <p className="text-lg opacity-80 leading-relaxed mb-10">
                    Selected a production table component from the Dayforce Pages screen. Four errors, one warning — caught before the frame reached review.
                </p>

                <ZoomableImage
                    src="/images/ds-checker-demo.png"
                    alt="DS Checker plugin showing 4 errors and 1 warning on a Dayforce table frame"
                />

                <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="bg-red-50 border border-red-100 rounded-lg p-5">
                        <div className="text-[10px] tracking-widest uppercase font-mono text-red-400 mb-2">Error</div>
                        <div className="text-sm font-medium mb-1">Hardcoded white (#FFFFFF)</div>
                        <div className="text-xs opacity-60 leading-relaxed">Replace with semantic Surfaces token for backgrounds, or Content token for text/icons depending on context.</div>
                    </div>
                    <div className="bg-red-50 border border-red-100 rounded-lg p-5">
                        <div className="text-[10px] tracking-widest uppercase font-mono text-red-400 mb-2">Error</div>
                        <div className="text-sm font-medium mb-1">Hardcoded dark colors (#1F1F1F, #444444)</div>
                        <div className="text-xs opacity-60 leading-relaxed">Replace with semantic Content tokens for text, or Surfaces tokens for dark backgrounds.</div>
                    </div>
                    <div className="bg-red-50 border border-red-100 rounded-lg p-5">
                        <div className="text-[10px] tracking-widest uppercase font-mono text-red-400 mb-2">Error</div>
                        <div className="text-sm font-medium mb-1">Off-scale spacing (10px, 12px, 2px, 5.5px, 1.5px)</div>
                        <div className="text-xs opacity-60 leading-relaxed">Replace with 8px scale values: use 8px instead of 10px, 16px instead of 12px.</div>
                    </div>
                    <div className="bg-amber-50 border border-amber-100 rounded-lg p-5">
                        <div className="text-[10px] tracking-widest uppercase font-mono text-amber-400 mb-2">Warning</div>
                        <div className="text-sm font-medium mb-1">4px micro-spacing used frequently</div>
                        <div className="text-xs opacity-60 leading-relaxed">Acceptable for tight gaps, but consider 8px for padding-heavy containers for consistency.</div>
                    </div>
                </div>
            </section>

            {/* ═══════════ ARCHITECTURE ═══════════ */}
            <section className="mb-20 py-20 border-t border-gray-200 bg-gray-50 -mx-8 px-8">
                <div className="text-[10px] tracking-widest uppercase font-mono opacity-50 mb-6">Under the Hood</div>
                <h2 className="font-display text-4xl mb-6">Two-layer architecture</h2>
                <p className="text-lg opacity-80 leading-relaxed mb-10">
                    Figma's plugin sandbox can't make network requests. The plugin splits into two parts — a sandboxed layer that reads node data, and a UI iframe that calls Claude.
                </p>

                <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                    <div className="grid grid-cols-3 divide-x divide-gray-200">
                        <div className="p-6">
                            <div className="text-[10px] tracking-widest uppercase font-mono opacity-40 mb-3">Layer 1</div>
                            <div className="font-medium mb-2">code.ts</div>
                            <div className="text-xs opacity-60 leading-relaxed">Runs in Figma sandbox. Reads fills, spacing, component bindings. Passes raw node data via postMessage.</div>
                        </div>
                        <div className="p-6">
                            <div className="text-[10px] tracking-widest uppercase font-mono opacity-40 mb-3">Layer 2</div>
                            <div className="font-medium mb-2">ui.html</div>
                            <div className="text-xs opacity-60 leading-relaxed">Runs in iframe. Receives node data, constructs prompt with Everest DS rules, calls Claude API, renders results.</div>
                        </div>
                        <div className="p-6">
                            <div className="text-[10px] tracking-widest uppercase font-mono opacity-40 mb-3">Intelligence</div>
                            <div className="font-medium mb-2">Claude API</div>
                            <div className="text-xs opacity-60 leading-relaxed">System prompt encodes Everest token categories, spacing scale, and component rules. Returns structured JSON with severity levels.</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════ WHAT'S NEXT ═══════════ */}
            <section className="mb-20 py-20 border-t border-gray-200">
                <div className="text-[10px] tracking-widest uppercase font-mono opacity-50 mb-6">Production Path</div>
                <h2 className="font-display text-4xl mb-6">What it would take to ship to a team</h2>
                <p className="text-lg opacity-80 leading-relaxed mb-10">
                    The prototype validates the concept. Scaling it to a design team of 30+ requires three things:
                </p>

                <div className="space-y-4">
                    <div className="border-l-2 border-accent pl-5 py-1">
                        <div className="text-[10px] tracking-widest uppercase font-mono text-accent mb-1">01 · Backend proxy</div>
                        <div className="text-base opacity-80 leading-relaxed">Move the Claude API key to a server. Designers authenticate via SSO — no keys, no setup friction.</div>
                    </div>
                    <div className="border-l-2 border-gray-200 pl-5 py-1">
                        <div className="text-[10px] tracking-widest uppercase font-mono opacity-40 mb-1">02 · Living ruleset</div>
                        <div className="text-base opacity-80 leading-relaxed">Replace the hardcoded system prompt with a token file synced from the DS source of truth. Rules update when the system updates.</div>
                    </div>
                    <div className="border-l-2 border-gray-200 pl-5 py-1">
                        <div className="text-[10px] tracking-widest uppercase font-mono opacity-40 mb-1">03 · Adoption telemetry</div>
                        <div className="text-base opacity-80 leading-relaxed">Log which violations are most common per team. Surface patterns that point to documentation gaps or missing components.</div>
                    </div>
                </div>
            </section>

            {/* ═══════════ REFLECTION ═══════════ */}
            <section className="py-20 border-t border-gray-200">
                <div className="text-[10px] tracking-widest uppercase font-mono opacity-50 mb-6">Reflection</div>
                <h2 className="font-display text-4xl mb-8">The medium is the message</h2>
                <p className="text-lg opacity-80 leading-relaxed mb-6">
                    Design systems fail at adoption, not at design. The components can be excellent and still unused or misused — because compliance requires effort that competes with shipping. The only sustainable solution is to make the right choice the path of least resistance.
                </p>
                <p className="text-lg opacity-80 leading-relaxed">
                    AI doesn't replace the DS designer here. It operationalizes the decisions already made — turning a static ruleset into a live, contextual check. The system becomes self-enforcing.
                </p>
            </section>

            {/* ═══════════ NEXT ═══════════ */}
            <section className="py-20">
                <Link href="/work/everest" className="group">
                    <div className="text-[10px] tracking-widest uppercase font-mono opacity-40 group-hover:opacity-100 transition mb-4">Next Project</div>
                    <div className="font-display text-3xl group-hover:italic transition">Everest Design System →</div>
                </Link>
            </section>

            </div>
        </main>
    )
}
