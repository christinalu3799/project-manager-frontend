import React from 'react'
import ProjectCard from '../components/ProjectCard'

const Index = (props) => {
    console.log('--------RENDERING INDEX.JS---------')

    if (props.user !== undefined && props.projects !== null) {
        return (
        <div className='index'>
            <div className='index-container'>
                <h1>{`Project Dashboard`}</h1>
                <h4>Welcome back {props.user}! Let's get to work. </h4>
                <div className='project-container'>
                {props.projects.map((project) => {
                    return (
                        <ProjectCard 
                            key={project.id}
                            project={project}
                            showId={props.showId}
                            setShowId={props.setShowId}
                        />
                    )
                })}
                </div>
            </div>
        </div>
        )
    } else {
        return(
            <div className='not-logged-in'>
                <h4>
                    Please Register/Login to start tracking your projects!
                </h4>
            </div>
        )
    }
}

export default Index