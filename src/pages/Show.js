import React from 'react'
import '../stylesheets/Show.css'
import ShowTabs from '../components/ShowTabs'

const Show = (props) => {
    // need to fetch all tasks associated with this project
    return (
            <div className='show'>
                <div className='show-sidebar'>

                </div>
                <div className='show-container'> 
                    <h1>{props.showProject.project_name}</h1>
                    <br/>

                    <ShowTabs showProject={props.showProject}/>
                </div>
            </div>

    )
}

export default Show