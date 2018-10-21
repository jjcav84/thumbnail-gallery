import React, { Component } from 'react'

export default class ThumbnailGallery extends Component {
    render() {
        return (
            <div style={thumbnailGalleryStyles}>

                {/* Left Side */}
                <div style={{ flex: 1 }}>
                  Left
                </div>

                {/* Right Side */}
                <div style={{ flex: 1 }}>
                  Right
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