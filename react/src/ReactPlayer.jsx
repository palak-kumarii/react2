import React from 'react'

const ReactPlayer = () => {
  return (
    <div>
         <h1>Video Player</h1><br/>
         <ReactPlayer src='https://res.cloudinary.com/dcgghyuav/video/upload/v1753953243/video_hfodtb.mp4' playing={false} controls ={true}
          width ="100%" height="800px"/>
    </div>
  )
}

export default ReactPlayer