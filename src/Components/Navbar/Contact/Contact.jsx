import React, { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { HiMail, HiPhone, HiLocationMarker, HiPaperAirplane, HiCheckCircle, HiXCircle } from 'react-icons/hi'
import { SiGithub } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa'
import './Contact.css'

const contactInfo = [
  {
    icon: <HiMail />,
    label: 'Email',
    value: 'shahanaip222@gmail.com',
    href: 'mailto:shahanaip222@gmail.com',
    color: '#7C3AED',
  },
  {
    icon: <FaLinkedin />,
    label: 'LinkedIn',
    value: 'fathima-shahanaip',
    href: 'https://www.linkedin.com/in/fathima-shahanaip/',
    color: '#0A66C2',
  },
  {
    icon: <SiGithub />,
    label: 'GitHub',
    value: 'shahanaip-dev',
    href: 'https://github.com/shahanaip-dev',
    color: '#333',
  },
  {
    icon: <HiPhone />,
    label: 'Phone',
    value: '+91 9544333819',
    href: 'tel:+919544333819',
    color: '#10B981',
  },
  {
    icon: <HiLocationMarker />,
    label: 'Location',
    value: 'Kozhikode, Kerala, India',
    href: null,
    color: '#EF4444',
  },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
})

const Contact = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [status, setStatus] = useState({ type: 'idle', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = async (event) => {
    event.preventDefault()
    if (isSubmitting) return
    setIsSubmitting(true)
    setStatus({ type: 'idle', message: '' })

    const formData = new FormData(event.target)
    formData.append('access_key', 'd33f9582-6993-4c88-adc2-89edd4d13987')
    const json = JSON.stringify(Object.fromEntries(formData))

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: json,
      }).then(r => r.json())

      if (res.success) {
        setStatus({ type: 'success', message: 'Message sent successfully! I\'ll get back to you soon.' })
        event.target.reset()
      } else {
        setStatus({ type: 'error', message: res.message || 'Something went wrong. Please try again.' })
      }
    } catch {
      setStatus({ type: 'error', message: 'Network error. Please try again later.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section-pad contact-section" ref={ref}>
      <div className="contact-blob" />
      <div className="container">
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">Get In Touch</span>
          <h2 className="section-heading">Let's work <span>together</span></h2>
          <p className="section-desc">
            I'm currently open for internships and full-time opportunities.
            Whether you have a project in mind or just want to say hi — my
            inbox is always open!
          </p>
        </motion.div>

        <div className="contact-grid">
          {/* Left */}
          <motion.div
            className="contact-left"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <h3 className="contact-cta">Ready to start a conversation?</h3>
            <p className="contact-cta-sub">
              Feel free to reach out through any of the channels below.
              I typically respond within 24 hours.
            </p>

            <div className="contact-info-list">
              {contactInfo.map((c, i) => (
                <motion.div
                  key={i}
                  className="contact-info-item glass"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  whileHover={{ x: 6, transition: { duration: 0.2 } }}
                >
                  <span className="ci-icon" style={{ '--ci-color': c.color }}>
                    {c.icon}
                  </span>
                  <div className="ci-text">
                    <span className="ci-label">{c.label}</span>
                    {c.href ? (
                      <a href={c.href} target="_blank" rel="noopener noreferrer" className="ci-value">
                        {c.value}
                      </a>
                    ) : (
                      <span className="ci-value">{c.value}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            className="contact-right"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <form className="contact-form glass" onSubmit={onSubmit}>
              <h4 className="form-title">Send me a message</h4>

              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Tell me about your project or just say hello..."
                  required
                />
              </div>

              <button type="submit" className="btn-primary form-submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <><HiPaperAirplane /> Send Message</>
                )}
              </button>

              {status.message && (
                <motion.div
                  className={`form-status ${status.type}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {status.type === 'success' ? <HiCheckCircle /> : <HiXCircle />}
                  {status.message}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
