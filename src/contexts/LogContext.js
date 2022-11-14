import React, { useState, createContext, useEffect } from 'react'

let baseURL = ''

if (process.env.NODE_ENV === 'development') {
    baseURL = 'http://localhost:8000/api/v1'
} else {
    baseURL = 'process.env.REACT_APP_BACKEND_URL'
}

export const LogProvider = (props) => {
    
    const [logs, setLogs] = useState(null)
    
    console.log('in log provider!')
    const getLogs = () => {
        fetch(`${baseURL}/projects/logs/${props.project_id}`, {
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