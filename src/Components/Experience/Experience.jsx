import React from 'react'
import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer Intern",
      company: "Bairuha Tech",
      location: "Kozhikode, India",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "JavaScript", "HTML", "CSS"],
      period: "Jan 2026 – Present",
      description: [
        "Working as part of a cross-functional development team to design and build a real-world web application from requirements to implementation",
        "Collaborating with team members to plan features, divide tasks, and review code, ensuring timely delivery of project milestones"
      ]
    },
    {
      title: "MERN Full Stack Developer Intern",
      company: "Futura Labs",
      location: "Kozhikode, India",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "JavaScript", "RESTful APIs"],
      period: "Jun 2025 – Dec 2025",
      description: [
        "Developed responsive web applications using MongoDB, Express.js, React.js, and Node.js, following modern UI/UX practices",
        "Built reusable React components and managed application state using hooks, improving code maintainability",
        "Implemented RESTful APIs with Node.js and Express.js to handle authentication, CRUD operations, and data flow between frontend and backend"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Freelance",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "JavaScript", "HTML", "CSS"],
      period: "2022 - Present",
      description: [
        "Developed full-stack web applications using MERN stack",
        "Created responsive and user-friendly interfaces",
        "Implemented RESTful APIs and database management",
        "Collaborated on various projects including e-commerce and management systems"
      ]
    },
    {
      title: "Software Developer",
      company: "Self Projects",
      technologies: ["React.js", "Python", "Django", "Flask", "MongoDB", "JavaScript"],
      period: "2020 - 2022",
      description: [
        "Built multiple web applications including rental management system",
        "Developed e-ration shop platform with payment integration",
        "Created weather application and todo list management system",
        "Gained hands-on experience in full-stack development"
      ]
    }
  ]

  return (
    <div id="experience" className="experience">
      <div className="experience-title">
        <h2>Experience</h2>
      </div>
      
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="experience-header">
              <div className="experience-title-company">
                <h3>{exp.title}</h3>
                <p className="company-name">{exp.company}{exp.location ? ` • ${exp.location}` : ''}</p>
              </div>
              <p className="experience-period">{exp.period}</p>
            </div>
            
            <div className="experience-tech">
              {exp.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="tech-tag">{tech}</span>
              ))}
            </div>
            
            <ul className="experience-description">
              {exp.description.map((desc, descIndex) => (
                <li key={descIndex}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
