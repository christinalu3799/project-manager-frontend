import React, { useContext } from 'react'
import { TaskContext } from '../contexts/TaskContext'

const Tasks = () => {
    const [tasks, setTasks] = useContext(TaskContext)
    console.log('im in tasks.js', tasks)
    return (
        <div>
            <h1>TASKS</h1>
            {tasks.map((task) => {
                return (
                    <div key={task.id}>
                        <p>{task.task}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Tasks