import React from 'react'
import youtube from '../api/api'
import SearchBar from './SearchBar/SearchBar'
import VideoList from './VideoList/VideoList'
import CurrentVideo from './CurrentVideo/CurrentVideo'

export default class App extends React.Component {
  
  state = { selectedVideo: null, videos: [] }
  
  onTermSubmit = async term => {
    const response = await youtube.get('/search', {
      params:{
        q: term
      }
    })

    this.setState({videos: response.data.items})
  }

  onVideoSelect = (video) => {
    this.setState({selectedVideo: video})
    console.log(this.selectedVideo)
    
    
  }
  render() {
    return (
      <div>
        < SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui two column doubling stackable grid container">
          <div className="eleven wide column">
            < CurrentVideo video = {this.state.selectedVideo} />
          </div>
          <div className="five wide column">
            < VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
          </div>
        </div>
      </div>
    )
  }
}