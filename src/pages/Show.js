import React, { useEffect, useState } from 'react'
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
import { useLocation } from 'react-router-dom'

let baseURL
process.env.REACT_APP_NODE_ENV === 'development'
? (baseURL = process.env.REACT_APP_DEV_URL)
: (baseURL = process.env.REACT_APP_BACKEND_URL)    

const Show = (props) => {
    console.log('------------------RENDERING SHOW.JS----------------')
    // const currentProject = JSON.parse(localStorage.getItem('showProject'))
    const [id, setId] = useState(null)
    const location = useLocation()
    // const id = location.state.id
    const [key, setKey] = useState('home');
    const [isEditing, setIsEditing] = useState(false)

    // find id of current project
    // if (myId) {
        //     setId(myId)
        // } 
        
        // get project based on id
        const showProject = props.projects.find(project => project.id === id)
        
        // save id and project to local storage
        localStorage.setItem('projectId', JSON.stringify(id))
        localStorage.setItem('showProject', JSON.stringify(showProject))
        
        useEffect(() => {
            setId(location.state.id)
            // const myId = localStorage.getItem('projectId')
            // console.log(myId)
            // if (myId !== null) {
            //     setId(JSON.parse(myId))
            // }
            // console.log(JSON.parse(myId))

            
        },[])

    const handleEditProject = () => {
        setIsEditing(true)
        console.log('hitting me!')
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
        props.getProjects()
        console.log('just called getProjects()')
        props.updateProject(id)
        setIsEditing(false)
    }
    // need to fetch all tasks associated with this project
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
                                        <Button variant="secondary" onClickCapture={() => setIsEditing()}>
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