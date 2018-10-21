import React from 'react'
import Thumbnail from './thumbnail'

const ThumbnailGrid = ({ thumbnails }) => {
    return (
        <div style={styles}>
            {
                thumbnails.map((thumbnail) => {
                    return (
                        <Thumbnail />
                    )
                })
            }
        </div>
    )
}

const styles = {
    height: '35%',
    width: '100%',
    background: 'yellow',
    display: 'flex',
    flexWrap: 'wrap'
}
export default ThumbnailGrid