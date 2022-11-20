import React, { useState } from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import '../stylesheets/Show.css'
import '../stylesheets/ShowTabs.css'
import '../stylesheets/NewProject.css'
import StatusIcons from '../components/StatusIcons'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import Tasks from '../components/Tasks'
import NewTaskForm from '../components/NewTaskForm'
import Logs from '../components/Logs'
import NewLogForm from '../components/NewLogForm'
import { TaskProvider } from '../contexts/TaskContext'
import { LogProvider } from '../contexts/LogContext'
import { useNavigate } from 'react-router-dom' 

// set up baseURL ==================================================================================
let baseURL
process.env.REACT_APP_NODE_ENV === 'development'
? (baseURL = process.env.REACT_APP_DEV_URL)
: (baseURL = process.env.REACT_APP_BACKEND_URL)    

const Show = (props) => {
    console.log('------------------RENDERING SHOW.JS----------------')
    const [key, setKey] = useState('home');
    const [isEditing, setIsEditing] = useState(false)
    const id = props.showId
    const navigate = useNavigate()
    // load project ================================================================================
    let showProject
    try {
        showProject = props.projects.find(project => project.id === id)
    } catch (error) {
        console.log('oops!')
        console.log('here is projects', props.projects)
    }
   
    localStorage.setItem('showProject', JSON.stringify(showProject))
    localStorage.setItem('showId', JSON.stringify(id))
    // handle updating project =====================================================================
    const handleEditProject = () => {
        setIsEditing(true)
        props.setProjectToUpdate({
            project_name: showProject.project_name,
            project_deadline: showProject.project_deadline,
            project_description: showProject.project_description,
            project_status: showProject.project_status
        })
    }
    
    const handleChangeProject = (e) => {
        e.preventDefault()
        props.setProjectToUpdate({...props.projectToUpdate, [e.target.id]: e.target.value})
    }
    
    const handleUpdateProject = (e) => {
        e.preventDefault() 
        fetch(`${baseURL}/api/v1/projects/${id}`, {
            method: 'PUT',
            body: JSON.stringify(
                props.projectToUpdate
                ),
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            })
            // call getProjects() from App.js to re-render state at top level
            props.getProjects()
            props.updateProject(id)
            setIsEditing(false)
        }
    
   async function handleDeleteProject() {
        try {
            let response = await fetch(`${baseURL}/api/v1/projects/${id}`, {
            method: 'DELETE',
            credentials: 'include'
            })
            if (response.ok) {
                let body = await response.json()
                props.getProjects()
                navigate('/index')
            }
        } catch (err) {
            console.log('oops! you got an error! ', err)
        }
    }
    // =============================================================================================
        
    if (showProject != null ) {
        return (
                <div className='show'>
                    <div className='show-sidebar'>
                        
                    </div>
    
                    <div className='show-container'> 
                        <h1>{showProject.project_name}</h1>

                        <Tabs
                            id="controlled-tab-example"
                            activeKey={key}
                            onSelect={(k) => setKey(k)}
                            className="mb-3 tabs-container"
                            fill
                        >
                            <Tab eventKey="home" title="Details">
                                <div className='details'>
                                    {isEditing ? 
                                    <>
                                    <Form onSubmit={handleUpdateProject} className='update-project-form'>
                                        <Form.Group className="mb-3">
                                            <Form.Control 
                                                type="text" 
                                                id='project_name'
                                                onChange={handleChangeProject}
                                                placeholder="Project Name"
                                                defaultValue={showProject.project_name}
                                                required/>
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Control 
                                                type="text" 
                                                id='project_deadline'
                                                onChange={handleChangeProject}
                                                placeholder="Project Deadline"
                                                defaultValue={showProject.project_deadline}/>
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Control as='textarea'
                                                type="text" 
                                                id='project_description'
                                                onChange={handleChangeProject}
                                                placeholder="Project Description"
                                                defaultValue={showProject.project_description}
                                                className='update-project-form-textarea'/>
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Select
                                                type="text" 
                                                id='project_status'
                                                onChange={handleChangeProject}
                                                defaultValue={showProject.project_status}
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
                                        <Button variant="secondary" onClick={() => setIsEditing()}>
                                            Discard
                                        </Button>
                                    </Form>
                                    </>
                                    :
                                    <>
                                        <h5>DUE: {showProject.project_deadline}</h5>
                                            <br/>
                                        <p>{showProject.project_description}</p>
                                            <br/>
                                        <StatusIcons status={showProject.project_status}/>
                                        <Button variant='outline-success' onClick={() => handleEditProject()}>Edit</Button>
                                            <br/>
                                            <br/>
                                        <Button variant='danger' onClick={()=> handleDeleteProject()}>Delete</Button>
                                    </>}
                                </div>
                            </Tab>
                            <Tab eventKey="profile" title="Tasks">
                                <TaskProvider project_id={showProject.id}>
                                    <NewTaskForm baseURL={baseURL} showProject={showProject}/>
                                    <Tasks baseURL={baseURL} showProject={showProject}/>
                                </TaskProvider>
                            </Tab>
                            <Tab eventKey="contact" title="Log">
                                <LogProvider project_id={showProject.id}>
                                    <NewLogForm baseURL={baseURL} showProject={showProject}/>
                                    <Logs />
                                </LogProvider>
                            </Tab>
                        </Tabs>
                    </div>
                </div>
        )   
    } else {
        <p>props.showProject is null on Show.js page</p>
    }
}

export default Show