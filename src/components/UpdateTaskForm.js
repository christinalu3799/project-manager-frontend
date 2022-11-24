import React from 'react'

const UpdateTaskForm = (props) => {


    const handleChangeTask = (e) => {
        e.preventDefault()
        let taskToUpdate = e.target.value
        props.setUpdatingTask(taskToUpdate)
    }

    const handleSubmitUpdateTask = (e) => {
        e.preventDefault()
        let taskToUpdate
        if (props.updatingTask === null) {
            taskToUpdate = {
                task: props.task.task
            }
        } else {
            taskToUpdate = {
                task: props.updatingTask
            }
        }
        fetch(`${props.baseURL}/api/v1/projects/tasks/${props.showProject.id}/${props.task.id}`, {
            method: 'PUT',
            body: JSON.stringify(taskToUpdate),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        })
        .then(res => res.json())
        .then(resJson => {
            props.confirmTaskUpdate()
            props.getTasks()
        })

    }
    return (
        <form onSubmit={handleSubmitUpdateTask} className='update-task-form'>
            <input 
                type="text" 
                id="task" 
                defaultValue={props.task.task}
                placeholder="Add a to-do!"
                onChange={handleChangeTask}
                required
                className='update-task-form-input'
            />
            <button type='submit' className='update-task-btn'>Confirm</button>
        </form>
    )
}

export default UpdateTaskForm