import { useState, useEffect } from 'react'
import MyRecipeItem from '../Components/MyRecipeItem'
import { CURRENT_USER } from '../current_user'

export default function MyRecipesContainer () {
    const current_user = CURRENT_USER

    const [myRecipes, setMyRecipes] = useState([])
    const recipeUrl = 'http://localhost:3000/recipes'

    useEffect( () => {
        const fetchMyRecipes = async () => {
            const response = await fetch(recipeUrl)
            const data = await response.json();

            setMyRecipes(data)
        };
        fetchMyRecipes();
    }, []);

    const myRecipeCard = () => {
        return myRecipes.map(recipe => <MyRecipeItem key={recipe.id} data={recipe} />)
    }
    console.log(myRecipes)
    return(
        <>
            Recipes created by you, {current_user}
            {myRecipeCard()}
        </>
    )
}