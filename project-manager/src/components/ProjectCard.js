import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import '../stylesheets/Index.css'
import { ProjectContext  } from '../contexts/ProjectContext'
import StatusIcons from './StatusIcons'

const ProjectCard = (props) => {
    const [projects, setProjects] = useContext(ProjectContext)

    const getShowProject = (id) => {
        console.log('id: ', id)
        // setShowId(id)
        // console.log(showId)
        props.setShowProject(projects.find(project => project.id === id))
    }
    console.log('here!')
    if (projects !== null) {
        console.log('inside return!')
        return (
            <>
                {
                    projects.map((project => {
                        return (
                            <div key={project.id} className='project-card'>

                                <h3>{project.project_name}</h3>
                                <p>DUE: {project.project_deadline}</p>
                                <p className='truncate'>{project.project_description}</p>
                                <StatusIcons status={project.project_status} />
                                <Link to={`/show/${project.id}`} onClick={()=>{getShowProject(project.id)}}>Show Details</Link>
                            </div>
                        )
                    }))
                }  
            </>
        )
    }
}

export default ProjectCard