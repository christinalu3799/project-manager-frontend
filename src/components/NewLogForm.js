import React,  { useState, useContext } from 'react'
import { LogContext } from '../contexts/LogContext'
const NewLogForm = (props) => {
    const [logs, setLogs, getLogs] = useContext(LogContext)

    const [log, setLog] = useState({log: ''})
    
    const handleAddLog = (e) => {
        e.preventDefault()
        setLog({...log, log: e.target.value})
    }
    
    const handleSubmitLog = (e) => {
        e.preventDefault()
        console.log('new log to add: ', log)
        fetch(`${props.baseURL}/api/v1/projects/logs/${props.showProject.id}`, {
            method: 'POST',
            body: JSON.stringify(log),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
            })
            .then(res => {
                setLog({log: ''})
                getLogs()
            })
        }
  return (
        <div>
            <form onSubmit={handleSubmitLog}>
                <input 
                    type="text" 
                    id="log" 
                    value={log.log}
                    placeholder="Log"
                    onChange={handleAddLog}
                />
                <input 
                    type="submit"
                    value="Log"
                />
            </form>
        </div> 
  )
}

export default NewLogForm