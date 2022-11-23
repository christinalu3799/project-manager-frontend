import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SideBar = (props) => {
    const navigate = useNavigate()

    // const goToProject = (id) => {
    //     console.log('project id = ', id)
    //     // navigate(`/show/${id}`)
    // }
    return (
        <div>
            {props.projects.map(project => {
                return (
                    <div>
                        {/* <button onClick={() => goToProject(project.id)}>{project.project_name}</button> */}
                        <Link to={`/show/${project.id}`}>{project.project_name}</Link>
                        {/* <a href={`/show/${project.id}`}>{project.project_name}</a> */}
                    </div>
                )
            })}
        </div>
    )
}

export default SideBar