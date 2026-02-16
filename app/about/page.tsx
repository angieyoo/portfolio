'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function About() {
  const experience = [
    {
      period: "2024 — 2026",
      company: "Dayforce (Ceridian)",
      position: "Lead Product Designer, Platform Patterns",
      description: [
        "Co-architected Global Patterns for Everest, scaling persona-driven experiences across multiple product domains in enterprise HCM platform used by millions of customers",
        "Led migration from fragmented legacy UI to modern, token-driven system, improving consistency and engineering velocity across teams",
        "Designed and shipped enhanced Table 2.1 pattern, establishing accessible, tokenized, data-dense patterns now used across 80% of the product",
        "Designed first AI chat experience and foundational AIX components, creating scalable pattern layer for future agentic and intelligent UI enhancements",
        "Drove adoption across 32 product teams with shared library of 94 components generating 27.6K+ weekly insertions, demonstrating organization-wide adoption"
      ]
    },
    {
      period: "2022 — 2024",
      company: "Dayforce (Ceridian)",
      position: "Lead Product Designer, Everest Design Systems",
      description: [
        "Led 0→1 creation of Dayforce's modern design system, moving organization from fragmented legacy UI to shared, scalable platform",
        "Replaced legacy design system with modular, token-driven architecture, enabling teams to build consistently without constant overrides",
        "Aligned foundational tokens, components, and styles with engineering implementation, reducing UI drift and long-term maintenance cost while increasing development velocity",
        "Introduced documentation, usage guidance, and contribution workflows, helping teams adopt, extend, and evolve the system with confidence",
        "Mentored 60+ designers through weekly Office Hours, building systematic thinking org-wide"
      ]
    },
    {
      period: "2020 — 2022",
      company: "Sunlife",
      position: "Design Operations Manager, Global Design Systems",
      description: [
        "Established global design system foundation supporting multiple products across several countries",
        "Architected cascading structure enabling regional markets to extend core patterns without fragmenting the platform",
        "Defined contribution models and governance frameworks providing clear paths for teams to evolve shared assets at scale"
      ]
    }, 
    {
      period: "2019 — 2020",
      company: "Loblaw Digital",
      position: "Design Systems Lead",
      description: [
        "Led 0→1 creation of white-label, multi-brand design system supporting 13 eCommerce sites, enabling multiple grocery brands to ship from single, token-driven foundation",
        "Separated brand identity from system structure through tokens and theming, allowing each brand to express itself without forking components",
        "Provided design systems thought leadership in environment initially resistant to standardization, helping teams understand long-term value of shared system",
        "Built alignment with design and engineering partners to drive adoption of system that had not previously existed"
      ]
    }, 
    {
      period: "2008 — 2019",
      company: "Various Verticals",
      position: "Product Design IC & Manager",
      description: [
        "Led product and UX design across SaaS, eCommerce, enterprise, and financial services sectors",
        "Shipped production software in both fast-moving startup and highly regulated enterprise environments, developing instincts for balancing quality, velocity, and operational constraints",
        "Grew from IC contributor to people manager, building skills in cross-functional leadership, delivery, and mentorship"
      ]
    }

  ]

  const education = [
    {
      period: "",
      school: "Simon Fraser University",
      degree: "Bachelor of Applied Science, Interactive Arts & Technology",
      description: "Interdisciplinary study combining design, technology, and human-computer interaction"
    },
    {
      period: "",  
      school: "University of British Columbia",
      degree: "Computer Science (2 years of coursework)",
      description: "Coursework in algorithms, data structures, and software engineering principles"
    } 
  ]

  const skills = {
    "Systems Thinking": ["Platform design", "Navigation Architecture", "Global Patterns", "Cross-product experiences", 'Tokens'],
    "Technical Fluency": ["HTML/CSS", "JavaScript", "React", "Design tokens", "Component architecture", "Tailwind CSS"],
    "Tools": ["Figma", "Storybook", "Chromatic", "Figma CodeConnect"],
    "Leadership": ["Mentorship", "Governance", "Contribution models", "Cross-functional colalboration"]
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
            <span className="text-sm font-body tracking-wider text-text">ABOUT ANGIE</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-accent"></span>
            <span className="text-sm font-body tracking-wider text-text">AVAILABLE FOR WORK</span>
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
            <h1 className="font-display text-6xl md:text-8xl mb-6 leading-tight">
              Angie Yoo
            </h1>
            <p className="text-2xl md:text-3xl font-display italic text-muted mb-8">
              Design Systems Leader · Platform Design Expert
            </p>
            <p className="text-lg leading-relaxed max-w-3xl">
              <strong>7 years building design systems at scale.</strong> Principal designer specializing in platform-level problems: navigation architecture, global patterns (search, notifications), and cross-product experiences. Track record of shipping systematic solutions used by 30+ teams and millions of users.
            </p>
          </motion.div>

          <motion.div 
            className="flex gap-6 mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <a href="mailto:hello@angieyoo.com" className="px-6 py-3 border border-text rounded-full font-body text-sm tracking-wider hover:bg-text hover:text-white transition-all">
              EMAIL
            </a>
            <a href="/Angie_Yoo_Resume.pdf" download className="px-6 py-3 border border-text rounded-full font-body text-sm tracking-wider hover:bg-text hover:text-white transition-all">
              DOWNLOAD CV
            </a>
          </motion.div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-20 px-8 border-t border-text/10">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            className="font-display text-4xl italic mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Experience
          </motion.h2>

          <div className="space-y-12">
            {experience.map((job, index) => (
              <motion.div
                key={index}
                className="grid md:grid-cols-12 gap-6 pb-12 border-b border-text/5 last:border-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="md:col-span-3">
                  <p className="text-sm font-body text-muted tracking-wider">{job.period}</p>
                </div>
                <div className="md:col-span-9">
                  <h3 className="font-display text-2xl mb-2">{job.position}</h3>
                  <p className="text-lg text-accent mb-6">{job.company}</p>
                 {Array.isArray(job.description) ? (
                 <ul className="space-y-3">
                  {job.description.map((item, i) => (
                    <li key={i} className="text-muted leading-relaxed flex gap-3">
                      <span className="text-accent mt-1">•</span>
                        <span>{item}</span>
                    </li>
                ))}
                </ul>
                  ) : (
                  <p className="text-muted leading-relaxed">{job.description}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-20 px-8 border-t border-text/10">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            className="font-display text-4xl italic mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Education
          </motion.h2>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="grid md:grid-cols-12 gap-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="md:col-span-3">
                  <p className="text-sm font-body text-muted tracking-wider">{edu.period}</p>
                </div>
                <div className="md:col-span-9">
                  <h3 className="font-display text-2xl mb-2">{edu.degree}</h3>
                  <p className="text-lg text-accent mb-4">{edu.school}</p>
                  <p className="text-muted leading-relaxed">{edu.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 px-8 border-t border-text/10">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            className="font-display text-4xl italic mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Skills & Expertise
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">
            {Object.entries(skills).map(([category, items], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-sm font-body tracking-wider text-accent mb-4">{category}</h3>
                <div className="flex flex-wrap gap-3">
                  {items.map((skill) => (
                    <span 
                      key={skill}
                      className="px-4 py-2 border border-text/20 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-8 border-t border-text/10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-5xl md:text-6xl mb-8">
              Let's work <span className="italic">together</span>
            </h2>
            <p className="text-lg text-muted mb-8">
              Interested in collaborating? Get in touch.
            </p>
            <a 
              href="mailto:hello@angieyoo.com"
              className="inline-block px-10 py-4 border border-text rounded-full font-body text-sm tracking-wider hover:bg-text hover:text-white transition-all"
            >
              CONTACT ME
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 border-t border-text/10">
        <div className="max-w-5xl mx-auto flex justify-between items-center text-sm font-body text-muted">
          <p>© 2026 Portfolio</p>
          <p>Built with Claude, Framer, Vercel</p>
        </div>
      </footer>
    </main>
  )
}
