import React from 'react'

import NewProjectForm from '../components/NewProjectForm';
import '../stylesheets/NewProject.css'
const NewProject = (props) => {
    if(props.user !== undefined) {
        return (
            <div className='new-project-container animate__animated animate__fadeIn'>
                <div className='new-project'>
                    <h1>Create New Project</h1>
                    <NewProjectForm 
                        getProjects={props.getProjects}/>
                </div>
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

export default NewProject