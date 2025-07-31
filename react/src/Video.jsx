import React from 'react'
import ReactPlayer from "react-player"

const Video = () => {
  return (
    <div>
        <h1>Video Player</h1><br/>
          <ReactPlayer src='https://youtu.be/xRwIqdON1WM?si=CIsoxMHg8BlbxFs9' playing={false} controls ={true}
          width ="100%" height="800px"/>
    </div>
  )
}

export default Video