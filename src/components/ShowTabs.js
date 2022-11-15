import React, { useState } from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import '../stylesheets/ShowTabs.css'
import Tasks from './Tasks'
import Logs from './Logs'
import StatusIcons from './StatusIcons'
import { TaskProvider } from '../contexts/TaskContext'
import { LogProvider } from '../contexts/LogContext'


let baseURL
process.env.REACT_APP_NODE_ENV === 'development'
? (baseURL = process.env.REACT_APP_DEV_URL)
: (baseURL = process.env.REACT_APP_BACKEND_URL)    

const ShowTabs = (props) => {
    const [key, setKey] = useState('home');
    const [task, setTask] = useState({task: ''})

    const handleAddTask = (e) => {
        e.preventDefault()
        setTask({...task, task: e.target.value})
    }

    const handleSubmitTask = (e) => {
        e.preventDefault()
        console.log('new task to add: ', task)
        fetch(`${baseURL}/projects/tasks/${props.showProject.id}`, {
            method: 'POST',
            body: JSON.stringify(
                task
            ),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        })
        .then(res => {
            setTask({task: ''})
        })
    }
    const [log, setLog] = useState({log: ''})

    const handleAddLog = (e) => {
        e.preventDefault()
        setLog({...log, log: e.target.value})
    }

    const handleSubmitLog = (e) => {
        e.preventDefault()
        console.log('new log to add: ', log)
        fetch(`${baseURL}/projects/logs/${props.showProject.id}`, {
            method: 'POST',
            body: JSON.stringify(
                log
            ),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        })
        .then(res => {
            setLog({log: ''})
        })
    }
   
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
                        </div>
                    </Tab>
                    <Tab eventKey="profile" title="Tasks">
                        <div>
                            <form onSubmit={handleSubmitTask}>
                                <input 
                                    type="text" 
                                    id="task" 
                                    value={task.task}
                                    placeholder="Task"
                                    onChange={handleAddTask}
                                />
                                <input 
                                    type="submit"
                                    value="Add Task"
                                />
                            </form>
                        </div>
                        <Tasks />
                    </Tab>
                    <Tab eventKey="contact" title="Log">
                        <div>
                            <form onSubmit={handleSubmitLog}>
                                <input 
                                    type="text" 
                                    id="log" 
                                    value={log.log}
                                    placeholder="Log"
                                    onChange={handleAddLog}
                                />
                                <input 
                                    type="submit"
                                    value="Log"
                                />
                            </form>
                        </div>

                        <Logs />
                    </Tab>
                </Tabs>
            </TaskProvider>
        </LogProvider>
    )
}

export default ShowTabs