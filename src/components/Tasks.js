import React, { useContext } from 'react'
import { TaskContext } from '../contexts/TaskContext'

const Tasks = () => {
    const [tasks, setTasks] = useContext(TaskContext)
    if (tasks !== null) {
        return (
            <div> 
                {tasks.map((task) => {
                    return (
                        <div key={task.id}>
                            <input type='checkbox'/>
                            <p>{task.task}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Tasks