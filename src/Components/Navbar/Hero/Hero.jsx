import React from 'react'
import './Hero.css'
import profile from '../../../assets/profile.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import insta from '../../../assets/insta.svg'
import whatsapp from '../../../assets/whatsapp.svg'
import git from '../../../assets/git.svg'
import linkedn from '../../../assets/link.svg'
import upparrow from '../../../assets/uparrow.svg'


const Hero = () => {
  return (
    <div id='hero' className='hero'>
        <img src={profile} alt="" />
      
        <div className="social-img">
          <div className="img-s">
           <a href='www.linkedin.com/in/fathimashahanaip'> <img src={linkedn} alt="" /></a>

          </div>
          <div className="img-s">
          <a href='https://github.com/Fathimashahanaip'> <img src={git} alt="" /></a> 
            
            </div>
            {/* <div className="img-s">
           <a>   <img src={whatsapp} alt="" /></a>
            
            </div>
            <div className="img-s">
             <a> <img src={insta} alt="" /></a>
            
            </div> */}
        </div>
     
        <h1> <span>I'm Fathima shahana IP,</span><br></br>Software Developer</h1>
        <p> I am a full stack entry-level MERN-Stack  Developer</p>
        <div className="hero-action">
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            <div className="hero-connect">Connect with me </div></AnchorLink>
           <a className='anchor-link'  href='../../../assets/shahana.pdf'> <div className="hero-resume">My resume</div></a>
        </div>
     

    </div>
  )
}

export default Hero
