import React, { useState, createContext, useEffect } from 'react'

export const LogProvider = (props) => {
    const [logs, setLogs] = useState(null)

    console.log('in log provider!')
    const getLogs = () => {
        fetch(`http://localhost:8000/api/v1/projects/logs/${props.project_id}`, {
            credentials: 'include'
        })
        .then((res) => res.json())
        .then(resJson => {
            setLogs(resJson.data)
        })
    }

    // this hook is similar to component did mount
    useEffect(() => {
        getLogs()
    }, [])

    return  <LogContext.Provider value={[logs, setLogs]}>
                {props.children}
            </LogContext.Provider>
}
 
export const LogContext = createContext()