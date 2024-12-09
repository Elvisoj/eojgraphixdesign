import { createContext, useRef, useState } from "react";

//GALLERY IMAGES
import BirthdayImg from "../assets/birthday.jpg"
import FlyerOne from "../assets/flyer.jpg"
import FlyerTwo from "../assets/flyer2.jpg"
import FlyerThree from "../assets/flyer3.jpg"

export const AppContext = createContext();
const defaultGalleryData = [
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
        title: "Poster Design",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, praesentium"
    }
]



const ContextProvider = ( props )=>{
    const [ galleryData, setGalleryData ] = useState(defaultGalleryData)
    const headerREF = useRef()
    
    
    const toggleHeader = ()=>{
        headerREF.current.classList.toggle("active");
    }

    
    const AppData = {
        galleryData,
        headerREF,

        toggleHeader
    }
    return (
        <AppContext.Provider value={ AppData }>
            { props.children }
        </AppContext.Provider>
    )
}

export default ContextProvider