import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  SiReact, SiNextdotjs, SiNodedotjs, SiExpress,
  SiMongodb, SiPostgresql, SiJavascript, SiHtml5,
  SiCss, SiGit, SiTailwindcss, SiNestjs
} from 'react-icons/si'
import './Skills.css'

const skills = [
  { name: 'React.js', icon: <SiReact />, color: '#61DAFB', level: 90 },
  { name: 'Next.js', icon: <SiNextdotjs />, color: '#ffffff', level: 82 },
  { name: 'Node.js', icon: <SiNodedotjs />, color: '#68A063', level: 85 },
  { name: 'Express.js', icon: <SiExpress />, color: '#cccccc', level: 83 },
  { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248', level: 80 },
  { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#336791', level: 75 },
  { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E', level: 88 },
  { name: 'HTML5', icon: <SiHtml5 />, color: '#E34F26', level: 95 },
  { name: 'CSS3', icon: <SiCss />, color: '#264DE4', level: 90 },
  { name: 'Nest.js', icon: <SiNestjs />, color: '#E0234E', level: 72 },
  { name: 'Tailwind', icon: <SiTailwindcss />, color: '#38BDF8', level: 85 },
  { name: 'Git', icon: <SiGit />, color: '#F05032', level: 80 },
]

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] },
  }),
}

const Skills = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="section-pad skills-section" ref={ref}>
      <div className="container">
        <motion.div
          className="skills-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">Tech Stack</span>
          <h2 className="section-heading">Skills &amp; <span>Technologies</span></h2>
          <p className="section-desc">
            My toolkit for building full-stack web applications — from frontend
            interfaces to backend APIs and databases.
          </p>
        </motion.div>

        <div className="skills-grid">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              className="skill-card glass"
              custom={i}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <div className="skill-icon-wrap" style={{ '--skill-color': skill.color }}>
                <span className="skill-icon" style={{ color: skill.color }}>
                  {skill.icon}
                </span>
              </div>

              <span className="skill-name">{skill.name}</span>

              <div className="skill-bar-wrap">
                <motion.div
                  className="skill-bar"
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: i * 0.06 + 0.3, ease: 'easeOut' }}
                  style={{ background: `linear-gradient(90deg, ${skill.color}88, ${skill.color})` }}
                />
              </div>

              <span className="skill-pct">{skill.level}%</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
