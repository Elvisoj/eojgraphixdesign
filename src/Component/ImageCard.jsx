import React from 'react'

function ImageCard(props) {
    const { imgUrl, title, imgId, description } = props.data;
  return (
    <div key={imgId} className='image-card'>
      <div className="content">
        <img src={imgUrl} alt="" />
        <div className="about">
            <h2 className="title">{title}</h2>
            <p className="descrption">{description}</p>
            <button>Make Design Request</button>
        </div>
      </div>
    </div>
  )
}

export default ImageCard
