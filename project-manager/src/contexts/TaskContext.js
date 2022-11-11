import React, { useState, createContext, useEffect } from 'react'

let baseURL = ''

if (process.env.NODE_ENV === 'development') {
    baseURL = 'http://localhost:8000/api/v1'
} else {
    baseURL = 'process.env.REACT_APP_BACKEND_URL'
}

export const TaskProvider = (props) => {
    
    const [tasks, setTasks] = useState(null)

    const getTasks = () => {
        fetch(`${baseURL}/projects/tasks/${props.project_id}`, {
            credentials: 'include'
        })
        .then((res) => res.json())
        .then(resJson => {
            setTasks(resJson.data)
        })
    }

    // this hook is similar to component did mount
    useEffect(() => {
        getTasks()
    }, [])

    return  <TaskContext.Provider value={[tasks, setTasks]}>
                {props.children}
            </TaskContext.Provider>
}
 
export const TaskContext = createContext()