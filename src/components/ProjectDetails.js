import React, { useContext, useState } from 'react'
import '../stylesheets/ShowTabs.css'
import StatusIcons from './StatusIcons'
import Button from 'react-bootstrap/Button';
import UpdateProjectForm from './UpdateProjectForm';

const ProjectDetails = (props) => {
    console.log('render ProjectDetails.js')

    const [isEditing, setIsEditing] = useState(false)

    const handleEditProject = () => {
        setIsEditing(true)
        console.log('hitting me!')
        props.setProjectToUpdate({
            project_name: props.showProject.project_name,
            project_deadline: props.showProject.project_deadline,
            project_description: props.showProject.project_description,
            project_status: props.showProject.project_status
        })
    }

    return (

            <div className='details'>
                
                {isEditing ? 
                <UpdateProjectForm 
                    showProject={props.showProject} 
                    setIsEditing={setIsEditing} 
                    projects={props.projects}
                    setProjects={props.setProjects}
                    getProjects={props.getProjects}
                    updateProject={props.updateProject}
                    projectToUpdate={props.projectToUpdate}
                    setProjectToUpdate={props.setProjectToUpdate}/>
                :
                <>
                    <h5>DUE: {props.showProject.project_deadline}</h5>
                        <br/>
                    <p>{props.showProject.project_description}</p>
                        <br/>
                    <StatusIcons status={props.showProject.project_status}/>
                    <Button variant='outline-success' onClick={() => handleEditProject()}>Edit</Button>
                </>}
                
            </div>
    )
}

export default ProjectDetails