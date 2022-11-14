import React, { useState } from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import '../stylesheets/ShowTabs.css'
import Tasks from './Tasks'
import Logs from './Logs'
import StatusIcons from './StatusIcons'
import { TaskProvider } from '../contexts/TaskContext'
import { LogProvider } from '../contexts/LogContext'

const ShowTabs = (props) => {
    const [key, setKey] = useState('home');

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
                        <Tasks />
                    </Tab>
                    <Tab eventKey="contact" title="Log">
                        <Logs />
                    </Tab>
                </Tabs>
            </TaskProvider>
        </LogProvider>
    )
}

export default ShowTabs