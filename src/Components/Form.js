import { useState } from 'react'
import { CURRENT_USER } from '../current_user'

export default function Form () {
    const formObj = {
        recipe_creator_id: CURRENT_USER, //only for testing before auth fully implemented
        title: '',
        ingredients: '',
        instructions: '',
        img_url: '',
        description: ''
    }

    const [formData, setFormData] = useState(formObj)
    
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

    const submitHandler = () => {
        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(formData)
        }

            fetch('http://localhost:3000/recipes', configObj)
            .then(res => res.json())
            .then(console.log)
    }
    
    return (
        <div>
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
    )
}