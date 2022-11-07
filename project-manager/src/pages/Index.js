import React from 'react'
import '../stylesheets/Index.css'
import ProjectContainer from '../components/ProjectContainer'

const Index = (props) => {

    return (
        <div className='index'>
            <div className='index-container'>

                <h1 className='title'>My Projects</h1>
              
                <ProjectContainer setShowId={props.setShowId}/>
                
                
            </div>
        </div>
        
        
    )
}

export default Index