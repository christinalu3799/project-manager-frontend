import React, {useState} from 'react'
import DeletedProjectsContainer from '../components/DeletedProjectsContainer'
import '../stylesheets/CompletedDeleted.css'

const DeletedProjects = (props) => {

    if (props.user !== undefined) {
        return (
            <div className='deleted-projects animate__animated animate__fadeIn'>
                <h1>Deleted Projects</h1>
                <DeletedProjectsContainer 
                    projects={props.projects}
                    getProjects={props.getProjects}
                    baseURL={props.baseURL}
                    updateProject={props.updateProject}
                    />
            </div>
        )
    } else {
        return (
            <div className='not-logged-in animate__animated animate__fadeIn'>
                <h4>
                    Please Register/Login to start tracking your projects!
                </h4>
            </div>
        )
    }

}

export default DeletedProjects