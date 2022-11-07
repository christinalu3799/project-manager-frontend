import React, { useContext, useEffect, useState } from 'react'
import '../stylesheets/Show.css'
import { ProjectContext  } from '../contexts/ProjectContext'

const Show = (props) => {
    const [projects, setProjects] = useContext(ProjectContext)
    const findProject = () => {
        let myProject = projects.find(project => project.id === props.showId)
        props.setShowProject(myProject)
    }
    // call function 1 time to find project to show on page
    useEffect(() => {
        findProject()
    }, [])

    return (
        <div className='show'>
            <div className='show-sidebar'>

            </div>
            <div className='show-container'> 
                <h1>{props.showProject.project_name}</h1>
                <h5>DUE: {props.showProject.project_deadline}</h5>
                <p>{props.showProject.project_description}</p>
                <p>STATUS: {props.showProject.project_status}</p>
            </div>
        </div>
    )
}

export default Show