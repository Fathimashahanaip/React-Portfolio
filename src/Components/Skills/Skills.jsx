import React from 'react'
import './Skills.css'

const Skills = () => {
  const skills = [
    { name: "HTML & CSS", icon: "🌐" },
    { name: "JavaScript", icon: "🟨" },
    { name: "React.js", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Express.js", icon: "🚏" }
  ]

  return (
    <div id="skills" className="skills">
      <div className="skills-title">
        <h2>Skills</h2>
      </div>
      
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div 
            className="skill-item"
            key={index}
            style={{ '--delay': `${index * 0.05}s` }}
          >
            <div className="skill-icon">{skill.icon}</div>
            <div className="skill-name">{skill.name}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
