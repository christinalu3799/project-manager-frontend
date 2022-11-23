import React, {useState} from 'react'
import DeletedProjectsContainer from '../components/DeletedProjectsContainer'
import '../stylesheets/DeletedProjects.css'

const DeletedProjects = (props) => {

    if (props.user !== undefined) {
        return (
            <div className='deleted-projects'>
                <h1>DELETED PROJECTS</h1>
                <DeletedProjectsContainer 
                    projects={props.projects}
                    getProjects={props.getProjects}
                    baseURL={props.baseURL}
                    replaceProject={props.replaceProject}
                    updateProject={props.updateProject}
                    />
            </div>
        )
    } else {
        return (
            <div className='not-logged-in'>
                <h4>
                    Please Register/Login to start tracking your projects!
                </h4>
            </div>
        )
    }

}

export default DeletedProjects