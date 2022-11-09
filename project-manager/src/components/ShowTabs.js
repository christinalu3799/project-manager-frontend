import React, { useState } from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import '../stylesheets/ShowTabs.css'
import Tasks from './Tasks'
import Log from './Log'
import StatusIcons from './StatusIcons'

const ShowTabs = (props) => {
    const [key, setKey] = useState('home');
    return (
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
                    <p>{props.showProject.project_description}</p>
                    
                    <StatusIcons status={props.showProject.project_status}/>
                </div>
            </Tab>
            <Tab eventKey="profile" title="Tasks">
                <Tasks />
            </Tab>
            <Tab eventKey="contact" title="Log">
                <Log />
            </Tab>
        </Tabs>
    )
}

export default ShowTabs