import React, { useContext } from 'react'
import { ProjectContext } from '../contexts/ProjectContext'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../stylesheets/NewProject.css'
const NewProjectForm = () => {

    const [projects, setProjects] = useContext(ProjectContext)

    const handleChange = (e) => {
        e.preventDefault() 
        console.log(e.target.id, e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('submitted!')
    }
    return (
            <Form onSubmit={handleSubmit} className='new-project-form'>
                <Form.Group className="mb-3">
                    <Form.Control 
                        type="text" 
                        id='project_name'
                        onChange={handleChange}
                        placeholder="Project Name"
                        required/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control 
                        type="text" 
                        id='project_deadline'
                        onChange={handleChange}
                        placeholder="Project Deadline"/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control as='textarea'
                        type="text" 
                        id='project_description'
                        onChange={handleChange}
                        placeholder="Project Description"/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Select
                        type="text" 
                        id='project_status'
                        onChange={handleChange}>
                        <option>Select Status</option>
                        <option value='not started'>Not Started</option>
                        <option value='in progress'>In Progress</option>
                        <option value='completed'>Completed</option>
                    </Form.Select>
                </Form.Group>
                
                <Button variant="success" type="submit">
                    Create New Project
                </Button>
            </Form>
        )
}

export default NewProjectForm