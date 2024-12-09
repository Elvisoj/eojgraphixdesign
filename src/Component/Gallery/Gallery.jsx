import React, { useContext } from 'react'
import ImageCard from '../ImageCard'
import "./gallery.css"

import { AppContext } from '../../Context/AppContext'

function Gallery() {
    const { galleryData } = useContext(AppContext)


  return (
    <div className='gallery'>
        <div className="gallery-description">
            <h1>EOJ Graphix Design Display</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, autem in. Aut rerum blanditiis cum, ratione consequatur nesciunt voluptates dolores at nostrum facere, veniam, numquam soluta laborum tempora harum alias! Ullam totam magni harum aut, rerum placeat quisquam velit cumque mollitia architecto ipsa, nam et incidunt sunt qui accusamus tempore...</p>
            <p>Click the link below to lear more about us.</p>
            <a href="#">Learm more...</a>
        </div>
        <div className="gallery-container">
            <h2>Our Latest Designs</h2>
            <div className="image-card-container">
                {galleryData.map(data => <ImageCard key={data.imgId} data={data}/> )}
            </div>
        </div>
    </div>
  )
}

export default Gallery
