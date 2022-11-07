import React from 'react'
import '../stylesheets/Index.css'
import ProjectCard from './ProjectCard'

const ProjectContainer = (props) => {
    return (
        <div className='project-container'>
            <ProjectCard 
                setShowProject={props.setShowProject}
                showProject={props.showProject}/>
        </div>
    )
}

export default ProjectContainer