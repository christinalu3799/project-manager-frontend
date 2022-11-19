import React, { useState } from 'react'
import ProjectCard from '../components/ProjectCard'

const Index = (props) => {
    // const [showProject, setShowProject] = useState(null)
    if (props.user !== undefined && props.projects !== null) {
        return (
        <div className='index'>
            <div className='index-container'>
                <h1 className='title'>{`${props.user}'s Projects`}</h1>
                <div className='project-container'>
                {props.projects.map((project) => {
                    return (
                        <ProjectCard 
                            key={project.id}
                            project={project}
                            setShowProject={props.setShowProject}
                        //     // deletedProjects={props.deletedProjects}
                        //     // setDeletedProjects={props.setDeletedProjects}
                        />
                
                    )
        
                })}
                </div>
            </div>
        </div>
        )
    } else {
        <div className='not-logged-in'>
            <h4>
                Please Register/Login to start tracking your projects!
            </h4>
        </div>
    }
}

export default Index