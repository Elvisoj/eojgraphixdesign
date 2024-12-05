import React from 'react'
import ImageCard from './ImageCard'
import BirthdayImg from "../assets/birthday.jpg"
import FlyerOne from "../assets/flyer.jpg"
import FlyerTwo from "../assets/flyer2.jpg"
import FlyerThree from "../assets/flyer3.jpg"

function Gallery() {
    const galleryData = [
        {
            imgId: 21,
            imgUrl: BirthdayImg,
            title: "Birthday Flyer",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, praesentium"
        },
        {
            imgId: 22,
            imgUrl: FlyerOne,
            title: "Graphic Design Poster",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, praesentium"
        },
        {
            imgId: 23,
            imgUrl: FlyerTwo,
            title: "Graphic Design",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, praesentium"
        },
        {
            imgId: 21,
            imgUrl: BirthdayImg,
            title: "Birthday Flyer",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, praesentium"
        },
        {
            imgId: 22,
            imgUrl: FlyerOne,
            title: "Graphic Design Poster",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, praesentium"
        },
        {
            imgId: 23,
            imgUrl: FlyerTwo,
            title: "Graphic Design",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, praesentium"
        },
        {
            imgId: 21,
            imgUrl: BirthdayImg,
            title: "Birthday Flyer",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, praesentium"
        },
        {
            imgId: 22,
            imgUrl: FlyerOne,
            title: "Graphic Design Poster",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, praesentium"
        },
        {
            imgId: 23,
            imgUrl: FlyerTwo,
            title: "Graphic Design",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, praesentium"
        },
        {
            imgId: 24,
            imgUrl: FlyerThree,
            title: "Design Poster",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, praesentium"
        }
    ]
  return (
    <div className='gallery'>
        <div className="gallery-description">
            <h1>Technitol Graphix Design Display</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, autem in. Aut rerum blanditiis cum, ratione consequatur nesciunt voluptates dolores at nostrum facere, veniam, numquam soluta laborum tempora harum alias! Ullam totam magni harum aut, rerum placeat quisquam velit cumque mollitia architecto ipsa, nam et incidunt sunt qui accusamus tempore...</p>
            <p>Click the link below to lear more about us.</p>
            <a href="#">Learm more...</a>
        </div>
        <div className="gallery-container">
            <h2>Our Latest Designs</h2>
            <div className="image-card-container">
                {galleryData.map(data => <ImageCard data={data}/> )}
            </div>
        </div>
    </div>
  )
}

export default Gallery
