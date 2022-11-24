import React from 'react'

const DeletedProjectsContainer = (props) => {

    // allow user to restore project ====================================
    const handlePutBackProject = (project) => {
        fetch(`${props.baseURL}/api/v1/projects/${project.id}`, {
            method: 'PUT',
            body: JSON.stringify({
                project_name: project.project_name,
                project_deadline: project.project_deadline,
                project_description: project.project_description,
                project_status: ''
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
    //permanently delete project ========================================
    const permanentlyDelete = (project) => {
        fetch(`${props.baseURL}/api/v1/projects/${project.id}`, {
            method: 'DELETE',
            credentials: 'include'
        })
        props.getProjects()
        props.updateProject(project.id)  
    }
    if (props.projects != null) {
        return (
            <div>
                {props.projects.map(project => {
                    if(project.project_status === 'deleted') {
                        return (
                            <div key={project.id} className='deleted-project'>
                                <h3>{project.project_name}</h3>
                                <div className='update-btns'>
                                    <button 
                                        className='put-back-btn'
                                        onClick={() => handlePutBackProject(project)}>
                                            Put Back
                                    </button>
                                    <button 
                                        className='put-back-btn delete-forever-btn'
                                        onClick={() => permanentlyDelete(project)}>
                                            Delete Forever
                                    </button>
                                </div>
                            </div>
                        )
                    }
                })}
            </div>
        )

    }
}

export default DeletedProjectsContainer