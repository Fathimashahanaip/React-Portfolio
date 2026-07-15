import React from 'react'
import { motion } from 'framer-motion'
import { SiReact, SiNextdotjs, SiNodedotjs, SiMongodb, SiPostgresql, SiExpress } from 'react-icons/si'
import { HiArrowRight, HiDownload } from 'react-icons/hi'
import profile from '../../../assets/profile.jpg'
import resume from '../../../assets/Fathima_Shahana_Ip_resume.pdf'
import './Hero.css'

const techIcons = [
  { icon: <SiReact />, label: 'React', color: '#61DAFB', delay: 0 },
  { icon: <SiNextdotjs />, label: 'Next.js', color: '#fff', delay: 0.1 },
  { icon: <SiNodedotjs />, label: 'Node.js', color: '#68A063', delay: 0.2 },
  { icon: <SiMongodb />, label: 'MongoDB', color: '#47A248', delay: 0.3 },
  { icon: <SiPostgresql />, label: 'Postgres', color: '#336791', delay: 0.4 },
  { icon: <SiExpress />, label: 'Express', color: '#ccc', delay: 0.5 },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 36 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      {/* Background blobs */}
      <div className="hero-blob hero-blob-1" />
      <div className="hero-blob hero-blob-2" />
      <div className="hero-grid-lines" aria-hidden="true" />

      <div className="container hero-container">
        {/* Left — text */}
        <div className="hero-left">
          <motion.div {...fadeUp(0)}>
            <span className="section-label">Available for opportunities</span>
          </motion.div>

          <motion.h1 className="hero-title" {...fadeUp(0.1)}>
            Full Stack<br />
            Developer &amp;<br />
            <span className="gradient-text">Creative Problem</span><br />
            Solver
          </motion.h1>

          <motion.p className="hero-desc" {...fadeUp(0.2)}>
            I'm FATHIMA SHAHANA IP — a Full Stack Developer crafting elegant,
            performant web applications with the MERN stack. I turn complex
            problems into clean, user-focused digital experiences.
          </motion.p>

          <motion.div className="hero-actions" {...fadeUp(0.3)}>
            <a className="btn-primary" href="#project" onClick={e => {
              e.preventDefault()
              document.querySelector('#project')?.scrollIntoView({ behavior: 'smooth' })
            }}>
              View Projects <HiArrowRight />
            </a>
            <a className="btn-outline" href={resume} download="Fathima_Shahana_Resume.pdf">
              Download Resume <HiDownload />
            </a>
          </motion.div>

          <motion.div className="hero-stats" {...fadeUp(0.4)}>
            {[
              { val: '3+', label: 'Years Coding' },
              { val: '10+', label: 'Projects Built' },
              { val: '2', label: 'Internships' },
            ].map(s => (
              <div key={s.label} className="stat-item">
                <span className="stat-val">{s.val}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — profile card */}
        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Floating profile card */}
          <div className="profile-card glass">
            <div className="profile-img-wrap">
              <img src={profile} alt="Fathima Shahana" className="profile-img" />
              <div className="profile-ring" />
            </div>

            <div className="profile-info">
              <h3>FATHIMA SHAHANA IP</h3>
              <p>Full Stack Developer</p>
              <span className="profile-status">
                <span className="status-dot" /> Available to hire
              </span>
            </div>

            {/* Floating tech chips */}
            <div className="tech-chips">
              {techIcons.map((t, i) => (
                <motion.div
                  key={t.label}
                  className="tech-chip"
                  style={{ '--icon-color': t.color }}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: 'easeInOut', delay: t.delay }}
                >
                  <span style={{ color: t.color }}>{t.icon}</span>
                  <span>{t.label}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Floating badges */}
          <motion.div
            className="badge-float badge-top"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="badge-icon">⚡</span>
            <div>
              <div className="badge-title">MCA Graduate</div>
              <div className="badge-sub">2020 – 2022</div>
            </div>
          </motion.div>

          <motion.div
            className="badge-float badge-bottom"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          >
            <span className="badge-icon">🚀</span>
            <div>
              <div className="badge-title">Bairuha Tech</div>
              <div className="badge-sub">Full Stack Intern</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="scroll-line" />
        <span>Scroll</span>
      </motion.div>
    </section>
  )
}

export default Hero
