import React, { useContext, useState } from 'react'
import { TaskContext } from '../contexts/TaskContext'
import '../stylesheets/Tasks.css'

const Tasks = (props) => {
    const [tasks, setTasks, getTasks] = useContext(TaskContext)

    const handleCheckedTask = (e, task) => {
        let taskToUpdate = {
            task: task.task,
            is_complete: e.target.checked
        }

        console.log(taskToUpdate, props.showProject.id, task.id)
        fetch(`${props.baseURL}/api/v1/projects/tasks/${props.showProject.id}/${task.id}`, {
            method: 'PUT',
            body: JSON.stringify(taskToUpdate),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        })
        .then(res => {
            getTasks()
        })
    }
    if (tasks !== null) {
        return (
            <div className='tasks-container'> 
                {tasks.map((task) => {
                    return (
                        <div key={task.id} className='task'>
                            <input 
                                type='checkbox' 
                                id='is_complete' 
                                value={task.is_complete} 
                                onChange={(e)=>handleCheckedTask(e, task)}
                                checked={task.is_complete}
                                className='checkbox'
                                />
                            <p className='task-description'>{task.task}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Tasks