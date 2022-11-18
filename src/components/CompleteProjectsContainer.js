import React, { useContext } from 'react'

const CompleteProjectsContainer = (props) => {
    if (props.projects != null) {
        return (
            <div>
                {props.projects.map(project => {
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
}

export default CompleteProjectsContainer