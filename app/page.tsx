'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const { scrollYProgress } = useScroll()
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Generate particles
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: `${Math.random() * 3}s`,
    duration: `${8 + Math.random() * 4}s`
  }))

  const projects = [
    {
      year: "2026",
      title: "Notification Framework",
      discipline: "Systems Thinking",
      tags: ["Systems Thinking", "Interaction Design"],
      slug: "work-notification.html"
    },
    {
      year: "2025-6",
      title: "Data Tables",
      discipline: "Platform Patterns",
      tags: ["CRUD", "Templates", "Systems Thinking"],
      slug: "work/data-tables"
    },
    {
      year: "2024",
      title: "Wayfinding",
      discipline: "Navigation Architecture",
      tags: ["IA", "Research"],
      slug: "work-wayfinding.html"
    },
    {
      year: "2024",
      title: "Loading States",
      discipline: "Interaction Patterns",
      tags: ["UX Patterns", "Performance"],
      slug: "work-loading.html"
    }
  ]

  return (
    <main className="relative min-h-screen bg-primary text-text">
      {/* Floating particles background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.delay,
              animationDuration: particle.duration
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <motion.nav 
        className="fixed top-0 left-0 right-0 z-50 px-8 py-6 bg-white/80 backdrop-blur-sm border-b border-text/5"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="text-sm font-body tracking-wider text-text">ANGIE YOO</span>
            <span className="w-2 h-2 rounded-full bg-accent"></span>
          </div>
          <div className="flex gap-12 text-sm font-body tracking-wider text-text">
            <Link href="/about" className="hover:opacity-70 transition-opacity">
              <span className="text-accent">01</span> ABOUT
            </Link>
            <a href="#works" className="hover:opacity-70 transition-opacity">
              <span className="text-accent">02</span> WORKS
            </a>
            <a href="#contact" className="hover:opacity-70 transition-opacity">
              <span className="text-accent">03</span> CONTACT
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-accent"></span>
            <span className="text-sm font-body tracking-wider text-text">AVAILABLE FOR WORK</span>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-8">
        <div className="max-w-7xl w-full">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="text-sm font-body text-muted tracking-wider">01 - HELLO</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <h1 className="font-display text-7xl md:text-9xl font-normal mb-4 leading-none">
              ANGIE
            </h1>
            <h1 className="font-display text-7xl md:text-9xl font-normal italic leading-none">
              YOO
            </h1>
            <br/> 
            <p className="text-xl md:text-2xl font-display leading-relaxed mb-8">
                Principal-level product designer specializing in thoughtful systems & platform. </p>
          </motion.div>

         {/* <motion.button
            className="mt-32 px-8 py-4 border border-text rounded-full font-body text-sm tracking-wider hover:bg-text hover:text-primary transition-all duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
          >
            INITIALIZE
          </motion.button>*/}
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <div className="text-xs font-body text-muted mb-2 tracking-wider">SCROLL</div>
          <div className="w-px h-12 bg-muted mx-auto"></div>
        </motion.div>
      </section>

    

     
     
     

      {/* Works Section */}
      <section id="works" className="relative py-32 px-8 bg-white/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-5xl italic mb-4">The Patterns Gallery</h2>
            <p className="text-sm font-body text-muted tracking-wider">SELECTED WORKS 2026—2022</p>
          </motion.div>

          <div className="space-y-1 border-t border-text/10">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="group border-b border-text/10 hover:bg-white/50 transition-all duration-500"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ x: 10 }}
              >
                <a 
                  href={`/${project.slug}`}
                  className="block py-8 md:py-12 px-6"
                >
                  <div className="grid md:grid-cols-12 gap-6 items-center">
                    <div className="md:col-span-1">
                      <span className="text-sm font-body text-muted">{project.year}</span>
                    </div>
                    
                    <div className="md:col-span-6">
                      <h3 className="font-display text-4xl md:text-5xl font-normal group-hover:italic transition-all duration-300">
                        {project.title}
                      </h3>
                    </div>

                    <div className="md:col-span-5 flex justify-between items-center">
                      <div className="flex gap-3 flex-wrap">
                        {project.tags.map((tag) => (
                          <span 
                            key={tag}
                            className="text-xs font-body px-3 py-1 border border-text/20 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className="text-2xl group-hover:translate-x-2 transition-transform">→</span>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-6xl md:text-8xl mb-12 leading-tight">
              Let's create
              <br />
              <span className="italic">something remarkable</span>
            </h2>

            <motion.button
              className="px-10 py-5 border border-text rounded-full font-body text-sm tracking-wider hover:bg-text hover:text-primary transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              GET IN TOUCH
            </motion.button>

            <div className="mt-20 flex justify-center gap-12 text-sm font-body text-muted">
              <a href="#" className="hover:text-text transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-text transition-colors">Email</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-8 border-t border-text/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm font-body text-muted">
          <p>© 2026 Portfolio</p>
          <p>Built with Claude, Github & Vercel</p>
        </div>
      </footer>
    </main>
  )
}
