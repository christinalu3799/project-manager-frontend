import React, { useState, createContext, useEffect } from 'react'

export const TaskProvider = (props) => {
    const [tasks, setTasks] = useState(null)

    const getTasks = () => {
        fetch(`http://localhost:8000/api/v1/projects/tasks/${props.project_id}`, {
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