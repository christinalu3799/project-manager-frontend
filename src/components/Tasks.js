import React, { useContext } from 'react'
import { TaskContext } from '../contexts/TaskContext'

const Tasks = (props) => {
    const [tasks, setTasks] = useContext(TaskContext)
    // const [task, setTask] = useState({
        
    // })

    const handleCheckedTask = (taskId) => {
        console.log(taskId)
        handleUpdateTask()
    }
    
    const handleUpdateTask = () => {
        console.log('in handleUpdateTask')
        // fetch(`${props.baseURL}/api/v1/projects/tasks/${props.showProject.id}/${}`, {
        //     method: 'POST',
        //     body: JSON.stringify(task),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     credentials: 'include'
        // })
    }
    if (tasks !== null) {
        return (
            <div> 
                {tasks.map((task) => {
                    return (
                        <div key={task.id}>
                            <input type='checkbox' id='is_complete' value={task.is_complete} onClick={()=>handleCheckedTask(task.id)} />
                            <p>{task.task}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Tasks