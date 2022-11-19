import React, { useContext } from 'react'
import { LogContext } from '../contexts/LogContext'
import '../stylesheets/Logs.css'

const Logs = () => {
    const [logs, setLogs] = useContext(LogContext)
    if (logs !== null) {
        return (
            <div className='log'>
                {logs.map((log) => {
                    return (
                        <div key={log.id}>
                            <p>{log.log}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Logs