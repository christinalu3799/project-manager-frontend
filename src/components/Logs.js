import React, { useContext, useState } from 'react'
import { LogContext } from '../contexts/LogContext'
import EditIcon from '../static/editing.png'
import '../stylesheets/Logs.css'
import UpdateLogForm from './UpdateLogForm'

const Logs = (props) => {
    const [logs, setLogs, getLogs] = useContext(LogContext)
    const [currentLog, setCurrentLog] = useState(null)
    const [updatingLog, setUpdatingLog] = useState(null)

    const closeEditForm = () => {
        setCurrentLog(null)
    }
    const handleUpdateLog = (id) => {
        setCurrentLog(id)
    }

    const confirmLogUpdate = () => {
        setCurrentLog(null)
    }
    if (logs !== null) {
        return (
            <div >
                {logs.map((log) => {
                    // format date 
                    let formattedDate = log.created_date.slice(0,-12)
                    let time = log.created_date.slice(-12)

                    return (
                        <div key={log.id} className='log'>
                        {currentLog === log.id ?
                            <>
                                <p>Editing</p>

                                <UpdateLogForm 
                                    log={log}
                                    confirmLogUpdate={confirmLogUpdate}
                                    updatingLog={updatingLog}
                                    setUpdatingLog={setUpdatingLog}
                                    getLogs={getLogs}
                                    baseURL={props.baseURL}
                                    showProject={props.showProject}
                                    closeEditForm={closeEditForm}/>
                                
                            </>
                            :
                            <>
                                    <p className='time'>{formattedDate} / {time}</p>
                                    <p>
                                        {log.log}
                                    </p>
                                    <button onClick={()=>handleUpdateLog(log.id)} className='edit-log-btn'>
                                        <img src={EditIcon} alt='editing icon'/>
                                    </button>

                            </>}
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Logs