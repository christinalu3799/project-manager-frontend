import React from 'react'
import { ProjectProvider  } from '../contexts/ProjectContext';
import CompleteProjectsContainer from '../components/CompleteProjectsContainer';

const CompletedProjects = (props) => {
    if (props.user !== undefined) {
        return (
            <ProjectProvider>
                <h1>COMPLETED PROJECTS</h1>
                <CompleteProjectsContainer />
            </ProjectProvider>
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