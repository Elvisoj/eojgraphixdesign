import { createContext, useEffect, useRef, useState } from "react";
import { app, database } from "../Config/firebase-config";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";





export const AppContext = createContext();

const formStateData = {
    title: "",
    thumbnail: null,
    description: "",
};

const ContextProvider = ( props )=>{
    const [ posts, setPosts ] = useState();
    const [ formButtonName, setFormButtonName ] = useState("Add New Post");
    const [ formState, setFormState ] = useState(formStateData);

    const [ errors, setErrors ] = useState("");
    const [ managePostActive, setManagePostActive ] = useState(false);
    const [ isFormActive, setIsFormActive ] = useState(false);
    
    const collectionRef = collection(database, "postData")

    const getData= ()=>{
        getDocs(collectionRef)
        .then((res) => {
            const dataReturn = res.docs.map((item) => {
                return {...item.data(), postId: item.id}
            });
            setPosts(dataReturn);
            
        })
    }
    useEffect(()=>{
        getData();
        
    },[posts])

    
    
    const handleFormEdit = (postId)=>{
        let [postToUpdate] = (posts.filter(post => post.postId === postId))
        setFormState(postToUpdate)
        setFormButtonName("Update Post")
        setIsFormActive(prev => !prev)
    }
    const handleDelete = (postId)=>{
        const docToDelete = doc(database, "postData", postId);
        deleteDoc(docToDelete)
        .then(()=> alert("Post Deleted Successfully"))
        .catch((err)=> alert(err.message))
        
        setPosts(posts.filter(post => post.postId !== postId))
    }

    
    const AppData = {
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
        formButtonName,
        setFormButtonName,

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