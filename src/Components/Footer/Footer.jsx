import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'
import git from '../../assets/git.svg'
import linkedn from '../../assets/link.svg'


const Footer = () => {
  return (
    <div id='footer' className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <div className="footer-logo-wrapper">
                    <img src={logo} alt="Fathima Shahana IP Logo" className="footer-logo" />
                </div>
                <p className="footer-description">I am a full stack Developer from, INDIA. Passionate about creating innovative web solutions and bringing ideas to life through code.</p>
                <div className="footer-social">
                    <a href='https://www.linkedin.com/in/fathima-shahanaip/' target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="LinkedIn Profile">
                        <img src={linkedn} alt="LinkedIn" />
                    </a>
                    <a href='https://github.com/Fathimashahanaip' target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="GitHub Profile">
                        <img src={git} alt="GitHub" />
                    </a>
                </div>
            </div>
            <div className="footer-top-right">
                <div className="footer-links-section">
                    <h4 className="footer-section-title">Quick Links</h4>
                    <div className="footer-links">
                        <a href="#hero" className="footer-link">About</a>
                        <a href="#experience" className="footer-link">Experience</a>
                        <a href="#skills" className="footer-link">Skills</a>
                        <a href="#project" className="footer-link">Projects</a>
                        <a href="#contact" className="footer-link">Contact</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-divider"></div>
        <div className="footer-bottom">
            <div className="footer-bottom-left">
                <p>© 2025 Fathima Shahana IP. All rights reserved</p>
            </div>
            <div className="footer-bottom-right">
                <a href="#" className="footer-bottom-link">Terms of Services</a>
                <a href="#" className="footer-bottom-link">Privacy Policy</a>
                <a href="#contact" className="footer-bottom-link">Connect with Me</a>
            </div>
        </div>
    </div>
  )
}

export default Footer