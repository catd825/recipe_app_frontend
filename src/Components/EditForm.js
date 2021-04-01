import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { CURRENT_USER } from '../current_user'

export default function EditForm ({data}) {

    const current_user = CURRENT_USER
    const router = useRouter()
/*
    const [recipe, setRecipes] = useState({});
    const recipeUrl = `http://localhost:3000/recipes/${data.id}`  
    
    useEffect( () => {
        const fetchRecipes = async () => {
            const response = await fetch(recipeUrl)
            const data = await response.json();
            setRecipes(data);
        };
        fetchRecipes();
      }, []);
    //   console.log(recipe)
    
    */
    const formObj = {
        recipe_creator_id: current_user, //only for testing before auth fully implemented
        title: data.title,
        ingredients: data.ingredients,
        instructions: data.instructions,
        img_url: data.img_url,
        description: data.description
    }
    
    // debugger

    const [formData, setFormData] = useState(formObj)

    const changeHandler = (e) => {
        setFormData({
            ...formData, 
            [e.target.name]: e.target.value
        })
        console.log(e.target.value)
    }

    const submitHelper = (e) => {
        e.preventDefault()
        submitHandler()
    }

    const submitHandler = () => {
        const configObj = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(formData)
        }

            fetch(`http://localhost:3000/recipes/${data.id}`, configObj)
            .then(res => res.json())
            .then(console.log)
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