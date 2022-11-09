import React from 'react'
import '../stylesheets/Index.css'
import ProjectContainer from '../components/ProjectContainer'
import { ProjectProvider  } from '../contexts/ProjectContext';

const Index = (props) => {
    if (props.user !== null) {
        return (
            <ProjectProvider>
    
                <div className='index'>
                    <div className='index-container'>
    
                        <h1 className='title'>My Projects</h1>
                    
                        <ProjectContainer
                            setShowProject={props.setShowProject}
                            showProject={props.showProject}/>
                        
                        
                    </div>
                </div>
            </ProjectProvider>
            
            
        )
    } else {
        return (
            <div className='not-logged-in'>
                <h4>
                    Please Register/Login to start tracking your projects!
                </h4>
            </div>
        )
    }
}

export default Index