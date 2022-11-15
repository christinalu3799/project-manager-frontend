import React from 'react'
import '../stylesheets/Index.css'
import ProjectCard from './ProjectCard'

const ProjectContainer = (props) => {
    return (
        <div className='project-container'>
            <ProjectCard 
                setShowProject={props.setShowProject}
                showProject={props.showProject}
                deletedProjects={props.deletedProjects}
                setDeletedProjects={props.setDeletedProjects}/>
        </div>
    )
}

export default ProjectContainer