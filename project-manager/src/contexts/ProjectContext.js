import React, { useState, createContext, useEffect } from 'react'

export const ProjectProvider = (props) => {
    const [projects, setProjects] = useState(null)
    console.log(projects)
    const getProjects = () => {
        fetch('http://localhost:8000/api/v1/projects/', {
            credentials: 'include'
        })
        .then((res) => res.json())
        .then(resJson => {
            console.log(resJson)
            setProjects(resJson.data)
        })
        console.log('in context')
    }

    // this hook is similar to component did mount
    useEffect(() => {
        getProjects()
    }, [])

    return  <ProjectContext.Provider value={[projects, setProjects]}>
                {props.children}
            </ProjectContext.Provider>
}
 
export const ProjectContext = createContext()