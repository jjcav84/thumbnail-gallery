import React from 'react'

const ActiveThumbnailWindow = ({ activeThumbnail }) => {
    return (
        <div style={styles}>
          <img
              alt={''}
              src={activeThumbnail.imgUrl}
              style={{
                  width: '100%',
                  height: '100%'
              }}
          />
        </div>
    )
}

const styles = {
    height: '65%',
    width: '100%',
    background: '#333',
    position: 'relative'
}

export default ActiveThumbnailWindow