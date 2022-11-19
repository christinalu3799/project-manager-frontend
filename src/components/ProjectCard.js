import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../stylesheets/Index.css'
import StatusIcons from './StatusIcons'
import Show from '../pages/Show'


const ProjectCard = (props) => {
    // const [showProject, setShowProject] = useState(props.project)

    // const getShowProject = (id) => {
    //     props.setShowProject(props.projects.find(project => project.id === id))
    // }
    
    // still working on this
    // const handleDeleteProject = (project) => {
    //     props.setDeletedProjects([...props.deletedProjects, project])
    //     console.log(props.deletedProjects)
    // }
    // console.log(props.projects)
        return (

        <div className='project-card'>

            <h3>{props.project.project_name}</h3>
            <p>DUE: {props.project.project_deadline}</p>
            <p className='truncate'>{props.project.project_description}</p>
            <StatusIcons status={props.project.project_status} />

                <Link to={`/show/${props.project.id}`} state={{id: props.project.id}}>
                    Show Details
                </Link> 
        </div>

        )
    
}

export default ProjectCard