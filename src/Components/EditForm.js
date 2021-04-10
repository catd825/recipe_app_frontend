import { useState } from 'react'
import { useRouter } from 'next/router'
import { CURRENT_USER } from '../CURRENT_USER'

export default function EditForm ({ data, setEditState }) {

    //Pre-populate input fields with previous data
    const formObj = {
        recipe_creator_id: CURRENT_USER, //only for testing before auth fully implemented
        title: data.title,
        ingredients: data.ingredients,
        instructions: data.instructions,
        img_url: data.img_url,
        description: data.description
    }

    //Set initial formData state to object to edit
    const [formData, setFormData] = useState(formObj)
    //Set state to capture only changes made
    const changeHandler = (e) => {
        setFormData({
            ...formData, 
            [e.target.name]: e.target.value
        })
        // console.log(e.target.value)
    }

    const submitHelper = (e) => {
        e.preventDefault()
        submitHandler()
    }

    //Define router and helper function to refresh upon edit submission
    const router = useRouter();
    const refreshData = () => {
        router.replace(router.asPath);
    }

    const submitHandler = async () => {
        const configObj = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(formData)
        }

        const res = await fetch(`http://localhost:3000/recipes/${data.id}`, configObj)
        // const recipe = await res.json();
        //Toggle edit page to disappear
        setEditState(null)
        
        //Invoke refresh helper
        if (res.status < 300) {
            refreshData();
        }
    }
    
    return (
        <>
        <div style= {{ padding: '2em'}}>
            <form onSubmit={submitHelper}>
                <label>Recipe Name</label>
                <input onChange={changeHandler} value={formData.title} type="text" name="title"></input>
                    <br/>
                <label>Ingredients</label>
                <input onChange={changeHandler} value={formData.ingredients} type="text" name="ingredients"></input>
                    <br/>
                <label>Instructions</label>
                <input onChange={changeHandler} value={formData.instructions} type="text" name="instructions"></input>
                    <br/>
                <label>Add Photo</label>
                <input onChange={changeHandler} value={formData.img_url} type="text" name="img_url"></input>
                    <br/>
                <label>Description</label>
                <input onChange={changeHandler} value={formData.description} type="text" name="description"></input>
                    <br/>
                <button type="submit">Submit</button>
            </form>
        </div>
        </>
    )
}