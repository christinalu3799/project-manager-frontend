import React from 'react'
import { ProjectProvider  } from '../contexts/ProjectContext';
import CompleteProjectsContainer from './CompleteProjectsContainer';

const CompletedProjects = () => {

    return (
        <ProjectProvider>
            <h1>COMPLETED PROJECTS</h1>
            <CompleteProjectsContainer />
        </ProjectProvider>
    )
}

export default CompletedProjects