import React from 'react'

const VideoItem = ({ video, onVideoSelect }) => { 
  return(
    <div onClick = { () => onVideoSelect(video) } className="ui card">
      <div className="image">
        <img alt="Description" src={video.snippet.thumbnails.medium.url} />
      </div>
      <div className="content">
        <a href="/" className="header">{video.snippet.title}</a>
        <div className="meta">
          <span className="date">Joined in 2013</span>
        </div>
        <div className="description">
          {video.snippet.description}
        </div>
      </div>
      <div className="extra content">
        <a href="/">
          <i className="user icon"></i>
          22 Friends
        </a>
      </div>
    </div>
  )
}

export default VideoItem