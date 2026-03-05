import React from 'react'
import './Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import resume from '../../../assets/Fathima_Shahana_Ip_resume.pdf'
import { SiHtml5, SiReact, SiNextdotjs, SiMongodb, SiNodedotjs, SiExpress, SiPostgresql, SiTailwindcss, SiCloudflare, SiGithubcopilot } from 'react-icons/si'
import { FaMousePointer, FaRocket } from 'react-icons/fa'


const Hero = () => {
  return (
    <div id='hero' className='hero'>
        <div className="hero-content">
          <div className="hero-image-container">
            <div className="hero-illustration" aria-hidden="true">
              <div className="dev-orbit dev-orbit-outer">
                <div className="dev-center-wrap">
                  <div className="dev-center">
                    <div className="dev-screen">
                      <div className="dev-screen-top">
                        <span className="dot dot-red"></span>
                        <span className="dot dot-yellow"></span>
                        <span className="dot dot-green"></span>
                      </div>
                      <div className="dev-screen-code">
                        <span className="code-line w-80"></span>
                        <span className="code-line w-60"></span>
                        <span className="code-line w-70"></span>
                        <span className="code-line w-50"></span>
                      </div>
                    </div>
                    <div className="dev-stand"></div>
                  </div>
                </div>

                <div className="dev-icon icon-1 html-icon"><SiHtml5 /></div>
                <div className="dev-icon icon-2 react-icon"><SiReact /></div>
                <div className="dev-icon icon-3 node-icon"><SiNodedotjs /></div>
                <div className="dev-icon icon-4 mongo-icon"><SiMongodb /></div>
                <div className="dev-icon icon-8 tailwind-icon"><SiTailwindcss /></div>
                <div className="dev-icon icon-9 cursor-icon"><FaMousePointer /></div>
                <div className="dev-icon icon-10 antigravity-icon"><FaRocket /></div>
              </div>

              <div className="dev-orbit dev-orbit-inner">
                <div className="dev-icon icon-5 next-icon"><SiNextdotjs /></div>
                <div className="dev-icon icon-6 express-icon"><SiExpress /></div>
                <div className="dev-icon icon-7 pg-icon"><SiPostgresql /></div>
                <div className="dev-icon icon-11 cloud-icon"><SiCloudflare /></div>
                <div className="dev-icon icon-12 copilot-icon"><SiGithubcopilot /></div>
              </div>
            </div>
          </div>
          
          <div className="hero-text">
            <h2 className="hero-subtitle">Software Developer</h2>
            <h1 className="hero-title">I'm Fathima Shahana IP</h1>
            <p className="hero-description">I am a full stack entry-level MERN-Stack Developer</p>
            
            <div className="hero-action">
              <AnchorLink className='anchor-link' offset={50} href='#contact'>
                <div className="hero-connect">Get in touch</div>
              </AnchorLink>
              <a className='anchor-link' href={resume} download="Fathima_Shahana IP_Resume.pdf"> 
                <div className="hero-resume">My resume</div>
              </a>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Hero
