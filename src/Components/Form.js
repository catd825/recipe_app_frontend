import { useState } from 'react'
import { CURRENT_USER } from '../current_user'
import { useRouter } from 'next/router'
import { useRecipeContext } from '../RecipeContext/state'

export default function Form ({ recipe, setEditState, editHelper, formType }) {
    console.log(formType)
    const {recipes, setRecipes} = useRecipeContext();
    const router = useRouter()

    const current_user = CURRENT_USER
    //Pre-populate input fields with previous data
    const formObj = {
        id: recipe?.id || '',
        recipe_creator_id: current_user, //only for testing before auth fully implemented
        title: recipe?.title || '',
        ingredients: recipe?.ingredients || '',
        instructions: recipe?.instructions || '',
        img_url: recipe?.img_url || '',
        description: recipe?.description || ''
    }

    //Set initial formData state to object to edit
    const [formData, setFormData] = useState(formObj)
    //Set state to capture only changes made
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


    const submitHandler = async () => {
        if(formType === 'Edit'){
            const configObj = {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(formData)
            }

            const res = await fetch(`http://localhost:3000/recipes/${recipe.id}`, configObj)
            const data = await res.json();
            //Toggle edit page to disappear
            setEditState(null)
            editHelper(formData)

            const updatedRecipeArray = recipes.filter(recipe => recipe.id !== data.id)

            setRecipes([
                ...updatedRecipeArray, data
            ].sort())
        } else if (formType === 'Create'){
            const configObj = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(formData)
            }
    
                const res = await fetch('http://localhost:3000/recipes', configObj)
                const data = await res.json()
    
                const newRecipeArray = [...recipes, data]
                setRecipes(newRecipeArray)
                router.push('/recipes');
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