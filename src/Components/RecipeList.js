import RecipeItem from './RecipeItem'
import { CURRENT_USER } from '../current_user'

export default function RecipeList ({ recipes, favorites, myRecipes }) {
    const current_user = CURRENT_USER

    const filterMyRecipes = () => {
        return recipes.filter(recipe => recipe.recipe_creator_id === current_user)
    }

    //parse recipe cards
    const recipeCard = () => {
        if (myRecipes === true) {
            return filterMyRecipes().map(recipe => 
                <RecipeItem key={recipe.id} favorites={favorites} recipes={recipe} />)
        } else if (myRecipes !== true) {
            return recipes.map(recipe => 
                <RecipeItem key={recipe.id} favorites={favorites} recipes={recipe} />)
        }
    }

    return (
        <>
            {recipeCard()}
        </>
        
    )


}