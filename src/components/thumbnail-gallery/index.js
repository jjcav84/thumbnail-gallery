import React, { Component } from 'react'

export default class ThumbnailGallery extends Component {
    render() {
        return (
            <div style={thumbnailGalleryStyles}>
                ThumbnailGallery
            </div>
        )
    }
}

const thumbnailGalleryStyles = {
    background: '#ddd',
    height: '500px',
    width: '1024px',
    margin: '40px auto'
}