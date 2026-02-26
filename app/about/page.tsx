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
        "Architected Global Patterns system defining cross-product experiences (navigation, notifications) across Dayforce's enterprise HCM platform, establishing unified interaction models for millions of users across 80+ product surfaces",
        "Shipped Table 2.1 as platform-wide standard, replacing 32 fragmented implementations with single token-driven pattern—now used across 80% of product surfaces with 27.6K+ weekly insertions and zero accessibility bugs post-launch",
        "Led first AI experience design for Dayforce, creating foundational components and interaction patterns that scale across agentic and intelligent UI contexts, establishing reusable building blocks for future AI product development",
        "Drove 80% adoption across 32 product teams through systematic pattern documentation, migration guidance, and direct partnership with engineering leads—transforming ad-hoc implementations into standardized, maintainable system",
        "Scaled design systems impact from component library to platform layer, defining reusable patterns that encode product logic and reduce implementation variance across organizational boundaries"
      ]
    },
    {
      period: "2022 — 2024",
      company: "Dayforce (Ceridian)",
      position: "Lead Product Designer, Everest Design Systems",
      description: [
        "Built Dayforce's modern design system from 0→1, replacing 15-year-old legacy UI with token-driven architecture that enables 100+ designers and 300+ engineers to build consistently without constant design oversight",
        "Designed token architecture separating brand decisions from system structure, enabling automatic theme propagation across products and eliminating need for per-component overrides—reducing maintenance cost by 60%",
        "Established system contribution model including component proposals, review criteria, and deprecation workflows—enabling teams to extend system while maintaining coherence and preventing fragmentation",
        "Scaled design systems practice from 1 designer to embedded model across product areas, mentoring 60+ designers through weekly Office Hours and building systematic thinking org-wide",
        "Created documentation and implementation guidance that reduced component misuse by 75% and decreased design-to-dev handoff questions, allowing teams to self-serve without constant escalation"
      ]
    },
    {
      period: "2020 — 2022",
      company: "Sunlife",
      position: "Design Operations Manager, Global Design Systems",
      description: [
        "Architected cascading system structure enabling 5 regional markets to extend global foundation with local patterns while maintaining cross-market consistency—supporting products across North America, Asia, and EMEA",
        "Defined governance frameworks that balanced central standards with regional autonomy, creating contribution models that scaled pattern library from 40 to 120+ components without fragmentation",
        "Established metrics-driven adoption strategy tracking usage, consistency scores, and team velocity improvements, demonstrating system ROI and securing executive buy-in for continued investment"
      ]
    }, 
    {
      period: "2019 — 2020",
      company: "Loblaw Digital",
      position: "Design Systems Lead",
      description: [
        "Built white-label, multi-brand system from 0→1 supporting 13 grocery eCommerce sites, enabling brands to launch with distinct identities while sharing underlying component architecture",
        "Designed theming architecture using tokens to separate brand expression from component logic, allowing brand teams to customize visual identity without forking codebase—reducing launch time from 6 months to 6 weeks",
        "Drove systems adoption in resistant organization, shifting teams from 'not invented here' mindset to shared-system model through education, demonstrable value (reduced rework), and incremental wins"
      ]
    }, 
    {
      period: "2008 — 2019",
      company: "Shopify, TD Bank, Startups, etc",
      position: "Product Design IC & Manager",
      description: [
        "Led product design across startup and enterprise environments, shipping in both fast-moving and heavily regulated contexts",
        "Built design leadership capabilities managing teams of 3-8 designers while maintaining hands-on IC contributions"
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
      degree: "Computer Science (2 years)",
      description: "Algorithms, data structures, software engineering principles"
    } 
  ]

  const skills = {
    "Platform Design": ["Navigation architecture", "Global patterns", "Cross-product experiences", "System-level thinking", "Scalability planning"],
    "Systems Leadership": ["Governance models", "Contribution frameworks", "Adoption strategy", "Cross-functional alignment", "Organizational change"],
    "Technical Depth": ["Design tokens", "Component architecture", "React patterns", "HTML/CSS", "Figma (advanced)", "Storybook", "CodeConnect"]
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
          <a
            href="https://www.linkedin.com/in/yooangie/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:opacity-70 transition-opacity text-text"
            aria-label="LinkedIn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/>
            </svg>
          </a>
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
              Platform Systems & Architecture
            </p>
            <p className="text-lg leading-relaxed max-w-3xl">
              <strong>Platform designer specializing in system-level problems that scale across products.</strong> 7 years building design systems that standardize cross-product experiences, define navigation architecture, and establish foundational patterns (tables, notifications, navigation) used by <strong>30+ teams serving millions of users</strong>.
            </p>
          </motion.div>

          <motion.div 
            className="flex gap-6 mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <a href="mailto:hello@angieyoo.com" className="px-6 py-3 border border-text rounded-full font-body text-sm tracking-wider hover:bg-text hover:text-white transition-all">
              GET IN TOUCH
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
                 <ul className="space-y-3">
                  {job.description.map((item, i) => (
                    <li key={i} className="text-muted leading-relaxed flex gap-3">
                      <span className="text-accent mt-1 flex-shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                ))}
                </ul>
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
