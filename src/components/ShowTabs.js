import React, { useState, useContext } from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import '../stylesheets/ShowTabs.css'
import '../stylesheets/NewProject.css'
import Tasks from './Tasks'
import NewTaskForm from './NewTaskForm'
import Logs from './Logs'
import NewLogForm from './NewLogForm'
import StatusIcons from './StatusIcons'
import { TaskProvider } from '../contexts/TaskContext'
import { LogProvider } from '../contexts/LogContext'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

let baseURL
process.env.REACT_APP_NODE_ENV === 'development'
? (baseURL = process.env.REACT_APP_DEV_URL)
: (baseURL = process.env.REACT_APP_BACKEND_URL)    

const ShowTabs = (props) => {
    const [key, setKey] = useState('home');

    // UPDATE ===================================================================================
    const [projectToUpdate, setProjectToUpdate] = useState({
        project_name: props.showProject.project_name,
        project_deadline: props.showProject.project_deadline,
        project_description: props.showProject.project_description,
        project_status: props.showProject.project_status
    })
  
    const handleChangeProject = (e) => {
        e.preventDefault()
        setProjectToUpdate({...projectToUpdate, [e.target.id]: e.target.value})
    }
    const handleUpdateProject = (e) => {
        e.preventDefault() 
        fetch(`${baseURL}/api/v1/projects/${props.showProject.id}`, {
            method: 'PUT',

            body: JSON.stringify(
                projectToUpdate
            ),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        })
        .then(res => console.log(res.json()))

    }
    // MODAL ====================================================================================
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // ==========================================================================================
    return (
        <LogProvider project_id={props.showProject.id}>

            <TaskProvider project_id={props.showProject.id}>
                <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="mb-3 tabs-container"
                    fill
                >
                    <Tab eventKey="home" title="Details">
                        <div className='details'>
                            <h5>DUE: {props.showProject.project_deadline}</h5>
                            <br/>
                            <p>{props.showProject.project_description}</p>
                            <br/>
                            <StatusIcons status={props.showProject.project_status}/>
                            
                            {/* EDIT FORM MODAL */}
                            <Button variant="outline-secondary" onClick={handleShow}>
                                Edit
                            </Button>
                            <Modal
                                show={show}
                                onHide={handleClose}
                                backdrop="static"
                                keyboard={false}
                                centered
                            >
                                <Modal.Header closeButton>
                                    <Modal.Title>Edit Project Details</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form className='update-project-form'>
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
                                    </Form>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Discard
                                    </Button>
                                    <Button variant="primary" onClick={handleUpdateProject}>Submit Changes</Button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    </Tab>
                    <Tab eventKey="profile" title="Tasks">
                        <NewTaskForm baseURL={baseURL} showProject={props.showProject}/>
                        <Tasks baseURL={baseURL} showProject={props.showProject}/>
                    </Tab>
                    <Tab eventKey="contact" title="Log">
                        <NewLogForm baseURL={baseURL} showProject={props.showProject}/>
                        <Logs />
                    </Tab>
                </Tabs>
            </TaskProvider>
        </LogProvider>
    )
}

export default ShowTabs

