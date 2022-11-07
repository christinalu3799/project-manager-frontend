import React from 'react'
import '../stylesheets/Index.css'
import ProjectContainer from '../components/ProjectContainer'

const Index = () => {

    return (
        <div className='index'>
            <div className='index-container'>

                <h1>My Projects</h1>

                <div> 
                    <ProjectContainer />
                </div>
                
            </div>
        </div>
        
        
    )
}

export default Index