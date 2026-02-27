import React from 'react'
import './Projects.css'
import projects from '../Projects/ProjectData.js'

const Projects = () => {
  return (
    <div id='project' className='project'>
        <div className="project-title">
            <h2>Projects</h2>
        </div>
     
        <div className="project-container">
          {projects.map((p, index) => (
            <div key={index} className="project-item">
              <div className="project-image-wrapper">
                <img src={p.image} alt={p.Ptitle} className="project-image" loading="lazy" />
              </div>
              <div className="project-content">
                <div className="project-header">
                  <h3>Case Study {index + 1} of {projects.length}: {p.Ptitle}</h3>
                </div>
                <p className="project-description">{p.overview}</p>
                {p.tech && <p className="project-tech">{p.tech}</p>}
                {p.link && (
                  <a href={p.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    View Project →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}



export default Projects