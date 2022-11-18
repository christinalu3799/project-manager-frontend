import React from 'react'
import '../stylesheets/Index.css'
import ProjectCard from '../components/ProjectCard'
const Index = (props) => {
    console.log('-----INDEX.JS', props.projects)
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
                    {/* <ProjectContainer
                        projects={props.projects}
                        setShowProject={props.setShowProject}
                        showProject={props.showProject}
                        deletedProjects={props.deletedProjects}
                        setDeletedProjects={props.setDeletedProjects}/> */}
                </div>
            </div>
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