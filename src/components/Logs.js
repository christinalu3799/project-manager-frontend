import React, { useContext } from 'react'
import { LogContext } from '../contexts/LogContext'
import '../stylesheets/Logs.css'

const Logs = () => {
    const [logs, setLogs] = useContext(LogContext)
    if (logs !== null) {
        return (
            <div >
                {logs.map((log) => {
                    // format date 
                    let formattedDate = log.created_date.slice(0,-12)
                    let time = log.created_date.slice(-12)

                    return (
                        <div key={log.id} className='log'>
                            <p className='time'>{formattedDate} / {time}</p>
                            <p>{log.log}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Logs