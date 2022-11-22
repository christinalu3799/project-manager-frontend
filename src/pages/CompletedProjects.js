import React from 'react'
import CompleteProjectsContainer from '../components/CompleteProjectsContainer';
import '../stylesheets/CompletedProjects.css'

const CompletedProjects = (props) => {
    if (props.user !== undefined) {
        return (
            <div className='completed-projects'>
                <h1>COMPLETED PROJECTS</h1>
                <h4>Celebrate your accomplishments - woo!</h4>
                <CompleteProjectsContainer projects={props.projects}/>
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