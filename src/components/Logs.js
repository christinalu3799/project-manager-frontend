import React, { useContext } from 'react'
import { LogContext } from '../contexts/LogContext'
const Logs = () => {
    const [logs, setLogs] = useContext(LogContext)
    if (logs !== null) {
        return (
            <div>
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