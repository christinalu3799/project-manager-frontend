import React, { useContext } from 'react'
import { ProjectContext  } from '../contexts/ProjectContext'

const CompleteProjectsContainer = () => {
    const [projects, setProjects] = useContext(ProjectContext)
    return (
        <div>
            {projects.map(project => {
                if(project.project_status === 'completed') {
                    return (
                        <div key={project.id}>
                            
                            <h3>{project.project_name}</h3>
                        </div>
                    )
            }})}
        </div>
    )
}

export default CompleteProjectsContainer