
import React from 'react'
import VideoItem from '../VideoItem/VideoItem';

const VideoList = ({ videos, onVideoSelect }) =>{
  const renderedList = videos.map((video, index) => {
    return <VideoItem onVideoSelect = { onVideoSelect } key={index} video = {video}/>
  })
  return (
    <div>
      { renderedList }
    </div>
  )
}

export default VideoList
