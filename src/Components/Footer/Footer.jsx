import React from 'react'
import { motion } from 'framer-motion'
import { SiGithub } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa'
import { HiArrowUp, HiHeart } from 'react-icons/hi'
import './Footer.css'

const links = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#project' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/fathima-shahanaip/', label: 'LinkedIn', color: '#0A66C2' },
  { icon: <SiGithub />, href: 'https://github.com/shahanaip-dev', label: 'GitHub', color: 'var(--text-primary)' },
]

const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-blob" />
      <div className="container">
        <div className="footer-grid glass">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              FATHIMA <span>SHAHANA IP</span>
            </div>
            <p>
              Full Stack MERN Developer from Kerala, India. Passionate about
              crafting innovative web experiences that make a difference.
            </p>
            <div className="footer-socials">
              {socials.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="social-btn glass"
                  style={{ '--sc': s.color }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="footer-links-col">
            <h4>Quick Links</h4>
            <ul>
              {links.map(l => (
                <li key={l.label}>
                  <a href={l.href} onClick={e => {
                    e.preventDefault()
                    document.querySelector(l.href)?.scrollIntoView({ behavior: 'smooth' })
                  }}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-contact-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:shahanaip222@gmail.com">shahanaip222@gmail.com</a></li>
              <li><a href="tel:+919544333819">+91 9544333819</a></li>
              <li><span>Kozhikode, Kerala, India</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} FATHIMA SHAHANA IP. Made with&nbsp;
            <HiHeart className="heart-icon" /> All rights reserved.
          </p>
          <motion.button
            className="scroll-top-btn btn-primary"
            onClick={scrollTop}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top"
          >
            <HiArrowUp />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
