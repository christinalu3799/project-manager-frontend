import React, { useContext } from 'react'
import StatusIcons from './StatusIcons'

const CompleteProjectsContainer = (props) => {
    if (props.projects != null) {
        return (
            <div>
                {props.projects.map(project => {
                    if(project.project_status === 'completed') {
                        return (
                            <div key={project.id} className='completed-project-card'>
                                <h3>{project.project_name}</h3>
                                <StatusIcons status={project.project_status} />
                            </div>
                        )
                }})}
            </div>
        )
    }
}

export default CompleteProjectsContainer