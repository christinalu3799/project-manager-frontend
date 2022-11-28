import React, { useContext, useState } from 'react'
import { LogContext } from '../contexts/LogContext'
import EditIcon from '../static/editing.png'
import UpdateLogForm from './UpdateLogForm'
import TrashIcon from '../static/trash.png'
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
    // handle deleting a log =========================================
    async function handleDeletelog(id) {
        console.log('log.id = ', id)
        try {
            let response = await fetch(`${props.baseURL}/api/v1/projects/logs/${props.showProject.id}/${id}`, {
                method: 'DELETE',
                credentials: 'include'
            })
            if (response.ok) {
                getLogs()
            }

        } catch(err) {
            console.log('err: ', err)
        }
    }

    if (logs !== null) {
        return (
            <div className='log-page'>
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
                                    <p className='time'>{formattedDate}</p>
                                    <p>
                                        {log.log}
                                    </p>
                                    <div className='update-btns'>
                                        <button onClick={()=>handleUpdateLog(log.id)} className='edit-log-btn'>
                                            <img src={EditIcon} alt='editing icon'/>
                                        </button>
                                        <button onClick={()=>handleDeletelog(log.id)} className='trash-btn'>
                                            <img src={TrashIcon} alt='trashbin icon'/>
                                        </button>
                                    </div>

                            </>}
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Logs