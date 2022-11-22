import React, { useContext, useEffect, useState } from 'react'
import { TaskContext } from '../contexts/TaskContext'
import '../stylesheets/Tasks.css'
import UpdateTaskForm from './UpdateTaskForm'

const Tasks = (props) => {
    console.log('RENDERING TASKS')
    const [tasks, setTasks, getTasks] = useContext(TaskContext)
    
    // handle checking a task =========================================
    const handleCheckedTask = (e, task) => {
        let taskToUpdate = {
            task: task.task,
            is_complete: e.target.checked
        }

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
    // handle updating a task =========================================
    // const [isUpdating, setIsUpdating] = useState(false)
    const [currentTask, setCurrentTask] = useState(null)
    const [updatingTask, setUpdatingTask] = useState(null)
    const handleUpdateTask = (e, task, id) => {
        setCurrentTask(id)
    }

    const confirmTaskUpdate = () => {
     
        console.log('in confirmTaskUpdate')
        // setIsUpdating(false)
        setCurrentTask(null)
    }
    if (tasks !== null) {
        return (
            <div className='tasks-container'> 
                {tasks.map((task) => {
                    return (
                        <div key={task.id} className='task'>
                            {currentTask === task.id ? 
                            <>
                                <p className='checkbox'>Updating</p>
                                
                                <UpdateTaskForm 
                                    task={task}
                                    confirmTaskUpdate={confirmTaskUpdate}
                                    getTasks={getTasks}
                                    setUpdatingTask={setUpdatingTask}
                                    updatingTask={updatingTask}
                                    baseURL={props.baseURL}
                                    showProject={props.showProject}/>
                                
                            </>
                            :
                            <>  
                                <div>
                                    <input 
                                        type='checkbox' 
                                        id='is_complete' 
                                        value={task.is_complete} 
                                        onChange={(e)=>handleCheckedTask(e, task)}
                                        checked={task.is_complete}
                                        className='checkbox'
                                        />
                                    <p className='task-description'>
                                        {task.task}
                                    </p>
                                </div>
                                <button onClick={(e)=>handleUpdateTask(e, task, task.id)}>Edit Task</button>
                            </>}
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Tasks