import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../stylesheets/NewProject.css'
import { useNavigate } from 'react-router-dom'

let baseURL
// process.env.NODE_ENV = 'production'
process.env.REACT_APP_NODE_ENV === 'development'
? (baseURL = process.env.REACT_APP_DEV_URL)
: (baseURL = process.env.REACT_APP_BACKEND_URL)    

const NewProjectForm = () => {
    const navigate = useNavigate()

    // const [projects, setProjects] = useContext(ProjectContext)
    const [newProject, setNewProject] = useState({
        project_name: '',
        project_deadline: '',
        project_description: '',
        project_status:''
    })

    const handleChange = (e) => {
        e.preventDefault() 
        setNewProject({...newProject, [e.target.id]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(newProject)
        console.log('submitted!')
        fetch(`${baseURL}/projects/`, {
            method: 'POST',

            body: JSON.stringify(
                newProject
            ),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        })
        .then (res => {
            console.log(res.json())
            navigate('/index')
        })
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