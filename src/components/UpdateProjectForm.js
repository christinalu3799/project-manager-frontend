import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

let baseURL
process.env.REACT_APP_NODE_ENV === 'development'
? (baseURL = process.env.REACT_APP_DEV_URL)
: (baseURL = process.env.REACT_APP_BACKEND_URL)  

const UpdateProjectForm = (props) => {
    console.log('render UpdateProjectForm.js')

    const handleChangeProject = (e) => {
        e.preventDefault()
        props.setProjectToUpdate({...props.projectToUpdate, [e.target.id]: e.target.value})
    }

    const handleUpdateProject = (e) => {
        e.preventDefault() 
        fetch(`${baseURL}/api/v1/projects/${props.showProject.id}`, {
            method: 'PUT',
            body: JSON.stringify(
                props.projectToUpdate
            ),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        })
        
            props.updateProject(props.showProject.id)
            props.setIsEditing(false)
    }

    return (
        <div>
            <Form onSubmit={handleUpdateProject} className='update-project-form'>
                <Form.Group className="mb-3">
                    <Form.Control 
                        type="text" 
                        id='project_name'
                        onChange={handleChangeProject}
                        placeholder="Project Name"
                        defaultValue={props.showProject.project_name}
                        required/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control 
                        type="text" 
                        id='project_deadline'
                        onChange={handleChangeProject}
                        placeholder="Project Deadline"
                        defaultValue={props.showProject.project_deadline}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control as='textarea'
                        type="text" 
                        id='project_description'
                        onChange={handleChangeProject}
                        placeholder="Project Description"
                        defaultValue={props.showProject.project_description}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Select
                        type="text" 
                        id='project_status'
                        onChange={handleChangeProject}
                        defaultValue={props.showProject.project_status}
                        >
                        <option>Select Status</option>
                        <option value='not started'>Not Started</option>
                        <option value='in progress'>In Progress</option>
                        <option value='completed'>Completed</option>
                    </Form.Select>
                </Form.Group>
                <Button variant="success" type="submit">
                    Update Project
                </Button>
                <Button variant="secondary" onClickCapture={() => props.setIsEditing()}>
                    Discard
                </Button>
            </Form>
     
        </div>
  )
}

export default UpdateProjectForm