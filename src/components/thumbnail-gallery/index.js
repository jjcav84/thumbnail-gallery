import React, { Component } from 'react'
import ActiveThumbnailWindow from './active-thumbnail-window'
import ThumbnailGrid from './thumbnail-grid'
import axios from 'axios'

export default class ThumbnailGallery extends Component {
    state = {
        thumbnails: [],
        activeIndex: 0
    }

    componentDidMount () {
        axios.get ('https://react-hacker.danzuzevich.com/thumbnails')
            .then(res => {
                this.setState({ thumbnails: res.data.thumbnails })
            })
    }

    renderThumbnails = () => {
        const { thumbnails, activeIndex } = this.state
        if(thumbnails.length) {
            return(
              <ActiveThumbnailWindow
                activeThumbnail={thumbnails[activeIndex]}
              />
            )
        }
    }

    handleClick = (e) => {
        const newActiveIndex =e.target.getAttribute('data-index')
        this.setState({ activeIndex: newActiveIndex})
    }

    render() {
        const { thumbnails } = this.state

        return (
            <div style={thumbnailGalleryStyles}>

                {/* Left Side */}
                <div style={{ flex: 1 }}>
                    { this.renderThumbnails() }
                  <ThumbnailGrid
                    thumbnails={thumbnails}
                    handleClick={this.handleClick}
                  />
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