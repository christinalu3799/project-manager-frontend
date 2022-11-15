import React, { useState, createContext, useEffect } from 'react'

let baseURL
// process.env.NODE_ENV = 'production'
process.env.REACT_APP_NODE_ENV === 'development'
? (baseURL = process.env.REACT_APP_DEV_URL)
: (baseURL = process.env.REACT_APP_BACKEND_URL)    

export const LogProvider = (props) => {
    
    const [logs, setLogs] = useState(null)

    const getLogs = () => {
        fetch(`${baseURL}/api/v1/projects/logs/${props.project_id}`, {
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

    return  <LogContext.Provider value={[logs, setLogs, getLogs]}>
                {props.children}
            </LogContext.Provider>
}
 
export const LogContext = createContext()