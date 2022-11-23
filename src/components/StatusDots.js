import React from 'react'

const StatusDots = (props) => {
    if (props.status === 'not started') {
        return (
            <div className='status-dot not-started'></div>
        )
    } else if (props.status === 'in progress') {
        return (
            <div className='status-dot in-progress'></div>
        )  
    } else if (props.status === 'completed') {
        return (
            <div className='status-dot completed'></div>
        )
    }
}

export default StatusDots