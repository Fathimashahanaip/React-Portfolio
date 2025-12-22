import React from 'react'
import './Projects.css'
import projects from '../Projects/ProjectData.js'
import { Button, Card } from 'react-bootstrap'
import AnchorLink from 'react-anchor-link-smooth-scroll'




const Projects = () => {

  // const images=[img1,img2,img3,img4]
  
  return (
    <div id='project'  className='project'>
        <div className="project-title">
            <h1>My Projects</h1>
            
        </div>
     
        <div className="project-container">


          {projects.map((p,index)=>{
            const{Ptitle,overview,key1,key2,image}=p;
            return(



<Card  key={index} className="card-main" style={{ width: '18rem'}}>
  {/* {images.map((image,index)=>{
    return( */}


      <img src={p.image} alt=""  />
    {/* )
    })} */}
      <Card.Body className='card-body'>
        <Card.Title className='card-title'>{p.Ptitle}</Card.Title>
<AnchorLink className='anchor-pro-link'  href={p.href}>
        <Button variant="primary" className='button-project'>Read More</Button></AnchorLink>
      </Card.Body>
    </Card>

            )


})}
        </div>

    </div>
  )
}



export default Projects