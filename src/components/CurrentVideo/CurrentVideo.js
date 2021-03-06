
import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
  width: 100% !important;
`;

const CurrentVideo = ({ video }) => {
  if (!video) {
    return(
      <div>
        Loading ...
      </div>
    );
  }
  return(
    <Card className="ui card">
      <div className="image">
        <img alt="Description" src={video.snippet.thumbnails.high.url} />
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
    </Card>
  )
}
export default CurrentVideo