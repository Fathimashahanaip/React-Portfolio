import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiAcademicCap, HiCode, HiLightBulb, HiStar } from 'react-icons/hi'
import profile from '../../../assets/profile.png'
import './About.css'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
}

const cards = [
  {
    icon: <HiAcademicCap />,
    title: 'MCA Graduate',
    desc: 'Master of Computer Applications — 2020–2022. Strong foundations in CS fundamentals, algorithms, and software engineering.',
    color: '#7C3AED',
  },
  {
    icon: <HiCode />,
    title: 'MERN Stack Dev',
    desc: 'Building full-stack apps with MongoDB, Express, React, and Node.js. Comfortable across the entire web stack.',
    color: '#06B6D4',
  },
  {
    icon: <HiStar />,
    title: 'Internship Exp.',
    desc: 'Full Stack Intern at Bairuha Tech & MERN Intern at Futura Labs. Real-world product dev experience.',
    color: '#F59E0B',
  },
  {
    icon: <HiLightBulb />,
    title: 'Creative Thinker',
    desc: 'Passionate about turning complex problems into clean, elegant solutions. Always learning new technologies.',
    color: '#10B981',
  },
]

const About = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="section-pad about-section" ref={ref}>
      <div className="hero-blob about-blob-1" />
      <div className="container">
        <motion.div
          className="about-header"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={stagger}
        >
          <motion.span className="section-label" variants={fadeUp}>About Me</motion.span>
          <motion.h2 className="section-heading" variants={fadeUp}>
            A developer who loves <span>building things</span>
          </motion.h2>
          <motion.p className="section-desc" variants={fadeUp}>
            I'm FATHIMA SHAHANA IP, a Full Stack Developer with 3+ years of self-coding
            and 1+ years of professional experience. I specialize in the MERN stack and love
            creating responsive, user-friendly web applications. Outside work, I explore new
            tech and frameworks.
          </motion.p>
        </motion.div>

        <div className="about-grid">
          <motion.div
            className="about-image-col"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="about-img-wrap glass">
              <img src={profile} alt="Fathima Shahana" className="about-img" />
              <div className="about-img-badge glass">
                <span className="big-num">3+</span>
                <span className="big-label">Years of Experience</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-cards"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={stagger}
          >
            {cards.map((c, i) => (
              <motion.div key={i} className="about-card glass" variants={fadeUp}>
                <span className="about-card-icon" style={{ '--icon-color': c.color }}>
                  {c.icon}
                </span>
                <div>
                  <h4>{c.title}</h4>
                  <p>{c.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
