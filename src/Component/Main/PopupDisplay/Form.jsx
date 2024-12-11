import React, { useContext, useState } from 'react'
import { AppContext } from '../../../Context/AppContext';
import "./form.css"
import { app, database, storage } from '../../../Config/firebase-config';
import { collection, addDoc, doc, updateDoc } from 'firebase/firestore';





function Form(props) {

    const {posts, setPosts, setIsFormActive, formState, setFormState, errors, setErrors } = useContext(AppContext);
    const [ handUpload, setHandleUpload] = useState()
    const collectionRef = collection(database, "postData")

    
    
    // FORMVALIDATION
    const formValidation = ()=>{
        if(formState.title && formState.description &&  formState.thumbnail){
            setErrors("")
            return true
        } else{
            let errorField = [];
            for(const [key, value ] of Object.entries(formState)){
                if(!value){
                    errorField.push(key)
                }
            }
            setErrors(errorField.join(", "))
            return false
        }
    }


        // HANDLE SUNBMIT
    const handleSubmit = (e)=>{
        e.preventDefault()
        let [checkId] = posts.filter((post) => post.postId === formState.postId)
        if(checkId){
            const docToUpdate = doc(database, "postData", checkId.postId);
            updateDoc(docToUpdate, formState)
            .then(()=> alert("Successfully Updated"))
            .catch((err)=> alert(err.message))
        }
        else {
            if(!formValidation()) return;
            addDoc(collectionRef, formState)
            .then(() => alert("Data Added"))
            .catch((err) => alert(err.message))

        }

        setIsFormActive(prev => !prev)
    }
    

    // HANDLE INPUT
    const handleInput = (e)=>{
        
        if(formState.postId){
            if(e.target.id === "thumbnail"){
                setFormState({...formState, [e.target.id]: URL.createObjectURL(e.target.files[0])})
                //thumbnail = URL.createObjectURL(e.target.files[0])
                //console.log(thumbnail)
            } 
            else{
                setFormState({...formState, [e.target.id]: e.target.value})
            }
        }
        else{
            if(e.target.id === "thumbnail"){
                setFormState({...formState, [e.target.id]: URL.createObjectURL(e.target.files[0])})
                //thumbnail = URL.createObjectURL(e.target.files[0])
                //console.log(thumbnail)
            } else{
                setFormState({...formState, [e.target.id]: e.target.value})
            }
            
        }
    }


    return (
        <div className='top-wrapper form-wrapper'>
            <div className="form-container">
                <h2>{props.title}</h2>
                <p><span>NOTE:</span> All sections of this form must be completely filled</p>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="title">
                        Title
                        <input value={formState.title} id='title' type="text" placeholder='Title' onChange={handleInput}/>
                    </label>

                    <label htmlFor="thumbnail">
                        Thumbnail
                        <input id='thumbnail'  type="file"  onChange={handleInput}/>
                    </label>

                    <label htmlFor="description">
                        Post Description
                        <textarea value={formState.description} id="description" placeholder='Post Description' onChange={handleInput}></textarea>
                    </label>
                  
                    {errors && <div className="error">Please include {errors}</div>}
                    <button className="submit-form">{props.formButtonName}</button>

                </form>
            </div>
            <button className="back-to-dashboard" onClick={()=> setIsFormActive(prev => !prev)}>Back ➡️</button>
        
        </div>
    )
}

export default Form
