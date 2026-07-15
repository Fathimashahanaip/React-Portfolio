import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { HiExternalLink, HiCode } from 'react-icons/hi'
import { SiGithub } from 'react-icons/si'
import projects from './ProjectData.js'
import './Projects.css'

const techColors = {
  'Python-Flask': '#3B7EBF',
  'HTML': '#E34F26',
  'CSS': '#264DE4',
  'JavaScript': '#F7DF1E',
  'Python-Django': '#092E20',
  'Next.js': '#7C3AED',
  'NestJS': '#E0234E',
  'PostgreSQL': '#336791',
  'React.js': '#61DAFB',
  'Node.js': '#68A063',
  'MongoDB': '#47A248',
}

const getTechColor = (tech) => {
  for (const key in techColors) {
    if (tech.toLowerCase().includes(key.toLowerCase())) return techColors[key]
  }
  return '#7C3AED'
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
}

const Projects = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="project" className="section-pad projects-section" ref={ref}>
      <div className="projects-blob" />
      <div className="container">
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">Portfolio</span>
          <h2 className="section-heading">Featured <span>Projects</span></h2>
          <p className="section-desc">
            Real-world applications I've built — from management platforms to
            e-commerce systems. Each project reflects my commitment to clean code
            and great UX.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              className="project-card glass"
              custom={i}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
            >
              {/* Image */}
              <div className="project-img-wrap">
                <img
                  src={p.image}
                  alt={p.Ptitle}
                  className="project-img"
                  loading="lazy"
                />
                <div className="project-img-overlay">
                  <HiCode className="overlay-icon" />
                </div>
              </div>

              {/* Content */}
              <div className="project-body">
                <h3 className="project-name">{p.Ptitle}</h3>
                <p className="project-overview">{p.overview}</p>

                {/* Tech badges */}
                <div className="project-tech-row">
                  {p.tech.split(',').map(t => t.trim()).map((t, j) => (
                    <span
                      key={j}
                      className="tech-badge"
                      style={{ '--tc': getTechColor(t) }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="project-links">
                  {p.link && (
                    <a
                      className="proj-link-btn github-btn"
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <SiGithub /> GitHub
                    </a>
                  )}
                  {p.live && (
                    <a
                      className="proj-link-btn live-btn"
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <HiExternalLink /> Live Demo
                    </a>
                  )}
                  {!p.live && p.link && (
                    <a
                      className="proj-link-btn live-btn"
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <HiExternalLink /> View Project
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
