import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { HiAcademicCap, HiCalendar, HiLocationMarker } from 'react-icons/hi'
import './Education.css'

const educations = [
  {
    degree: 'Master of Computer Application',
    short: 'MCA',
    institution: 'APJ Abdul Kalam Technological University',
    location: 'Kerala, India',
    period: 'Jul 2020 – Aug 2022',
    grade: 'CGPA: 7.71',
    gradeLabel: 'Cumulative GPA',
    color: '#7C3AED',
  },
  {
    degree: 'Bachelor of Science — Mathematics',
    short: 'B.Sc.',
    institution: 'University of Calicut',
    location: 'Kozhikode, Kerala',
    period: 'Jul 2017 – Apr 2020',
    grade: '71%',
    gradeLabel: 'Percentage',
    color: '#06B6D4',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
  }),
}

const Education = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="education" className="section-pad education-section" ref={ref}>
      <div className="edu-blob" />
      <div className="container">
        <motion.div
          className="edu-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">Academic Background</span>
          <h2 className="section-heading">My <span>Education</span></h2>
          <p className="section-desc">
            Academic foundations that shaped my analytical thinking and
            problem-solving approach in software development.
          </p>
        </motion.div>

        <div className="edu-grid">
          {educations.map((edu, i) => (
            <motion.div
              key={i}
              className="edu-card glass"
              custom={i}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.22 } }}
            >
              {/* Top accent bar */}
              <div className="edu-accent-bar" style={{ background: edu.color }} />

              <div className="edu-card-inner">
                {/* Icon */}
                <div className="edu-icon-wrap" style={{ '--edu-color': edu.color }}>
                  <HiAcademicCap />
                </div>

                {/* Degree badge */}
                <span className="edu-short-badge" style={{ '--edu-color': edu.color }}>
                  {edu.short}
                </span>

                {/* Degree name */}
                <h3 className="edu-degree">{edu.degree}</h3>

                {/* Institution */}
                <p className="edu-institution">{edu.institution}</p>

                <div className="edu-meta">
                  <span className="edu-meta-item">
                    <HiLocationMarker /> {edu.location}
                  </span>
                  <span className="edu-meta-item">
                    <HiCalendar /> {edu.period}
                  </span>
                </div>

                {/* Grade */}
                <div className="edu-grade-wrap" style={{ '--edu-color': edu.color }}>
                  <span className="edu-grade-label">{edu.gradeLabel}</span>
                  <span className="edu-grade-val">{edu.grade}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
