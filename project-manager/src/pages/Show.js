import React from 'react'
import '../stylesheets/Show.css'
import ShowTabs from '../components/ShowTabs'

const Show = (props) => {

    return (
        <div className='show'>
            <div className='show-sidebar'>

            </div>
            <div className='show-container'> 
                <h1>{props.showProject.project_name}</h1>
                <br/>
                {/* <h5>DUE: {props.showProject.project_deadline}</h5>
                <p>{props.showProject.project_description}</p>
                <p>STATUS: {props.showProject.project_status}</p> */}
                <ShowTabs showProject={props.showProject}/>
            </div>
        </div>
    )
}

export default Show