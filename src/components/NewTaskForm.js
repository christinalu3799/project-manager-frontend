import React, { useState, useContext } from 'react'
import { TaskContext } from '../contexts/TaskContext'
import '../stylesheets/Tasks.css'
import Button from 'react-bootstrap/Button'
const NewTaskForm = (props) => {
    const [tasks, setTasks, getTasks] = useContext(TaskContext)

    const [task, setTask] = useState({task: ''})
    
    const handleAddTask = (e) => {
        getTasks()
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
        <div className='new-task-form-container'>
            <form onSubmit={handleSubmitTask} className='new-task-form'>
                <input 
                    type="text" 
                    id="task" 
                    value={task.task}
                    placeholder="Task"
                    onChange={handleAddTask}
                    required
                    className='new-task-form-input'
                />
                    
                <Button variant='success' type="submit" className='new-task-form-btn'>
                    Add Task
                </Button>
            </form>
        </div>
    )
}

export default NewTaskForm