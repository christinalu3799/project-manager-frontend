import React from 'react'

const DeletedProjects = (props) => {
    if (props.user !== undefined) {
        return (
          <h1>DELETED PROJECTS</h1>
        )
    } else {
        return (
            <div className='not-logged-in'>
                <h4>
                    Please Register/Login to start tracking your projects!
                </h4>
            </div>
        )
    }

}

export default DeletedProjects