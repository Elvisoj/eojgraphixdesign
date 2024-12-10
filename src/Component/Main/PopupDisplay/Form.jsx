import React, { useContext } from 'react'
import { AppContext } from '../../../Context/AppContext';
import "./form.css"
function Form(props) {

    const {posts, setPosts, setIsFormActive, formState, setFormState, errors, setErrors } = useContext(AppContext);
    

    // GENERATE ID
    const generatedId = ()=>{
        const length = 12;
        let id = '';

        const alpha = "0A1BCD_3EF@G2HIJ6KLM4NOP5QRS7TUV8WX9Y&Z";
        while(id.length < length){
            id += alpha[Math.floor(Math.random() * alpha.length)]
        }
        return id;
    }
    
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
        let [checkId] = posts.filter((post) => post.id === formState.id)
        if(checkId){
            let newpost = posts.filter((post) => post.id !== checkId.id)
            setPosts([...newpost, formState])
        }
        else {
            if(!formValidation()) return;
            setPosts([...posts, {...formState, id: generatedId()}])

        }

        setIsFormActive(prev => !prev)
    }
    

    // HANDLE INPUT
    const handleInput = (e)=>{
        if(formState.id){
            if(e.target.type === "file"){
                setFormState({...formState, [e.target.id]: URL.createObjectURL(e.target.files[0])})
            } 
            else{
                setFormState({...formState, [e.target.id]: e.target.value})
            }
        }
        else{
            if(e.target.type === "file"){
                setFormState({...formState, [e.target.id]: URL.createObjectURL(e.target.files[0])})
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
                    <button className="submit-form">Add Post</button>
                </form>
            </div>
            <button className="back-to-dashboard" onClick={()=> setIsFormActive(prev => !prev)}>Back ➡️</button>
        
        </div>
    )
}

export default Form
