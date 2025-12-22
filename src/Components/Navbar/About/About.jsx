import React from 'react'
import './About.css'
import profile from '../../../assets/profile.jpg'

// import circle from '../../../assets/circle.png'



const About = () => {
  return (
    <div  id="about"className='about'>
        <div className="about-title">
            <h1>About me</h1>
            {/* <img src={circle} width={150} height={150}></img> */}
        </div>
        <div className="about-section">
            <div className="about-left">
                <img src={profile} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Seeking an entry-level position with a reputable organization where I can utilize my skills and expand my learning in the workplace. I am capable of mastering new technologies.</p>
                    <p> I am confident in my capacity to make a substantial contribution to the success of the company. My ultimate goal is to help the team achieve their goals by creating quality and reliable software solutions.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill">
                        <p>HTML & CSS</p><hr style={{width:"50%"}}></hr>
                    </div>
                    <div className="about-skill">
                        <p>React.js</p><hr style={{width:"70%"}}></hr>
                    </div>
                    <div className="about-skill">
                        <p>JavaScript</p><hr style={{width:"60%"}}></hr>
                    </div>
                    <div className="about-skill">
                        <p>MERN-STACK</p><hr style={{width:"50%"}}></hr>
                    </div>
                </div>
                
            </div>
        </div>

      <div className="about-achievements">
        <div className="about-achievement">
            <h1>3+</h1>
            <p>YEARS OF SELF EXPERIENCE</p>
        </div>
        <hr/>
        <div className="about-achievement">
            <h1>5</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr/>
        <div className="about-achievement">
            <h1>MCA</h1>
            <p>Gratuate</p>
        </div>

        </div>  

    </div>
  )
}

export default About