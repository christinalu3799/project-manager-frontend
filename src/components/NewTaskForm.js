import React, { useState, useContext } from 'react'
import { TaskContext } from '../contexts/TaskContext'

const NewTaskForm = (props) => {
    const [tasks, setTasks, getTasks] = useContext(TaskContext)

    const [task, setTask] = useState({task: ''})
    
    const handleAddTask = (e) => {
        e.preventDefault()
        setTask({...task, task: e.target.value})
    }
    
    const handleSubmitTask = (e) => {
        e.preventDefault()
        console.log('new task to add: ', task)
        fetch(`${props.baseURL}/api/v1/projects/tasks/${props.showProject.id}`, {
            method: 'POST',
            body: JSON.stringify(task),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
            })
        .then(res => {
            setTask({task: ''})
            getTasks()
        })
    }
    return (
        <div>
            <form onSubmit={handleSubmitTask}>
                <input 
                    type="text" 
                    id="task" 
                    value={task.task}
                    placeholder="Task"
                    onChange={handleAddTask}
                />
                <input 
                    type="submit"
                    value="Add Task"
                />
            </form>
        </div>
    )
}

export default NewTaskForm