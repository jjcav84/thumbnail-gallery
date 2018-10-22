import React from 'react'

const Thumbnail = ({ imgUrl, handleClick }) => {
    return (
        <div style={styles}>
          <img
              alt={''}
              src={imgUrl}
              style={{
                  width: '100%',
                  height: '100%'
              }}
              onClick={handleClick}
          />
        </div>
    )
}

const styles = {
    height: '50%',
    width: '25%',
    position: 'relative'
}

export default Thumbnail