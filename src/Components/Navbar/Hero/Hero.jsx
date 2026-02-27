import React from 'react'
import './Hero.css'
import profile from '../../../assets/profile.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import resume from '../../../assets/Shahana.pdf'


const Hero = () => {
  return (
    <div id='hero' className='hero'>
        <div className="hero-content">
          <div className="hero-image-container">
            <img src={profile} alt="Fathima Shahana IP - Software Developer" className="hero-profile-img" />
          </div>
          
          <div className="hero-text">
            <h2 className="hero-subtitle">Software Developer</h2>
            <h1 className="hero-title">I'm Fathima Shahana IP</h1>
            <p className="hero-description">I am a full stack entry-level MERN-Stack Developer</p>
            
            <div className="hero-action">
              <AnchorLink className='anchor-link' offset={50} href='#contact'>
                <div className="hero-connect">Get in touch</div>
              </AnchorLink>
              <a className='anchor-link' href={resume} download="Shahana_Resume.pdf"> 
                <div className="hero-resume">My resume</div>
              </a>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Hero
