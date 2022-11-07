import React, { useContext } from 'react'
import '../stylesheets/Index.css'
import { ProjectContext  } from '../contexts/ProjectContext'

const ProjectCard = () => {
    const [projects, setProjects] = useContext(ProjectContext)

    return (
        <>
            {projects.map((project => {
                    return (
                        <div key={project.id} className='project-card'>

                            <h3>{project.project_name}</h3>
                            <p>DUE: {project.project_deadline}</p>
                            <p className='truncate'>{project.project_description}</p>
                            <p>{project.project_status}</p>

                        </div>
                    )
            }))}
        </>
    )
}

export default ProjectCard