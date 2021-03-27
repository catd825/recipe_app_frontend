import { useState, useEffect } from 'react'
import SavedRecipeCard from '../Components/SavedRecipeCard'

export default function MySavedRecipes () {
    const [savedRecipes, setSavedRecipes]  = useState([]);
    const savedRecipeUrl = 'http://localhost:3000/favorite_recipes'

    useEffect ( () => {
        const fetchSavedRecipes = async () => {
            const response = await fetch(savedRecipeUrl)
            const json = await response.json()
            setSavedRecipes(json)
        }
        fetchSavedRecipes();
    }, []);
    
    const savedRecipeCard = () => {
        return savedRecipes.map((recipes => <SavedRecipeCard key={recipes.id} data={recipes} />))
    }
    
    console.log(savedRecipes)
    return (
        <>
            {savedRecipeCard()}
        </>
    )
}