import React from 'react'

const ActiveThumbnailWindow = ({ activeThumbnail }) => {
    return (
        <div style={styles}>
          <img alt={''} src={activeThumbnail.imgUrl} />
        </div>
    )
}

const styles = {
    height: '65%',
    width: '100%',
    background: '#333'
}

export default ActiveThumbnailWindow