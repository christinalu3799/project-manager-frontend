import React from 'react'
import SideBar from '../components/SideBar'
const ShowPage = (props) => {
  return (
    <div>
        <SideBar 
            projects={props.projects} 
            setShowId={props.setShowId}
            showId={props.showId}/>
    </div>
  )
}

export default ShowPage