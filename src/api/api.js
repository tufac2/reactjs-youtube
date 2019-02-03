import React from 'react'
import axios from 'axios'
import CLIENT_ID from './credentials'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 10,
    key: `${CLIENT_ID}`
  }
})