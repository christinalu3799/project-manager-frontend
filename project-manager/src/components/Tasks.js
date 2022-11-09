import React, { useContext } from 'react'
import { TaskContext } from '../contexts/TaskContext'

const Tasks = () => {
    const [tasks, setTasks] = useContext(TaskContext)
    if (tasks !== null) {
        return (
            <div>
                <h3>To Do:</h3>
                <br/>
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
}

export default Tasks