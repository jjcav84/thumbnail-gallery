import React from 'react'

const Thumbnail = ({ imgUrl }) => {
    return (
        <div style={styles}>
          <img src={imgUrl} />
        </div>
    )
}

const styles = {
    height: '50%',
    width: '25%',
    background: 'red'
}
export default Thumbnail