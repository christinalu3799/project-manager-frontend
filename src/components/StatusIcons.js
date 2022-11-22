import React from 'react'
import '../stylesheets/Show.css'

const StatusIcons = (props) => {
    if (props.status === 'not started') {
        return (
            <div className='not-started status-icon'>
                <p>
                    {props.status}
                </p>
            </div>
        )
    } else if (props.status === 'in progress') {
        return (
            <div className='in-progress status-icon'>
                <p>
                    {props.status}
                </p>
            </div>
        )  
    } else if (props.status === 'completed') {
        return (
            <div className='completed status-icon'>
                <p>
                    {props.status}
                </p>
            </div>
        )
    } else {
        return (
            <div className='status-icon'>
                <p>
                    DELETED - CHECK IN TRASH
                </p>
            </div>
        )
    }
}

export default StatusIcons