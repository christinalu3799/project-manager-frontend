import React from 'react'
import { Link } from 'react-router-dom'
import StatusDots from '../components/StatusDots'

const SideBar = (props) => {
  
    return (
        <>
            {props.projects.map(project => {
                return (
                    <Link 
                        key={project.id}
                        to={`/show/${project.id}`}
                        onClick={() => props.setShowId(project.id)}className='sidebar-nav'>
                            {project.project_name}
                        <StatusDots status={project.project_status}/>
                    </Link>
                )
            })}
        </>
    )
}

export default SideBar