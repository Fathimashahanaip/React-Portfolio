import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { HiBriefcase, HiLocationMarker, HiCalendar } from 'react-icons/hi'
import './Experience.css'

const experiences = [
  {
    title: 'Full Stack Developer Intern',
    company: 'Bairuha Tech',
    location: 'Kozhikode, India',
    period: 'Jan 2026 – Present',
    current: true,
    technologies: ['React.js', 'Next.js', 'Node.js', 'Nest.js', 'MongoDB', 'PostgreSQL', 'Express.js'],
    description: [
      'Working as part of a cross-functional team to design and build real-world web applications from requirements to implementation',
      'Collaborating on feature planning, task division, and code reviews to ensure timely milestone delivery',
    ],
  },
  {
    title: 'MERN Full Stack Developer Intern',
    company: 'Futura Labs',
    location: 'Kozhikode, India',
    period: 'Jun 2025 – Dec 2025',
    current: false,
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'JavaScript', 'RESTful APIs'],
    description: [
      'Developed responsive web applications using the MERN stack following modern UI/UX practices',
      'Built reusable React components and managed application state with hooks',
      'Implemented RESTful APIs for authentication, CRUD operations, and seamless data flow',
    ],
  },
  {
    title: 'Software Developer',
    company: 'Self Projects',
    period: '2020 – 2022',
    current: false,
    technologies: ['React.js', 'Python', 'Django', 'Flask', 'MongoDB', 'JavaScript'],
    description: [
      'Built multiple web applications including rental management and e-ration shop platform',
      'Gained hands-on full-stack development experience across frontend and backend',
    ],
  },
]

const itemVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
}

const Experience = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="section-pad experience-section" ref={ref}>
      <div className="container">
        <motion.div
          className="experience-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">Career</span>
          <h2 className="section-heading">Work <span>Experience</span></h2>
          <p className="section-desc">
            My professional journey — from internships to freelance projects,
            building real-world applications across industries.
          </p>
        </motion.div>

        <div className="timeline">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className="timeline-item"
              custom={i}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={itemVariants}
            >
              {/* Timeline dot */}
              <div className="timeline-dot">
                <HiBriefcase />
                {exp.current && <span className="current-ring" />}
              </div>

              {/* Card */}
              <div className="exp-card glass">
                <div className="exp-card-top">
                  <div className="exp-title-group">
                    <div className="exp-title-row">
                      <h3>{exp.title}</h3>
                      {exp.current && <span className="current-badge">Current</span>}
                    </div>
                    <div className="exp-meta">
                      <span className="exp-company">{exp.company}</span>
                      {exp.location && (
                        <span className="exp-location">
                          <HiLocationMarker /> {exp.location}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="exp-period">
                    <HiCalendar /> {exp.period}
                  </div>
                </div>

                <ul className="exp-desc">
                  {exp.description.map((d, j) => (
                    <li key={j}>{d}</li>
                  ))}
                </ul>

                <div className="exp-tech-row">
                  {exp.technologies.map((t, j) => (
                    <span key={j} className="exp-tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
