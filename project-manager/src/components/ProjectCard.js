import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import '../stylesheets/Index.css'
import { ProjectContext  } from '../contexts/ProjectContext'

const ProjectCard = (props) => {
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
                            <Link to='/show' onClick={()=>props.setShowId(project.id)}>Show Details</Link>
                        </div>
                    )
            }))}
        </>
    )
}

export default ProjectCard