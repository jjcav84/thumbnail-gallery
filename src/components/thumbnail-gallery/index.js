import React, { Component } from 'react'
import ActiveThumbnailWindow from './active-thumbnail-window'
import ThumbnailGrid from './thumbnail-grid'
import axios from 'axios'

export default class ThumbnailGallery extends Component {

    componentDidMount () {
        axios.get ()
    }

    render() {
        return (
            <div style={thumbnailGalleryStyles}>

                {/* Left Side */}
                <div style={{ flex: 1 }}>
                  <ActiveThumbnailWindow />
                  <ThumbnailGrid />
                </div>

                {/* Right Side */}
                <div style={{ flex: 1, padding: '40px' }}>
                 Some Cool Text
                </div>

            </div>
        )
    }
}

const thumbnailGalleryStyles = {
    background: '#ddd',
    height: '500px',
    width: '1024px',
    margin: '40px auto',
    display: 'flex'
}