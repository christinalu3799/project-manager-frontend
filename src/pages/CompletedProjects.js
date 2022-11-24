import React from 'react'
import CompleteProjectsContainer from '../components/CompleteProjectsContainer';
import '../stylesheets/CompletedDeleted.css'

const CompletedProjects = (props) => {
    if (props.user !== undefined) {
        return (
            <div className='completed-projects'>
                <h1>Completed Projects</h1>
                <h4>Celebrate your accomplishments! ☺️</h4>
                <CompleteProjectsContainer 
                    projects={props.projects}
                    getProjects={props.getProjects}
                    baseURL={props.baseURL}
                    updateProject={props.updateProject}/>
            </div>
        )
    } else {
        return (
            <div className='not-logged-in completed-projects'>
                <h4>
                    Please Register/Login to start tracking your projects!
                </h4>
            </div>
        )
    }
}

export default CompletedProjects