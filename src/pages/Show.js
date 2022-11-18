import React, { useEffect } from 'react'
import '../stylesheets/Show.css'
import ShowTabs from '../components/ShowTabs'

const Show = (props) => {
    console.log('render Show.js')
    console.log(props.showProject)
    // // TRACK PROJECT IN LOCAL STORAGE ===========================================================
    localStorage.setItem('showProject', JSON.stringify(props.showProject))

    // const currentProject = JSON.parse(localStorage.getItem('showProject'))
    // console.log(currentProject)
    // // if (currentProject) {
    // //     props.setShowProject(cur)
    // // }
    // useEffect(() => {
    //     if (currentProject) {
    //         console.log('------SHOW.JS ------- resetting showProject!')
    //         props.setShowProject(currentProject)
    //     }
    // }, [])

    // need to fetch all tasks associated with this project
    if (props.showProject != null ) {
        return (
    
                <div className='show'>
                    <div className='show-sidebar'>
                        
                    </div>
    
                    <div className='show-container'> 
                        <h1>{props.showProject.project_name}</h1>
    
                        <ShowTabs 
                            showProject={props.showProject} 
                            projects={props.projects}
                            setProjects={props.setProjects}
                            getProjects={props.getProjects}
                            updateProject={props.updateProject}
                            projectToUpdate={props.projectToUpdate}
                            setProjectToUpdate={props.setProjectToUpdate}/>
                    </div>
                
                </div>
    
        )   
    } else {

    }
}

export default Show