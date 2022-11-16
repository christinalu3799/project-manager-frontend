import React, { useContext } from 'react'
import { ProjectProvider } from '../contexts/ProjectContext';
import NewProjectForm from '../components/NewProjectForm';
import '../stylesheets/NewProject.css'
const NewProject = (props) => {
    if(props.user !== null) {
        return (
          <ProjectProvider>
              <div className='new-project'>
                  <h1>Create New Project</h1>
                  <NewProjectForm />
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

export default NewProject