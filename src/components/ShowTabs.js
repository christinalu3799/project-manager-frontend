import React, { useState, useContext } from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import '../stylesheets/ShowTabs.css'
import '../stylesheets/NewProject.css'
import ProjectDetails from './ProjectDetails'
import Tasks from './Tasks'
import NewTaskForm from './NewTaskForm'
import Logs from './Logs'
import NewLogForm from './NewLogForm'
import { TaskProvider } from '../contexts/TaskContext'
import { LogProvider } from '../contexts/LogContext'

let baseURL
process.env.REACT_APP_NODE_ENV === 'development'
? (baseURL = process.env.REACT_APP_DEV_URL)
: (baseURL = process.env.REACT_APP_BACKEND_URL)    

const ShowTabs = (props) => {
    console.log('render ShowTabs.js')
    const [key, setKey] = useState('home');
    // ==========================================================================================
    return (
        <div>
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3 tabs-container"
                fill
            >
                <Tab eventKey="home" title="Details">

                    <ProjectDetails 
                        showProject={props.showProject}
                        projects={props.projects}
                        setProjects={props.setProjects}
                        getProjects={props.getProjects}
                        updateProject={props.updateProject}
                        projectToUpdate={props.projectToUpdate}
                        setProjectToUpdate={props.setProjectToUpdate}
                        />

                </Tab>
                <Tab eventKey="profile" title="Tasks">
                    <TaskProvider project_id={props.showProject.id}>
                        <NewTaskForm baseURL={baseURL} showProject={props.showProject}/>
                        <Tasks baseURL={baseURL} showProject={props.showProject}/>
                    </TaskProvider>
                </Tab>
                <Tab eventKey="contact" title="Log">
                    <LogProvider project_id={props.showProject.id}>
                        <NewLogForm baseURL={baseURL} showProject={props.showProject}/>
                        <Logs />
                    </LogProvider>
                </Tab>
            </Tabs>
        </div>
    )
}

export default ShowTabs

