import React from 'react'
import '../stylesheets/Show.css'
const Show = (props) => {

    return (
        <div className='show'>
            <div className='show-sidebar'>

            </div>
            <div className='show-container'> 
                <h1>{props.showProject.project_name}</h1>
                <h5>DUE: {props.showProject.project_deadline}</h5>
                <p>{props.showProject.project_description}</p>
                <p>STATUS: {props.showProject.project_status}</p>

                {/* <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="mb-3"
                    >
                    <Tab eventKey="home" title="Home">
                        <Sonnet />
                    </Tab>
                    <Tab eventKey="profile" title="Profile">
                        <Sonnet />
                    </Tab>
                    <Tab eventKey="contact" title="Contact" disabled>
                        <Sonnet />
                    </Tab>
                </Tabs> */}
            </div>
        </div>
    )
}

export default Show