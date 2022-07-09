import React from 'react'
import '../Styles/Project.css'
const Projects = ({image, title, githubLink, liveLink}) => {
  return (
    <article className='project_item'>
    <div className="project_image">
      <img src={image} alt="" />
    </div>
    <h3>{title}</h3>
    <div className="project_link">
      <a href={githubLink} className='btn'>GitHub</a>
      <a href={liveLink} className='btn btn-primary' >Watch Live</a>
    </div>
  </article>
  )
}

export default Projects