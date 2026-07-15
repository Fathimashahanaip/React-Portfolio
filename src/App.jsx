import React, { useState, useEffect } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Navbar/Hero/Hero'
import About from './Components/Navbar/About/About'
import Experience from './Components/Experience/Experience'
import Skills from './Components/Skills/Skills'
import Projects from './Components/Navbar/Projects/Projects'
import Contact from './Components/Navbar/Contact/Contact'
import Education from './Components/Education/Education'
import Footer from './Components/Footer/Footer'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved === 'dark') {
      setDarkMode(true)
      document.body.setAttribute('data-theme', 'dark')
    }
  }, [])

  const toggleDark = () => {
    const next = !darkMode
    setDarkMode(next)
    document.body.setAttribute('data-theme', next ? 'dark' : '')
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  return (
    <div>
      <Navbar darkMode={darkMode} toggleDark={toggleDark} />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
