import React from 'react'
import CompleteProjectsContainer from '../components/CompleteProjectsContainer';

const CompletedProjects = (props) => {
    if (props.user !== undefined) {
        return (
            <>
                <h1>COMPLETED PROJECTS</h1>
                <CompleteProjectsContainer projects={props.projects}/>
            </>
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

export default CompletedProjects