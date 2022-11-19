import React,  { useState, useContext } from 'react'
import { LogContext } from '../contexts/LogContext'
import '../stylesheets/Logs.css'
import Button from 'react-bootstrap/Button'

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
        <div className='new-log-form-container'>
            <form onSubmit={handleSubmitLog} className='new-log-form'>
                <textarea 
                    type="text" 
                    id="log" 
                    value={log.log}
                    placeholder="Log Your Progress Today!"
                    onChange={handleAddLog}
                    className='new-log-form-input'
                ></textarea>

                <Button variant='success' type="submit" className='new-log-form-btn'>
                    Add Log
                </Button>
            </form>
        </div> 
  )
}

export default NewLogForm