import RecipeItem from './RecipeItem'
import SearchBar from './SearchBar'
import { CURRENT_USER } from '../current_user'
import { useState } from 'react'

export default function RecipeList ({ recipes, favorites, currentSelection }) {
    const current_user = CURRENT_USER
    const [searchValue, setSearchValue] = useState('')

    const searchHandler = (e) => {
      setSearchValue(e.target.value);
    };
  
    const searchRecipes = () => {
        return recipes.filter(recipe => recipe.title.toLowerCase().includes(searchValue.toLowerCase()))
    }

    const searchFavorites = () => {
        return favorites.filter(recipe => recipe.recipe_name.toLowerCase().includes(searchValue.toLowerCase()))
    }

    //filter out recipes the user has created
    const myCreatedRecipes = () => {
        return searchRecipes().filter(recipe => recipe.recipe_creator_id === current_user)
    }

    //filter out recipes that i have liked
    const myFavoriteRecipes = () => {
        return searchFavorites().filter(favorite => favorite.recipe_liker_id === current_user)
    }

    //map recipe_ids i have liked
    const mapFavoriteRecipeIds = () => {
        return myFavoriteRecipes().map(favorite => favorite.recipe_id)
    }

    const selection = currentSelection.state
    //render conditions based on selection
    const recipeCard = () => {
        if(selection === 'created') {
            return myCreatedRecipes().map(recipe => 
                <RecipeItem key={recipe.id} recipes={recipe} />)
        } else if (selection === 'all' || selection === undefined) {
            return searchRecipes().map(recipe => 
                <RecipeItem key={recipe.id} recipes={recipe} />)
        } else if (selection === 'saved') {
            return recipes.map(recipe => {
                if(mapFavoriteRecipeIds().includes(recipe.id)){
                    return <RecipeItem key={recipe.id} recipes={recipe} />
                } else {
                    return null
                }
            })
        }
    }


    return (
        <div style={{textAlign: 'center'}}>
            <SearchBar searchHandler={searchHandler} searchValue={searchValue} />
            <div className="cards">
                {recipeCard()}
            </div>
        </div>
    )
}
