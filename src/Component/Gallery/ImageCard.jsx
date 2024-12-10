

function ImageCard(props) {
    const { id, title, thumbnail, description } = props.data;
  return (
    <div key={id} className='image-card'>
      <div className="content">
        <img src={thumbnail} alt="" />
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
