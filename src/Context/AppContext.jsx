import { createContext, useRef, useState } from "react";
import { assets } from "../assets/assets";

//GALLERY IMAGES
const { Kidd0,
    Kidd1,
    Kidd2,
    Kidd3,
    Kidd4 } = assets.galleryImg

export const AppContext = createContext();
const defaultGalleryData = [
    {
        id: 21,
        thumbnail: Kidd0,
        title: "Birthday Flyer",
        isEditing: false,
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, praesentium"
    },
    {
        id: 22,
        thumbnail: Kidd1,
        title: "Graphic Design Poster",
        isEditing: false,
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, praesentium"
    },
    {
        id: 23,
        thumbnail: Kidd2,
        title: "Graphic Design",
        isEditing: false,
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, praesentium"
    },
    {
        id: 24,
        thumbnail: Kidd3,
        title: "Poster Design",
        isEditing: false,
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, praesentium"
    },
    {
        id: 25,
        thumbnail: Kidd4,
        title: "Poster Design",
        isEditing: false,
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, praesentium"
    }
]

const formStateData = {
    title: "",
    thumbnail: null,
    description: "",
    id: null
};

const ContextProvider = ( props )=>{
    const [ galleryData, setGalleryData ] = useState(defaultGalleryData)
    const [ posts, setPosts ] = useState(defaultGalleryData);
    const [ formState, setFormState ] = useState(formStateData);

    const [ errors, setErrors ] = useState("");
    const [ managePostActive, setManagePostActive ] = useState(false);
    const [ isFormActive, setIsFormActive ] = useState(false);
    
    const headerREF = useRef()
    
    
    const handleFormEdit = (postId)=>{
        let [newPost] = (posts.filter(post => post.id === postId))
        setFormState(newPost)
        console.log(formState)
        setIsFormActive(prev => !prev)
    }
    const handleDelete = (postId)=>{
        setPosts(posts.filter(post => post.id !== postId))
    }

    
    const AppData = {
        galleryData,
        posts,
        setPosts,
        managePostActive,
        setManagePostActive,
        isFormActive,
        setIsFormActive,
        formState, 
        setFormState,
        formStateData,
        errors, 
        setErrors,
        //postToEdit, 
        //setPostToEdit,
        headerREF,

        handleDelete,
        handleFormEdit
    }
    return (
        <AppContext.Provider value={ AppData }>
            { props.children }
        </AppContext.Provider>
    )
}

export default ContextProvider