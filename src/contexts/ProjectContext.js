import React, { useState, createContext, useEffect } from 'react'

let baseURL = ''

if (process.env.NODE_ENV === 'development') {
    baseURL = 'http://localhost:8000/api/v1'
} else {
    baseURL = 'process.env.REACT_APP_BACKEND_URL'
}

export const ProjectProvider = (props) => {
    
    const [projects, setProjects] = useState(null)

    const getProjects = () => {
        fetch(`${baseURL}/projects/`, {
            credentials: 'include'
        })
        .then((res) => res.json())
        .then(resJson => {
            setProjects(resJson.data)
        })
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