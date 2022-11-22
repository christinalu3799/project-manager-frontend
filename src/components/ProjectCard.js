import React from 'react'
import { Link } from 'react-router-dom'
import '../stylesheets/Index.css'
import StatusIcons from './StatusIcons'


const ProjectCard = (props) => {
    return (
        <div className='project-card'>

            <h3>{props.project.project_name}</h3>
            <p>DUE: {props.project.project_deadline}</p>
            <p className='truncate'>{props.project.project_description}</p>
            <StatusIcons status={props.project.project_status} />

                <Link 
                    to={`/show/${props.project.id}`} 
                    state={{id: props.project.id}} 
                    onClick={() => props.setShowId(props.project.id)}
                    className='show-card-link'
                    >
                    Show Details
                </Link> 
        </div>
    )
}

export default ProjectCard