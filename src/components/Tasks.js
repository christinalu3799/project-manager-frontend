import React, { useContext, useEffect, useState } from 'react'
import { TaskContext } from '../contexts/TaskContext'
import { useNavigate } from 'react-router-dom'
import '../stylesheets/Tasks.css'
import '../stylesheets/Logs.css'
import UpdateTaskForm from './UpdateTaskForm'
import EditIcon from '../static/editing.png'
import TrashIcon from '../static/trash.png'
const Tasks = (props) => {
    console.log('RENDERING TASKS')
    const [tasks, setTasks, getTasks] = useContext(TaskContext)
    
    const navigate = useNavigate()
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
    // handle deleting a task =========================================
    async function handleDeleteTask(id) {
        try {
            let response = await fetch(`${props.baseURL}/api/v1/projects/tasks/${props.showProject.id}/${id}`, {
                method: 'DELETE',
                credentials: 'include'
            })
            if (response.ok) {
                getTasks()
            }

        } catch(err) {
            console.log('err: ', err)
        }
    }

    if (tasks !== null) {
        return (
            <div className='tasks-container'> 
                {tasks.map((task) => {
                    return (
                        <div key={task.id} className='task'>
                            {currentTask === task.id ? 
                            <>
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
                                <div>
                                    <button onClick={(e)=>handleUpdateTask(e, task, task.id)} className='edit-log-btn'>
                                        <img src={EditIcon} alt='editing icon'/>
                                    </button>
                                    <button onClick={()=>handleDeleteTask(task.id)} className='trash-btn'>
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

export default Tasks