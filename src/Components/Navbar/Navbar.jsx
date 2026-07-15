import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX, HiMoon, HiSun } from 'react-icons/hi'
import './Navbar.css'

const links = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#project' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

const Navbar = ({ darkMode, toggleDark }) => {
  const [active, setActive] = useState('Home')
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (label, href) => {
    setActive(label)
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 80
      window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' })
    }
  }

  return (
    <>
      <motion.nav
        className={`navbar-wrap ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="navbar-inner">
          <a className="navbar-logo" href="#hero" onClick={e => { e.preventDefault(); handleNav('Home', '#hero') }}>
            <span className="logo-text">FATHIMA <span>SHAHANA IP</span></span>
          </a>

          <ul className="navbar-links">
            {links.map(link => (
              <li key={link.label}>
                <a
                  className={`nav-link ${active === link.label ? 'active' : ''}`}
                  href={link.href}
                  onClick={e => { e.preventDefault(); handleNav(link.label, link.href) }}
                >
                  {link.label}
                  {active === link.label && (
                    <motion.span className="nav-dot" layoutId="navDot" />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div className="navbar-actions">
            <button className="theme-toggle" onClick={toggleDark} aria-label="Toggle theme">
              <AnimatePresence mode="wait">
                <motion.span
                  key={darkMode ? 'sun' : 'moon'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {darkMode ? <HiSun /> : <HiMoon />}
                </motion.span>
              </AnimatePresence>
            </button>

            <a
              className="btn-primary nav-cta"
              href="#contact"
              onClick={e => { e.preventDefault(); handleNav('Contact', '#contact') }}
            >
              Let's Talk
            </a>

            <button className="mobile-toggle" onClick={() => setMobileOpen(o => !o)} aria-label="Menu">
              {mobileOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="mobile-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 200 }}
            >
              <div className="mobile-menu-header">
                <span className="logo-text">FATHIMA <span>SHAHANA IP</span></span>
                <button onClick={() => setMobileOpen(false)}><HiX /></button>
              </div>
              <ul className="mobile-links">
                {links.map((link, i) => (
                  <motion.li
                    key={link.label}
                    initial={{ x: 30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <a
                      href={link.href}
                      className={active === link.label ? 'active' : ''}
                      onClick={e => { e.preventDefault(); handleNav(link.label, link.href) }}
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <div className="mobile-bottom">
                <button className="theme-toggle" onClick={toggleDark}>
                  {darkMode ? <HiSun /> : <HiMoon />}
                  {darkMode ? 'Light Mode' : 'Dark Mode'}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
