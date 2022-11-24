import React from 'react'

const UpdateLogForm = (props) => {

    const handleChangeLog = (e) => {
        e.preventDefault()
        let logToUpdate = e.target.value
        props.setUpdatingLog(logToUpdate)

    }
    const handleSubmitUpdateLog = (e) => {
        e.preventDefault()
        console.log(`${props.baseURL}/api/v1/projects/logs/${props.showProject.id}/${props.log.id}`)
        let logToUpdate
        if (props.updatingLog === null) {
            logToUpdate = {
                log: props.log.log
            }
        } else {
            logToUpdate = {
                log: props.updatingLog
            }
        }
        fetch(`${props.baseURL}/api/v1/projects/logs/${props.showProject.id}/${props.log.id}`, {
            method: 'PUT',
            body: JSON.stringify(logToUpdate),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        })
        .then(res => res.json())
        .then(resJson => {
            props.confirmLogUpdate()
            props.getLogs()
        })
    }

    return (
        <form onSubmit={handleSubmitUpdateLog}>
            <textarea 
                type="text" 
                id="log" 
                defaultValue={props.log.log}
                placeholder="Log Your Progress Today!"
                onChange={handleChangeLog}
                className='new-log-form-input'
            ></textarea>

            <div className='update-btns'>
                <button type="submit" className='update-log-form-btn'>
                    Update Log
                </button>

                <button onClick={()=>props.closeEditForm()} className='cancel-update-log'>
                    Cancel
                </button>
            </div>
        </form>
    )
}

export default UpdateLogForm