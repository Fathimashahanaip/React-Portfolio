import React from 'react'
import './About.css'
import profile from '../../../assets/profile.jpg'

// import circle from '../../../assets/circle.png'



const About = () => {
  return (
    <div id="about" className='about'>
        <div className="about-title">
            <h2>About</h2>
            <h3>Here is a little background</h3>
        </div>
        <div className="about-content">
            <p>I'm Fathima Shahana IP. I am a Software Developer, here is a little bit about me... I have been coding for over 3 years now. During my studies I gained hands-on experience in Web Development by creating lot of websites. Most of my works are in the MERN stack. I also have experience with programming languages such as JavaScript, Python and frameworks like React, Node.js, and I am also looking for opportunities to expand my skillset. Outside of work I enjoy learning new technologies, which makes me more energized and inspired.</p>
        </div>
    </div>
  )
}

export default About