import React, { useContext } from 'react'
import StatusIcons from './StatusIcons'
import '../stylesheets/CompletedDeleted.css'

const CompleteProjectsContainer = (props) => {

    // allow user to restore project ====================================
    const handleMarkIncomplete = (project) => {
        console.log('hi!', project)
        fetch(`${props.baseURL}/api/v1/projects/${project.id}`, {
            method: 'PUT',
            body: JSON.stringify({
                project_name: project.project_name,
                project_deadline: project.project_deadline,
                project_description: project.project_description,
                project_status: 'not started'
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        })
        // call getProjects() from App.js to re-render state at top level
        props.getProjects()
        props.updateProject(project.id)  
    }
    if (props.projects != null) {
        return (
            <div>
                {props.projects.map(project => {
                    if(project.project_status === 'completed') {
                        return (
                            <div key={project.id} className='completed-project-card'>
                                <div style={{'display': 'flex', 'align-items': 'center','height':'3rem'}}>
                                    <h4 style={{'margin': '0 2rem 0 0'}}>{project.project_name}</h4>
                                    <StatusIcons status={project.project_status}/>
                                </div>
                                <div className='completed-btns update-btns'>
                                    <button 
                                        className='put-back-btn'
                                        onClick={() => handleMarkIncomplete(project)}
                                        >
                                            Mark Incomplete
                                    </button>
                                </div>
                            </div>
                        )
                }})}
            </div>
        )
    }
}

export default CompleteProjectsContainer