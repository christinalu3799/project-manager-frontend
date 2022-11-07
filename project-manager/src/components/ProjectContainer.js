import React from 'react'
import '../stylesheets/Index.css'
import ProjectCard from './ProjectCard'

const ProjectContainer = (props) => {
    return (
        <div className='project-container'>
            <ProjectCard setShowId={props.setShowId}/>
        </div>
    )
}

export default ProjectContainer