import React, { useContext, useState } from 'react'
import { TaskContext } from '../contexts/TaskContext'

const Tasks = (props) => {
    const [tasks, setTasks, getTasks] = useContext(TaskContext)

    const [checked, setChecked] = useState(true)

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
            <div> 
                {tasks.map((task) => {
                    return (
                        <div key={task.id}>
                            <input 
                                type='checkbox' 
                                id='is_complete' 
                                value={task.is_complete} 
                                onChange={(e)=>handleCheckedTask(e, task)}
                                checked={task.is_complete}
                                />
                            <p>{task.task}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Tasks