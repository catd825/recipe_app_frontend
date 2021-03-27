import { useState } from 'react'

export default function Form () {
    const formObj = {
        id: 13, //only for testing
        title: '',
        ingredients: '',
        instructions: '',
        img_url: ''
    }

    const [formData, setFormData] = useState(formObj)
    
    const changeHandler = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
        console.log(e.target.value)
    }

    const submitHelper = (e) => {
        e.preventDefault()
        // console.log('submitting')
        submitHandler()
    }

    const submitHandler = (obj) => {
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
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}