import RecipeItem from './RecipeItem'
import { CURRENT_USER } from '../current_user'

export default function RecipeList ({ recipes, favorites, selection }) {
    const saved_by = favorites.recipe_liker_id
    const current_user = CURRENT_USER

    const myCreatedRecipes = () => {
        return recipes.filter(recipe => recipe.recipe_creator_id === current_user)
    }

    const myFavoriteRecipes = () => {
        return favorites.filter(favorite => favorite.recipe_liker_id === current_user)
    }


    const recipeCard = () => {
        if(selection.selection === 'created') {
            return myCreatedRecipes().map(recipe => 
                <RecipeItem key={recipe.id} favorites={favorites} recipes={recipe} />)
        } else if (selection.selection === 'all' || selection.selection === undefined) {
            return recipes.map(recipe => 
                <RecipeItem key={recipe.id} favorites={favorites} recipes={recipe} />)
        } else if (selection.selection === 'saved') {
            return myFavoriteRecipes().map(favorite => 
                //pick up here!
                <RecipeItem key={favorite.id} favorites={favorite} recipes={favorite} />)
        }
    }

    // debugger
    console.log(myFavoriteRecipes())

    return (
        <>
            {recipeCard()}
        </>
    )
}

    /*
    //parse recipe cards
    const recipeCard = () => {
        // if (myRecipes === true) {
        //     return myCreatedRecipes().map(recipe => 
        //         <RecipeItem key={recipe.id} favorites={favorites} recipes={recipe} />)
        // } else if (myRecipes !== true) {
            return recipes.map(recipe => 
                <RecipeItem key={recipe.id} favorites={favorites} recipes={recipe} />)
        // }
    }
    */  